const modal = document.querySelector(".navigation");
const checkbox = document.querySelector(".navigation__checkbox");
const button = document.querySelector(".navigation__button")

modal.addEventListener("click", (e) => {
  if (e.target != button && e.target != checkbox) {
    checkbox.checked = false
  }
});
