import {Component, OnInit, Input, ElementRef, ContentChild, OnChanges, SimpleChanges, DoCheck, OnDestroy,
  Output, EventEmitter} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input() post: Post;
  @ContentChild('info', {static: true}) infoRef: ElementRef;
  @Output() onRemove = new EventEmitter<number>();

  constructor() {
    console.log('constructor()');
  }

  ngOnInit() {
    console.log('ngOnInit()');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges(changes: SimpleChanges)', changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck()');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy()');
  }

  removePost() {
    this.onRemove.emit(this.post.id);
  }
}
