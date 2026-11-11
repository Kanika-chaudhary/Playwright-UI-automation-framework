import { Page } from "@playwright/test";
import { BasePage } from "./BasePage.js";


export class CheckoutPage extends BasePage
{
//locators
private readonly firstName;
private readonly lastName;
private readonly postalCode;
private readonly cancelButton;
private readonly continueButton;


//constructor
constructor(page:Page)
{
super(page);
this.firstName=page.locator("#first-name");
this.lastName=page.locator("#last-name");
this.postalCode=page.locator("#postal-code");
this.cancelButton=page.locator("#cancel");
this.continueButton=page.locator("#continue");
}

//method

async doContinueCheckoutProcess(fn:string,ln:string,pc:string)
{
   await this.firstName.fill(fn);
   await this.lastName.fill(ln);
   await this.postalCode.fill(pc);
   console.log("Checkoiut process for user "+fn+" started...");
    await this.addWait(1500);
    await this.continueButton.click();

}

async doCancelCheckout()
{
    await this.cancelButton.click();
}



}