import { Injectable } from '@angular/core';

export interface Student {
  id: number;
  name: string;
  age: number;
  major: string;
  email: string;
  gpa: number;
  courses: string[];
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    {
      id: 1,
      name: 'Ahmed Hassan',
      age: 20,
      major: 'Computer Science',
      email: 'ahmed.hassan@university.edu',
      gpa: 3.8,
      courses: ['Introduction to Programming', 'Data Structures', 'Algorithms', 'Web Development']
    },
    {
      id: 2,
      name: 'Sara Mohamed',
      age: 19,
      major: 'Mathematics',
      email: 'sara.mohamed@university.edu',
      gpa: 3.9,
      courses: ['Calculus I', 'Linear Algebra', 'Statistics', 'Number Theory']
    },
    {
      id: 3,
      name: 'Omar Ali',
      age: 21,
      major: 'Physics',
      email: 'omar.ali@university.edu',
      gpa: 3.7,
      courses: ['Classical Mechanics', 'Quantum Physics', 'Thermodynamics', 'Electromagnetism']
    },
    {
      id: 4,
      name: 'Fatima Ahmed',
      age: 20,
      major: 'Engineering',
      email: 'fatima.ahmed@university.edu',
      gpa: 3.6,
      courses: ['Engineering Design', 'Materials Science', 'Thermodynamics', 'Fluid Mechanics']
    },
    {
      id: 5,
      name: 'Youssef Ibrahim',
      age: 22,
      major: 'Business Administration',
      email: 'youssef.ibrahim@university.edu',
      gpa: 3.5,
      courses: ['Business Management', 'Marketing', 'Finance', 'Economics']
    }
  ];

  getStudents(): Student[] {
    return this.students;
  }

  getStudentById(id: number): Student | undefined {
    return this.students.find(student => student.id === id);
  }

  updateStudent(id: number, updates: Partial<Student>): void {
    const index = this.students.findIndex(student => student.id === id);
    if (index !== -1) {
      this.students[index] = { ...this.students[index], ...updates };
    }
  }
}
