export const generateId = () => {
  return parseInt(Date.now() + Math.random().toString().split(".")[0]);
};
