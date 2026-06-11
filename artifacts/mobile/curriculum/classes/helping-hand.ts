import type { AdventurerClassDef } from "../types";

const helpingHand: AdventurerClassDef = {
  id: "helping-hand",
  name: "Helping Hand",
  ageRange: "10–11 years",
  description: "Servant leadership and making a lasting difference for Christ.",
  color: "#C4B5FD",
  lessons: [
    {
      id: "lesson-helping-hand-1",
      classId: "helping-hand",
      weekNumber: 1,
      title: "Leading with Love",
      objective:
        "Explore servant leadership as modeled by Jesus and discover how young leaders can make a difference.",
      memoryVerse: {
        text: "Whoever wants to become great among you must be your servant.",
        reference: "Matthew 20:26",
      },
      materials: [
        { name: "Leadership scenario cards", quantity: "1 set" },
        { name: "Voting paddles or hand signals" },
        { name: "Bible" },
        { name: "Basin and towel for demonstration (optional)" },
        { name: "Planning sheets", quantity: "1 per group" },
        { name: "Pencils", quantity: "1 per child" },
        { name: "Cardstock pledge template", quantity: "1 per child" },
        { name: "Markers" },
        { name: "Stickers for decoration" },
        { name: "Laminator (optional)" },
        { name: "Commissioning prayer cards", quantity: "1 per child" },
      ],
      sections: [
        {
          id: "hh1-intro",
          type: "introduction",
          title: "Leadership Quiz",
          duration: "8 mins",
          instructions:
            "Run a fun quiz: 'Leader or Not?' Present scenarios and children vote thumbs up/down if it shows good leadership. Include scenarios that subvert expectations (e.g., 'A leader who sweeps the floor after the meeting' — TRUE great leader). Discuss what real leadership looks like.",
          resources: ["Scenario cards", "Voting paddles or hand signals"],
        },
        {
          id: "hh1-bible",
          type: "bible_story",
          title: "Jesus Washes Feet",
          duration: "12 mins",
          instructions:
            "Read John 13:1-17. Set the scene: the disciples expected the servant to wash feet, not Jesus. Discuss the shock of the disciples. Ask: 'What do you think the disciples felt when Jesus washed their feet?' Connect to today: 'What is the most humble service you could do in your school or home?'",
          resources: ["Bible", "Basin and towel for demonstration (optional)"],
        },
        {
          id: "hh1-activity",
          type: "activity",
          title: "Servant Leader Project Planning",
          duration: "15 mins",
          instructions:
            "In small groups, brainstorm and plan a simple service project for next week's club meeting or community. Examples: cleaning up the church grounds, creating encouraging cards for elderly members, preparing a snack for younger Adventurers. Groups present their ideas.",
          resources: ["Planning sheets", "Pencils"],
        },
        {
          id: "hh1-craft",
          type: "craft",
          title: "Servant Leader Pledge Card",
          duration: "10 mins",
          instructions: "Create a personal pledge to serve others this week.",
          craftName: "My Servant Leader Pledge",
          materials: [
            { name: "Cardstock pledge template", quantity: "1 per child" },
            { name: "Markers" },
            { name: "Stickers for decoration" },
          ],
          steps: [
            "Write your name at the top",
            "Complete the sentence: 'This week I will serve by...'",
            "Write the memory verse on the back",
            "Decorate with meaningful symbols",
            "Sign and date your pledge",
            "Keep it somewhere visible at home",
          ],
        },
        {
          id: "hh1-closing",
          type: "closing",
          title: "Closing & Commission",
          duration: "5 mins",
          instructions:
            "Stand in a circle. Each child reads their pledge aloud. Affirm each pledge with group applause. Close with a commissioning prayer: 'Lord, send us out as servant leaders this week.' Give a final challenge: 'Find one person to serve before we meet again.'",
          resources: ["Commissioning prayer card"],
        },
      ],
    },
    {
      id: "lesson-helping-hand-2",
      classId: "helping-hand",
      weekNumber: 2,
      title: "Speaking Up for Others",
      objective:
        "Understand the biblical call to speak up for the voiceless and take bold action on behalf of those in need.",
      memoryVerse: {
        text: "Speak up for those who cannot speak for themselves, for the rights of all who are destitute.",
        reference: "Proverbs 31:8",
      },
      materials: [
        { name: "News headlines (printed, child-appropriate)", quantity: "5–6" },
        { name: "Bible" },
        { name: "Esther story overview cards" },
        { name: "Advocacy planning templates", quantity: "1 per group" },
        { name: "Large paper or whiteboard" },
        { name: "Markers (washable)" },
        { name: "A3 poster card", quantity: "1 per child" },
        { name: "Colored markers" },
        { name: "Stickers and stamps" },
        { name: "Commitment card", quantity: "1 per child" },
      ],
      sections: [
        {
          id: "hh2-intro",
          type: "introduction",
          title: "Headlines Discussion",
          duration: "8 mins",
          instructions:
            "Show 5–6 child-appropriate news headlines about people who need help (hunger, bullying, refugees, loneliness). Ask: 'What could someone do about this?' Introduce the idea of advocacy — speaking up for others. 'Today we explore what God says about this.'",
          resources: ["News headlines (printed)"],
        },
        {
          id: "hh2-bible",
          type: "bible_story",
          title: "Bible Story: Esther",
          duration: "15 mins",
          instructions:
            "Tell the story of Esther (Esther 4\u20135). Focus on Mordecai's challenge: 'Who knows but that you have come to your royal position for such a time as this?' Discuss how Esther risked her comfort for others. Ask: 'What royal position (gifts, access, influence) do you have that you could use for others?'",
          resources: ["Bible", "Esther story overview cards"],
        },
        {
          id: "hh2-activity",
          type: "activity",
          title: "Advocacy Planning Session",
          duration: "15 mins",
          instructions:
            "In small groups, identify one local need (at school, church, or in the community). Using the planning template, outline: (1) What is the need? (2) Who is affected? (3) What can WE do? (4) Who can help us? Groups present their plans. Vote on one to actually carry out as a club project.",
          resources: ["Advocacy planning templates", "Large paper or whiteboard", "Markers"],
        },
        {
          id: "hh2-craft",
          type: "craft",
          title: "Advocacy Poster",
          duration: "10 mins",
          instructions:
            "Create a bold poster advocating for a cause they care about.",
          craftName: "Speak Up Poster",
          materials: [
            { name: "A3 poster card", quantity: "1 per child" },
            { name: "Colored markers" },
            { name: "Stickers and stamps" },
          ],
          steps: [
            "Choose the cause you feel most strongly about",
            "Write a bold headline at the top (e.g., 'Every Child Deserves Kindness')",
            "Draw or decorate to illustrate the cause",
            "Write the memory verse somewhere on the poster",
            "Add a call to action: 'You can help by...'",
            "Sign your poster as a personal commitment",
          ],
        },
        {
          id: "hh2-closing",
          type: "closing",
          title: "Commissioning for Action",
          duration: "7 mins",
          instructions:
            "Children display their posters. Leader affirms: 'You are not too young to make a difference.' Read Proverbs 31:8 together one final time. Close with an intercessory prayer for the people each child has identified. Distribute commitment cards — a written pledge to take one action this week.",
          resources: ["Commitment card"],
        },
      ],
    },
  ],
};

export default helpingHand;
