import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleSubjectComponent } from './sample-subject.component';

describe('SampleSubjectComponent', () => {
  let component: SampleSubjectComponent;
  let fixture: ComponentFixture<SampleSubjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleSubjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
