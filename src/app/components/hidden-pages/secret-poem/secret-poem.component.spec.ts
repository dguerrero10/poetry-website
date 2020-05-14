import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretPoemComponent } from './secret-poem.component';

describe('SecretPoemComponent', () => {
  let component: SecretPoemComponent;
  let fixture: ComponentFixture<SecretPoemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretPoemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretPoemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
