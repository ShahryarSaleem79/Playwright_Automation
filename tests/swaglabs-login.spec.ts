import{test, expect} from '@playwright/test';
test('get page title', async({page})=>{
  await page.goto('https://www.saucedemo.com/');
  const Title = await page.title();
  console.log('page title is:', Title)
})

test('successful login test', async ({ page }) => {
    //Navigate to webpage
  await page.goto('https://www.saucedemo.com/');
  // Enter valid username
await page.getByPlaceholder('Username').fill('standard_user');
//Enter valid password
await page.getByPlaceholder('Password').fill('secret_sauce');
//click login button
await page.getByRole('button', { name: 'Login' }).click();
//await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

await expect.soft(page.locator('.title')).toHaveText('Products');
const actualText = await page.locator('.title').innerText();
console.log('Page title:', actualText);
//await page.getByRole('button',{name: 'Open Menu'}).click();
//await page.getByRole('link',{name: 'Logout'}).click();
//await expect(page).toHaveURL('https://www.saucedemo.com/');
await page
.locator('.inventory_item')
.filter({hasText:'Sauce Labs Backpack'})
.getByRole('button',{name: 'Add to cart'})
.click();
const removeBtn = page
.locator('.inventory_item')
.filter({hasText:'Sauce Labs Backpack'});
await expect.soft(removeBtn.getByRole('button',{name:'Remove'})).toBeVisible();

});

