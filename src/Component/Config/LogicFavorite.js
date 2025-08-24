export const isPresentInFavorites = (favorites, restaurant) => {
  if (!favorites || favorites.length === 0) return false;
  return favorites.some(item => item.id === restaurant.id);
};
