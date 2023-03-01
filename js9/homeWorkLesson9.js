// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.
// const fromInput = document.querySelector('#from');
// const spanText = document.querySelector('span');
// fromInput.addEventListener('input', function (e) {
//     if (fromInput.value === '') {
//     spanText.textContent = ' ';
//     } else {
//         spanText.textContent = fromInput.value;
//     }
// });

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

// const messageBtn = document.querySelector('.messageBtn');
// const divMessage = document.querySelector('.message');
// messageBtn.addEventListener('click', function (e) {
//     divMessage.className = 'animate_animated animate_fadeInLeftBig';
//     divMessage.style.visibility = "visible";
// });

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.

// const submitForm = document.querySelector('.submit-form');
// const formControl = document.querySelectorAll('.form-control');
// submitForm.addEventListener('submit', function (e) {
//     // body

// formControl.forEach(element => {
//     if (element.value === '') {
//         element.classList.add('error');
//     }
//     else 
//         element.classList.remove('error');
//     })
// });
    

