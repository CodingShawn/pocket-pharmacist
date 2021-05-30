import { useEffect, useState } from "react";
import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";

function Loading() {
  const defaultText = "Pulling data";
  const [rotation, setRotation] = useState(0);

  function rotateHourGlass() {
    const targetClass = document.getElementById("rotating");
    if (targetClass) {
      targetClass.style.transform = `rotate(${rotation}deg)`;
    }
  }

  function updateRotation() {
    rotation <= 315 ? setRotation(rotation + 45) : setRotation(0);
  }

  function timer() {
    setTimeout(updateRotation, 250);
  }

  function clearTimer() {
    clearTimeout(timer);
  }

  useEffect(() => {
    timer();
    return clearTimer;
  });

  useEffect(() => {
    rotateHourGlass();
    // eslint-disable-next-line 
  }, [rotation]);

  const style = {
    fontSize: "20px",
    padding: "24px",
    color: "rgba(0,0,0,0.87)",
    display: "flex",
    alignItems: "center",
    gap: "24px"
  };

  return (
    <div style={style}>
      {defaultText} <HourglassEmptyIcon id="rotating" />
    </div>
  );
}

export default Loading;
