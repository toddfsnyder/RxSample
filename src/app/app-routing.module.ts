import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SampleOneComponent } from './sample-one/sample-one.component';
import { SampleOperatorComponent } from './sample-operator/sample-operator.component';
import { SampleSubjectComponent } from './sample-subject/sample-subject.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'one', component: SampleOneComponent },
    { path: 'operator', component: SampleOperatorComponent },
    { path: 'subject', component: SampleSubjectComponent },
    { path: 'data', component: SampleComponent },
    { path: 'test', component: SampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
