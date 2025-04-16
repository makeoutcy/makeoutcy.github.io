const latestText = document.querySelector('.latest-text');
const upcomingText = document.querySelector('.upcoming-text');
const latestLink = document.querySelector('#latest-link');
const upcomingLink = document.querySelector('#upcoming-link');
const latestImg = document.querySelector('.latest-img');
const upcomingImg = document.querySelector('.upcoming-img');

fetch('./script/musicInfo.json')
    .then(response => response.json())
    .then(data => {
        // Find the last released song
        const lastReleasedSong = data.filter(song => song.released).pop();
        const upcomingSong = data.filter(song => !song.released).pop();

        if (lastReleasedSong) {
            // Update the DOM elements
            latestText.textContent = lastReleasedSong.title;
            latestImg.src = lastReleasedSong.cover;
            latestLink.href = lastReleasedSong.redirect;
        } else {
            console.error('No released songs found.');
        }

        if (upcomingSong) {
            upcomingText.textContent = upcomingSong.title;
            upcomingImg.src = upcomingSong.cover;
            upcomingLink.href = upcomingSong.presave;
        }
        else {
            console.error('No upcoming songs found.');
        }
    })
    .catch(error => console.error('Error loading music info:', error));