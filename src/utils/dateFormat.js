export const dateFormat = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleString();
}

export const currentDate = () => {
  return Date.now();
}