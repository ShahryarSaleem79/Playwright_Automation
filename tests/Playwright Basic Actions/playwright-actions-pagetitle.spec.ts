import{test, expect} from '@playwright/test';
test('Get Page Title',async({page})=>{
await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
//Storing page title
const pageTitle = await page.title();
//Assertion of Page Title
await expect(page).toHaveTitle(pageTitle);
//Print Page Title
console.log('Page Title is:', pageTitle)
});
