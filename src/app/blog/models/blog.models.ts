import { ImageSizes } from "src/app/shared/core/models/core.models";


export enum BlogCategories {
  GENERAL = 'general',
  SCIENCE = 'science',
  LIFESTYLE = 'lifestyle'
}

export interface BlogImage {
  src: string;
  size: ImageSizes
}

export interface BlogPost {
  id: string | number;
  category: BlogCategories;
  title: string;
  description: string;
  dateCreated: string;
  createdBy: string | number;
  images?: BlogImage[];
  thumbnail?: BlogImage
}
