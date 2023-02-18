import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTodolistComponent } from './form-todolist.component';

describe('FormTodolistComponent', () => {
  let component: FormTodolistComponent;
  let fixture: ComponentFixture<FormTodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTodolistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
