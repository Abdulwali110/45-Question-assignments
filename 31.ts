let loginPortalUser:string[] =["Admin", "Adil", "Asif", "okasha bhai", "Abdullah", "sir qasim"] 


function userHandler(loginPortalUser:string[]){

    if(loginPortalUser.length === 0){
       console.log("we are find to user !"); 
        return;  
    }else{
        loginPortalUser.map((items, i) => {
        items = items.toLowerCase();
        items.match("admin ameen alam") ? 
            console.log(" Hello admin, would you like to see a status report?") :
            console.log(` Hello ${items}, thank you for logging in again \n`);
        })   
    }
   
}

console.log("\n\n array is not empty : \n");
userHandler(loginPortalUser)

loginPortalUser = []

console.log("\n\n array is empty : \n");
userHandler(loginPortalUser)