const $text = document.querySelector(".footer_input");
const footer_btn = document.querySelector(".footer_btn");
const itemUl = document.querySelector(".items");
let idx = 1;
let item_delete = "";
// 값넣기
function itemAdd() {
  itemUl.innerHTML += `<li class="item_row" data-id="${idx}">
  <div class="item">
    <span class="item_name">${$text.value}</span>
    <button class="item_delete">
      <i class="fa-solid fa-trash-can" data-id="${idx}"></i>
    </button>
  </div>
</li>`;
  $text.value = "";
  $text.focus();
  idx += 1;
}
// 중복값
function itemCheck() {
  let text = $text.value;
  if (text.trim().addEventListener == 0) {
    alert("값을 입력해주세요.");
    $text.value = "";
    $text.focus();
    return true;
  }
  let item = [...document.querySelectorAll("span")];
  let check = item.find((item) => text === item.innerHTML);
  if (check) {
    alert("같은 값이있습니다.");
    return true;
  }
  return false;
}
// 추가
footer_btn.addEventListener("click", () => {
  if (itemCheck()) {
    return;
  }
  itemAdd();
});
// 엔터 추가
$text.addEventListener("keydown", (event) => {
  if (event.isComposing) return;
  if (event.code === "Enter") {
    if (itemCheck()) {
      return;
    }
    itemAdd();
  }
});
// target 삭제
function delectItem(idx) {
  const delItem = document.querySelector(`.item_row[data-id='${idx}']`);
  delItem.remove();
}
itemUl.addEventListener("click", (event) => {
  let id = event.target.getAttribute("data-id"); //선택한 타겟 값 가지고오기
  if (!id) {
    // path/ svg 선택했을때 path로 잡히면 그것에 부모인 svg(data-id) 선택
    id = event.target.parentElement.getAttribute("data-id");
    // 아이템을 선택했을시 삭제 안되게 막아주기
    if (event.target.parentElement.classList.value === "item_row") return;
  }
  id && delectItem(id);
});
