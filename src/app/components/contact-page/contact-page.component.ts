import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  typewriter_text: string = `Thank you for visiting my site. Please visit again. I'm sure you missed some subtext.`;
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
    if (current_length == total_length) {
      setTimeout(() => {
        txt.typewriter_text = "";
        txt.typewriter_display = `Just remember, "These violent delights have violent ends"`
      }, 3000)
    }
  }
}
