import { test, expect } from '@playwright/test';

test.describe('App Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('renders without crashing', async ({ page }) => {
    await expect(page).toHaveTitle(/Character Bio Creator/);
  });

  test('displays the main heading', async ({ page }) => {
    const heading = page.locator('h1');
    await expect(heading).toHaveText('Character Bio Creator');
  });

  test('form submission creates a character bio', async ({ page }) => {
    await page.fill('input[name="name"]', 'John Doe');
    await page.fill('input[name="age"]', '30');
    await page.fill('textarea[name="background"]', 'A mysterious adventurer');
    await page.click('button[type="submit"]');

    const localStorageData = await page.evaluate(() => localStorage.getItem('characterBio'));
    expect(localStorageData).not.toBeNull();
    const bio = JSON.parse(localStorageData as string);
    expect(bio.name).toBe('John Doe');
    expect(bio.age).toBe('30');
    expect(bio.story).toBe('A mysterious adventurer');
  });

  // Add more tests for other functions in App.tsx
});
