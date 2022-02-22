import { displayPreview } from "./modules/preview.js"

const inputField = document.getElementById("uploadInput")
const langer = document.querySelector(".langSwitcher")

inputField.addEventListener("change", displayPreview)

const watcher = new IntersectionObserver( () => {
    console.log("I see the switcher")
},  {root: null, threshold: 1})

watcher.observe(langer)