import { BasePage } from "./BasePage.js";
import {Locator, Page} from "@playwright/test";

export class InventoryPage extends BasePage
{
    //Private webelement
    private readonly products;
    private readonly footerList;
    private readonly addToCartButton;
    private readonly cartOption;
   

    //constructor: to initialize webelement
    constructor(page:Page)
    {
        super(page);
        this.products=page.locator("div.inventory_item_name ");
        this.footerList=page.locator("footer a");
        this.addToCartButton=page.getByText("Add to cart");
        this.cartOption=page.locator("a.shopping_cart_link");
       

    }

    //action methods

    async getTotalProductCount():Promise<number>
    {
        return await this.products.count();
    }

    async getProductDetails():Promise<string[]>
    {
        return await this.products.allInnerTexts();
    }

    async addProductToCart(productName:string):Promise<string>
    {
        let productList:Locator[]=await this.products.all();
        for(let prod of productList)
        {
            if((await prod.innerText()).includes(productName))
            {
                //click on product
                await prod.click();
                break;
            }
        }

        //click on addto cart button
        await this.addToCartButton.click();
        
        return productName;
        
    }


    async gotoCartPage():Promise<void>
    {
        await this.cartOption.click();
    }

    async getFooterLinksCount():Promise<number>
    {
       return await this.footerList.count();
    }


}