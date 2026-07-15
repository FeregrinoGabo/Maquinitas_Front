import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaquinaComponents } from './maquina-components';

describe('MaquinaComponents', () => {
  let component: MaquinaComponents;
  let fixture: ComponentFixture<MaquinaComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaquinaComponents],
    }).compileComponents();

    fixture = TestBed.createComponent(MaquinaComponents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
