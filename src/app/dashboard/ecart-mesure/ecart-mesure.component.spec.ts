import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcartMesureComponent } from './ecart-mesure.component';

describe('EcartMesureComponent', () => {
  let component: EcartMesureComponent;
  let fixture: ComponentFixture<EcartMesureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcartMesureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcartMesureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
