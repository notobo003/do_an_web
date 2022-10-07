let infoUser = [];
const formInfo = document.querySelector(".info__container > form");
const inputs = formInfo.querySelectorAll("input");
const btnSave = document.querySelector(".form__info-btn-save > button");
const selects = formInfo.querySelectorAll("select");
console.log(selects);
if (JSON.parse(localStorage.getItem("info")) != null) {
  let user = JSON.parse(localStorage.getItem("info"));
  inputs[0].value = user.lastName;
  inputs[1].value = user.firstName;
  inputs[2].value = user.phone;
  inputs[3].value = user.addressHome;
  // console.log(selects[0]);
  document.getElementById("region_id")[0].innerText = "111111";
  console.log(document.getElementById("region_id")[0]);
  // document.getElementById("region_id")[0].setAttribute("selected", "selected");
} else {
  btnSave.addEventListener("click", () => {
    //   console.log($("#region_id option:selected").text());
    const select = formInfo.querySelectorAll("select option:checked");
    /* select.forEach((item) => {
      console.log(item);
      item.createAttribute("selected");
    }); */
    let id_user = JSON.parse(localStorage.getItem("userLoginCurrent")).id;
    user = {
      id_user: id_user,
      lastName: inputs[0].value,
      firstName: inputs[1].value,
      phone: inputs[2].value,
      province: select[0].title,
      city: select[1].title,
      ward: select[2].title,
      addressHome: inputs[3].value,
    };
    /* select[0].createAttribute("selected");
    select[1].createAttribute("selected");
    select[2].createAttribute("selected"); */
    //   console.log(document.querySelector("#region_id option:selected").html());
    if (infoUser.length == 0) {
      infoUser.push(user);
    }
    infoUser.forEach((item) => {
      if (item.id_user !== user.id_user) {
        infoUser.push(user);
      }
    });

    localStorage.setItem("info", JSON.stringify(user));
    console.log(infoUser);
  });
}
