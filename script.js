const countdown = document.getElementById('countdown');
const weddingDate = new Date('2025-08-09T00:00:00');

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    countdown.innerText = "É hoje!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  countdown.innerText = `Faltam ${days} dias para o nosso grande dia!`;
}

updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60); 
