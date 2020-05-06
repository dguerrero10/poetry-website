import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoetryListPageComponent } from './poetry-list-page.component';

describe('PoetryListPageComponent', () => {
  let component: PoetryListPageComponent;
  let fixture: ComponentFixture<PoetryListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoetryListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoetryListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
