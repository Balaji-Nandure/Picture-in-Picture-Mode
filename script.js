/** @format */

const videoElement = document.getElementById("video");

const button = document.getElementById("button");

// Prompt to select media stream, pass to cideo element, them we can play it

async function selectMediaStream() {
    try {
        // we are using screen capture api for making this pip functionality
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();

        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        };
    } catch (error) {
        console("Error error error");
    }
}

button.addEventListener("click", async () => {
    // disable the button
    button.disabled = true;

    // start pip mode
    await videoElement.requestPictureInPicture();

    // reset button
    button.disabled = false;
});

// on load
selectMediaStream();
