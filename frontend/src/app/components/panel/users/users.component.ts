
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { AddUsersComponent } from './add-users/add-users.component';
import { MatTableDataSource } from '@angular/material/table';
import { ProductService } from 'src/app/services/product/product.service';
import { ShowUsersComponent } from './show-users/show-users.component';
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { User } from 'src/app/models/users.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  displayedColumns: string[] = [
    'email',
    'name',
    'password',
   
  ];

   dataSource = new MatTableDataSource<User>();
    ELEMENT_DATA = [];
  
    @ViewChild(MatPaginator) paginator: any = MatPaginator;
    @ViewChild(MatSort) sort: any = MatSort;
  
    constructor(
      public dialog: MatDialog,
      private userService: UsersService,
      private _snackBar: MatSnackBar,
      
    ) {}
  
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
  
    ngOnInit(): void {
      this.getUsers();
    }
  
    getUsers() {
      this.userService.getDataUsers().subscribe({
        next: (res) => {
          this.dataSource.data = res;
        },
        error: (err) => {
          alert(err);
        },
      });
    }
  
    addDialog() {
      const dialogRef = this.dialog.open(AddUsersComponent, {
        width: '50%',
        position: { top: '20px' },
      });
  
      dialogRef.afterClosed().subscribe((result) => {
        setTimeout(() => {
          this.getUsers();
        }, 500);
  
        if (result?.message == 'success') {
          this.openSnackbarSuccess('Success', 'users successfully created');
        } else if (result?.message == 'error') {
          this.openSnackbarError('Error', 'users create Failed');
        } else if (result?.message == 'invalid') {
          this.openSnackbarError('Error', 'Form invalid');
        }
      });
    }
  
    showDialog(id: String) {
      const dialogRef = this.dialog.open(ShowUsersComponent, {
        width: '50%',
        position: { top: '20px' },
        data: { id: id },
      });
  
      dialogRef.afterClosed().subscribe((result) => {
        this.getUsers();
      });
    }
  
    
  
    openSnackbarSuccess(title: string, message: string) {
      this._snackBar.open(message, title, {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 3000,
        panelClass: 'app-notification-success',
      });
    }
  
    openSnackbarError(title: string, message: string) {
      this._snackBar.open(message, title, {
        horizontalPosition: 'right',
        verticalPosition: 'top',
        duration: 3000,
        panelClass: 'app-notification-error',
      });
    }
  

}
