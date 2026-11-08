const membersContainers = document.getElementById("membersContainers");

export let allmembres = [];

/**
 * Créer et ajouter un membre
 */
export function addMembre({ groupeId, nom, pseudo }) {
    const membre = {
        id: Date.now() + Math.floor(Math.random() * 1000),
        groupeId: groupeId,
        nom: nom,
        pseudo: pseudo || "",
    };
    allmembres.push(membre);
    return membre;
}

/**
 * Récupérer les membres d'un groupe
 */
export function getMembresByGroupe(groupeId) {
    return allmembres.filter((member) => member.groupeId == groupeId);
}
export const getMemberByGroup = getMembresByGroupe;

/**
 * Afficher les membres dans le container
 */
export function displayMembres(memberbyG) {
    if (!membersContainers) return;
    if (memberbyG.length === 0) {
        membersContainers.innerHTML = `<div class="bg-white p-6 text-center text-gray-500 border rounded">Aucun membre dans ce groupe.</div>`;
        return;
    }
    membersContainers.innerHTML = memberbyG.map(memb => {
        return `<div class="bg-white flex border justify-between p-6 items-center rounded-lg shadow-sm mb-3">
                    <div>
                        <h3 class="font-bold text-gray-800 text-lg">${memb.nom}</h3>
                        <p class="text-sm text-gray-500">@${memb.pseudo || 'membre'}</p>
                    </div>
                    <div class="flex gap-4">
                        <button onclick="window.editMember(${memb.id})"
                                class="bg-teal-700 hover:bg-teal-800 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm">
                            Modifier
                        </button>
                        <button onclick="window.removeMember(${memb.id})"
                                class="bg-red-700 hover:bg-red-800 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm">
                            Supprimer
                        </button>
                    </div>
                </div>`;
    }).join("");
}

/**
 * Modifier un membre
 */
export function updateMembre(id, changes) {
    const myMember = allmembres.find((member) => member.id == id);
    if (!myMember) return;
    Object.assign(myMember, changes);
    displayMembres(getMembresByGroupe(myMember.groupeId));
    return myMember;
}

/**
 * Vérifier si le membre est utilisé dans les dépenses
 */
export function isMembreUtilise(membreId) {
    return false;
}

/**
 * Supprimer un membre
 */
export function deleteMembre(id) {
    const index = allmembres.findIndex((member) => member.id == id);
    if (index !== -1) {
        const savedGroupeId = allmembres[index].groupeId;
        allmembres.splice(index, 1);
        displayMembres(getMembresByGroupe(savedGroupeId));
        return true;
    }
    return false;
}

// Helpers accessibles depuis le HTML
window.removeMember = (id) => {
    if (confirm("Voulez-vous vraiment supprimer ce membre ?")) {
        deleteMembre(id);
    }
};

window.editMember = (id) => {
    const myMember = allmembres.find(m => m.id == id);
    if (!myMember) return;
    const newNom = prompt("Modifier le nom :", myMember.nom);
    if (newNom !== null && newNom.trim() !== "") {
        updateMembre(id, { nom: newNom.trim() });
    }
};

window.addMemberPrompt = () => {
    const nom = prompt("Nom du nouveau membre :");
    if (nom && nom.trim() !== "") {
        const pseudo = prompt("Pseudo (optionnel) :") || "";
        addMembre({ groupeId: 1, nom: nom.trim(), pseudo: pseudo.trim() });
        displayMembres(getMembresByGroupe(1));
    }
};

// Initialisation avec quelques données d'exemple
addMembre({ groupeId: 1, nom: "Karim Benali", pseudo: "karim" });
addMembre({ groupeId: 1, nom: "Sara Mansour", pseudo: "sara" });
addMembre({ groupeId: 1, nom: "Omar Lahlou", pseudo: "omar" });

displayMembres(getMembresByGroupe(1));
