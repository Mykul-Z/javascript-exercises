const reverseString = function(inputString) 
{
    outputArray = []

    for (i = inputString.length-1; i >= 0; i--)
    {
        outputArray.push(inputString.charAt(i))
    }

    return outputArray.join("")

};

// Do not edit below this line
module.exports = reverseString;
