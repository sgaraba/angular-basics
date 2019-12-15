import {Component} from '@angular/core';

export interface Post {
  id?: number;
  title: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {id: 1, title: 'Cats', text: 'Kuzya is a crazy cat!'},
    {id: 2, title: 'Dogs', text: 'Kuzya is not a dog. It is a crazy cat!'},
    {id: 3, title: 'Post 3', text: 'Text Text Text 3'}
  ];
}
