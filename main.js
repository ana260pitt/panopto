// document.addEventListener("DOMContentLoaded",()=>{


// var video = document.getElementById("embed")
// console.log("HELLO")
// // console.log(player)
// video.addEventListener('click',()=>{(console.log("VIDEO CLICKED"))})

// })
// var tag = document.createElement("script");
// tag.src="https://developers.panopto.com/scripts/embedapi.min.js"

var tag = document.createElement("script");
tag.src="https://developewrs.panopto.com/scripts/embedapi.min.js"

var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var embedApi;
function onPanoptoEmbedApiReady()
{
    embedApi = new EmbedApi("player", {
          width: "750",
        height: "422",
        serverName: "pitt.hosted.panopto.com",
        sessionId: "9c3cf674-0783-4409-9c3e-af9c01515f79", //Use the DELIVERY ID...not the session ID
        videoParams: {
            interactivity: "none",
            hideoverlay: true,
        },
        events: {
            onIframeReady: onPanoptoIframeReady,
            onReady: onPanoptoVideoReady,
            onError: onPanoptoError,
            onClick: buttonClick
        }
    });
}

function onPanoptoIframeReady()
{
    console.log("`onIframeReady`: Iframe ready for API commands");
}

function onPanoptoVideoReady()
{
    $("#player").addClass("loaded");

    console.log("`onReady`: Playback has begun.");
}

function onPanoptoError(error)
{
    if (error === ApiError.PlayNotAllowed)
    {
        console.log("Browser autoplay policy prevented playback.");
    }
    else if (error === ApiError.PlayWithSoundNotAllowed)
    {
        console.log("Browser autoplay policy prevented playback with sound.");
    }
}

function buttonClick(c){
switch (c){
    case 'play':
        embedApi.playVideo();
        break;

    case 'pause':
        embedApi.pauseVideo();
        break;

    case 'mute':
        embedApi.muteVideo();
        break;

    case 'unmute':
        embedApi.unmuteVideo();
        break;
    case 'reset':
        embedApi.resetVideo();
        break;
}
}
