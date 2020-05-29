import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  constructor(private matDialogref: MatDialogRef<DeleteConfirmComponent>, private router: Router) { }

  ngOnInit(): void {
  }
  closeDialog() {
    this.matDialogref.close(false);
    window.location.reload();

  }
}
