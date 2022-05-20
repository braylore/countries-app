import { SelectedFilters } from '../types/SelectedOptions';
import { PayloadOptionsFilters } from '../types/PayloadOptionsFilters';

export const getFormattedFilter = (filter: SelectedFilters) => {
  const formattedFilter = [];

  if (filter[0] === 'landlocked') {
    formattedFilter[0] = 'landlocked';
    if (filter[1] === 'Landlocked') {
      formattedFilter[1] = 'false';
    } else {
      formattedFilter[1] = 'true';
    }
  } else if (filter[0] === 'region') {
    formattedFilter[0] = 'region';
    if (filter[1] === 'Africa') {
      formattedFilter[1] = 'Americas';
    } else if (filter[1] === 'Americas') {
      formattedFilter[1] = 'Asia';
    } else if (filter[1] === 'Asia') {
      formattedFilter[1] = 'Europe';
    } else if (filter[1] === 'Europe') {
      formattedFilter[1] = 'Oceania';
    } else {
      formattedFilter[1] = 'Africa';
    }
  } else if (filter[0] === 'carSide') {
    formattedFilter[0] = 'carSide';
    if (filter[1] === 'Left-side') {
      formattedFilter[1] = 'right';
    } else {
      formattedFilter[1] = 'left';
    }
  } else if (filter[0] === 'unMember') {
    formattedFilter[0] = 'unMember';
    if (filter[1] === 'UN members') {
      formattedFilter[1] = 'false';
    } else {
      formattedFilter[1] = 'true';
    }
  }
  return { [formattedFilter[0]]: formattedFilter[1] } as PayloadOptionsFilters;
};
