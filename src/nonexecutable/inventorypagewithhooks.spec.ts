


import {test,expect} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { log } from "console";

let loginPage:LoginPage;
let inventoryPage:InventoryPage;


test.beforeEach(async({page})=>{
 loginPage=new LoginPage(page);
await loginPage.goToLoginPage();
await loginPage.doLogin("standard_user","secret_sauce");
//await page.waitForTimeout(2000);
await loginPage.addWait(2000);
 inventoryPage=new InventoryPage(page);
})

//AAA
test("Test for Validate total product count",async({})=>{
// let loginPage=new LoginPage(page);
// await loginPage.goToLoginPage();
// await loginPage.doLogin("standard_user","secret_sauce");
// //await page.waitForTimeout(2000);
// await loginPage.addWait(2000);
// let inventoryPage=new InventoryPage(page);
let count=await inventoryPage.getTotalProductCount();
expect(count).toBe(6);
console.log("Total product count matched: "+count);
})


test("Test for Product details",async({})=>{
let productList:string[]=await inventoryPage.getProductDetails();
console.log(productList);
})

test("Test for add product into cart",async({})=>{
let productName=await inventoryPage.addProductToCart("Sauce Labs Bolt T-Shirt");
expect(productName).toBe("Sauce Labs Bolt T-Shirt");
console.log("Product "+productName+" added into cart!");

})

test("Test for Navigating to Cart page",async({})=>{
await inventoryPage.gotoCartPage();
await inventoryPage.addWait(2000);
//assertion
expect(await inventoryPage.getPageURL()).toContain("cart");
console.log("User navigated to cart page!");
})

test("Test for Footer links count",async({})=>{
let count=await inventoryPage.getFooterLinksCount();
expect(count).toBe(3);
console.log("Footerlinks count is matched!");
})