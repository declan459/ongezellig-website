const video = document.getElementById("video");
const track = document.getElementById("subtitle-track");
const subbedButton = document.getElementById("subbed-btn");
const dutchButton = document.getElementById("dutch-btn");
const title = document.getElementById("watch-title");
const description = document.getElementById("video-description");
function setVersion(subbed) {
    subbedButton.classList.toggle("selected", subbed);
    dutchButton.classList.toggle("selected", !subbed);
    subbedButton.setAttribute("aria-pressed", String(subbed));
    dutchButton.setAttribute("aria-pressed", String(!subbed));
    title.textContent = "Ongezellig — " + (subbed ? "Subbed (English)" : "Dutch");
    description.textContent = subbed ? "Original Dutch audio with English subtitles." : "Original Dutch audio without subtitles.";
    if (video.textTracks.length > 0) video.textTracks[0].mode = subbed ? "showing" : "disabled";
    if (subbed) track.setAttribute("default", "");
    else track.removeAttribute("default");
}
subbedButton.addEventListener("click", () => setVersion(true));
dutchButton.addEventListener("click", () => setVersion(false));
video.addEventListener("loadedmetadata", () => setVersion(subbedButton.classList.contains("selected")));
setVersion(true);
