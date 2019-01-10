import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeElementComponent } from './liste-element.component';

describe('ListeElementComponent', () => {
  let component: ListeElementComponent;
  let fixture: ComponentFixture<ListeElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
