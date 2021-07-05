import React from "react";
import './Voice.css';
const Voice: React.FC = (): React.ReactElement => {
  const Synthesizer: React.FC = (): React.ReactElement => {
    return <div className="synthesizerContainer">synthesizer</div>;
  };
  const Display: React.FC = (): React.ReactElement => {
    return <div className="displayContainer">Display</div>;
  };
  const Controllers: React.FC = (): React.ReactElement => {
    return <div className="controllersContainer">Controllers</div>;
  };
  return (
    <div className="mainContainer">
      <Synthesizer />
      <Display />
      <Controllers />
    </div>
  );
};
 export default Voice;