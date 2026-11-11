
import { Page } from "@playwright/test";
import { BasePage } from "./BasePage.js";
import { throwDeprecation } from "process";


export class OverviewPage extends BasePage
{

//locators
private readonly paymentDetails;
private readonly finishButton;
private readonly cancelButton;
private readonly message;

//constructor
constructor(page:Page)
{ 
    super(page);
    this.paymentDetails=page.locator("div.summary_info>div[class$='label']");
    this.finishButton=page.locator("#finish");
    this.cancelButton=page.locator("#cancel");
    this.message=page.getByRole("heading",{name:'Thank you for your order!',level:2});


}


//method
async getAllPaymentDetials():Promise<string[]>
{
    return await this.paymentDetails.allInnerTexts();
}

async doFinishProcess()
{
    await this.finishButton.click();
}

async doCancelProcess()
{
    await this.cancelButton.click();

}

async getSuccessMessage():Promise<string>
{
    return await this.message.innerText();
}
}