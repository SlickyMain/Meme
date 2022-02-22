export function displayPreview() {
    const itsImage = document.getElementById("memePreviewField") || document.getElementById("imagePreviewField")
    const loader = document.getElementById("uploadMeme") || document.getElementById("uploadInput")
    const fileImage = loader.files[0]
    if (fileImage) {
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            itsImage.setAttribute("src", reader.result)
            itsImage.setAttribute("width", "100%")
            itsImage.setAttribute("height", "100%")
        })
        reader.readAsDataURL(fileImage)
        const placeholder = document.querySelector(".placeholderForMeme")
        if (placeholder) {
            placeholder.innerHTML = ""
        }
    }
}