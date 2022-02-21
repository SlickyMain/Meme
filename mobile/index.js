const inputField = document.getElementById("uploadInput")

inputField.addEventListener("change", () => {
    console.log(inputField.files)
    const itsImage = document.getElementById("imagePreviewField")
    let fileImage = inputField.files[0]
    if (fileImage) {
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            itsImage.setAttribute("src", reader.result)
        })
        reader.readAsDataURL(fileImage)
    }
})