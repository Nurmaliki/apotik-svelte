'use strict';

import { writable } from 'svelte/store';

// Create a writable store for managing medicine data
export const obatStore = writable([]);

// Example functions to manage the store
export function addObat(obat) {
    obatStore.update(currentData => [...currentData, obat]);
}

export function removeObat(id) {
    obatStore.update(currentData => currentData.filter(obat => obat.id !== id));
}

export function updateObat(updatedObat) {
    obatStore.update(currentData => {
        const index = currentData.findIndex(obat => obat.id === updatedObat.id);
        if (index !== -1) {
            currentData[index] = updatedObat;
        }
        return currentData;
    });
}
