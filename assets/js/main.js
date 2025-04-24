
const searchList = () => {
    let input, filter, ul, li, a, txtValue;
    let visibleCount = 0;

    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("search-items");
    li = ul.getElementsByTagName("li");

    for (let i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            visibleCount++;
        } else {
            li[i].style.display = "none";
        }
    }

    document.querySelector(".search-item-container p span").textContent = visibleCount;
};

























