const dictionary = new Set()

function areLetters(word) {
    console.log(word)
    let abc = /^[A-Za-z]+$/
    if (word.match(abc)) {
        return true
    } else {
        alert("Only letters please")
        return false
    }
}

function setWord() {
    let word = document.getElementById("submitBox").value
    document.getElementById("submitBox").value = ""
    if (word != "" && areLetters(word)) {
    dictionary.add(word)
    }
}

function getWord() {
    let word = document.getElementById("searchBox").value
    document.getElementById("searchBox").value = ""
    if (word == "" || !areLetters(word))
    return
    document.getElementById("searchBox").value = ""
    if (dictionary.has(word)) {
        document.getElementById("resultField").innerHTML = `\
        <div class="card w-25 text-white bg-success">\
            <div class="card-body">\
                Word "${word}" is found. \
            </div>\
        </div>\
        `
    } else {
        document.getElementById("resultField").innerHTML = `\
        <div class="card w-25 text-white bg-danger">\
            <div class="card-body">\
                Word "${word}" is not found. \
            </div>\
        </div>\
        `
    }
}
