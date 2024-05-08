
import { Frame } from "./Frame";
import { IcBaselineTelegram } from "./IcBaselineTelegram";
import { MdiInstagram } from "./MdiInstagram";
import { MdiLinkedin } from "./MdiLinkedin";
import { MdiYoutube } from "./MdiYoutube";
import { PlayCircle } from "./PlayCircle";
import "./style.css";

export const FrameScreen = () => {
  return (
    <div className="frame-screen">
      <p className="text-wrapper">Creating Stunning Interfaces, Inspiring Interactions</p>
      <p className="div">
        Transforming Ideas into Engaging Interfaces, Redefining Digital Interaction with Creativity and Functionality
      </p>
      <div className="frame-2">
        <div className="frame-3">
          <MdiLinkedin className="icon-instance-node" />
        </div>
        <div className="frame-3">
          <MdiYoutube className="icon-instance-node" />
        </div>
        <div className="frame-3">
          <MdiInstagram className="icon-instance-node" />
        </div>
        <div className="frame-3">
          <IcBaselineTelegram className="icon-instance-node" />
        </div>
      </div>
      <div className="frame-4">
        <Frame
          className="frame-1"
          color="accent-color"
          display="default"
          iconLeft={false}
          iconRight={false}
          size="twenty"
          text="Reach Out"
        />
        <div className="frame-5">
          <PlayCircle className="play-circle" color="#9C9C9C" />
          <div className="text-wrapper-2">Watch Video</div>
        </div>
      </div>
      <img className="arrow" alt="Arrow" src="arrow-04.svg" />
    </div>
  );
};
