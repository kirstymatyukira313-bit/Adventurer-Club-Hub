import type { AdventurerClassDef } from "../types";

const busyBee: AdventurerClassDef = {
  id: "busy-bee",
  name: "Busy Bee",
  ageRange: "7–8 years",
  description: "Exploring God's world and growing as curious disciples.",
  color: "#6EE7B7",
  lessons: [
    {
      id: "lesson-busy-bee-1",
      classId: "busy-bee",
      weekNumber: 1,
      title: "God's Amazing World",
      objective:
        "Explore God's creation and develop a sense of wonder and stewardship for the natural world.",
      memoryVerse: {
        text: "The earth is the Lord's, and everything in it.",
        reference: "Psalm 24:1",
      },
      materials: [
        { name: "Collection of natural objects (leaves, rocks, shells, flowers)" },
        { name: "Magnifying glasses", quantity: "1 per pair" },
        { name: "Bible" },
        { name: "Creation visual chart" },
        { name: "Nature walk checklists", quantity: "1 per child" },
        { name: "Pencils", quantity: "1 per child" },
        { name: "Blank booklet (folded paper)", quantity: "1 per child" },
        { name: "Watercolor paints and brushes" },
        { name: "Glue" },
        { name: "Pressed leaves or flowers" },
        { name: "Crayons" },
        { name: "Memory verse banner" },
        { name: "Pledge cards for earth care", quantity: "1 per child" },
      ],
      sections: [
        {
          id: "bb1-intro",
          type: "introduction",
          title: "Creation Discovery",
          duration: "5 mins",
          instructions:
            "Bring in natural objects (leaves, rocks, shells, flowers). Let children examine them and share what they notice. Ask: 'Who made all of these things?' Build excitement about exploring God's world.",
          resources: ["Collection of natural objects", "Magnifying glasses"],
        },
        {
          id: "bb1-bible",
          type: "bible_story",
          title: "Bible Story: Creation",
          duration: "12 mins",
          instructions:
            "Walk through Genesis 1 creation story day by day. Use actions for each day (sun - arms wide, water - wave motion, animals - act out). Have children call out 'And it was GOOD!' after each day.",
          resources: ["Bible", "Creation visual chart"],
        },
        {
          id: "bb1-activity",
          type: "activity",
          title: "Nature Walk",
          duration: "15 mins",
          instructions:
            "Take children on a short walk outside (or use window observation if weather is bad). Give each child a checklist of things to find: something blue, something rough, something that moves, a living thing, something beautiful. Discuss findings when back inside.",
          resources: ["Nature walk checklists", "Pencils"],
        },
        {
          id: "bb1-craft",
          type: "craft",
          title: "Nature Journal",
          duration: "12 mins",
          instructions: "Create a personal nature journal.",
          craftName: "My Creation Journal",
          materials: [
            { name: "Blank booklet (folded paper)", quantity: "1 per child" },
            { name: "Watercolor paints and brushes" },
            { name: "Glue" },
            { name: "Pressed leaves or flowers" },
            { name: "Crayons" },
          ],
          steps: [
            "Write your name and 'My Creation Journal' on the cover",
            "Draw or paint your favourite thing from nature on page 1",
            "Glue a pressed leaf or flower on page 2",
            "Write or draw what you want to learn about God's world",
            "Decorate with creation-themed borders",
          ],
        },
        {
          id: "bb1-closing",
          type: "closing",
          title: "Closing",
          duration: "6 mins",
          instructions:
            "Sit in a circle outdoors if possible. Say the memory verse together. Ask: 'How can we take care of God's world?' Each child shares one idea. Close with a prayer of thanks for God's creation.",
          resources: ["Memory verse banner", "Pledge cards for earth care"],
        },
      ],
    },
    {
      id: "lesson-busy-bee-2",
      classId: "busy-bee",
      weekNumber: 2,
      title: "Taking Care of Creation",
      objective:
        "Understand our role as stewards of the earth and take practical steps to care for God's creation.",
      memoryVerse: {
        text: "The Lord God took the man and put him in the Garden of Eden to work it and take care of it.",
        reference: "Genesis 2:15",
      },
      materials: [
        { name: "Recyclable items (bottles, cans, paper)" },
        { name: "Recycling bins or labeled boxes", quantity: "3" },
        { name: "Bible" },
        { name: "Small plant pots", quantity: "1 per child" },
        { name: "Potting soil" },
        { name: "Seeds (sunflower or bean)", quantity: "2–3 per child" },
        { name: "Watering can" },
        { name: "Marker pens" },
        { name: "Stickers (leaf/flower themed)" },
        { name: "Stewardship pledge cards", quantity: "1 per child" },
      ],
      sections: [
        {
          id: "bb2-intro",
          type: "introduction",
          title: "Sorting Challenge",
          duration: "7 mins",
          instructions:
            "Spread recyclable items on a table. Challenge children to sort them into bins: paper, plastic, and glass/metal. Time them! Discuss: 'Why does it matter what we do with rubbish?' Introduce the concept of stewardship.",
          resources: ["Recyclable items", "Recycling bins or labeled boxes"],
        },
        {
          id: "bb2-bible",
          type: "bible_story",
          title: "Bible Story: The Garden of Eden",
          duration: "10 mins",
          instructions:
            "Read Genesis 2:15. Explain that God gave Adam and Eve the job of caring for the garden. Ask: 'What does it mean to work it and take care of it?' Connect to modern environmental stewardship. 'We are still gardeners of God\\'s earth!'",
          resources: ["Bible"],
        },
        {
          id: "bb2-activity",
          type: "activity",
          title: "Clean Up Relay",
          duration: "10 mins",
          instructions:
            "Scatter paper 'litter' around the room. Teams compete to pick it up and sort it correctly in one minute. Discuss: 'What would our neighbourhood look like if everyone did this?' Connect to being responsible stewards.",
          resources: ["Paper litter pieces", "Sorting bins"],
        },
        {
          id: "bb2-craft",
          type: "craft",
          title: "Seed Planting",
          duration: "15 mins",
          instructions:
            "Each child plants seeds in a small pot to take home and nurture as an act of stewardship.",
          craftName: "My Stewardship Garden Pot",
          materials: [
            { name: "Small plant pots", quantity: "1 per child" },
            { name: "Potting soil" },
            { name: "Seeds (sunflower or bean)", quantity: "2–3 per child" },
            { name: "Watering can" },
            { name: "Marker pens" },
            { name: "Stickers (leaf/flower themed)" },
          ],
          steps: [
            "Write your name on the pot",
            "Decorate the pot with leaf/flower stickers",
            "Fill the pot 3/4 full with potting soil",
            "Push 2 seeds about 1 cm deep into the soil",
            "Gently water the soil until damp",
            "Place in a sunny spot at home and water every 2 days",
            "Watch God's creation grow!",
          ],
        },
        {
          id: "bb2-closing",
          type: "closing",
          title: "Stewardship Pledge",
          duration: "6 mins",
          instructions:
            "Children hold their seed pots. Each shares one way they will care for creation this week. Say the memory verse together. Close with a prayer: 'Lord, help us care for your world as faithful stewards.' Send home pledge cards.",
          resources: ["Stewardship pledge cards"],
        },
      ],
    },
  ],
};

export default busyBee;
