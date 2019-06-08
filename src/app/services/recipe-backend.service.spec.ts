import { TestBed } from '@angular/core/testing';

import { RecipeBackendService } from './recipe-backend.service';

describe('RecipeBackendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeBackendService = TestBed.get(RecipeBackendService);
    expect(service).toBeTruthy();
  });
});
