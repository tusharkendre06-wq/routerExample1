import { Routes } from '@angular/router';
import { AddCourse } from './add-course/add-course';
import { Home } from './home/home';
import { Course} from './course/course';
import { Contract } from './contract/contract';
export const routes: Routes = [
{path:'',component:Home},
{path:'courses',component:Course},
{path:'add-course',component:AddCourse},
{path:'contact',component:Contract}

];
