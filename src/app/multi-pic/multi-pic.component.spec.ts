import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiPicComponent } from './multi-pic.component';

describe('MultiPicComponent', () => {
  let component: MultiPicComponent;
  let fixture: ComponentFixture<MultiPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
