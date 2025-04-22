import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFormationsComponent } from './show-formations.component';

describe('ShowFormationsComponent', () => {
  let component: ShowFormationsComponent;
  let fixture: ComponentFixture<ShowFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFormationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
