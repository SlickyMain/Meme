var listOfPosts = [
    {
        author: "Иванов",
        dateOfPost: "12.01.2022 01:01",
        description: "helohalowww",
        likes: 68
    },
    {
        author: "Петров",
        dateOfPost: "05.16.2021 21:15",
        description: "helohalowww",
        likes: 26
    },
    {
        author: "Астафьев",
        dateOfPost: "03.03.2022 01:01",
        description: "helohalowww",
        likes: 106
    }]


function sortByAuthor() {
    let sortedByAuthor = listOfPosts.sort((a, b) => a.author > b.author ? 1 : -1)
    insertInto(sortedByAuthor)

}

function sortByDate() {
    let sortedByAuthor = listOfPosts.sort((a, b) => a.dateOfPost > b.dateOfPost ? 1 : -1)
    insertInto(sortedByAuthor)
}

function sortByLikes() {
    let sortedByAuthor = listOfPosts.sort((a, b) => a.likes > b.likes ? 1 : -1)
    insertInto(sortedByAuthor)
}

function insertInto(completedArray) {
    let placeTo = document.querySelectorAll(".mix-blocks")
    let counter = 0
    placeTo.forEach( elem => {
        elem.textContent = completedArray[counter].author + " date - " + completedArray[counter].dateOfPost + ", likes - " + completedArray[counter].likes;
        counter++
    }
    )
}

document.querySelector("#sortAuthor").onclick = sortByAuthor
document.querySelector("#sortLikes").onclick = sortByLikes
document.querySelector("#sortDate").onclick = sortByDate