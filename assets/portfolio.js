const $ = (selector, root = document) => root.querySelector(selector);

function setupPhotoFrames() {
  document.querySelectorAll(".photo-frame > img").forEach(image => {
    const markLoaded = () => {
      const frame = image.closest(".photo-frame");
      frame?.classList.remove("image-failed");
      frame?.classList.add("image-loaded");
    };
    const markFailed = () => {
      const frame = image.closest(".photo-frame");
      frame?.classList.remove("image-loaded");
      frame?.classList.add("image-failed");
    };
    image.addEventListener("load", markLoaded, { once: true });
    image.addEventListener("error", markFailed, { once: true });
    if (image.complete && image.naturalWidth > 0) markLoaded();
  });
}

function setupContactForm() {
  const form = $("#contact-form");
  form?.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio contact: ${data.get("name")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
    $("#form-status").textContent = "Opening your email app with the message details.";
    location.href = `mailto:harshith.b.sharma2@gmail.com?subject=${subject}&body=${body}`;
  });
}

setupPhotoFrames();
setupContactForm();
$("#current-year")?.replaceChildren(String(new Date().getFullYear()));
