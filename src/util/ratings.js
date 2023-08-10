export const getUserAverageScore = (user) => {
  if (user === null) {
    console.log('ERROR: getUserAverageScore -> user = null');
    return 0;
  }
  if (user.ratingsByOthers.length === 0) {
    console.log('getUserAverageScore -> user.ratingsByOthers.length === 0');
    return 0;
  }

  const totalScore = user.ratingsByOthers.reduce((acc, curr) => acc + curr.score, 0);
  const averageScore = totalScore / user.ratingsByOthers.length;
  return averageScore;
};

export const getMountainRouteAverageScore = (mountainRoute) => {
  if (mountainRoute === null) {
    console.log('ERROR: getMountainRouterAverageScore -> mountainRoute = null');
    return 0;
  }

  if (mountainRoute.ratings.length === 0) {
    console.log('getMountainRouteAverageScore -> mountainRoute.ratings.length === 0');
    return 0;
  }

  const totalScore = mountainRoute.ratings.reduce((acc, curr) => acc + curr.score, 0);
  const averageScore = totalScore / mountainRoute.ratings.length;
  return averageScore;
};

export const getOfferAverageScore = (offer) => {
  if (offer === null) {
    console.log('ERROR: getOfferAverageScore -> offer = null');
    return 0;
  }

  if (offer.ratings.length === 0) {
    console.log('getOfferAverageScore -> offer.ratings.length === 0');
    return 0;
  }

  const totalScore = offer.ratings.reduce((acc, curr) => acc + curr.score, 0);
  const averageScore = totalScore / offer.ratings.length;
  return averageScore;
};

export const getCityAverageScore = (city) => {
  if (city === null) {
    console.log('ERROR: getCityAverageScore -> city = null');
    return 0;
  }

  if (city.ratings.length === 0) {
    console.log('getCityAverageScore -> city.ratings.length === 0');
    return 0;
  }

  const totalScore = city.ratings.reduce((acc, curr) => acc + curr.score, 0);
  const averageScore = totalScore / city.ratings.length;
  return averageScore;
};
