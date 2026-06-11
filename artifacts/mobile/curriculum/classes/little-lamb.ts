import type { AdventurerClassDef } from "../types";

const littleLamb: AdventurerClassDef = {
  id: "little-lamb",
  name: "Little Lamb",
  ageRange: "5–6 years",
  description: "Foundational faith lessons for our youngest Adventurers.",
  color: "#F9A8D4",
  lessons: [
    {
      id: "lesson-little-lamb-1",
      classId: "little-lamb",
      weekNumber: 1,
      title: "God Made Me Special",
      objective:
        "Help children understand that God created each of them uniquely and loves them dearly.",
      memoryVerse: {
        text: "I praise you because I am fearfully and wonderfully made.",
        reference: "Psalm 139:14",
      },
      materials: [
        { name: "Name tags" },
        { name: "Small mirrors", quantity: "1 per child" },
        { name: "Heart stickers" },
        { name: "Markers" },
        { name: "Paper plates", quantity: "1 per child" },
        { name: "Crayons" },
        { name: "Yarn", quantity: "30 cm per child" },
        { name: "Stickers (assorted)" },
        { name: "Handout with memory verse", quantity: "1 per child" },
      ],
      sections: [
        {
          id: "ll1-intro",
          type: "introduction",
          title: "Welcome Circle",
          duration: "5 mins",
          instructions:
            "Gather children in a circle. Ask each child to share one thing they love about themselves. Celebrate each response enthusiastically. Tell them that God made each of them special and unique.",
          resources: ["Name tags", "Welcome song"],
        },
        {
          id: "ll1-bible",
          type: "bible_story",
          title: "Bible Story",
          duration: "10 mins",
          instructions:
            "Open your Bible to Psalm 139. Tell the story of how God knew us before we were born. Use simple language: 'Before you were born, God was already thinking about you!' Show pictures of different children from around the world to illustrate God's creativity.",
          resources: ["Bible", "Picture cards of children"],
        },
        {
          id: "ll1-activity",
          type: "activity",
          title: "Mirror Activity",
          duration: "10 mins",
          instructions:
            "Give each child a small mirror. Ask them to look at themselves and name something special they see. Write their names on heart stickers and place them on their chests. Sing 'Jesus Loves Me' together.",
          resources: ["Small mirrors", "Heart stickers", "Markers"],
        },
        {
          id: "ll1-craft",
          type: "craft",
          title: "Me Frame Craft",
          duration: "15 mins",
          instructions: "Help children create a 'God Made Me' picture frame.",
          craftName: "God Made Me Picture Frame",
          materials: [
            { name: "Paper plates", quantity: "1 per child" },
            { name: "Crayons" },
            { name: "Stickers" },
            { name: "Yarn for hanging", quantity: "30 cm per child" },
          ],
          steps: [
            "Decorate the paper plate edge with crayons and stickers",
            "Write 'God Made Me Special' around the top",
            "Draw or paste a photo of yourself in the center",
            "Punch a hole at the top and thread yarn for hanging",
            "Take it home to remind yourself how special you are",
          ],
        },
        {
          id: "ll1-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Gather children together. Review the memory verse. Ask each child to repeat: 'I am special because God made me!' Close with a prayer thanking God for making us unique. Give a sticker to each child.",
          resources: ["Stickers", "Handout with memory verse"],
        },
      ],
    },
    {
      id: "lesson-little-lamb-2",
      classId: "little-lamb",
      weekNumber: 2,
      title: "God Loves Everyone",
      objective:
        "Help children grasp that God's love has no limits and reaches every person in the world.",
      memoryVerse: {
        text: "For God so loved the world that he gave his one and only Son.",
        reference: "John 3:16",
      },
      materials: [
        { name: "Globe or world map" },
        { name: "Heart cutouts", quantity: "1 per child" },
        { name: "Crayons or markers" },
        { name: "Construction paper (red and pink)" },
        { name: "Scissors", quantity: "1 per child" },
        { name: "Glue sticks", quantity: "1 per child" },
        { name: "Memory verse cards", quantity: "1 per child" },
      ],
      sections: [
        {
          id: "ll2-intro",
          type: "introduction",
          title: "World of Friends",
          duration: "5 mins",
          instructions:
            "Show a globe or world map. Point to different countries and say, 'God loves children here… and here… and here!' Ask children: 'Do you think God loves children who speak a different language?' Affirm that God loves EVERYONE.",
          resources: ["Globe or world map"],
        },
        {
          id: "ll2-bible",
          type: "bible_story",
          title: "Bible Story: Zacchaeus",
          duration: "10 mins",
          instructions:
            "Tell the story of Zacchaeus (Luke 19:1-10). Use simple actions: stand on tiptoes for being short, climb a pretend tree. Emphasise that Jesus chose to visit Zacchaeus even when others didn't like him. 'Jesus loves you even when you make mistakes!'",
          resources: ["Bible", "Felt board figures or simple drawings"],
        },
        {
          id: "ll2-activity",
          type: "activity",
          title: "Heart Toss",
          duration: "8 mins",
          instructions:
            "Give each child a large heart cutout. Call out names of people (Mum, Dad, teacher, the child next to you) and children point their heart toward them. Discuss: 'God's love is like a heart that can point to everyone at the same time!'",
          resources: ["Large heart cutouts per child"],
        },
        {
          id: "ll2-craft",
          type: "craft",
          title: "Love the World Collage",
          duration: "15 mins",
          instructions: "Create a world-love collage to take home.",
          craftName: "God Loves the World Collage",
          materials: [
            { name: "Construction paper", quantity: "1 sheet per child" },
            { name: "Heart cutouts (various sizes and colors)" },
            { name: "Crayons or markers" },
            { name: "Glue sticks", quantity: "1 per child" },
          ],
          steps: [
            "Draw a simple circle for the world in the centre of your paper",
            "Color the world with blue (water) and green (land)",
            "Glue colourful hearts all around and on top of the world",
            "Write 'God Loves Everyone' at the top",
            "Draw yourself in one corner",
            "Write your name and take it home",
          ],
        },
        {
          id: "ll2-closing",
          type: "closing",
          title: "Closing Circle",
          duration: "5 mins",
          instructions:
            "Sit in a circle. Pass a 'heart' bean bag around. Each child says the name of someone they will show love to this week. Say the memory verse together. Close with a simple prayer: 'Dear God, thank you for loving me. Help me love others too.'",
          resources: ["Heart bean bag", "Memory verse cards"],
        },
      ],
    },
  ],
};

export default littleLamb;
