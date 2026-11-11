
import {test,expect} from "../fixtures/pagefixtures.js"

test("Test for product count validation",async({loginPage,inventoryPage })=>{
    await loginPage.doLogin("standard_user","secret_sauce");
    await loginPage.addWait(1500);
    let totalProduct:number=await inventoryPage.getTotalProductCount();
    expect(totalProduct).toBe(6);
    console.log("Total products count match: "+totalProduct);
    
})

test("Test for Product details",async({loginPage,inventoryPage})=>{
await loginPage.doLogin("standard_user","secret_sauce");
await loginPage.addWait(1500);
let allProducts=await inventoryPage.getProductDetails();
expect(allProducts.length).toBe(6);
console.log("------Total Product details-----");
console.log(allProducts);

})

test("Test for add product into cart",async({loginPage,inventoryPage})=>{
await loginPage.doLogin("standard_user","secret_sauce");
await loginPage.addWait(1500);
let productName=await inventoryPage.addProductToCart("Sauce Labs Fleece Jacket");
expect(productName).toBe("Sauce Labs Fleece Jacket");
console.log("Product added into cart: "+productName);
})


test("Test for Footerlink validation",async({loginPage,inventoryPage})=>{
await loginPage.doLogin("standard_user","secret_sauce");
await loginPage.addWait(1500);
let footerCount=await inventoryPage.getFooterLinksCount();
expect(footerCount).toBe(3);
console.log("Footer links count validated which is "+footerCount);
})

test("Test for navigation to cart page",async({loginPage,inventoryPage})=>{
await loginPage.doLogin("standard_user","secret_sauce");
await loginPage.addWait(1500);
await inventoryPage.gotoCartPage();
await loginPage.addWait(1500);
expect(await inventoryPage.getPageURL()).toContain("cart");
console.log("User navigated to cart page");
})