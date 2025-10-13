const repeatString = function(inputString, repeats) 
{
    if (repeats < 0)
    {
        return "ERROR"
    }
    outputString = ""
    for (i=0; i<repeats; i++)
    {
        outputString = outputString+inputString
    }
    
    return outputString
};

// Do not edit below this line
module.exports = repeatString;
