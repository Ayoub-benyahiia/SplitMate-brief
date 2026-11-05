let depences = [];


// small Data
let membersTab = [
    // Groupe 1 : Voyage à Marrakech
    {
        id: 1,
        groupeId: 1,
        nom: "Ahmed Benali",
        pseudo: "ahmed"
    },
    {
        id: 2,
        groupeId: 1,
        nom: "Sara Amrani",
        pseudo: "sara"
    },
    {
        id: 3,
        groupeId: 1,
        nom: "Youssef Karim",
        pseudo: "youssef"
    },

    // Groupe 2 : Colocation
    {
        id: 4,
        groupeId: 2,
        nom: "Hamza Alaoui",
        pseudo: "hamza"
    },
    {
        id: 5,
        groupeId: 2,
        nom: "Salma Idrissi",
        pseudo: "salma"
    },
    {
        id: 6,
        groupeId: 2,
        nom: "Omar Tazi",
        pseudo: "omar"
    },

    // Groupe 3 : Weekend à Agadir
    {
        id: 7,
        groupeId: 3,
        nom: "Anas Fassi",
        pseudo: "anas"
    },
    {
        id: 8,
        groupeId: 3,
        nom: "Imane Saidi",
        pseudo: "imane"
    },

    // Groupe 4 : Sortie entre amis
    {
        id: 9,
        groupeId: 4,
        nom: "Mehdi Naciri",
        pseudo: "mehdi"
    },
    {
        id: 10,
        groupeId: 4,
        nom: "Lina Berrada",
        pseudo: "lina"
    },

    // Groupe 5 : Projet scolaire
    {
        id: 11,
        groupeId: 5,
        nom: "Karim Haddad",
        pseudo: "karim"
    },
    {
        id: 12,
        groupeId: 5,
        nom: "Nour El Amrani",
        pseudo: "nour"
    }
];

let groups = [
    {
        id: 1,
        nom: "Voyage à Marrakech",
        description: "Dépenses du voyage entre amis",
        devise: "MAD",
        dateDebut: "2026-10-01",
        cloture: false
    },
    {
        id: 2,
        nom: "Colocation",
        description: "Gestion des dépenses de l'appartement",
        devise: "MAD",
        dateDebut: "2026-09-15",
        cloture: false
    },
    {
        id: 3,
        nom: "Weekend à Agadir",
        description: "Dépenses du weekend",
        devise: "MAD",
        dateDebut: "2026-08-20",
        cloture: true
    },
    {
        id: 4,
        nom: "Sortie entre amis",
        description: "Restaurant et activités",
        devise: "EUR",
        dateDebut: "2026-10-25",
        cloture: false
    },
    {
        id: 5,
        nom: "Projet scolaire",
        description: "Partage des frais du projet",
        devise: "MAD",
        dateDebut: "2026-11-01",
        cloture: false
    }
];

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
let getoutForm = document.querySelectorAll("#getOut");

let body = document.querySelector("section");
let depensesForm = document.getElementById("depencesForm");

let titreinputdepence = document.getElementById("titreinputdepence");
let membersOptions = document.getElementById("membersOptions");
let categorieOption = document.getElementById("categorieOption");
let dateDepenceinput = document.getElementById("dateDepenceinput");
let montantdepanceinput = document.getElementById("montantdepanceinput");
let groupOPtionForm = document.getElementById("groupOPtion")

let ajouterdepenceInfos = document.getElementById("ajouter");

let CartesContainer = document.getElementById("CartesContainer")


//les variables des filter and recherche
let chercherParMots = document.getElementById("chercherParMots");
let chercherParcategorie = document.getElementById("chercherParcategorie");
let chercherParPayeur = document.getElementById("chercherParPayeur");

let groupdepenceInfos = document.getElementById("groupdepenceInfos");
let groupchoisi = groupdepenceInfos.querySelector("select")

let totaldepencesafficher = groupdepenceInfos.querySelector("h1")



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

