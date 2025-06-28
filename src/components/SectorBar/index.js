const SectorBar = ({ percentage }) => {
  const isPositive = percentage > 0;
  // const isNegative = percentage < 0;

  const width = Math.min(Math.abs(percentage) * 5, 100); // Cap at 100%
  const barStyle = {
    width: `${width}%`,
    backgroundColor: isPositive ? "green" : "red",
    height: "100%",
    position: "absolute",
    top: 0,
    [isPositive ? "left" : "right"]: "50%",
    transformOrigin: isPositive ? "left" : "right",
    transition: "width 0.3s ease",
  };

  return (
    <div
      style={{
        position: "relative",
        height: "20px",
        // backgroundColor: "#eee",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {isPositive ? (
        <>
          <p style={{color:"green"}}>{percentage}%</p>
          <div style={barStyle}></div>
        </>
      ) : (
        <>
          <div style={barStyle}></div>
          <p style={{color:"red"}}>{percentage}%</p>
        </>
      )}
      {/* <div style={barStyle}></div> */}
    </div>
  );
};

export default SectorBar;
