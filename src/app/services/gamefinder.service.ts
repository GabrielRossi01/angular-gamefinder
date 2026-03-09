import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameResponse } from '../models/gamefinder.model';

@Injectable({
  providedIn: 'root'
})
export class GameFinderService {
  private readonly BASE_URL = 'http://localhost:8080/api/games';

  constructor(private http: HttpClient) {}

  getRecommendationByName(name: string): Observable<GameResponse> {
    const params = new HttpParams().set('name', name);
    return this.http.get<GameResponse>(this.BASE_URL, { params });
  }
}
