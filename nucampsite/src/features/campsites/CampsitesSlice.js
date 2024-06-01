// because it doesnt export that is why we're using camel case
import { CAMPSITES } from "../../app/shared/CAMPSITES";

// selector functions that we can use to select specific pieces of data
// selectAllCampsites use by our campsite list componnent to access the campsotes array
export const selectAllCampsites = () => {
  return CAMPSITES;
};
// selectRandomCampsite
// export const selectRandomCampsite = () => {
//   return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// };

export const selectCampsiteById = (id) => {
  // what we want to find is the first campsite in the campsites array with an id === the id that was passed in
  return CAMPSITES.find((campsite) => campsite.id === id);
};