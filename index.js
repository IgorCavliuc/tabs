const btns = document.querySelectorAll('.filter-btns_item');
const select = document.getElementById('filter-options');
const images = document.querySelectorAll('.filter-content img');

for(let btn of btns) {
    btn.onclick = function() {
        filterImage(this.dataset.filter);
    };
}

function filterImage(sel) {
    for(let img of images) {
        if(!img.classList.contains(sel)) {
            img.style.display= "none";
        } else {
            img.style.display="block";
        }
    }

    for (let btn of btns) {
        if (btn.dataset.filter === sel) {
            btn.classList.add('active');
        }else {
            btn.classList.remove("active");
        }
    }
    select.value = sel;
}

select.addEventListener('change', () =>{
    filterImage(select.value);
});