import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonReadComponent } from './pokemon-read.component';

describe('PokemonReadComponent', () => {
  let component: PokemonReadComponent;
  let fixture: ComponentFixture<PokemonReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
