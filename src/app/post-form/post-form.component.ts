import {Component, OnInit, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>();

  @ViewChild('titleInput', {static: false}) inputRef: ElementRef;

  title: string;
  text: string;
  idCounter: number;

  constructor() {
    this.idCounter = 3;
  }

  ngOnInit() {
  }

  addPost() {
    if (this.title.trim() && this.text.trim()) {
      const post: Post = new Post(++this.idCounter, this.title, this.text);
      this.onAdd.emit(post);
      this.title = '';
      this.text = '';
    }
  }

  focusTitle() {
    this.inputRef.nativeElement.focus();
  }
}
