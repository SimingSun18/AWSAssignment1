exports.handler = async (event,context) => {
    // TODO implement
    
    var rectext=event.messages[0].unstructured.text;
    
    if (rectext=="hello"){
        const response = {
            statusCode: 200,
            body: JSON.stringify("Hello from Lambda!")
    };
        return response;
    }
    else if (rectext=="bot")
    {
        const response = {
            statusCode: 200,
            body: JSON.stringify("I am the bot !")
    };
        return response;
        
    }
    else if(rectext=="i want to chat")
    {
        const response = {
            statusCode: 200,
            body: JSON.stringify("Let us chat!")
    };
        return response;
        
        
    }
    else
    {
         const response = {
            statusCode: 200,
            body: JSON.stringify("Tell me something i can understand!")
    };
        return response;
        
    }
        
    
    
};
