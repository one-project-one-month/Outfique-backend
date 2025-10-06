export interface saveOutfitDto {
  userId: string;
  outfitElementsId: number;
  selectionReason?: SelectionReason;
  occasion?: string;
  weatherConditionId?: number;
  userRating?: number;
  feedbackNotes?: string;
}

enum SelectionReason {
  LIKED = 'liked',
  DISLIKED = 'disliked',
  NEUTRAL = 'neutral',
  PURCHASED = 'purchased',
}
