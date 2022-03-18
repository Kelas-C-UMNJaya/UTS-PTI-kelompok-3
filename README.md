# UTS Pengantar Teknologi Internet (UMN)

Hallo perkenalkan kami merupakan kelompok yang memrancang game **UMN LIFE**,
sebelum masuk ke peraturannya izinkan kami untuk memperkenalkan diri. Kami yang beranggota 4 orang antara lain :

- Basilius Jethro Regar (00000057833)

- Celline Andrianti (00000057551)

- Mohammad Alfarizky Ramadhani Oscandar (00000058407)

- Muhammad Rajja Farabi (00000059864)

## Default Status Bar

Total aktivitas status bar yang bisa disimpan = 100

        - makan = 50
        - tidur = 50
        - main = 50
        - belajar = 50
        - semester = 1
        - saldo = 50000 (satuan rupiah)


## Penambahan Status Bar Ketika Aktivitas yang Dilakukan 
        - Makan = 20
        - Tidur = 20
        - Main = 20
        - Belajar = 20
        - Saldo = 50000 (satuan rupiah)

## Awal Permainan

UMNLife merupakan permainan simulasi kehidupan mahasiswa UMN, yang diawali dengan memilih avatar dan memasukkan nama pemain.

- Dimana pada awal permainan, akan disuguhkan untuk pemilihan avatar. Disini memiliki dua avatar yang bisa dipilih oleh pemain.

- Setelah itu pemain memberikan nama yang ingin diberikan kepada sang avatar disini dipersilahkan untuk menginput dengan minimal 3 karater untuk si avatar.

- Setelah menekan tombol play maka nanti akan di arahkan kedalam permainan dan bisa memulainya.

- Aktivitas yang dilakukan juga akan berubah dari avatar, misal ketika makan maka nantinya juga expressi avatar menunjukan bahwa untuk/akan/sedang makan. Dan ada rentang waktu yang ditentukan. 

- Waktu mengikuti dari jam saat waktu saat itu dengan rentang waktu yang dipercepat yakni **1 menit di dunia nyata menjadi 1 detik di dunia permainan**.

Mengenai waktu perlu adanya realitas yang nyata, yaitu background akan berubah dengan seiring realitas kehidupan layaknya seperti berikut :
- Pagi : 00:00 - 12:00
- Siang : > 12:00 - 15:00
- sore : > 15:00 - 19:00
- malam : > 19:00 - 23:59 (24:00)

## Peraturan Permainan
Ada beberapa peraturan yang bisa dilakukan ketika pemain memainkan permainan, diantaranya ketika melakukan sebuah aktivitas:

1. Makan = Maka **status bar makan** akan bertambah, sedangkan **status bar main dan saldo akan berkurang**. Saldo berkurang karena untuk makan harus membayar.

2. Tidur = Maka **status bar tidur** akan bertambah, sedangkan **status bar makan** akan berkurang. Karena tidur juga bisa membuat lapar.

3. Main = Maka **status bar main** akan bertambah ,sedangkan **status bar makan dan belajar akan berkurang**. Karena ketika main bisa membuat lapar jika lama dan juga bisa mengurangi kemampuan belajar

4. Belajar = Maka **status bar belajar** bertambah, sedangkan **status bar makan** akan berkurang. Karena ketika belajar bisa membuat lapar.

5. Bekerja = Maka **saldo** akan bertambah yaitu 5000 rupiah, sedangkan **status bar untuk makan, main, dan juga tidur** akan berkurang. Karena dengan bekerja tenaga, energi dan juga pikiran akan lelah sehingga berkurang.

Selain itu ada beberapa kondisi yang akan terjadi di dalam permainan :
1. Jika pemain berdiam diri tidak ada pergerakan selama 20 detik maka akan muncul alert sebagai peringatan dan otomatis status bar aktivitas berkurang.

2. Ketika salah satu bar memiliki **status bar < 20** maka akan muncul peringatan yang mengindikasikan harus adanya aktivitas dari pesan alert yang muncul.

3. Ketika salah satu aktivitas mengalami kegagalan sebagai contoh **status bar makan = 0** maka permainan akan selesai dan dianggap berkahir. Hal ini berlaku pada aktivitas lain dan saldo yang ada pada player.

4. Ketika pemain telah mengalami **Game Over** maka nanti akan muncul pesan bahwa pemain kalah dan akan kembali ke tampilan awal untuk memulai permainan kembali.

5. Ketika avatar pemain mencapai progress **status bar belajar** yaitu 100, maka nanti akan peningkatan semester sebagai contoh menjadi **semester 2**.
