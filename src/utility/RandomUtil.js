export const randomWithRange = (min, max) => {
    return parseInt(Math.random() * (max - min) + min);
}