const images = () => {
   const imgPopup = document.createElement('div'),    //создание модального окна
         workSection = document.querySelector('.works'),   //получаем общий олок для всех изображений
         bigImage = document.createElement('img');     //создаём изображения

    imgPopup.classList.add('popup');
    workSection.appendChild(imgPopup);

    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    imgPopup.style.display = 'none';

    imgPopup.appendChild(bigImage);         //помещаем в это окно изображение

    workSection.addEventListener('click', (e) => {
        e.preventDefault();

        let target = e.target;

        if(target && target.classList.contains('preview')) {
            imgPopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

        if (target && target.matches('div.popup')) {
            imgPopup.style.display = 'none';
        }
    });
};

export default images;