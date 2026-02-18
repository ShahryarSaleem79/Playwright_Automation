import {Page,Locator} from '@playwright/test';
export class LoginPage{
    private readonly username:Locator;
    private readonly password:Locator;
    private readonly submitButton:Locator;


    constructor(private readonly page:Page){
        this.page = page;
        this.username = page.getByLabel('username');
        this.password = page.getByLabel('password');
        this.submitButton = page.getByRole('button',{name: 'Submit'});
    }

    async login(user:string, pass:string){
        await this.username.fill(user);
        await this.password.fill(pass);
        await this.submitButton.click();
    }






}