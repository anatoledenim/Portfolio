import video from '../../assets/videoplayback.mp4'
import '../../styles/BgVideo/BgVideo.css'

function BgVideo() {
    return (
        <div className="bg-container">
            <div>
                <video
                    className="bg-container-video"
                    src={video}
                    autoPlay
                    loop
                    muted
                />
            </div>
        </div>
    )
}

export default BgVideo
