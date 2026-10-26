import items from '../data/data.json';
import { statusNumbers } from './screen.js';

// Підмножина інтерфейсу expect, якої досить випадкам. Завдяки їй файл не
// залежить від тестового засобу конкретної реалізації.
export interface Expect {
  (value: unknown): {
    toBe(expected: unknown): void;
    toBeGreaterThan(limit: number): void;
    toBeLessThan(limit: number): void;
  };
}

export interface ContractCase {
  name: string;
  run(expect: Expect): Promise<void>;
}

export const TOTAL = items.length;

export const cases: ContractCase[] = [
  {
    name: 'компонент показує кількість записів набору',
    async run(expect: Expect) {
      expect(statusNumbers('Підсумок')[0]).toBe(TOTAL);
    },
  },
];
