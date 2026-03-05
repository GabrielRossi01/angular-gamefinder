import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameFinder } from './models/gamefinder.model';

import { GameFinderService } from './services/gamefinder.service';
import { CardGamesComponent } from './card-games/card-games';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, CardGamesComponent],
  templateUrl: './app.html'
})
export class AppComponent implements OnInit {
  games: GameFinder[] = [];
  filteredGames: GameFinder[] = [];
  searchQuery = '';
  loading = false;
  error = '';
  selectedGame: GameFinder | null = null;

  constructor(private gameService: GameFinderService) {}

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void {
    this.loading = true;
    this.error = '';

    this.gameService.getGames().subscribe({
      next: (games) => {
        this.games = games;
        this.filteredGames = games;
        this.loading = false;
      },
      error: () => {
        this.error = 'Não foi possível carregar os jogos. Verifique se o backend está rodando.';
        this.loading = false;
      }
    });
  }

  onSearch(): void {
    if (!this.searchQuery.trim()) {
      this.filteredGames = this.games;
      return;
    }

    const q = this.searchQuery.toLowerCase();
    this.filteredGames = this.games.filter(g =>
      g.nome.toLowerCase().includes(q) ||
      g.genres.toLowerCase().includes(q)
    );
  }

  onGameSelected(game: GameFinder): void {
    this.selectedGame = game;
  }
}
