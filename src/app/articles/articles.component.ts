import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Article {
  title: string;
  img: string;
  description: string;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

export class ArticlesComponent implements OnInit {
  // Observable which will hold an array of Article
  articles$: Observable<Article[]>;
  constructor(private db: AngularFirestore) {
  // The code below will query all the articles
  // and return id + data (e.g. title, description, img)
    this.articles$ = this.db.collection<Article>('articles')
      .snapshotChanges().pipe(
        map(changes => { return changes.map(a => {
          const data = a.payload.doc.data() as Article;
          const id = a.payload.doc.id;
          return { id, ...data };
        })})
      
      );
  }
  ngOnInit() { 
    this.articles$.subscribe(data => console.log(data));
  }

}