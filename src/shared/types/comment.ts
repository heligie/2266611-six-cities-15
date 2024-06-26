export type TComment = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
}

export type TReviewData = {
  offerId: string;
  comment: string;
  rating: number;
}
