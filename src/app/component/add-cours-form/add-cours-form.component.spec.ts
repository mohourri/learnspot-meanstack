import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCoursFormComponent } from './add-cours-form.component';

describe('AddCoursFormComponent', () => {
  let component: AddCoursFormComponent;
  let fixture: ComponentFixture<AddCoursFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCoursFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCoursFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
