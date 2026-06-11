import type { AdventurerClassDef } from "../types";

const earlyBird: AdventurerClassDef = {
  id: "early-bird",
  name: "Early Bird",
  ageRange: "6–7 years",
  description: "Growing in service and friendship with God.",
  color: "#FCD34D",
  lessons: [
    {
      id: "lesson-early-bird-1",
      classId: "early-bird",
      weekNumber: 1,
      title: "Helping Hands",
      objective:
        "Teach children that helping others is a way of showing God's love.",
      memoryVerse: {
        text: "Carry each other's burdens, and in this way you will fulfill the law of Christ.",
        reference: "Galatians 6:2",
      },
      materials: [
        { name: "Helper Song lyrics sheet", quantity: "1 per child" },
        { name: "Puppets or felt board figures" },
        { name: "Bible" },
        { name: "Beanbags", quantity: "4–6" },
        { name: "Cones to mark relay course", quantity: "4" },
        { name: "Pre-cut hand shapes (construction paper)", quantity: "3 per child" },
        { name: "Stapler" },
        { name: "Crayons" },
        { name: "Pencils", quantity: "1 per child" },
        { name: "Challenge cards", quantity: "1 per child" },
        { name: "Memory verse cards", quantity: "1 per child" },
      ],
      sections: [
        {
          id: "eb1-intro",
          type: "introduction",
          title: "Helper Check-In",
          duration: "5 mins",
          instructions:
            "Start with the 'Helper Song'. Ask children: 'Who has helped someone this week?' Let a few share their stories. Explain that today we're learning how Jesus wants us to be helpers.",
          resources: ["Helper Song lyrics"],
        },
        {
          id: "eb1-bible",
          type: "bible_story",
          title: "Bible Story: The Good Samaritan",
          duration: "10 mins",
          instructions:
            "Tell the story of the Good Samaritan (Luke 10:25-37) using simple puppets or illustrations. Emphasize that the Samaritan stopped to help even when it was inconvenient. Ask: 'How can we be Good Samaritans at home? At school?'",
          resources: ["Puppets or felt board", "Bible"],
        },
        {
          id: "eb1-activity",
          type: "activity",
          title: "Helper Relay",
          duration: "10 mins",
          instructions:
            "Set up a simple relay where children carry a 'burden' (a beanbag) and pass it to the next person. Discuss how teamwork makes the burden lighter. Relate back to the Bible verse.",
          resources: ["Beanbags", "Cones to mark relay course"],
        },
        {
          id: "eb1-craft",
          type: "craft",
          title: "Helping Hands Booklet",
          duration: "15 mins",
          instructions: "Create a booklet of helping hands pledges.",
          craftName: "My Helping Hands Booklet",
          materials: [
            { name: "Pre-cut hand shapes (construction paper)", quantity: "3 per child" },
            { name: "Stapler" },
            { name: "Crayons" },
            { name: "Pencils", quantity: "1 per child" },
          ],
          steps: [
            "Trace your hand on three sheets of paper",
            "Cut out the hand shapes",
            "On each hand write one way you will help someone this week",
            "Staple the hands together into a booklet",
            "Decorate the cover with 'My Helping Hands'",
          ],
        },
        {
          id: "eb1-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Review memory verse together. Each child holds up their helping hands. Close with a prayer: 'Dear God, help our hands to do your work this week.' Send home a challenge card.",
          resources: ["Challenge cards", "Memory verse cards"],
        },
      ],
    },
    {
      id: "lesson-early-bird-2",
      classId: "early-bird",
      weekNumber: 2,
      title: "Sharing Is Caring",
      objective:
        "Discover that generosity reflects God's character and brings joy to giver and receiver.",
      memoryVerse: {
        text: "God loves a cheerful giver.",
        reference: "2 Corinthians 9:7",
      },
      materials: [
        { name: "Snack to share (fruit or crackers)" },
        { name: "Bible" },
        { name: "Small basket" },
        { name: "Paper bags", quantity: "1 per child" },
        { name: "Tissue paper (assorted colors)" },
        { name: "Stickers" },
        { name: "Markers" },
        { name: "Small treats or trinkets to fill bags" },
        { name: "Memory verse stickers", quantity: "1 per child" },
      ],
      sections: [
        {
          id: "eb2-intro",
          type: "introduction",
          title: "Sharing Snack",
          duration: "7 mins",
          instructions:
            "Bring a single snack and only give it to one child. Wait for reactions! Then ask: 'How did that feel?' Introduce sharing by dividing the snack among everyone. Ask: 'What changed when we shared?'",
          resources: ["Snack to share"],
        },
        {
          id: "eb2-bible",
          type: "bible_story",
          title: "Bible Story: Feeding 5,000",
          duration: "10 mins",
          instructions:
            "Tell the story of the boy who shared his lunch (John 6:1-13). Stress the boy's willingness to give what little he had. Ask: 'What might have happened if the boy had said no?' Discuss how one act of generosity became a miracle.",
          resources: ["Bible", "5 bread rolls and 2 fish cutouts"],
        },
        {
          id: "eb2-activity",
          type: "activity",
          title: "Sharing Circle",
          duration: "8 mins",
          instructions:
            "Place a basket of small items in the centre. Each child takes one item and gives it to another child with a kind word. Repeat two rounds. Debrief: 'Which felt better — receiving or giving? Why?'",
          resources: ["Small basket", "Assorted small items"],
        },
        {
          id: "eb2-craft",
          type: "craft",
          title: "Gift Bag for Someone Special",
          duration: "13 mins",
          instructions:
            "Children decorate a gift bag and fill it with a small treat to give to someone at home.",
          craftName: "Cheerful Giver Gift Bag",
          materials: [
            { name: "Paper bags", quantity: "1 per child" },
            { name: "Tissue paper (assorted colors)" },
            { name: "Stickers" },
            { name: "Markers" },
            { name: "Small treats or trinkets", quantity: "a few per child" },
          ],
          steps: [
            "Write 'With Love from [your name]' on the outside of the bag",
            "Decorate the bag with stickers and drawings",
            "Place tissue paper inside the bag",
            "Add the small treat or gift inside",
            "Fold the top of the bag and add a sticker to close it",
            "Decide who you will give it to and write their name",
          ],
        },
        {
          id: "eb2-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Each child holds their gift bag. Say the memory verse together twice — once quietly, once loudly. Close in prayer. Challenge: Deliver your gift bag before the next meeting and share what happened.",
          resources: ["Memory verse stickers"],
        },
      ],
    },
  ],
};

export default earlyBird;
