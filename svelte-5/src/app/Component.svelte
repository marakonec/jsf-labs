<script lang="ts">
  import type { Item } from '../../../shared/data.js';

  let { items }: { items: readonly Item[] } = $props();
</script>

<main>
  <h1>Заготовка · Svelte 5</h1>
  <p role="status" aria-label="Підсумок">Записів: {items.length}</p>
</main>
