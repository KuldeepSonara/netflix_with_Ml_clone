// IntroPage.jsx
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';
import PageTransition from '../../animation/intro/PageTransition';
import './IntroPage.scss';

const IntroPage = ({ onTransitionComplete }) => {
  return (
    <PageTransition in={true} onExited={onTransitionComplete}>
      <div className="intro-page">
        <ReactPlayer
          url="./video/Loader.mp4"
          playing
          loop
          muted
          width="100%"
          height="100vh"
          config={{
            file: {
              attributes: {
                controlsList: 'nodownload',
              },
            },
          }}
        />
        <ReactAudioPlayer
          src="./video/sound/sound.mp3"
          autoPlay
          controlsList="nodownload"
          onEnded={onTransitionComplete} // Trigger transition complete on audio end
        />
      </div>
    </PageTransition>
  );
};

export default IntroPage;
