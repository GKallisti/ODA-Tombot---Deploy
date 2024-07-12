
function openChatVideo() {
    const videoModal = document.getElementById('videoModal');
    const demoVideo = document.getElementById('demoVideo');

    demoVideo.play();
    videoModal.setAttribute('aria-hidden', 'false');
    videoModal.style.display = 'block';
}

function closeChatVideo() {
    const videoModal = document.getElementById('videoModal');
    const demoVideo = document.getElementById('demoVideo');

    demoVideo.pause();
    videoModal.setAttribute('aria-hidden', 'true');
    videoModal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('videoModal')) {
        closeChatVideo();
    }
    if (event.target == document.getElementById('submenuModal')) {
        closeSubmenuModal();
    }
}
