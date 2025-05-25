import {Validation} from "../util/Validation";

// TEXT FEILDS
let custId = $("#custId");
let custName = $("#custName");
let custLocation = $("#custLocation");
let custEmail = $("#custEmail");
let custContact = $("#custContact");

//BUTTONS IN CUSTOMER MANAGE
let btnSave = $("#CustSave");
let btnUpdate = $("#custDelete");
let btnDelete = $("#custUpdate");
let btnReset = $("#custReset");

function isValidToSave(){}
function genarateCustIds(){}
function save(){

}
function update(){}
function deleteCustomer(){}
export function pageReset(){
    clearText();
    genarateCustIds();
}

function clearText(){
    //HERE SET THE TEXT FEILDS EMPTY
    custName.val("");
    custEmail.val("");
    custLocation.val("");
    custContact.val("");
}