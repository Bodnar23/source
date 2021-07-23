import "./slider";
import modals from './modules/modals';
import tabs from './modules/tabs';
import froms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';

window.addEventListener('DOMContentLoaded', () => {
    "use strict";  //включаем строгий режим внутри нашего файла

    let modalState = {}; //переменная состояния что пользователь выбирает
    let deadline = '2021-07-23';

    changeModalState(modalState); //передаём ссылку на обьект
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
    timer('.conteiner1', deadline);
});

