const add_form = document.querySelector("#add-form");
const add_input = document.querySelector("#add-input");
const show_menu = document.querySelector("#show-menu");
const show_result = document.querySelector("#show-result");

//뽑기 버튼 누를 때 실행되는 함수
function resultHandler() {
  //모든 입력된 메뉴, li태그들을 선택하기
  const liAll = show_menu.getElementsByTagName("li");

  //적은게 없을 경우 작동하지 않도록
  if (liAll.length == 0) {
    return;
  }

  //그 메뉴등 중에서 하나 뽑기
  const randomNum = Math.floor(Math.random() * liAll.length);
  //결과 보여줄 곳에 추가하기
  show_result.innerText = `${liAll[randomNum].innerText} 어때?!`;
}

//메뉴를 input태그에 적어서 추가할 때 실행되는 함수
function add_menu() {
  //새로운 li 태그 만들고 속성추가하기
  const newLi = document.createElement("li");
  newLi.innerText = add_input.value;
  newLi.id = add_input.value;
  newLi.addEventListener("click", (e) => {
    e.target.remove();
  });
  //show-menu 아이디를 갖는 ul태그 안에 새로운 li태그 추가하기
  show_menu.appendChild(newLi);
  //input 칸을 빈칸으로 만들어주기
  add_input.value = "";
}

//add-form id를 갖는 form태그에서 제출할 떄 실행되는 함수
function submitHandler(e) {
  //새로고침 방지
  e.preventDefault();
  add_menu();
}

//add-form이 제출될 때 실행될 이벤트 추가하기
add_form.addEventListener("submit", submitHandler);
