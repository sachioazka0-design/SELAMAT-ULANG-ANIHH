// KODE JAVASCRIPT TERPISAH
document.getElementById('btnStart').addEventListener('click', () => {
  const audio = document.getElementById('audioPlayer');
  audio.play();
  alert('Selamat Ulang Tahun Sayang! 🎉');
});

const loveSlider = document.getElementById('loveSlider');
loveSlider.addEventListener('input', (e) => {
  const val = e.target.value;
  document.getElementById('loveMessage').textContent = val + '% - Cintaku terus bertambah!';
});
