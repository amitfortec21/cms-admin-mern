import React from 'react'

export default function GalleryImage(props) {
    return (
        <>
            <div className="col-lg-3 col-md-4">
                <div className="gallery-item" data-aos="zoom-in" data-aos-delay="100">
                    <a href={props.gihref} className="gallery-lightbox">
                        <img src={props.gisrc} alt="" className="img-fluid" />
                    </a>
                </div>
            </div>
        </>
    )
}
