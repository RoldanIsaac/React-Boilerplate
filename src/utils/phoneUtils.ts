export const maskPhone = (value: string) => {
  const cleaned = value.replace(/\D/g, "").slice(0, 10); // máximo 10 dígitos
  const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);

  if (!match) return value;

  let result = "";
  if (match[1]) result = `(${match[1]}`;
  if (match[2]) result += `) ${match[2]}`;
  if (match[3]) result += `-${match[3]}`;
  return result;
};
