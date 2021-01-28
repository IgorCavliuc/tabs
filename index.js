(function() { //скрытие базы от легкого доступа через консоль( в конце закрытие)

    const tabs = document.querySelectorAll(".tab-head_item");
    const contents = document.querySelectorAll(".tab-content_item");
    
    tabs.forEach((tab, index) => {
        tab.onclick = () => {
            changeTab(index);
        };
    });
    
    function changeTab(index) {
       setActiveClass(tabs, index);
       setActiveClass(contents, index);
    }
    
    function setActiveClass (arr, index) {
        for(let el of arr) {
            el.classList.remove("active");
        }
        arr[index].classList.add("active");
    
    }
}) ();

