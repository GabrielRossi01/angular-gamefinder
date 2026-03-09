import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GameFinderService } from './services/gamefinder.service';
import { GameResponse, RecommendationLevel } from './models/gamefinder.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html'
})
export class AppComponent implements OnInit {
  searchQuery = '';
  result: GameResponse | null = null;
  loading = false;
  error = '';
  searched = false;

  searchSubject = new Subject<string>();

  constructor(private gameService: GameFinderService) {}

  ngOnInit(): void {
    this.searchSubject.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe(query => this._doSearch(query));
  }

  onInput(): void {
    if (!this.searchQuery.trim()) {
      this.result = null;
      this.searched = false;
      this.error = '';
      return;
    }
    this.searchSubject.next(this.searchQuery);
  }

  search(): void {
    if (!this.searchQuery.trim()) {
      this.result = null;
      this.searched = false;
      this.error = '';
      return;
    }
    this._doSearch(this.searchQuery);
  }

  _doSearch(name: string): void {
    if (!name.trim()) return;
    this.loading = true;
    this.error = '';
    this.result = null;
    this.searched = true;

    this.gameService.getRecommendationByName(name).subscribe({
      next: (data) => {
        this.result = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = err.status === 404
          ? 'Nenhum jogo encontrado. Tente outro nome.'
          : 'Erro ao conectar com o servidor.';
        this.loading = false;
      }
    });
  }

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
