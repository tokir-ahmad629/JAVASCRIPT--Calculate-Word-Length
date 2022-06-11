let btn = document.querySelector("#btn"),
    str = document.querySelector("#str"),
    output = document.querySelector("#output");

wordLength = () => {
    strText = str.value;
    console.log(str.value);
    if(strText === ''){
        alert("Please Type Number or Text");
    }
    else{
    tottalWordLength = strText.length;
    output.innerHTML = `<h1> ${tottalWordLength} </h1>`;
    }



}

btn.addEventListener("click", wordLength);