
import { Page } from "@playwright/test";
import { BasePage } from "./BasePage.js";



export class LoginPage extends BasePage
{
    
    //Check page-->Collect Locators(data)
    private readonly username;
    private readonly password;
    private readonly loginButton;
    private readonly errorMessage;


    //Constructor-->To initialize locators(WebElement)
    constructor(page:Page) //Coming from playwright
    {
        super(page); //Passing page to basepage. Control goes to basepage
        this.username=page.getByPlaceholder("Username");
        this.password=page.getByPlaceholder("password");
        this.loginButton=page.getByRole('button',{name:"Login"});
        this.errorMessage=page.locator("h3[data-test='error']");
    }

    //Action commands in method

    async goToLoginPage():Promise<void>
    {
        await this.page.goto("/"); //Path variable will read base url from playwright config file
    }

    async fillUserName(un:string):Promise<void> //dynamic method
    {
        await this.username.fill(un)

    }

    async fillPassword(psw:string):Promise<void>
    {
        await this.password.fill(psw);
    }

    async clickOnLoginButton():Promise<void>
    {
        await this.loginButton.click();
    }

    async doLogin(un:string,psw:string):Promise<void>
    {
        await this.username.fill(un);
        await this.password.fill(psw);
        await this.clickOnLoginButton();
    }


    async getErrorMessage():Promise<string>
    {
        return await this.errorMessage.innerText();
    }




}