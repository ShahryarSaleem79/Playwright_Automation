// 5 tests for login
import {test, expect} from '@playwright/test';
import { describe } from 'node:test';
import { LoginPage } from '../pages/login.page';
//defining parallel mode for all tests in the file
//test.describe.configure({mode: 'parallel'});
//test with valid credentials
describe ('valid login')
test('valid login', async({page})=>{
const loginPage = new LoginPage(page);
//open url
await page.goto('https://practicetestautomation.com/practice-test-login/');
//assert webpage opened successfully
await expect(page).toHaveTitle('Test Login | Practice Test Automation ');
//enter valid credentials
await loginPage.login('student','Password123')
//verify user navigate to homepage
await expect(page).toHaveTitle('Logged In Successfully | Practice Test Automation');
console.log('user successfully logged in');
});

//test with invalid Password
describe('login with invalid password')
//Login using Invalid Password
test('login with invalid password',async({page})=>{
    const loginPage = new LoginPage(page);
//navigate to website
await page.goto('https://practicetestautomation.com/practice-test-login/');
//assert webpage opened successfully
await expect(page).toHaveTitle('Test Login | Practice Test Automation');
//enter valid username and invalid password
await loginPage.login('student','incorrectPassword')
//verify error message is displayed
await expect(page.getByText('Your password is invalid!')).toBeVisible;
});

//test with empty username
describe('login with empty username')
//Login using empty usename
test('login with empty usrename',async({page})=>{
    const loginpage = new LoginPage(page);
//navigate to website
await page.goto('https://practicetestautomation.com/practice-test-login/');
//assert webpage opened successfully
await expect(page).toHaveTitle('Test Login | Practice Test Automation');
//enter blank username and valid password
await loginpage.login('','Password123')
//verify error message is displayed
await expect(page.getByText('Your username is invalid!')).toBeVisible;
});

//test with empty password
describe('login with empty password')
//Login using empty password
test('login with empty password',async({page})=>{
    const loginPage = new LoginPage(page);
//navigate to website
await page.goto('https://practicetestautomation.com/practice-test-login/');
//assert webpage opened successfully
await expect(page).toHaveTitle('Test Login | Practice Test Automation');
//enter valid username using label locator and leave password field blank
await loginPage.login('studnet','');
//verify error message is displayed
await expect(page.getByText('Your password is invalid!')).toBeVisible;
});

//test with invalid credentials
describe('login with invalid credentials')
test('login with invalid credentials', async({page})=>{
    const loginPage = new LoginPage(page)
//open url
await page.goto('https://practicetestautomation.com/practice-test-login/');
//assert webpage opened successfully
await expect(page).toHaveTitle('Test Login | Practice Test Automation');
//enter invalid credentials
await loginPage.login('Student','password123');
//verify error message is displayed
await expect(page.getByText('Your username is invalid!')).toBeVisible;
});

