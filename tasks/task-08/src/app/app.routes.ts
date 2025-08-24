import { Routes } from '@angular/router';
import { StudentCoursesComponent } from './pages/students/student-courses/student-courses.component';
import { StudentDetailsComponent } from './pages/students/student-details/student-details.component';
import { StudentListComponent } from './pages/students/student-list/student-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/students/list',
    pathMatch: 'full'
  },
  {
    path: 'students/list',
    component: StudentListComponent
  },
  {
    path: 'students/courses/:id',
    component: StudentCoursesComponent
  },
  {
    path: 'students/details/:id',
    component: StudentDetailsComponent
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found.component').then(m => m.NotFoundComponent)
  }
];
