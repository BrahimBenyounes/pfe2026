import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Formation } from 'src/app/models/formation.model';
import { FormationService } from 'src/app/services/formation/formation.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ViewChild } from '@angular/core';
import { AddFormationsComponent } from './add-formations/add-formations.component';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent {
  displayedColumns: string[] = ['id', 'titre', 'description', 'videoUrl', 'action'];
  dataSource = new MatTableDataSource<Formation>();

  @ViewChild(MatPaginator) paginator: any = MatPaginator;
  @ViewChild(MatSort) sort: any = MatSort;

  constructor(
    private formationService: FormationService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getFormations();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getFormations() {
    this.formationService.getAllFormations().subscribe({
      next: (res) => {
        this.dataSource.data = res;
      },
      error: (err) => {
        console.error('Error loading formations:', err);
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

 

  showDialog(id: string) {
    
    console.log('Open View Formation Dialog for ID:', id);


  
  }


  addDialog() {
        const dialogRef = this.dialog.open(AddFormationsComponent, {
          width: '50%',
          position: { top: '20px' },
        });
}

}
