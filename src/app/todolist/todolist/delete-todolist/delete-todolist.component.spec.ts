import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTodolistComponent } from './delete-todolist.component';

describe('DeleteTodolistComponent', () => {
  let component: DeleteTodolistComponent;
  let fixture: ComponentFixture<DeleteTodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteTodolistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteTodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
