import { Test, TestingModule } from '@nestjs/testing';
import { MwDao } from './mw.dao';

describe('MwDao', () => {
  let service: MwDao;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MwDao],
    }).compile();

    service = module.get<MwDao>(MwDao);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
