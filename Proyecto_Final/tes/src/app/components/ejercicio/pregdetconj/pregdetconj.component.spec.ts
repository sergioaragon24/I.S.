import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PregdetconjComponent } from './pregdetconj.component';

describe('PregdetconjComponent', () => {
  let component: PregdetconjComponent;
  let fixture: ComponentFixture<PregdetconjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PregdetconjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PregdetconjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
