const pass=document.getElementById("Password");
const length=12;

const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const num="0123456789";
const symbols="~`!@#$%^&*()_+=[]{}()<>./\|;";

function create_pass(){
   let password="";
   password+=uppercase[Math.floor(Math.random()*uppercase.length)];
   password+=lowercase[Math.floor(Math.random()*lowercase.length)];
   password+=num[Math.floor(Math.random()*num.length)];
   password+=symbols[Math.floor(Math.random()*symbols.length)];
 
   const allchar=uppercase + lowercase + num + symbols;

   while(length > password.length){
       password+=allchar[Math.floor(Math.random()*allchar.length)];
   }
   pass.value=password;
}
// while(length > password.length){
//     password+=allchar[Math.floor(Math.random()*allchar.length)];
// }
//     pass.value=password
//  }

function copypass(){
   pass.select();
   document.execCommand("copy");
   console.log("hello");
}

const copymsg=document.querySelector('i');
copymsg.addEventListener('click', function(){
  console.log("hello");
})
