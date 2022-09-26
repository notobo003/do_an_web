/* const account = document.querySelector('.header__icon .login-register__form');

const overlay = document.getElementById('overlay')
const modal = document.querySelector('.modal'); 

var btnClose = document.querySelector('.close-button')
account.addEventListener('click', openCloseModal)
overlay.addEventListener('click', openCloseModal)
btnClose.addEventListener('click', openCloseModal)

function openCloseModal() {
    if (modal.classList.contains('active') && overlay.classList.contains('active')) {
        overlay.classList.remove('active')
        modal.classList.remove('active')
    }else {
        overlay.classList.add('active')
        modal.classList.add('active')
        ;
    }
}
//

const accountAdmins = [
  {
    id: 'admin1',
    pw: '123',
  },
  {
    id: 'admin2',
    pw: '123',
  },
  {
    id: 'admin3',
    pw: '123',
  },
  {
    id: 'admin4',
    pw: '123',
  },
  {
    id: 'admin5',
    pw: '123',
  }
]
const btnLogin = document.querySelector('.btn-login');

btnLogin.addEventListener('click', () => {
  const idValue = document.querySelector('.input-username-login').value;
  const passWordValue =document.querySelector('.input-password-login').value;
  console.log();
  accountAdmins.forEach(user => {
    if (user.pw === passWordValue && user.id === idValue) 
      alert('admin');
  })
})
   */

const login = document.querySelector(".header__login");

const loginForm = document.querySelector(".login__form");

const btnClose = loginForm.querySelector(".btn-close");
const layout = loginForm.querySelector(".form__layout");
console.log(login, loginForm, btnClose, layout);
let isLogin = false;
let isPrev = false;
// tạo sự kiện click vao nút
btnClose.addEventListener("click", () => {
  loginForm.classList.remove("show");
});

layout.addEventListener("click", () => {
  loginForm.classList.remove("show");
});

login.addEventListener("click", () => {
  loginForm.classList.add("show");
  isLogin = true;
  isPrev = true;
});

const btnRegister = document.querySelector(".form__register");
btnRegister.addEventListener("click", () => handlRegister());

function handlRegister() {
  const titleForm = document.querySelector(".login__header__title");
  const pass2 = document.querySelector(".input-password-replace-login");
  const btnSubmit = document.querySelector(".btn-login");
  const inputEmail = document.querySelector(".input-email-login");

  const formFooter = document.querySelector(".form__footer");
  const btnPrev = document.querySelector(".btn-prev");
  pass2.style.display = "block";
  titleForm.innerHTML = "TẠO TÀI KHOẢN";
  btnSubmit.innerHTML = "Xác Nhập"; 
  formFooter.classList.add("disable");
  
  btnPrev.style.opacity = 1;
  if (isLogin === true || isPrev) {
    btnClose.addEventListener("click", () => {
      pass2.style.display = "none";
      titleForm.innerHTML = "ĐĂNG NHẬP";
      btnSubmit.innerHTML = "Đăng Nhập";
      formFooter.classList.remove("disable");
    });
    btnPrev.addEventListener("click", () => {
      pass2.style.display = "none";
      titleForm.innerHTML = "ĐĂNG NHẬP";
      btnSubmit.innerHTML = "Đăng Nhập";
      btnPrev.style.opacity = 0;
      formFooter.classList.remove("disable");
    });
  }
}
