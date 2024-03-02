//Stick nav
const header = document.querySelector(".header");
const nav = document.querySelector(".header__nav");
const navHeight = nav.getBoundingClientRect().height;
const navCallBack = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("header__nav--sticky");
  else nav.classList.remove("header__nav--sticky");
};

const navObserver = new IntersectionObserver(navCallBack, {
  root: null,
  threshold: 0.2,
  rootMargin: `-${navHeight}px`,
});
navObserver.observe(header);

//About Me scroll up on scroll animation

const aboutMeSection = document.querySelector(".about-me");
const aboutMeText = document.querySelector(".about-me__paragraph");
const aboutMeImage = document.querySelector(".about-me__image-container");

function aboutMeCallBack(entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    aboutMeText.classList.add("paragraph-visible");
    aboutMeImage.classList.add("image-visible");
    aboutMeobserver.unobserve(aboutMeSection);
  }
}

const aboutMeobserver = new IntersectionObserver(aboutMeCallBack, {
  root: null,
  threshold: 0.5,
});

aboutMeobserver.observe(aboutMeSection);

//Skill section fade in on scroll animation

const skillSection = document.querySelector(".skill-section ");
const skillIcons = document.querySelectorAll(".skill-section__item");

function callBack(entries) {
  const [entry] = entries;

  if (entry.isIntersecting) {
    skillIcons.forEach((icon, i) => {
      setTimeout(() => {
        icon.classList.add("visible");
      }, i * 100);
    });
    observer.unobserve(skillSection);
  }
}

const observer = new IntersectionObserver(callBack, {
  root: null,
  threshold: 0.5,
});

observer.observe(skillSection);

//Scroll into view
document
  .querySelector(".header__nav-bar")
  .addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.classList.contains("header__nav-link")) {
      const navHeight = document
        .querySelector(".header__nav")
        .getBoundingClientRect().height;
      const id = e.target.getAttribute("href");
      const targetYPos = document.querySelector(id).getBoundingClientRect().y;
      const yOffset = window.pageYOffset;
      window.scrollTo(0, targetYPos + yOffset - navHeight);
    }
  });
