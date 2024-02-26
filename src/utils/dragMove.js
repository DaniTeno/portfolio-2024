
const root = document.querySelector('#root')

// TODO: fix zIndex
// TIP: hacer funcion recursiva que lea todos los childNodes para determminar los zIndex


const ex = {
  children: [
    {
      children: [
        { children: [] },
        { children: [] },
        { children: [] }
      ]
    },
    {
      children: []
    }
  ]
}


const setChildrenLength = (node, int = 0) => {
  let count = int
  if (!node?.children?.length) {
    console.log('sumando', node);
    return 1
  }

  for (let el of node.children) {
    count += setChildrenLength(el, count) + 1
  }

  return count
}



export const dragMove = (e, element) => {
  const main = document?.querySelector(".main-grid");

  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  console.log(main);
  const dragMouseDown = (e) => {
    const siblingNodes = main?.children

    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;

    for (let node of siblingNodes) {
      node.style.zIndex = 0
    }

    element.parentNode.parentNode.style.zIndex = 10;
  };

  const elementDrag = (e) => {

    e.preventDefault();
    // element position
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    // mouse position
    pos3 = e.clientX;
    pos4 = e.clientY;

    // validates if the cursor hits the viewport
    if (pos3 < 0 || pos4 < 0 || pos3 > root.offsetWidth) return

    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  };

  const closeDragElement = () => {
    document.onmouseup = null;
    document.onmousemove = null;
    element.parentNode.parentNode.style.zIndex--;

  };

  e.target.onmousedown = dragMouseDown;
};