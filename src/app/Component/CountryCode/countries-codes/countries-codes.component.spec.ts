import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesCodesComponent } from './countries-codes.component';

describe('CountriesCodesComponent', () => {
  let component: CountriesCodesComponent;
  let fixture: ComponentFixture<CountriesCodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesCodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountriesCodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
