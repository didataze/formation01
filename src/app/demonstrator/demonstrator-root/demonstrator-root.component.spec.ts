import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemonstratorRootComponent } from './demonstrator-root.component';

describe('DemonstratorRootComponent', () => {
  let component: DemonstratorRootComponent;
  let fixture: ComponentFixture<DemonstratorRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemonstratorRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemonstratorRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
