import { Component, OnInit } from '@angular/core';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Blog {
  title: string;
  excerpt: string;
  img: string;
  content: string;
  author: string;
  date: {};
  tags: [string];
}

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})

export class BlogsComponent implements OnInit {

  blogs$: Observable<Blog[]>;
  constructor(library: FaIconLibrary, private db: AngularFirestore) {
    library.addIcons(faCommentAlt);
    console.log(library);

    // The code below will query all the blogs
    // and return id + data (e.g. title, description, img)
    this.blogs$ = this.db.collection<Blog>('articles')
    .snapshotChanges().pipe(
      map(changes => { return changes.map(a => {
        const data = a.payload.doc.data() as Blog;
        const id = a.payload.doc.id;
        return { id, ...data };
      })})
    );
  }

  ngOnInit(): void {
    this.blogs$.subscribe(data => console.log(data));
  }

}
