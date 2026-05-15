// DATA PENGGUNA PER GRUP
const dataPengguna = {
  "syifa": { nama: "Syifa", grup: 1 },
  "amal": { nama: "Amal", grup: 1 },
  "farikh": { nama: "Farikh", grup: 1 },
  "pita": { nama: "Pita", grup: 2 },
  "maya": { nama: "Maya", grup: 2 },
  "naura": { nama: "Naura", grup: 2 },
  "puput": { nama: "Puput", grup: 2 },
  "halma": { nama: "Halma", grup: 3 }
};

// SURAT PERSONAL — paste isi aslimu di sini
const suratPersonal = {
"Syifa": "Pertama kali kenal kita canggung banget ya. Kayaknya aku orang terakhir yang kenalan sama kamu. Tapi ternyata kamu partner belajar terbaik, dan kamu juga k-popers yang cukup membekas—gebrakanmu lumayan bikin syok 😄 Aku juga banyak belajar dari kamu, bukan cuma soal pelajaran tapi juga hal-hal kecil yang kadang nggak kepikiran. Btw, kapan bang Yedam comeback bareng Treasure lagi? Sekarang kita udah sampai di titik ini, rasanya cepet banget. Semoga ke depannya kamu selalu nemuin hal-hal baik di perjalanan barumu.",
  "Amal": "Eh Army, lu tuh nyebelin banget tau nggak. Dari pertama ketemu di kelas 11, rusuh banget, ganggu ketentraman gue 😭 Tapi kalau dipikir-pikir lagi, justru dari situ semuanya mulai. Kalau lu nggak deketin gue waktu itu, mungkin sampai sekarang gue nggak punya temen yang seasik elu. Makasih ya udah sabar ngadepin ego gue yang kadang nggak jelas, dan tetap milih buat stay. Nggak semua orang bisa kayak gitu. Mungkin yang gue kasih ini nggak seberapa, tapi semuanya tulus dari hati gue. Maaf juga untuk semua hal yang pernah gue lakuin ke lu. Sekarang kita udah sampai sejauh ini, dan rasanya campur aduk. Tapi gue harap, ke mana pun kita jalan nanti, kita tetap inget kalau pernah ada di titik ini bareng-bareng. Dariku untuk ARMY favoritku.",
  "Farikh": "Makasih ya udah jadiin gue nyamuk selama 2 bulan TKA ini 😅 Awalnya gue cuma ngerasa enek, gedek, dan muak liat kelakuan lu yang… ya gitu deh 😭 tapi makin ke sini, malah jadi kebiasa, bahkan kadang kangen sama ribetnya. Lu juga jadi tempat gue luapin emosi, walaupun seringnya lu nggak paham—tapi anehnya, gue tetap cerita. Mungkin karena gue ngerasa cukup nyaman buat jadi diri sendiri di depan lu. Makasih udah jadi anomali di pertemanan ini. Nggak selalu masuk akal, tapi selalu ada. Sekarang kita udah di titik masing-masing. Gue cuma bisa berharap, semoga lu beneran bahagia sama pilihan lu, langgeng sama cowo lu, dan sukses jadi arsitek hebat yang dulu sering lu omongin itu. Dan kalau suatu saat nanti kita ingat masa ini, semoga yang keinget bukan kesel-keselnya, tapi semua hal kecil yang pernah kita lewatin bareng.",
  "Pita": "Kamu inget nggak pertama kali kita kenal di mana? Dulu kita sering pulang bareng, kadang kamu juga main sama aku sambil nunggu jemputan. Sekarang gimana kabarmu? Masih sama dia kan? Kalau masih, semoga langgeng terus ya. Nggak kerasa ya, waktu jalan terus sampai kita ada di titik sekarang. Semoga ke depannya kamu selalu bahagia dengan pilihanmu. Sampai sini aja pesanku. Sampai jumpa di lain waktu, Pita.",
  "Maya": "Halo Maya, gimana kabarmu? Ternyata kita udah temenan lama ya. Aku kira cuma beberapa minggu, ternyata dari MI—eh malah dari TK 😆 Sampai sekarang aku masih nggak tau cowo kamu siapa, tapi ya itu urusanmu sih. Waktu bener-bener jalan tanpa kerasa ya, tahu-tahu kita udah sampai sejauh ini. Semoga ke depannya kamu selalu baik-baik aja. Udah ya, cerocosanku yang nggak jelas ini. Jaga kesehatanmu, sampai jumpa di lain waktu.",
  "Naura": "Hey Naura, makasih ya udah mau aku repotin, padahal kamu juga punya banyak hal yang harus kamu urusin. Kadang aku mikir, nggak semua orang bakal sebaik itu mau direpotin tapi tetap jawab dengan sabar—dan kamu salah satunya. Btw, kamu masih sama adik kelas itu nggak? Aku masih kepo sih 😄 tapi lebih dari itu, aku cuma berharap kamu bener-bener bahagia sama pilihanmu. Nggak kerasa ya, kita udah sampai di titik ini. Rasanya baru kemarin ngobrol hal-hal kecil, sekarang pelan-pelan semuanya berubah. Semoga ke depan, apa pun yang kamu jalani, kamu tetap jadi Naura yang aku kenal—yang baik, sabar, dan tulus. Sampai jumpa di pertemuan berikutnya ya. Jaga diri baik-baik.",
  "Puput": "Hey, ceweknya Tegar 😆 Gimana, masih sama dia kan? Masih rese nggak? Terakhir kamu bilang dia suka ubah foto kamu jadi stiker ya. Tapi tau nggak, stiker yang kamu tunjukin ke aku waktu itu… kamu manis banget di situ. Kalau aku jadi semut, mungkin aku bakal minta tolong satu miliar saudara buat bawa kamu ke sarang 😄 Nggak kerasa ya semuanya berubah pelan-pelan sampai kita ada di titik sekarang. Semoga ke depan kamu tetap bahagia. Sampai jumpa di pertemuan berikutnya!",
  "Halma": "Nggak kerasa ya, sudah 5 tahun kita bersama. Kita udah kayak saudara tanpa ikatan darah. Kamu inget nggak awal kita kenal? Dulu aku terlalu ansos dan nggak mau bergaul sama anak-anak kelas. Tapi kamu datang dan tetap nemenin aku, walaupun aku acuh tak acuh waktu itu. Makasih ya. Kamu selalu jadi tempat terbaik buat aku pulang. Makasih juga udah nemenin kegilaan aku ngejar cowo—walaupun ujung-ujungnya gagal 😭 Kayaknya semua aib dan kisah percintaanku yang ampas itu kamu simpan ya. Aku tau kelulusan ini bukan akhir segalanya, tapi awal perjalanan baru ke dunia yang lebih besar. Aku harap, walaupun nanti kita terpisah jarak dan waktu, kita tetap bisa bersama dalam keadaan apa pun. Kalau kamu butuh tempat untuk bersandar, aku selalu ada di sini, di tempat yang sama."
};

