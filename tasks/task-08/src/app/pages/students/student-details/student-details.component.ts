import { 
  Component, 
  OnInit, 
  OnDestroy, 
  OnChanges, 
  AfterViewInit, 
  AfterContentInit,
  SimpleChanges,
  ViewChild,
  ElementRef,
  Input
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentService, Student } from '../../../shared/student.service';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <div class="student-details" *ngIf="student">
      <h1>Student Details</h1>
      
      <div class="card">
        <h2>{{ student?.name }}</h2>
        <p><strong>ID:</strong> {{ student?.id }}</p>
        <p><strong>Age:</strong> {{ student?.age }}</p>
        <p><strong>Major:</strong> {{ student?.major }}</p>
        <p><strong>Email:</strong> {{ student?.email }}</p>
        <p><strong>GPA:</strong> {{ student?.gpa }}</p>
        
        <h3>Courses:</h3>
        <ul>
          <li *ngFor="let course of student?.courses || []">{{ course }}</li>
        </ul>
        
        <div class="actions">
          <button class="btn" (click)="updateStudentAge()">Update Age</button>
          <button class="btn" (click)="updateStudentGPA()">Update GPA</button>
          <a [routerLink]="['/students', student.id, 'courses']" class="btn">View Courses</a>
          <a routerLink="/students/list" class="btn">Back to List</a>
        </div>
      </div>
      
      <div class="lifecycle-logs">
        <h3>Lifecycle Hooks Logs:</h3>
        <div class="log" *ngFor="let log of lifecycleLogs">
          <span class="timestamp">{{ log.timestamp }}</span>
          <span class="hook">{{ log.hook }}</span>
          <span class="message">{{ log.message }}</span>
        </div>
      </div>
    </div>
    
    <div class="loading" *ngIf="!student">
      Loading student details...
    </div>
  `,
  styles: [`
    .actions {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #eee;
    }
    
    .lifecycle-logs {
      margin-top: 30px;
      background: #f8f9fa;
      padding: 20px;
      border-radius: 8px;
    }
    
    .log {
      margin: 5px 0;
      padding: 5px;
      background: white;
      border-radius: 4px;
      font-family: monospace;
    }
    
    .timestamp {
      color: #666;
      margin-right: 10px;
    }
    
    .hook {
      color: #007acc;
      font-weight: bold;
      margin-right: 10px;
    }
    
    .message {
      color: #333;
    }
  `]
})
export class StudentDetailsComponent implements 
  OnInit, 
  OnDestroy, 
  OnChanges, 
  AfterViewInit, 
  AfterContentInit {
  
  student: Student | undefined;
  lifecycleLogs: Array<{timestamp: string, hook: string, message: string}> = [];
  
  @ViewChild('studentDetails') studentDetails!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    this.logLifecycle('ngOnInit', 'Component initialized');
    
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.student = this.studentService.getStudentById(id);
    
    if (this.student) {
      this.logLifecycle('ngOnInit', `Student data loaded for ID: ${id}`);
    } else {
      this.logLifecycle('ngOnInit', `Student not found for ID: ${id}`);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logLifecycle('ngOnChanges', 'Input properties changed');
    console.log('ngOnChanges triggered:', changes);
  }

  ngAfterContentInit(): void {
    this.logLifecycle('ngAfterContentInit', 'Content projection completed');
  }

  ngAfterViewInit(): void {
    this.logLifecycle('ngAfterViewInit', 'View initialization completed');
  }

  ngOnDestroy(): void {
    this.logLifecycle('ngOnDestroy', 'Component is being destroyed');
  }

  updateStudentAge(): void {
    if (this.student) {
      const newAge = this.student.age + 1;
      this.studentService.updateStudent(this.student.id, { age: newAge });
      this.student = { ...this.student, age: newAge };
      this.logLifecycle('ngOnChanges', `Student age updated to ${newAge}`);
    }
  }

  updateStudentGPA(): void {
    if (this.student) {
      const newGPA = Math.min(4.0, this.student.gpa + 0.1);
      this.studentService.updateStudent(this.student.id, { gpa: newGPA });
      this.student = { ...this.student, gpa: newGPA };
      this.logLifecycle('ngOnChanges', `Student GPA updated to ${newGPA}`);
    }
  }

  private logLifecycle(hook: string, message: string): void {
    const timestamp = new Date().toLocaleTimeString();
    this.lifecycleLogs.push({ timestamp, hook, message });
    console.log(`[${timestamp}] ${hook}: ${message}`);
  }
}
