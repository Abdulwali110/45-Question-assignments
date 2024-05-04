let current_users: string[] = ["wali", "Asif", "Ali", "AZEEM", "Sahil", "talal"]

let new_users: string[] = ["abdullah", "Asif", "shahzaib", "azeem", "abid", "TALAL"]

function checkExistUser(current_users: string[], new_users: String[]): void {
  
    let cureentUsertoLower = current_users.map(exist => exist.toLowerCase())

    new_users.forEach((item) => {

        let newusertoLower = item.toLowerCase()


        if (cureentUsertoLower.includes(newusertoLower)) {
            console.log(`${item} This username is alreay Exist \n`);
        } else {
            console.log(`${item} This username is Availbe \n`);
        }
    })
}

checkExistUser(current_users, new_users)