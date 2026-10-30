let CreatgroupButton = document.getElementById("added-group");
let body = document.querySelector("section");
let groupesForm = document.getElementById("depencesForm");


let NameOfGroupes = document.getElementById("inputname");
let DescOfGroupes = document.getElementById("inputdesc");
let MontantOfGroupes = document.getElementById("inputmontant");
let DateOfGroupes = document.getElementById("inputdate");

let AnullerButton = document.getElementById("button-out");
let AjouteButton = document.getElementById("create-button");


const GroupesArray = [];



















console.log(CreatgroupButton);
console.log(body)


function creatDepenxe() {
    CreatgroupButton.addEventListener('click', () => {
        body.classList.add("modal-container");

        groupesForm.classList.remove("display_None");
        groupesForm.classList.add("modal-box");




    })
}
creatDepenxe();


let i =1;
function CreateGroupe() {
    AjouteButton.addEventListener("click", (e) => {
        e.preventDefault();

        let groupe = {
            id:i,
            title: "",
            description: "",
            montant: "",
            Date: ""
        }

        // step 1 : check the input value
        if (NameOfGroupes.value.trim().lenght== 0 || DescOfGroupes.value.trim().lenght == 0 || MontantOfGroupes.value.trim().lenght== 0) alert("nsiti chi haja ma3emertihache")
        // step 2 : stock the inputs of the form in a object
        groupe.title = NameOfGroupes.value;
        groupe.description = DescOfGroupes.value;
        groupe.montant = MontantOfGroupes.value;
        groupe.Date = DateOfGroupes.value;
        groupe.id = i++;

        GroupesArray.push(groupe)

        NameOfGroupes.value = ""
        DescOfGroupes.value = ""
        MontantOfGroupes.value = ""
        DateOfGroupes.value = ""
    })
}

CreateGroupe() 
console.log(GroupesArray);

