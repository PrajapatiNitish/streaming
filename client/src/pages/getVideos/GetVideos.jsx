import videosstyle from './GetVideos.module.css'
import Banner from '../../components/banner/Banner.jsx'

export default function GetVideos() {
  const videos = [];

  return (
    <div id={videosstyle.videos_container}>
      <div id={videosstyle.videos_subcontainer}>
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
        <Banner />
      </div>
    </div>
  );
}
