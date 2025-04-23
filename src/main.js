const scrollBox = document.querySelector(".scroll-smaller-rect");
const libraryBox = document.querySelector(".library-box");

let scrollTimeout = null;

scrollBox.addEventListener("scroll", () => {
  if (scrollBox.scrollTop > 0) {
    libraryBox.classList.add("shadow");
  } else {
    libraryBox.classList.remove("shadow");
  }
});
const inputBox = document.querySelector(".input input");

const shortcutEl = document.querySelector(".shortcut");

inputBox.addEventListener("mouseenter", () => {
  shortcutEl.classList.add("active");
});

inputBox.addEventListener("mouseleave", () => {
  shortcutEl.classList.remove("active");
});

scrollBox.addEventListener("mouseover", () => {
  scrollBox.classList.add("hovered");

  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
    scrollTimeout = null;
  }
});

scrollBox.addEventListener("mouseout", () => {
  scrollTimeout = setTimeout(() => {
    scrollBox.classList.remove("hovered");
    scrollTimeout = null;
  }, 1500);
});

const myDiv = document.querySelector(".library-box");
let isBox = false;
let blackBox = null;

myDiv.addEventListener("contextmenu", function (e) {
  e.preventDefault();

  if (!isBox) {
    blackBox = document.createElement("div");
    blackBox.style.width = "160px";
    blackBox.style.height = "100px";
    blackBox.style.backgroundColor = "#3E3E3E";
    blackBox.style.position = "absolute";
    blackBox.style.left = `${e.offsetX}px`;
    blackBox.style.top = `${e.offsetY + 15}px`;
    blackBox.style.boxShadow = "1px 2px 10px #000";
    blackBox.innerHTML = `
    <div class="blackbox">
    <span class="material-symbols-outlined">
    playlist_add
    </span>
    <h4>Create playlist</h4>
    </div>
    <div class="blackbox">
    <span class="material-symbols-outlined">
    add
    </span>
    <h4>Create folder</h4>
    </div>
    `;
    myDiv.appendChild(blackBox);
    isBox = true;
  } else {
    if (blackBox) blackBox.remove();
    isBox = false;
  }
});

const musicData = [
  {
    category: "Trending songs",
    items: [
      {
        title: "Pal Pal",
        subtitle: "Afusic, AliSoomroMusic",
        image: "https://i.scdn.co/image/ab67616d00001e02e6356c004d749aa4a617ccbc"
      },
      {
        title: "Finding Her",
        subtitle: "Kushagra, Bharath, Saaheal",
        image: "https://i.scdn.co/image/ab67616d00001e02025bd47a9f841f12467955ce"
      },
      {
        title: "Supreme",
        subtitle: "Shubh",
        image: "https://i.scdn.co/image/ab67616d00001e0233f2a4ab3d9e9d46908e2c7f"
      }
    ]
  },
  {
    category: "Popular artists",
    items: [
      {
        title: "Arijit Singh",
        subtitle: "",
        image: "https://i.scdn.co/image/ab6761610000e5ebfa4cf8e5b0fbe7d94d3f5228"
      },
      {
        title: "Pritam",
        subtitle: "",
        image: "https://i.scdn.co/image/ab6761610000e5eb4b3c30dd321c2f4e5195dcd2"
      },
      {
        title: "Armaan Malik",
        subtitle: "",
        image: "https://i.scdn.co/image/ab6761610000e5eb450acdc2a26a32e4e54781f3"
      }
    ]
  },
  {
    category: "India's Best",
    items: [
      {
        title: "Bollywood Hits",
        subtitle: "Non-stop chartbusters",
        image: "https://i.scdn.co/image/ab67706f00000003e1b3e2fdf73f7bbd342a35d1"
      },
      {
        title: "Punjabi Beats",
        subtitle: "Trending Punjabi radio",
        image: "https://i.scdn.co/image/ab67706f00000003f72b2039f5f0e74b4262c0d2"
      },
      {
        title: "Tamil Hits",
        subtitle: "Blasting Tamil Vibes",
        image: "https://i.scdn.co/image/ab67706f00000003f72b2039f5f0e74b4262c0d2"
      },
      {
        title: "Kannada Vibe",
        subtitle: "Kannada",
        image: "https://i.scdn.co/image/ab67706f00000003f72b2039f5f0e74b4262c0d2"
      }
    ]
  },
  {
    category: "Popular radio",
    items: [
      {
        title: "Bollywood Hits",
        subtitle: "Non-stop chartbusters",
        image: "https://i.scdn.co/image/ab67706f00000003e1b3e2fdf73f7bbd342a35d1"
      },
      {
        title: "Punjabi Beats",
        subtitle: "Trending Punjabi radio",
        image: "https://i.scdn.co/image/ab67706f00000003f72b2039f5f0e74b4262c0d2"
      },
      {
        title: "Tamil Hits",
        subtitle: "Blasting Tamil Vibes",
        image: "https://i.scdn.co/image/ab67706f00000003f72b2039f5f0e74b4262c0d2"
      },
      {
        title: "Kannada Vibe",
        subtitle: "Kannada",
        image: "https://i.scdn.co/image/ab67706f00000003f72b2039f5f0e74b4262c0d2"
      }
    ]
  }
];

const songDiv = document.querySelector(".larger-rect");
let fullHTML = "";

musicData.forEach(section => {
  fullHTML += `
    <div class="music-div">
      <div class="music-heading">
        <h1>${section.category}</h1>
        <h4>Show all</h4>
      </div>
      <div class="songs-list">
  `;

  section.items.forEach(item => {
    fullHTML += `
      <div class="song">
        <div class="play"></div>
        <img src="${item.image}" alt="${item.title}">
        <h2>${item.title}</h2>
        <p>${item.subtitle}</p>
      </div>
    `;
  });

  fullHTML += `
      </div>
    </div>
  `;
});

songDiv.innerHTML = fullHTML;

