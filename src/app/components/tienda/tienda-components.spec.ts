import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaComponents } from './tienda-components';

describe('TiendaComponents', () => {
  let component: TiendaComponents;
  let fixture: ComponentFixture<TiendaComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiendaComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(TiendaComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
