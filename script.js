const container = document.createElement("div");
container.classList.add("profile-container");

const card = document.createElement("div");
card.classList.add("profile-card");

const profileImage = document.createElement("img");
profileImage.src = "../img/profile-pic.png";
profileImage.alt = "Jessica Randall";
profileImage.classList.add("profile-image");

const name = document.createElement("h2");
name.textContent = "Jessica Randall";
name.classList.add("name");

const userLocation = document.createElement("p");
userLocation.textContent = "London, United Kingdom";
userLocation.classList.add("location");

const bio = document.createElement("p");
bio.textContent = '"Front-end developer and avid reader."';
bio.classList.add("bio");

const socialLinks = [
  "GitHub",
  "Frontend Mentor",
  "LinkedIn",
  "Twitter",
  "Instagram",
];

const buttonsContainer = document.createElement("div");
buttonsContainer.classList.add("buttons-container");

socialLinks.forEach((link) => {
  const button = document.createElement("button");
  button.textContent = link;
  button.classList.add("social-button");
  buttonsContainer.appendChild(button);
});

card.append(profileImage, name, userLocation, bio, buttonsContainer);

container.appendChild(card);

document.body.appendChild(container);

const style = document.createElement("style");
style.textContent = `
  body {
    background: #181818;
    color: white;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }

  .profile-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .profile-card {
    background: #252525;
    border-radius: 12px;
    padding: 24px;
    text-align: center;
    width: 300px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
  }

  .profile-image {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 16px;
    border: 3px solid #333;
  }

  .name {
    font-size: 20px;
    margin: 0;
  }

  .location {
    font-size: 14px;
    color: #a3ff00;
    margin: 8px 0;
  }

  .bio {
    font-size: 14px;
    color: #ccc;
    margin: 16px 0;
  }

  .buttons-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .social-button {
    background: #333;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .social-button:hover {
    background: #C4F82A;
  }
`;
document.head.appendChild(style);
