import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldHomePageComponent } from './old-home-page.component';

describe('OldHomePageComponent', () => {
  let component: OldHomePageComponent;
  let fixture: ComponentFixture<OldHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
