import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalPeliculasComponent } from './portal-peliculas.component';

describe('PortalPeliculasComponent', () => {
  let component: PortalPeliculasComponent;
  let fixture: ComponentFixture<PortalPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortalPeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