// SPOTIFY PLAYLIST ID
const spotifyPlaylist = {
  1: "10DRdnufqDhjPUyWdK5SI1",
  2: "10DRdnufqDhjPUyWdK5SI1",
  3: "10DRdnufqDhjPUyWdK5SI1"
};

// 365 PESAN JAR — paste isi aslimu di sini
const daftarPesan365 = [
"Sahabat: WiFi jiwa selalu connect 📶",
  "Hari ini: plot twist terbaikmu 🌅",
  "Langkah 5k: badan fresh instan 🏃",
  "Kopi pagi: berkah tersembunyi ☕",
  "Takut? Countdown 5-4-3-2-GO! 🦁",
  "Weekend: dansa solo party 🎶",
  "Minggu ini: 3 win kamu apa? 🏆",
  "Teamwork: puzzle jadi masterpiece 🧩",
  "Ide gila: masa depan biasa 💥",
  "Badai 24 jam, pelangi selamanya 🌈",
  "Bangun pagi = +1000 point 🥇",
  "Sahabat: lagu hati lupa lirik 🎵",
  "Senin bukan musuh, sahabat 💪",
  "Sayur hari ini: superpower on 🥦",
  "Atap rumah: privilege rahasia 🏠",
  "Es krim: terapi 30 detik 🍦",
  "Besok versi 2.0 yuk 📈",
  "High-five virtual dulu ✋",
  "Ga perfect? Perfectly you 🌟",
  "Napas dalam: reset button 🔄",
  "Tanpamu cerita jadi garing 📖",
  "Siang slump? 10 lompat bintang ⭐",
  "Nap 20 menit: produktivitas x10 😴",
  "Wifi connect: hidup connect 🌐",
  "Bilang 'iya' ke tantangan 🚀",
  "Self-date: movie marathon 📺",
  "Jurnal 3 kalimat malam ini 📝",
  "Ide bareng: senjata pamungkas 💡",
  "Treat yourself kecil hari ini 🎁",
  "Luka = cerita paling kuat 🛡️",
  "Selesai 1 task: pesta mini 🎊",
  "Sahabat sejati: diam aja paham 🤫",
  "Bangun, rebut mimpi pagi ini ☕",
  "Stretch 5 menit: bahu ringan 🧘",
  "3 napas dalam: syukur mode on 🙏",
  "'Ga bisa' → 'belum bisa' 🔄",
  "Karaoke mandi: konser pribadi 🎤",
  "Thank you, self minggu ini 🙌",
  "Share win: multiply joy 🎉",
  "Boundary on: energi aman 🛡️",
  "Bounce back level: expert 🏋️",
  "Sahabat: cermin terbaikku 🪞",
  "Hari ini: kamu bisa double 💪",
  "Air 2L: energi full tank 💧",
  "Hidup udah cukup, nikmati ✨",
  "Coba aja dulu, ga usah mikir 🦁",
  "Tertawa: obat gratis terbaik 😂",
  "Minggu ini: kamu hebat banget 🏆",
  "Bersama temen: tak terkalahkan 🤝",
  "Cinta diri dulu deh ❤️🩹",
  "Ide gila sering menang besar 💥",
  "Kuatin hati, lanjut jalan 🛡️",
  "Pat yourself on the back 👏",
  "Pagi cerah: peluang emas 🌞",
  "Protein breakfast: mesin on 🥚",
  "Napas bersyukur: baterai full 🔋",
  "Rejection = redirect ke yang lebih baik ➡️",
  "Playlist + jendela: terapi instan 🎧",
  "Review minggu: level up 📊",
  "Collab = 1+1=11 💯",
  "Kamu cukup apa adanya 🌈",
  "Upgrade skill: masa depan aman 🆙",
  "Patah hati? Bikin lagu 🔥",
  "Task selesai: dance break 💃",
  "Sahabat: charger sosialku 🔌",
  "Meeting pagi: conquer mode ⚔️",
  "Vitamin D: sinar matahari gratis ☀️",
  "List 3: syukur spesifik 📝",
  "Pitch ide gila: why not? 🤷",
  "Goride karaoke: nyanyi sepanjang jalan 🚗",
  "Weekend win: recharge total ⚡",
  "Brain dump malam: otak clear 🧹",
  "Meeting bareng: ide jackpot 💰",
  "Self-hug: kamu deserve it 🤗",
  "Wrong way? Pivot cepet 🔄",
  "Tears = fertilizer tanaman kuat 🌱",
  "1% better every day 📈",
  "Sahabat: tombol SOS rahasia 🚨",
  "Cold shower: mental steel 🥶",
  "Dark chocolate: legal high 🍫",
  "Playlist syukur: lagu spesial 🎵",
  "Picnic rooftop: view + vibes 🏙️",
  "Sunday reset: clean slate 🧼",
  "Share lunch: bonding time 🍱",
  "No makeup: confidence raw 💁",
  "Moonlight walk: pikiran clear 🌙",
  "Scar = medal of honor 🥉",
  "Daily streak: habit champion 🏅",
  "Sahabat: group chat therapy 💬",
  "Morning pages: otak dump 📄",
  "Greens first: fuel premium 🥗",
  "Gratitude jar: bukti berkah 🫙",
  "Say no: energi protected 🚫",
  "Power nap: cheat code hidup 😴",
  "Handwritten note: old school magic ✍️",
  "Eye contact: connection real 👀",
  "Sahabat: partner in crime terbaik 🕵️",
  "Sunrise alarm: alam panggil 🌅",
  "Deep stretch: badan bicara 🧘",
  "Memory lane: syukur flashback 📸",
  "Doubt? Do it anyway 💪",
  "Balcony coffee: pagi ritual ☕",
  "Weekly review: course correct 🎯",
  "Potluck dinner: love in food 🍲",
  "Mirror pep talk: hype yourself 🗣️",
  "Random act kindness: boomerang baik ➰",
  "Rainy day: cozy productivity ☔",
  "Small win journal: bukti kemajuan 📓",
  "Sahabat: human sunshine 🌞",
  "Nature break: reset pabrik 🌳",
  "Pet therapy: unconditional love 🐾",
  "Sahabat: safe space berbagi 🤗",
  "Power hour pagi: conquer day ⚡",
  "Desk plant: oksigen + vibes 🌿",
  "5 menit meditasi: mental gym 🧠",
  "Board game night: laugh therapy 🎲",
  "Habit tracker: progress visible 📊",
  "Solo date: kenal diri lagi ☕",
  "Life hack: cari cara lebih cepat 🔧",
  "Friday finish strong: weekend earned 🏁",
  "Sahabat: vocabulary hatiku ❤️",
  "Morning run: pikiran clear 🏃",
  "Bone broth: ancient superfood 🥣",
  "Digital sunset: mata istirahat 🌅",
  "Cold email: peluang ketuk pintu 📧",
  "Stargazing: perspektif luas ⭐",
  "Month-end review: celebrate growth 📈",
  "Accountability buddy: janji ditepati 🤝",
  "Power pose 2 menit: confidence boost 💪",
  "Walk & talk: mobile therapy 🚶",
  "Forgive yourself: fresh start 🕊️",
  "Early bedtime: besok legend 😴",
  "Sahabat: bookmark cerita hidup 📚",
  "5AM club: elite productivity 🌅",
  "Laughter yoga: obat stres 😂",
  "Gratitude walk: syukur bergerak 🚶",
  "Say yes: peluang mengetuk 🚪",
  "Mastermind group: collective genius 👥",
  "Morning ritual: set the tone 🌄",
  "Wind down routine: malam sakral 🌙",
  "Sun salutation: sambut pagi 🙏",
  "Vision board: tarik mimpi 🖼️",
  "No zero days: minimal action ✅",
  "Book club: wisdom bareng 📖",
  "Voice note rant: emosi keluar 🎤",
  "Sahabat: co-pilot perjalanan 🚀",
  "Cold brew: energi bersih ☕",
  "Gratitude letter: ungkap hati ✉️",
  "Deload week: recovery mode 🏥",
  "Sunset watch: hari ditutup indah 🌇",
  "Weekly planning: GPS hidup 🗺️",
  "Potluck wisdom: share ilmu 🍲",
  "Self-compassion break: peluk diri 🤗",
  "Nature immersion: reset pabrik 🌲",
  "Morning momentum: chain ga putus ⛓️",
  "Sahabat: hype squad pribadi 📣",
  "Journal prompt: gali dalam 🖋",
  "Sahabat: akar pohon kekuatan 🌳",
  "Power nap: sistem reboot otak 🔄",
  "Walking meeting: gerak + ide 🚶",
  "Game night: competitive healing 🎮",
  "Mutual growth: saling level up 📈",
  "Friday reflection: minggu dimenangkan 🏆",
  "Morning mobility: badan siap tempur 🥊",
  "Blue light block: tidur upgrade 🔵",
  "Syukur spesifik: 3 detail unik 🙏",
  "Starry advice: alam jawab semua 🌌",
  "Quarter review: pivot or persist 🎯",
  "Rhetorical accountability: janji publik 🎤",
  "Body double: temen fokus bareng 👥",
  "Kamu = enough + growing 🌱",
  "Emotional baggage check: ringan jalan 💼",
  "Sahabat: walking playlist hidup 🎧",
  "Semua bareng: getaran jiwa sinkron 🎸",
  "Bebaskan otot: gerak jadi seneng 🧘",
  "Voice journaling: bicara sembuh 🎙",
  "Micro gratitude: 30 detik syukur ⚡",
  "Rooftop reset: perspektif luas 🏢",
  "Sunday prime: minggu terbaik 🆙",
  "Wisdom circle: share pelajaran 👥",
  "Permission slip: boleh istirahat 📜",
  "Sahabat: secret weapon sukses 🎯",
  "Sunrise ritual: hari di-claim 🌅",
  "Lymphatic drainage: badan bersih 🧼",
  "Contemplative prayer: diam bicara 🙏",
  "No-plan day: spontanitas hidup 🎲",
  "Accountability mirror: janji diri 🪞",
  "Handshake deal: trust currency 🤝",
  "Somatic check-in: badan ngomong 🧘",
  "Gratitude multiplier: bagikan syukur ➡️",
  "Balcony moment: jeda & lihat 🧗",
  "Deep play: fun yang produktif 🎨",
  "Morning sovereignty: milikmu dulu 👑",
  "Cognitive offload: otak bebas cloud ☁️",
  "Small ask: momentum starter 🚀",
  "Hydration first: dasar segalanya 💧",
  "Delight audit: apa bikin senyum? 😊",
  "Sahabat: soul WiFi selalu signal 📡",
  "Posture power: badan influence pikiran 🧍",
  "Specific gratitude: detail bikin nyata 🎯",
  "Cozy gaming: recharge dengan fun 🎮",
  "Environment = cue library 📚",
  "Synergy squad: 1+1=11 tim 💯",
  "Permission to be human: error OK 🤖",
  "Biophilia hack: alam dalam ruang 🌿",
  "Done is better than perfect 🏁",
  "Morning light: circadian rhythm hack 🌞",
  "Nasal breathing: oksigen efisien 👃",
  "Ask better questions: jawaban level up ❓",
  "Twilight zone: magic hour kreatif 🌆",
  "Lagging indicator: effort > result 📈",
  "Social proof: temen bukti bisa 👥",
  "Embodied cognition: gerak ubah pikir 🕺",
  "You're not broken, you're growing 🛠️",
  "Grieve well: process = progress 😢",
  "Sleep debt payoff: weekend catchup 💤",
  "Micro-commitment: janji 2 menit ✅",
  "Hammock time: ide terbaik lahir 🪢",
  "Collective effervescence: grup energi 👥",
  "Neural plasticity: otak bisa belajar 🧠",
  "Signal vs noise: fokus yang penting 📡",
  "Minimum viable action: mulai kecil 🚀",
  "Orthostatic reset: berdiri 30 detik 🧍",
  "Deep listening: koneksi level soul 👂",
  "Differentiation: punya opini sendiri 🎭",
  "Atomic habit: ubah 1% per hari ⚛️",
  "Savoring practice: nikmati slow motion 😋",
  "Sahabat: akar yang ga keliatan 🌱",
  "Morning specificity: 3 prioritas aja 🎯",
  "Micro-ritual: syukur jadi habit 🔄",
  "Scenario planning: siap segala kemungkinan 🗺️",
  "Victory lap kecil: setiap task selesai 🏁",
  "Cue-routine-reward: habit loop hack 🔄",
  "Co-regulation: tenang bareng temen 🤝",
  "Self-accepted imperfection: bebas tumbuh 🌿",
  "Cognitive horizon: pikir lebih jauh 👁️",
  "Integration crisis: transformasi sakral 🦋",
  "Micro-celebration: dopamine dosed right 🎉",
  "Sahabat: decoder bahasa bintangmu ⭐",
  "Temporal discounting: sekarang lebih berharga ⏳",
  "Long-term game: main marathon, bukan sprint 🏃",
  "Meta-cognition: pikir cara berpikir 🤔",
  "Twilight productivity: magic hour kedua 🌆",
  "Retrospective: apa yang work ga work? 🔍",
  "Social homeostasis: keseimbangan hubungan ⚖️",
  "Somatic wisdom: badan lebih pintar dari pikiran 🧠",
  "You're the main character arc 📖",
  "Mechanism design: sistem dukung goal 🏗️",
  "Emotional alchemy: ubah emosi jadi bahan bakar 🔥",
  "Sleep consolidation: tidur jadi padat 💎",
  "Sahabat: soul recognition instan ✨",
  "Circadian alignment: hidup sinkron matahari 🌞",
  "Extero-intero balance: luar-dalam harmony ⚖️",
  "Specific future visualization: tarik konkret 🖼️",
  "Compound friendship: sahabat makin kaya 📈",
  "Specific manifestation: niat + action 🚀",
  "Sahabat: mirror universe dirimu 🪞",
  "Specific gratitude: nama + momen spesifik 🙏",
  "Takut besar? Bayangin suksesnya dulu 😎",
  "Beban berat? Jadi bahan bakar api 🔥",
  "Tanya bodoh? Mulai dari situ aja yuk 🤔",
  "Api unggun: cerita jadi kenangan abadi 🏕️",
  "Fokus dalam: ide liar lahir disini 🧘",
  "Tumpuk skill: efek bola salju hebat ❄️",
  "Latih keras: hasilnya nanti keliatan 💯",
  "Puasa ringan: badan auto bersih 🚿",
  "Foto kemajuan: lihat bedanya nanti 📷",
  "Minta tolong: langkah pintar maju 🙋",
  "Atur napas: badan langsung rileks 🌬️",
  "Rayain usaha: kemenangan pertama yuk 🎈",
  "Tanya 5x: nemu akar masalahnya 🔎",
  "Rasa kecil? Semua orang ngalamin 💁",
  "Atur ruang: sukses jadi gampang 🏠",
  "Kurangin gadget: pikiran tajam laser 📵",
  "Catet ide: ingatan ga hilang lagi 🗂️",
  "Luka lama? Jadikan kekuatan baru 🦾",
  "Bayang gagal: siap hadapi duluan 🛡️",
  "Pikir mundur: hindari jebakan jelek ⏪",
  "Tidur nyenyak: besok fresh maksimal 🌙",
  "Mandi air dingin: semangat naik level 🥶",
  "Istirahat total: seneng alami pulih 🧠",
  "Jelasin simpel: paham banget deh 📖",
  "Ujian hidup: bikin level up cepet 📈",
  "Cek energi: alokasikan bijak hari ini ⚡",
  "Diam renung: jawaban dateng sendiri 🙏",
  "Rencana kalau: siap segala situasi 🧠",
  "Jalan kaki tanah: energi alam masuk ⚡",
  "Hadapi pelan: biasa jadi temen 😌",
  "Campur ide: hasilnya bikin kaget 🌟",
  "Latih tangguh: tiap hari tambah kuat 🏋️",
  "Pagi pilih: urusan penting duluan ☀️",
  "Bayang buruk: jarang kejadian kok 😅",
  "Kacau dateng: malah bikin tambah solid 🛠️",
  "Tulis pelajaran: besok lebih pinter 📓",
  "Pecah dasar: bangun ulang lebih mantap 🧱",
  "Tenangin saraf: badan auto damai 🕊️",
  "Perintah diri: ubah jadi lebih baik 🤖",
  "Naik-turun: celah emas nunggu kamu 💰",
  "Minggu nyatu: energi full charge 🔋",
  "Ganggu biasa: tumbuh dimulai disini 🌱",
  "Rasa aman: naik pelan badan ikut 🧗",
  "Puji spesial: sebut nama + cerita bagus 🎉",
  "Cemas duluan: siapin mental matang 🧠",
  "Sisi gelap: peluk biar jadi temen 🖤",
  "Pisah pikiran: fakta beda sama rasa 😌",
  "Sadar musim: cahaya ubah mood harian 🌤️",
  "Dengar badan: sinyalnya ga bohong 👂",
  "Surat masa depan: tarik sekarang yuk 📨",
  "Hitung peluang: siap twist apa aja 🎲",
  "Lompat ambang: dorongan gede nunggu 🚀",
  "Kelompok pintar: bareng hasil gila 👥",
  "Kuasai belajar: cara paling joss 🧠",
  "Saring penting: buang yang ga perlu 📡",
  "Puncak ubah: ledakan nunggu disini 🌋",
  "Ikut jam badan: ritme alami enak 🕐",
  "Rasa pelan: detik jadi emas 😌",
  "Rasain tempat: balance dateng otomatis ⚖️",
  "Siap skenario: hidup ga kaget lagi 🗺️",
  "Jejak harian: kebiasaan kuat lahir 🔄",
  "Damai bareng: efeknya luar biasa 🤝",
  "Badai bagus: lahir versi mantap 🦋",
  "Sekarang utama: besok ikut alur ⏳",
  "Lari jauh: akhirnya juara pasti 🏃",
  "Awasi pikir: kendali total milikmu 🤔",
  "Senja fokus: produktif rahasia 🌅",
  "Ikatan pas: hubungan ngalir mulus ⚖️",
  "Percaya badan: insting paling akurat 🧠",
  "Rancang lingkung: mimpi auto tercapai 🏗️",
  "Ubah rasa: emosi jadi roket 🚀",
  "Tidur pekat: energi besok maksimal 💎",
  "Alur matahari: hari sinkron nikmat 🌞",
  "Dalam luar: harmoni total tercipta ⚖️",
  "Sesuain fakta: yakin ikut alur 📊",
  "Lawan pintu: level up dimulai 🚪",
  "Bareng hebat: individu kalah jauh 👥",
  "Jadi asli: perjalanan paling keren 🌟",
  "Suara kenceng: kecil jadi terdengar 📢",
  "Irama bareng: getaran pas semua 🎵",
  "Satu pola: efek domino hidup ⚛️",
  "Jam biologis: badan tau caranya 🕐",
  "Piring warni: kesehatan dari pelangi 🌈",
  "Menang semua: permainan cerdas 🏆",
  "Kesadaran puncak: level dewa deh 😌",
  "Bangun dunia: bareng ciptain realitas 🌍",
  "Suara sendiri: beda jadi kekuatan 🎤",
  "Pikiran lepas: eksplor tanpa batas 🧠",
  "Sambung waktu: masa lalu jadi sahabat 🔗",
  "Motif mini: pantul hidup besar 🔍",
  "Sederhana ajaib: biasa jadi luar biasa ✨",
  "Sahabat erat: tarik jiwa ga putus ⚛️",
  "Ritme cahaya: hidup nyala alami 🌞",
  "Auto jaga: sistem diri bertahan 🔄",
  "Niat gerak: mimpi langsung nyata 🚀",
  "Sambut mungkin: fleksibel selalu menang 🎲",
  "Petualang utama: arc hidup epik 🦸",
  "Tim berbunga: energi mekar bareng 🌸",
  "Cahaya sendiri: unik ga ada tanding 🌟",
  "Konvergen irama: semua nyanyi satu 🎶",
  "Benang tak kasat: ikatan paling kuat 🤝",
  "Cermin sejati: sahabat paling honest 🪞",
  "Hidup terang: alur matahari enak ☀️",
  "Aman total: saraf damai bebas 🛡️",
  "Terobosan lompat: batas hilang 🚀",
  "Minggu utuh: energi menyatu penuh 🙌",
  "Belajar bijak: upgrade ga pernah stop 📚"
];

