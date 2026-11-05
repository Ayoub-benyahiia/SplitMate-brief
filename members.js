const membersContainers = document.getElementById("membersContainers")






let allmembres = [];

function addMembre({ groupeId, nom, pseudo }) {
    const membre = {
        id: Date.now(),
        groupeId: groupeId,
        nom: nom,
        pseudo: pseudo,
    };
    allmembres.push(membre);
    return membre
};



function getMemberByGroup(Id) {
    const memberbyG = allmembres.filter((member) => {
        return member.groupeId == Id
    });
    return memberbyG
};


function displayMembres(memberbyG) {
    membersContainers.innerHTML = memberbyG.map(memb => {
        return `<div class="bg-white flex border justify-between p-8">
                        <div>
                            <h3>${memb.nom}</h3>
                            <p>3 dépenses</p>
                        </div>
                        <div class="flex gap-20">
                            <div><button
                                    class="bg-teal-700 hover:bg-teal-800 text-white font-medium py-2 px-4 rounded-md transition-colors">modifier</button>
                            </div>
                            <div><button
                                    class="bg-red-700 hover:bg-teal-800 text-white font-medium py-2 px-4 rounded-md transition-colors">remove</button>
                            </div>
                        </div>
                    </div>`
    }).join("");
};

// addMembre({ groupeId: 500, nom: "Karim", pseudo: "kk" });
// addMembre({ groupeId: 500, nom: "Sara", pseudo: "sara" });
// addMembre({ groupeId: 777, nom: "Omar", pseudo: "om" });

// displayMembres(getMemberByGroup(500));

function updateMembre(id, change) {
    const myMember = allmembres.find((member) => {
        return member.id == id
    });
    if (!myMember) return;
    Object.assign(myMember, change);
    displayMembres((getMemberByGroup(myMember.groupeId)))
    return myMember
};


function deleteMembre(){
    const savedGroupeId = myMember.groupeId;
}


function deleteGroup(id) {
    const gIndex = groupes.findIndex((groupe) => groupe.id == id)

    if (gIndex !== -1) {
        groupes.splice(gIndex, 1)
    };
    getGroupes();
    return groupes
};