import { PoemService } from '../poetry-list-page/poems/poems.service';
import { Poem } from './../poetry-list-page/poems/poem.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-poem-page',
  templateUrl: './poem-page.component.html',
  styleUrls: ['./poem-page.component.scss']
})
export class PoemPageComponent implements OnInit {
  poem$: Observable<Poem>; 

  constructor(public route: ActivatedRoute,
              public poemsService: PoemService) { }

  ngOnInit(): void { 
    this.poem$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.poemsService.getPoem(params.get('poem_title')))
    );
  }
}
