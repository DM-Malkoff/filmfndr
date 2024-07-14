import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KinoboxComponent } from './kinobox.component';

describe('KinoboxComponent', () => {
  let component: KinoboxComponent;
  let fixture: ComponentFixture<KinoboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KinoboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KinoboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
