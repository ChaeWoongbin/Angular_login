import { TestBed } from '@angular/core/testing';

import { AlreadyGuardGuard } from './already-guard.guard';

describe('AlreadyGuardGuard', () => {
  let guard: AlreadyGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AlreadyGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
