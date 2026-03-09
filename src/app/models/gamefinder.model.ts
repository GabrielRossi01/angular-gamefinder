export interface GameResponse {
  nome: string;
  releaseDate: string;
  backgroundImage?: string;
  rating: number;
  ratingsCount: number;
  stars: number;
  level: RecommendationLevel;
  label: string;
  reason: string;
}

export type RecommendationLevel = 'high' | 'medium' | 'low';
