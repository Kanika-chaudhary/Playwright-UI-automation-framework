


import { log } from "reporting-labs";
import {test,expect} from "../fixtures/pagefixtures.js"
import { jsonUtil } from "../utilities/JsonUtil.js";
//precodition
test.beforeEach(async({loginPage,inventoryPage,cartPage,checkoutPage})=>{
    await loginPage.doLogin("standard_user","secret_sauce");
    await loginPage.addWait(1500);
    await inventoryPage.addProductToCart("Sauce Labs Fleece Jacket");
    await loginPage.addWait(1500);
    await inventoryPage.gotoCartPage();
    await cartPage.gotoCheckoutPage();
     let data=jsonUtil(0);
    await checkoutPage.doContinueCheckoutProcess(data.firstname,data.lastname,data.postalcode);

})

test("Test for Payment details",async({overviewPage})=>{
let allData=await overviewPage.getAllPaymentDetials();
console.log(allData);
expect(allData).toContain("Total: $53.99");

})

test("Test for Finish checkout-overview porecss",async({overviewPage})=>{

    await overviewPage.doFinishProcess();
    expect(await overviewPage.getSuccessMessage()).toBe("Thank you for your order!");
    console.log("SuccessMessage: "+await overviewPage.getSuccessMessage());
    
})

test("Test for Overviewpage cancel process",async({overviewPage})=>{
await overviewPage.doCancelProcess();
expect(await overviewPage.getPageURL()).toContain("inventory");

})