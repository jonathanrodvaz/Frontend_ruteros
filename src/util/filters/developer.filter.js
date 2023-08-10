const getUserTotalScore = (acc, curr) => acc + curr.score;

export const sortUsersByAverageScore_descendingOrder = (users) =>
  users.sort((userA, userB) => {
    const userA_score = userA.ratingsByOthers.reduce(getUserTotalScore, 0);
    let userA_scoreAverage = 0;
    if (userA.ratingsByOthers.length != 0)
      userA_scoreAverage = userA_score / userA.ratingsByOthers.length;

    const userB_score = userB.ratingsByOthers.reduce(getUserTotalScore, 0);
    let userB_scoreAverage = 0;
    if (userB.ratingsByOthers.length != 0)
      userB_scoreAverage = userB_score / userB.ratingsByOthers.length;

    return userB_scoreAverage - userA_scoreAverage;
  });

export const sortUsersByAverageScore_ascendingOrder = (users) =>
  users.sort((userA, userB) => {
    const userA_score = userA.ratingsByOthers.reduce(getUserTotalScore, 0);
    let userA_scoreAverage = 0;
    if (userA.ratingsByOthers.length != 0)
      userA_scoreAverage = userA_score / userA.ratingsByOthers.length;

    const userB_score = userB.ratingsByOthers.reduce(getUserTotalScore, 0);
    let userB_scoreAverage = 0;
    if (userB.ratingsByOthers.length != 0)
      userB_scoreAverage = userB_score / userB.ratingsByOthers.length;

    return userA_scoreAverage - userB_scoreAverage;
  });

const getUserTotalExperienceDuration = (acc, curr) => acc + curr.duration;

export const getUserExperienceDuration = (user) =>
  user.experience.reduce(getUserTotalExperienceDuration, 0);
