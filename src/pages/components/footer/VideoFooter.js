import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooterText">
        <h3>@Guilherme webber</h3>
        <p>Descrição do video</p>
        <div className="videoFooterMusic">
          <MusicNoteIcon className="videoFooterIcon" />
          <div className="videoFooterMusicTitle">
          <p>Título da música</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooterRecord"
        alt="Vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}

export default VideoFooter;
