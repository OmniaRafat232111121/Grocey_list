
$(window).keydown(function (event) { if (event.keyCode == 13) { event.preventDefault(); return false; } });
document.getElementById('add').addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
        createItem();
    }
});
function edit(child) {
    let li = child.parentNode;
    let p = li.firstElementChild;
    let input = li.childNodes[3];
    input.value = p.innerText;
    p.style.display = "none";
    input.style.cssText = 'display:inline !important';
    input.focus();
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            p.innerText = input.value;
            p.style.display = "inline";
            input.style.cssText = 'display:none !important';
        }
    });
    input.addEventListener('focusout', (event) => {
        p.innerText = input.value;
        p.style.display = "inline";
        input.style.cssText = 'display:none !important';
    });
}
function delete_item(child) {
    let X = child.parentNode;
    X.remove();

}
function delete_all() {
    var myList = document.getElementById('item-list');
    myList.innerHTML = '';

}
function createItem() {
    let value = document.getElementById('add').value;
    if (value) {
        let parent = document.getElementById('item-list');
        let old = parent.innerHTML;
        parent.innerHTML = `${old}
                        <li class="list-group-item rounded">
                            <p>${value}</p>
                            <input type="text" name="show" class="py-1 form-control">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-trash" viewBox="0 0 16 16" onclick="delete_item(this)">
                                <path
                                    d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fill-rule="evenodd"
                                    d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-pencil" viewBox="0 0 16 16" onclick="edit(this)">
                                <path
                                    d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                            </svg>
                        </li>`;
        document.getElementById('add').value = '';
        let msg = document.getElementsByClassName('text-success')[0];
        msg.firstChild.innerText = `${value} Added To The List`;

        $(".text-success").fadeIn();
        setTimeout(function () {
            $(".text-success").fadeOut();
        }, 3000);
    }
}