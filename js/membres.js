import { loadData, saveData } from "./storage.js";
import { generateId } from "./utils.js";

/**
 * TODO: créer { id, groupeId, nom, pseudo }, ajouter, sauvegarder
 */
export function addMembre({ groupeId, nom, pseudo }) {}

/**
 * TODO: retourner les membres d'un groupe (filter)
 */
export function getMembresByGroupe(groupeId) {}

/**
 * TODO: modifier un membre
 */
export function updateMembre(id, changes) {}

/**
 * TODO: vérifier si le membre est payeur ou dans les parts d'une dépense (some)
 */
export function isMembreUtilise(membreId) {}

/**
 * TODO: si le membre est utilisé -> refuser et retourner un message explicatif
 *       sinon -> supprimer et sauvegarder
 */
export function deleteMembre(id) {}