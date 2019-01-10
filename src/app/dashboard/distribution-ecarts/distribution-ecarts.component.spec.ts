import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionEcartsComponent } from './distribution-ecarts.component';

describe('DistributionEcartsComponent', () => {
  let component: DistributionEcartsComponent;
  let fixture: ComponentFixture<DistributionEcartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionEcartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionEcartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
