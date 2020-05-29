import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../../forgot-password/forgot-password.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  formModel = {
    UserName: '',
    Password: ''
  }

  isLoginError: boolean = false;
  constructor(private userService: UserService, private router: Router, private dialog: MatDialog) { }

  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this.router.navigateByUrl('/menu/welcome');
  }

  OnLogin(form: NgForm) {
    this.userService.login(form.value).subscribe(
      (res: any) => {
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/menu/welcome');
      },
      err => {
        if (err.status == 400)
          //this.toastr.error('Incorrect username or password.', 'Authentication failed.');
          console.log("Not Correct");
        else
          console.log(err);
      }
    );
  }
  forgotPassword() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    // dialogConfig.width = "30%";
    this.dialog.open(ForgotPasswordComponent, dialogConfig);
  }
}
