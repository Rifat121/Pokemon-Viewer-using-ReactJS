<<<<<<< HEAD
const ProgressBar = ({ progress }) => {
  const container = {
    height: 15,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 50,
    marginLeft: 30,
    marginTop: 0,
  };

  const bar = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "#000000",
    borderRadius: "inherit",
  };

  const label = {
    fontSize: "14px",
    padding: "0.5rem",
    color: "#ffffff",
  };
  return (
    <div style={container}>
      <div
        style={bar}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span style={label}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
=======
const ProgressBar = ({ progress }) => {
  const container = {
    height: 15,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 50,
    marginLeft: 30,
    marginTop: 0,
  };

  const bar = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "#000000",
    borderRadius: "inherit",
  };

  const label = {
    fontSize: "14px",
    padding: "0.5rem",
    color: "#ffffff",
  };
  return (
    <div style={container}>
      <div
        style={bar}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span style={label}>{`${progress}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
>>>>>>> ea50365 (Adding all the files)
