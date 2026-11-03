
const cartesContainer = document.getElementById("cartesContainer")
// console.log(cartesContainer);





let groupes = [];








function createGroup({ nom, description, devise, dateDebut }) {
    const groupe = {
        id: Date.now(),
        nom: nom,
        description: description,
        devise: devise,
        dateDebut: dateDebut,
        cloture: false,
    };
    groupes.push(groupe)
    return groupe;
};

const g1 = createGroup({ nom: "Colocation", description: "test", devise: "EUR", dateDebut: "2026-10-26" });
// console.log(g1);




function getGroupes() {
    cartesContainer.innerHTML = groupes.map(grp => {
        return `<div class="">
                    <div class="top">
                        <span>icon</span>
                        <span>Ouvert</span>
                    </div>

                    <h2>${grp.nom}</h2>
                    <p>${grp.description}</p>

                    <div class="p-4">
                        <span class="bg-[#087F73]">K</span> <span>S</span> <span>L</span> <span>H</span>
                        <small>4 membres</small>
                    </div>

                    <hr />
                    <div class="p-4">
                        <small>Total dépensé</small>
                        <h3>280 € <small>${grp.devise}</small></h3>
                    </div>
                    <div>
                        <a href="#">Voir le groupe →</a>
                        <button></button>
                        <button></button>
                    </div>
                </div>`
    }).join("");
};


function updateGroupe(id) {
    const myGroupe = groupes.find((groupe) => {
        return groupe.id == id
    });
    getGroupes()
    return myGroupe
};

// const g = createGroup({ nom: "agadir", description: "imioudare", devise: "EUR", dateDebut: "2026-10-26" });
// console.log(updateGroupe(g.id));



function deleteGroup(id) {
    const gIndex = groupes.findIndex((groupe) => groupe.id == id)

    if (gIndex !== -1) {
        groupes.splice(gIndex, 1)
    };
    getGroupes();
    return groupes
};

