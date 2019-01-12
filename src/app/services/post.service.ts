import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postData: PostType[] = [
    {
      title: 'Colombia: Pais sin presidente',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 
                    to make a type specimen`,
      createdAt: '2018-01-01'
    },
    {
      title: 'Tecnologías web',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen`,
      createdAt: '2018-01-01'
    },
    {
      title: 'JavaScript: multiplataforma',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
                    industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen`,
      createdAt: '2018-01-01'
    },
    {
      title: 'Lorem Ipsum is simply dummy',
      description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen`,
      createdAt: '2018-01-01'
    }
  ];
  constructor() { }

  public getPosts(): PostType[] {
    return this.postData;
  }
}

export interface PostType {
  title: String;
  description: String;
  createdAt: String;
}
