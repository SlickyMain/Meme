document.querySelector("#makeNewUser").onclick = chooseAvatar

function chooseAvatar() {
    const template = document.getElementById("avatarWindow")
    const parentNode = document.getElementById("parentNode")
    while (parentNode.children.length) {
        parentNode.firstElementChild.remove()
    }
    let avatar = template.content.cloneNode(true)
    avatar.querySelector(".registerText").innerText = "Фото профиля"
    avatar.querySelector(".avatarPlace").innerHTML = `
    <p>
    <input id="uploadInput" type="file" name="myFiles" multiple>
    </p>`
    parentNode.append(avatar)
}