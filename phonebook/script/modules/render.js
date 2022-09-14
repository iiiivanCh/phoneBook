import {
  createHeader,
  createLogo,
  createMain,
  createTable,
  createForm,
  createFooter,
  createRow,
  createButtonGroup,
} from './modules/createElements.js';

const renderPhoneBook = (app, title) => {
  const header = createHeader();
  const logo = createLogo(title);
  const main = createMain();
  const buttonGroup = createButtonGroup([
    {
      className: 'btn btn-primary mr-3',
      type: 'button',
      text: 'Добавить',
    },
    {
      className: 'btn btn-danger',
      type: 'button',
      text: 'Удалить',
    },
  ]);
  const table = createTable();
  const { form, overlay } = createForm();
  const footer = createFooter(title);

  header.headerContainer.append(logo);
  main.mainContainer.append(buttonGroup.btnWrapper, table, overlay);
  app.append(header, main, footer);

  return {
    list: table.tbody,
    logo,
    btnAdd: buttonGroup.btns[0],
    btnDel: buttonGroup.btns[1],
    formOverlay: overlay,
    form,
  };
};

const renderContacts = (elem, dat) => {
  const allRow = dat.map(createRow);
  elem.append(...allRow);
  return allRow;
};

export {
  renderPhoneBook,
  renderContacts,
};
