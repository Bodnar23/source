const timer = (id, deadline) => {
    //функция помощник чтоб перед одной цифрой ставился нолик
    const addZero = (num) => {
        if (num <= 9) {
            return '0' + num;
        } else {
            return num;
        }
    };

    const getTimeRemaining = (endtime) => {   //она будет получать определённое колличество времени и выдавать то время которое нам осталось до конца
         const t = Date.parse(endtime) - Date.parse(new Date()),    //обьект дате метод парс принимает строку с датой в определённом формате, нев дате новыя дата
               seconds = Math.floor((t/1000) % 60),   //получаем всё в секундах, округляем методом флуур и делим на 60
               minutes = Math.floor((t/1000/60) % 60),  //получаем минуты
               hours = Math.floor((t/(1000 * 60 * 60)) % 24),    //получаем часы
               days = Math.floor((t/(1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    };

    //функция отвечат за то что мы определённые значениямпомещаем в определённые элементы на странице
    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
              days = timer.querySelector("#days"),
              hours = timer.querySelector("#hours"),
              minutes = timer.querySelector("#minutes"),
              seconds = timer.querySelector("#seconds"),
              timeInterval = setInterval(updateClock, 1000);

        updateClock();   //вручную вызываем функцию чтоб не было видно начальной вёрстки

        function updateClock() { //функция чтобы остановить функцию
            const t = getTimeRemaining(endtime);

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);
           
            if (t.total <= 0) {
                days.textContent = "00";
            hours.textContent = "00";
            minutes.textContent = "00";
            seconds.textContent = "00";

            clearInterval(timeInterval);
            }
        }
    };
    
    setClock(id, deadline);
};

export default timer;