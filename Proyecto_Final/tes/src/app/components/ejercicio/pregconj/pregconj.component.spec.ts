import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregconjComponent } from './pregconj.component';

describe('PregconjComponent', () => {
  let component: PregconjComponent;
  let fixture: ComponentFixture<PregconjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregconjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregconjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
