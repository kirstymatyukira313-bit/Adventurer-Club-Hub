export default function Slide2Problem() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ backgroundColor: "#F8F7F4", fontFamily: "'DM Sans', sans-serif", boxSizing: "border-box", padding: "5vh 5vw", display: "flex", flexDirection: "column" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "6vh" }}>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "-1vw",
              top: "1.2vh",
              width: "10vw",
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
            The Problem
          </h2>
        </div>
        <div style={{ fontSize: "1.3vw", fontWeight: 900, color: "#0D1B2A", letterSpacing: "-0.02em" }}>ACM</div>
      </div>

      <div style={{ display: "flex", gap: "5vw", flex: 1 }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ fontSize: "2.2vw", fontWeight: 500, color: "#6B7280", lineHeight: 1.5, margin: "0 0 4vh 0", textWrap: "pretty" }}>
            Adventurer Club leadership manages complex weekly tasks with no dedicated digital tools.
          </p>
          <div style={{ width: "100%", height: "1px", backgroundColor: "#D1D5DB", marginBottom: "4vh" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "3vh" }}>
            <div style={{ display: "flex", gap: "2vw", alignItems: "flex-start" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#C4763A", fontWeight: 500, minWidth: "3vw" }}>01</div>
              <p style={{ fontSize: "2.2vw", fontWeight: 500, color: "#0D1B2A", margin: 0, lineHeight: 1.3 }}>Lesson planning done with paper binders</p>
            </div>
            <div style={{ display: "flex", gap: "2vw", alignItems: "flex-start" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#C4763A", fontWeight: 500, minWidth: "3vw" }}>02</div>
              <p style={{ fontSize: "2.2vw", fontWeight: 500, color: "#0D1B2A", margin: 0, lineHeight: 1.3 }}>Attendance tracked on paper, or not at all</p>
            </div>
            <div style={{ display: "flex", gap: "2vw", alignItems: "flex-start" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#C4763A", fontWeight: 500, minWidth: "3vw" }}>03</div>
              <p style={{ fontSize: "2.2vw", fontWeight: 500, color: "#0D1B2A", margin: 0, lineHeight: 1.3 }}>Subscription tracking done on WhatsApp</p>
            </div>
            <div style={{ display: "flex", gap: "2vw", alignItems: "flex-start" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#C4763A", fontWeight: 500, minWidth: "3vw" }}>04</div>
              <p style={{ fontSize: "2.2vw", fontWeight: 500, color: "#0D1B2A", margin: 0, lineHeight: 1.3 }}>No single pool for accurate club information</p>
            </div>
          </div>
        </div>

        <div style={{ width: "1px", backgroundColor: "#D1D5DB", alignSelf: "stretch" }} />

        <div style={{ width: "28vw", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ backgroundColor: "#0D1B2A", padding: "4vh 3vw" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#C4763A", marginBottom: "2vh", fontWeight: 500 }}>
              Serving
            </div>
            <div style={{ fontSize: "7vw", fontWeight: 900, color: "#F8F7F4", lineHeight: 1, letterSpacing: "-0.04em" }}>
              4–9
            </div>
            <div style={{ fontSize: "2.2vw", color: "#9CA3AF", marginTop: "2vh", lineHeight: 1.4 }}>
              Year-olds in Seventh-day Adventist church communities worldwide
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #D1D5DB", paddingTop: "2vh", marginTop: "3vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#9CA3AF" }}>The Challenge / Adventurer Club Manager</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#0D1B2A", fontWeight: 500 }}>02</div>
      </div>
    </div>
  );
}
