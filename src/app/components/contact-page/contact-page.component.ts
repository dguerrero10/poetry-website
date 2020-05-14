import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../shared/navbar.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  loggedIn: boolean;
  typewriter_text: string = `Thank you for visiting my site. Please visit again. I'm sure you missed some subtext.`;
  typewriter_display: string = "";

  constructor(private authService: AuthService,
              public navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarService.show();
    if (this.authService._chelseaAuthenticated === true || this.authService._amandaAuthenticated) {
      this.loggedIn = true;
      this.typewriter_text = "You know how to contact me."
    }
    this.typingCallback(this);
  }

  typingCallback(txt) {
    let total_length = txt.typewriter_text.length;
    let current_length = txt.typewriter_display.length;
    if (current_length < total_length) {
      txt.typewriter_display += txt.typewriter_text[current_length];
      setTimeout(txt.typingCallback, 100, txt);
    }
    if (current_length == total_length && this.loggedIn === false) {
      setTimeout(() => {
        txt.typewriter_text = "";
        txt.typewriter_display = `"These violent delights have violent ends"`
      }, 3000)
    }
  }
}
