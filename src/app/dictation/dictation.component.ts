import { Component, Input, OnInit } from '@angular/core';

@Component({
  templateUrl: './dictation.component.html',
  styleUrls: ['./dictation.component.css'],
})
export class DictationComponent implements OnInit {
  @Input() title?: string;
  @Input() src?: string;
  @Input() text?: string;
  @Input('fontsize') fontSize?: string;
  @Input('lineheight') lineHeight?: string;
  isShowingText = false;

  constructor() {}

  ngOnInit(): void {}
}
