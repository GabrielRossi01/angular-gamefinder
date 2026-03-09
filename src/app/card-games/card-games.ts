import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameResponse, RecommendationLevel } from '../models/gamefinder.model';

@Component({
  selector: 'app-card-games',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-games.html'
})
export class CardGamesComponent {
  @Input() result!: GameResponse;

  getBadgeClasses(level: RecommendationLevel | undefined): string {
    switch (level) {
      case 'high':   return 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40';
      case 'medium': return 'bg-amber-500/20 text-amber-300 border border-amber-500/40';
      case 'low':    return 'bg-red-500/20 text-red-300 border border-red-500/40';
      default:       return 'bg-slate-700 text-slate-300';
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
