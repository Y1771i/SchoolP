const audio = new Audio('alarm.mp3');
const alarmTimes = [
  '09:00', '09:40', '10:00', '10:40', 
  '10:45', '11:25', '11:30', '12:10', 
  '13:30', '14:10', '14:15', '14:55', 
  '15:20', '16:00', '17:00'
]; // Full alarm times in HH:MM format

function playAlarm() {
  document.getElementById('status').textContent = 'Alarm ringing!';
  audio.play();
  setTimeout(() => {
    document.getElementById('status').textContent = 'Waiting for alarms...';
    audio.pause();
    audio.currentTime = 0; 
  }, 10000); 
}

function checkAlarms() {
  const now = new Date();
  const currentTime = now.toTimeString().slice(0, 5); 

  if (alarmTimes.includes(currentTime)) {
    playAlarm();
  }
}


//! Добавил:
function playAudio() {
    const audio = document.getElementById("alarmSound");
    audio.play();

    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0; // Начать заново. если уже играет
    }
}

setInterval(checkAlarms, 1000);
