import { async, TestBed } from '@angular/core/testing';
import { DummyModule } from './dummy.module';

describe('DummyModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DummyModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DummyModule).toBeDefined();
  });
});
