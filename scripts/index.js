const mulaiButton = document.querySelector('.mulai');
const changeAvatar = document.querySelectorAll('.change-avatar');

const aktivitasMakanButton = document.querySelector('.aktivitas-makan');
const aktivitasBermainButton = document.querySelector('.aktivitas-main');
const aktivitasTidurButton = document.querySelector('.aktivitas-tidur');
const aktivitasBelajarButton = document.querySelector('.aktivitas-belajar');
const aktivitasbekerjaButton = document.querySelector('.aktivitas-bekerja');

setInterval(() => {
  if (navigator.onLine == false) {
    $('#online').addClass('d-none');
    $('#offline').removeClass('d-none');
  } else {
    $('#online').removeClass('d-none');
    $('#offline').addClass('d-none');
  }
}, 500);

// PROFILE
let nama = 'anonim';
let avatar = 'avatar1';
let aktivitas = 'avatar.png';
let makan = 50;
let tidur = 50;
let main = 50;
let belajar = 50;
let semester = 1;
let saldo = 50000;
let mulai = false;

const gantiAvatar = () => {
  avatar = avatar == 'avatar1' ? 'avatar2' : 'avatar1';
  $('#pilihAvatar').attr('src', `/image/${avatar}/avatar.png`);
}

changeAvatar.forEach(element => {
  element.addEventListener('click', gantiAvatar)
})

$('#nama').on('keyup', function () {
  nama = this.value;
});

const mulaiPermainan = () => {
  if (nama.length < 3) {
    alert('minimal nama pemain adalah 3 karakter');
  } else {
    $('#profil').addClass('d-none');
    $('#permainan').removeClass('d-none');
    
    mulai = true;
    waktu();
    update();
    
    stopWaktuMenganggur();
    mulaiWaktuMenganggur();
  }
}

mulaiButton.addEventListener('click', mulaiPermainan);


// aksi ketika mengganggur
const menganggur = () => {
  if (mulai) {
    alert('tidak ada aktivitas, status dikurangi');
    makan -= 5;
    tidur -= 5;
    main -= 5;
    belajar -= 5;
    
    update();
  }
}

// batas waktu menganggur
let waktuMenganggur = setInterval(menganggur, 20000);

const stopWaktuMenganggur = () => {
  clearInterval(waktuMenganggur);
}

const mulaiWaktuMenganggur = () => {
  waktuMenganggur = setInterval(menganggur, 20000);
}

const update = () => {
  if (makan <= 0 || tidur <= 0 || main <= 0 || belajar <= 0 || saldo <= 0) {
    $('#gameOver').removeClass('d-none');
    $('#permainan').addClass('d-none');
    
    setTimeout(() => {
      window.location.reload();
    }, 5000);
    
  } else {
    if (makan <= 20) alert('pemain kelaparan');
    if (tidur <= 20) alert('pemain mengantuk');
    if (main <= 20) alert('pemain mulai setres');
    if (belajar <= 20) alert('pemain perlu peningkatan dalam belajar');
    if (saldo <= 5000) alert('pemain perlu uang untuk makan');
    
    if (makan > 100) makan = 100;
    if (tidur > 100) tidur = 100;
    if (main > 100) main = 100;
    
    $('#barMakan').css('width', `${makan}%`);
    $('#barTidur').css('width', `${tidur}%`);
    $('#barMain').css('width', `${main}%`);
    $('#barBelajar').css('width', `${belajar}%`);
    
    $('#semester').html(semester);
    $('#saldo').html(saldo);
    
    $('#aktivitasAvatar').attr('src', `image/${avatar}/${aktivitas}`);
  }
}

const prosesAktivitas = (keterangan) => {
  $('#aktivitasAvatar').attr('src', `image/${avatar}/${aktivitas}`);
  $('#tombolAktivitas').addClass('d-none');
  $('#keteranganAktivitas').html(`tunggu beberapa saat karna ${nama} sedang ${keterangan}`);
  stopWaktuMenganggur();
  
  setTimeout(() => {
    $('#tombolAktivitas').removeClass('d-none');
    $('#keteranganAktivitas').html('');
    
    if (belajar >= 100) {
      semester++;
      belajar = 5;
    } else if (belajar <= 0) {
      semester--;
      belajar = 95;
    }
    
    aktivitas = 'avatar.png';
    
    update();
    
    mulaiWaktuMenganggur();
    
  }, 15000);
}

const aktivitasMakan = () => {
  aktivitas = 'eatAvatar.png';
  
  makan += 20;
  main -= 10;
  saldo -= 5000;
  
  prosesAktivitas('Makan');
}

aktivitasMakanButton.addEventListener('click', aktivitasMakan);

const aktivitasTidur = () => {
  aktivitas = 'sleepAvatar.png';
  
  tidur += 20;
  makan -= 10;
  
  prosesAktivitas('Tidur');
}

aktivitasTidurButton.addEventListener('click', aktivitasTidur);

const aktivitasMain = () => {
  aktivitas = 'gamesAvatar.png';
  
  main += 20;
  makan -= 10;
  belajar -= 10;
  
  prosesAktivitas('Main');
}

aktivitasBermainButton.addEventListener('click', aktivitasMain);

const aktivitasBelajar = () => {
  aktivitas = 'studyAvatar.png';
  
  belajar += 20;
  makan -= 10;
  
  prosesAktivitas('Belajar');
}

aktivitasBelajarButton.addEventListener('click', aktivitasBelajar);

const aktivitasBekerja = () => {
  aktivitas = 'workAvatar.png';
  
  saldo += 5000;
  makan -= 10;
  main -= 10;
  tidur -= 10;
  
  prosesAktivitas('Bekerja');
}

aktivitasbekerjaButton.addEventListener('click', aktivitasBekerja);

// waktu
const waktu = () => {
  let jam = new Date().getHours();
  let menit = new Date().getMinutes();
  setInterval(() => {
    // perubahan waktu
    menit += 1;
    if (menit % 60 == 0) {
      jam++;
      menit = 0;
      
      if (jam % 24 == 0) {
        jam = 0;
      }
    }
    
    // status waktu
    if (jam >= 0 && jam <= 12) {
      statusWaktu = 0;
    } else if (jam > 12 && jam <= 15) {
      statusWaktu = 1;
    } else if (jam > 15 && jam <= 19) {
      statusWaktu = 2;
    } else if (jam > 19 && jam <= 24) {
      statusWaktu = 3;
    }
    
    // proses status waktu
    switch (statusWaktu) {
      case 0:
        ucapan = 'Morning';
        document.body.style.backgroundImage = `url('image/background/pagi.jpg')`;
        break;
      case 1:
        ucapan = 'Afternoon';
        document.body.style.backgroundImage = `url('image/background/siang.jpg')`;
        break;
      case 2:
        ucapan = 'Evening';
        document.body.style.backgroundImage = `url('image/background/sore.jpg')`;
        break;
      case 3:
        ucapan = 'Night';
        document.body.style.backgroundImage = `url('image/background/malam.jpg')`;
        break;
    }
    
    document.getElementById('ucapan').innerHTML = `Good ${ucapan} ${nama}`;
    document.getElementById('waktu').innerHTML = `${String(jam).padStart(2, '0')}:${String(menit).padStart(2, '0')}`;
  }, 1000);
}
