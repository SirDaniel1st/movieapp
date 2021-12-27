import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { movieApiService } from '../services/movieapi.service';
import { movies } from '../classses/movies';
import { comments } from '../classses/comments';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-m-details',
  templateUrl: './m-details.component.html',
  styleUrls: ['./m-details.component.css']
})
export class MDetailsComponent implements OnInit {

  movie_id="";
  movie:movies = new movies
  lstcomment:comments[]
  newcomment:comments =new comments
  constructor(private router:ActivatedRoute, private _movieApiService:movieApiService) { }

  submit(comment:NgForm){
    this.newcomment.username=comment.form.value.username
    this.newcomment.text=comment.form.value.message
    this.newcomment.movie_id=this.movie_id
    this._movieApiService.postcomment(this.newcomment)
    .subscribe(
      data=>{
        console.log(data)
      }
    )
    window.location.reload()
  }
  del(id:string){
    this._movieApiService.deletecomment(id)
    .subscribe(
      data=>{
        console.log(data)
      }
    )
    window.location.reload()
  }

  ngOnInit(): void {
    
    this.movie_id=this.router.snapshot.params['id'];
    console.log(this.movie_id)

    this._movieApiService.getmoviedetails(this.movie_id)
    .subscribe(
      data=>{
        this.movie=data
        console.log(this.movie)
      }
    )

    this._movieApiService.getcomments(this.movie_id)
    .subscribe(
      data=>{
        this.lstcomment=data
        console.log(this.lstcomment)
      }
    )

  }

}
