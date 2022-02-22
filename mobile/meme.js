import { displayPreview } from "./modules/preview.js"

const memeField = document.getElementById("uploadMeme")

memeField.addEventListener("change", displayPreview)