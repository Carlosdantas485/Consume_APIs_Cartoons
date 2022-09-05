import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarutoCardComponent } from './naruto-card.component';

describe('NarutoCardComponent', () => {
  let component: NarutoCardComponent;
  let fixture: ComponentFixture<NarutoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarutoCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NarutoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
