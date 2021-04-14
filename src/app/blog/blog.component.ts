import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
// listen to changes in the router
import { ActivatedRoute } from '@angular/router';
import { } from 'firebase/firestore'
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

export interface Blog {
  title: string;
  excerpt: string;
  img: string;
  content: string;
  author: string;
  date: NgbDate;
  tags: Set<string>;
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

  constructor(
    private db: AngularFirestore,
    private route: ActivatedRoute
  ) {
    // set 'id' when page loads from route params.id
    this.route.params.subscribe(params => this.id = params.id)
  }

  ngOnInit() {
    let d = new Date();
    this.blog = {
      title: "",
      excerpt: "",
      img: "",
      content: "",
      author: "",
      date: new NgbDate(d.getFullYear(), d.getMonth(), d.getDate()),
      tags: new Set<string>()
    }
    this.newBlog = true;
    // query Firestore using 'id' when page loads
    this.db.doc('blogs/' + this.id).ref.get().then(<Blog>(doc) => {
      if (doc.exists) {
        console.log(doc.data());
        this.blog = doc.data();
        this.newBlog = false; //change to false if we find the id.
      } else {
        console.log("There is no document!"); //keep newBlog true. This happens if blogs/new is the current url or the id doesnt exist.
      }
    }).catch(function (error) {
      console.log("There was an error getting your document:", error);
    });
  }

  submit() {
    if(this.newBlog){
      console.log("Creating new post...")
    }
    else {
      console.log("Updating old post...")
    }
  }
}
