

import XLSX from "xlsx"

export function excelUtil(index:number):any
{
    //read the file 
let workbook=XLSX.readFile("TestData/ExcelData.xlsx");

//from wrokbook goto sheet
let wroksheet=workbook.Sheets["userData"];

//sheet data do convert it into js object
let jsonObjectData=XLSX.utils.sheet_to_json(wroksheet);

return jsonObjectData[index];
}