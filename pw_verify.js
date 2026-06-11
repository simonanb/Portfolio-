const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  
  const errs = [];
  page.on('pageerror', e => errs.push(e.message));
  page.on('console', m => { if(m.type()==='error') errs.push(m.text()); });
  
  await page.goto('http://localhost:5173/portfolio/', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(2500);
  await page.screenshot({ path: 'C:/Users/PC/portfolio/ss_home.png' });
  
  const body = await page.evaluate(() => document.body.innerText.slice(0,500));
  console.log('BODY:', body);
  console.log('ERRORS:', JSON.stringify(errs));
  
  // click near UX Design target (~20%, 40% of 1440x900)
  await page.mouse.click(288, 360);
  await page.waitForTimeout(1200);
  await page.screenshot({ path: 'C:/Users/PC/portfolio/ss_after_click.png' });
  
  const body2 = await page.evaluate(() => document.body.innerText.slice(0,600));
  console.log('AFTER CLICK:', body2);
  
  // Test navigation - click "Open project" if present
  const openBtn = await page.$('button:has-text("Open project")');
  if (openBtn) {
    console.log('Carousel card visible: YES');
    await openBtn.click();
    await page.waitForTimeout(1000);
    await page.screenshot({ path: 'C:/Users/PC/portfolio/ss_project_page.png' });
    const url = page.url();
    console.log('Navigated to:', url);
  } else {
    console.log('Carousel card visible: NO');
  }
  
  await browser.close();
  console.log('DONE');
})().catch(e => { console.error('FAIL:', e.message); process.exit(1); });
