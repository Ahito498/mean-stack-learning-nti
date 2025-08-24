import { Routes } from '@angular/router';

export const STUDENT_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    loadComponent: () => import('./students-list/students-list.component').then(m => m.StudentsListComponent)
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./student-details/student-details.component').then(m => m.StudentDetailsComponent)
  },
  {
    path: ':id/courses',
    loadComponent: () => import('./student-courses/student-courses.component').then(m => m.StudentCoursesComponent)
  }
];