// VARIABEL GLOBAL
let penggunaAktif = null;
let grupAktif = null;

// HALAMAN PERTAMA
function masuk() {
  setTimeout(() => {
    document.body.innerHTML = `
      <div class="container">
        <h2 class="judul">Siapa kamu? 🌸</h2>
        <p class="subjudul">Masukkan namamu untuk membuka kenangan</p>
        <input type="text" id="inputNama" placeholder="Nama kamu..." class="input-nama">
        <button class="tombol-masuk" onclick="cekNama()">Masuk ✨</button>
        <p id="pesanError" class="pesan-error"></p>
      </div>
    `;
  }, 800);
}

// CEK NAMA
function cekNama() {
  const input = document.getElementById('inputNama').value.trim().toLowerCase();
  const pengguna = dataPengguna[input];

  if (pengguna) {
    penggunaAktif = pengguna.nama;
    grupAktif = pengguna.grup;
    document.body.innerHTML = `
      <div class="container">
        <h2 class="judul">Halo, ${penggunaAktif} 🌸</h2>
        <p class="subjudul">Senang kamu mau membuka kenangan ini.</p>
        <p class="dari">Ada beberapa hal yang ingin aku simpan bersamamu...</p>
        <button class="tombol-masuk" onclick="keHalamanUtama()">Lihat ✨</button>
      </div>
    `;
  } else {
    document.getElementById('pesanError').textContent = 'Nama tidak ditemukan. Coba lagi ya 💙';
  }
}

