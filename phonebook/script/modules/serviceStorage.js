

const setStorage = (key, base) => {
  localStorage.setItem(key, JSON.stringify(base));
};

const getStorage = (key) => {
  let base = JSON.parse(localStorage.getItem(key));
  if (base === null) {
    return base = [];
  }
  base = base.map((item) => {
    item.idNumber = Math.round(Math.random() * (99999999));
    return item;
  });
  setStorage('data', base);
  return base;
};
export let dat = getStorage('data');


const removeStorage = (idNumberCheck) => {
  const dataNew = dat.filter(item => String(item.idNumber) !== idNumberCheck);
  localStorage.setItem('data', JSON.stringify(dataNew));
  return dataNew;
};

export const addContactData = contact => {
  dat.push(contact);
  setStorage('data', dat);
};


export const deleteControl = (btnDel, list) => {
  btnDel.addEventListener('click', () => {
    document.querySelectorAll('.delete').forEach(del => {
      del.classList.toggle('is-visible');
    });
  });

  list.addEventListener('click', e => {
    if (e.target.closest('.del-icon')) {
      const idNumber = e.target.closest('.contact').id;
      dat = removeStorage(idNumber);
      e.target.closest('.contact').remove();
    }
  });
};

// export {
//   deleteControl,
//   addContactData,
//   dat,
// };
