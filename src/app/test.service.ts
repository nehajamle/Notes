import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './Note';

@Injectable({
  providedIn: 'root'
})
export class TestService 
{
  private apiUrl = 'https://localhost:44380/api/NotesData';

  constructor(private http: HttpClient) { }

  getNotes(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  addNote(content: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { content: content });
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  updateNoteContent(id: number, content: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, { id, content });
  }
}