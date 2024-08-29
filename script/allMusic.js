const container = document.querySelector('.all-music-container');

fetch('script/musicInfo.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach((music) => {
            if (music.released == true) {
                const musicElement = document.createElement('div');
                musicElement.innerHTML = `
                    <div class=${music.title} id="song">
                        <h2>${music.title}</h2>
                        <img src=${music.cover} alt=${music.title}>
                        <button class="button">Listen Now</button>
                    </div>
                `;
                container.appendChild(musicElement);
            } else {
                const musicElement = document.createElement('div');
                musicElement.innerHTML = `
                    <div class=${music.title} id="song">
                        <h2>${music.title}</h2>
                        <img src=${music.cover} alt=${music.title}>
                        <a href=${music.presave} target="_blank" class="button">Presave</a>
                    </div>
                `;
                container.appendChild(musicElement);
            }
        });

        const buttons = document.querySelectorAll('.button');
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const songTitle = button.parentNode.querySelector('h2').textContent;
                const songInfo = data.find((music) => music.title === songTitle);
                overlay.innerHTML = `
                    <div class="content">
                        <button class="close"><i class='bx bx-x'></i></button>
                        <div class="folded-menu">
                            ${songInfo.spotify || ''}
                        </div>
                        <div class="folded-menu">
                            ${songInfo.soundcloud || ''}
                        </div>
                        <div class="folded-menu">
                            ${songInfo.applemusic || ''}
                        </div>
                    </div>
                `;
                document.body.appendChild(overlay); // Add this line if you want to append overlay to the body

                const closeButton = document.querySelector('.close');
                closeButton.addEventListener('click', () => {
                    overlay.remove();
                });

                const foldedMenus = document.querySelectorAll('.folded-menu');
                foldedMenus.forEach((foldedMenu) => {
                    foldedMenu.querySelector('iframe').style.display = 'none';
                    
                    if (foldedMenu.querySelector('div')) {
                        foldedMenu.querySelector('div').style.display = 'none';
                    }

                    foldedMenu.addEventListener('click', () => {
                        // Check if the clicked folded menu is already active
                        const isActive = foldedMenu.classList.contains('active');

                        // Remove active class from all folded menus
                        const foldedMenus = document.querySelectorAll('.folded-menu');
                        foldedMenus.forEach((menu) => {
                            menu.classList.remove('active');
                            menu.querySelector('iframe').style.display = 'none';
                        });

                        // Toggle the active class and display the iframe accordingly
                        if (!isActive) {
                            foldedMenu.classList.add('active');
                            foldedMenu.querySelector('iframe').style.display = 'block';
                        }
                    });
                });
            });
        });
    })
    .catch(error => {
        console.error(error);
    });