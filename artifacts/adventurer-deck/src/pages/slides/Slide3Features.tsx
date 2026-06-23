export default function Slide3Features() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ backgroundColor: "#F8F7F4", fontFamily: "'DM Sans', sans-serif", boxSizing: "border-box", padding: "5vh 5vw", display: "flex", flexDirection: "column" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "5vh" }}>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "-1vw",
              top: "1.2vh",
              width: "16vw",
              height: "3vh",
              backgroundColor: "#0D1B2A",
              opacity: 0.08,
              zIndex: 0,
            }}
          />
          <h2
            style={{
              fontSize: "3.8vw",
              fontWeight: 900,
              color: "#0D1B2A",
              margin: 0,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              position: "relative",
              zIndex: 1,
            }}
          >
            Four Core Features
          </h2>
        </div>
        <div style={{ fontSize: "1.3vw", fontWeight: 900, color: "#0D1B2A", letterSpacing: "-0.02em" }}>ACM</div>
      </div>

      <div style={{ display: "flex", gap: "2vw", flex: 1 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ flex: 1, backgroundColor: "#0D1B2A", padding: "3vh 2.5vw", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#C4763A", fontWeight: 500 }}>01</div>
            <div>
              <div style={{ fontSize: "2.4vw", fontWeight: 700, color: "#F8F7F4", marginBottom: "1vh", letterSpacing: "-0.02em" }}>Curriculum &amp; Lessons</div>
              <div style={{ fontSize: "2.2vw", color: "#9CA3AF", lineHeight: 1.4 }}>Structured lessons for six Adventurer classes, with progress tracking and memory verse management.</div>
            </div>
          </div>
          <div style={{ flex: 1, border: "1px solid #D1D5DB", padding: "3vh 2.5vw", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#C4763A", fontWeight: 500 }}>02</div>
            <div>
              <div style={{ fontSize: "2.4vw", fontWeight: 700, color: "#0D1B2A", marginBottom: "1vh", letterSpacing: "-0.02em" }}>Attendance</div>
              <div style={{ fontSize: "2.2vw", color: "#6B7280", lineHeight: 1.4 }}>Record weekly attendance and guests. Review historical snapshots over time.</div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2vh" }}>
          <div style={{ flex: 1, border: "1px solid #D1D5DB", padding: "3vh 2.5vw", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#C4763A", fontWeight: 500 }}>03</div>
            <div>
              <div style={{ fontSize: "2.4vw", fontWeight: 700, color: "#0D1B2A", marginBottom: "1vh", letterSpacing: "-0.02em" }}>Financial Management</div>
              <div style={{ fontSize: "2.2vw", color: "#6B7280", lineHeight: 1.4 }}>Track subscription collection, log expenses, and monitor cash in hand against goals.</div>
            </div>
          </div>
          <div style={{ flex: 1, backgroundColor: "#C4763A", padding: "3vh 2.5vw", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#F8F7F4", fontWeight: 500, opacity: 0.7 }}>04</div>
            <div>
              <div style={{ fontSize: "2.4vw", fontWeight: 700, color: "#F8F7F4", marginBottom: "1vh", letterSpacing: "-0.02em" }}>Club Administration</div>
              <div style={{ fontSize: "2.2vw", color: "#F8F7F4", lineHeight: 1.4, opacity: 0.85 }}>Guided onboarding, member roster, and a dashboard for what's coming next.</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #D1D5DB", paddingTop: "2vh", marginTop: "3vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#9CA3AF" }}>Core Features / Adventurer Club Manager</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#0D1B2A", fontWeight: 500 }}>03</div>
      </div>
    </div>
  );
}
