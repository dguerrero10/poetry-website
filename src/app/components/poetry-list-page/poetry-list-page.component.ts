
import { PoemService } from './poems/services/poems.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { NavbarService } from '../shared/navbar.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Poem } from './poems/services/poem.model';

@Component({
  selector: 'app-poetry-list-page',
  templateUrl: './poetry-list-page.component.html',
  styleUrls: ['./poetry-list-page.component.scss']
})
export class PoetryListPageComponent implements OnInit {
  poem_title: string;
  secret_poem_id: string;
  chelseaLoggedIn: boolean;
  amandaLoggedIn: boolean;

  poems$: Observable<Poem[]>;
  secretPoems$: Observable<Poem[]>;

  constructor(private authService: AuthService,
              public navbarService: NavbarService,
              public route: ActivatedRoute,
              public poemService: PoemService
              ) { }

  ngOnInit(): void {
    this.navbarService.show();
    this.poems$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.poem_title = params.get('poem_title');
        return this.poemService.getPoems();
      })
    );
    if (this.authService._chelseaAuthenticated === true) {
      this.chelseaLoggedIn = true;

      this.secretPoems$ = this.route.paramMap.pipe(
        switchMap(params => {
          this.secret_poem_id = params.get('secret_poem_id')
          return this.poemService.getSecretPoems();
        })
      );
      
    }
    if (this.authService._amandaAuthenticated === true) {
      this.amandaLoggedIn = true;
    }
  }
}
