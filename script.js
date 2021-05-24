


function compute()
{
    //Get values for principal, rate and # of years
    //and calculate interest earned
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    
    //Get the year earnings are realized
    var year = new Date().getFullYear() + parseInt(years);

    if (principal <= 0) {
        //Error message for a principal of 0 or less
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else
    {
        document.getElementById("result").innerText = "\nIf you deposit " + principal + "\nat an interest rate of "
        + rate + "%\nyou will receive an amount of $" + interest.toFixed(2) + "\nin the year " + year;
    }

    
}

function updateRate()
{
    //Get rate value from slider and update 
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
        