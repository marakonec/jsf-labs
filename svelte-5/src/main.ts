import { mount } from 'svelte';
import Component from './app/Component.svelte';
import type { Item } from '../../shared/data.js';

const root = document.querySelector<HTMLElement>('#root');
if (!root) throw new Error('немає елемента #root в index.html');

const response = await fetch('/data.json');
if (!response.ok) throw new Error(`data.json: HTTP ${response.status}`);
const items = (await response.json()) as readonly Item[];
mount(Component, { target: root, props: { items } });
