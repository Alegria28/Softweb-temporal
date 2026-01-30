import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { sophiaSidebarComponent } from './sophia-sidebar.component';

describe('sophiaSidebarComponent', () => {
  let component: sophiaSidebarComponent;
  let fixture: ComponentFixture<sophiaSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ sophiaSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(sophiaSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
