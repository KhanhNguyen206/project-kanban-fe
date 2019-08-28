import { TestBed } from '@angular/core/testing';

import { BacklogsService } from './backlogs.service';

describe('BacklogsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BacklogsService = TestBed.get(BacklogsService);
    expect(service).toBeTruthy();
  });
});
