interface TestObject {
  one: boolean;
  two: string;
  three: unknown;
  four: number;
}

enum TestEnum {
  E = 'E',
  A = 'A',
}

export type Test = Record<TestEnum, keyof Pick<TestObject, 'one' | 'four'>>;
