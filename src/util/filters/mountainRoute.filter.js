const getMountainRouteTotalScore = (acc, curr) => acc + curr.score;

export const sortMountainRoutesByAverageScore_descendingOrder = (mountainRoute) =>
  mountainRoute.sort((mountainRouteA, mountainRouteB) => {
    const mountainRouteA_score = mountainRouteA.ratings.reduce(
      getMountainRouteTotalScore,
      0,
    );
    let mountainRouteA_scoreAverage = 0;
    if (mountainRouteA.ratings.length != 0)
      mountainRouteA_scoreAverage = mountainRouteA_score / mountainRouteA.ratings.length;

    const mountainRouteB_score = mountainRouteB.ratings.reduce(
      getMountainRouteTotalScore,
      0,
    );
    let mountainRouteB_scoreAverage = 0;
    if (mountainRouteB.ratings.length != 0)
      mountainRouteB_scoreAverage = mountainRouteB_score / mountainRouteB.ratings.length;

    return mountainRouteB_scoreAverage - mountainRouteA_scoreAverage;
  });
