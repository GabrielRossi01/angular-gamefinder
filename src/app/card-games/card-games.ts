import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameFinderService } from '../services/gamefinder.service';
import { GameFinder, RecommendationLevel, RecommendationResult } from '../models/gamefinder.model';

@Component({
  selector: 'app-card-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-games.html'
})
export class CardGamesComponent implements OnInit {
  @Input() game!: GameFinder;
  @Output() gameSelected = new EventEmitter<GameFinder>();

  recommendation: RecommendationResult | null = null;
  loading = false;
  expanded = false;

  constructor(private gameService: GameFinderService) {}

  ngOnInit(): void {}

  selectGame(): void {
    this.loading = true;
    this.expanded = true;
    this.gameSelected.emit(this.game);

    this.gameService.getRecommendation(this.game.id).subscribe({
      next: (result) => {
        this.recommendation = result;
        this.loading = false;
      },
      error: () => {
        // Fallback: apply business rules client-side if backend fails
        this.recommendation = this.applyBusinessRules(this.game);
        this.loading = false;
      }
    });
  }

  private applyBusinessRules(game: GameFinder): RecommendationResult {
    const rating = game.rating ?? 0;
    const ratingsCount = game.ratingsCount ?? 0;
    const releaseYear = new Date(game.releaseDate).getFullYear();
    const currentYear = new Date().getFullYear();
    const ageInYears = currentYear - releaseYear;

    if (rating >= 4.5 && ratingsCount > 1000 && ageInYears <= 10) {
      return {
        game,
        level: 'highly_recommended',
        label: 'Altamente Recomendado',
        reason: 'Nota excelente, muitas avaliações e lançamento recente.',
        stars: 3
      };
    } else if (rating >= 3.5) {
      return {
        game,
        level: 'worth_it',
        label: 'Vale a Pena',
        reason: 'Boa nota, mas pode ter poucas avaliações ou ser um clássico antigo.',
        stars: 2
      };
    } else {
      return {
        game,
        level: 'watch_a_movie',
        label: 'Melhor Ver um Filme',
        reason: 'Nota baixa e/ou baixa popularidade.',
        stars: 1
      };
    }
  }

  getBadgeClasses(level: RecommendationLevel | undefined): string {
    switch (level) {
      case 'highly_recommended':
        return 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
      case 'worth_it':
        return 'bg-amber-500/20 text-amber-300 border border-amber-500/40';
      case 'watch_a_movie':
        return 'bg-red-500/20 text-red-300 border border-red-500/40';
      default:
        return 'bg-slate-700 text-slate-300';
    }
  }

  getStarsArray(count: number): number[] {
    return Array(count).fill(0);
  }

  getEmptyStarsArray(count: number): number[] {
    return Array(3 - count).fill(0);
  }

  getRatingColor(rating: number): string {
    if (rating >= 4.5) return 'text-emerald-400';
    if (rating >= 3.5) return 'text-amber-400';
    return 'text-red-400';
  }
}
