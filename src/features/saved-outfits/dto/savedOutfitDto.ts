import { SelectionReason } from '../../../../generated/client';

export interface saveOutfitDto {
  userId: string;
  outfitElementsId: number;
  selectionReason?: SelectionReason;
  occasion?: string;
  weatherConditionId?: number;
  userRating?: number;
  feedbackNotes?: string;
}

export interface updateSavedOutfitDto {
  selectionReason?: SelectionReason;
  occasion?: string;
  weatherConditionId?: number;
  userRating?: number;
  feedbackNotes?: string;
}
