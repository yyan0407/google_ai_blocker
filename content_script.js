function removeAIOverview() {
  const heading = [...document.querySelectorAll("h1, h2, strong")]
    .find(el => el.textContent.trim().toLowerCase() === "ai overview");

  if (!heading) return false;

  let el = heading;
  for (let i = 0; i < 20; i++) {
    el = el.parentElement;
    if (!el) break;

    const box = el.getBoundingClientRect();
    const text = el.innerText.toLowerCase();

    if (box.height > 300 && text.includes("ai overview")) {
      el.remove();
      console.log("✅ AI Overview block removed");
      return true;
    }
  }

  return false;
}

let tries = 0;
const timer = setInterval(() => {
  if (removeAIOverview() || ++tries > 30) clearInterval(timer);
}, 100);