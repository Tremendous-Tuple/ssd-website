import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';

import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ArticleComponent,
    HomeComponent,
    BlogsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
