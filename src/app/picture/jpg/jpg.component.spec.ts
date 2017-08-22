import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JpgComponent } from './jpg.component';

describe('JpgComponent', () => {
  let component: JpgComponent;
  let fixture: ComponentFixture<JpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
