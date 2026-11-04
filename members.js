






let allmembres = [];

function addMembre({ groupeId, nom, pseudo }) {
    const membres = {
        id : Date.now(),
        groupeId: groupeId,
        nom : nom,
        pseudo : pseudo,
    };
    allmembres.push(membres);
    return membres
};



function getMemberByGroup(Id){
    const memberbyG = membres.filter((member) =>{
        return member.groupeId == Id
    });
    return memberbyG
};

