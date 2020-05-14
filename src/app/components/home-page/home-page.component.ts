import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../shared/navbar.service';
import { AuthService } from 'src/app/auth/auth.service';
import { PoemService } from '../poetry-list-page/poems/services/poems.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { Poem } from '../poetry-list-page/poems/services/poem.model';
import { GenerateIdService } from '../hidden-pages/services/generate-id.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  featuredPoems$: Observable<Poem[]>;
  poem_title: string;
  currentUrl: string;
  secretUrl = this.generateIdService.generatePageId();

  poem_excerpts = [
    `"How I can get rid of this worm in me, the one 
      that’s always hungry."
      - An Answer`,
    `"I’ve forgotten many, though they had kissed 
      every synapse that recalls skin and muscle."
      - Sex`,
    `"what pours from the wash bowl
    of the moon 
    the milk of your skin..."
      - In You`,
     '/' + this.secretUrl
  ];

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array[0]
  }

  typewriter_text: string = this.shuffleArray(this.poem_excerpts);
  typewriter_display: string = "";

  constructor(private authService: AuthService,
    public poemService: PoemService,
    public route: ActivatedRoute,
    public navbarService: NavbarService,
    public generateIdService: GenerateIdService) { }

  ngOnInit(): void {
    this.navbarService.show();
    this.featuredPoems$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.poem_title = params.get('poem_title');
        return this.poemService.getFeaturedPoems();
      })
    );
    if (this.authService.amandaIsAuthenticated === true) {
      this.typewriter_text = "Hi, Chikky."
    }
    if (this.authService.chelseaIsAuthenticated === true) {
      this.typewriter_text = "Mi amor. Como te he extrañado."
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
  }
}
