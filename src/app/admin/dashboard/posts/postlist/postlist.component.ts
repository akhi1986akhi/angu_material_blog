import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { post } from './post.models';
import { PostsService } from './posts.service';


@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit, OnDestroy {
  posts:post[]=[];
  private postSub:Subscription;
  
  constructor(public ps:PostsService) { }

  ngOnInit(): void {
    this.posts = this.ps.getAll();
    this.postSub = this.ps.getUpdateListner().subscribe((posts:post[])=>{
      this.posts = posts;
    })
  }
  ngOnDestroy(): void {
    this.postSub.unsubscribe()
  }

}