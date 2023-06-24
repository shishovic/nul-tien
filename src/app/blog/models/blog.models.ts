import { ImageSizes } from "src/app/shared/core/models/core.models";

export interface BlogCategoryObject {
  value: BlogCategories;
  label: string;
}

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

export enum BlogFormControls {
  TITLE = 'title',
  DESCRIPTION = 'description'
}
