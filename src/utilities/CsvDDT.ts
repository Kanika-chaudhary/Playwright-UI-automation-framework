
import fs from "fs"
import Papa from "papaparse"

export function csvDDTUtil():any
{
 //extract csv file data from file:Synchronously reads the entire contents of a file.
    let csvFileContents=fs.readFileSync("src/testData/App.csv","utf-8");

    //parse it using papaparse library
    let result=Papa.parse(csvFileContents,{
        header:true, //If true, the first row of parsed data will be interpreted as field names. 
        skipEmptyLines:true //If true, lines that are completely empty (those which evaluate to an empty string) will be skipped.
    })

    return result.data;
   
}