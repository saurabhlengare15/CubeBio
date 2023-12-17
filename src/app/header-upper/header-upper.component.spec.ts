import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderUpperComponent } from './header-upper.component';

describe('HeaderUpperComponent', () => {
  let component: HeaderUpperComponent;
  let fixture: ComponentFixture<HeaderUpperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderUpperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderUpperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
