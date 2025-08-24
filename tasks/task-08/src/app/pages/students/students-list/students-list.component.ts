import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { StudentCardComponent } from '../../../components/student-card/student-card.component';
import { StudentService, Student } from '../../../shared/student.service';

@Component({
  selector: 'app-students-list',
  standalone: true,
  imports: [StudentCardComponent, RouterLink],
  template: `
    <div>
      <h1>Students List</h1>
      <p>Click on "View Details" to see student information and lifecycle hooks in action.</p>
      
      <div class="student-grid">
        <app-student-card 
          *ngFor="let student of students" 
          [student]="student">
          
          <!-- ng-content content -->
          <a [routerLink]="['/students/details', student.id]" class="btn">View Details</a>
          <a [routerLink]="['/students', student.id, 'courses']" class="btn">View Courses</a>
          <button class="btn btn-danger" (click)="deleteStudent(student.id)">Delete</button>
        </app-student-card>
      </div>
    </div>
  `,
  styles: []
})
export class StudentsListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  deleteStudent(id: number): void {
    this.students = this.students.filter(student => student.id !== id);
    console.log(`Student with ID ${id} deleted`);
  }
}
