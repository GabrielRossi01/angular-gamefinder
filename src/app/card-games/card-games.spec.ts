import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardGamesComponent } from './card-games';
import { GameResponse } from '../models/gamefinder.model';

describe('CardGamesComponent', () => {
  let component: CardGamesComponent;
  let fixture: ComponentFixture<CardGamesComponent>;

  const mockResult: GameResponse = {
    nome: 'God of War',
    releaseDate: '2018-04-20',
    backgroundImage: 'https://example.com/image.jpg',
    rating: 4.7,
    ratingsCount: 8000,
    stars: 3,
    level: 'high',
    label: 'Altamente Recomendado',
    reason: 'Nota excelente, muitas avaliações e lançamento recente.',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardGamesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardGamesComponent);
    component = fixture.componentInstance;
    component.result = mockResult;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display game name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('God of War');
  });

  it('should return correct badge classes for high level', () => {
    expect(component.getBadgeClasses('high')).toContain('emerald');
  });

  it('should return correct badge classes for medium level', () => {
    expect(component.getBadgeClasses('medium')).toContain('amber');
  });

  it('should return correct badge classes for low level', () => {
    expect(component.getBadgeClasses('low')).toContain('red');
  });

  it('should return correct stars array', () => {
    expect(component.getStarsArray(3).length).toBe(3);
    expect(component.getEmptyStarsArray(3).length).toBe(0);
  });
});
