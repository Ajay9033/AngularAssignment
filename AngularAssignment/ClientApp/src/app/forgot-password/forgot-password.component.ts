import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  formModel = {
    Email: ''
  }
  constructor(public service: UserService, private dialogRef: MatDialogRef<ForgotPasswordComponent>) { }

  ngOnInit() {
  }

  OnForgotPassword(form: NgForm) {
    this.service.forgotPassword(form.value).subscribe(
      (res: any) => {
        this.dialogRef.close();
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
}
