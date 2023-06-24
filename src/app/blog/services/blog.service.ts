import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Identifier, ImageSizes } from "src/app/shared/core/models/core.models";
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
  },
  {
    id: 4,
    category: BlogCategories.GENERAL,
    title: 'My first blog 4',
    description: 'some description, some descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome description',
    dateCreated: new Date().toString(),
    createdBy: 'shishovic',
    thumbnail: { src: '', size: ImageSizes.SMALL },
    images: [{ src: '', size: ImageSizes.SMALL }, { src: '', size: ImageSizes.SMALL }, { src: '', size: ImageSizes.SMALL }]
  },
  {
    id: 5,
    category: BlogCategories.LIFESTYLE,
    title: 'My first blog 5',
    description: 'some description, some descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome description',
    dateCreated: new Date().toString(),
    createdBy: 'shishovic',
    thumbnail: { src: '', size: ImageSizes.SMALL },
    images: [{ src: '', size: ImageSizes.SMALL }, { src: '', size: ImageSizes.SMALL }, { src: '', size: ImageSizes.SMALL }]
  },
  {
    id: 6,
    category: BlogCategories.SCIENCE,
    title: 'My first blog 6',
    description: 'some description, some descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome description',
    dateCreated: new Date().toString(),
    createdBy: 'shishovic',
    thumbnail: { src: '', size: ImageSizes.SMALL },
    images: [{ src: '', size: ImageSizes.SMALL }, { src: '', size: ImageSizes.SMALL }, { src: '', size: ImageSizes.SMALL }]
  },
  {
    id: 7,
    category: BlogCategories.GENERAL,
    title: 'My first blog 7',
    description: 'some description, some descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome description',
    dateCreated: new Date().toString(),
    createdBy: 'shishovic',
    thumbnail: { src: '', size: ImageSizes.SMALL },
    images: [{ src: '', size: ImageSizes.SMALL }, { src: '', size: ImageSizes.SMALL }, { src: '', size: ImageSizes.SMALL }]
  },
  {
    id: 8,
    category: BlogCategories.LIFESTYLE,
    title: 'My first blog 2',
    description: 'some description, some descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome descriptionsome description',
    dateCreated: new Date().toString(),
    createdBy: 'shishovic',
    thumbnail: { src: '', size: ImageSizes.SMALL },
    images: [{ src: '', size: ImageSizes.SMALL }, { src: '', size: ImageSizes.SMALL }, { src: '', size: ImageSizes.SMALL }]
  },
  {
    id: 9,
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

  blogs: BlogPost[] = [
    ...MOCK_BLOGS,
    ...MOCK_BLOGS,
    ...MOCK_BLOGS,
  ]

  getAllBlogs(category?: BlogCategories): Observable<BlogPost[]> {
    if (!category) return of(this.blogs);

    return of(this.blogs.filter(({ category: cat }: BlogPost) => cat === category))
  }

  getBlogsByCategory(category: BlogCategories): Observable<BlogPost[]> {
    return of(this.blogs.filter(({ category: cat }: BlogPost) => cat === category))
  }

  updateBlog(blog: BlogPost): Observable<BlogPost> {
    this.blogs = this.blogs.map((item) => ({
      ...item,
      title: item.id === blog.id ? blog.title : item.title,
      description: item.id === blog.id ? blog.description : item.description,
    }))
    return of(blog)
  }

  deleteBlog(id: Identifier): Observable<BlogPost[]> {
    this.blogs = [... this.blogs].filter((item) => item.id !== id);
    return of(this.blogs)
  }
}
