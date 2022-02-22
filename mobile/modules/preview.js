export function displayPreview() {
    const itsImage = document.getElementById("memePreviewField") || document.getElementById("imagePreviewField")
    const fileImage = this.files[0]
    if (fileImage) {
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            itsImage.setAttribute("src", reader.result)
            itsImage.setAttribute("width", "100%")
            itsImage.setAttribute("height", "100%")
            itsImage.style.objectFit = "cover"
        })
        reader.readAsDataURL(fileImage)
        const placeholder = document.querySelector(".placeholderForMeme")
        if (placeholder) {
            placeholder.innerHTML = ""
        }
    }
}
