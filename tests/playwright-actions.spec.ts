import {test, expect} from '@playwright/test';
test('get title of the page', async({page})=>{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
    //verify page title
    await expect(page).toHaveTitle('Selenium Practice - Student Registration Form');
    //Getting page url
    const url = await page.url();
    console.log('Page url is:', url);
    //clicking on Elements button
    await page.getByRole('button',{name: 'Elements'}).click();
    await page.getByText('Buttons').click();
    await expect(page).toHaveURL(/buttons.php/);
    await page
    .getByRole('button', { name: 'Click Me', exact:true})
    .click();
    await expect(page.locator('#welcomeDiv')).toBeVisible();
    expect(page.getByText('You have done a dynamic click')).toBeVisible;
    //simulate Righ Click
    await page.getByRole('button',{name: 'Right Click Me',exact:true}).click({button: 'right'});
    //double click
    await page.getByRole('button',{name:'Double Click ME'}).dblclick();
    await expect(page.getByText('You have Double clicked')).toBeVisible;

    
    
    
    

});



