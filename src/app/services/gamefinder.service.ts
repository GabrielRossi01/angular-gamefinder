import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameFinder, RecommendationResult } from '../models/gamefinder.model';

@Injectable({
  providedIn: 'root'
})

export class GameFinderService {
  private readonly BASE_URL = 'http://localhost:8080/api/games';

  constructor(private http: HttpClient) {}

  getGames(): Observable<GameFinder[]> {
    return this.http.get<GameFinder[]>(this.BASE_URL);
  }

  getRecommendation(gameId: number): Observable<RecommendationResult> {
    return this.http.get<RecommendationResult>(`${this.BASE_URL}/${gameId}/recommendation`);
  }

  searchGames(query: string): Observable<GameFinder[]> {
    return this.http.get<GameFinder[]>(`${this.BASE_URL}/search?q=${encodeURIComponent(query)}`);
  }
}
