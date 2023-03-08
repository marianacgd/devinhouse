import { TestBed } from '@angular/core/testing';

import { MeusItensService } from './meus-itens.service';

describe('MeusItensService', () => {
  let service: MeusItensService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeusItensService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
