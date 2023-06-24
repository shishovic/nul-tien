import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ImageSizes } from "src/app/shared/core/models/core.models";
import { DataService } from "src/app/shared/core/services/data.service";
import { BlogCategories, BlogPost } from "../models/blog.models";
const MOCK_BLOGS: BlogPost[] = [
  {
    id: 1,
    category: BlogCategories.GENERAL,
    title: 'My first blog 1',
    description: 'some description, some descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome description',
    dateCreated: new Date().toString(),
    createdBy: 'shishovic',
    thumbnail: { src: '', size: ImageSizes.SMALL },
    images: [{ src: '', size: ImageSizes.SMALL }, { src: '', size: ImageSizes.SMALL }, { src: '', size: ImageSizes.SMALL }]
  },
  {
    id: 2,
    category: BlogCategories.LIFESTYLE,
    title: 'My first blog 2',
    description: 'some description, some descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome description',
    dateCreated: new Date().toString(),
    createdBy: 'shishovic',
    thumbnail: { src: '', size: ImageSizes.SMALL },
    images: [{ src: '', size: ImageSizes.SMALL }, { src: '', size: ImageSizes.SMALL }, { src: '', size: ImageSizes.SMALL }]
  },
  {
    id: 3,
    category: BlogCategories.SCIENCE,
    title: 'My first blog 3',
    description: 'some description, some descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome description',
    dateCreated: new Date().toString(),
    createdBy: 'shishovic',
    thumbnail: { src: '', size: ImageSizes.SMALL },
    images: [{ src: '', size: ImageSizes.SMALL }, { src: '', size: ImageSizes.SMALL }, { src: '', size: ImageSizes.SMALL }]
  }
];

@Injectable()
export class BlogService {
  constructor(private dataService: DataService) {

  }


  getAllBlogs(): Observable<BlogPost[]> {
    return of(MOCK_BLOGS)
  }

  getBlogsByCategory(category: BlogCategories): Observable<BlogPost[]> {
    return of(MOCK_BLOGS.filter((item: BlogPost) => item.category === category))
  }
}
