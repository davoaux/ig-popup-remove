'use strict';

const modalObserver = new MutationObserver(mutationList => {
  for (const mutation of mutationList) {
    const addedNode = mutation.addedNodes[0];
    if (addedNode !== undefined && addedNode.hasAttribute('role')) {
      if (addedNode.attributes.role.value == 'presentation') {
        addedNode.parentNode.removeChild(addedNode);
      }
    }
  }
});

const scrollObserver = new MutationObserver(mutationList => {
  for (const mutation of mutationList) {
    mutation.target.style.overflow = "initial";
  }
});

modalObserver.observe(document.body, {
  childList: true
});

scrollObserver.observe(document.body, {
  attributes: true
});
