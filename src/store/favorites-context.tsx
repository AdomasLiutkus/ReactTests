import { createContext, useState } from 'react';
import { Meetup } from '../components/model/Meetup.model';
import React from 'react';

type FavoritesContextObj = {
  favorites: Meetup[],
  totalFavorites: number,
  addFavorite: (favoriteMeetup: Meetup) => void,
  removeFavorite: (meetupId: number) => void,
  itemIsFavorite: (meetupId: number) => boolean
}

export const FavoritesContext = createContext<FavoritesContextObj>
({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup: Meetup) => {},
  removeFavorite: (meetupId: number) => {},
  itemIsFavorite: (meetupId: number) => false
});

const FavoritesContextProvider: React.FC = (props) => {
  const [userFavorites, setUserFavorites] = useState<Meetup[]>([]);

  function addFavoriteHandler(favoriteMeetup: Meetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId: number) {
    setUserFavorites(prevUserFavorites => {
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
    });
  }

  function itemIsFavoriteHandler(meetupId: number) {
    return userFavorites.some(meetup => meetup.id === meetupId);
  }

  const context: FavoritesContextObj = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
