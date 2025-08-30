export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const slugify = (str: string) =>
  str
    .toLowerCase()
    .normalize("NFD") // elimina tildes
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");

export const truncate = (str: string, length: number) =>
  str.length > length ? str.slice(0, length) + "..." : str;

export const toTitleCase = (str: string) =>
  str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase()
  );
