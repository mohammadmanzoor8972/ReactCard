import React from "react";

function Card({ data = "" }) {
  let styleText = "";
  if (data.length > 20 && data.length < 50) {
    styleText = "content-font2x";
  } else if (data.length > 50) {
    styleText = "content-font3x";
  } else {
    styleText = "content-font1x";
  }

  return (
    <div class="item">
      <div class="header">
        <div>
          <strong>A Level</strong>
        </div>
        <div class="sims-p-none right-content">
          <p class="sims-p-none">500/4044/3</p>
          <p class="sims-p-none">434343</p>
        </div>
      </div>
      <div class={"content " + styleText}>{data}</div>
      <div class="footer">
        <div class="bookmark">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX///+m14Wk1oKn14b1+/K74KPT6sSj1oD3+/St2o+r2Yvv+Ory+e76/fjd79Kh1X03qQzxAAACa0lEQVR4nO3a3XLaMBSFUULaEgpp3v9tG6MkBeIfSdjWcWftew9ecz64Yrer3Ouvdfen9kWr9+Ow6t5+ri98flpze0JCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQsLyNz0e9/+1cP/75fRcQ9yK8B24252eKogbEe6PL92j5wriNoSXC3aruOImhF/AGuIWhB+JphWHugHhDbCcGF94lWhaYajhhd+ApcTowrtE04pCDS7suWC3kivGFg4Ai4ihhb2JpuWHGlk4AiwgBhYOJpqWG2pc4QQwmxhWOJpoWl6oUYUZwExiUOFkomk5ocYUZgKziCGFWYmmTYcaUVgAzLhiQGF2omlTxHjCogt2mwg1nLAYOEWMJixMNG001GDCKuA4MZawItG0kVBDCauBY8RIwspE0wZDDSR8CDhMjCN8ING0gVDDCB+8YLf+K0YRzgAcIAYRPpxoWl+oMYQzAXuJIYSzJJr2PdQIwhmBPcQAwtkSTbsPtb1w1gt2u/tTSnPh7MB7YmvhzImm3YTaWLgI8JbYVrhAomlXv6hNhYsBr4kthQslmvYVakPhosB/xHbCBRNN+wi1mXBx4CexlXDhRNMuoTYSrnDBbt0V2whXAl6ITYSHNRJNOz8dGghX+Q5+7tzihmslmnZaX/i6KvD982of/AucgGsetEXrqAAAAABJRU5ErkJggg==" />{" "}
          <a href="#">Assign Candidate</a>
        </div>
        <div class="image">
          <img
            src="https://media.istockphoto.com/vectors/back-to-school-icon-vector-id930605444"
            alt="no img"
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
