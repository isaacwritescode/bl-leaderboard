export const calcLevel = (xp: number) => {
  let lvl: number = 0;

  while (true) {
    if (xp < (300 / 2) * lvl ** 2 + (300 / 2) * lvl) break;
    lvl += 1;
  }
  return lvl;
};
