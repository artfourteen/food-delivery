export interface ReviewEntity {
  id: string;
  user: string;
  createdAt: string;
  rating: number;
  description: string;
  likesCount: number;
  liked: boolean;
}
