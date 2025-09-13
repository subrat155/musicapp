   // Sample music data (in a real app, this would come from an API)
        const musicData = {
          odia: [
                { id: 1, title: "Jogadi Rakhitha Babu", artist: "Odia Artist 1", image: "https://picsum.photos/200/200?random=1", audio: "song/oo.mp3" },
                { id: 2, title: "Are Body ku Body.mp3", artist: "Body ku body", image: "https://picsum.photos/200/200?random=2", audio: "song/Are Body ku Body.mp3" },
                { id: 3, title: "Nadia Tela", artist: "Papu pom pom", image: "https://picsum.photos/200/200?random=3", audio: "song/NADIA TELA.mp3" },
                { id: 4, title: "Lekhichi Na Tora", artist: "Odia Artist 4", image: "https://picsum.photos/200/200?random=4", audio: "song/Lekhichi Naa Taro-OdiaSongs.In.mp3" },
                { id: 5, title: "Mu Eka Tumara", artist: "Mu Eka Tumara", image: "https://picsum.photos/200/200?random=5", audio: "song/Mu+Eka+Tumara+[www.OdiaDhoom.Mobi].mp3" },
                { id: 6, title: "Super Michhua", artist: "Super Michhua", image: "https://picsum.photos/200/200?random=6", audio: "song/Super Micchua (Title)  OdiaSongs.IN.mp3" },
                { id: 7, title: "Janha Lo", artist: "Janha Lo", image: "https://picsum.photos/200/200?random=7", audio: "song/JANHA LO TO BOU TANICHI CHALK KHADI CHINHA LO DJ R(M4A_128K).m4a" },
                { id: 8, title: "Kahideli", artist: "Kahideli", image: "https://picsum.photos/200/200?random=8", audio: "song/KAHI DELI.mp3" },
                { id: 9, title: "Kut kut Dhana", artist: "Kut kut Dhana", image: "https://picsum.photos/200/200?random=9", audio:   "song/Kut Kut Dhana Lo OdiaSongs.IN.mp3" },
            { id: 10, title: "Prema Ani Chhadidela", artist: "Prema Ani Chadidela", image: "https://picsum.photos/200/200?random=11", audio: "song/Prema_Aani_Chhadidela_Adha_Batare_-_Sad_Film_Song___Babushan___ପ୍ରେମ_ଆଣି_ଛାଡିଦେଲା_ଅଧାବାଟରେ__Sidharth(256k).mp3" }],
            couple: [
                { id: 11, title: "Chahun mai Ya Na", artist: "Romantic Artist 1", image: "https://picsum.photos/200/200?random=11", audio: "song/Chahun_Main_Ya_Naa_-___Slowed___Reverb___Lyrics___Aashiqui_2___Use_Headphones🎧🎧(256k).mp3" },
                { id: 12, title: "Coca cola Tu", artist: "Romantic Artist 2", image: "https://picsum.photos/200/200?random=12", audio: "song/Coca_Cola_Tu_Tony_Kakkar_-_Cg_Tapori_Remix_Dj_Chotu_Latuwa___Dj_Aman____DJs_Of_C.mp3" },
                { id: 13, title: "Dil Ibadat", artist: "Romantic Artist 3", image: "https://picsum.photos/200/200?random=13", audio: "song/Dil_Ibaadat_Full_Video_-_Tum_Mile_Emraan_Hashmi,Soha_Ali_Khan_Pritam_KK_Sayeed_Quadri(256k).mp3" },
                { id: 14, title: "Ho Gaya Hai Tujhko", artist: "Romantic Artist 4", image: "https://picsum.photos/200/200?random=14", audio: "song/Ho_Gaya_Hai_Tujhko___Full_Song___Dilwale_Dulhania_Le_Jayenge,_Shah_Rukh_Khan,_Kajol,_Lata_Mangeshkar(256k).mp3" },
                { id: 15, title: "Dhagla Lagali", artist: "Romantic Artist 5", image: "https://picsum.photos/200/200?random=15", audio: "song/Dhagala_Lagali_-_Dream_Girl___Riteish_D,_Ayushmann_Khurrana___Nushrat___Jyotica,.mp3" },
                { id: 16, title: "Pal Pal Dil ke Paas", artist: "Romantic Artist 6", image: "https://picsum.photos/200/200?random=16", audio: "song/Pal_Pal_Dil_Ke_Paas_–_Title_Song___Lyrical___Karan_Deol,_Sahher_Bambba___Arijit_.mp3" },
                { id: 17, title: "Terimeri Kahani", artist: "Romantic Artist 7", image: "https://picsum.photos/200/200?random=17", audio: "song/Teri_Meri_Kahani___Full_Song___Himesh_Reshammiya___Ranu_Mondal____Teri_Meri_Kaha.mp3" },
                { id: 18, title: "Dard Diloke", artist: "Romantic Artist 8", image: "https://picsum.photos/200/200?random=18", audio: "song/The_Xpose__Dard_Dilo_Ke_Full_Song__Audio____Himesh_Reshammiya,_Yo_Yo_Honey_Singh(256k).mp3" },
                { id: 19, title: "Soniye Dil", artist: "Romantic Artist 9", image: "https://picsum.photos/200/200?random=19", audio: "song/Soniye_Dil_Nayi_Lyrical_Video___Baaghi_2___Tiger_Shroff___Disha_Patani___Ankit_T.mp3" },
                { id: 20, title: "Hum Marjayenge", artist: "Romantic Artist 10", image: "https://picsum.photos/200/200?random=20", audio: "song/hum-mar-jayenge-female-1241.mp3" }
            ],
            hindi: [
                { id: 21, title: "Sare Jahan Se", artist: "Hindi Artist 1", image: "https://picsum.photos/200/200?random=21", audio: "song/Sare_Jahan_Se_Achha_Hindustan_Hamara.mp3" },
                { id: 22, title: "Lungi Dance", artist: "Hindi Artist 2", image: "https://picsum.photos/200/200?random=22", audio: "song/Lungi-Dance_(webmusic.in).mp3" },
                { id: 23, title: "Tujhe Dekhe Bina", artist: "Hindi Artist 3", image: "https://picsum.photos/200/200?random=23", audio: "song/Tujhe dekhe bina chain kabhi nahi ataa dj Shankar(M4A_128K).m4a" },
                { id: 24, title: "Banjaara", artist: "Hindi Artist 4", image: "https://picsum.photos/200/200?random=24", audio: "song/Banjaara_Full_Video_Song___Ek_Villain___Shraddha_Kapoor,_Siddharth_Malhotra(256k).mp3" },
                { id: 25, title: "Mareez E ishq", artist: "Hindi Artist 5", image: "https://picsum.photos/200/200?random=25", audio: "song/03 - Mareez-E-Ishq - DownloadMing.SE.mp3" },
                { id: 26, title: "Bom Diggy Diggy", artist: "Hindi Artist 6", image: "https://picsum.photos/200/200?random=26", audio: "song/Bom_Diggy_Diggy__(VIDEO)___Zack_Knight___Jasmin_Walia___Sonu_Ke_Titu_Ki_Sweety.mp3" },
                { id: 27, title: "Dil Mein Mars", artist: "Hindi Artist 7", image: "https://picsum.photos/200/200?random=27", audio: "song/Dil_Mein_Mars_Hai.mp3" },
                { id: 28, title: "Prem Ratan", artist: "Hindi Artist 8", image: "https://picsum.photos/200/200?random=28", audio: "song/02 Prem Ratan Dhan Payo.mp3" },
                { id: 29, title: "Chahun Mein", artist: "Hindi Artist 9", image: "https://picsum.photos/200/200?random=29", audio: "song/Chahun_Main_Ya_Naa_-___Slowed___Reverb___Lyrics___Aashiqui_2___Use_Headphones🎧🎧(256k).mp3" },
                { id: 30, title: "Zara Zara Behekta Hai", artist: "Hindi Artist 10", image: "https://picsum.photos/200/200?random=30", audio: "song/Zara_Zara_Bahekta_Hai___JalRaj___RHTDM___Male_Version___Latest_Hindi_Cover_2020(256k).mp3" }
            ],

            english: [
                { id: 1, title: "Jogadi Rakhitha Babu", artist: "Odia Artist 1", image: "https://picsum.photos/200/200?random=1", audio: "song/oo.mp3" },
                { id: 2, title: "Are Body ku Body.mp3", artist: "Body ku body", image: "https://picsum.photos/200/200?random=2", audio: "song/Are Body ku Body.mp3" },
                { id: 3, title: "Nadia Tela", artist: "Papu pom pom", image: "https://picsum.photos/200/200?random=3", audio: "song/NADIA TELA.mp3" },
                { id: 4, title: "Lekhichi Na Tora", artist: "Odia Artist 4", image: "https://picsum.photos/200/200?random=4", audio: "song/Lekhichi Naa Taro-OdiaSongs.In.mp3" },
                { id: 5, title: "Mu Eka Tumara", artist: "Mu Eka Tumara", image: "https://picsum.photos/200/200?random=5", audio: "song/Mu+Eka+Tumara+[www.OdiaDhoom.Mobi].mp3" },
                { id: 6, title: "Super Michhua", artist: "Super Michhua", image: "https://picsum.photos/200/200?random=6", audio: "song/Super Micchua (Title)  OdiaSongs.IN.mp3" },
                { id: 7, title: "Janha Lo", artist: "Janha Lo", image: "https://picsum.photos/200/200?random=7", audio: "song/JANHA LO TO BOU TANICHI CHALK KHADI CHINHA LO DJ R(M4A_128K).m4a" },
                { id: 8, title: "Kahideli", artist: "Kahideli", image: "https://picsum.photos/200/200?random=8", audio: "song/KAHI DELI.mp3" },
                { id: 9, title: "Kut kut Dhana", artist: "Kut kut Dhana", image: "https://picsum.photos/200/200?random=9", audio:   "song/Kut Kut Dhana Lo OdiaSongs.IN.mp3" },
            { id: 10, title: "Prema Ani Chhadidela", artist: "Prema Ani Chadidela", image: "https://picsum.photos/200/200?random=11", audio: "song/Prema_Aani_Chhadidela_Adha_Batare_-_Sad_Film_Song___Babushan___ପ୍ରେମ_ଆଣି_ଛାଡିଦେଲା_ଅଧାବାଟରେ__Sidharth(256k).mp3" }],
            bhojpuri: [
                { id: 11, title: "Chahun mai Ya Na", artist: "Romantic Artist 1", image: "https://picsum.photos/200/200?random=11", audio: "song/Chahun_Main_Ya_Naa_-___Slowed___Reverb___Lyrics___Aashiqui_2___Use_Headphones🎧🎧(256k).mp3" },
                { id: 12, title: "Coca cola Tu", artist: "Romantic Artist 2", image: "https://picsum.photos/200/200?random=12", audio: "song/Coca_Cola_Tu_Tony_Kakkar_-_Cg_Tapori_Remix_Dj_Chotu_Latuwa___Dj_Aman____DJs_Of_C.mp3" },
                { id: 13, title: "Dil Ibadat", artist: "Romantic Artist 3", image: "https://picsum.photos/200/200?random=13", audio: "song/Dil_Ibaadat_Full_Video_-_Tum_Mile_Emraan_Hashmi,Soha_Ali_Khan_Pritam_KK_Sayeed_Quadri(256k).mp3" },
                { id: 14, title: "Ho Gaya Hai Tujhko", artist: "Romantic Artist 4", image: "https://picsum.photos/200/200?random=14", audio: "song/Ho_Gaya_Hai_Tujhko___Full_Song___Dilwale_Dulhania_Le_Jayenge,_Shah_Rukh_Khan,_Kajol,_Lata_Mangeshkar(256k).mp3" },
                { id: 15, title: "Dhagla Lagali", artist: "Romantic Artist 5", image: "https://picsum.photos/200/200?random=15", audio: "song/Dhagala_Lagali_-_Dream_Girl___Riteish_D,_Ayushmann_Khurrana___Nushrat___Jyotica,.mp3" },
                { id: 16, title: "Pal Pal Dil ke Paas", artist: "Romantic Artist 6", image: "https://picsum.photos/200/200?random=16", audio: "song/Pal_Pal_Dil_Ke_Paas_–_Title_Song___Lyrical___Karan_Deol,_Sahher_Bambba___Arijit_.mp3" },
                { id: 17, title: "Terimeri Kahani", artist: "Romantic Artist 7", image: "https://picsum.photos/200/200?random=17", audio: "song/Teri_Meri_Kahani___Full_Song___Himesh_Reshammiya___Ranu_Mondal____Teri_Meri_Kaha.mp3" },
                { id: 18, title: "Dard Diloke", artist: "Romantic Artist 8", image: "https://picsum.photos/200/200?random=18", audio: "song/The_Xpose__Dard_Dilo_Ke_Full_Song__Audio____Himesh_Reshammiya,_Yo_Yo_Honey_Singh(256k).mp3" },
                { id: 19, title: "Soniye Dil", artist: "Romantic Artist 9", image: "https://picsum.photos/200/200?random=19", audio: "song/Soniye_Dil_Nayi_Lyrical_Video___Baaghi_2___Tiger_Shroff___Disha_Patani___Ankit_T.mp3" },
                { id: 20, title: "Hum Marjayenge", artist: "Romantic Artist 10", image: "https://picsum.photos/200/200?random=20", audio: "song/hum-mar-jayenge-female-1241.mp3" }
            ],
            punjabi: [
                { id: 21, title: "Sare Jahan Se", artist: "Hindi Artist 1", image: "https://picsum.photos/200/200?random=21", audio: "song/Sare_Jahan_Se_Achha_Hindustan_Hamara.mp3" },
                { id: 22, title: "Lungi Dance", artist: "Hindi Artist 2", image: "https://picsum.photos/200/200?random=22", audio: "song/Lungi-Dance_(webmusic.in).mp3" },
                { id: 23, title: "Tujhe Dekhe Bina", artist: "Hindi Artist 3", image: "https://picsum.photos/200/200?random=23", audio: "song/Tujhe dekhe bina chain kabhi nahi ataa dj Shankar(M4A_128K).m4a" },
                { id: 24, title: "Banjaara", artist: "Hindi Artist 4", image: "https://picsum.photos/200/200?random=24", audio: "song/Banjaara_Full_Video_Song___Ek_Villain___Shraddha_Kapoor,_Siddharth_Malhotra(256k).mp3" },
                { id: 25, title: "Mareez E ishq", artist: "Hindi Artist 5", image: "https://picsum.photos/200/200?random=25", audio: "song/03 - Mareez-E-Ishq - DownloadMing.SE.mp3" },
                { id: 26, title: "Bom Diggy Diggy", artist: "Hindi Artist 6", image: "https://picsum.photos/200/200?random=26", audio: "song/Bom_Diggy_Diggy__(VIDEO)___Zack_Knight___Jasmin_Walia___Sonu_Ke_Titu_Ki_Sweety.mp3" },
                { id: 27, title: "Dil Mein Mars", artist: "Hindi Artist 7", image: "https://picsum.photos/200/200?random=27", audio: "song/Dil_Mein_Mars_Hai.mp3" },
                { id: 28, title: "Prem Ratan", artist: "Hindi Artist 8", image: "https://picsum.photos/200/200?random=28", audio: "song/02 Prem Ratan Dhan Payo.mp3" },
                { id: 29, title: "Chahun Mein", artist: "Hindi Artist 9", image: "https://picsum.photos/200/200?random=29", audio: "song/Chahun_Main_Ya_Naa_-___Slowed___Reverb___Lyrics___Aashiqui_2___Use_Headphones🎧🎧(256k).mp3" },
                { id: 30, title: "Zara Zara Behekta Hai", artist: "Hindi Artist 10", image: "https://picsum.photos/200/200?random=30", audio: "song/Zara_Zara_Bahekta_Hai___JalRaj___RHTDM___Male_Version___Latest_Hindi_Cover_2020(256k).mp3" }
            ],
            
            creators: [
                { id: 101, name: "A.R. Rahman", image: "https://picsum.photos/200/200?random=101" },
                { id: 102, name: "Pritam", image: "https://picsum.photos/200/200?random=102" },
                { id: 103, name: "Shreya Ghoshal", image: "https://picsum.photos/200/200?random=103" },
                { id: 104, name: "Arijit Singh", image: "https://picsum.photos/200/200?random=104" },
                { id: 105, name: "Taylor Swift", image: "https://picsum.photos/200/200?random=105" },
                { id: 106, name: "Badshah", image: "https://picsum.photos/200/200?random=106" },
                { id: 107, name: "Diljit Dosanjh", image: "https://picsum.photos/200/200?random=107" },
                { id: 108, name: "B Praak", image: "https://picsum.photos/200/200?random=108" }
            ]
        };

        // DOM Elements
        const menuBtn = document.getElementById('menuBtn');
        const menuContent = document.getElementById('menuContent');
        const loginBtn = document.getElementById('loginBtn');
        const signupBtn = document.getElementById('signupBtn');
        const loginModal = document.getElementById('loginModal');
        const signupModal = document.getElementById('signupModal');
        const closeLogin = document.getElementById('closeLogin');
        const closeSignup = document.getElementById('closeSignup');
        const switchToSignup = document.getElementById('switchToSignup');
        const switchToLogin = document.getElementById('switchToLogin');
        const musicPlayer = document.getElementById('musicPlayer');
        const progressContainer = document.getElementById('progressContainer');
        const progressBar = document.getElementById('progressBar');
        const playBtn = document.getElementById('playBtn');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const currentSong = document.getElementById('currentSong');
        const currentArtist = document.getElementById('currentArtist');
        
        // Audio element
        const audio = new Audio();
        let isPlaying = false;
        let currentSongIndex = 0;
        let currentPlaylist = [];
        
        // Toggle menu
        menuBtn.addEventListener('click', () => {
            menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuBtn.contains(e.target) && !menuContent.contains(e.target)) {
                menuContent.style.display = 'none';
            }
        });
        
        // Modal controls
        loginBtn.addEventListener('click', () => {
            loginModal.style.display = 'flex';
            menuContent.style.display = 'none';
        });
        
        signupBtn.addEventListener('click', () => {
            signupModal.style.display = 'flex';
            menuContent.style.display = 'none';
        });
        
        closeLogin.addEventListener('click', () => {
            loginModal.style.display = 'none';
        });
        
        closeSignup.addEventListener('click', () => {
            signupModal.style.display = 'none';
        });
        
        switchToSignup.addEventListener('click', () => {
            loginModal.style.display = 'none';
            signupModal.style.display = 'flex';
        });
        
        switchToLogin.addEventListener('click', () => {
            signupModal.style.display = 'none';
            loginModal.style.display = 'flex';
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.style.display = 'none';
            }
            if (e.target === signupModal) {
                signupModal.style.display = 'none';
            }
        });
        
        // Form submissions
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Login functionality would be implemented here!');
            loginModal.style.display = 'none';
        });
        
        document.getElementById('signupForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('Passwords do not match!');
                return;
            }
            
            alert('Signup functionality would be implemented here!');
            signupModal.style.display = 'none';
        });
        
        // Music player functions
        function playSong(song, playlist) {
            currentPlaylist = playlist;
            currentSongIndex = playlist.findIndex(s => s.id === song.id);
            
            audio.src = song.audio;
            audio.play();
            
            currentSong.textContent = song.title;
            currentArtist.textContent = song.artist;
            
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            isPlaying = true;
            musicPlayer.classList.add('player-active');
        }
        
        function togglePlayPause() {
            if (isPlaying) {
                audio.pause();
                playBtn.innerHTML = '<i class="fas fa-play"></i>';
            } else {
                audio.play();
                playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            }
            isPlaying = !isPlaying;
        }
        
        function prevSong() {
            currentSongIndex--;
            if (currentSongIndex < 0) {
                currentSongIndex = currentPlaylist.length - 1;
            }
            playSong(currentPlaylist[currentSongIndex], currentPlaylist);
        }
        
        function nextSong() {
            currentSongIndex++;
            if (currentSongIndex >= currentPlaylist.length) {
                currentSongIndex = 0;
            }
            playSong(currentPlaylist[currentSongIndex], currentPlaylist);
        }
        
        function updateProgress(e) {
            const { duration, currentTime } = e.srcElement;
            const progressPercent = (currentTime / duration) * 100;
            progressBar.style.width = `${progressPercent}%`;
        }
        
        function setProgress(e) {
            const width = this.clientWidth;
            const clickX = e.offsetX;
            const duration = audio.duration;
            
            audio.currentTime = (clickX / width) * duration;
        }
        
        // Player event listeners
        playBtn.addEventListener('click', togglePlayPause);
        prevBtn.addEventListener('click', prevSong);
        nextBtn.addEventListener('click', nextSong);
        audio.addEventListener('timeupdate', updateProgress);
        progressContainer.addEventListener('click', setProgress);
        audio.addEventListener('ended', nextSong);
        
        // Create music cards
        function createMusicCard(song, category) {
            const card = document.createElement('div');
            card.className = `music-card ${category}`;
            card.innerHTML = `
                <img src="${song.image}" alt="${song.title}" class="card-img">
                <h3 class="card-title">${song.title}</h3>
                <p class="card-artist">${song.artist}</p>
                <div class="card-controls">
                    <button class="play-btn" data-id="${song.id}"><i class="fas fa-play"></i></button>
                    <button class="fav-btn"><i class="far fa-heart"></i></button>
                </div>
            `;
            
            // Add event listener to play button
            const playButton = card.querySelector('.play-btn');
            playButton.addEventListener('click', () => {
                playSong(song, musicData[category]);
            });
            
            // Add event listener to favorite button
            const favButton = card.querySelector('.fav-btn');
            favButton.addEventListener('click', () => {
                favButton.classList.toggle('active');
                favButton.innerHTML = favButton.classList.contains('active') 
                    ? '<i class="fas fa-heart"></i>' 
                    : '<i class="far fa-heart"></i>';
            });
            
            return card;
        }
        
        // Create creator cards
        function createCreatorCard(creator) {
            const card = document.createElement('div');
            card.className = 'music-card';
            card.innerHTML = `
                <img src="${creator.image}" alt="${creator.name}" class="card-img">
                <h3 class="card-title">${creator.name}</h3>
                <div class="card-controls">
                    <button class="play-btn"><i class="fas fa-play"></i></button>
                    <button class="fav-btn"><i class="far fa-heart"></i></button>
                </div>
            `;
            return card;
        }
        
        // Populate music sections
        function populateMusicSections() {
            for (const category in musicData) {
                if (category === 'creators') continue;
                
                const section = document.getElementById(`${category}Songs`);
                if (section) {
                    musicData[category].forEach(song => {
                        section.appendChild(createMusicCard(song, category));
                    });
                }
            }
            
            // Populate creators section
            const creatorsSection = document.getElementById('creators');
            if (creatorsSection) {
                musicData.creators.forEach(creator => {
                    creatorsSection.appendChild(createCreatorCard(creator));
                });
            }
        }
        
        // Initialize the page
        window.addEventListener('DOMContentLoaded', () => {
            populateMusicSections();
            
            // Search functionality
            const searchBox = document.querySelector('.search-box');
            searchBox.addEventListener('keyup', (e) => {
                if (e.key === 'Enter') {
                    const query = searchBox.value.toLowerCase();
                    if (query.trim() === '') return;
                    
                    // Simple search implementation
                    let found = false;
                    for (const category in musicData) {
                        if (category === 'creators') continue;
                        
                        const results = musicData[category].filter(song => 
                            song.title.toLowerCase().includes(query) || 
                            song.artist.toLowerCase().includes(query)
                        );
                        
                        if (results.length > 0) {
                            playSong(results[0], musicData[category]);
                            found = true;
                            break;
                        }
                    }
                    
                    if (!found) {
                        alert('No songs found matching your search!');
                    }
                }
            });
        });




