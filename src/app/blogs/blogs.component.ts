import { Component, OnInit } from '@angular/core';
import { faCommentAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';

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

  //Blogs$ is an array of objects, each object contains the data of a blog.
  //Since is is an observable the content will automaically update when data in the db updates.
  //This can cause uneccessary traffic but since blog content wont be changing much it should't impact performance or cost too much.
  //With the data being an observable allows for more scalability and more features like a live update of how many likes/shares it recieves
  blogs$: Observable<Blog[]>; 

  //The following input is user data used to filter blogs$
  fromDate: NgbDate | null;
  toDate: NgbDate | null;
  searchText: string;
  tags: {
    gm: boolean,
    gbm: boolean,
    projects: boolean,
    outreach: boolean,
    fundraisers: boolean
  };

  hoveredDate: NgbDate | null = null;

  constructor(library: FaIconLibrary, private db: AngularFirestore, private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
    
    this.tags = {
      gm: true,
      gbm: true,
      projects: true,
      outreach: true,
      fundraisers: true
    };

    library.addIcons(faCommentAlt, faPencilAlt);
    console.log(library);
    // The code below will query all the blogs and return id + data
    //  This method is poorly optimized and not scallable. Later we should try only pulling needed documents.
    this.blogs$ = this.db.collection<Blog>('blogs') 
    .snapshotChanges().pipe(
      map(changes => { return changes.map(a => {
        const data = a.payload.doc.data() as Blog;
        const id = a.payload.doc.id;
        return { id, ...data }; //the object that contains blog data also has an element named "id" that has the doccument name of the blog
      })})
    );
  }

  ngOnInit(): void {
    this.blogs$.subscribe(data => console.log(data)); //check the console for blogs data whenever the page loads or data updates
  }

  /****** DATE PICKER FUNCTIONS ******/
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

  /************ FILTER FUNCTIONS ***********/
  submitFilters() {
    //This function can be used to filter through blogs$ and alter it to a new object to fit the parameters.
    //This method will only change the data displayed after "submit" is pressed.

    //Another method is to filter the *ngFor
    //I believe this will make the data change as the user inputs data.
    //A tutorial on this can be found here: https://javascript.plainenglish.io/how-to-apply-filters-to-ngfor-in-angular-dc7c1b608712
    console.log("searchtext: " + this.searchText);
    console.log("tags: ");
    console.log(this.tags);
    console.log("From: ");
    console.log(this.fromDate)
    console.log("To: ");
    console.log(this.toDate)
  }
}
