import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Post} from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
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

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit()');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked()');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit()');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked()');
  }

  ngOnDestroy(): void {
    console.log(' ngOnDestroy()');
  }

  removePost() {
    this.onRemove.emit(this.post.getId());
  }
}
