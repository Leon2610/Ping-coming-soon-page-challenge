const btn = document.querySelector("#btn-submit");
const input = document.querySelector("input");
const msg = document.querySelector(".msg");
const form = document.querySelector(".input-container");

btn.addEventListener("click", (e) => {
  if (input.value === "") {
    input.classList.add("error");
    msg.textContent = "Whoops! It looks like you forgot to add your email 😨";
    return;
  } else if (emailValidator(input.value)) {
    input.classList.add("success");
    msg.textContent = "Thank you for subscribing! 😀🙌";
    setTimeout(() => {
      form.submit();
    }, 3000);
  } else {
    input.classList.add("error");
    msg.textContent = "Please provide a valid email address 🤨";
    return;
  }
});

const emailValidator = (email) => {
  const regex =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email) ? true : false;
};
