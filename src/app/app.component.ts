import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  newMemberName = ''
  members: string[] = [];
  errorMessage = ''

  onInput(member: string) {
    this.newMemberName = member;
  }

  addMember() {
    if(!this.newMemberName) {
      this.errorMessage = 'Name can\'t be empty!';
      return;
    }

    this.errorMessage = '';
    this.members.push(this.newMemberName);
    this.newMemberName = '';
  }
}