document.querySelectorAll("#menuContent a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const text = link.textContent.trim();

        // Close menu after click
        menuContent.classList.remove("active");

        if (text === "Odia Songs") {
            document.getElementById("odiaSongs").scrollIntoView({ behavior: "smooth" });
        }
        if (text === "Hindi Songs") {
            document.getElementById("hindiSongs").scrollIntoView({ behavior: "smooth" });
        }
        if (text === "English Songs") {
            document.getElementById("englishSongs").scrollIntoView({ behavior: "smooth" });
        }
        if (text === "Couple Songs") {
            document.getElementById("coupleSongs").scrollIntoView({ behavior: "smooth" });
        }
        if (text === "Punjabi Songs") {
            document.getElementById("punjabiSongs").scrollIntoView({ behavior: "smooth" });
        }
        if (text === "Bhojpuri Songs") {
            document.getElementById("bhojpuriSongs").scrollIntoView({ behavior: "smooth" });
        }
        if (text === "Favorites") {
            document.getElementById("creators").scrollIntoView({ behavior: "smooth" });
        }
    });
});


// --- Full Music Page sync & controls (paste after your existing JS) ---
window.addEventListener('DOMContentLoaded', () => {
  // Page elements
  const musicPage = document.getElementById('musicPage');
  const closeMusicPage = document.getElementById('closeMusicPage');
  const pagePlay = document.getElementById('pagePlay');
  const pageNext = document.getElementById('pageNext');
  const pagePrev = document.getElementById('pagePrev');
  const pageProgressContainer = document.getElementById('pageProgressContainer');
  const pageProgressBar = document.getElementById('pageProgressBar');
  const albumCover = document.getElementById('albumCover');
  const pageSong = document.getElementById('pageSong');
  const pageArtist = document.getElementById('pageArtist');

  if (!musicPage) return; // nothing to do if the page markup is missing

  // Helper: update full-page UI based on current song object
  function updateFullPageUI(song) {
    if (!song) return;
    if (pageSong) pageSong.textContent = song.title || 'Unknown Title';
    if (pageArtist) pageArtist.textContent = song.artist || 'Unknown Artist';
    if (albumCover) albumCover.src = song.image ? song.image : (albumCover.src || 'https://via.placeholder.com/300');
    // icons
    if (pagePlay) pagePlay.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    if (playBtn) playBtn.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    // progress sync
    if (pageProgressBar && progressBar) pageProgressBar.style.width = progressBar.style.width;
  }

  // Safely override playSong so every call also updates the full page UI
  if (typeof playSong === 'function') {
    const _oldPlaySong = playSong;
    playSong = function(song, playlist) {
      _oldPlaySong(song, playlist);      // existing behavior (sets audio.src, plays, updates mini UI)
      // small delay to allow audio.src change/play to start
      setTimeout(() => updateFullPageUI(song), 60);
    };
  }

  // Wire full-page control buttons to existing funcs
  if (pagePlay) pagePlay.addEventListener('click', (e) => { e.stopPropagation(); togglePlayPause(); });
  if (pageNext) pageNext.addEventListener('click', (e) => { e.stopPropagation(); nextSong(); });
  if (pagePrev) pagePrev.addEventListener('click', (e) => { e.stopPropagation(); prevSong(); });

  // Open full page when the bottom player (not its control buttons) is clicked
  musicPlayer.addEventListener('click', (e) => {
    // prevent opening when user clicked on control buttons inside the mini player
    if (e.target.closest('.control-btn') || e.target.closest('.play-btn')) return;
    musicPage.classList.add('active');

    // sync UI with current song
    const song = (currentPlaylist && currentPlaylist[currentSongIndex]) || null;
    if (song) updateFullPageUI(song);
  });

  // Close handler
  if (closeMusicPage) closeMusicPage.addEventListener('click', (e) => {
    e.stopPropagation();
    musicPage.classList.remove('active');
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') musicPage.classList.remove('active');
  });

  // Keep page progress bar in sync with audio playback (safe extra listener)
  audio.addEventListener('timeupdate', () => {
    if (!audio.duration || isNaN(audio.duration)) return;
    const percent = (audio.currentTime / audio.duration) * 100;
    if (progressBar) progressBar.style.width = `${percent}%`;
    if (pageProgressBar) pageProgressBar.style.width = `${percent}%`;
  });

  // Ensure play/pause icons update on native audio events too
  audio.addEventListener('play', () => {
    isPlaying = true;
    if (playBtn) playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    if (pagePlay) pagePlay.innerHTML = '<i class="fas fa-pause"></i>';
    musicPlayer.classList.add('player-active');
  });
  audio.addEventListener('pause', () => {
    isPlaying = false;
    if (playBtn) playBtn.innerHTML = '<i class="fas fa-play"></i>';
    if (pagePlay) pagePlay.innerHTML = '<i class="fas fa-play"></i>';
  });

  // Click-to-seek on the big page progress bar (reuse your setProgress function)
  if (pageProgressContainer) {
    pageProgressContainer.addEventListener('click', function(e) {
      // If setProgress exists, call it (it uses "this")
      if (typeof setProgress === 'function') {
        setProgress.call(this, e);
      } else {
        // fallback: manual calculation
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration || 0;
        audio.currentTime = (clickX / width) * duration;
      }
    });
  }

  // When songs end, nextSong() already exists and is wired in your code.
  // Ensure that when nextSong/prevSong are called they update full-page UI:
  // Hook into next/prev buttons already calling nextSong()/prevSong(); after those functions run,
  // audio.play() is called inside them (in your impl), so 'play' event will update icons,
  // but ensure the page UI text/cover is updated right after song changes:
  const origNext = nextSong;
  const origPrev = prevSong;
  if (typeof nextSong === 'function') {
    nextSong = function() {
      origNext();
      setTimeout(() => {
        const song = (currentPlaylist && currentPlaylist[currentSongIndex]) || null;
        if (song) updateFullPageUI(song);
      }, 60);
    };
  }
  if (typeof prevSong === 'function') {
    prevSong = function() {
      origPrev();
      setTimeout(() => {
        const song = (currentPlaylist && currentPlaylist[currentSongIndex]) || null;
        if (song) updateFullPageUI(song);
      }, 60);
    };
  }

  // If user clicks a play button on any generated card, we want full-page UI to be ready (but not auto-open)
  document.body.addEventListener('click', (e) => {
    const playBtnOnCard = e.target.closest('.play-btn');
    if (!playBtnOnCard) return;
    // after your playSong() runs (it is called inside card handler), update the page UI:
    setTimeout(() => {
      const song = (currentPlaylist && currentPlaylist[currentSongIndex]) || null;
      if (song) updateFullPageUI(song);
    }, 60);
  });

});
