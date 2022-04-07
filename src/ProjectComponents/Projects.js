
export function Projects() {
  return (
    <div className="project-container">
      <div className="project-header">
        <p className="chart-title">Projects</p>
      </div>
      <div>
        <ProgressContent />
      </div>
    </div>
  );
}

export function ProgressContent() {
  const progressDetail1 = { p1: "Server Migration", per1: "20%" };
  const progressDetail2 = { p2: "Sales Tracking", per2: "40%" };
  const progressDetail3 = { p3: "Customer Database", per3: "60%" };
  const progressDetail4 = { p4: "Payout Details", per4: "80%" };
  const progressDetail5 = { p5: "Account Setup", per5: "Completed" };

  return (
    <div className="progress-bar-container">
      <div className="progress-items">
        <div>
          <p>{progressDetail1.p1}</p>
          <p>{progressDetail1.per1}</p>
        </div>
        <div>
          <Progressbar bgcolor="#DC143C" progress="20" height={18} />
        </div>
      </div>

      <div className="progress-items">
        <div>
          <p>{progressDetail2.p2}</p>
          <p>{progressDetail2.per2}</p>
        </div>
        <div>
          <Progressbar bgcolor="#f6c23e" progress="40" height={18} />
        </div>
      </div>

      <div className="progress-items">
        <div>
          <p>{progressDetail3.p3}</p>
          <p>{progressDetail3.per3}</p>
        </div>
        <div>
          <Progressbar bgcolor="#4e73df" progress="60" height={18} />
        </div>
      </div>

      <div className="progress-items">
        <div>
          <p>{progressDetail4.p4}</p>
          <p>{progressDetail4.per4}</p>
        </div>
        <div>
          <Progressbar bgcolor="#36b9cc" progress="80" height={18} />
        </div>
      </div>

      <div className="progress-items">
        <div>
          <p>{progressDetail5.p5}</p>
          <p>{progressDetail5.per5}</p>
        </div>
        <div>
          <Progressbar bgcolor="#1cc88a" progress="100" height={18} />
        </div>
      </div>
    </div>
  );
}

const Progressbar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: height,
    width: "100%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        {/*<span style={progresstext}>{`${progress}%`}</span>*/}
      </div>
    </div>
  );
};
