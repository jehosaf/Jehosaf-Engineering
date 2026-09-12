
/* JEHOSAF Media Interactions */

document.addEventListener("DOMContentLoaded", () => {
  // Build one reusable lightbox.
  const lightbox = document.createElement("div");
  lightbox.id = "media-lightbox";
  lightbox.className = "media-lightbox";
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.innerHTML = `
    <button class="media-lightbox-close" type="button" aria-label="Close image">×</button>
    <div class="media-lightbox-inner">
      <img class="media-lightbox-image" src="" alt="">
      <div class="media-lightbox-caption"></div>
    </div>
  `;
  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector(".media-lightbox-image");
  const caption = lightbox.querySelector(".media-lightbox-caption");
  const closeButton = lightbox.querySelector(".media-lightbox-close");

  function openLightbox(img) {
    lightboxImage.src = img.currentSrc || img.src;
    lightboxImage.alt = img.alt || "";
    caption.textContent = img.alt || "";
    caption.style.display = img.alt ? "block" : "none";

    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
  }

  document.querySelectorAll(".zoomable-media").forEach((img) => {
    img.setAttribute("tabindex", "0");
    img.setAttribute("role", "button");

    img.addEventListener("click", () => openLightbox(img));

    img.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(img);
      }
    });
  });

  closeButton.addEventListener("click", closeLightbox);

  lightbox.addEventListener("click", (event) => {
    if (
      event.target === lightbox ||
      event.target.classList.contains("media-lightbox-inner")
    ) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeLightbox();
    }
  });

  // Hover-to-play video behavior.
  document.querySelectorAll(".hover-video").forEach((video) => {
    video.muted = true;
    video.playsInline = true;

    const startVideo = () => {
      const promise = video.play();
      if (promise !== undefined) {
        promise.catch(() => {});
      }
    };

    const stopVideo = () => {
      video.pause();
      video.currentTime = 0;
    };

    video.addEventListener("mouseenter", startVideo);
    video.addEventListener("mouseleave", stopVideo);

    // Touch/mobile fallback: tap video to play/pause.
    video.addEventListener("click", () => {
      if (video.paused) {
        startVideo();
      } else {
        stopVideo();
      }
    });
  });
});
