import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTodolistComponent } from './detail-todolist.component';

describe('DetailTodolistComponent', () => {
  let component: DetailTodolistComponent;
  let fixture: ComponentFixture<DetailTodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTodolistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailTodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
