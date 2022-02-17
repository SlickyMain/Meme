var porcionOfPosts
var listOfPosts
var loadedAlready = 0
const parentNode = document.getElementById("postField")
const placeholdForCounter = "Количество элементов на странице: "
const counter = document.getElementById("counter")

function requestToServer() {
    fetch("http://meme.gcqadev.ru/post.json")
    .then(res => {
        return res.json()
    })
    .then(value => {
        if (!listOfPosts) {
            listOfPosts = value
            for (kee of value) {
                kee.dateOfPost = new Date (kee.dateOfPost)
            }
        }
        porcionOfPosts = value.length
        loadedAlready += value.length
        for (kee of value) {
            kee.dateOfPost = new Date (kee.dateOfPost)
        }
        insertInto(value)
        countElems(placeholdForCounter)
    })
}

function countElems (placehold) {
    let displaysNow = parentNode.children.length
    counter.innerHTML = placehold + displaysNow
}

function sortByAuthor() {
    let sortedByAuthor = listOfPosts.sort((a, b) => a.author > b.author ? 1 : -1)
    document.getElementById("postField").innerHTML = ""
    insertInto(sortedByAuthor)
}

function sortByDate() {
    let sortedByAuthor = listOfPosts.sort((a, b) => a.dateOfPost > b.dateOfPost ? 1 : -1)
    document.getElementById("postField").innerHTML = ""
    insertInto(sortedByAuthor)
}

function sortByLikes() {
    let sortedByAuthor = listOfPosts.sort((a, b) => a.likes > b.likes ? -1 : 1)
    document.getElementById("postField").innerHTML = ""
    insertInto(sortedByAuthor)
}

function deleteElems(howMuch) {
    for (let i = 0; i < howMuch; i++) {
        let fChild = document.querySelector(".mix-blocks")
        fChild.remove()
    }
}

function insertInto(completedArray) {
    const template = document.getElementById("postTemplate")
    for (let i = 0; i < completedArray.length; i++) {
        let post = template.content.cloneNode(true)
        post.querySelector("h3").innerText = completedArray[i].author
        post.querySelector(".fieldForLike").innerText = completedArray[i].likes + " likes"
        post.querySelector(".fieldForDate").innerText = completedArray[i].dateOfPost.getDate() + "." + 
        completedArray[i].dateOfPost.getMonth() + "." + completedArray[i].dateOfPost.getFullYear()
        parentNode.append(post)
    }
}

document.querySelector("#sortAuthor").onclick = sortByAuthor
document.querySelector("#sortLikes").onclick = sortByLikes
document.querySelector("#sortDate").onclick = sortByDate

window.onload = requestToServer()
window.addEventListener("scroll", () => {
    const docRect = document.documentElement.getBoundingClientRect()
    if (docRect.bottom < document.documentElement.clientHeight + 400) {
        requestToServer()
    }
    if (loadedAlready > 50) {
        deleteElems(porcionOfPosts)
        loadedAlready -= porcionOfPosts
    }
})