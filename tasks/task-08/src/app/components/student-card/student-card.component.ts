import { Component, Input } from '@angular/core';
import { Student } from '../../shared/student.service';

@Component({
  selector: 'app-student-card',
  standalone: true,
  template: `
    <div class="card">
      <h3>{{ student.name }}</h3>
      <p><strong>Age:</strong> {{ student.age }}</p>
      <p><strong>Major:</strong> {{ student.major }}</p>
      <p><strong>GPA:</strong> {{ student.gpa }}</p>
      <p><strong>Email:</strong> {{ student.email }}</p>
      
      <!-- ng-content for additional content projection -->
      <div class="card-actions">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .card-actions {
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid #eee;
    }
  `]
})
export class StudentCardComponent {
  @Input() student!: Student;
}
