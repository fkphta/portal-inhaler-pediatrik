export interface ChecklistStep {
  id: number;
  title: string;
  description: string;
  importance: string;
}

export const CHECKLIST_STEPS: ChecklistStep[] = [
  {
    id: 1,
    title: "1. Buka & Periksa",
    description: "Membuka penutup MDI dan spacer serta memeriksa tiada habuk, kelongsong atau objek bendasing di dalamnya.",
    importance: "Mengelakkan habuk atau objek berbahaya disedut ke dalam saluran pernafasan anak."
  },
  {
    id: 2,
    title: "2. Goncang 5 Saat",
    description: "Menggoncang kanister MDI dengan tegak sekurang-kurangnya 5 saat sebelum disambungkan.",
    importance: "Memastikan ubat dan gas propelan bercampur dengan sempurna untuk dos yang sekata."
  },
  {
    id: 3,
    title: "3. Sambungan Tegak",
    description: "Memasukkan corong inhaler ke bukaan getah spacer secara kemas dan menegak ke atas.",
    importance: "Memastikan aliran semburan aerosol masuk lurus terus ke dalam ruang spacer."
  },
  {
    id: 4,
    title: "4. Hembus Lembut",
    description: "Mengajak anak menghembus nafas keluar perlahan-lahan sebelum menekup corong muka.",
    importance: "Mengosongkan ruang udara paru-paru supaya anak bersedia menyedut ubat secara optimum."
  },
  {
    id: 5,
    title: "5. Tekup Rapat & Kedap",
    description: "Menekup face mask menutupi hidung & mulut secara rapat tanpa ada sebarang celah di pipi.",
    importance: "Mencegah kebocoran aerosol; jika ada celah, ubat akan terlepas ke udara sekeliling."
  },
  {
    id: 6,
    title: "6. Satu Pam Sahaja (Single Puff)",
    description: "Menekan kanister MDI hanya SATU KALI untuk melepaskan 1 semburan dos ke dalam spacer.",
    importance: "Menekan serentak 2-3 kali menyebabkan titisan ubat berlanggar dan melekat pada dinding plastik spacer."
  },
  {
    id: 7,
    title: "7. Bernafas 5-6 Kali Tenang",
    description: "Membiarkan anak bernafas santai 5 hingga 6 nafas perlahan (memerhatikan injap spacer bergerak).",
    importance: "Teknik pernafasan tidal memastikan ubat aerosol sampai ke saluran pernafasan bronkus bawah."
  },
  {
    id: 8,
    title: "8. Rehat 30-60 Saat",
    description: "Menunggu sekurang-kurangnya 30-60 saat sebelum memulakan pam kedua jika diarahkan doktor.",
    importance: "Memberi masa ubat pertama melegakan saluran dan memberi masa kanister inhaler memulihkan tekanan."
  }
];

export const FREQUENT_QUESTIONS = [
  {
    q: "Bolehkah kanak-kanak menggunakan inhaler tanpa spacer?",
    a: "Sangat TIDAK digalakkan untuk kanak-kanak di bawah umur 12 tahun. Tanpa spacer, lebih 80% ubat hanya akan melekat pada tekak dan lidah lalu tertelan ke dalam perut, bukannya sampai ke paru-paru."
  },
  {
    q: "Apa beza inhaler Biru (Salbutamol) dengan inhaler Coklat/Jingga (Kortikosteroid)?",
    a: "Inhaler Biru ialah ubat pelega (Reliever) yang membuka saluran pernafasan dengan cepat semasa sesak nafas. Inhaler Coklat/Jingga ialah ubat pencegah (Preventer) yang mengurangkan keradangan dan bengkak saluran pernafasan dan WAJIB diambil setiap hari mengikut jadual walaupun anak tidak ada simptom."
  },
  {
    q: "Mengapa tidak boleh lap bahagian dalam spacer dengan tuala atau tisu?",
    a: "Mengelap plastik spacer dengan kain, tuala atau tisu menghasilkan cas elektrik statik (electrostatic charge). Cas ini akan menarik zarah ubat dan menyebabkan ubat melekat pada dinding spacer dan bukannya masuk ke paru-paru anak."
  },
  {
    q: "Anak saya menangis semasa diberi inhaler. Adakah ubat masih berkesan?",
    a: "Tidak berkesan. Semasa menangis, anak menghembus nafas secara kuat dan hanya menarik nafas sangat cetek. Hampir tiada ubat sampai ke paru-paru. Tenangkan anak terlebih dahulu, peluk atau gunakan patung mainan sebelum memulakan sedutan."
  },
  {
    q: "Bila saya perlu menukar spacer kepada yang baharu?",
    a: "Spacer disyorkan diganti sekurang-kurangnya sekali setiap 12 bulan (1 tahun), atau lebih awal jika terdapat rekahan pada badan plastik, corong muka rosak, atau injap getah tidak lagi bergerak bebas."
  }
];
