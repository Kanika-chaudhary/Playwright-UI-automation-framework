


/*
To create your own fixture, use test.extend()
 to create a new test object that will include it.
*/

import {test as baseTest} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { InventoryPage } from "../pages/InventoryPage.js";
import {CartPage} from "../pages/CartPage.js";
import { CheckoutPage } from "../pages/CheckoutPage.js";
import { OverviewPage } from "../pages/OverviewPage.js";



// Declare the  data types of your fixtures.
type pageFixtures={
loginPage:LoginPage,//here loginPage is variable type of LoginPage class object
inventoryPage:InventoryPage
cartPage:CartPage,
checkoutPage:CheckoutPage,
overviewPage:OverviewPage


}

// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test=baseTest.extend<pageFixtures>({

loginPage:async({page},use)=>{
let loginPage=new LoginPage(page);
await loginPage.goToLoginPage();
await use(loginPage);//Use is object which supply current fixture to your test
},

inventoryPage:async({page},use)=>{
   let inventoryPage=new InventoryPage(page);
await use(inventoryPage);
},

cartPage:async({page},use)=>{
   let cartPage=new CartPage(page);
   await use(cartPage);
},

checkoutPage:async({page},use)=>{
   let checkoutPage=new CheckoutPage(page);
   await use(checkoutPage);
},

overviewPage:async({page},use)=>{
let overviewPage=new OverviewPage(page);
await use(overviewPage);
}


})

export {expect} from "@playwright/test";