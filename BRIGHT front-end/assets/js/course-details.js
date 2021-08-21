function pauseVideo() {
    const targetVideo = document.getElementById('my-video');

    if (!targetVideo.paused) {
        targetVideo.pause();
        console.log("paused");
    }
};

function playVideo() {
    const targetVideo = document.getElementById('my-video');

    targetVideo.play()
};

const ignoreClickOnMeElement = document.getElementById('my-video');

document.addEventListener('click', function(event) {
    var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
    if (!isClickInsideElement) {
        pauseVideo()
    }
});