import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Use RouterModule, Routes for activating routing in angular

// Include components for in which router service to be used
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/register-student', pathMatch: 'full' },
  { path: 'register-student', component: AddStudentComponent },
  { path: 'view-students', component: StudentListComponent },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []

})
export class AppRoutingModule { }
