document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".portfolio-categories button");
  const items = document.querySelectorAll(".portfolio-items .item");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const category = btn.getAttribute("data-category");
      items.forEach(item => {
        if(category === "all" || item.getAttribute("data-category") === category){
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});