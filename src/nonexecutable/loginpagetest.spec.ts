
import {test,expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";

//AAA Pattern
//Write each tc independent

test("Test for validate URL",async({page})=>{

//Create login page object to call method from loginpage
let loginPage=new LoginPage(page);
await loginPage.goToLoginPage();
let actUrl=await loginPage.getPageURL();
expect(actUrl).toBe("https://www.saucedemo.com/");
console.log("Url of application matched: "+actUrl);


})
test("Test for application title",async({page})=>{

    let loginPage=new LoginPage(page);
    await loginPage.goToLoginPage();
    let actTitle=await loginPage.getPageTitle();
    expect(actTitle).toBe("Swag Labs");
    console.log("Title matched: "+actTitle);
    
})

test("Test for login function with valid credentials",async({page})=>{

    let loginpage=new LoginPage(page);
    await loginpage.goToLoginPage();
    await loginpage.fillUserName("standard_user");
    await loginpage.fillPassword("secret_sauce");
    await loginpage.clickOnLoginButton();
    await expect(page).toHaveURL(/inventory/);
    console.log("User login completed...Navigated to inventory page");

})

//Negative scenario
test("Test for login with invalid credentials",async({page})=>{
    let loginpage=new LoginPage(page);
    await loginpage.goToLoginPage();
    await loginpage.doLogin("standard_user","admin123");
    await expect(page).not.toHaveURL("/inventory/");
    console.log("Error message:",await loginpage.getErrorMessage());
        
   


})







