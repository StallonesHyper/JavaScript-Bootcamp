
let currentResult = 0;

const indirectFunc = document.getElementById('IndirectFunc');


function add(a,b){
    c=a+b;
    return c;
}

indirectFunc.addEventListener('click',add)//No Need Of PAssing Parameters Here;

// Whenever The User Clicks The Button Or The HTML Attribute Ex:indirectFunc The Function Will Be Called 

//This Code Will Execute Only When The Event Listener Is Triggered In The Browser.
// List Of Event Listners In Upcoming Code FileList:

