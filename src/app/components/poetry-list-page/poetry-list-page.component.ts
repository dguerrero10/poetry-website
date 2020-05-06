import { Poem } from './poems/poem.model';
import { PoemService } from './poems/poems.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-poetry-list-page',
  templateUrl: './poetry-list-page.component.html',
  styleUrls: ['./poetry-list-page.component.scss']
})
export class PoetryListPageComponent implements OnInit {
  poem_title: string;

  poems$: Observable<Poem[]>;

  constructor(public route: ActivatedRoute,
              public poemService: PoemService
              ) { }

  ngOnInit(): void {
    this.poems$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.poem_title = params.get('poem_title');
        return this.poemService.getPoems();
      })
    );
  }
}
