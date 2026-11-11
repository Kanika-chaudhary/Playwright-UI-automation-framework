
import {Page, test} from "@playwright/test";


export class BasePage
{

   protected readonly page;

   constructor(page:Page) //Reading page fixture from playwright
   {
    this.page=page; //Assigning to current page

   }

   //Common setup in BasePage
   async getPageTitle():Promise<string>
   {

    return await this.page.title(); //Reading page from basepage

   }

   async getPageURL():Promise<string>
   {
    return this.page.url();

   }


   async addWait(timeout:number):Promise<void> 
   {
      await this.page.waitForTimeout(timeout);
   }



}