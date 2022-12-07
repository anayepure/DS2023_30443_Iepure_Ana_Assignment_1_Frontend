import { Component, OnInit } from '@angular/core';
import {AccountusersService} from "../services/accountusers.service";
import {MatTableDataSource} from "@angular/material/table";
import {AccountUser} from "../models/AccountUser";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {EditUserComponent} from "../dialogs/edit-user/edit-user.component";
import {AddUserComponent} from "../dialogs/add-user/add-user.component";


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  displayedColumns: string[] = ['username', 'password', 'role', 'actions'];
  public dataSource: MatTableDataSource<AccountUser>;
  constructor(private usersService:AccountusersService,
              public dialog: MatDialog
              ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers()
  {
    this.usersService.getAllUsers().subscribe((results)=>
    {
      this.dataSource=new MatTableDataSource(results);
    })
  }

  deleteUser(id: number)
  {
    this.usersService.deleteUser(id).subscribe(()=>this.loadUsers());
  }

  openEditDialog(row: number): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      data: row,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.loadUsers();
    });
  }

  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddUserComponent, {
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.loadUsers();
    });
  }
}
