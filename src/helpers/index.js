export const bgColor = (value) => {
  if (value === 3) return "#ff704d";
  if (value === 2) return "#f2e96b";
  if (value === 1) return "#4ff7f5";
};

export const priorityText = (value) => {
  if (value === 3) return "Urgent";
  if (value === 2) return "Regular";
  if (value === 1) return "Trivial";
};
