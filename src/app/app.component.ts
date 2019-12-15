import {Component} from '@angular/core';

export class Post {
  private id?: number;
  private title: string;
  private text: string;

  constructor(id: number, title: string, text: string) {
    this.id = id;
    this.title = title;
    this.text = text;
  }

  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
  }

  getTitle(): string {
    return this.title;
  }

  setTitle(value: string) {
    this.title = value;
  }

  getText(): string {
    return this.text;
  }

  setText(value: string) {
    this.text = value;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  posts: Post[] = [
    new Post(1, 'Cats', 'Kuzya is a crazy cat!'),
    new Post(2, 'Dogs', 'Kuzya is not a dog. It is a crazy cat!'),
    new Post(3, 'Post 3', 'Text Text Text 3')
  ];

  updatePost(post: Post) {
    console.log('Post :', post);
    this.posts.unshift(post);
  }

  removePost(id: number) {
    console.log('Id to remove = ', id);
    this.posts = this.posts.filter(p => p.getId() !== id);
  }
}
