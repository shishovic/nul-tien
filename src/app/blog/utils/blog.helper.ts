import { BlogCategories, BlogCategoryObject } from "../models/blog.models";

export const getBlogCategories = (): BlogCategoryObject[] => {
  return [
    { value: BlogCategories.GENERAL, label: 'General' },
    { value: BlogCategories.LIFESTYLE, label: 'Lifestyle' },
    { value: BlogCategories.SCIENCE, label: 'Science' },
  ] as BlogCategoryObject[];
}

export const searchFilters = <T>(originalArray: T[], search: string): T[] => {
  if (!search?.length) return [...originalArray];
  return [...originalArray].filter((item: T) => (item as T & { title: string }).title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
}
