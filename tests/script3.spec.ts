import { test, expect } from "@playwright/test";

test("Practice Test 7", async ({ page }) => {
  console.log("Starting Practice Test 6");

  await page.goto("https://www.google.com/");

  console.log(await page.title());

  await expect(page).toHaveTitle("Google");

  console.log("Ending Practice Test 7");
});
