export default function Slide5Closing() {
  return (
    <div
      className="w-screen h-screen overflow-hidden relative"
      style={{ backgroundColor: "#0D1B2A", fontFamily: "'DM Sans', sans-serif", boxSizing: "border-box", padding: "5vh 5vw", display: "flex", flexDirection: "column" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8vh" }}>
        <div style={{ fontSize: "1.5vw", fontWeight: 900, color: "#F8F7F4", letterSpacing: "-0.02em" }}>ACM</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#6B7280", display: "flex", gap: "3vw" }}>
          <div>In Development</div>
          <div>iOS / Android / Web</div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", flex: 1, textAlign: "center" }}>
        <div style={{ position: "relative" }}>
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              width: "45vw",
              height: "12vh",
              backgroundColor: "#F8F7F4",
              opacity: 0.04,
              zIndex: 0,
            }}
          />
          <h2
            style={{
              fontSize: "6vw",
              fontWeight: 900,
              color: "#F8F7F4",
              margin: "0 0 4vh 0",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              position: "relative",
              zIndex: 1,
              textWrap: "balance",
            }}
          >
            Adventurer Club Manager
          </h2>
        </div>

        <div style={{ width: "12vw", height: "2px", backgroundColor: "#C4763A", marginBottom: "4vh" }} />

        <p style={{ fontSize: "2.2vw", color: "#9CA3AF", maxWidth: "50vw", lineHeight: 1.5, margin: "0 0 2vh 0", fontWeight: 400 }}>
          Built for leaders. Made for kids.
        </p>
        <p style={{ fontSize: "2.2vw", color: "#6B7280", maxWidth: "46vw", lineHeight: 1.5, margin: 0, fontWeight: 400 }}>
          A purpose-built tool that lets club leaders focus on what matters — the children in their care.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "2vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#4B5563" }}>Adventurer Club Manager</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#F8F7F4", fontWeight: 500 }}>05</div>
      </div>
    </div>
  );
}
