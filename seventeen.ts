let personal_Guest: Array<string> = [
     "Abdullah Rizvi", "Hamza Rizvi", "Wali Rizvi",
     "Hussain Shah", "Abdul wali", "Haris",
     "Abdul hadi",
 ]
 
 console.log(personal_Guest);
 

 for (let guest of personal_Guest) {
 }
 

 while (personal_Guest.length > 2) {  
     let removed_Person = personal_Guest.pop()
     console.log(`Sorry ${removed_Person} I can't invite you For dinner.`);
 }
 
 personal_Guest.forEach((stillGuest) => {
     console.log(`still you are ${stillGuest} invited for a dinner.`);
 })
 
 let empty_Array = personal_Guest.splice(personal_Guest.length, 0)
 console.log(`guest list after dinner ${empty_Array}:`); 