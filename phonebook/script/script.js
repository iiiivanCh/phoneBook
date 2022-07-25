'use strict'

{
  const createContainer = () => {
    const container = document.createElement('div');
    container.classList.add('.container');
  }

  const createHeader = () => {

  };

  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);
    const header = createHeader();
  };



  window.phoneBookInit = init;
}