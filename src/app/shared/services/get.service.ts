import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class GetService {
  constructor(private http: HttpClient) {}
  get(breedLink: any): Observable<any> {
    return this.http.get<any>(breedLink);
  }
}
