
import {test,expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";

//AAA Pattern
//Write each tc independent

let loginPage:LoginPage;
test.beforeEach(async({page})=>{
loginPage=new LoginPage(page);
await loginPage.goToLoginPage();

})






test("Test for validate URL",async({})=>{

//Create login page object to call method from loginpage

let actUrl=await loginPage.getPageURL();
expect(actUrl).toBe("https://www.saucedemo.com/");
console.log("Url of application matched: "+actUrl);


})
test("Test for application title",async({})=>{

   
    let actTitle=await loginPage.getPageTitle();
    expect(actTitle).toBe("Swag Labs");
    console.log("Title matched: "+actTitle);
    
})

test("Test for login function with valid credentials",async({page})=>{

   
    await loginPage.fillUserName("standard_user");
    await loginPage.fillPassword("secret_sauce");
    await loginPage.clickOnLoginButton();
    await expect(page).toHaveURL(/inventory/);
    console.log("User login completed...Navigated to inventory page");

})

//Negative scenario
test("Test for login with invalid credentials",async({page})=>{
   
    await loginPage.doLogin("standard_user","admin123");
    await expect(page).not.toHaveURL("/inventory/");
    console.log("Error message:",await loginPage.getErrorMessage());
        
   


})







