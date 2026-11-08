const cartesContainer = document.getElementById("cartesContainer");
const CreatgroupButton = document.getElementById("added-group");
const body = document.querySelector("section");
const groupesForm = document.getElementById("depencesForm");

const NameOfGroupes = document.getElementById("inputname");
const DescOfGroupes = document.getElementById("inputdesc");
const DevisOfGroupes = document.getElementById("selectdevis");
const DateOfGroupes = document.getElementById("inputdate");

const AnullerButton = document.getElementById("button-out");
const AjouteButton = document.getElementById("create-button");

export let groupes = [];

/**
 * Créer un nouveau groupe
 */
export function createGroup({ nom, description, devise, dateDebut }) {
    const groupe = {
        id: Date.now(),
        nom: nom,
        description: description,
        devise: devise || "EUR",
        dateDebut: dateDebut || new Date().toISOString().split("T")[0],
        cloture: false,
    };
    groupes.push(groupe);
    getGroupes();
    return groupe;
}
export const createGroupe = createGroup;

/**
 * Afficher les cartes de groupes
 */
export function getGroupes() {
    if (!cartesContainer) return;
    cartesContainer.innerHTML = groupes.map(grp => {
        return `<div class="bg-white rounded-lg border p-6 flex flex-col justify-between shadow-sm">
                    <div class="flex flex-row justify-between items-center mb-3">
                        <span class="text-xl">📁</span>
                        <span class="px-2 py-1 text-xs font-semibold rounded-full ${grp.cloture ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}">
                            ${grp.cloture ? 'Clôturé' : 'Ouvert'}
                        </span>
                    </div>

                    <h2 class="text-lg font-bold text-gray-800">${grp.nom}</h2>
                    <p class="text-sm text-gray-600 mt-1 mb-4">${grp.description}</p>

                    <div class="p-2 bg-gray-50 rounded mb-3">
                        <small class="text-gray-500">Membres</small>
                        <div class="flex items-center gap-1 mt-1">
                            <span class="bg-[#087F73] text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">K</span>
                            <span class="bg-gray-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">S</span>
                        </div>
                    </div>

                    <hr class="my-2" />
                    <div class="flex justify-between items-center my-2">
                        <small class="text-gray-500">Devise</small>
                        <h3 class="font-bold text-gray-700">${grp.devise}</h3>
                    </div>

                    <div class="flex justify-between items-center mt-4 pt-2 border-t">
                        <a href="members.html" class="text-teal-700 hover:text-teal-900 font-medium text-sm">Voir le groupe →</a>
                        <div class="flex gap-2">
                            <button onclick="window.toggleClotureGroup(${grp.id})" class="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded transition">
                                ${grp.cloture ? 'Ouvrir' : 'Clôturer'}
                            </button>
                            <button onclick="window.removeGroup(${grp.id})" class="text-xs bg-red-100 hover:bg-red-200 text-red-700 px-2 py-1 rounded transition">
                                Supprimer
                            </button>
                        </div>
                    </div>
                </div>`;
    }).join("");
}

/**
 * Mettre à jour un groupe
 */
export function updateGroupe(id, change) {
    const myGroupe = groupes.find((groupe) => groupe.id == id);
    if (!myGroupe) return;

    Object.assign(myGroupe, change);
    getGroupes();
    return myGroupe;
}

/**
 * Supprimer un groupe
 */
export function deleteGroup(id) {
    const gIndex = groupes.findIndex((groupe) => groupe.id == id);
    if (gIndex !== -1) {
        groupes.splice(gIndex, 1);
    }
    getGroupes();
    return groupes;
}
export const deleteGroupe = deleteGroup;

/**
 * Inverser l'état de clôture
 */
export function reverseCloture(id) {
    const clotureG = groupes.find((groupe) => groupe.id == id);
    if (!clotureG) return;
    clotureG.cloture = !clotureG.cloture;
    getGroupes();
    return clotureG;
}
export const toggleCloture = reverseCloture;

// Helpers pour les boutons onclick dans le HTML
window.removeGroup = deleteGroup;
window.toggleClotureGroup = reverseCloture;

// Gestion de la modale d'ajout
if (CreatgroupButton && groupesForm) {
    CreatgroupButton.addEventListener("click", () => {
        if (body) body.classList.add("modal-container");
        groupesForm.classList.remove("display_None");
        groupesForm.classList.add("modal-box");
    });
}

if (AnullerButton && groupesForm) {
    AnullerButton.addEventListener("click", (e) => {
        e.preventDefault();
        groupesForm.classList.add("display_None");
        groupesForm.classList.remove("modal-box");
        if (body) body.classList.remove("modal-container");
    });
}

if (AjouteButton) {
    AjouteButton.addEventListener("click", (e) => {
        e.preventDefault();

        const nom = NameOfGroupes?.value?.trim() || "";
        const desc = DescOfGroupes?.value?.trim() || "";
        const devise = DevisOfGroupes?.value || "EUR";
        const date = DateOfGroupes?.value || new Date().toISOString().split("T")[0];

        if (nom.length === 0 || desc.length === 0) {
            alert("Veuillez remplir le nom et la description du groupe.");
            return;
        }

        createGroup({
            nom: nom,
            description: desc,
            devise: devise,
            dateDebut: date
        });

        // Vider le formulaire et fermer la modale
        if (NameOfGroupes) NameOfGroupes.value = "";
        if (DescOfGroupes) DescOfGroupes.value = "";
        if (DateOfGroupes) DateOfGroupes.value = "";

        if (groupesForm) {
            groupesForm.classList.add("display_None");
            groupesForm.classList.remove("modal-box");
        }
        if (body) body.classList.remove("modal-container");
    });
}

// Groupe initial pour affichage
createGroup({
    nom: "Colocation",
    description: "Les dépenses du quotidien, à quatre et sans prise de tête.",
    devise: "EUR",
    dateDebut: "2026-10-26"
});
