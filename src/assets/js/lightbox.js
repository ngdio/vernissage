import PhotoSwipeLightbox from "photoswipe/lightbox"
import PhotoSwipe from "photoswipe"
import "photoswipe/style.css"

const lightbox = new PhotoSwipeLightbox({
  gallery: "#gallery-index",
  children: "a",
  pswpModule: PhotoSwipe,
})
lightbox.init()