// HALAMAN UTAMA — 3 tombol untuk semua grup
function keHalamanUtama() {
  // Grup 2 pakai 1461 pesan, grup lain 365
  const labelJar = grupAktif === 2 ? '🫙 Jar Memory' : '🫙 Jar Memory';

  document.body.innerHTML = `
    <div class="container">
      <h2 class="judul">Apa yang ingin kamu buka? 🌸</h2>
      <p class="subjudul">Pilih salah satu untukmu, ${penggunaAktif}</p>
      <div class="tombol-grup">
        <button class="tombol-pilihan" onclick="keJar()">🫙 Jar Memory</button>
        <button class="tombol-pilihan" onclick="keMusik()">🎵 Playlist Kita</button>
        <button class="tombol-pilihan" onclick="keSurat()">💌 Surat Personal</button>
      </div>
    </div>
  `;
}

// JAR MEMORY — fix emoji jar agar selalu tampil
function keJar() {
  document.body.innerHTML = `
    <div class="container">
      <h2 class="judul">Jar Memory 🌸</h2>
      <p class="subjudul">Klik jar untuk mengambil pesan untukmu</p>
      <div
        onclick="ambilPesan()"
        onmouseover="this.style.transform='scale(1.1) rotate(-5deg)'"
        onmouseout="this.style.transform='scale(1) rotate(0deg)'"
        style="
          cursor: pointer;
          margin: 20px auto;
          display: block;
          text-align: center;
          transition: transform 0.3s;
          user-select: none;
          width: 120px;
        "
      >
        <svg width="120" height="150" viewBox="0 0 120 150" xmlns="http://www.w3.org/2000/svg">
          <!-- Tutup jar -->
          <rect x="30" y="10" width="60" height="18" rx="5" fill="#8DC8E8" opacity="0.9"/>
          <!-- Badan jar -->
          <path d="M20 35 Q15 60 18 100 Q20 130 60 132 Q100 130 102 100 Q105 60 100 35 Z"
            fill="rgba(255,255,255,0.75)" stroke="#8DC8E8" stroke-width="2.5"/>
          <!-- Kilap jar -->
          <ellipse cx="38" cy="60" rx="6" ry="18" fill="white" opacity="0.4" transform="rotate(-15 38 60)"/>
          <!-- Tulisan -->
          <text x="60" y="90" text-anchor="middle" font-size="13"
            font-family="Playfair Display, serif" fill="#4a8fb5">memory</text>
          <!-- Hati kecil -->
          <text x="60" y="112" text-anchor="middle" font-size="16" fill="#c899b0">♡</text>
        </svg>
      </div>
      <div id="kotakPesan" class="kotak-pesan"></div>
      <button class="tombol-masuk" style="margin-top:30px" onclick="keHalamanUtama()">← Kembali</button>
    </div>
  `;
  window.daftarPesan = [...daftarPesan365];
  window.pesanTerpakai = [];
}

