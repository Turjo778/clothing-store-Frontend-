import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantPageComponent } from './pant-page.component';

describe('PantPageComponent', () => {
  let component: PantPageComponent;
  let fixture: ComponentFixture<PantPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PantPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
