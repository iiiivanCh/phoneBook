import dat from './serviceStorage';
import {
  hoverRow,
  modalControl,
  deleteControl,
  formControl,
} from './modules/control.js';
import {
  renderPhoneBook,
  renderContacts,
} from './modules/render.js';

{
  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);

    const {
      list,
      logo,
      btnAdd,
      formOverlay,
      form,
      btnDel,
    } = renderPhoneBook(app, title);

    // Функционал

    const allRow = renderContacts(list, dat);
    const { closeModal } = modalControl(btnAdd, formOverlay);

    hoverRow(allRow, logo);
    deleteControl(btnDel, list);
    formControl(form, list, closeModal);
  };

  window.phoneBookInit = init;
}
