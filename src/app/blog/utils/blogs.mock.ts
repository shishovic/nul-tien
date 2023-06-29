import { ImageSizes } from "src/app/shared/core/models/core.models"
import { BlogCategories, BlogPost } from "../models/blog.models"

export const MOCK_BLOGS: BlogPost[] = [
  {
    id: 1,
    title: "csturman0",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    dateCreated: "1/23/2023",
    createdBy: "rprydie0",
    thumbnail: { src: "http://dummyimage.com/82x81.png/5fa2dd/ffffff", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.BUSINESS
  },
  {
    id: 2,
    title: "mmollatt1",
    description: "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    dateCreated: "6/22/2023",
    createdBy: "tkefford1",
    thumbnail: { src: "http://dummyimage.com/87x91.png/ff4444/ffffff", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.GENERAL
  },
  {
    id: 3,
    title: "tjessope2",
    description: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    dateCreated: "3/31/2023",
    createdBy: "amansuer2",
    thumbnail: { src: "http://dummyimage.com/90x91.png/5fa2dd/ffffff", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.SPORTS
  },
  {
    id: 4,
    title: "cpenniell3",
    description: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    dateCreated: "5/15/2023",
    createdBy: "rrought3",
    thumbnail: { src: "http://dummyimage.com/99x99.png/ff4444/ffffff", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.LIFESTYLE
  },
  {
    id: 5,
    title: "afolker4",
    description: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    dateCreated: "1/30/2023",
    createdBy: "enottingham4",
    thumbnail: { src: "http://dummyimage.com/94x83.png/ff4444/ffffff", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.EDUCATION
  },
  {
    id: 6,
    title: "lsalmoni5",
    description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    dateCreated: "11/26/2022",
    createdBy: "kgaiger5",
    thumbnail: { src: "http://dummyimage.com/89x84.png/dddddd/000000", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.FOOD
  },
  {
    id: 7,
    title: "ttaggert6",
    description: "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    dateCreated: "3/5/2023",
    createdBy: "aavramovitz6",
    thumbnail: { src: "http://dummyimage.com/93x86.png/5fa2dd/ffffff", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.SPORTS
  },
  {
    id: 8,
    title: "jmarcroft7",
    description: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    dateCreated: "5/23/2023",
    createdBy: "fjoynson7",
    thumbnail: { src: "http://dummyimage.com/85x85.png/5fa2dd/ffffff", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.SCIENCE
  },
  {
    id: 9,
    title: "acorse8",
    description: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    dateCreated: "7/30/2022",
    createdBy: "hcornillot8",
    thumbnail: { src: "http://dummyimage.com/92x98.png/ff4444/ffffff", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.HEALTH
  },
  {
    id: 10,
    title: "jjoust9",
    description: "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    dateCreated: "6/11/2023",
    createdBy: "mzima9",
    thumbnail: { src: "http://dummyimage.com/85x82.png/ff4444/ffffff", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.HEALTH
  },
  {
    id: 11,
    title: "mbainesa",
    description: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    dateCreated: "8/9/2022",
    createdBy: "fvaldera",
    thumbnail: { src: "http://dummyimage.com/95x86.png/ff4444/ffffff", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.GENERAL
  },
  {
    id: 12,
    title: "lhazeltonb",
    description: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    dateCreated: "10/29/2022",
    createdBy: "lbirleyb",
    thumbnail: { src: "http://dummyimage.com/80x85.png/5fa2dd/ffffff", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.FASHION
  },
  {
    id: 13,
    title: "csyddonc",
    description: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    dateCreated: "4/6/2023",
    createdBy: "jopiec",
    thumbnail: { src: "http://dummyimage.com/100x91.png/ff4444/ffffff", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.EDUCATION
  },
  {
    id: 14,
    title: "bnevetd",
    description: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    dateCreated: "5/7/2023",
    createdBy: "rpaskind",
    thumbnail: { src: "http://dummyimage.com/88x87.png/dddddd/000000", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.FASHION
  },
  {
    id: 15,
    title: "fcronee",
    description: "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    dateCreated: "7/27/2022",
    createdBy: "slagdee",
    thumbnail: { src: "http://dummyimage.com/91x84.png/cc0000/ffffff", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.LIFESTYLE
  },
  {
    id: 16,
    title: "zyouensf",
    description: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    dateCreated: "5/7/2023",
    createdBy: "bestickf",
    thumbnail: { src: "http://dummyimage.com/87x81.png/dddddd/000000", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.SCIENCE
  },
  {
    id: 17,
    title: "dcasoneg",
    description: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    dateCreated: "1/6/2023",
    createdBy: "pmaccorkellg",
    thumbnail: { src: "http://dummyimage.com/91x81.png/dddddd/000000", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.EDUCATION
  },
  {
    id: 18,
    title: "clefeuvreh",
    description: "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    dateCreated: "3/16/2023",
    createdBy: "btoftsh",
    thumbnail: { src: "http://dummyimage.com/99x83.png/cc0000/ffffff", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.SPORTS
  },
  {
    id: 19,
    title: "sembrai",
    description: "Fusce consequat. Nulla nisl. Nunc nisl.",
    dateCreated: "4/3/2023",
    createdBy: "tblankmani",
    thumbnail: { src: "http://dummyimage.com/90x88.png/5fa2dd/ffffff", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.ENTERTAINMENT
  },
  {
    id: 20,
    title: "kbrownfieldj",
    description: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    dateCreated: "11/4/2022",
    createdBy: "probesonj",
    thumbnail: { src: "http://dummyimage.com/87x84.png/ff4444/ffffff", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.LIFESTYLE
  },
  {
    id: 21,
    title: "kbrouk",
    description: "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    dateCreated: "10/16/2022",
    createdBy: "tpaulak",
    thumbnail: { src: "http://dummyimage.com/93x93.png/dddddd/000000", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.EDUCATION
  },
  {
    id: 22,
    title: "boldershawl",
    description: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    dateCreated: "7/4/2022",
    createdBy: "cseverl",
    thumbnail: { src: "http://dummyimage.com/97x94.png/5fa2dd/ffffff", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.HEALTH
  },
  {
    id: 23,
    title: "dobinm",
    description: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    dateCreated: "12/23/2022",
    createdBy: "gantonchikm",
    thumbnail: { src: "http://dummyimage.com/91x93.png/ff4444/ffffff", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.SPORTS
  },
  {
    id: 24,
    title: "dhalledayn",
    description: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    dateCreated: "2/5/2023",
    createdBy: "rgoultn",
    thumbnail: { src: "http://dummyimage.com/84x90.png/dddddd/000000", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.GENERAL
  },
  {
    id: 25,
    title: "lfidgino",
    description: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    dateCreated: "11/15/2022",
    createdBy: "eyorstono",
    thumbnail: { src: "http://dummyimage.com/93x95.png/5fa2dd/ffffff", size: ImageSizes.SMALL },
    images: [
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.SMALL },
      { src: 'http://dummyimage.com/84x82.png/ff4444/ffffff', size: ImageSizes.MEDIUM }
    ],
    category: BlogCategories.GENERAL
  }
]
