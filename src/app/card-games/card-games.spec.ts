import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameFinderService } from '../services/gamefinder.service';
import { CardGamesComponent } from './card-games';

describe('GameFinder', () => {
  let component: CardGamesComponent;
  let fixture: ComponentFixture<CardGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameFinderService],
    }).compileComponents();

    fixture = TestBed.createComponent(CardGamesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
