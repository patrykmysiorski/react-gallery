export const addDots = (text: string, limit: number): string => {
  const dots = "...";
  if (text.length > limit) {
    return (text = `${text.substring(0, limit)}${dots}`);
  }
  return text;
};
