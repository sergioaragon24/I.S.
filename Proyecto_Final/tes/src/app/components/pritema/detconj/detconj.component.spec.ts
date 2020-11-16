import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetconjComponent } from './detconj.component';

describe('DetconjComponent', () => {
  let component: DetconjComponent;
  let fixture: ComponentFixture<DetconjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetconjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetconjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
