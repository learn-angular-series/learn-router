import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gif2Component } from './gif2.component';

describe('Gif2Component', () => {
  let component: Gif2Component;
  let fixture: ComponentFixture<Gif2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gif2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gif2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