creatDepenxe();


function GetOutFromForm() {
    getoutForm.forEach((item) => {
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



function addmembersToforme(tab) {
    membersOptions.innerHTML = "";
    membersOptions.innerHTML = `<option value=" "></option>`

    tab.forEach((item) => {
        membersOptions.innerHTML += `<option value="${item.nom}">${item.nom}</option>`

    })
}

function addmembersToPage(tab) {

    chercherParPayeur.innerHTML = "";
    chercherParPayeur.innerHTML = `<option value="Tous les payeurs">Tous les payeurs</option>`
    tab.forEach((item) => {
        chercherParPayeur.innerHTML += `<option value="${item.nom}">${item.nom}</option>`

    })
}



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
addCategorieToPage();


//creat + affichage des cartes depences
let i = 1;
let groupId = 0;
function CreerCartesDepences() {

    ajouterdepenceInfos.addEventListener('click', (e) => {

        let info = {

            id: i++,
            groupeId: groupId,
            titre: "",
            categorie: "",
            montant: "",
            date: "",
            payeur: ""
        };

        e.preventDefault();
        if (titreinputdepence.value.trim().length == 0 || membersOptions.value.trim().length == 0 || categorieOption.value.trim().length == 0 || dateDepenceinput.value.trim().length == 0 || montantdepanceinput.value.trim().length == 0 || groupOPtionForm.value.trim().length == 0 || Number(montantdepanceinput.value) == NaN) {
            alert("you missed something you didnt enter it")
        } else {
            info.titre = titreinputdepence.value;
            info.categorie = categorieOption.value;
            info.montant = Number(montantdepanceinput.value);
            info.date = dateDepenceinput.value;

            choisirGroupInForm();
            console.log(groupId)
            info.groupeId = groupId;
            console.log(info);
            info.payeur = membersOptions.value;

            depences.push(info);
            CartesContainer.innerHTML += `<div class="flex_row border"
                            style="height: 100%;width: 100%; background-color: white;height: 50px; "class="depence">
                            <div style="width: 28%;">${titreinputdepence.value}</div>
                            <div style="width: 18%;">${categorieOption.value}</div>
                            <div style="width: 18%;">${dateDepenceinput.value}</div>
                            <div style="width: 18%;">${membersOptions.value}</div>
                            <div style="width: 18%;">${montantdepanceinput.value} €</div>
                            <div style="width: 18%;">
                                <button class="modifier" >modifier</button>
                                <button class="supprimer" >supprimer</button>
                            </div></div>`

        }


        titreinputdepence.value = "";
        categorieOption.value = "";
        montantdepanceinput.value = "";
        dateDepenceinput.value = "";
        membersOptions.value = "";

    })

}
choisirGroupInForm();
CreerCartesDepences()





//just display cartes.
function displayALLDepences() {
    CartesContainer.innerHTML = "";
    depences.forEach((item) => {

        CartesContainer.innerHTML += `<div class="flex_row border"
                    style="height: 100%;width: 100%; background-color: white;height: 50px; " class="depence">
                    <div style="width: 28%;">${item.titre}</div>
                    <div style="width: 18%;">${item.categorie}</div>
                    <div style="width: 18%;">${item.date}</div>
                    <div style="width: 18%;">${item.payeur}</div>
                    <div style="width: 18%;">${item.montant} €</div>
                    <div style="width: 18%;">
                        <button class="modifier" >modifier</button>
                        <button class="supprimer"  >supprimer</button>
                </div></div>`
    })

}


function reChercherParMots() {
    chercherParMots.addEventListener("input", () => {

        if (chercherParMots.value !== "🔍 Rechercher par titre…" || chercherParMots.value.trim().length != 0) {

            CartesContainer.innerHTML = "";
            let tab = depences;
            console.log(tab);

            tab = tab.filter((item) => item.titre == chercherParMots.value);
            console.log(tab);

            tab.forEach((item) => {
                CartesContainer.innerHTML += `<div class="flex_row border"
                            style="height: 100%;width: 100%; background-color: white;height: 50px; "class="depence">
                            <div style="width: 28%;">${item.titre}</div>
                            <div style="width: 18%;">${item.categorie}</div>
                            <div style="width: 18%;">${item.date}</div>
                            <div style="width: 18%;">${item.payeur}</div>
                            <div style="width: 18%;">${item.montant} €</div>
                            <div style="width: 18%;">
                                <button class="modifier"> supprimer</button>
                                <button class="supprimer">modifier</button>
                            </div>
                            </div>`
            })

        } else {

            displayALLDepences();
        }
    })
}
reChercherParMots();



function rechercheParcategorie() {
    chercherParcategorie.addEventListener("input", () => {
        if (chercherParcategorie.value.trim() != "Toutes les catégories") {
            let tab = depences;

            CartesContainer.innerHTML = "";
            tab = tab.filter((item) => item.categorie == chercherParcategorie.value);
            tab.forEach((item) => {
                CartesContainer.innerHTML += `<div class="flex_row border"
                    style="height: 100%;width: 100%; background-color: white;height: 50px; "class="depence">
                    <div style="width: 28%;">${item.titre}</div>
                    <div style="width: 18%;">${item.categorie}</div>
                    <div style="width: 18%;">${item.date}</div>
                    <div style="width: 18%;">${item.payeur}</div>
                    <div style="width: 18%;">${item.montant} €</div>
                    <div style="width: 18%;">
                        <button class="modifier" >modifier</button>
                        <button class="supprimer"  >supprimer</button>
                    </div>`
            })
        } else {

            displayALLDepences();
        }
    })
}

rechercheParcategorie();


function rechercheParPayeure() {
    chercherParPayeur.addEventListener("input", () => {
        if (chercherParPayeur.value != "Tous les payeurs") {
            let tab = depences;
            CartesContainer.innerHTML = "";
            tab = tab.filter((item) => item.payeur == chercherParPayeur.value);
            tab.forEach((item) => {
                CartesContainer.innerHTML += `<div class="flex_row border"
                    style="height: 100%;width: 100%; background-color: white;height: 50px; " class="depence">
                    <div style="width: 28%;"> ${item.titre} </div>
                    <div style="width: 18%;"> ${item.categorie} </div>
                    <div style="width: 18%;"> ${item.date} </div>
                    <div style="width: 18%;"> ${item.payeur} </div>
                    <div style="width: 18%;"> ${item.montant} €</div>
                    <div style="width: 18%;">
                        <button class="modifier"  >modifier</button>
                        <button class="supprimer"  >supprimer</button>
                    </div>`
            })
        } else {

            displayALLDepences()
        }
    })
}

rechercheParPayeure();



function remplirLesGroupes() {
    groups.forEach((item) => {
        groupchoisi.innerHTML += `<option id="${item.id} value="${item.nom}"> ${item.nom}  </option>`
    })
    groups.forEach((item) => {
        groupOPtionForm.innerHTML += `<option id="${item.id} value="${item.nom}"> ${item.nom}  </option>`
    })

}
remplirLesGroupes()



function choisirGroupToPage() {
    groupchoisi.addEventListener('change', () => {
        let tab = groups;
        let tab1 = tab.find(item => item.nom == groupchoisi.value);
        let tab2 = membersTab;
        tab2 = tab2.filter((item) => item.groupeId == tab1.id);
        addmembersToPage(tab2);
    })
}
choisirGroupToPage()



function choisirGroupInForm() {
    groupOPtionForm.addEventListener('change', () => {
        let tab = groups;
        tab = tab.find(item => item.nom == groupOPtionForm.value);
        let tab2 = membersTab;
        tab2 = tab2.filter((item) => item.groupeId == tab.id);
        addmembersToforme(tab2);
        groupId = tab.id;
    })
}




let tablefooter = document.getElementById("tablefooter");
let nbreDepences = tablefooter.querySelector("p");
let ttlDepences = tablefooter.querySelector("strong");

let taotalAfficher = groupdepenceInfos.querySelector("h2");






function filtrerPargroup() {
    groupchoisi.addEventListener("change", () => {
        let total = 0;
        if (groupchoisi.value != "choisir le group") {

            let tab = groups;
            let tab1 = tab.find(item => item.nom == groupchoisi.value);
            let idNeede=tab1.id;
            let tab3 = depences;
            CartesContainer.innerHTML = "";
            tab3 = tab3.filter((item) => item.groupeId == idNeede);
            tab3.forEach((item) => {

                CartesContainer.innerHTML += `<div class="flex_row border"
                        style="height: 100%;width: 100%; background-color: white;height: 50px; " class="depence">
                        <div style="width: 28%;"> ${item.titre} </div>
                        <div style="width: 18%;"> ${item.categorie} </div>
                        <div style="width: 18%;"> ${item.date} </div>
                        <div style="width: 18%;"> ${item.payeur} </div>
                        <div style="width: 18%;"> ${item.montant} €</div>
                        <div style="width: 18%;">
                            <button class="modifier" >modifier</button>
                            <button class="supprimer"  >supprimer</button>
                        </div></div>`

            })
            totaldepencesafficher.textContent = tab3.length;
            nbreDepences.textContent = tab3.length + "  dépense sur  " + tab3.length;

            tab3 = tab3.map((item) => {
                total += item.montant;
            })
            ttlDepences.textContent = "total : " + total;
            taotalAfficher.textContent = total + "$";

        } else {

            displayALLDepences();
            totaldepencesafficher.textContent = depences.length;
            nbreDepences.textContent = depences.length + "  dépense sur  " + depences.length;

            depences = depences.map((item) => {
                total += item.montant;
            })
            ttlDepences.textContent = "total : " + total;
            taotalAfficher.textContent = total + "$";
        }
    });
}

filtrerPargroup()

// function choisirGroup() {
//     groupchoisi.addEventListener('change', () => {
//         let tab = groups;
//         tab = tab.find(item => item.nom == groupchoisi.value);

//         let tab2 = membersTab;
//         tab2 = tab2.filter((item) => item.groupeId == tab.id);
//         addmembersToforme(tab2);
//         addmembersToPage(tab2);
//         console.log(tab2);

//         console.log(groupchoisi.value)
//         console.log(tab.id)

//         CreerCartesDepences(tab.id);

//         if (groupchoisi.value != "choisir le group") {
//             let tab3 = depences;
//             CartesContainer.innerHTML = "";
//             tab3 = tab3.filter((item) => item.groupeId == tab.id);
//             tab3.forEach((item) => {
//                 CartesContainer.innerHTML += `<div class="flex_row border"
//                     style="height: 100%;width: 100%; background-color: white;height: 50px; " class="depence">
//                     <div style="width: 28%;"> ${item.titre} </div>
//                     <div style="width: 18%;"> ${item.categorie} </div>
//                     <div style="width: 18%;"> ${item.date} </div>
//                     <div style="width: 18%;"> ${item.payeur} </div>
//                     <div style="width: 18%;"> ${item.montant} €</div>
//                     <div style="width: 18%;">
//                         <button class="modifier" >modifier</button>
//                         <button class="supprimer"  >supprimer</button>
//                     </div></div>`
//             })
//         } else {

//             displayALLDepences();
//         }


//     })

// }

// choisirGroup();




//supprimer un depence

let depence = document.querySelectorAll(".depence");
let supprimer = document.querySelectorAll(".supprimer");

function supprimerDepence() {
    depence.addEventListener('click', () => {
        if (event.target.classList.contains("supprimer")) {
            let idfound = event.target.dataset.id;

            depence = depence.filter((item) => item.id != idfound);


        };
    })
}

