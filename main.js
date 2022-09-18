var down = false;

function btnShow() {
    var moreDesc = document.getElementById("more-desc");
    var btnContent = document.getElementById("icon");
    if (!down) {
        moreDesc.className += " show";
        btnContent.className = "fa fa-angle-up";
        document.getElementById("bazaar-desc").scrollIntoView();
        down = true;
    } else {
        moreDesc.className = "more-desc";
        btnContent.className = "fa fa-angle-down";
        down = false;
    }
}

function showMenu() {
    var menu = document.getElementById("menu");
    if (menu.className === "burger-menu") {
        menu.className += " show-menu";
    } else {
        menu.className = "burger-menu";
    }
}