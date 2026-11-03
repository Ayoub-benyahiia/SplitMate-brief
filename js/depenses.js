import { loadData, saveData } from "./storage.js";
import { generateId, isMontantValide } from "./utils.js";

/**
 * Parts égales
 * TODO: diviser le montant par le nombre de membres
 * retourner [{ membreId, montant }, ...]
 */
export function repartirEgalement(montant, membresIds) {}

/**
 * Validation d'une dépense
 * TODO: vérifier montant > 0, au moins 1 membre concerné,
 * somme des parts = montant, payeur appartient au groupe
 * retourner { valide: true/false, erreur: "message" }
 */
export function validerDepense(depense) {}

/**
 * TODO: valider, créer l'objet dépense complet, ajouter, sauvegarder
 */
export function addDepense(depense) {}

/**
 * TODO: retourner les dépenses d'un groupe
 */
export function getDepensesByGroupe(groupeId) {}

/**
 * TODO: modifier une dépense (revalider avant de sauvegarder)
 */
export function updateDepense(id, changes) {}

/**
 * TODO: supprimer une dépense
 */
export function deleteDepense(id) {}