
function calculationResult(a,b,x){
    if (x==="Add")
    {
        var c=a+b;
        console.log(c);
    }

    else if(x==="Sub")
    {
        var c=a-b;
        console.log(c);

    }


    else if(x==="Multiply")
    {
       var c=a*b;
       console.log(c);
    }

    else if(x==+"Divide")
    {
        var c=a/b;
        console.log(c);
    }
}

calculationResult(10,20,"Add")
calculationResult(10,20,"Sub")
calculationResult(10,20,"Multiply")
calculationResult(10,20,"Divide")
