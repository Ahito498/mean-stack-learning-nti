import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { StudentService, Student } from '../../../shared/student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-courses',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div class="student-courses" *ngIf="student">
      <h1>Courses for {{ student?.name }}</h1>
      
      <div class="card">
        <h2>Student Information</h2>
        <p><strong>ID:</strong> {{ student?.id }}</p>
        <p><strong>Major:</strong> {{ student?.major }}</p>
        <p><strong>GPA:</strong> {{ student?.gpa }}</p>
        
        <h3>Enrolled Courses ({{ student?.courses?.length || 0 }}):</h3>
        <div class="courses-list">
          <div class="course-item" *ngFor="let course of student?.courses || []; let i = index">
            <span class="course-number">{{ i + 1 }}.</span>
            <span class="course-name">{{ course }}</span>
          </div>
        </div>
        
        <div class="actions">
          <a [routerLink]="['/students/details', student?.id]" class="btn">View Student Details</a>
          <a routerLink="/students/list" class="btn">Back to List</a>
        </div>
      </div>
    </div>
    
    <div class="loading" *ngIf="!student">
      Loading student courses...
    </div>
  `,
  styles: [`
    .courses-list {
      margin: 20px 0;
    }
    
    .course-item {
      padding: 10px;
      margin: 5px 0;
      background: #f8f9fa;
      border-radius: 4px;
      display: flex;
      align-items: center;
    }
    
    .course-number {
      font-weight: bold;
      color: #007acc;
      margin-right: 10px;
      min-width: 30px;
    }
    
    .course-name {
      color: #333;
    }
    
    .actions {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #eee;
    }
  `]
})
export class StudentCoursesComponent implements OnInit {
  student: Student | undefined;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.student = this.studentService.getStudentById(id);
    
    if (this.student) {
      console.log(`Loading courses for student: ${this.student.name} (ID: ${id})`);
    } else {
      console.log(`Student not found for ID: ${id}`);
    }
  }
}
