import { TestBed } from '@angular/core/testing';

import { AddPizzaService } from './add-pizza.service';

describe('AddPizzaService', () => {
  let service: AddPizzaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPizzaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
