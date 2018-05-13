import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialBaseComponent } from './material-base.component';

describe('MaterialBaseComponent', () => {
  let component: MaterialBaseComponent;
  let fixture: ComponentFixture<MaterialBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
