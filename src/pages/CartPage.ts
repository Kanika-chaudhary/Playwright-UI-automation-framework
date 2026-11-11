

import {Page} from "@playwright/test";
import { BasePage } from "./BasePage.js";

//Encapsulation=private locators+public methods
export class CartPage extends BasePage
{

    //locator
    private readonly productName;
    private readonly removeButton;
    private readonly continueShoppingButton;
    private readonly checkoutButton;


    //constructor
    constructor(page:Page)
    {
        super(page);
        this.productName=page.locator("div.inventory_item_name");
        this.removeButton=page.getByRole('button',{name:'Remove'});
        this.continueShoppingButton=page.locator("#continue-shopping");
        this.checkoutButton=page.locator("#checkout");
        
    }

    //methods
    async getCartProductDetails():Promise<string[]>
    {
        return await this.productName.allInnerTexts();

    }

    async removeProduct():Promise<void>
    {
        return await this.removeButton.click();
    }

    async doContinueShipping():Promise<void>
    {
        return await this.continueShoppingButton.click();
    }

    async gotoCheckoutPage():Promise<void>
    {
        return await this.checkoutButton.click();
    }




}