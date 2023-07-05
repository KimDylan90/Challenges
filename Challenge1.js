function countdown(seconds) {
  const interval = setInterval(() => {
    if (seconds > 0) {
      console.log(`Verbleibende Zeit: ${seconds} Sekunden`);
      seconds--;
    } else {
      clearInterval(interval);
      console.log("Countdown abgelaufen!");
    }
  }, 1000);
}

//Countdown von 10 Sekunden
countdown(10);
