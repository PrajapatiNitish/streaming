import videosstyle from './GetVideos.module.css'
import Banner from '../../components/banner/Banner.jsx'

export default function GetVideos() {
  const videos = [
    {
      video: "test-video-1",
    },

    {
      video: "test-video-2",
    },

    {
      video: "test-video-2",
    },
  ];

  return (
    <div id={videosstyle.videos_container}>
      <div id={videosstyle.videos_subcontainer}>
          {videos.map(({video}) => {
            return (<Banner key={video}/>);
          })}
      </div>
    </div>
  );
}
