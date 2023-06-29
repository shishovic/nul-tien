import { BlogCategories, BlogCategoryObject } from "../models/blog.models";
import { MOCK_BLOGS } from "./blogs.mock";

export const getBlogCategories = (): BlogCategoryObject[] => {
  return [
    { value: BlogCategories.GENERAL, label: 'General' },
    { value: BlogCategories.LIFESTYLE, label: 'Lifestyle' },
    { value: BlogCategories.SCIENCE, label: 'Science' },
    { value: BlogCategories.FOOD, label: 'Food' },
    { value: BlogCategories.FASHION, label: 'Fashion' },
    { value: BlogCategories.SPORTS, label: 'Sports' },
    { value: BlogCategories.ENTERTAINMENT, label: 'Entertainment' },
    { value: BlogCategories.BUSINESS, label: 'Business' },
    { value: BlogCategories.HEALTH, label: 'Health' },
    { value: BlogCategories.EDUCATION, label: 'Education' }
  ] as BlogCategoryObject[];
}

export const searchFilters = <T>(originalArray: T[], search: string): T[] => {
  if (!search?.length) return [...originalArray];
  return [...originalArray].filter((item: T) => (item as T & { title: string }).title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
}

export const mockBlogData = () => MOCK_BLOGS;
