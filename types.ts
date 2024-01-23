export interface type_category {
  _id?: string;
  title?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?:number;
}

export interface type_comic {
  _id?: string;
  title?: string;
  author?: string;
  number_chap?: number;
  image?: string;
  genre?: { _id?: string; title?: string }[];
  createdAt?: string;
  updatedAt?: string;
}

export interface type_chapter {
  _id?: string;
  name_chapter?: string;
  content_chapter?:string;
  number_chapter?: number;
  id_story?: type_comic;
  createdAt?: string;
  updatedAt?: string;
}
