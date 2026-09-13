document.getElementById("btn-show-message").onclick = (e) => {
    document.getElementById("p-message").innerHTML = "Hello, World!";
    e.target.innerHTML = "Done!";
}

document.getElementById("Link").onclick = (e) => {
    e.preventDefault(); //dont go to links destination
    e.target.classList.add("cool-link");
}   

document.getElementById("btn-bounce").onclick = (e) => {
    document.getElementById("ball").classList.toggle("bouncing-ball");
}