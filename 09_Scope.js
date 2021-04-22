//Global Variables & Local Variables


// 1.GLOBAL VARIABLES: (SCOPE)
let outData = 0;
let result ;//This Is A Global Variable

function funct(number){
    result = number-1;
    return result;
}

outData = funct(100);
console.log(outData);

// OR 

outData = result;
console.log(outData);
// BOTH WAYS WORK FINE





// 2.LOCAL VARIABLES: (SCOPE)
let onScreen = 0;

function fun(number)
{
    let result = number+1;//This Is Called A Local Variable Or Block Scope
    return result;
}

onScreen = fun(99);
console.log(onScreen);

// But 
console.log(result) //This Will Give An Error



// NOTE: Functions Have Full Access To Their Surrounding Context But The Surrounding Components Dont Have Acess To Local Scope  