const clockDisplay = document.getElementById("clock");

function formatTimePart(value) {
  return String(value).padStart(2, "0");
}

function updateClock() {
  const now = new Date();

  const hours = formatTimePart(now.getHours());
  const minutes = formatTimePart(now.getMinutes());
  const seconds = formatTimePart(now.getSeconds());

  clockDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

updateClock();
setInterval(updateClock, 1000);
