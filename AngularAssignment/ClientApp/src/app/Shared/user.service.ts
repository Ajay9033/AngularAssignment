import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http";
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user.model';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:59545';
  header: HttpHeaders;

  constructor(private http: HttpClient,private fb: FormBuilder) {
    this.header = new HttpHeaders({
      "Content-Type": "application/json; charset=utf-8",
    });
  }

  formModel = this.fb.group({
    id:[''],
    userName: ['', Validators.required],
    password: ['', [Validators.required, Validators.email]],
    email: ['', Validators.required],
  });

  registerUser(user: User) {
    const body: User = {
      UserName: user.UserName,
      Password: user.Password,
      Email: user.Email
    }
    return this.http.post(this.rootUrl + '/api/User/Register',JSON.stringify(body), { headers: this.header });
  }

  login(formData) {
    return this.http.post(this.rootUrl + '/api/User/Login', formData);
  }

  getAllUser() {
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    return this.http.get(this.rootUrl + '/api/UserProfile', { headers: tokenHeader });
  }

  getUserProfile() {
    var tokenHeader = new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('token') });
    return this.http.get(this.rootUrl + '/api/UserProfile/User', { headers: tokenHeader });
  }

  forgotPassword(formData) {
    return this.http.post(this.rootUrl + '/api/User/ForgotPassword', formData);
  }
  deleteEmployeeDetail(id) {
    return this.http.delete(this.rootUrl + '/api/UserProfile/' + id);
  }
  setEmployeeDetail(EmployeeData: User) {
    this.formModel.setValue(EmployeeData);
  }

  saveEmployeeDetail() {
    var body = {
      id: +this.formModel.value.id,
      userName: this.formModel.value.userName,
      email: this.formModel.value.email,
      password: this.formModel.value.password,
    };
    return this.http.post(this.rootUrl + '/api/UserProfile/Add',body);
  }
 
}
