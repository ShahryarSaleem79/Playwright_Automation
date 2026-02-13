import {test, expect} from '@playwright/test';
import { describe } from 'node:test';
describe('Method page.url()')
test('Get page URL and validate it with actual', async({page})=>{
await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
//get page url
const pageURL = page.url();
//print page url
console.log(pageURL);
//assert of page url
expect(pageURL).toMatch(/automation_practice.php/);
});

//toHaveURL method
describe ('Method 2 .toHaveURL')
test('Get page URL validate it with actual using .toHaveURL method', async({page})=>{
await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
//assert of page url
await expect(page).toHaveURL(/automation_practice.php/);
});