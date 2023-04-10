import {chromium, expect, test} from "@playwright/test"


test.describe("basic test case", async () => {
  
  test('should first', async () => { 
    const browser = await chromium.launch({
      headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.amazon.in/")
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
    await page.fill("#twotabsearchtextbox", "Test");
    await page.click("#nav-search-submit-button");

    // await page.waitForTimeout(5000);
  });

  test('-ve test title', async () => { 
    const browser = await chromium.launch({
      headless: false
    });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.amazon.in/")
    await expect(page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles,")
    
    await page.waitForTimeout(5000);
  });
  
});
