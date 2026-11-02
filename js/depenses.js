let depences = [];

let members = ["ahmed", "rachid", "ali"];
let Categories = [
    {
        catigorei: "Alimentation",
        imojie: "🛒"
    },
    {
        catigorei: "Restaurants",
        imojie: "🍽️"
    },
    {
        catigorei: "Maison",
        imojie: "🏠"
    },
    {
        catigorei: "Loyer",
        imojie: "🏡"
    },
    {
        catigorei: "Électricité",
        imojie: "💡"
    },
    {
        catigorei: "Eau",
        imojie: "💧"
    },
    {
        catigorei: "Internet",
        imojie: "🌐"
    },
    {
        catigorei: "Abonnements",
        imojie: "📱"
    },
    {
        catigorei: "Transport",
        imojie: "🚗"
    },
    {
        catigorei: "Santé",
        imojie: "💊"
    },
    {
        catigorei: "Loisirs",
        imojie: "🎮"
    },
    {
        catigorei: "Shopping",
        imojie: "🛍️"
    },
    {
        catigorei: "Entretien",
        imojie: "🧹"
    },
    {
        catigorei: "Voyages",
        imojie: "✈️"
    },
    {
        catigorei: "Autres",
        imojie: "📦"
    }
];


//bring every element i will need 
let CreatDepenceButton = document.getElementById("Creat-depence");
let getoutForm=document.querySelectorAll("#getOut");

let body = document.querySelector("section");
let depensesForm = document.getElementById("depencesForm");

let titreinputdepence = document.getElementById("titreinputdepence");
let membersOptions = document.getElementById("membersOptions");
let categorieOption = document.getElementById("categorieOption");
let dateDepenceinput = document.getElementById("dateDepenceinput");
let montantdepanceinput = document.getElementById("montantdepanceinput");

let ajouterdepenceInfos = document.getElementById("ajouter");

let CartesContainer = document.getElementById("CartesContainer")


//les variables des filter and recherche
let chercherParMots = document.getElementById("chercherParMots");
let chercherParcategorie = document.getElementById("chercherParcategorie");
let chercherParPayeur = document.getElementById("chercherParPayeur");



console.log(CreatDepenceButton);
console.log(body)

console.log(depensesForm);



function creatDepenxe() {
    CreatDepenceButton.addEventListener('click', (E) => {
        body.classList.add("modal-container");

        depensesForm.classList.remove("display_None");
        depensesForm.classList.add("modal-box");


        
    })
}
addCategorieToforme()
addmembersToforme()
creatDepenxe();


function GetOutFromForm() {
    getoutForm.forEach((item)=>{
        item.addEventListener('click', (E) => {
            E.preventDefault();
            body.classList.remove("modal-container");

            depensesForm.classList.add("display_None");
            depensesForm.classList.remove("modal-box");


            // addCategorieToforme()
            // addmembersToforme()
        })
    })
}
GetOutFromForm();



function addmembersToforme() {
    members.forEach((item) => {
        membersOptions.innerHTML += `<option value="${item}">${item}</option>`

    })
}

function addmembersToPage() {
    members.forEach((item) => {
        chercherParPayeur.innerHTML += `<option value="${item}">${item}</option>`

    })
}
addmembersToPage()


function addCategorieToforme() {
    Categories.forEach((item) => {
        categorieOption.innerHTML += `<option value ="${item.catigorei}">${item.catigorei}</option>`

    })
}

function addCategorieToPage() {
    Categories.forEach((item) => {
        chercherParcategorie.innerHTML += `<option value ="${item.catigorei}">${item.catigorei}</option>`

    })
}
addCategorieToPage()


