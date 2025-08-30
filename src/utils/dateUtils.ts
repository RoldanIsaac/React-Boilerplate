export const formatDate = (date: Date, locale = "es-ES") =>
  new Intl.DateTimeFormat(locale).format(date);

export const addDays = (date: Date, days: number) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export const diffInDays = (d1: Date, d2: Date) => {
  const diff = d1.getTime() - d2.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

export const toISO = (date: Date) => date.toISOString().split("T")[0];
