

import {test,expect} from "../fixtures/pagefixtures.js"

//precodition
test.beforeEach(async({loginPage,inventoryPage})=>{

    await loginPage.doLogin("standard_user","secret_sauce");
    await loginPage.addWait(1500);
    await inventoryPage.addProductToCart("Sauce Labs Fleece Jacket");


})

test("Test for Launch of cart page",async({inventoryPage})=>{

    await inventoryPage.gotoCartPage();
    //assertion
    expect(await inventoryPage.getPageURL()).toContain("cart");

})

test("Test for get cart product details",async({inventoryPage,cartPage})=>{
await inventoryPage.gotoCartPage();
let allProducts:string[]=await cartPage.getCartProductDetails();
expect(allProducts[0]).toBe("Sauce Labs Fleece Jacket");
console.log("Product from cart: ",allProducts);
})

test("Test for Product remove from cart",async({inventoryPage,cartPage})=>{
await inventoryPage.gotoCartPage();
await cartPage.removeProduct();
await cartPage.addWait(1500);
expect(cartPage.getCartProductDetails.length).toBe(0);
console.log("Product removed from cart!");
})

test("Test for Continue shopping",async({inventoryPage,cartPage})=>{
await inventoryPage.gotoCartPage();
await cartPage.addWait(1500);
await cartPage.doContinueShipping();
await cartPage.addWait(1500);
expect(await cartPage.getPageURL()).toContain("inventory");
console.log("User navigated to inventory page");
})

test("Test for launch of checkout page",async({inventoryPage,cartPage})=>{
await inventoryPage.gotoCartPage();
await cartPage.gotoCheckoutPage();
expect(await cartPage.getPageURL()).toContain("checkout");
console.log("User navigated to Checkout page!");

})