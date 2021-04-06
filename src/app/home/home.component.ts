import { Component, OnInit } from '@angular/core';

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  blogs$: Observable<Blog[]>; 

  constructor(private db: AngularFirestore) {
    this.blogs$ = this.db.collection<Blog>('blogs', ref => ref.orderBy('date', 'desc').limit(3)) 
    .snapshotChanges().pipe(
      map(changes => { return changes.map(a => {
        const data = a.payload.doc.data() as Blog;
        const id = a.payload.doc.id;
        return { id, ...data }; //the object that contains blog data also has an element named "id" that has the doccument name of the blog
      })})
    );
  }

  ngOnInit(): void {
    this.blogs$.subscribe(data => console.log(data));
  }

}
