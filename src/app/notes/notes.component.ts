import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Note } from '../Note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit
{
  notes: any[] = [];
  newNoteContent: string = '';

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.getNotes();
  }

  getNotes(): void {
    this.testService.getNotes()
      .subscribe(notes => this.notes = notes);
  }

  addNote(): void {
    if (!this.newNoteContent.trim()) { return; }
    this.testService.addNote(this.newNoteContent)
      .subscribe(() => {
        this.getNotes();
        this.newNoteContent = '';
      });
  }
  editNoteStart(note: any): void {
    note.isEditing = true;
    note.updatedContent = note.Content;
  }

  saveEditedNote(note: any): void {
    this.testService.updateNoteContent(note.Id, note.updatedContent)
      .subscribe(
        () => {
          note.Content = note.updatedContent;
          note.isEditing = false;
        },
        error => {
          console.error('Error updating note:', error);
        }
      );
  }

  cancelEdit(note: any): void {
    note.isEditing = false;
    note.updatedContent = note.Content;
  }

  deleteNote(note: any): void {
    this.testService.delete(note.Id)
      .subscribe(() => {
        this.notes = this.notes.filter(n => n !== note);
      });
  }
  
  toggleStrikeThrough(event: any, note: any): void {
    note.checked = event.target.checked;
  }
}