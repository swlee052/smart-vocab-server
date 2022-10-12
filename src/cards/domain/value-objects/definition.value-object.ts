export class Definition {
  meaning: string;
  functionalLabel: FunctionalLabel;
  exampleSentences: string[];
}

export type FunctionalLabel =
  | 'n'
  | 'v'
  | 'adj'
  | 'adv'
  | 'prep'
  | 'conj'
  | 'pron'
  | 'art'
  | 'num'
  | 'int'
  | 'interj'
  | 'part'
  | 'vb'
  | 'vbd'
  | 'vbg'
  | 'vbn'
  | 'vbp'
  | 'vbz';
