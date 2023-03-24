const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
    const text = input.value;
    if (text === '') {
        input.focus();
        return;
    }
    const item = createItem(text);
    items.appendChild(item);
    item.scrollIntoView({ block: 'center' });
    input.value = '';
    input.focus();
}
    // 1. 사용자가 입력한 텍스트를 받아옴
    // if 텍스트를 입력하지않으면 나가버리게 만듦
    // 2. 새로운 아이템을 만듬 (텍스트 +삭제 버튼)
    // createItem 은 새로 만듦
    // 3. items 컨테이너안에 새로 만든 아이템을 추가한다.
    // 4. 새로 추가된 아이템으로 스크롤링
    // 5. 인풋을 초기화 한다.(텍스트를 초기화)
    // 이벤트를 처리하는 함수는 보통 on을 붙인다.

function createItem(text) {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('class', 'item__name');
    name.innerText = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    deleteBtn.innerHTML = '<i class="fa-sharp fa-solid fa-trash"></i>'
    deleteBtn.addEventListener('click', () => {
        items.removeChild(itemRow);
    });

    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');

    item.appendChild(name);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);
    return itemRow;
}
addBtn.addEventListener('click', () => {
    onAdd();
});
// html 보고 만들자
// click이 되면 등록한 콜백함수를 호출한다.

input.addEventListener('keypress', () => {
    if(event.key === 'Enter') {
        onAdd();
    }
    // 내용이 있을때 엔터키를 쳐도 입력이 되게 만든것 
});
// 인풋에서 키가 눌러지면 