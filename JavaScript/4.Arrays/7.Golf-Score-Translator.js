const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, score) {
  if (score === 1) {
    return "Hole-in-one!";
  } else if (score <= par - 2) {
    return "Eagle";
  } else if (score === par - 1) {
    return "Birdie";
  } else if (score === par) {
    return "Par";
  } else if (score === par + 1) {
    return "Bogey";
  } else if (score === par + 2) {
    return "Double Bogey";
  } else if (score >= par + 3) {
    return "Go Home!";
  }
}
