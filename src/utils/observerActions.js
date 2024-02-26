export const techStackAnimation = (entry, fn) => {
  if (entry.isIntersecting) {
    fn();
  } else {
    Array.from(entry.target.childNodes).forEach((node) => {
      node.classList.remove("show");
    });
  }
};

export const waving = (entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add("waving");
  } else {
    entry.target.classList.remove("waving");
  }
};

export const absolute = (entry, setState) => {
  if (entry.isIntersecting) {
    entry.target.classList.add("show");
    setState(true);
  } else {
    entry.target.classList.remove("show");
    setState(false);
  }
};

export const opacity = (entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add("opacity-1");
    entry.target.classList.remove("opacity-0");
  } else {
    entry.target.classList.remove("opacity-1");
    entry.target.classList.add("opacity-0");
  }
};