function downloadFile() {
    const zipUrl = "https://example.com/sample.zip"; // Replace with actual file
    const link = document.createElement('a');
    link.href = zipUrl;
    link.download = "sample.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  function saveUserPreference(key, value) {
    localStorage.setItem(key, value);
  }
  
  function getUserPreference(key) {
    return localStorage.getItem(key);
  }
  
  function triggerCustomAnimation() {
    const aboutImg = document.querySelector(".animated-img");
    aboutImg.classList.add("wiggle-effect");
    setTimeout(() => {
      aboutImg.classList.remove("wiggle-effect");
    }, 600);
    saveUserPreference("lastAction", "wiggleTriggered");
  }
  
  function toggleSection(id) {
    const sections = document.querySelectorAll("main section");
    sections.forEach(section => {
      section.classList.remove("active");
    });
    const activeSection = document.getElementById(id);
    if (activeSection) {
      activeSection.classList.add("active");
    }
  }
  
  const savedTheme = getUserPreference("theme");
  if (savedTheme === "teal") {
    document.body.classList.add("theme-saved");
  }

  function openImage(src) {
    const newTab = window.open();
    newTab.document.body.innerHTML = `<img src="${src}" style="width:100%;height:auto;" />`;
  }