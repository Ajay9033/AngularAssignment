import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { process } from '@progress/kendo-data-query';
import { User } from '../shared/user.model';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { DeleteService } from '../Shared/delete.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  //userClaims: any;

  constructor(private service: UserService, private router: Router, private dialog: MatDialog, private deleteService: DeleteService) { }

  
  public EmployeeList: User[];
  public gridView: any[];
  public mySelection: string[] = [];

  ngOnInit(): void {
    this.service.getAllUser().subscribe(
      (res: User[]) => {
        this.EmployeeList = res;
        console.log(this.EmployeeList);
      },
      (error) => {
        console.log(error);
      }
    );
    this.gridView = this.EmployeeList;
  }



  public onFilter(inputValue: string): void {
    this.gridView = process(this.EmployeeList, {
      filter: {
        logic: "or",
        filters: [
          {
            field: 'id',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'userName',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'email',
            operator: 'contains',
            value: inputValue
          },         
        ],
      }
    }).data;

    //this.dataBinding.skip = 0;
  }

  
  Logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  showEmployee() {
    this.router.navigate(['/Menu/Employee']);
  }
  onEdit(employeeData: User) {
    this.service.setEmployeeDetail(employeeData);
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    this.dialog.open(CreateEmployeeComponent, dialogConfig);
  }
  onCreate() {
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";

    this.dialog.open(CreateEmployeeComponent, dialogConfig);
  }
  onDelete(id: number) {
    this.deleteService.openConfirmDialog().afterClosed().subscribe(
      reso => {
        if (reso) {
          this.service.deleteEmployeeDetail(id).subscribe(
            res => {
              //this.toastr.success('Record deleted', 'Seccessfully deleted.');
            },
            err => {
              console.log(err);
            }
          );

        }
      }
    );
  }

}
