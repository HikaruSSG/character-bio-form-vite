const { chromium } = require('playwright');

async function runTests() {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    await page.goto('http://localhost:5173');
    // Add your test logic here
    console.log('Tests completed successfully');
  } catch (error) {
    console.error('Tests failed:', error);
  } finally {
    await browser.close();
  }
}

runTests();