//creat + affichage des cartes depences
let i=1;
function CreerCartesDepences() {
    
    ajouterdepenceInfos.addEventListener('click', (e) => {
        let info = {
            id:i++,
            titre: "",
            categorie: "",
            montant: "",
            date: "",
            payeur: ""
        };
        e.preventDefault();
        if (titreinputdepence.value.trim().length == 0 || membersOptions.value.trim().length == 0 || categorieOption.value.trim().length == 0 || dateDepenceinput.value.trim().length == 0 || montantdepanceinput.value.trim().length == 0) {
            alert("you missed something you didnt enter it")
        } else {
            info.titre = titreinputdepence.value;
            info.categorie = categorieOption.value;
            info.montant = montantdepanceinput.value;
            info.date = dateDepenceinput.value;
            info.payeur = membersOptions.value;

            depences.push(info);
            CartesContainer.innerHTML += `<div class="flex_row border"
                            style="height: 100%;width: 100%; background-color: white;height: 50px; ">
                            <div style="width: 28%;">${titreinputdepence.value}</div>
                            <div style="width: 18%;">${categorieOption.value}</div>
                            <div style="width: 18%;">${dateDepenceinput.value}</div>
                            <div style="width: 18%;">${membersOptions.value}</div>
                            <div style="width: 18%;">${montantdepanceinput.value} €</div>
                            <div style="width: 18%;">
                                <button></button>
                                <button></button>
                            </div>`

        }
        
        
        titreinputdepence.value = "";
        categorieOption.value = "";
        montantdepanceinput.value = "";
        dateDepenceinput.value = "";
        membersOptions.value = "";



    })
    
}

CreerCartesDepences()




function displayALLDepences(){
    depences.forEach((item)=>{
        CartesContainer.innerHTML += `<div class="flex_row border"
                        style="height: 100%;width: 100%; background-color: white;height: 50px; ">
                        <div style="width: 28%;">${item.titre}</div>
                        <div style="width: 18%;">${item.categorie}</div>
                        <div style="width: 18%;">${item.date}</div>
                        <div style="width: 18%;">${item.payeur}</div>
                        <div style="width: 18%;">${item.montant} €</div>
                        <div style="width: 18%;">
                            <button> supprimer</button>
                            <button>modifier</button>
                        </div>
                        </div>`
    })
}




function reChercherParMots() {
    chercherParMots.addEventListener("input", () => {
        
        if(chercherParMots.value !== "🔍 Rechercher par titre…" || chercherParMots.value.trim().length != 0) {
            
                CartesContainer.innerHTML="";
                let tab=depences;
                console.log(tab);

                tab=tab.filter((item)=>item.titre==chercherParMots.value);
                console.log(tab);

                tab.forEach((item)=>{
                    CartesContainer.innerHTML += `<div class="flex_row border"
                            style="height: 100%;width: 100%; background-color: white;height: 50px; ">
                            <div style="width: 28%;">${item.titre}</div>
                            <div style="width: 18%;">${item.categorie}</div>
                            <div style="width: 18%;">${item.date}</div>
                            <div style="width: 18%;">${item.payeur}</div>
                            <div style="width: 18%;">${item.montant} €</div>
                            <div style="width: 18%;">
                                <button> supprimer</button>
                                <button>modifier</button>
                            </div>
                            </div>`
                })
            
        }
    })
}
 reChercherParMots()






function rechercheParcategorie() {
    chercherParcategorie.addEventListener("input", () => {
        if(chercherParcategorie.value !="Toutes les catégories" ) {
            let tab=depences;

            CartesContainer.innerHTML="";
            tab=tab.filter((item)=>item.categorie==chercherParcategorie.value);
            tab.forEach((item)=>{
                CartesContainer.innerHTML += `<div class="flex_row border"
                    style="height: 100%;width: 100%; background-color: white;height: 50px; ">
                    <div style="width: 28%;">${item.titre}</div>
                    <div style="width: 18%;">${item.categorie}</div>
                    <div style="width: 18%;">${item.date}</div>
                    <div style="width: 18%;">${item.payeur}</div>
                    <div style="width: 18%;">${item.montant} €</div>
                    <div style="width: 18%;">
                        <button></button>
                        <button></button>
                    </div>`
            })
        }
    })
}

rechercheParcategorie()




function rechercheParPayeure() {
    chercherParPayeur.addEventListener("input", () => {
        if(chercherParPayeur.value !="Tous les payeurs") {
            let tab=depences;
            CartesContainer.innerHTML="";
            tab=tab.filter((item)=>item.payeur==chercherParPayeur.value);
            tab.forEach((item)=>{
                CartesContainer.innerHTML += `<div class="flex_row border"
                    style="height: 100%;width: 100%; background-color: white;height: 50px; ">
                    <div style="width: 28%;">${item.titre}</div>
                    <div style="width: 18%;">${item.categorie}</div>
                    <div style="width: 18%;">${item.date}</div>
                    <div style="width: 18%;">${item.payeur}</div>
                    <div style="width: 18%;">${item.montant} €</div>
                    <div style="width: 18%;">
                        <button></button>
                        <button></button>
                    </div>`
            })
        }
    })
}

 rechercheParPayeure()

