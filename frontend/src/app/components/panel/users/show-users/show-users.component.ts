import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.scss']
})
export class ShowUsersComponent implements OnInit {
  baseUrl = 'http://192.168.186.128:8084';
  user: any;
  downloadUrl: string = `${this.baseUrl}/pfe/api/login/getAllUsers`;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    private userService: UsersService,
    private dialogRef: MatDialogRef<ShowUsersComponent>
  ) {}

  ngOnInit(): void {
    if (this.data?.id) {
      this.getUserById(this.data.id);
    }
  }

  getUserById(id: string): void {
    this.userService.getUserById(id).subscribe({
      next: (res) => {
        this.user = res;
      },
      error: (err) => {
        console.error('Error fetching user:', err);
        alert('Failed to load user data');
      },
    });
  }


  
}
