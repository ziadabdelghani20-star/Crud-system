// var protuctNameInput = document.getElementById("protuctName");
// var protuctPriceInput = document.getElementById("protuctPrice");
// var protuctCategoryInput = document.getElementById("protuctCategory");
// var protuctDecribionInput = document.getElementById("protuctDecribion");

// var containerProtuct = [];

// // Start for Display Protucts in local Storge
// if (localStorage.getItem("Protucts") != null) {
    
//     containerProtuct = JSON.parse(localStorage.getItem('Protucts'))
//     displayElement(containerProtuct)
    
// }
// // End for Display Protucts in local Storge


// //Start for add Protuct in Array and apper it
// function addProtuct() {
//     var protuct = {
//         name: protuctNameInput.value,
//         Price: protuctPriceInput.value,
//         Category: protuctCategoryInput.value,
//         Decribion: protuctDecribionInput.value,
//     };
//     containerProtuct.push(protuct);

//     console.log(containerProtuct);
//     localStorage.setItem("Protucts", JSON.stringify(containerProtuct));
//     displayElement(containerProtuct); // Call displayElement to update the table
//     clearForm();
    
// }
// //End for add Protuct in Array and apper it


// //Start Add Row in Tabel
// function displayElement(containerProtuct) {
//     var cartona = '';
//     for (let i = 0; i < containerProtuct.length; i++) {
//         cartona += `<tr class="">
//                         <td scope="row"> ${containerProtuct[i].name}</td>
//                         <td> ${containerProtuct[i].Price}</td>
//                         <td>${containerProtuct[i].Category}</td>
//                         <td>${containerProtuct[i].Decribion}</td>
//                         <td><button type="button" class="btn  btn-warning">Update</button></td>
//                         <td><button  onclick="deletePorduct(${i});"  class="btn btn-danger">Delete</button></td>
//                     </tr>`;
//     }
//     document.getElementById('tableBody').innerHTML = cartona;
// }
// //End Add Row in Tabel





// //Start Clear form
// function clearForm() {
//     protuctNameInput.value = '';
//     protuctPriceInput.value = '';
//     protuctCategoryInput.value = '';
//     protuctDecribionInput.value = '';
    
// }
// //End Clear form

// //Start Delete From Table
// function deletePorduct(protuctIndex) {
//     containerProtuct.splice(protuctIndex, 1)
//     localStorage.setItem("Protucts", JSON.stringify(containerProtuct));
//     displayElement(containerProtuct); // Call displayElement to update the table after deletion

    
// }
// //End Delete From Table







var protuctNameInput = document.getElementById('protuctName');
var protuctPriceInput = document.getElementById('protuctPrice');
var protuctCategoryInput = document.getElementById('protuctCategory');
var protuctDecribtionInput = document.getElementById('protuctDecribion');
var addProtucts = document.getElementById('addProtucts');
var updateProtucts = document.getElementById('updateProtucts');


    
var protuctContaner = [];
if (localStorage.getItem("protucts") != null) {
    
    protuctContaner = JSON.parse(localStorage.getItem('protucts'));
    displayElement(protuctContaner)
    
}
function addProtuct() {

         var protuct = {
        Name: protuctNameInput.value,
        Price: protuctPriceInput.value,
        Category: protuctCategoryInput.value,
        Decribtion: protuctDecribtionInput.value,
    };
    protuctContaner.push(protuct);
    localStorage.setItem("protucts", JSON.stringify(protuctContaner));
    displayElement(protuctContaner)
    
    clearForm()
        
    }
   

function displayElement(protuctContaner) {
    var cartona='';
    for (let i = 0; i < protuctContaner.length; i++) {
        cartona+=`<tr class="">
                       <td scope="row">${protuctContaner[i].Name} </td>
                         <td>${protuctContaner[i].Price}</td>
                         <td> ${protuctContaner[i].Category} </td>
                         <td> ${protuctContaner[i].Decribtion} </td>
                         <td><button onclick='updateProtuct(${i});' type="button" class="btn  btn-warning">Update</button></td>
                         <td><button onclick='deletePorduct(${i});'   class="btn btn-danger">Delete</button></td>
                     </tr>`
    }
    document.getElementById('tableBody').innerHTML = cartona;
    
}

function clearForm() {
    protuctNameInput.value = '';
    protuctPriceInput.value = '';
    protuctCategoryInput.value = '';
    protuctDecribtionInput.value = '';

}

function deletePorduct(protuctIndex) {
    protuctContaner.splice(protuctIndex, 1)
    localStorage.setItem("protucts", JSON.stringify(protuctContaner));
    displayElement(protuctContaner)
}


////////////////////////////Start Search

function searchProtuct(term) {

    var Searcharr = [];
    for (let i = 0; i < protuctContaner.length; i++)
    {
        if (protuctContaner[i].Name.toLowerCase().includes(term.toLowerCase())||protuctContaner[i].Price.includes(term)||protuctContaner[i].Category.toLowerCase().includes(term.toLowerCase())||protuctContaner[i].Decribtion.toLowerCase().includes(term.toLowerCase()))
        {
            Searcharr.push(protuctContaner[i])

        }
    } 
    displayElement(Searcharr)
}

//////////////////////////End Search

/////////////////start update

function updateProtuct(i) {
    
        currentIndex = i;
        addProtucts.classList.replace('d-block', 'd-none');
        updateProtucts.classList.replace('d-none', 'd-block');
        protuctNameInput.value = protuctContaner[i].Name;
        protuctPriceInput.value = protuctContaner[i].Price;
        protuctCategoryInput.value = protuctContaner[i].Category;
        protuctDecribtionInput.value = protuctContaner[i].Decribtion;
    
}





    function saveUpdatedProtuct() {
        protuctContaner[currentIndex].Name = protuctNameInput.value;
        protuctContaner[currentIndex].Price = protuctPriceInput.value;
        protuctContaner[currentIndex].Category = protuctCategoryInput.value;
        protuctContaner[currentIndex].Decribtion = protuctDecribtionInput.value;

        localStorage.setItem("protucts", JSON.stringify(protuctContaner));
        displayElement(protuctContaner);
        clearForm();
        addProtucts.classList.replace('d-none', 'd-block');
        updateProtucts.classList.replace('d-block', 'd-none');
    }
//////////////////////end update






// function validationRegear()
// {
//     var regex = /^[A-Z][a-z]{1,7}\s([A-Z][a-z]{2,7})?$/;

//     return regex.test(protuctNameInput.value);
    
// }











