import { Component, OnInit } from '@angular/core';
import { PostService, PostType } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public postList: PostType[] = [];
  constructor( private postService: PostService  ) { }

  ngOnInit() {
    this.postList = this.postService.getPosts();
  }

}
