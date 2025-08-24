import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { StudentService, Student } from '../../../shared/student.service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="student-list">
      <h1>Students List</h1>
      
      <div class="students-grid">
        <div class="student-card" *ngFor="let student of students">
          <h3>{{ student.name }}</h3>
          <p><strong>ID:</strong> {{ student.id }}</p>
          <p><strong>Major:</strong> {{ student.major }}</p>
          <div class="actions">
            <a [routerLink]="['/students/details', student.id]" class="btn">View Details</a>
            <a [routerLink]="['/students/courses', student.id]" class="btn">View Courses</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .students-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      padding: 20px;
    }
    
    .student-card {
      padding: 20px;
      border: 1px solid #eee;
      border-radius: 8px;
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .actions {
      margin-top: 15px;
      display: flex;
      gap: 10px;
    }
    
    .btn {
      padding: 8px 16px;
      border-radius: 4px;
      background: #007bff;
      color: white;
      text-decoration: none;
    }
  `]
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }
}