import { Test, TestingModule } from '@nestjs/testing';
import { Definition } from 'src/dictionary/entities/wordData';
import { MwDaoService } from './mw-dao.service';

describe('MwDaoService', () => {
  let service: MwDaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MwDaoService],
    }).compile();

    service = module.get<MwDaoService>(MwDaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it(`getDefinitionList()`, async function () {
    const dictionary = new MwDaoService();
    const defList: Definition[] = await dictionary.getDefinitionList('test');

    expect(defList).toBeDefined();
  });
});
