export const formatCurrency = (
  value: number,
  locale = "es-ES",
  currency = "USD"
) =>
  new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(value);

export const parseCurrency = (value: string) =>
  Number(value.replace(/[^0-9.-]+/g, ""));
