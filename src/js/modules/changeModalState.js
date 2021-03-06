import checkNumInputs from './checkNumInputs';

const changeModalState = (state) => { //получаем данные со страницы
    const windowForm = document.querySelectorAll('.button_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelector('#height'),
          windowType = document.querySelector('#view_type'),
          windowProfile = document.querySelectorAll('.checbox');
//валидируем
    checkNumInputs('#width');
    checkNumInputs('#height');

    function bindActionToElems (event, elem, prop) { //создаём функцию которая на элемент навязывает обработчик события
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName) {
                    case 'SPAN' :
                        state[prop] = i;
                        break;
                    case 'INPUT' :
                        if(item.getAtribute('type') === 'chackbox') {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Тёплое";
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i === j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            state[prop] = item.value;
                        }
                        break
                    case 'SELECT' :
                        state[prop] = item.value;
                        break;
                }

                console.log(state);
            });
        });
    }
//привязываем действия к определённым элементом с определёнными событиями
    bindActionToElems('click', windowForm, 'form');
    bindActionToElems('input', windowHeight, 'height');
    bindActionToElems('input', windowWidth, 'width');
    bindActionToElems('change', windowType, 'type');
    bindActionToElems('change', windowProfile, 'profile');
};

export default changeModalState;