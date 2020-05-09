import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../shared/navbar.service';

@Component({
  selector: 'app-n2edmhxuyweo2sl2w5no6',
  templateUrl: './n2edmhxuyweo2sl2w5no6.component.html',
  styleUrls: ['./n2edmhxuyweo2sl2w5no6.component.scss']
})
export class N2edmhxuyweo2sl2w5no6Component implements OnInit {
  typewriter_text: string = `"These violent delights have violent ends" We always knew that.
  /nprrb378q6jm5mzfcx7z6`;
  typewriter_display: string = "";

  constructor(public navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarService.hide();
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
