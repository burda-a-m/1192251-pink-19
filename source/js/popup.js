var overlay = document.querySelector(".overlay");

var popup = document.querySelector(".popup");
var popup_btn = document.querySelector(".popup__btn");
var popup_title = document.querySelector(".popup__title");
var popup_msg = document.querySelector(".popup__message");

var form = document.querySelector(".form");

var submit = document.querySelector(".form__submit");

function popup_show(title, msg, failed) {
  popup.classList.remove("popup--failed");
  if (failed) {
    popup_btn.innerHTML = "Ok";
  } else {
    popup_btn.innerHTML = "Закрыть окно";
  }
  popup_title.innerHTML = title;
  popup_msg.innerHTML = msg;
  overlay.classList.add("overlay--show");
  popup.classList.add("popup--show");
}

function popup_hidde() {
  overlay.classList.remove("overlay--show");
  popup.classList.remove("popup--show");
}

submit.addEventListener("click", function(evt) {
  evt.preventDefault();
  if( form.checkValidity() ) {
    popup_show("Ваша заявка отправлена", "Спасибо за ваше участие, ваша заявка уже поступила к нам. В ближайшее время мы рассмотрим ее и<br> оповестим вас.", false);
    // form.submit();
  } else {
    popup_show("Что-то пошло не так!", "Проверьте поля, выделенные красным, скорее всего вы забыли их заполнить", true);
  }
});

popup_btn.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup_hidde();
});

overlay.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup_hidde();
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    popup_hidde();
  }
});
