export const handleAnimation = (target = [], className) => {
  target.forEach(({ current }) => {
    current.classList.add(className);
  });
};