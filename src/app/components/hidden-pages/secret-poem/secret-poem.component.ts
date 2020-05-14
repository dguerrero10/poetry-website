import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { NavbarService } from '../../shared/navbar.service';
import { PoemService } from '../../poetry-list-page/poems/services/poems.service';
import { Poem } from '../../poetry-list-page/poems/services/poem.model';

@Component({
  selector: 'app-secret-poem',
  templateUrl: './secret-poem.component.html',
  styleUrls: ['./secret-poem.component.scss']
})
export class SecretPoemComponent implements OnInit {
  secretPoem$: Observable<Poem>;

  constructor(public route: ActivatedRoute,
              public poemService: PoemService,
              public navbarService: NavbarService) { }

  ngOnInit(): void {
    this.navbarService.show();
    this.secretPoem$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
      this.poemService.getSecretPoem(params.get('secret_poem_id')))
    );
  }
}

