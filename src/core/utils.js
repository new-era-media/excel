export function capitalize(string = "") {
  return `on${string[0].toLocaleUpperCase()}${string.slice(1)}`;
}
