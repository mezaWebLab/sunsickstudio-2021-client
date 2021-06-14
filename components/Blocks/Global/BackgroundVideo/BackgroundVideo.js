export default function BackgroundVideo() {
    return (
        <div className="background-video">
            <video 
                autoPlay 
                muted 
                playsInline
                loop>
                <source 
                    src="/assets/global/hero-video-bg.mp4" 
                    type="video/mp4">
                </source>
            </video>
        </div>
    );
}