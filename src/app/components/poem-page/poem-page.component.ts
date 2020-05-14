import { PoemService } from '../poetry-list-page/poems/services/poems.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NavbarService } from '../shared/navbar.service';
import { Poem } from '../poetry-list-page/poems/services/poem.model';

@Component({
  selector: 'app-poem-page',
  templateUrl: './poem-page.component.html',
  styleUrls: ['./poem-page.component.scss']
})
export class PoemPageComponent implements OnInit {
  poem$: Observable<Poem>;

  constructor(public navbarService: NavbarService,
              public route: ActivatedRoute,
              public poemService: PoemService) { }

  ngOnInit(): void {
    this.navbarService.show();
    this.poem$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.poemService.getPoem(params.get('poem_title')))
    );
  }
}
