
export interface ImageSize<T> {
  width: T;
  height: T;
}

export enum ImageSizes {
  SMALL = '80x80',
  MEDIUM = '100x100'
}

export type Image = ImageSize<80> | ImageSize<100>

export type Identifier = string | number;
