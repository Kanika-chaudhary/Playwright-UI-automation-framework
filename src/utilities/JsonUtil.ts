

import fs from "fs";

//to read single entry
export function jsonUtil(index:number):any
{
    let data=JSON.parse(fs.readFileSync("src/testdata/UserData.json","utf-8"));
    return data[index];
}