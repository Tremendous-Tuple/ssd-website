import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
// listen to changes in the router
import { ActivatedRoute } from '@angular/router';

// define Article type
export interface Article {
  title: string;
  img: string;
  description: string;
}

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
}) 

export class ArticleComponent implements OnInit {
  article$: Observable<Article>;   // Observable of type Article
  id: String;   // will hold id passed through route (:id)
  constructor(
    private db: AngularFirestore,
    private route: ActivatedRoute
  ) {
    // set 'id' when page loads from route params.id
    this.route.params.subscribe(params => this.id = params.id)
  }

  ngOnInit() {
    // query Firestore using 'id' when page loads
    this.article$ = this.db
        .doc<Article>('articles/' + this.id)
        .valueChanges();
  }

}
