usersAccount = [
  {
    id: "user1",
    pw: "123",
    isActive: false,
  },
  {
    id: "user2",
    pw: "123",
    isActive: false,
  },
  {
    id: "user3",
    pw: "123",
    isActive: false,
  },
  {
    id: "user4",
    pw: "123",
    isActive: false,
  },
  {
    id: "user5",
    pw: "123",
    isActive: false,
  },
];
const formTitle = document.querySelectorAll(".login_form_header span");
console.log(formTitle);
formTitle.forEach((item) => {
  item.addEventListener("click", () => {
    for (const i of formTitle) {
      if (i.classList.contains("active")) {
        i.classList.remove("active");
      }
    }
    item.classList.add("active");
  });
});
const iconForm = document.querySelector(".header__login");
const form = document.querySelector(".login_form_content");
const login = document.querySelector(".login_form_header-login");
const register = document.querySelector(".login_form_header-register");
const registerContent = document.querySelector(".register_content");
const loginContent = document.querySelector(".login_content");
const headerLine = document.querySelector(".login_form_header span");
const formBtnClose = document.querySelector(".login_form_btn_close");
const showTexts = document.querySelectorAll(".form_input_showtext");
const formOverlay = document.querySelector(".form_overlay");
const inputPassAll = form.querySelectorAll("input[type='password']");

loginContent.addEventListener("submit", (e) => {
  e.preventDefault();
  const userLogin = loginContent.querySelector("input[type='text']");
  const pass = loginContent.querySelector("input[type='password']");

  checkEmptyValue([userLogin, pass]);

  if (checkEmptyInput(userLogin) == false) {
    let isUserLength = checkLength(userLogin, 3, 8);
  }
  if (checkEmptyInput(pass) == false) {
    let isUserLength = checkLength(pass, 3, 8);
  }
  /* const userValue = userLogin.value.trim();
  const passValue = pass.value.trim();
  if (userValue === "") {
    setErrorMessage(userLogin, "Bạn chưa điền đúng thông tin");
  } else {
    setSuccessMessage(userLogin);
  }
  if (passValue === "") {
    setErrorMessage(pass, "Bạn chưa điền đúng thông tin");
  } else {
    setSuccessMessage(pass);
  } */

  const userCurrent = usersAccount.find((item) => {
    return item.id === userLogin.value && item.pw === pass.value;
  });
  if (userCurrent) {
    userCurrent.isActive = true;
    alert("Đăng nhập thành công");
    iconForm.click();
    iconForm.removeEventListener("click", showFormLogin);
    const userInfo = document.querySelector(".header_user_info");
    const iconLogin = document.querySelector(".header__login-icon");
    const avatarUser = document.querySelector(".header__login_avatar");
    /*   iconLogin.style.display = "none";
    avatarUser.style.display = "inline-block"; */
    avatarUser.classList.add("show");
    iconLogin.classList.remove("show");
    avatarUser.classList.add("show");
  } else {
    alert("Đăng nhập khong dung");
    resetInput([userLogin, pass]);
  }
});

registerContent.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = registerContent.querySelectorAll("input");
  // let isEmpty = checkEmptyValue(inputs);
  if (checkEmptyInput(inputs[0]) == false) {
    var isUserLength0 = checkLength(inputs[0], 3, 8);
  }
  if (checkEmptyInput(inputs[1]) == false) {
    var isEmail1 = checkEmail(inputs[1]);
  }
  if (checkEmptyInput(inputs[2]) == false) {
    var isUserLength2 = checkLength(inputs[2], 3, 8);
  }
  if (checkEmptyInput(inputs[3]) == false) {
    var isUserLength3 = checkLength(inputs[3], 3, 8);
    var isMatchingPW3 = checkMathingPassword(inputs[2], inputs[3]);
  }
  if (
    !isUserLength0 &&
    !isEmail1 &&
    !isUserLength2 &&
    !isUserLength3 &&
    !isMatchingPW3
  ) {
    let arr = [
      {
        id: inputs[0].value,
        email: inputs[1].value,
        pw: inputs[2].value,
      },
    ];
    console.log(arr);
  }
});

// hàm reset ô input khi login sai thông tin
function resetInput(inputs) {
  inputs.forEach((input) => {
    input.value = "";
    setErrorMessage(input, "Xin vui lòng nhập lại");
  });
}
// hàm check length 1 ô input nếu đúng > min và < max return false
function checkLength(input, min, max) {
  input.value = input.value.trim();
  if (input.value.length < min) {
    setErrorMessage(input, `Phải co ít nhất ${min} ký tự`);
    return true;
  } else if (input.value.length > max) {
    setErrorMessage(input, `Phải co ít nhất ${max} ký tự`);
    return true;
  } else {
    setSuccessMessage(input);
    return false;
  }
}
// check input password có trùng với password2 đúng return false
function checkMathingPassword(pwInput, pwInput2) {
  if (pwInput.value !== pwInput2.value) {
    setErrorMessage(pwInput2, `Mật khẩu không trùng khớp`);
    return true;
  }
  return false;
}
// check nhiều input rỗng value có value return false
// listInput: array
function checkEmptyValue(listInput) {
  let isEmpty = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();
    if (!input.value) {
      isEmpty = true;
      setErrorMessage(input, "Không được để trống");
    } else {
      setSuccessMessage(input);
    }
  });
  return isEmpty;
}
// check 1 input rỗng value có value return false
function checkEmptyInput(input) {
  let isEmpty = false;

  input.value = input.value.trim();
  if (!input.value) {
    isEmpty = true;
    setErrorMessage(input, "Không được để trống");
  } else {
    setSuccessMessage(input);
  }
  return isEmpty;
}
//  check email hợp lệ đúng return false
function checkEmail(input) {
  input.value = input.value.trim();
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(input.value)) {
    setSuccessMessage(input);
    return false;
  } else {
    setErrorMessage(input, "Không phải là dạng email");
    return true;
  }
}
function setErrorMessage(input, message) {
  input.classList.add("error");
  input.classList.remove("success");

  input.nextElementSibling.innerText = message;
  input.nextElementSibling.classList.add("show");
}
function setSuccessMessage(input) {
  input.classList.add("success");
  input.classList.remove("error");
  input.nextElementSibling.classList.remove("show");
}

showTexts.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.parentElement.children[1].type === "password") {
      item.parentElement.children[1].type = "text";
    } else {
      item.parentElement.children[1].type = "password";
    }
    if (item.innerHTML === "Hiện") {
      item.innerHTML = "Ẩn";
    } else {
      item.innerHTML = "Hiện";
    }
  });
});
loginContent.classList.add("show");
login.addEventListener("click", () => {
  loginContent.classList.add("show");
  registerContent.classList.remove("show");
});
register.addEventListener("click", () => {
  registerContent.classList.add("show");
  loginContent.classList.remove("show");
});
usersAccount.some((item) => {
  return;
});
function showFormLogin() {
  form.classList.toggle("show");
  formOverlay.classList.toggle("show");
}
iconForm.addEventListener("click", showFormLogin);
formBtnClose.addEventListener("click", () => {
  iconForm.click();
});
formOverlay.addEventListener("click", () => {
  iconForm.click();
});
