let AddBtn = document.getElementById("AddBtn");
AddBtn.addEventListener("click", () => {

    let bookname = document.getElementById("name");
    let Author = document.getElementById("Author");
    let Language = document.getElementById("Language");
    let Publication = document.getElementById("Publication");
    let mrp = document.getElementById("mrp");
    let summary = document.getElementById("summary");
    let abauthor = document.getElementById("abauthor");
    let itemBox = document.getElementById("itemBox");

    localStorage.setItem(
        "name", `${bookname.value}`
    )
    itemBox.innerHTML += `<div class="item">
    
    <p> name: ${bookname.value}</p>
    <p> Author: ${Author.value} </p>
    <p> Language: ${Language.value}: </p>
    <p> Publication: ${Publication.value}</p>
    <p> MRP: ${mrp.value}</p>

    <button class="read link">
    View More
    </button>

    <section class="hide">
    <div>
        <p> Summary : </p>
        <textarea cols="30" rows="10">${summary.value}</textarea>
    </div>
    <div>
        <p> About Author : </p>
        <textarea cols="30" rows="10">${abauthor.value}</textarea>
    </div>
    <button class="read link1">
    View less
    </button>
    </section>
    
    <div>
    <button class="delBtn">
    DELETE BOOK
    </button>

    <button class="read read1">
    Mark as read
    </button>
    </div>
    </div>`
    let delBtn = document.querySelectorAll(".delBtn");
    let read1 = document.querySelectorAll(".read1");
    let link = document.querySelectorAll(".link");
    let link1 = document.querySelectorAll(".link1");
    let hide = document.querySelectorAll(".hide");

    for (let i = 0; i < delBtn.length; i++) {
        delBtn[i].addEventListener("click", () => {
            delBtn[i].parentElement.parentElement.style.display = "none";
        })
        link[i].addEventListener("click", () => {
            hide[i].style.display = "block";
            link[i].style.display = "none";
            link1[i].style.display = "block";

        })
        link1[i].addEventListener("click", () => {
            hide[i].style.display = "none";
            link1[i].style.display = "none";
            link[i].style.display = "block";
        })
        read1[i].addEventListener("click", () => {
            read1[i].classList.toggle("readItem");
            if (read1[i].innerText == "Mark as read") {
                read1[i].innerHTML = "Unmark from Read";
            }
            else {
                read1[i].innerHTML = "Mark as read";
            }

        })
    }
    bookname.value = '';
    Author.value = '';
    Language.value = "";
    Publication.value = "";
    mrp.value = "";
    summary.value = "";
    abauthor.value = "";

});
