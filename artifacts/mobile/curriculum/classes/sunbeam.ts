import type { AdventurerClassDef } from "../types";

const sunbeam: AdventurerClassDef = {
  id: "sunbeam",
  name: "Sunbeam",
  ageRange: "8–9 years",
  description: "Shining God's light through kindness, character, and courage.",
  color: "#FCA5A5",
  lessons: [
    {
      id: "lesson-sunbeam-1",
      classId: "sunbeam",
      weekNumber: 1,
      title: "Kindness in Action",
      objective:
        "Understand that small acts of kindness reflect God's character and can change someone's day.",
      memoryVerse: {
        text: "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.",
        reference: "Ephesians 4:32",
      },
      materials: [
        { name: "Kindness scenario cards", quantity: "1 set per group" },
        { name: "Bible" },
        { name: "Ruth story booklet", quantity: "1 per child" },
        { name: "Colored paper strips (3 colors)", quantity: "3 per child" },
        { name: "Tape or stapler" },
        { name: "Markers" },
        { name: "Challenge log sheet", quantity: "1 per child" },
      ],
      sections: [
        {
          id: "sb1-intro",
          type: "introduction",
          title: "Kindness Check-In",
          duration: "5 mins",
          instructions:
            "Start with an energy check. Ask who received a kindness this week and who gave one. Discuss how small acts like smiling, sharing, or holding a door can impact someone's entire day. Introduce the theme of being a 'Sunshine' in someone's life.",
          resources: [],
        },
        {
          id: "sb1-bible",
          type: "bible_story",
          title: "Bible Story: Ruth and Naomi",
          duration: "12 mins",
          instructions:
            "Tell the story of Ruth's kindness to Naomi (Ruth 1–2). Highlight that Ruth chose to stay with Naomi even when she didn't have to. Discuss how this kindness changed both their lives. Ask: 'Have you ever had someone choose to be kind to you when they didn't have to?'",
          resources: ["Bible", "Ruth story booklet"],
        },
        {
          id: "sb1-activity",
          type: "activity",
          title: "Kindness Scavenger Hunt",
          duration: "10 mins",
          instructions:
            "Give children kindness scenario cards. For each scenario, they must find someone in the room and act out a kind response. Scenarios: someone dropped their books, someone is sitting alone, someone looks sad. Debrief: How did it feel to give/receive kindness?",
          resources: ["Kindness scenario cards"],
        },
        {
          id: "sb1-craft",
          type: "craft",
          title: "Kindness Chain",
          duration: "13 mins",
          instructions: "Create a paper chain of kindness acts.",
          craftName: "Kindness Chain",
          materials: [
            { name: "Colored paper strips (3 colors)", quantity: "3 per child" },
            { name: "Tape or stapler" },
            { name: "Markers" },
          ],
          steps: [
            "Write one act of kindness you will do at HOME on the first strip",
            "Write one act of kindness you will do at SCHOOL on the second strip",
            "Write one act of kindness you will do at CLUB on the third strip",
            "Link the strips into a chain",
            "Add to the chain each week as you complete acts of kindness",
          ],
        },
        {
          id: "sb1-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Hold up kindness chains. Challenge: Do one act of kindness before next meeting and report back. Say memory verse in pairs. Close with a prayer for courage to show kindness even when it's hard.",
          resources: ["Challenge log sheet"],
        },
      ],
    },
    {
      id: "lesson-sunbeam-2",
      classId: "sunbeam",
      weekNumber: 2,
      title: "Courage to Stand",
      objective:
        "Build courage to do what is right even when it is difficult or unpopular.",
      memoryVerse: {
        text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
        reference: "Joshua 1:9",
      },
      materials: [
        { name: "Blindfold", quantity: "1" },
        { name: "Obstacle course items (chairs, cones)" },
        { name: "Bible" },
        { name: "Daniel and the Lions Den picture cards" },
        { name: "Shield template (printed on cardstock)", quantity: "1 per child" },
        { name: "Scissors", quantity: "1 per child" },
        { name: "Markers" },
        { name: "Stickers" },
        { name: "Yarn or ribbon for handle", quantity: "30 cm per child" },
        { name: "Courage challenge cards", quantity: "1 per child" },
      ],
      sections: [
        {
          id: "sb2-intro",
          type: "introduction",
          title: "Trust Walk",
          duration: "8 mins",
          instructions:
            "Pair children. One is blindfolded and guided through a simple obstacle course by their partner's voice alone. Swap roles. Debrief: 'What helped you trust your partner? What does it feel like to trust someone you can't see?' Connect to trusting God.",
          resources: ["Blindfold", "Obstacle course items"],
        },
        {
          id: "sb2-bible",
          type: "bible_story",
          title: "Bible Story: Daniel in the Lions Den",
          duration: "12 mins",
          instructions:
            "Tell the story of Daniel (Daniel 6). Emphasise that Daniel prayed three times a day EVEN when it was made illegal. Ask: 'Have you ever been pressured to do something wrong? What did you do?' Discuss the difference between popularity and integrity.",
          resources: ["Bible", "Daniel and the Lions Den picture cards"],
        },
        {
          id: "sb2-activity",
          type: "activity",
          title: "Courage Scenarios",
          duration: "10 mins",
          instructions:
            "Read out real-life scenarios one at a time. Children vote: 'Courage needed? Yes or No?' Then discuss what a courageous response would look like. Scenarios: classmate being bullied, friend pressuring you to lie, chance to stand up for someone unpopular.",
          resources: ["Scenario cards"],
        },
        {
          id: "sb2-craft",
          type: "craft",
          title: "Shield of Courage",
          duration: "12 mins",
          instructions: "Build a personalised shield representing courage in faith.",
          craftName: "My Courage Shield",
          materials: [
            { name: "Shield template (cardstock)", quantity: "1 per child" },
            { name: "Scissors", quantity: "1 per child" },
            { name: "Markers" },
            { name: "Stickers" },
            { name: "Yarn or ribbon for handle", quantity: "30 cm per child" },
          ],
          steps: [
            "Cut out the shield template",
            "Divide the shield into 4 sections",
            "In section 1: draw a situation that requires courage",
            "In section 2: write the memory verse",
            "In section 3: write the name of someone who shows you courage",
            "In section 4: write one courageous thing you will do this week",
            "Decorate the border with stickers",
            "Thread yarn through the handle holes",
          ],
        },
        {
          id: "sb2-closing",
          type: "closing",
          title: "Commissioning",
          duration: "5 mins",
          instructions:
            "Children hold their shields. Leader says: 'Courage is not the absence of fear — it's moving forward despite it.' Each child says the memory verse aloud. Close with a prayer for courage. Hand out challenge cards.",
          resources: ["Courage challenge cards"],
        },
      ],
    },
  ],
};

export default sunbeam;
