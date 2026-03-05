export interface GameFinder {
  id: number;
  nome: string;
  releaseDate: Date;
  genres: string;
  stars: string;
  rating?: number;
  ratingsCount?: number;
  backgroundImage?: string;
  recommendation?: RecommendationLevel;
  recommendationLabel?: string;
}

export type RecommendationLevel = 'highly_recommended' | 'worth_it' | 'watch_a_movie';

export interface RecommendationResult {
  game: GameFinder;
  level: RecommendationLevel;
  label: string;
  reason: string;
  stars: number;
}
