// Create a function to generate a card dynamically
function createCard(title, thumbnailSrc, channel, views, monthsAgo) {
  // Create card container
  const card = document.createElement("div");
  card.classList.add("card");

  // Add inner HTML structure
  card.innerHTML = `
        <div class="thumbnail">
            <div class="timer">13:04</div>
            <img src="${thumbnailSrc}" alt="Thumbnail">
        </div>
        <div class="other">
            <div class="title"><b>${title}</b></div>
            <div class="extra">
                <div class="channel">${channel} &nbsp;.</div>
                <div class="views">&nbsp;${views} views&nbsp;.</div>
                <div class="month">&nbsp;${monthsAgo} months ago&nbsp;</div>
            </div>
        </div>
    `;

  // Append to body or a specific container
  document.body.appendChild(card);
}

// Add global styles dynamically
const style = document.createElement("style");
style.innerHTML = `
    body {
        margin: 0;
        padding: 0;
        background-color: rgba(226, 226, 226, 0.194);
    }
    .card {
        display: flex;
        align-items: center;
        flex-direction: row;
        background-color: rgba(0, 0, 0, 0.827);
        margin: 5px;
        padding: 10px;
    }
    .thumbnail {
        width: 15vw;
        height: 20vh;
        margin: 2px;
        padding: 2px;
        border-radius: 5%;
        overflow: hidden;
        position: relative;
    }
    .thumbnail img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5%;
    }
    .timer {
        position: absolute;
        background: rgba(0, 0, 0, 0.9);
        top: 78%;
        left: 78%;
        font-size: x-small;
        color: aliceblue;
        padding: 2px;
        border-radius: 5%;
    }
    .title {
        color: white;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-size: large;
    }
    .extra {
        display: flex;
        flex-direction: row;
        margin: 2px;
        padding: 2px;
        gap: 9px;
    }
    .channel, .views, .month {
        color: white;
        font-size: small;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`;
document.head.appendChild(style);

// Example usage
createCard(
  "JavaScript Exercise 13 - Dynamic Website Builder | Sigma Web Development Course - Tutorial #73",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg",
  "CodeWithV",
  "100K",
  "7"
);
