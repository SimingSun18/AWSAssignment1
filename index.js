exports.handler = async (event) => {
    // TODO implement
    console.log(event);
    if (event.messages[0]!=null){
         return "I m bot"+event.messages[0].type+". Hi Mr."+event.messages[0].id+"!";
    }
    else{
        return "There is a error, please retype your messages";
    }
    const response = {
        statusCode: 200,
        keyTest: event.key1,
        body: JSON.stringify('Hello from Lambda!')
    };
    
};
