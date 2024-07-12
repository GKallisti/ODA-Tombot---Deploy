function openSubmenuModal(content) {
    const submenuModal = document.getElementById('submenuModal');
    const submenuContent = document.getElementById('submenuContent');

    submenuContent.textContent = content;
    submenuModal.setAttribute('aria-hidden', 'false');
    submenuModal.style.display = 'block';
}

function closeSubmenuModal() {
    const submenuModal = document.getElementById('submenuModal');

    submenuModal.setAttribute('aria-hidden', 'true');
    submenuModal.style.display = 'none';
}

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
