import VentoJs from 'ventojs';
import { promises as fsp } from 'node:fs';

const env = VentoJs({
	includes: './_includes',
});

const templateString = await fsp.readFile('./index.vto', 'utf8');

const template = await env.runString(templateString, {});

console.log(template.content);
