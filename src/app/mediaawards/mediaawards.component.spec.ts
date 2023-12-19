import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaawardsComponent } from './mediaawards.component';

describe('MediaawardsComponent', () => {
  let component: MediaawardsComponent;
  let fixture: ComponentFixture<MediaawardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediaawardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaawardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
