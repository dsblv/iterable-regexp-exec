import test from 'ava';
import fn from './';

test('global', t => {
	const res = fn(/./g, 'sup');

	const all = [...res].map(match => match[0]);

	t.same(all, ['s', 'u', 'p']);
});

test('non-global', t => {
	const res = fn(/./, 'sup');

	const all = [...res].map(match => match[0]);

	t.same(all, ['s']);
});

test('no matches', t => {
	t.same([...fn(/./g, '')], []);
});

test('capture group', t => {
	const res = fn(/sup, (.*)!/, 'sup, dawg!');

	const value = [...res][0];

	t.is(value[1], 'dawg');
});