function ambilPesan() {
  if (window.daftarPesan.length === 0) {
    document.getElementById('kotakPesan').innerHTML = '<p>Semua pesan sudah dibuka! 🌸</p>';
    return;
  }
  const index = Math.floor(Math.random() * window.daftarPesan.length);
  const pesan = window.daftarPesan.splice(index, 1)[0];
  window.pesanTerpakai.push(pesan);
  const sudahBaca = window.pesanTerpakai.length;
  const total = sudahBaca + window.daftarPesan.length;

  document.getElementById('kotakPesan').innerHTML = `
    <p style="font-size:0.8em; color:#aaaacc; margin-bottom:8px">Pesan ${sudahBaca} dari ${total} 🌸</p>
    <p class="pesan-keluar">✉️ ${pesan}</p>
  `;
}

// MUSIK — Spotify Player
function keMusik() {
  const playlistId = spotifyPlaylist[grupAktif] || spotifyPlaylist[1];

  document.body.innerHTML = `
    <div class="container">
      <h2 class="judul">Playlist Kita 🎵</h2>
      <p class="subjudul">Soundtrack of Us — lagu-lagu untuk menemanimu</p>
      <div style="margin: 25px auto; max-width: 500px;">
        <iframe
          src="https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=0"
          width="100%"
          height="380"
          frameborder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style="border-radius: 16px; box-shadow: 0 4px 20px rgba(141,200,232,0.3);">
        </iframe>
      </div>
      <p style="font-size:0.82em; color:#aaaacc; margin-top:10px; font-style:italic;">
        💡 Login Spotify untuk putar lagu penuh
      </p>
      <button class="tombol-masuk" style="margin-top:25px" onclick="keHalamanUtama()">← Kembali</button>
    </div>
  `;
}

// SURAT PERSONAL
function keSurat() {
  const isi = suratPersonal[penggunaAktif] || "Pesan untukmu sedang disiapkan... 🌸";
  document.body.innerHTML = `
    <div class="container">
      <h2 class="judul">Surat Untukmu 💌</h2>
      <p class="subjudul">Khusus untuk ${penggunaAktif}</p>
      <div class="kotak-pesan" style="margin-top:30px; text-align:left; line-height:1.8">
        <p>${isi}</p>
      </div>
      <button class="tombol-masuk" style="margin-top:30px" onclick="keHalamanUtama()">← Kembali</button>
    </div>
  `;
}