import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { TipsComponent } from './tips/tips.component';
import { ScheduleComponent } from './schedule/schedule.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent},
  { path: 'tips', component: TipsComponent},
  { path: 'schedule', component: ScheduleComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
