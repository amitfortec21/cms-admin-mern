import GalleryImage from './GalleryImage'

export default function Gallery() {
  return (
    <>
    {/* ======= Gallery Section Start ======= */}
    <section id="gallery" className="gallery">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Gallery</h2>
          <p>Check our Gallery</p>
        </div>

        <div className="row g-0" data-aos="fade-left">
          <GalleryImage gihref="assets/img/gallery/gallery-1.jpg" gisrc="assets/img/gallery/gallery-1.jpg" />
          <GalleryImage gihref="assets/img/gallery/gallery-2.jpg" gisrc="assets/img/gallery/gallery-2.jpg" />
          <GalleryImage gihref="assets/img/gallery/gallery-3.jpg" gisrc="assets/img/gallery/gallery-3.jpg" />
          <GalleryImage gihref="assets/img/gallery/gallery-4.jpg" gisrc="assets/img/gallery/gallery-4.jpg" />
          <GalleryImage gihref="assets/img/gallery/gallery-5.jpg" gisrc="assets/img/gallery/gallery-5.jpg" />
          <GalleryImage gihref="assets/img/gallery/gallery-6.jpg" gisrc="assets/img/gallery/gallery-6.jpg" />
          <GalleryImage gihref="assets/img/gallery/gallery-7.jpg" gisrc="assets/img/gallery/gallery-7.jpg" />
          <GalleryImage gihref="assets/img/gallery/gallery-8.jpg" gisrc="assets/img/gallery/gallery-8.jpg" />
        </div>
        
      </div>
    </section>
    {/* ======= Gallery Section End ======= */}
    </>
  )
}
