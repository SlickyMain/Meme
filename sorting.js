var listOfPosts = fetch("http://meme.gcqadev.ru/post.json")
    .then(res => {
        return res.json()
    })
    .then(value => {
        listOfPosts = value
        for (kee of listOfPosts) {
            kee.dateOfPost = new Date (kee.dateOfPost)
        }
    })

function sortByAuthor() {
    let sortedByAuthor = listOfPosts.sort((a, b) => a.author > b.author ? 1 : -1)
    insertInto(sortedByAuthor)

}

function sortByDate() {
    let sortedByAuthor = listOfPosts.sort((a, b) => a.dateOfPost > b.dateOfPost ? 1 : -1)
    insertInto(sortedByAuthor)
}

function sortByLikes() {
    let sortedByAuthor = listOfPosts.sort((a, b) => a.likes > b.likes ? -1 : 1)
    insertInto(sortedByAuthor)
}

function insertInto(completedArray) {
    const template = document.getElementById("postTemplate")
    const parentNode = document.getElementById("postField")
    parentNode.innerHTML = ""
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