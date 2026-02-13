import {test, expect} from '@playwright/test';
test('Get page URL and validate it with actual', async({page})=>{
await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
//get page url
const pageURL = page.url();
//print page url
console.log(pageURL);
//assert of page url
expect(pageURL).toMatch(/automation_practice.php/);
});