const getCityTotalScore = (acc, curr) => acc + curr.score;

export const sortCitiesByAverageScore_descendingOrder = (cities) =>
  cities.sort((cityA, cityB) => {
    const cityA_score = cityA.ratings.reduce(getCityTotalScore, 0);
    let cityA_scoreAverage = 0;
    if (cityA.ratings.length != 0)
      cityA_scoreAverage = cityA_score / cityA.ratings.length;

    const cityB_score = cityB.ratings.reduce(getCityTotalScore, 0);
    let cityB_scoreAverage = 0;
    if (cityB.ratings.length != 0)
      cityB_scoreAverage = cityB_score / cityB.ratings.length;

    return cityB_scoreAverage - cityA_scoreAverage;
  });
