import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  //formModel = {
  //  UserName: '',
  //  PassWord:'',
  //  Email: ''
  //}
  constructor(private service: UserService, private dialogRef: MatDialogRef<CreateEmployeeComponent>, private router: Router) { }
  ngOnInit(): void {

  }

  saveEmployeeData() {
    this.service.saveEmployeeDetail().subscribe(
      res => {
        if (res == 1) {
          this.service.formModel.reset();
          this.dialogRef.close();
          //this.toastr.success('Employee detail addedd', ' Add successful.');
          window.location.reload();
          // this.router.navigate(['/Menu/Employee']);
        }
        else {
          this.service.formModel.reset();
          this.dialogRef.close();
          //this.toastr.success('Employee detail edited', ' Edit successful.');
          window.location.reload();
          // this.router.navigate(['/Menu/Employee']);
        }
      },
      err => {
        console.log(err);
      }
    );
  }

}
