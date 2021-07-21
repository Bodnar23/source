import { repeat } from "core-js/fn/string";
import { replace } from "core-js/fn/symbol";

const forms = () => {      //получаем все формы и навешиваем обработчики событий
    //получаем элементы которые нам понадобятся внутри этого модуля
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'), //для того чтоб очищать инпуты чтобы их очистить
          phoneInputs = document.querySelectorAll('input[name="user_phone]');  //селектор инпута //делаем чтоб в импут номер телефона можно было вписать только цифры

    phoneInputs.forEach(item => {   //проверяем каждый из этих инпутов
      item.addEventListener('input', () => {    //берём каждый элемент внутри и навешиваем обработчики событий
         item.value = item.value.replace(/\D/, '');  //с помощью регулярных выражений отсееваем все не числа
      });
    });


          //создаём обьект с сообщениями пользователю
    const message = {   //оповещвем пользователя
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };
 
    //отправка нашего запроса
    const postData = async (url, data) => {  //используем асинк аваит чтоб запрос не шёл дальше а эжал ответа
        document.querySelector('.status').textContent = message.loading;
        let res =  await fetch(url, {     //отправляем запрос с помощью fetch
            method: "POST",
            body: data
        });

        return await res.text();
    };

    //функция по очищению
    const clearInputs = () => {   //очищаем инпуты
        inputs.forEach(item => {
            item.value = '';
        })
    }

    //перебираем все формы и навешиваем обработчики событий
    form.forEach(item => {    //навешиваем обработчики событий с помощью forEach
        item.addEventListener('submit', (e) => {   //е обьект события
            e.preventDefault();    //с помощью аджакс делаем не стандартное поведение браузера с помощью AJAX чтобы страница не перезагружалась

            //создаём блок который показывает пользователю что что-то пошло не так
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);  //помезаем блок в конец форма

            //собираем все данные с формы
            const formData = new FormData(item); //собираем данные

            //отправляем запрос на сервер по адресу
           postData('assets/server.php', formData)
               .then(res => {
                   console.log(res);
                   statusMessage.textContent = message.success;
               })
               .catch(() => statusMessage.textContent = message.failure)
               .finally(() => {
                  clearInputs();
                  setTimeout(() => {
                      statusMessage.remove();
                  }, 5000);
               });
        });
    });
};

export default forms;