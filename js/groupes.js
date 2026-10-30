let CreatgroupButton = document.getElementById("added-group");
let body = document.querySelector("section");
let groupesForm = document.getElementById("depencesForm");


let NameOfGroupes = document.getElementById("inputname");
let DescOfGroupes = document.getElementById("inputdesc");
let DevisOfGroupes = document.getElementById("selectdevis");
let DateOfGroupes = document.getElementById("inputdate");

let AnullerButton = document.getElementById("button-out");
let AjouteButton = document.getElementById("create-button");

let CartesConatainer = document.getElementById("cartesContainer");

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


let i = 1;
function CreateGroupe() {
    AjouteButton.addEventListener("click", (e) => {
        e.preventDefault();

        let groupe = {
            id: i,
            title: "",
            description: "",
            Devis: "",
            Date: ""
        }

        // step 1 : check the input value
        if (NameOfGroupes.value.trim().length == 0 || DescOfGroupes.value.trim().length == 0 ) alert("nsiti chi haja ma3emertihache")
        // step 2 : stock the inputs of the form in a object
        groupe.title = NameOfGroupes.value;
        groupe.description = DescOfGroupes.value;
        groupe.Devis = DevisOfGroupes.value;
        groupe.Date = DateOfGroupes.value;
        groupe.id = i++;

        GroupesArray.push(groupe)

        NameOfGroupes.value = ""
        DescOfGroupes.value = ""
        DevisOfGroupes.value = ""
        DateOfGroupes.value = ""

        afficherCartes()
    })
}

CreateGroupe()
console.log(GroupesArray);





function afficherCartes() {
    GroupesArray.forEach(item => {
       CartesConatainer.innerHTML += `<div class=" flex flex-col">
                    <div class="flex flex-row justify-between">
                        <span>icon</span>
                        <span>Ouvert</span>
                    </div>

                    <h2>${item.title}</h2>
                    <p>${item.description}</p>

                    <div class="p-4">
                        <span class="bg-[#087F73]">K</span> <span>S</span> <span>L</span> <span>H</span>
                        <small>4 membres</small>
                    </div>

                    <hr />
                    <div class="p-4">
                        <small>Total dépensé</small>
                        <h3>280 € <small>${item.Devis}</small></h3>
                    </div>
                    <div>
                        <a href="#">Voir le groupe →</a>
                        <button></button>
                        <button></button>
                    </div>
                </div>`
    });
}

