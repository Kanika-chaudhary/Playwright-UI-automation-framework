
import {test,expect} from "../fixtures/pagefixtures.js";
import { jsonUtil } from "../utilities/JsonUtil.js";
//precodition
test.beforeEach(async({loginPage,inventoryPage,cartPage})=>{
    await loginPage.doLogin("standard_user","secret_sauce");
    await loginPage.addWait(1500);
    await inventoryPage.addProductToCart("Sauce Labs Fleece Jacket");
    await loginPage.addWait(1500);
    await inventoryPage.gotoCartPage();
    await cartPage.gotoCheckoutPage();
})

test("Test for checkout process",async({checkoutPage})=>{
    let data=jsonUtil(0);
    await checkoutPage.doContinueCheckoutProcess(data.firstname,data.lastname,data.postalcode);
    expect(await checkoutPage.getPageURL()).toContain("checkout-step-two");
})

test("Test for Cancel checkout process",async({checkoutPage})=>{
await checkoutPage.doCancelCheckout();
expect(await checkoutPage.getPageURL()).toContain("cart");
})