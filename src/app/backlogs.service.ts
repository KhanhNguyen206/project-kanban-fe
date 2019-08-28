import {Injectable} from '@angular/core';
import {Backlog} from './Backlog';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BacklogsService {
  private readonly API_URL = 'http://localhost:8080/backlogs';

  constructor(private http: HttpClient) {
  }

  getBacklogs(): Observable<Backlog[]> {
    return this.http.get<Backlog[]>(this.API_URL);
  }

  getBacklog(id): Observable<Backlog> {
    return this.http.get<Backlog>(`${this.API_URL}/${id}`);
  }

  insertBacklog(backlog: Partial<Backlog>): Observable<any> {
    return this.http.post<any>(this.API_URL, backlog);
  }

  updateBacklog(backlog: Backlog): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/${backlog.id}`, backlog);
  }

  deleteBacklog(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/${id}`);
  }
}
