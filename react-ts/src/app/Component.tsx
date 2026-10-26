import type { Item } from '../../../shared/data.js';

export function Component({ items }: { items: readonly Item[] }) {
  return (
    <main>
      <h1>Заготовка · React + TypeScript</h1>
      <p role="status" aria-label="Підсумок">Записів: {items.length}</p>
    </main>
  );
}
