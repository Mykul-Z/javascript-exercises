const removeFromArray = function() 
{
    argumentsArray = Array.from(arguments)
    outputArray = []


    if (argumentsArray.length == 1)
    {
        return argumentsArray[0]
    }
    else if (argumentsArray.length > 1)
    {
        inputArray = argumentsArray[0]
        elements = argumentsArray.slice(1)
        
        for (i = 0; i< elements.length; i++)
        {
            if (inputArray.indexOf(elements[i] != -1))
            {
                    inputArray.splice([inputArray.indexOf(elements[i])], 1)
            }      
        }

    }


    return inputArray;

};

// Do not edit below this line
module.exports = removeFromArray;
