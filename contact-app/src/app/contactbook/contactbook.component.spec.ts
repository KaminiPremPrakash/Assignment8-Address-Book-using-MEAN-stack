import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactbookComponent } from './contactbook.component';

describe('ContactbookComponent', () => {
  let component: ContactbookComponent;
  let fixture: ComponentFixture<ContactbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
