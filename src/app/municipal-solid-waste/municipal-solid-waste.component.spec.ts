import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalSolidWasteComponent } from './municipal-solid-waste.component';

describe('MunicipalSolidWasteComponent', () => {
  let component: MunicipalSolidWasteComponent;
  let fixture: ComponentFixture<MunicipalSolidWasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MunicipalSolidWasteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MunicipalSolidWasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
