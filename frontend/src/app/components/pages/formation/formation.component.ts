import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/services/formation/formation.service';
import { Formation } from 'src/app/models/formation.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  formations: Formation[] = [];

  constructor(
    private formationService: FormationService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.formationService.getAllFormations().subscribe((formations: Formation[]) => {
      this.formations = formations;
    });
  }

  getSafeUrl(videoId: string): SafeResourceUrl {
    const url = 'https://www.youtube.com/embed/' + videoId;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
