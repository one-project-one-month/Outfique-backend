export interface addToClosetDto {
  userId: string;
  image_url: string;
  image_publicId: string;
  categories: string[];
  colors: string[];
  fashionStyles: string[];
  size: string;
  weatherConds: string[];
  brand: string[];
}

export interface updateClosetOutfitDto {
  categories?: string[];
  colors?: string[];
  fashionStyles?: string[];
  size?: string;
  weatherConds?: string[];
  brand?: string[];
}
