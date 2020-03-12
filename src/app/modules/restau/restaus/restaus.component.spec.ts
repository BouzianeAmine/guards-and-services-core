import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestausComponent } from './restaus.component';

describe('RestausComponent', () => {
  let component: RestausComponent;
  let fixture: ComponentFixture<RestausComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestausComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestausComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
