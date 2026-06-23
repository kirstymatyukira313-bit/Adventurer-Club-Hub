export default function Slide1Title() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ backgroundColor: "#F8F7F4", fontFamily: "'DM Sans', sans-serif", boxSizing: "border-box", padding: "5vh 5vw" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{ fontSize: "1.5vw", fontWeight: 900, color: "#0D1B2A", letterSpacing: "-0.02em" }}>
          ACM
        </div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#6B7280", display: "flex", flexDirection: "column", gap: "0.8vh", textAlign: "right" }}>
          <div><span style={{ color: "#C4763A", marginRight: "0.8vw" }}>Project:</span>Adventurer Club Manager</div>
          <div><span style={{ color: "#C4763A", marginRight: "0.8vw" }}>Status:</span>In Development</div>
          <div><span style={{ color: "#C4763A", marginRight: "0.8vw" }}>Platform:</span>iOS / Android / Web</div>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: "13vh", left: "5vw", width: "90vw" }}>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "-1.5vw",
              top: "2vh",
              width: "30vw",
              height: "6vh",
              backgroundColor: "#0D1B2A",
              opacity: 0.08,
              zIndex: 0,
            }}
          />
          <h1
            style={{
              fontSize: "8vw",
              fontWeight: 900,
              color: "#0D1B2A",
              margin: 0,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              position: "relative",
              zIndex: 1,
              textWrap: "balance",
            }}
          >
            Adventurer Club Manager
          </h1>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "5vh" }}>
          <p
            style={{
              fontSize: "2.2vw",
              fontWeight: 500,
              color: "#6B7280",
              margin: 0,
              maxWidth: "52vw",
              lineHeight: 1.4,
            }}
          >
            A mobile platform for Adventurer Club leadership to manage curriculum, attendance, finances, and club administration in one place.
          </p>
          <div style={{ width: "28vw", height: "1px", backgroundColor: "#D1D5DB" }} />
        </div>
      </div>
    </div>
  );
}
