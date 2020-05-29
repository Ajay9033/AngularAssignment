import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { UserService } from './shared/user.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserComponent } from './user/user.component';
import { appRoutes } from './routes ';
import { HomeComponent } from "./home/HomeComponent";
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { MaterialModule } from './material/material.module';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list'
import { MatRadioModule } from '@angular/material/radio'
import { MatSelectModule } from '@angular/material/select'
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteService } from './Shared/delete.service';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AuthGuard } from './auth/auth.guard';
import { MatMenuModule } from '@angular/material/menu';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TechnologyComponent } from './technology/technology.component';

//import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    UserComponent,
    HomeComponent,
    NavBarComponent,
    ForgotPasswordComponent,
    DeleteConfirmComponent,
    CreateEmployeeComponent,
    WelcomePageComponent,
    AboutUsComponent,
    ContactUsComponent,
    UserprofileComponent,
    TechnologyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    GridModule,
    ExcelModule,
    InputsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatRadioModule,
    MatSelectModule,
    MatBadgeModule,
    MatDialogModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSelectModule,
    InputsModule,
    MatRadioModule,
    MatGridListModule,
    GridModule,
    ExcelModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatDialogModule,
    MatBadgeModule,
    MatMenuModule
  ],
  providers: [UserService, DeleteService, AuthGuard],
  bootstrap: [AppComponent],
  entryComponents: [ForgotPasswordComponent, DeleteConfirmComponent, CreateEmployeeComponent]
})
export class AppModule { }
