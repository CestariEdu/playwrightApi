const { test, expect } = require('@playwright/test');
const { validateSchema } = require('../utils/index');
const jsonPokeItem = require('../schemas/pokeItem.json');
const jsonPokeItems = require('../schemas/pokeItems.json');

test('should get pokemon item list', async ({ request }) => {
  const response = await request.get('item');
  const pokeItems = await response.json();

  expect(response.ok()).toBeTruthy();
  expect(pokeItems.count).toBeGreaterThan(0);
  expect(await validateSchema(jsonPokeItems, pokeItems)).toEqual('Success');

});

test('should get a pokemon item', async ({ request }) => {
  const response = await request.get('item/potion');
  const pokeItem = await response.json();

  expect(response.status()).toEqual(200);
  expect(pokeItem.name).toEqual('potion');
  expect(pokeItem.id).toEqual(17);
  expect(await validateSchema(jsonPokeItem, pokeItem)).toEqual('Success');
});
