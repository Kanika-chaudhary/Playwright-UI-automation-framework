

import {test,expect} from "../fixtures/pagefixtures.js" 
import {excelDDTSheetWiseDataReading} from "../utilities/ExcelDDT.js"
import {csvDDTUtil} from "../utilities/CsvDDT.js"


test("Test for Application url validation",async({loginPage})=>{
let appUrl:string=await loginPage.getPageURL();
expect(appUrl).toBe("https://www.saucedemo.com/");
console.log("Current page url matched! "+appUrl);
})

test("Test for Application title",async({loginPage})=>{

    let appTitle=await loginPage.getPageTitle();
    expect(appTitle).toBe("Swag Labs");
    console.log("Application title matched! "+appTitle);
    
})

test("Test for loginFunctionality with valid credentials",async({loginPage,page})=>{

    await loginPage.doLogin("standard_user","secret_sauce");
    await expect(page).toHaveURL(/inventory/);
    console.log("User navigated to Inventory page!");
    
})

test("Test for login functionality with invalid credentials",async({loginPage})=>{

await loginPage.doLogin("","");
let message:string=await loginPage.getErrorMessage();
expect(message).toBe("Epic sadface: Username is required");
console.log("Error message for block username and passowrd: "+message);

})

//Login with datadriven testing
let dataset=excelDDTSheetWiseDataReading("DataDrivenTest");


for(let data of dataset)
{
    
     
    test(`Test for invalid credentials with data driven for id ${data.id}`,async({loginPage})=>{
       

        await loginPage.doLogin(data.username,data.password);
        expect(await loginPage.getErrorMessage()).toBeTruthy();
        console.log("Error message is: "+await loginPage.getErrorMessage());
        

    })
}

//for csv
let csvdataset=csvDDTUtil();
for(let data of csvdataset)
{
    test(`Test for invalid credentials with csv data driven for id ${data.id}`,async({loginPage})=>{

        await loginPage.doLogin(data.username,data.password);
        expect(await loginPage.getErrorMessage()).toBeTruthy()
        console.log("ErrorMessage is: "+await loginPage.getErrorMessage());
        
    })
}
