export default function Slide4Roadmap() {
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
            What's Next
          </h2>
        </div>
        <div style={{ fontSize: "1.3vw", fontWeight: 900, color: "#0D1B2A", letterSpacing: "-0.02em" }}>ACM</div>
      </div>

      <div style={{ display: "flex", gap: "5vw", flex: 1 }}>
        <div style={{ flex: 1.2, display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ fontSize: "2.2vw", fontWeight: 500, color: "#6B7280", lineHeight: 1.5, margin: "0 0 3vh 0", textWrap: "pretty" }}>
            The foundation is built. Key milestones ahead:
          </p>
          <div style={{ width: "100%", height: "1px", backgroundColor: "#D1D5DB", marginBottom: "3vh" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "2.5vh" }}>
            <div style={{ display: "flex", gap: "2vw", alignItems: "flex-start", paddingBottom: "2.5vh", borderBottom: "1px solid #E5E7EB" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#C4763A", fontWeight: 500, minWidth: "3vw" }}>01</div>
              <div>
                <div style={{ fontSize: "2.4vw", fontWeight: 700, color: "#0D1B2A", marginBottom: "0.5vh" }}>Cloud sync</div>
                <div style={{ fontSize: "2.2vw", color: "#6B7280", lineHeight: 1.3 }}>Multiple leaders share a live club record</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "2vw", alignItems: "flex-start", paddingBottom: "2.5vh", borderBottom: "1px solid #E5E7EB" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#C4763A", fontWeight: 500, minWidth: "3vw" }}>02</div>
              <div>
                <div style={{ fontSize: "2.4vw", fontWeight: 700, color: "#0D1B2A", marginBottom: "0.5vh" }}>Push notifications</div>
                <div style={{ fontSize: "2.2vw", color: "#6B7280", lineHeight: 1.3 }}>Upcoming lessons and attendance reminders</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "2vw", alignItems: "flex-start", paddingBottom: "2.5vh", borderBottom: "1px solid #E5E7EB" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#C4763A", fontWeight: 500, minWidth: "3vw" }}>03</div>
              <div>
                <div style={{ fontSize: "2.4vw", fontWeight: 700, color: "#0D1B2A", marginBottom: "0.5vh" }}>Reporting exports</div>
                <div style={{ fontSize: "2.2vw", color: "#6B7280", lineHeight: 1.3 }}>PDF attendance sheets and financial summaries</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "2vw", alignItems: "flex-start" }}>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#C4763A", fontWeight: 500, minWidth: "3vw" }}>04</div>
              <div>
                <div style={{ fontSize: "2.4vw", fontWeight: 700, color: "#0D1B2A", marginBottom: "0.5vh" }}>Multi-club support</div>
                <div style={{ fontSize: "2.2vw", color: "#6B7280", lineHeight: 1.3 }}>District-level administration</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: "1px", backgroundColor: "#D1D5DB", alignSelf: "stretch" }} />

        <div style={{ width: "24vw", display: "flex", flexDirection: "column", justifyContent: "center", gap: "3vh" }}>
          <div style={{ border: "1px solid #D1D5DB", padding: "3vh 2.5vw" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#C4763A", marginBottom: "1vh" }}>Built on</div>
            <div style={{ fontSize: "2.4vw", fontWeight: 700, color: "#0D1B2A", marginBottom: "0.5vh" }}>Expo</div>
            <div style={{ fontSize: "2.2vw", color: "#6B7280" }}>iOS, Android, and Web</div>
          </div>
          <div style={{ backgroundColor: "#0D1B2A", padding: "3vh 2.5vw" }}>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#C4763A", marginBottom: "1vh" }}>Backend</div>
            <div style={{ fontSize: "2.4vw", fontWeight: 700, color: "#F8F7F4", marginBottom: "0.5vh" }}>Node.js API</div>
            <div style={{ fontSize: "2.2vw", color: "#9CA3AF" }}>OpenAPI contract-first, PostgreSQL</div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #D1D5DB", paddingTop: "2vh", marginTop: "3vh" }}>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#9CA3AF" }}>Roadmap / Adventurer Club Manager</div>
        <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "2.2vw", color: "#0D1B2A", fontWeight: 500 }}>04</div>
      </div>
    </div>
  );
}
