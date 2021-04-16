import { Component, OnInit } from '@angular/core';
import { faCommentAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {NgbDate, NgbCalendar, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { database } from 'firebase';

import {Blog} from '../blog/blog.component';

// export interface Blog {
//   title: string;
//   excerpt: string;
//   img: string;
//   content: string;
//   author: string;
//   date: NgbDate;
//   tags: Set<string>;
// }

interface Tags {
	gm: boolean;
	gbm: boolean;
	projects: boolean;
	outreach: boolean;
	fundraisers: boolean;
};

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})

export class BlogsComponent implements OnInit {

  //Blogs$ is an array of objects, each object contains the data of a blog.
  //Since is is an observable the content will automaically update when data in the db updates.
  //This can cause unneccessary traffic but since blog content wont be changing much it should't impact performance or cost too much.
  //With the data being an observable allows for more scalability and more features like a live update of how many likes/shares it recieves
  blogs$: Observable<Blog[]>;
  blogs: Blog[];  // Array of Blog objects retrieved from blogs$

  //The following input is user data used to filter blogs$
  fromDate: NgbDate | null;
  toDate: NgbDate | null;

  // Strings for searching
  searchText: string;
  searchTags: string;

  hoveredDate: NgbDate | null = null;

  constructor(library: FaIconLibrary, private db: AngularFirestore, private calendar: NgbCalendar, public formatter: NgbDateParserFormatter) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);

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
    this.blogs$.subscribe(blogs => this.blogs = blogs);
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
    return this.fromDate && this.toDate && date >= this.fromDate && date <= this.toDate;
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || (this.toDate && date.equals(this.toDate)) || this.isInside(date) || this.isHovered(date);
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed)) ? NgbDate.from(parsed) : currentValue;
  }

  /************ FILTER FUNCTIONS ***********/

  filterBySearchText(blogs: Blog[], searchText: string): Blog[] {
    let searchTextLC = searchText.toLowerCase();
    return blogs.filter(
      blog => blog.title?.toLowerCase().includes(searchTextLC) ||
      blog.author?.toLowerCase().includes(searchTextLC) ||
      blog.excerpt?.toLowerCase().includes(searchTextLC) || 
      blog.content?.toLowerCase().includes(searchTextLC));
  }

  filterByTags(blogs: Blog[], searchTags: string): Blog[] {
    if (searchTags.length == 0) { return Array<Blog>(0); }

    let tags: Set<string> = new Set<string>(searchTags.split(","));
    console.log("tags:");
    console.log(tags);

    return blogs.filter(blog => Array.from(blog.tags).some(tag => tags.has(tag)));
  }

  filterByDateRange(blogs: Blog[]): Blog[] {
    // let fDate = new Date(this.fromDate.year, this.fromDate.month - 1, this.fromDate.day);
    // let tDate = new Date(this.toDate.year, this.toDate.month - 1, this.toDate.day);
    // console.log("fDate: " + fDate);
    // console.log("tDate: " + tDate);

    let fromDateSeconds = Math.round((new Date(this.fromDate.year, this.fromDate.month - 1, this.fromDate.day)).getTime() / 1000)
    let toDateSeconds = Math.round((new Date(this.toDate.year, this.toDate.month - 1, this.toDate.day)).getTime() / 1000)
  
    console.log("fromDate seconds: " + fromDateSeconds);
    console.log("toDate seconds: " + toDateSeconds);

    console.log("all dates (" + blogs.length + "):");
    blogs.forEach(blog => console.log(blog.title + " seconds: " + (blog.date["seconds"] - 12 * 60 * 60)));
  
    let filtered_blogs = blogs.filter(blog => (blog.date["seconds"] - 12 * 60 * 60) >= fromDateSeconds && (blog.date["seconds"] - 12 * 60 * 60) <= toDateSeconds);
    
    console.log("filtered dates (" + filtered_blogs.length + "):");
    filtered_blogs.forEach(blog => console.log(blog.title + " seconds: " + (blog.date["seconds"] - 12 * 60 * 60)));

    return filtered_blogs;
  }

  submitFilters() {
    //This function can be used to filter through blogs$ and alter it to a new object to fit the parameters.
    //This method will only change the data displayed after "submit" is pressed.

    //Another method is to filter the *ngFor
    //I believe this will make the data change as the user inputs data.
    //A tutorial on this can be found here: https://javascript.plainenglish.io/how-to-apply-filters-to-ngfor-in-angular-dc7c1b608712


    let filtered_blogs = this.blogs;

    console.log("initial blogs:")
    console.log(this.blogs);
    console.log(Array.from(this.blogs));
    console.log(Array.from(this.blogs.keys()));
    console.log(Array.from(this.blogs.values()));
    console.log(this.blogs["0"].date.seconds);

    // Filter by searchText
    if (this.searchText) {
      console.log("searchtext: " + this.searchText);
      filtered_blogs = this.filterBySearchText(filtered_blogs, this.searchText);
      console.log("filtered blogs:")
      console.log(filtered_blogs);
    } else { console.log("No search text entered."); }

    // Filter by tags
    if (this.searchTags) {
      console.log("tags: " + this.searchTags);
      filtered_blogs = this.filterByTags(filtered_blogs, this.searchTags);
      console.log("filtered blogs:")
      console.log(filtered_blogs);
    } else { console.log("No search tags entered."); }

    if(this.fromDate && this.toDate) {
      console.log("From " + (new Date(this.fromDate.year, this.fromDate.month - 1, this.fromDate.day)).toString() + 
      "To " + (new Date(this.toDate.year, this.toDate.month - 1, this.toDate.day)).toString());
      filtered_blogs = this.filterByDateRange(filtered_blogs);
      console.log("filtered blogs: ");
      console.log(filtered_blogs);
    } else { console.log("No date range entered."); }

  }
}
