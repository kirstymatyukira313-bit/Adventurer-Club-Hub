import type { AdventurerClassDef } from "../types";

const littleLamb: AdventurerClassDef = {
  id: "little-lamb",
  name: "Little Lamb",
  ageRange: "5–6 years",
  description: "Foundational faith lessons for our youngest Adventurers.",
  color: "#F9A8D4",
  lessons: [
    {
      id: "ll-gods-plan-to-save-me",
      classId: "little-lamb",
      weekNumber: 1,
      title: "God's Plan to Save Me",
      objective:
        "Help children discover that God created the world in six days and rested on the Sabbath, and that they are part of His wonderful plan.",
      memoryVerse: {
        text: "In the beginning God created the heavens and the earth.",
        reference: "Genesis 1:1",
      },
      materials: [
        { name: "Creation story chart or lapbook template", quantity: "1 per child" },
        { name: "Crayons or coloured pencils", quantity: "1 set per child" },
        { name: "Bible with pictures" },
        { name: "Picture cards: animals, people, Sabbath" },
      ],
      sections: [
        {
          id: "ll-gpsm-intro",
          type: "introduction",
          title: "Welcome & Pledge",
          duration: "5 mins",
          instructions:
            "Gather children together. Recite the Adventurer Pledge together: 'Because Jesus loves me, I will always do my best.' Ask: 'Who made you? Who made the sun and the animals?' Build excitement about exploring the Creation story.",
          resources: ["Adventurer Pledge display card"],
        },
        {
          id: "ll-gpsm-bible",
          type: "bible_story",
          title: "The Days of Creation",
          duration: "10 mins",
          instructions:
            "Open your Bible to Genesis 1. Walk through each day of Creation with actions: Day 1 – light (open hands wide), Day 2 – sky (arms up), Day 3 – plants (grow up slowly), Day 4 – sun and moon (make circles), Day 5 – fish and birds (swim and flap), Day 6 – animals and people (roar then stand tall), Day 7 – Sabbath rest (hands together, close eyes). Have children call out 'God said it was GOOD!' after each day.",
          resources: ["Bible", "Creation visual chart"],
        },
        {
          id: "ll-gpsm-activity",
          type: "activity",
          title: "Tell the Creation Story",
          duration: "8 mins",
          instructions:
            "Show picture cards of animals, people, and the Sabbath one by one. Ask a child to pick a card and tell the adult what they know about that day. Encourage each child to tell at least one creation story in their own words: creating animals, creating people, or creating the Sabbath.",
          resources: ["Picture cards: animals, people, Sabbath"],
        },
        {
          id: "ll-gpsm-craft",
          type: "craft",
          title: "Creation Story Chart",
          duration: "15 mins",
          instructions:
            "Children colour in the Creation chart or lapbook, one panel for each day of creation.",
          craftName: "My Creation Colour Chart",
          materials: [
            { name: "Creation story chart or lapbook template", quantity: "1 per child" },
            { name: "Crayons or coloured pencils", quantity: "1 set per child" },
          ],
          steps: [
            "Write your name on the front of the chart",
            "Colour the Day 1 panel: light and darkness",
            "Colour the Day 2 panel: sky and water",
            "Colour the Day 3 panel: land, sea, and plants",
            "Colour the Day 4 panel: sun, moon, and stars",
            "Colour the Day 5 panel: fish and birds",
            "Colour the Day 6 panel: animals and people",
            "Colour the Day 7 panel: rest and Sabbath",
          ],
        },
        {
          id: "ll-gpsm-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Say the memory verse together: 'In the beginning God created the heavens and the earth. Genesis 1:1.' Ask: 'What is YOUR favourite day of creation?' Let each child answer. Then ask them to go home and ask a parent or guardian what THEIR favourite day of creation is. Close with a thank-you prayer.",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "ll-gods-message-to-me",
      classId: "little-lamb",
      weekNumber: 2,
      title: "God's Message to Me",
      objective:
        "Help children understand that Jesus is their best friend and that He grew up just like them — learning, helping, and obeying.",
      memoryVerse: {
        text: "Jesus grew in wisdom and stature, and in favour with God and man.",
        reference: "Luke 2:52",
      },
      materials: [
        { name: "Age-appropriate book about Jesus" },
        { name: "Song sheet: 'Jesus Loves Me' or 'What a Friend We Have in Jesus'" },
        { name: "Large paper for hand-tracing", quantity: "1 sheet per pair" },
        { name: "Crayons or markers" },
        { name: "Jesus story picture cards" },
      ],
      sections: [
        {
          id: "ll-gmtm-intro",
          type: "introduction",
          title: "Jesus Check-In",
          duration: "5 mins",
          instructions:
            "Ask children: 'Who is your best friend? What do you love about them?' Share a few answers. Then say: 'Today we're going to learn about someone who wants to be YOUR best friend — His name is Jesus!'",
          resources: [],
        },
        {
          id: "ll-gmtm-bible",
          type: "bible_story",
          title: "Jesus: Our Friend",
          duration: "12 mins",
          instructions:
            "Read or tell from an age-appropriate book about Jesus. Cover key points: Jesus loved children (Mark 10:14), He obeyed His parents (Luke 2:51), He grew up just like us in wisdom and strength. Ask: 'How did Jesus show that He was a good friend?' Use Jesus story picture cards to help children visualise each moment.",
          resources: ["Age-appropriate book about Jesus", "Jesus story picture cards"],
        },
        {
          id: "ll-gmtm-activity",
          type: "activity",
          title: "Friendship Song & Game",
          duration: "10 mins",
          instructions:
            "Sing 'Jesus Loves Me' or 'What a Friend We Have in Jesus' together. Then play a friendship name game: stand in a circle, each child says the name of someone Jesus loves — they can name themselves, a friend, a sibling. Encourage everyone to be included.",
          resources: ["Song sheet"],
        },
        {
          id: "ll-gmtm-craft",
          type: "craft",
          title: "Friend Hands Craft",
          duration: "13 mins",
          instructions:
            "Children trace their hand and a friend's hand on paper, then colour and decorate them.",
          craftName: "Me and My Friend Hands",
          materials: [
            { name: "Large paper", quantity: "1 sheet per pair" },
            { name: "Crayons or markers" },
          ],
          steps: [
            "Pair up with a friend",
            "Trace YOUR hand on the left side of the paper",
            "Trace your FRIEND'S hand on the right side",
            "Write your names under each hand",
            "Colour and decorate both hands",
            "Write 'Jesus is our friend too!' at the top",
          ],
        },
        {
          id: "ll-gmtm-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Say the memory verse together. Ask: 'How can you be a friend like Jesus this week?' Each child shares one idea. Close with a simple prayer: 'Dear Jesus, thank you for being my friend. Help me be a friend to others too. Amen.'",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "ll-gods-power-in-my-life",
      classId: "little-lamb",
      weekNumber: 3,
      title: "God's Power in My Life",
      objective:
        "Help children experience God's power through daily family worship and through learning about Bible friends.",
      memoryVerse: {
        text: "Your word is a lamp for my feet, a light on my path.",
        reference: "Psalm 119:105",
      },
      materials: [
        { name: "Family Worship Record sheet", quantity: "1 per child" },
        { name: "Age-appropriate book about Bible friends" },
        { name: "Song sheet about Bible friends" },
        { name: "Craft supplies for Bible friend craft (paper, crayons, glue)" },
        { name: "Stickers for worship record tracking" },
      ],
      sections: [
        {
          id: "ll-gpml-intro",
          type: "introduction",
          title: "Worship Time Introduction",
          duration: "5 mins",
          instructions:
            "Ask children: 'Does your family have worship time together? What do you do?' Share some ideas: singing, prayer, reading a Bible story. Tell them: 'When families spend time with God, He gives us power to face each day!'",
          resources: [],
        },
        {
          id: "ll-gpml-bible",
          type: "bible_story",
          title: "Bible Friends Stories",
          duration: "12 mins",
          instructions:
            "Read from an age-appropriate book about Bible friends (e.g., Daniel, David, Esther, Elijah). Highlight how each friend trusted God and found His power in their lives. Ask after each: 'How did God help this friend?' Sing a simple song about Bible friends.",
          resources: ["Age-appropriate book about Bible friends", "Song sheet about Bible friends"],
        },
        {
          id: "ll-gpml-activity",
          type: "activity",
          title: "Bible Friends Game",
          duration: "8 mins",
          instructions:
            "Play a simple guessing game: describe a Bible friend in 3 clues and have children guess who it is. Examples: 'I was put in a lions den. I prayed every day. God shut the lions mouths. Who am I?' (Daniel). 'I was very small. I had a sling. I trusted God against a giant. Who am I?' (David). Celebrate each correct answer.",
          resources: ["Bible friends clue cards (optional)"],
        },
        {
          id: "ll-gpml-craft",
          type: "craft",
          title: "Bible Friend Craft",
          duration: "12 mins",
          instructions:
            "Children choose their favourite Bible friend and create a simple craft representing them.",
          craftName: "My Bible Friend",
          materials: [
            { name: "Paper", quantity: "1 sheet per child" },
            { name: "Crayons" },
            { name: "Glue" },
            { name: "Pre-cut Bible character shapes (optional)" },
          ],
          steps: [
            "Choose your favourite Bible friend",
            "Draw or colour a picture of that friend",
            "Write their name at the top (with adult help)",
            "Write or dictate one thing you learned about them",
            "Decorate the border",
          ],
        },
        {
          id: "ll-gpml-closing",
          type: "closing",
          title: "Family Worship Challenge",
          duration: "8 mins",
          instructions:
            "Hand out the Family Worship Record sheet. Explain that for the next 4 weeks they will try to have worship each day at home. Each time they have worship, they get a sticker or a tick. Ask: 'What could your family do for worship tonight?' Say the memory verse together. Close with prayer asking God to help each family have worship time.",
          resources: ["Family Worship Record sheet", "Stickers for tracking"],
        },
      ],
    },

    {
      id: "ll-i-am-special",
      classId: "little-lamb",
      weekNumber: 4,
      title: "I Am Special",
      objective:
        "Help children celebrate the unique and wonderful hands God gave them and discover how they can use their hands for good.",
      memoryVerse: {
        text: "I praise you because I am fearfully and wonderfully made.",
        reference: "Psalm 139:14",
      },
      materials: [
        { name: "Age-appropriate book about hands" },
        { name: "Poem about hands (printed)" },
        { name: "Finger paint or crayons" },
        { name: "Large paper for hand printing", quantity: "1 sheet per child" },
        { name: "Building blocks or playdough for finger activity" },
        { name: "Wet wipes or hand washing access" },
      ],
      sections: [
        {
          id: "ll-ias-intro",
          type: "introduction",
          title: "Look at Your Hands!",
          duration: "5 mins",
          instructions:
            "Ask children to hold up their hands. Say: 'Look at your hands! They are amazing! Can you wiggle your fingers? Can you clap? Can you give a thumbs up?' Do each action together. Ask: 'What are some things your hands can do?' Celebrate every answer.",
          resources: [],
        },
        {
          id: "ll-ias-bible",
          type: "bible_story",
          title: "Story About Hands",
          duration: "10 mins",
          instructions:
            "Read an age-appropriate book about hands. After reading, ask: 'What were three things you learned about hands?' Help children articulate their thoughts. Write or draw their three responses in the note-taking area of their activity book.",
          resources: ["Age-appropriate book about hands"],
        },
        {
          id: "ll-ias-activity",
          type: "activity",
          title: "Hands Poem & Finger Activity",
          duration: "10 mins",
          instructions:
            "Say a simple poem about hands together, using hand actions to act it out (e.g., 'Two little hands go clap, clap, clap...'). Then give children blocks or playdough and challenge them to build something or shape something using only their fingers — no palms allowed! Discuss what they made.",
          resources: ["Poem about hands (printed)", "Building blocks or playdough"],
        },
        {
          id: "ll-ias-craft",
          type: "craft",
          title: "Handprint Art",
          duration: "13 mins",
          instructions:
            "Children create a handprint artwork using finger paint or tracings.",
          craftName: "God Made My Hands",
          materials: [
            { name: "Finger paint or crayons" },
            { name: "Large paper", quantity: "1 sheet per child" },
            { name: "Wet wipes or hand washing access" },
          ],
          steps: [
            "Choose your favourite colour paint or crayon",
            "Press your hand flat on the paper and trace or stamp it",
            "Make a second handprint in a different colour",
            "Decorate around the handprints",
            "Write 'God Made My Hands' at the top (with adult help)",
            "Let dry and take home",
          ],
        },
        {
          id: "ll-ias-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Say the memory verse together. Ask each child: 'Name one kind thing your hands will do this week.' Celebrate each answer. Close with a prayer: 'Dear God, thank you for giving us wonderful hands. Help us use them to do good things. Amen.'",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "ll-i-can-make-wise-choices",
      classId: "little-lamb",
      weekNumber: 5,
      title: "I Can Make Wise Choices",
      objective:
        "Teach children that sharing is a wise and loving choice that makes everyone feel happy.",
      memoryVerse: {
        text: "Do to others as you would have them do to you.",
        reference: "Luke 6:31",
      },
      materials: [
        { name: "Age-appropriate book about sharing" },
        { name: "Song about sharing (lyrics printed)" },
        { name: "Game items for sharing game (e.g., a bag of blocks or toys)" },
        { name: "Craft supplies to make and share (paper, crayons, glue, stickers)" },
        { name: "Small envelope or bag for giving away the craft" },
      ],
      sections: [
        {
          id: "ll-icmwc-intro",
          type: "introduction",
          title: "Sharing Check-In",
          duration: "5 mins",
          instructions:
            "Hold up one toy or item. Only give it to one child. Wait for reactions. Ask: 'How does it feel to be left out?' Then share it with everyone. Ask: 'How does it feel now?' Introduce today's theme: making the WISE choice to share.",
          resources: ["A single toy or item"],
        },
        {
          id: "ll-icmwc-bible",
          type: "bible_story",
          title: "Story About Sharing",
          duration: "10 mins",
          instructions:
            "Read an age-appropriate book about sharing. After reading, discuss: 'Why did sharing make things better in the story?' Connect to the Golden Rule in Luke 6:31. Sing a simple song about sharing together.",
          resources: ["Age-appropriate book about sharing", "Song lyrics about sharing"],
        },
        {
          id: "ll-icmwc-activity",
          type: "activity",
          title: "Sharing Game",
          duration: "8 mins",
          instructions:
            "Place a bag of blocks or toys in the centre. Only give a FEW to one child. Others have none. Ask the child: 'What could you do?' Guide them to share. Repeat with different children. Discuss: 'How did it feel to give? To receive?'",
          resources: ["Bag of blocks or toys"],
        },
        {
          id: "ll-icmwc-craft",
          type: "craft",
          title: "Sharing Craft",
          duration: "15 mins",
          instructions:
            "Children make a simple craft — then give it away to someone else in the group.",
          craftName: "A Gift for You",
          materials: [
            { name: "Paper", quantity: "1 sheet per child" },
            { name: "Crayons" },
            { name: "Stickers" },
            { name: "Glue" },
            { name: "Small envelope or bag", quantity: "1 per child" },
          ],
          steps: [
            "Draw a picture or make a colourful card",
            "Decorate it with stickers and colours",
            "Write 'This is for you!' on the back (with adult help)",
            "Put it in the envelope",
            "Give it to someone else in the group",
          ],
        },
        {
          id: "ll-icmwc-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Say the memory verse together: 'Do to others as you would have them do to you.' Ask each child: 'Who will you share something with this week?' Close with a prayer: 'Dear God, help us make the wise choice to share every day. Amen.'",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "ll-i-can-care-for-my-body",
      classId: "little-lamb",
      weekNumber: 6,
      title: "I Can Care for My Body",
      objective:
        "Help children identify healthy foods and understand that caring for their body is a way of honouring God.",
      memoryVerse: {
        text: "Your body is a temple of the Holy Spirit.",
        reference: "1 Corinthians 6:19",
      },
      materials: [
        { name: "Age-appropriate book about healthy foods" },
        { name: "Plastic or picture food items (fruit, vegetables, junk food)" },
        { name: "Two sorting plates or boxes labelled 'Healthy' and 'Not So Healthy'" },
        { name: "Paper plates", quantity: "1 per child" },
        { name: "Food pictures from magazines or printed sheets" },
        { name: "Scissors (child-safe)", quantity: "1 per child" },
        { name: "Glue sticks", quantity: "1 per child" },
        { name: "Crayons or markers" },
      ],
      sections: [
        {
          id: "ll-iccfmb-intro",
          type: "introduction",
          title: "What Do You Eat?",
          duration: "5 mins",
          instructions:
            "Ask children: 'What did you eat for breakfast today?' Collect answers. Show a piece of fruit and a lolly. Ask: 'Which one is better for your body? Why?' Introduce the idea that the foods we eat affect how we feel, grow, and think.",
          resources: ["Piece of fruit", "A lolly or picture of junk food"],
        },
        {
          id: "ll-iccfmb-bible",
          type: "bible_story",
          title: "Healthy Foods Story",
          duration: "10 mins",
          instructions:
            "Read an age-appropriate book about healthy foods. Discuss three things learned about healthy foods (have children say them and a helper notes them down). Connect to Daniel 1 — Daniel chose vegetables and water instead of the king's food, and God blessed him with health and wisdom.",
          resources: ["Age-appropriate book about healthy foods"],
        },
        {
          id: "ll-iccfmb-activity",
          type: "activity",
          title: "Healthy Food Sorting Game",
          duration: "8 mins",
          instructions:
            "Lay out plastic food items or picture cards on the table. Children take turns picking one item and placing it in either the 'Healthy' plate or the 'Not So Healthy' plate. Discuss any tricky ones (e.g., cheese, juice). There are no wrong answers — it's a learning conversation.",
          resources: [
            "Plastic or picture food items",
            "Two sorting plates labelled Healthy and Not So Healthy",
          ],
        },
        {
          id: "ll-iccfmb-craft",
          type: "craft",
          title: "Healthy Foods Plate",
          duration: "15 mins",
          instructions:
            "Children create their own Healthy Foods plate or chart to take home.",
          craftName: "My Healthy Foods Plate",
          materials: [
            { name: "Paper plates", quantity: "1 per child" },
            { name: "Food pictures (printed or from magazines)" },
            { name: "Scissors (child-safe)", quantity: "1 per child" },
            { name: "Glue sticks", quantity: "1 per child" },
            { name: "Crayons or markers" },
          ],
          steps: [
            "Write your name on the back of the paper plate",
            "Cut out pictures of healthy foods you like",
            "Glue them onto the plate",
            "Draw extra fruits or vegetables with crayons",
            "Write 'My Healthy Plate' around the edge (with adult help)",
            "Take it home to remind your family about healthy eating",
          ],
        },
        {
          id: "ll-iccfmb-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Hold up healthy food plates. Say the memory verse together. Ask: 'What healthy food will you choose to eat this week?' Each child shares one answer. Close with a prayer: 'Dear God, thank you for giving us healthy food to keep our bodies strong. Help us make good choices. Amen.'",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "ll-i-have-a-family",
      classId: "little-lamb",
      weekNumber: 7,
      title: "I Have a Family",
      objective:
        "Help children celebrate their own family and understand that families are a gift from God.",
      memoryVerse: {
        text: "God sets the lonely in families.",
        reference: "Psalm 68:6",
      },
      materials: [
        { name: "Age-appropriate book about families" },
        { name: "Song about families (lyrics printed)" },
        { name: "Paper", quantity: "1 sheet per child" },
        { name: "Crayons or markers" },
        { name: "Family photo (optional, ask parents to bring one)" },
        { name: "Glue sticks (if using photos)" },
      ],
      sections: [
        {
          id: "ll-ihaf-intro",
          type: "introduction",
          title: "My Family Song",
          duration: "5 mins",
          instructions:
            "Sing a song about families together (e.g., 'The Family of God' or a local favourite). Ask: 'Who is in YOUR family?' Let children share. Celebrate every kind of family — big, small, grandparents, single parent. 'All families are special to God!'",
          resources: ["Song about families (lyrics)"],
        },
        {
          id: "ll-ihaf-bible",
          type: "bible_story",
          title: "Story About Families",
          duration: "10 mins",
          instructions:
            "Read an age-appropriate book about families. After reading, ask children to say three things they learned about families. A helper notes these down. Reinforce: 'God planned for you to have a family because He loves you!'",
          resources: ["Age-appropriate book about families"],
        },
        {
          id: "ll-ihaf-activity",
          type: "activity",
          title: "Family Activity",
          duration: "8 mins",
          instructions:
            "Play a simple activity about families: act out different family roles (mum cooking, dad fixing something, baby sleeping, child helping). Encourage children to think about one kind thing their family does for them. Share answers in the group.",
          resources: [],
        },
        {
          id: "ll-ihaf-craft",
          type: "craft",
          title: "My Family Portrait",
          duration: "15 mins",
          instructions:
            "Children draw their family or create a family craft to take home.",
          craftName: "My Family Portrait",
          materials: [
            { name: "Paper", quantity: "1 sheet per child" },
            { name: "Crayons or markers" },
            { name: "Family photo (optional)" },
            { name: "Glue sticks", quantity: "1 per child (if using photos)" },
          ],
          steps: [
            "Draw each member of your family",
            "Write or have an adult write each person's name under them",
            "Colour in your picture",
            "Write 'My Family' at the top",
            "Optional: glue a family photo in one corner",
            "Take it home and share it with your family",
          ],
        },
        {
          id: "ll-ihaf-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Children hold up their family portraits. Say the memory verse together. Ask each child to name one thing they love about their family. Close with a prayer thanking God for families.",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "ll-families-care-for-each-other",
      classId: "little-lamb",
      weekNumber: 8,
      title: "Families Care for Each Other",
      objective:
        "Teach children that being a helper in the family is a way of showing love and following Jesus' example.",
      memoryVerse: {
        text: "Carry each other's burdens, and in this way you will fulfil the law of Christ.",
        reference: "Galatians 6:2",
      },
      materials: [
        { name: "Age-appropriate book about being helpful" },
        { name: "Song about helping (lyrics)" },
        { name: "Props for game (small 'burdens' to carry — blocks, bags)" },
        { name: "Craft paper or card", quantity: "1 per child" },
        { name: "Crayons or markers" },
        { name: "Special Helper badge template (optional)" },
        { name: "Weekly chore tracker card", quantity: "1 per child" },
      ],
      sections: [
        {
          id: "ll-fcofe-intro",
          type: "introduction",
          title: "Helper Check-In",
          duration: "5 mins",
          instructions:
            "Ask: 'Has anyone helped at home this week? What did you do?' Celebrate every answer. Tell them: 'Helpers are SO important in a family! Today we're going to learn how to be a SPECIAL helper.'",
          resources: [],
        },
        {
          id: "ll-fcofe-bible",
          type: "bible_story",
          title: "Story About Being Helpful",
          duration: "10 mins",
          instructions:
            "Read an age-appropriate book about being helpful. Sing a song about helping together. Discuss: 'How did the helpers in the story make a difference?' Connect to Jesus as the ultimate helper — He always helped those around Him.",
          resources: [
            "Age-appropriate book about being helpful",
            "Song about helping (lyrics)",
          ],
        },
        {
          id: "ll-fcofe-activity",
          type: "activity",
          title: "Helper Game",
          duration: "10 mins",
          instructions:
            "Play a helping game: place small 'burden' blocks across the room. Children must carry a block from one side to the other — but it's easier when they ask a friend to help! Then debrief: 'Why is it better to help each other? What happens when no one helps?' Relate back to Galatians 6:2.",
          resources: ["Blocks or bags to carry", "Cones or tape to mark the course"],
        },
        {
          id: "ll-fcofe-craft",
          type: "craft",
          title: "Helper Craft & Chore Card",
          duration: "13 mins",
          instructions:
            "Children make a craft about being helpful and receive a chore card to track helping at home.",
          craftName: "My Special Helper Card",
          materials: [
            { name: "Craft paper or card", quantity: "1 per child" },
            { name: "Crayons or markers" },
            { name: "Special Helper badge template", quantity: "1 per child" },
            { name: "Weekly chore tracker card", quantity: "1 per child" },
          ],
          steps: [
            "Decorate the Special Helper card with your name",
            "Draw yourself helping someone at home",
            "On the chore tracker, circle one chore you will do each day this week",
            "Ask a parent to sign off each day",
            "Bring the completed tracker back next week",
          ],
        },
        {
          id: "ll-fcofe-closing",
          type: "closing",
          title: "Closing Challenge",
          duration: "5 mins",
          instructions:
            "Say the memory verse together. Give each child a challenge: 'Help a family member with one special chore every day for a week (e.g., feed a pet, set the table, tidy your room).' Ask God to help them be a special helper at home. Close in prayer.",
          resources: ["Memory verse card", "Weekly chore tracker cards"],
        },
      ],
    },

    {
      id: "ll-family-helps-me-care-for-myself",
      classId: "little-lamb",
      weekNumber: 9,
      title: "My Family Helps Me Care for Myself",
      objective:
        "Help children understand that being healthy — in body and spirit — is something families do together.",
      memoryVerse: {
        text: "Dear friend, I pray that you may enjoy good health and that all may go well with you.",
        reference: "3 John 1:2",
      },
      materials: [
        { name: "Age-appropriate story about being healthy" },
        { name: "Action game props (space for movement)" },
        { name: "Art supplies: paper, crayons, paint" },
        { name: "Healthy Habits visual cards (sleep, exercise, water, food)" },
      ],
      sections: [
        {
          id: "ll-fhmcfm-intro",
          type: "introduction",
          title: "Healthy Habits Check",
          duration: "5 mins",
          instructions:
            "Show visual cards: sleep, exercise, water, healthy food. Ask for a show of hands: 'Did you sleep well last night? Did you drink water today? Did you move your body?' Celebrate healthy choices. Say: 'Your family helps you be healthy every day!'",
          resources: ["Healthy Habits visual cards"],
        },
        {
          id: "ll-fhmcfm-bible",
          type: "bible_story",
          title: "Story About Being Healthy",
          duration: "10 mins",
          instructions:
            "Read an age-appropriate story about being healthy. Discuss three things learned about healthy families. A helper notes them down. Reinforce: 'God wants our whole family to be healthy and happy!'",
          resources: ["Age-appropriate story about being healthy"],
        },
        {
          id: "ll-fhmcfm-activity",
          type: "activity",
          title: "Healthy Action Game",
          duration: "10 mins",
          instructions:
            "Play an action game about being healthy. Call out a healthy activity and children do the action: 'Drink water!' (pretend to drink), 'Go to sleep!' (hands together, head on hands), 'Exercise!' (jumping jacks), 'Eat a vegetable!' (make chewing sounds). Make it fast-paced and fun. Vary the speed!",
          resources: ["Open floor space"],
        },
        {
          id: "ll-fhmcfm-craft",
          type: "craft",
          title: "Healthy Me Art Project",
          duration: "13 mins",
          instructions:
            "Children create an art project about being healthy.",
          craftName: "Healthy Me!",
          materials: [
            { name: "Paper", quantity: "1 sheet per child" },
            { name: "Crayons or paint" },
            { name: "Healthy Habits visual cards for reference" },
          ],
          steps: [
            "Draw a picture of yourself being healthy",
            "Show at least two healthy habits in your picture (e.g., eating fruit, sleeping, running)",
            "Write 'Healthy Me!' at the top (with adult help)",
            "Colour in your drawing",
            "Share with a family member and explain what you drew",
          ],
        },
        {
          id: "ll-fhmcfm-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Say the memory verse together. Ask: 'What is one healthy thing your family does together?' Share answers. Close with a prayer: 'Dear God, thank you for our families who help us stay healthy. Help us make good choices every day. Amen.'",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "ll-world-of-friends",
      classId: "little-lamb",
      weekNumber: 10,
      title: "The World of Friends",
      objective:
        "Help children marvel at God's creation and feel a personal connection to the world He made for them.",
      memoryVerse: {
        text: "God saw all that he had made, and it was very good.",
        reference: "Genesis 1:31",
      },
      materials: [
        { name: "Song about creation (lyrics)" },
        { name: "Age-appropriate story about creation" },
        { name: "Creation Wheel template (printed)", quantity: "1 per child" },
        { name: "Crayons or markers" },
        { name: "Natural objects for activity (leaves, rocks, shells)" },
      ],
      sections: [
        {
          id: "ll-wof-intro",
          type: "introduction",
          title: "Creation Song",
          duration: "5 mins",
          instructions:
            "Sing a song about creation together. Show natural objects (a leaf, a rock, a shell). Ask: 'Who made these? Isn't it amazing what God made?' Let children pass the objects around and share what they notice about each one.",
          resources: ["Song about creation (lyrics)", "Natural objects"],
        },
        {
          id: "ll-wof-bible",
          type: "bible_story",
          title: "Creation Story",
          duration: "10 mins",
          instructions:
            "Read an age-appropriate story about creation. As you read, pause at key moments to ask: 'What did God make on this day?' Encourage children to say 3 things they learned about creation. A helper notes these down.",
          resources: ["Age-appropriate story about creation"],
        },
        {
          id: "ll-wof-activity",
          type: "activity",
          title: "Creation Activity",
          duration: "8 mins",
          instructions:
            "Play a creation-themed action game: children become different parts of creation. 'Be a tree growing!' (start small, grow up), 'Be a fish swimming!' (sway side to side), 'Be a bird flying!' (flap arms), 'Be a sleeping Sabbath!' (hands together, eyes closed). Narrate from Genesis as they act.",
          resources: [],
        },
        {
          id: "ll-wof-craft",
          type: "craft",
          title: "Creation Wheel",
          duration: "15 mins",
          instructions:
            "Children fill in the creation wheel craft — one section for each day of creation.",
          craftName: "My Creation Wheel",
          materials: [
            { name: "Creation Wheel template (printed)", quantity: "1 per child" },
            { name: "Crayons or markers" },
          ],
          steps: [
            "Write your name on the back of the creation wheel",
            "Colour the Day 1 section: light",
            "Colour the Day 2 section: sky and water",
            "Colour the Day 3 section: land and plants",
            "Colour the Day 4 section: sun, moon, and stars",
            "Colour the Day 5 section: fish and birds",
            "Colour the Day 6 section: animals and people",
            "Colour the Day 7 section: the Sabbath rest",
          ],
        },
        {
          id: "ll-wof-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Hold up creation wheels. Say the memory verse together. Ask: 'What is your favourite thing God made?' Close with a wonder prayer: 'Dear God, thank you for making such a beautiful world. Help us take care of it. Amen.'",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "ll-world-of-other-people",
      classId: "little-lamb",
      weekNumber: 11,
      title: "The World of Other People",
      objective:
        "Introduce children to community helpers and help them appreciate the people God has placed in their world to keep them safe and cared for.",
      memoryVerse: {
        text: "Love your neighbour as yourself.",
        reference: "Mark 12:31",
      },
      materials: [
        { name: "Age-appropriate story about community helpers" },
        { name: "Community helper props or dress-up items (optional): hard hat, nurse hat, apron" },
        { name: "Paper", quantity: "1 sheet per child" },
        { name: "Crayons or markers" },
        { name: "Community helpers picture cards" },
      ],
      sections: [
        {
          id: "ll-woop-intro",
          type: "introduction",
          title: "Who Helps Us?",
          duration: "5 mins",
          instructions:
            "Show community helper picture cards one at a time (doctor, firefighter, teacher, baker, pastor). For each one ask: 'Who is this? How do they help us?' Celebrate all answers. Say: 'God put amazing people in our world to help us. Today we're going to be community helpers!'",
          resources: ["Community helpers picture cards"],
        },
        {
          id: "ll-woop-bible",
          type: "bible_story",
          title: "Story About Community Helpers",
          duration: "10 mins",
          instructions:
            "Read an age-appropriate story about community helpers. Connect to the Good Samaritan (Luke 10) in simple terms: 'Jesus told a story about a man who helped a stranger. That man was a community helper!' Discuss: 'How can YOU be a helper to people around you?'",
          resources: ["Age-appropriate story about community helpers"],
        },
        {
          id: "ll-woop-activity",
          type: "activity",
          title: "Pretend Community Helpers",
          duration: "10 mins",
          instructions:
            "Children pretend to be different community helpers using actions. Leader calls out a helper and children act: 'Firefighter!' (grab a hose, spray), 'Doctor!' (check heartbeat, bandage arm), 'Teacher!' (stand at a board, write), 'Baker!' (mix and put in oven). Then play an action game: 'What does a _____ do? Show me!' Use props if available.",
          resources: ["Community helper props (optional)"],
        },
        {
          id: "ll-woop-craft",
          type: "craft",
          title: "Community Helper Art",
          duration: "13 mins",
          instructions:
            "Children draw themselves as a community helper.",
          craftName: "When I Grow Up I Will Help",
          materials: [
            { name: "Paper", quantity: "1 sheet per child" },
            { name: "Crayons or markers" },
          ],
          steps: [
            "Draw yourself dressed as a community helper",
            "Choose: doctor, teacher, firefighter, pastor, baker, or make up your own!",
            "Draw what you would use to help people",
            "Write 'When I grow up I will help people by...' at the bottom (with adult help)",
            "Colour your picture",
          ],
        },
        {
          id: "ll-woop-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Children share their community helper drawings. Say the memory verse. Ask: 'Is there a community helper you want to say thank you to this week?' Close with a prayer thanking God for the helpers He placed in our world.",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "ll-world-of-nature",
      classId: "little-lamb",
      weekNumber: 12,
      title: "The World of Nature",
      objective:
        "Deepen children's sense of wonder about the natural world — water, insects, stars, weather, and animals — and connect all of it back to their Creator.",
      memoryVerse: {
        text: "The earth is the Lord's, and everything in it.",
        reference: "Psalm 24:1",
      },
      materials: [
        { name: "Age-appropriate nature books (bodies of water, insects, stars, weather, or zoo animals)" },
        { name: "Nature song lyrics" },
        { name: "Magnifying glasses", quantity: "1 per pair" },
        { name: "Star or insect stencil" },
        { name: "Dark blue or black paper", quantity: "1 sheet per child" },
        { name: "White or yellow crayons/chalk" },
        { name: "Nature action game cards" },
        { name: "Pencils", quantity: "1 per child" },
        { name: "Zoo animals colouring page (optional)" },
      ],
      sections: [
        {
          id: "ll-won-intro",
          type: "introduction",
          title: "Nature Wonder Moment",
          duration: "5 mins",
          instructions:
            "Bring in a nature item: a jar of water, a picture of an insect, a star chart, or a weather photo. Ask: 'What is this? Where does it come from? Who made it?' Build curiosity. Say: 'Today we explore some of the most amazing things God put in our world!'",
          resources: ["Nature item or picture"],
        },
        {
          id: "ll-won-bible",
          type: "bible_story",
          title: "Nature Stories",
          duration: "12 mins",
          instructions:
            "Choose one or two nature topics from the activity book based on group interest: Bodies of Water (lakes, streams, rivers, oceans), Insects, Stars, Weather, or Zoo Animals. Read from an age-appropriate book on that topic. Ask children to say 3 things they learned. For Zoo Animals: discuss what animals they have seen, what they eat, whether they saw birds. Ask: 'Who made everything at the zoo? Can you find the answer in the Bible?'",
          resources: ["Age-appropriate nature books"],
        },
        {
          id: "ll-won-activity",
          type: "activity",
          title: "Nature Action Game",
          duration: "10 mins",
          instructions:
            "Play a nature-themed action game. For water: children become rivers (wave arms slowly), then oceans (bigger waves), then waterfalls (jump!). For insects: crawl like beetles, fly like butterflies, hop like grasshoppers. For stars: reach high and twinkle fingers. For weather: sunshine (arms wide), rain (wiggle fingers down), thunder (stomp). Sing a nature song between rounds.",
          resources: ["Nature song lyrics", "Open floor space"],
        },
        {
          id: "ll-won-craft",
          type: "craft",
          title: "Nature Craft",
          duration: "15 mins",
          instructions:
            "Children choose a nature craft based on the topic explored. Recommended: Starry Night picture.",
          craftName: "God's Starry Night",
          materials: [
            { name: "Dark blue or black paper", quantity: "1 sheet per child" },
            { name: "White or yellow crayons or chalk" },
            { name: "Star stencil (optional)" },
          ],
          steps: [
            "Take a dark paper and lay it flat",
            "Use a white or yellow crayon to draw lots of stars",
            "Add a moon in one corner",
            "Draw something on the ground below (a tree, a hill, a house)",
            "Write 'God Made the Stars' at the top",
            "Optional: use a star stencil for extra fun",
          ],
        },
        {
          id: "ll-won-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Children show their nature crafts. Say the memory verse together: 'The earth is the Lord's, and everything in it. Psalm 24:1.' Ask: 'What part of nature are you most excited to explore this week?' Close with a wonder prayer thanking God for the amazing natural world.",
          resources: ["Memory verse card"],
        },
      ],
    },
  ],
};

export default littleLamb;
