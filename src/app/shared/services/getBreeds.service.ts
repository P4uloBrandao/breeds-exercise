import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GetBreedsService {
  constructor(private http: HttpClient) {}
  getBreeds(oldBreeds: any): Observable<any> {
    return this.http.get<any>(oldBreeds);
  }
}
