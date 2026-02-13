import {test, expect} from '@playwright/test';
test('Get page URL and validate it with actual', async({page})=>{
await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
//get page url
const pageURL = page.url();
//assert of page url
expect(page).toHaveURL(/automation_practice.php/);
});