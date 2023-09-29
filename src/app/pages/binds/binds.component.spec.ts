import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindsComponent } from './binds.component';

describe('BindsComponent', () => {
  let component: BindsComponent;
  let fixture: ComponentFixture<BindsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BindsComponent]
    });
    fixture = TestBed.createComponent(BindsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
