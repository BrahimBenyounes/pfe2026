import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormationService } from 'src/app/services/formation/formation.service';  // Correct service for formations

@Component({
  selector: 'app-show-formations',
  templateUrl: './show-formations.component.html',
  styleUrls: ['./show-formations.component.scss']
})
export class ShowFormationsComponent implements OnInit {
  baseUrl = 'http://localhost:8088';  // Base URL for your formation API
  Formation: any;  // Store formation data
  downloadUrl: string = `${this.baseUrl}/pfe/api/formation/retrieve-all-formations`;  // URL to retrieve all formations

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { id: number },  // Inject ID of the formation
    private formationService: FormationService,  // Service for fetching formation data
    private dialogRef: MatDialogRef<ShowFormationsComponent>  // Dialog reference to close the dialog
  ) {}

  ngOnInit(): void {
    if (this.data?.id) {
      this.getFormationById(this.data.id);  // Fetch formation by ID if provided
    }
  }

// Method to fetch formation data by ID
getFormationById(id: number): void {
  this.formationService.getFormationById(id).subscribe({
    next: (res) => {
      this.Formation = res;  // Store the fetched formation data (use lowercase 'formation' to follow convention)
    },
    error: (err) => {
      console.error('Error fetching formation:', err);  // Handle error
      alert('Failed to load formation data');
    }
  });
}
}
