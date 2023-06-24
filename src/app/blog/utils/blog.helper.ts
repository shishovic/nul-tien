import { BlogCategories, BlogCategoryObject } from "../models/blog.models";

export const getBlogCategories = (): BlogCategoryObject[] => {
  return [
    { value: BlogCategories.GENERAL, label: 'General' },
    { value: BlogCategories.LIFESTYLE, label: 'Lifestyle' },
    { value: BlogCategories.SCIENCE, label: 'Science' },
  ] as BlogCategoryObject[];
}
