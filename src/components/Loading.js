import HourglassEmptyIcon from "@material-ui/icons/HourglassEmpty";

function Loading() {
  return (
    <HourglassEmptyIcon style={{ color: "rgba(0,0,0,0.54)", padding: "12px", animation: "spin 2s linear infinite" }} />
  );
}

export default Loading;
