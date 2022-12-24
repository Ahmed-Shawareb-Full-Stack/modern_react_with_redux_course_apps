//! ─── Imports ─────────────────────────────────────────────────────────────────
import "./styles.scss";
//! ─── ProfileCard Component ───────────────────────────────────────────────────

function ProfileCard({ title, handle, imgSrc }) {
  return (
    <div className="card">
      <div className="card__profile">
        <div className="card__image-box">
          <img src={imgSrc} alt="pda logo" className="card__image" />
        </div>
        <div className="card__text">
          <h2 className="card__title">This is {title}</h2>
          <p className="card__social-handle"> {handle}</p>
          <p className="card__description">
            Amet duis commodo culpa esse excepteur incididunt ut incididunt nisi
            commodo. Et in consectetur pariatur minim voluptate mollit
            cupidatat. Ex sunt ex labore anim.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
