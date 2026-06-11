import type { AdventurerClassDef } from "../types";

const builder: AdventurerClassDef = {
  id: "builder",
  name: "Builder",
  ageRange: "9–10 years",
  description: "Constructing a life of faith with solid biblical foundations.",
  color: "#93C5FD",
  lessons: [
    {
      id: "lesson-builder-1",
      classId: "builder",
      weekNumber: 1,
      title: "Building on Faith",
      objective:
        "Discover that a strong faith — like a strong building — requires a solid foundation in God's Word.",
      memoryVerse: {
        text: "As for me and my household, we will serve the Lord.",
        reference: "Joshua 24:15",
      },
      materials: [
        { name: "Building blocks or playing cards", quantity: "2 sets" },
        { name: "Timer" },
        { name: "Bible" },
        { name: "Sand tray" },
        { name: "Firm board (plywood or hardcover book)" },
        { name: "Blocks for demonstration", quantity: "6" },
        { name: "Faith Foundation worksheets", quantity: "1 per child" },
        { name: "Colored pencils", quantity: "1 set per child" },
        { name: "House template (printed)", quantity: "1 per child" },
        { name: "Scissors", quantity: "1 per child" },
        { name: "Glue sticks", quantity: "1 per child" },
        { name: "Markers" },
        { name: "Construction paper bricks" },
      ],
      sections: [
        {
          id: "bu1-intro",
          type: "introduction",
          title: "Building Challenge",
          duration: "8 mins",
          instructions:
            "Give teams blocks or cards to build the tallest structure in 3 minutes. After the challenge, discuss what made some structures fall. Ask: 'What makes a building strong?' Connect to spiritual life: 'What makes our faith strong?'",
          resources: ["Building blocks or playing cards", "Timer"],
        },
        {
          id: "bu1-bible",
          type: "bible_story",
          title: "Bible Story: Wise and Foolish Builders",
          duration: "10 mins",
          instructions:
            "Read Matthew 7:24-27. Use two contrasting demonstrations: build one structure on a tray of sand, one on a firm board. Gently shake both and observe. Discuss what 'building on the rock' means practically: prayer, Bible study, worship, community.",
          resources: ["Bible", "Sand tray", "Firm board", "Blocks"],
        },
        {
          id: "bu1-activity",
          type: "activity",
          title: "Faith Foundation Survey",
          duration: "10 mins",
          instructions:
            "Give children a 'Faith Foundation' worksheet with four bricks: Prayer, Bible Reading, Church Attendance, Helping Others. Children color each brick based on how strong they are in that area. Discuss as a group — no judgment, just honest reflection.",
          resources: ["Faith Foundation worksheets", "Colored pencils"],
        },
        {
          id: "bu1-craft",
          type: "craft",
          title: "My Faith House",
          duration: "12 mins",
          instructions: "Build a personal faith house out of cardstock.",
          craftName: "My Faith House",
          materials: [
            { name: "House template (printed)", quantity: "1 per child" },
            { name: "Scissors", quantity: "1 per child" },
            { name: "Glue sticks", quantity: "1 per child" },
            { name: "Markers" },
            { name: "Construction paper bricks" },
          ],
          steps: [
            "Cut out the house template",
            "Write Joshua 24:15 on the foundation",
            "On each 'wall brick' write one thing that builds your faith",
            "Decorate the house to look like your own",
            "Write your family name on the door",
            "Display at home as a reminder",
          ],
        },
        {
          id: "bu1-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Review memory verse — try saying it from memory. Share faith houses. Close with a declaration prayer: children hold their houses and say 'As for me and my house, we will serve the Lord!' Dismiss with a team handshake.",
          resources: [],
        },
      ],
    },
    {
      id: "lesson-builder-2",
      classId: "builder",
      weekNumber: 2,
      title: "The Armour of God",
      objective:
        "Learn the pieces of the Armour of God and understand how each one equips us for daily spiritual life.",
      memoryVerse: {
        text: "Put on the full armour of God, so that you can take your stand against the devil's schemes.",
        reference: "Ephesians 6:11",
      },
      materials: [
        { name: "Armour of God visual chart" },
        { name: "Bible" },
        { name: "Armour template (printed)", quantity: "1 per child" },
        { name: "Brass fasteners (brads)", quantity: "6 per child" },
        { name: "Scissors", quantity: "1 per child" },
        { name: "Silver and gold markers" },
        { name: "Foam stickers" },
        { name: "Armour of God review cards", quantity: "1 per child" },
        { name: "String or yarn for hanging", quantity: "30 cm per child" },
      ],
      sections: [
        {
          id: "bu2-intro",
          type: "introduction",
          title: "Armour Inspection",
          duration: "7 mins",
          instructions:
            "Show pictures of a medieval knight. Ask: 'Why did knights wear armour? What happens if a piece is missing?' Introduce the idea that Paul wrote about spiritual armour. Distribute the Armour of God chart and let children identify the pieces.",
          resources: ["Armour of God visual chart"],
        },
        {
          id: "bu2-bible",
          type: "bible_story",
          title: "Bible Study: Ephesians 6:10-18",
          duration: "15 mins",
          instructions:
            "Read Ephesians 6:10-18 piece by piece. For each piece of armour, pause and discuss: (1) Belt of Truth — honesty and knowing God's Word; (2) Breastplate of Righteousness — living right; (3) Shoes of Peace — being ready to share the Gospel; (4) Shield of Faith — trusting God; (5) Helmet of Salvation — assurance of God's grace; (6) Sword of the Spirit — using Scripture. Have children mime putting on each piece.",
          resources: ["Bible"],
        },
        {
          id: "bu2-activity",
          type: "activity",
          title: "Armour Relay",
          duration: "10 mins",
          instructions:
            "Divide into two teams. Place 6 armour name cards face down across the room. Teams relay: run, flip a card, name the piece and its spiritual meaning, run back, tag next person. First team to correctly identify all 6 pieces wins. Discuss tricky ones as a group.",
          resources: ["Armour name cards"],
        },
        {
          id: "bu2-craft",
          type: "craft",
          title: "Paper Armour Set",
          duration: "13 mins",
          instructions:
            "Children assemble a paper armour figure with labelled pieces to take home as a reminder.",
          craftName: "Armour of God Figure",
          materials: [
            { name: "Armour template (printed)", quantity: "1 per child" },
            { name: "Brass fasteners (brads)", quantity: "6 per child" },
            { name: "Scissors", quantity: "1 per child" },
            { name: "Silver and gold markers" },
            { name: "Foam stickers" },
            { name: "String or yarn for hanging", quantity: "30 cm per child" },
          ],
          steps: [
            "Cut out all armour pieces carefully",
            "Color each piece with silver/gold markers",
            "On the back of each piece write its spiritual meaning",
            "Use brass fasteners to join the pieces to the body figure",
            "Decorate with foam stickers",
            "Punch a hole at the top and thread yarn for hanging",
            "Review all 6 pieces from memory",
          ],
        },
        {
          id: "bu2-closing",
          type: "closing",
          title: "Suiting Up Prayer",
          duration: "5 mins",
          instructions:
            "Lead the group through a 'suiting up' prayer, pausing at each piece of armour to ask God's help in that area. Children mime putting on each piece as they pray. Hand out review cards. Challenge: Recite all 6 pieces to a parent by next meeting.",
          resources: ["Armour of God review cards"],
        },
      ],
    },
  ],
};

export default builder;
