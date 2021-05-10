import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasCovidComponent } from './estadisticas-covid.component';

describe('EstadisticasCovidComponent', () => {
  let component: EstadisticasCovidComponent;
  let fixture: ComponentFixture<EstadisticasCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticasCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
