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

// Right-click black box logic
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
