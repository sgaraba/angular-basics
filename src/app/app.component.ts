import { Component } from '@angular/core';

export class Post {
  title: string;
  text: string;
  constructor(title: string, text: string) {
    this.title = title;
    this.text = text;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  e: number = Math.E;
  str: string = 'hello world';
  date: Date = new Date();
  float = 0.42;
  obj = {
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4
      }
    }
  };

  search = '';
  searchFiled = 'title';

  posts: Post[] = [
    new Post("Beer", "The best beer in the world,"),
    new Post("Bread", "The best bread in the world,"),
    new Post("JavaScript", "The best language in the world,")
  ];

  addPost() {
    this.posts.unshift(new Post("Angular 8", "Angular best frontend platform."));
  }
}

