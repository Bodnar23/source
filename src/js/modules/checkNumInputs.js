const checkNumInputs = (selector) => {
    const numInputs = document.querySelectorAll(selector);

    numInputs.forEach(item => {   //проверяем каждый из этих инпутов
        item.addEventListener('input', () => {    //берём каждый элемент внутри и навешиваем обработчики событий
           item.value = item.value.replace(/\D/, '');  //с помощью регулярных выражений отсееваем все не числа
        });
      });
};

export default checkNumInputs;