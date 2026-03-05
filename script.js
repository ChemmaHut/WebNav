const musicBtn = document.getElementById('music-btn');
const bgMusic = document.getElementById('bg-music');

musicBtn.addEventListener('click', function() {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.textContent = '♫ 音乐 [播放中]';
    } else {
        bgMusic.pause();
        musicBtn.textContent = '♫ 音乐 [暂停]';
    }
});
