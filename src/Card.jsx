import React from "react";

function Card({ data = "" }) {
  let styleText = "";
  if (data.length > 20 && data.length < 50) {
    styleText = "content-font2x";
  } else if (data.length > 50 && data.length < 70) {
    styleText = "content-font3x";
  } else {
    styleText = "content-font1x";
  }

  return (
    <div class="item">
      <div class="header">
        <div>A Level</div>
        <div class="sims-p-none right-content">
          <p class="sims-p-none">500/4044/3</p>
          <p class="sims-p-none">434343</p>
        </div>
      </div>
      <div class={"content " + styleText}>{data}</div>
      <div class="footer">
        <div>
          <a href="#">Assign Candidate</a>
        </div>
        <div>
          <img src="" alt="test" />
        </div>
      </div>
    </div>
  );
}

export default Card;
