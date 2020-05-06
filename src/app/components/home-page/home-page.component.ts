import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  typewriter_text: string = `"How I can get rid of this worm in me, the one 
  that’s always hungry."
  - An Answer`;
  typewriter_display: string = "";

  constructor() { }

  ngOnInit(): void {
    this.typingCallback(this);
  }

  typingCallback(txt) {
    let total_length = txt.typewriter_text.length;
    let current_length = txt.typewriter_display.length;
    if (current_length < total_length) {
      txt.typewriter_display += txt.typewriter_text[current_length];
      setTimeout(txt.typingCallback, 100, txt);
    }  
  }
}
