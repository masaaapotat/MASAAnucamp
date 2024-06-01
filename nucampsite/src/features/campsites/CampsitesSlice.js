import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
    return CAMPSITES;
}

export const selectRandomCampsite = () => {
    // wrong tessy return Math.floor(Math.random() * selectAllCampsites.length);
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
}