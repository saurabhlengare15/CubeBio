import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolutionDataService {

  constructor(private http: HttpClient) { }

  private dataUrl = 'assets/data/solution.json'; // Adjust the path to your JSON file



  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl);
  }

  getFilteredData(category: string): Observable<any[]> {
    return this.http.get<any[]>(this.dataUrl)
      .pipe(
        // Filter data based on category
        map(data => data.filter(item => item.title === category))
      );
  }
}
