import { Component } from '@angular/core';
import { movieApiService } from './services/movieapi.service';
import { movies } from './classses/movies';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _movieapiservice: movieApiService){
  }
  lstmovies: movies[];

  ngOnInit(){
    this._movieapiservice.getmovies()
    .subscribe(
      data=>
      {
        this.lstmovies=data;
      }
    )
  }
}
