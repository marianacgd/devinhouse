import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncionarioJsonServerComponent } from './funcionario-json-server.component';

describe('FuncionarioJsonServerComponent', () => {
  let component: FuncionarioJsonServerComponent;
  let fixture: ComponentFixture<FuncionarioJsonServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuncionarioJsonServerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuncionarioJsonServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
