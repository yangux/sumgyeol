import YouTube from "react-youtube";
import "../styles/youtubelist.css";
export default function YouTubeList() {
  return (
    <section className="youtube-list"> 
      <div className="youtube-list-2fr">
        <YouTube
        className="youtube-list-iframe"
          videoId="uqbOwF8p0KI"
          opts={{
            // width: "100%",
            // height: "100%",
            playerVars: {
              autoplay: 0, //자동재생 O
              rel: 0, //관련 동영상 표시하지 않음
              modestbranding: 1,
            },
          }}
          //이벤트 리스너
          onEnd={(e) => {
            e.target.stopVideo(0);
          }}
        />
      </div>
      <div className="youtube-list-1fr-wrapper">
        <YouTube
          videoId="jnBePNGqrV4"
          opts={{
            // width: "560",
            // height: "315",
            playerVars: {
              autoplay: 0, //자동재생 O
              rel: 0, //관련 동영상 표시하지 않음
              modestbranding: 1,
            },
          }}
          //이벤트 리스너
          onEnd={(e) => {
            e.target.stopVideo(0);
          }}
        />
        <YouTube
          videoId="XzRTBpGcPKI"
          opts={{
            // width: "560",
            // height: "315",
            playerVars: {
              autoplay: 0, //자동재생 O
              rel: 0, //관련 동영상 표시하지 않음
              modestbranding: 1,
            },
          }}
          //이벤트 리스너
          onEnd={(e) => {
            e.target.stopVideo(0);
          }}
        />
      </div>
    </section>
  );
}
