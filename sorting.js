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
    },
    {
        author: "Сидоров",
        dateOfPost: "10.01.2022 01:01",
        description: "helohalowww",
        likes: 13
    },
    {
        author: "Чернов",
        dateOfPost: "05.16.2021 21:15",
        description: "helohalowww",
        likes: 8
    },
    {
        author: "Никонов",
        dateOfPost: "03.09.2022 01:01",
        description: "helohalowww",
        likes: 1606
    },
    {
        author: "Челикславич",
        dateOfPost: "12.01.2022 01:01",
        description: "helohalowww",
        likes: 238
    },
    {
        author: "Русских",
        dateOfPost: "05.16.2021 21:15",
        description: "helohalowww",
        likes: 296
    },
    {
        author: "Английских",
        dateOfPost: "03.03.2022 01:01",
        description: "helohalowww",
        likes: 69
    },
    {
        author: "Немецких",
        dateOfPost: "12.01.2022 01:01",
        description: "helohalowww",
        likes: 23
    },
    {
        author: "Усталов",
        dateOfPost: "05.16.2021 21:15",
        description: "helohalowww",
        likes: 254
    },
    {
        author: "Ййййъуьов",
        dateOfPost: "03.03.2022 01:01",
        description: "helohalowww",
        likes: 502
    },
    {
        author: "Куркума",
        dateOfPost: "12.01.2022 01:01",
        description: "helohalowww",
        likes: 333
    },
    {
        author: "Гречнёв",
        dateOfPost: "05.16.2021 21:15",
        description: "helohalowww",
        likes: 2603
    },
    {
        author: "Юсупов",
        dateOfPost: "03.03.2022 01:01",
        description: "helohalowww",
        likes: 1852
    }]


function sortByAuthor() {
    let sortedByAuthor = listOfPosts.sort((a, b) => a.author > b.author ? 1 : -1)
    insertInto(sortedByAuthor)

}

function sortByDate() {
    for (value of listOfPosts) {
        value.dateOfPost = new Date (value.dateOfPost)
    }
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
        post.querySelector(".fieldForLike").innerText = completedArray[i].likes
        post.querySelector(".fieldForDate").innerText = completedArray[i].dateOfPost
        parentNode.append(post)
    }
}

document.querySelector("#sortAuthor").onclick = sortByAuthor
document.querySelector("#sortLikes").onclick = sortByLikes
document.querySelector("#sortDate").onclick = sortByDate