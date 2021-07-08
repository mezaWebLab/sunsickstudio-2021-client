import { useState, useEffect, useRef } from "react";

export default function BackgroundVideo() {
    let isMobile = false,
        isDesktop = false;

    const video = useRef(),
        [src, setSrc] = useState(""),
        handlers = {
            onResize() {
                if (window.innerWidth < 640) {
                    isDesktop = false;

                    if (!isMobile) {
                        video.current.pause();
                        setSrc("/assets/global/hero-video-bg-m.mp4");
                        video.current.load();
                        video.current.play();
                        isMobile = true;
                    } 
                } else {
                    isMobile = false;

                    if (!isDesktop) {
                        video.current.pause();
                        setSrc("/assets/global/hero-video-bg-d.mp4");
                        video.current.load();
                        video.current.play();
                        isDesktop = true;
                    }
                }
            }
        };

    useEffect(() => {
        handlers.onResize();
        window.addEventListener("resize", () => handlers.onResize());
    }, []);

    return (
        <div className="background-video">
            <video 
                ref={video}
                autoPlay 
                muted 
                playsInline
                loop>
                <source 
                    src={src}
                    type="video/mp4" />
            </video>
        </div>
    );
}