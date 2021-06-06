
console.log("cat before try");
try {
    var input=2;
    console.log("cat try");
    //blabla;
    console.log("cat after error");
    //throw new Error ("greska");
    /*throw {
        name: "MyError",   
        message: "OMG! Something wrong happened"    
    }*/
    if(input===2){
        //throw new Error ("ERROR !!! input is 2");
        throw {
            name: "ShouldNotBe2",   
            message: "OMG! Input is 2!"    
        }
    }
    console.log("cat after throw");
}catch(error){
    console.log("Error occured");
    console.log(error.name);
    console.log(error.message);
}finally{
    console.log("cat finally");
}
console.log("cat after finally");