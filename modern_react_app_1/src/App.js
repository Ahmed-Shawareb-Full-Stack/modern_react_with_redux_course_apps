//! ─── Imports ────────────────────────────────────────────────────────────────
import "./style/main.scss";
//? ─── Import Components ───────────────────────────────────────────────────────
import ProfileCard from "./ProfileCard";

//? ─── Import Assets ───────────────────────────────────────────────────────────
import alexaImg from "./assets/images/alexa.png";
import cortonaImg from "./assets/images/cortana.png";
import siriImg from "./assets/images/siri.png";

//! ─── App Component ───────────────────────────────────────────────────────────

function App() {
  return (
    <div className="container">
      <h1>Personal Digital Assistant</h1>
      <div className="row">
        <div className="col-1-of-3">
          <ProfileCard title="Alexa" handle="@alexa" imgSrc={alexaImg} />
        </div>
        <div className="col-1-of-3">
          <ProfileCard title="Cortona" handle="@cortona" imgSrc={cortonaImg} />
        </div>
        <div className="col-1-of-3">
          <ProfileCard title="Siri" handle="@siri" imgSrc={siriImg} />
        </div>
      </div>
    </div>
  );
}

export default App;
