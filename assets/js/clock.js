function updateClock() {
    const clockElement = document.getElementById('clock');
    
    // Mendapatkan waktu saat ini
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    // Menambahkan 0 di depan jam, menit, atau detik jika nilai kurang dari 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    // Menampilkan waktu pada elemen dengan id "clock"
    clockElement.innerHTML = `${hours}:${minutes}:${seconds}`;
  }
  
  // Memperbarui jam setiap detik
  setInterval(updateClock, 1000);
  
  // Panggil fungsi updateClock sekali saat halaman pertama kali dimuat
  updateClock();
  