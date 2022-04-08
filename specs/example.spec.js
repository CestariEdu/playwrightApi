const { test, expect } = require('@playwright/test');

test('should get a pokemon item list', async ({ request }) => {
  const response = await request.get('item');
  const pokeItems = await response.json();
  expect(response.ok()).toBeTruthy();
  expect(pokeItems.count).toBeGreaterThan(0);
});

test('should get a "potion" item details', async ({ request }) => {
  const response = await request.get('item/potion');
  const pokeItem = await response.json();
  // console.log(await response.json())
  expect(response.status()).toEqual(200);
  expect(pokeItem.name).toEqual('potion');
  expect(pokeItem.id).toEqual(17);
});
