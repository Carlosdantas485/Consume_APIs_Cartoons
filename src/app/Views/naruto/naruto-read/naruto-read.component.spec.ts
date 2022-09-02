import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NarutoReadComponent } from './naruto-read.component';

describe('NarutoReadComponent', () => {
  let component: NarutoReadComponent;
  let fixture: ComponentFixture<NarutoReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NarutoReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NarutoReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
