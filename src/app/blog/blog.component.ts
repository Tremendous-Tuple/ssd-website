import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
// listen to changes in the router
import { ActivatedRoute } from '@angular/router';
import { } from 'firebase/firestore';

export interface Blog {
  title: string;
  excerpt: string;
  img: string;
  content: string;
  author: string;
  date: {};
  tags: String[];
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss', '../blogs/blogs.component.scss']
})
export class BlogComponent implements OnInit {
  blog: Blog;
  id: String;   // will hold id passed through route (:id) or "new" if creating new blog
  newBlog: boolean;
  tagsInput: String;

  constructor(
    private db: AngularFirestore,
    private route: ActivatedRoute,
    public router: Router
  ) {
    // set 'id' when page loads from route params.id
    this.route.params.subscribe(params => this.id = params.id)
  }

  ngOnInit() {
    this.blog = {
      title: '',
      excerpt: '',
      img: '',
      content: '',
      author: '',
      date: {},
      tags: ['']
    };
    this.tagsInput = '';
    this.newBlog = true;
    // query Firestore using 'id' when page loads
    this.db.doc('blogs/' + this.id).ref.get().then(<Blog>(doc) => {
      if (doc.exists) {
        // console.log(doc.data());
        this.blog = doc.data();
        this.newBlog = false; //change to false if we find the id.

        let i = 0;
        for (const tag of this.blog.tags) {
          let delimeter = '';
          if (i != 0) {
            delimeter = ', ';
          }
          i++;
          this.tagsInput = this.tagsInput.concat(delimeter, tag.toString());
        }
      } else {
        console.log('There is no document!'); //keep newBlog true. This happens if blogs/new is the current url or the id doesnt exist.
      }
    });
    // .catch(function (error) {
    //   console.log("There was an error getting your document:", error);
    // });
  }

  onImageUpload(event) {
    resizeImage({
      file: event.target.files[0],
      maxSize: 500
    }).then(<Blob>(resizedImage) => {
      // console.log("upload resized image")

      const file = resizedImage;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.blog.img = reader.result.toString();
        // console.log("image uplaoded successfully");
      };
      reader.onerror = function (error) {
        // console.log('Error: ', error);
      };
    }).catch(function (err) {
      console.error(err);
    });
  }

  updateBlog() {
    if (this.newBlog) {
      // console.log("Creating new post...")
      const blogsRef = this.db.collection('blogs');
      const blogData: Blog = this.blog;
      this.blog.date = new Date();
      // console.log(JSON.parse(localStorage.getItem('user')))
      this.blog.author = JSON.parse(localStorage.getItem('user')).displayName;
      return blogsRef.add(blogData);
    }
    else {
      // console.log("Updating old post...")
      const blogsRef = this.db.doc('blogs/' + this.id);
      const blogData: Blog = this.blog;
      return blogsRef.set(blogData, {
        merge: true
      });
    }
  }

  submit() {
    this.blog.tags = this.tagsInput.split(',');
    for (let i = 0; i < this.blog.tags.length; i++) {
      this.blog.tags[i] = this.blog.tags[i].trim();
    }
    this.updateBlog();
    this.router.navigate(['blogs']);
  }

  delete() {
    this.db.doc('blogs/' + this.id).delete().then(() => {
      // console.log("deleted post")
    })
      .catch((err) => {
        // console.log(err);
      });
    this.router.navigate(['blogs']);
  }
}

interface IResizeImageOptions { //https://stackoverflow.com/a/39235724
  maxSize: number;
  file: File;
}
const resizeImage = (settings: IResizeImageOptions) => {
  const file = settings.file;
  const maxSize = settings.maxSize;
  const reader = new FileReader();
  const image = new Image();
  const canvas = document.createElement('canvas');
  const dataURItoBlob = (dataURI: string) => {
    const bytes = dataURI.split(',')[0].indexOf('base64') >= 0 ?
      atob(dataURI.split(',')[1]) :
      unescape(dataURI.split(',')[1]);
    const mime = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const max = bytes.length;
    const ia = new Uint8Array(max);
    for (let i = 0; i < max; i++) ia[i] = bytes.charCodeAt(i);
    return new Blob([ia], { type: mime });
  };
  const resize = () => {
    let width = image.width;
    let height = image.height;

    if (width > height) {
      if (width > maxSize) {
        height *= maxSize / width;
        width = maxSize;
      }
    } else {
      if (height > maxSize) {
        width *= maxSize / height;
        height = maxSize;
      }
    }

    canvas.width = width;
    canvas.height = height;
    canvas.getContext('2d').drawImage(image, 0, 0, width, height);
    const dataUrl = canvas.toDataURL('image/jpeg');
    return dataURItoBlob(dataUrl);
  };

  return new Promise((ok, no) => {
    if (!file.type.match(/image.*/)) {
      no(new Error('Not an image'));
      return;
    }

    reader.onload = (readerEvent: any) => {
      image.onload = () => ok(resize());
      image.src = readerEvent.target.result;
    };
    reader.readAsDataURL(file);
  });
};
