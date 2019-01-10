import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepresentationCapteurAlgoComponent } from './representation-capteur-algo.component';

describe('RepresentationCapteurAlgoComponent', () => {
  let component: RepresentationCapteurAlgoComponent;
  let fixture: ComponentFixture<RepresentationCapteurAlgoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepresentationCapteurAlgoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepresentationCapteurAlgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
