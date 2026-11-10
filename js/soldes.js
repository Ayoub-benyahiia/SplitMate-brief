import { loadData, saveData } from "./storage.js";

/**
 * Solde d'un membre
 * TODO: solde = (total payé) - (total dû)
 * + prendre en compte les remboursements déjà effectués
 */
export function calculerSolde(membreId, groupeId) {}

/**
 * TODO: retourner les soldes de tous les membres du groupe
 * [{ membreId, solde }, ...]
 */
export function calculerSoldes(groupeId) {}

/**
 * Remboursements
 * TODO: séparer créditeurs (solde > 0) et débiteurs (solde < 0),
 * puis générer la liste [{ deId, versId, montant }]
 * ex: "Sara doit 24,50 € à Karim"
 */
export function genererRemboursements(groupeId) {}

/**
 * TODO: enregistrer un remboursement effectué { id, groupeId, deId, versId, montant, date }
 */
export function marquerRembourse(remboursement) {}