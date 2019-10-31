import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { AdFormComponent } from './ad-form/ad-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {NgbAlertModule, NgbModule, NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { FormListComponent } from './form-list/form-list.component';
import {FileUploadService} from './shared/file-upload.service';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {AngularFireStorageModule} from 'angularfire2/storage';
const appRoutes: Routes = [
    {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'ad_form', component: AdFormComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdFormComponent,
    FormListComponent
  ],
  imports: [
    BrowserModule,
    DatePickerModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    NgbPaginationModule,
    NgbAlertModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireStorageModule,


    // MatMomentDateModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
  ],
  providers: [FileUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
