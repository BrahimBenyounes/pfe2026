import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormationsComponent } from './add-formations.component';

describe('AddFormationsComponent', () => {
  let component: AddFormationsComponent;
  let fixture: ComponentFixture<AddFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFormationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
