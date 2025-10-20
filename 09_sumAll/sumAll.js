const sumAll = function(firstInput, secondInput) {

    if (firstInput > secondInput)
    {
        start = secondInput;
        finish = firstInput;
    }
    else
    {
        start = firstInput;
        finish = secondInput;
    }
    if(Number.isInteger(start) != true || Number.isInteger(finish) != true)
    {
        return "ERROR"
    }
    else if(start < 0 || finish < 0)
    {
        return "ERROR"
    }
    else
    {
        sum = 0

        for (i=start; start <= finish; start++)
        {
            sum = sum + start;
        }

        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
