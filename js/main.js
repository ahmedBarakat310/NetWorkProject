let x = 0;
let editConfiBtn=document.querySelectorAll('.editConfiBtn');
editConfiBtn.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    alert('No Connection')
  })
})


let tableSettings = document.getElementById("tableSettings");
function ShowUsers() {
  let user = ``;

  if (localStorage.getItem('users') != null) {
     let users = JSON.parse(localStorage.getItem('users'));
     
     for (let i = 0; i < users.length; i++) {
       
        let hideFirstButton = i === 0 ? 'style=" pointer-events:none;"' : ''; // Check if it's the first row
   
        user += `
        <tr>
          <td>${users[i].username}</td>
          <td>${users[i].password}</td>
          <td><button class="deleteBtn" ${hideFirstButton} onclick="DeleteElement(${i})">Delete</button></td>
        </tr>
        `;
        tableSettings.innerHTML = user;
     }
  
  } else {
     console.log('there are no users');
  }
}

// active navigation to open and close
let list = document.querySelectorAll(".navigation li");
function activeLink() {
  list.forEach((item) => item.classList.remove("hovered"));
  this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("mouseover", activeLink));
let navigation = document.querySelector(".navigation");
let toggle = document.querySelector(".toggle");
let main = document.querySelector(".main");
toggle.addEventListener("click", () => {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
});


// gwt user from localstorage
let allUser = [];
if (localStorage.getItem("users") != null) {
  allUser = JSON.parse(localStorage.getItem("users"));
}
// delete user accces
function DeleteElement(index) {
  allUser.splice(index, 1);

  localStorage.setItem("users", JSON.stringify(allUser));
  ShowUsers();
}

ShowUsers();

// networkData = [
//   {
//     centerName: "It Department",
//     ipCenter: "192.168.1.0",
//     connectedDevice: [
//       { namee: "HOD CABIN", ip: "192.186.1.2" },
//       { namee: "IT LAB1", ip: "192.168.1.3" },
//       { namee: "IT LAB2", ip: "192.168.1.4" },
//       { namee: "IT LAB3", ip: "192.168.1.5" },
//       { namee: "IT LAB4", ip: "192.168.1.6" },
//       { namee: "Printer0", ip: "192.168.1.7" },
//     ],
//   },
//   {
//     centerName: "Computer Department",
//     ipCenter: "192.168.2.0",
//     connectedDevice: [
//       { namee: "CS HOD CABIN", ip: "192.168.2.2" },

//       { namee: "CSLAB1", ip: "192.168.2.3" },
//       { namee: "CSLAB2", ip: "192.168.2.4" },
//       { namee: "CSLAB3", ip: "192.168.2.5" },
//       { namee: "CSLAB4", ip: "192.168.2.6" },
//       { namee: "Printer7", ip: "192.168.2.7" },
//     ],
//   },
//   {
//     centerName: "Others",
//     ipCenter: "192.168.3.0",
//     connectedDevice: [
//       { namee: "OFFICE", ip: "192.168.3.2" },

//       { namee: "Printer2", ip: "192.168.3.6" },
//       { namee: "EXAM CELL", ip: "192.168.3.3" },
//       { namee: "Printer3", ip: "192.168.3.7" },
//       { namee: "ENQUIRY", ip: "192.168.3.4" },
//       { namee: "TPO", ip: "192.168.3.5" },
//       { namee: "Printer4", ip: "192.168.3.8" },
//     ],
//   },
//   {
//     centerName: "Server Room",
//     ipCenter: "1.0.0.0",
//     connectedDevice: [
//       { namee: "FTP SERVER", ip: "1.0.0.4" },

//       { namee: "PC1", ip: "1.0.0.5" },
//       { namee: "DNS SERVER", ip: "1.0.0.2" },
//       { namee: "WEB SERVER", ip: "1.0.0.3" }
      
//     ],
//   },
//   {
//    centerName: "Internet Lab",
//    ipCenter: "192.168.0.0",
//    connectedDevice: [

//      { namee: "PC2", ip: "192.168.0.2" },
//      { namee: "PC3 ", ip: "192.168.0.3" },
//      { namee: "PC4", ip: "192.168.0.4" },
//      { namee: "PC5", ip: "192.168.0.5" },
//      { namee: "Printer5", ip: "192.168.0.6" },
//    ],
//  },
//  {
//    centerName: "Principle Lab",
//    ipCenter: "192.168.4.0",
//    connectedDevice: [

//      { namee: "PC0", ip: "192.168.4.2" },
//      { namee: "LabTop0 ", ip: "192.168.4.3" },
   
//    ],
//  },
// ];
// let ipContainer=document.getElementById('ipContainer');
// let ipDevices=document.getElementById('ipDevices');

// let collectionOFIp=` `;
// for (let i = 0; i < networkData.length; i++){

// let collectionOFIpDevices=``;
//    for (let j = 0; j < networkData[i].connectedDevice.length; j++) {
//     collectionOFIpDevices +=`
//     <li>${networkData[i].connectedDevice[j].namee} (<span>${networkData[i].connectedDevice[j].ip}</span>) </li>

//     `

      
//    }
//    collectionOFIp +=`
//    <div class="ipBox">
//    <h2>${networkData[i].centerName} (<span>${networkData[i].ipCenter}</span> )</h2>
//    <ul  id="ipDevices">
   
//    ${collectionOFIpDevices}
     
     
//    </ul>
// </div>
//    `

   
// console.log(collectionOFIp);
//      ipContainer.innerHTML=collectionOFIp
   
//   }

// This function creates a default user if no users are in local storage
// function createDefaultUser() {
//   if (localStorage.getItem("users") === null) {
//     localStorage.setItem('users', JSON.stringify([{ username: "admin", password: "0000" }]));
//   }
// }

// // // This function displays the users in the table
// function ShowUsers() {
//   createDefaultUser(); // Ensure there is at least one user

//   let userHTML = '';

//   if (localStorage.getItem("users") != null) {
//     let users = JSON.parse(localStorage.getItem("users"));

//     users.forEach((user, i) => {
//       let hideFirstButton = i === 0 ? 'style="pointer-events:none; opacity:0.4;"' : "";
//       userHTML += `
//         <tr>
//           <td>${user.username}</td>
//           <td>${user.password}</td>
//           <td><button class="deleteBtn" ${hideFirstButton} onclick="DeleteElement(${i})">Delete</button></td>
//         </tr>`;
//     });
//   } else {
//     // If no users are found, display a message
//     userHTML = `
//       <tr>
//         <td colspan="3">No users found</td>
//       </tr>`;
//   }

//   tableSettings.innerHTML = userHTML; // Set the table's inner HTML after constructing all user rows
// }
