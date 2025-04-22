import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-formations',
  templateUrl: './add-formations.component.html',
  styleUrls: ['./add-formations.component.scss']
})

export class AddFormationsComponent {
  formationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private httpClient: HttpClient,
    private dialogRef: MatDialogRef<AddFormationsComponent>
  ) {
    this.formationForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      videoUrl: ['', [Validators.required, Validators.pattern(/^https:\/\/www\.youtube\.com\/watch\?v=[\w-]{11}$/)]],
      videoId: ['', Validators.required]
    });
  }

  public submit(): void {
    if (this.formationForm.invalid) {
      alert('Veuillez corriger les erreurs avant de soumettre.');
      return;
    }

    console.log(this.formationForm.value);

    this.httpClient.post('http://localhost:8088/pfe/api/formation/add-formation', this.formationForm.value)
      .subscribe(
        (response: any) => {
          alert('La formation a été ajoutée avec succès !');
          this.dialogRef.close();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la formation:', error);
          alert('Une erreur s\'est produite, veuillez réessayer.');
        }
      );
  }

  get control() {
    return this.formationForm.controls;
  }
}
