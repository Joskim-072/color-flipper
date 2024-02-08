 // Getting elements from HTML document
 let btn = document.querySelector("button");
 let colName = document.getElementById("name");
 let colHex = document.getElementById("hex");
 let body = document.querySelector("body");

 // Adding event listener for clicking on "Change Color" Button
 btn.addEventListener('click', () => {       
     let Hex = "#";
     for (let i = 0; i < 6; i++) {
         // Generating random hexadecimal number 
         let randomHexNum = Math.floor(Math.random() * 16).toString(16);
         Hex = Hex + randomHexNum;
     }
     body.style.backgroundColor = Hex; 
     colHex.textContent = `Color Code: ${Hex}`;  
     btn.style.background = Hex;
     btn.style.border = "1px solid white";
 });