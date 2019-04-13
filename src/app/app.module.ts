import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleOneComponent } from './sample-one/sample-one.component';
import { SampleOperatorComponent } from './sample-operator/sample-operator.component';
import { SampleSubjectComponent } from './sample-subject/sample-subject.component';
import { HomeComponent } from './home/home.component';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleOneComponent,
    SampleOperatorComponent,
    SampleSubjectComponent,
    HomeComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
