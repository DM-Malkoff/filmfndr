import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetMovieService {
  private readonly apiUrl = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }

  public getMovie(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`, {
      headers: {
        'X-API-KEY': environment.API_KEY
      },
    })
  }
}
