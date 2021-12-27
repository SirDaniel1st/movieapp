import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from "@angular/common/http";
import { comments } from "../classses/comments";

@Injectable({
    providedIn: 'root'
  })
export class movieApiService{

    constructor(private httpclient:HttpClient){

    }

    getmovies(): Observable<any>{
        return this.httpclient.get('https://dcitmovieapi.herokuapp.com/api/movies')
    }

    getmoviedetails(id: string): Observable<any>{
        let params1= "https://dcitmovieapi.herokuapp.com/api/movies/"+id;
        return this.httpclient.get(params1)
    }

    postcomment(comment:comments): Observable<any>{
        return this.httpclient.post("https://dcitmovieapi.herokuapp.com//api/comments", comment)
    }

    getcomments(id:string): Observable<any>{
        let params1="https://dcitmovieapi.herokuapp.com/api/movies/"+id+"/comments"
        return this.httpclient.get(params1)
    }

    deletecomment(id:string): Observable<any>{
        let params1="https://dcitmovieapi.herokuapp.com//api/comments/"+id
        return this.httpclient.delete(params1)
    }

}