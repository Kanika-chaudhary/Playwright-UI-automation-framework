
import XLSX from "xlsx";

export function excelDDTSheetWiseDataReading(sheetName:string):any
{
    //read the file 
let workbook=XLSX.readFile("src/testData/TestApp.xlsx");

//from workbook goto sheet
let wroksheet=workbook.Sheets[sheetName];

//sheet data do convert it into js object
let jsonObjectData=XLSX.utils.sheet_to_json(wroksheet);

return jsonObjectData;
}