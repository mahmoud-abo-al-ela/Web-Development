const menuBtn = document.querySelector(".btn-menu");
const headerEl = document.querySelector(".header");
const closeBtn = document.querySelector(".close");

menuBtn.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

closeBtn.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

//////////////////////////////////////////////////
// smooth scrolling animation for browsers that not support it

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
    // close menu
    if (link.classList.contains("navbar-main-link")) {
      headerEl.classList.remove("nav-open");
    }
  });
});

//////////////////////////////////////////////////
// make navbar sticky

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);

obs.observe(sectionHeroEl);
