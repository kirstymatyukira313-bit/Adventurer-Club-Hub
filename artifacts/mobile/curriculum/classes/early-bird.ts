import type { AdventurerClassDef } from "../types";

const earlyBird: AdventurerClassDef = {
  id: "early-bird",
  name: "Early Bird",
  ageRange: "6–7 years",
  description: "Growing in faith, friendship, and service through God's world.",
  color: "#FCD34D",
  lessons: [
    // ─────────────────────────────────────────────────
    // BASIC — Weeks 1–3
    // ─────────────────────────────────────────────────
    {
      id: "eb-pledge-and-law",
      classId: "early-bird",
      weekNumber: 1,
      title: "The Adventurer Pledge & Law",
      objective:
        "Recite the Adventurer Pledge and Law from memory and understand how each quality applies to daily life.",
      memoryVerse: {
        text: "Because Jesus loves me, I will always do my best.",
        reference: "Adventurer Pledge",
      },
      materials: [
        { name: "Adventurer Pledge and Law display card" },
        { name: "Paper or card stock", quantity: "1 per child" },
        { name: "Crayons or markers" },
        { name: "Scissors" },
        { name: "Stickers for decoration (optional)" },
      ],
      sections: [
        {
          id: "eb-pl-intro",
          type: "introduction",
          title: "Welcome & Opening Pledge",
          duration: "5 mins",
          instructions:
            "Gather children together. Read the Adventurer Pledge aloud: 'Because Jesus loves me, I will always do my best.' Ask: 'Why do you think we say this every time we meet?' Let 2–3 children share. Explain that today they will learn what it means to live the Adventurer Law every single day.",
          resources: ["Adventurer Pledge and Law display card"],
        },
        {
          id: "eb-pl-bible",
          type: "bible_story",
          title: "What the Law Looks Like",
          duration: "10 mins",
          instructions:
            "Read Matthew 19:14: 'Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.' Jesus cares deeply about children. Explain each part of the Adventurer Law with a child-friendly example: Be obedient — following your parent's instruction the first time. Be pure — choosing kind words. Be true — telling the truth even when it's hard. Be kind — sharing with a sibling. Be respectful — listening when an adult speaks. Be attentive — paying full attention in class. Be helpful — setting the table without being asked. Be cheerful — smiling when you'd rather complain. Be thoughtful — remembering a friend's favourite colour. Be reverent — being quiet and respectful during prayer.",
          resources: ["Bible"],
        },
        {
          id: "eb-pl-activity",
          type: "activity",
          title: "Law Shout-Out Game",
          duration: "8 mins",
          instructions:
            "Leader calls out 'Be…' and children race to shout the next word from the Law. After running through the Law twice, switch to scenarios: 'You wait quietly while the teacher speaks — which part of the Law is that?' Children shout the correct Law quality. End by having each child recite the full Law from memory to a partner.",
          resources: ["Adventurer Pledge and Law display card"],
        },
        {
          id: "eb-pl-craft",
          type: "craft",
          title: "My Adventurer Law Bookmark",
          duration: "12 mins",
          instructions:
            "Children create a bookmark listing the Adventurer Law to take home and practise.",
          craftName: "Adventurer Law Bookmark",
          materials: [
            { name: "Paper or card stock", quantity: "1 per child" },
            { name: "Crayons or markers" },
            { name: "Scissors" },
            { name: "Stickers for decoration (optional)" },
          ],
          steps: [
            "Cut paper into a bookmark shape (approx 5 cm × 18 cm)",
            "Write 'The Adventurer Law' across the top",
            "List all ten Law qualities down the bookmark",
            "Decorate the border with drawings or stickers",
            "Write your name on the back",
            "Practise reading it aloud before taking it home",
          ],
        },
        {
          id: "eb-pl-closing",
          type: "closing",
          title: "Closing — Pledge from Memory",
          duration: "5 mins",
          instructions:
            "Stand together and recite the full Adventurer Pledge and Law from memory — without looking at the card. Celebrate with applause. Challenge: practise the Law every morning at home before school this week. Close with a short prayer thanking Jesus for helping us live the Law.",
          resources: ["Adventurer Pledge and Law display card"],
        },
      ],
    },

    {
      id: "eb-story-listening",
      classId: "early-bird",
      weekNumber: 2,
      title: "Story Listening",
      objective:
        "Listen to two age-appropriate books from different categories, identify the main character of each, and express gratitude to the reader.",
      memoryVerse: {
        text: "Your word is a lamp to my feet and a light to my path.",
        reference: "Psalm 119:105",
      },
      materials: [
        { name: "Two age-appropriate books (from: Bible, Missions, Friends/Family, Nature)" },
        { name: "Note-taking sheet for adult caregivers", quantity: "1 per child" },
        { name: "Card stock for thank-you craft", quantity: "1 per child" },
        { name: "Crayons or markers" },
        { name: "Stickers (optional)" },
      ],
      sections: [
        {
          id: "eb-sl-intro",
          type: "introduction",
          title: "Why We Love Stories",
          duration: "5 mins",
          instructions:
            "Ask: 'What is your favourite story? Why do you love it?' Let 2–3 children share. Say: 'God loves stories too — the Bible is full of them! Today we are going to listen to stories and practise being great listeners.' Remind children that good listeners sit quietly, look at the reader, and think about what they're hearing.",
          resources: [],
        },
        {
          id: "eb-sl-bible",
          type: "bible_story",
          title: "Story 1: Listen & Learn",
          duration: "12 mins",
          instructions:
            "Read aloud one age-appropriate book from the list of approved categories: (a) Bible, (b) Missions, (c) Friends or family, (d) Nature. After reading, ask the child: 'What did you like most about the story?' and 'Who was the main character? Tell me something about them.' Record their responses in the note-taking area. This satisfies Story Listening II Requirement 1a–b for the first book.",
          resources: ["Age-appropriate book — Category 1"],
        },
        {
          id: "eb-sl-activity",
          type: "activity",
          title: "Story 2: Listen & Respond",
          duration: "12 mins",
          instructions:
            "Read aloud a second age-appropriate book from a different category. After reading, repeat the questions: 'What did you like most about this story?' and 'Who was the main character? Tell me something about them.' Record responses. This satisfies Story Listening II Requirement 1 for the second book. Discuss: 'What was different about the two stories? What was the same?'",
          resources: ["Age-appropriate book — Category 2"],
        },
        {
          id: "eb-sl-craft",
          type: "craft",
          title: "Thank-You Card for My Reader",
          duration: "10 mins",
          instructions:
            "Children make a thank-you card or craft to give to the person who read to them, fulfilling Story Listening II Requirement 3.",
          craftName: "Thank-You Card",
          materials: [
            { name: "Card stock", quantity: "1 per child" },
            { name: "Crayons or markers" },
            { name: "Stickers (optional)" },
          ],
          steps: [
            "Fold card stock in half to make a card",
            "On the front, draw a picture of your favourite part of the stories",
            "Inside, write or dictate: 'Thank you for reading to me! I loved...'",
            "Sign your name and decorate with stickers",
            "Give the card to your reader",
          ],
        },
        {
          id: "eb-sl-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Say the memory verse together: 'Your word is a lamp to my feet and a light to my path. Psalm 119:105.' Ask: 'How is a story like a lamp for your path?' Let a child answer. Close with a prayer thanking God for people who read to us and for the stories in His word.",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "eb-birds-award",
      classId: "early-bird",
      weekNumber: 3,
      title: "The Early Birds — Discovering God's Birds",
      objective:
        "Complete the Early Birds award by identifying birds in nature, learning bird sounds, making a bird-seed decoration, building a bird feeder, and connecting birds to Bible stories.",
      memoryVerse: {
        text: "Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them.",
        reference: "Matthew 6:26",
      },
      materials: [
        { name: "Nature observation notebook or note-taking sheet" },
        { name: "Bird identification guide or pictures" },
        { name: "Bird seed", quantity: "1 cup per child" },
        { name: "Craft glue" },
        { name: "Bird-outline template (pre-printed)", quantity: "1 per child" },
        { name: "Cardboard or thick card", quantity: "1 per child" },
        { name: "String or twine", quantity: "30 cm per child" },
        { name: "Empty plastic bottle or milk carton (for feeder)", quantity: "1 per child" },
        { name: "Craft knife (adult use only)" },
        { name: "Wooden dowel or stick", quantity: "1 per child" },
        { name: "Bird book or approved media clip" },
      ],
      sections: [
        {
          id: "eb-ba-intro",
          type: "introduction",
          title: "Birds Around Us",
          duration: "8 mins",
          instructions:
            "Ask: 'Have you seen any birds today? What did they look like?' Let children share. Requirement 1: Help each child name five birds they can see around their home. Record answers in the note-taking area. Then ask: 'What is the official bird of our region or country?' Requirement 2: Share the answer together and record it. Ask: 'What do birds eat?' Requirement 3: Name three kinds of foods birds eat (seeds, insects, worms, berries, nectar, fish, etc.).",
          resources: ["Bird identification guide or pictures"],
        },
        {
          id: "eb-ba-bible",
          type: "bible_story",
          title: "Birds in the Bible",
          duration: "10 mins",
          instructions:
            "Requirement 6: Tell two Bible stories that mention a bird. Story 1 — Noah's dove (Genesis 8:6-12): Noah sent out a raven and then a dove. When the dove returned with an olive leaf, Noah knew dry land had appeared. God kept them safe. Story 2 — Jesus and the sparrow (Matthew 10:29-31): 'Are not two sparrows sold for a penny? Yet not one of them will fall to the ground outside your Father's care.' Jesus used birds to show us how much God cares for us. Then read Matthew 6:26 together as the memory verse. Ask: 'What does this tell us about how God cares for YOU?'",
          resources: ["Bible"],
        },
        {
          id: "eb-ba-activity",
          type: "activity",
          title: "Bird Sounds & Bird Feeder",
          duration: "12 mins",
          instructions:
            "Requirement 7: Teach children two bird sounds. Practise together and have each child pretend to be that bird (flap wings, make the sound, walk like the bird). Suggestions: the coo of a dove, the chirp of a sparrow, the crow of a rooster. Requirement 8: Share a book or watch an approved media clip about a bird children might see in the wild. Record the bird's name. Requirement 5 (take home): Explain that children will make a bird feeder to hang outside where they can see it and count how many birds come to feed.",
          resources: ["Bird book or approved media clip"],
        },
        {
          id: "eb-ba-craft",
          type: "craft",
          title: "Bird-Seed Decoration",
          duration: "15 mins",
          instructions:
            "Requirement 4: Using a picture of a bird, children use a mixture of bird seeds to fill in and make a bird-seed decoration.",
          craftName: "Bird-Seed Decoration",
          materials: [
            { name: "Bird-outline template (pre-printed)", quantity: "1 per child" },
            { name: "Cardboard or thick card", quantity: "1 per child" },
            { name: "Craft glue" },
            { name: "Bird seed", quantity: "1 cup per child" },
            { name: "String or twine", quantity: "30 cm per child" },
          ],
          steps: [
            "Glue the bird-outline template onto the cardboard for stiffness",
            "Apply a thick layer of craft glue inside the bird outline",
            "Sprinkle bird seed generously over the glue-covered area",
            "Press the seeds gently to help them stick",
            "Shake off any loose seeds",
            "Poke a hole at the top and thread the string through for hanging",
            "Leave to dry completely before hanging",
          ],
        },
        {
          id: "eb-ba-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Gather children to say the memory verse: 'Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them. Matthew 6:26.' Ask: 'If God cares for birds, how much more does He care for you?' Close with a prayer thanking God for creating the beautiful birds around us and for caring for each child like He cares for the birds. Send home the bird feeder instructions as a take-home project.",
          resources: ["Memory verse card", "Bird feeder take-home instructions"],
        },
      ],
    },

    // ─────────────────────────────────────────────────
    // MY GOD — Weeks 4–6
    // ─────────────────────────────────────────────────
    {
      id: "eb-gods-plan-to-save-me",
      classId: "early-bird",
      weekNumber: 4,
      title: "God's Plan to Save Me",
      objective:
        "Discover that people throughout the Bible prayed to God, learn to pray independently, and complete the Jesus Star award.",
      memoryVerse: {
        text: "The Lord is near to all who call on him, to all who call on him in truth.",
        reference: "Psalm 145:18",
      },
      materials: [
        { name: "Story chart or lapbook template: Samuel, Daniel, Jonah, David", quantity: "1 per child" },
        { name: "Crayons or coloured pencils" },
        { name: "Bible with pictures" },
        { name: "Star shape cut-out or star template", quantity: "1 per child" },
        { name: "Scissors" },
        { name: "Gold or yellow paint or crayons" },
        { name: "Globe or map of the world (optional)" },
        { name: "Stargazing picture or star chart (optional)" },
      ],
      sections: [
        {
          id: "eb-gpsm-intro",
          type: "introduction",
          title: "How Do You Talk to God?",
          duration: "5 mins",
          instructions:
            "Ask children: 'Have you ever talked to God? What did you say?' Let 2–3 share. Say: 'Talking to God is called prayer. Today we'll meet people in the Bible who prayed — and they were just like you!' Introduce Samuel, Daniel, Jonah, and David as children who grew up to be great friends of God because they prayed.",
          resources: [],
        },
        {
          id: "eb-gpsm-bible",
          type: "bible_story",
          title: "Bible Pray-ers: Samuel, Daniel, Jonah & David",
          duration: "12 mins",
          instructions:
            "Requirement 1a: Tell brief stories of four Bible pray-ers. Samuel (1 Samuel 3): As a child, Samuel heard God calling his name at night. He said, 'Speak, Lord, for your servant is listening.' God had a plan for Samuel! Daniel (Daniel 6): Daniel prayed to God three times a day — even when the king said not to. God closed the lions' mouths and kept him safe. Jonah (Jonah 2): When Jonah was swallowed by a big fish, he prayed from inside the fish. God heard him and gave him a second chance. David (Psalm 23): David was a shepherd boy who wrote songs to God. He prayed through music and poetry. Ask after each: 'What did [name] do when things were hard?' Answer: they prayed!",
          resources: ["Bible with pictures"],
        },
        {
          id: "eb-gpsm-activity",
          type: "activity",
          title: "Jesus Star Requirements",
          duration: "10 mins",
          instructions:
            "Complete the Jesus Star award requirements together: (1) Who created the stars and on what day? (God created the stars on Day 4 of Creation — Genesis 1:14-19.) (2) How did the wise men know Jesus was born? (They saw His star in the east — Matthew 2:2.) (3) Which direction will Jesus come from when He returns? (He will come from the east — Matthew 24:27.) (4) Draw, cut out, or colour a star — done in the craft section. (5) Discuss locating the North Star — invite children to look at stars tonight and try to find the North Star. Requirement 1b: Practise praying out loud — let each child say a short independent prayer.",
          resources: ["Star template", "Scissors", "Bible"],
        },
        {
          id: "eb-gpsm-craft",
          type: "craft",
          title: "Story Chart: Bible People Who Prayed",
          duration: "13 mins",
          instructions:
            "Requirement 1a: Children colour a story chart or lapbook about Samuel, Daniel, Jonah, and David — the people in the Bible who prayed. Each panel features one character. Also colour or cut out a star for the Jesus Star award.",
          craftName: "My Bible Pray-ers Story Chart",
          materials: [
            { name: "Story chart or lapbook template", quantity: "1 per child" },
            { name: "Crayons or coloured pencils" },
            { name: "Star shape cut-out or template", quantity: "1 per child" },
            { name: "Gold or yellow paint or crayons" },
            { name: "Scissors" },
          ],
          steps: [
            "Write your name on the front of the chart",
            "Colour the Samuel panel — draw a young boy listening to God",
            "Colour the Daniel panel — draw a man praying by a window",
            "Colour the Jonah panel — draw a man inside a fish praying",
            "Colour the David panel — draw a boy with a harp under the stars",
            "Colour or cut out and decorate your Jesus Star in gold or yellow",
            "Write 'Jesus Star' on the back of your star cutout",
          ],
        },
        {
          id: "eb-gpsm-closing",
          type: "closing",
          title: "Closing — Learning to Pray Independently",
          duration: "5 mins",
          instructions:
            "Requirement 1b: Each child practises praying on their own — not repeating after the leader, but choosing their own words to talk to God. Give children 30 seconds of quiet time to think, then let each child pray aloud if willing. Say the memory verse together: 'The Lord is near to all who call on him, to all who call on him in truth. Psalm 145:18.' Challenge: earn the Jesus Star award by looking at real stars with a family member this week.",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "eb-gods-message-to-me",
      classId: "early-bird",
      weekNumber: 5,
      title: "God's Message to Me",
      objective:
        "Complete the Bible Friends II award by naming three Bible friends, telling a favourite Bible friend story, acting it out, and identifying ways to be a friend for Jesus.",
      memoryVerse: {
        text: "A friend loves at all times, and a brother is born for a time of adversity.",
        reference: "Proverbs 17:17",
      },
      materials: [
        { name: "Bible with pictures" },
        { name: "Dress-up props for acting (robes, headcovering, staff, etc.)" },
        { name: "Paper and pencils for notes" },
        { name: "Three-panel poster board or paper", quantity: "1 per child" },
        { name: "Crayons or markers" },
      ],
      sections: [
        {
          id: "eb-gmtm-intro",
          type: "introduction",
          title: "What Is a Friend?",
          duration: "5 mins",
          instructions:
            "Requirement 1: Ask: 'What does it mean to be a friend?' Collect answers — a friend is kind, shares, listens, helps when you are sad, is honest. Write key words on the board. Then say: 'The Bible is full of amazing friends. Today we'll meet some of them!' Ask if anyone already knows a Bible character who was a great friend.",
          resources: [],
        },
        {
          id: "eb-gmtm-bible",
          type: "bible_story",
          title: "My Three Favourite Bible Friends",
          duration: "12 mins",
          instructions:
            "Requirement 2: Help children name three Bible friends. Suggestions: Ruth and Naomi (Ruth 1 — loyalty and love), David and Jonathan (1 Samuel 18 — true friendship despite obstacles), Mary and Elizabeth (Luke 1 — encouragement and celebration), Paul and Barnabas (Acts — working together for Jesus), Jesus and His disciples. Briefly tell each story. Requirement 3: Ask each child: 'Who is YOUR favourite Bible friend?' Let them tell a story about that person in their own words. Adults record the answers in the note-taking area.",
          resources: ["Bible with pictures"],
        },
        {
          id: "eb-gmtm-activity",
          type: "activity",
          title: "Act Out a Bible Friend Story",
          duration: "10 mins",
          instructions:
            "Requirement 4: Children dress up and act out a story about a Bible friend. Divide into small groups if needed. Suggestions: Ruth gleaning in the field while Naomi watches; David and Jonathan making a promise; Mary visiting Elizabeth. Provide simple costume props. Each group performs their mini-skit for the others. Celebrate each performance with applause.",
          resources: ["Dress-up props"],
        },
        {
          id: "eb-gmtm-discussion",
          type: "discussion",
          title: "Being a Friend for Jesus",
          duration: "8 mins",
          instructions:
            "Requirement 5: Ask: 'What are three things YOU can do to be a friend for Jesus?' Guide children toward answers such as: sharing God's love with a classmate, inviting a friend to church, praying for a friend who is sad, saying kind words, helping someone who is lonely, sharing what you have. Each child should name their three things. Write them on the three-panel poster as a personal commitment.",
          resources: ["Three-panel poster board", "Crayons or markers"],
        },
        {
          id: "eb-gmtm-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Say the memory verse together: 'A friend loves at all times, and a brother is born for a time of adversity. Proverbs 17:17.' Ask: 'How can we be friends like that this week?' Close with a prayer asking God to help each child be a true friend — to others and to Jesus.",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "eb-gods-power-in-my-life",
      classId: "early-bird",
      weekNumber: 6,
      title: "God's Power in My Life",
      objective:
        "Establish a regular family worship habit, understand why people pray, and complete the God's World award by exploring creation.",
      memoryVerse: {
        text: "In the beginning God created the heavens and the earth.",
        reference: "Genesis 1:1",
      },
      materials: [
        { name: "Family worship record chart", quantity: "1 per child" },
        { name: "Bible" },
        { name: "Globe or world map" },
        { name: "Old magazines or nature printouts for collage" },
        { name: "Scissors" },
        { name: "Glue sticks" },
        { name: "Large paper or poster board", quantity: "1 per child" },
        { name: "Crayons or markers" },
        { name: "Song sheet: creation song" },
      ],
      sections: [
        {
          id: "eb-gpml-intro",
          type: "introduction",
          title: "Why Do People Pray?",
          duration: "7 mins",
          instructions:
            "Requirement 2: Ask each child: 'Have you asked someone you know why they pray? What did they say?' Collect a few answers. If children have not yet asked someone, role-play the conversation: leader plays an adult, child asks 'Why do you pray?' Discuss different answers — to say thank you, to ask for help, to feel close to God, to share worries. Then introduce the idea of family worship: Requirement 1: 'What would it look like to talk to God as a family every day?' Present the family worship record chart that children will take home to fill in for two weeks.",
          resources: ["Family worship record chart"],
        },
        {
          id: "eb-gpml-bible",
          type: "bible_story",
          title: "God's World — The Creation Story",
          duration: "10 mins",
          instructions:
            "Requirement 3a: Together, learn Genesis 1:1: 'In the beginning God created the heavens and the earth.' Ask: 'Who made our world?' Answer: God! Requirement 3b: Act out the story of creation while the leader reads or tells it. Assign each child a day: Day 1 — stretch arms wide (light), Day 2 — wave arms overhead (sky), Day 3 — crouch then slowly grow (plants), Day 4 — make a circle with arms (sun), Day 5 — flap arms and swim (birds and fish), Day 6 — roar like an animal then stand tall (animals and people), Day 7 — sit peacefully (Sabbath rest). After each day, everyone shouts: 'And God said it was GOOD!'",
          resources: ["Bible"],
        },
        {
          id: "eb-gpml-activity",
          type: "activity",
          title: "God's World Around Us",
          duration: "10 mins",
          instructions:
            "Requirement 3c: Sing a song about God's world together (e.g. 'He's Got the Whole World in His Hands' or 'God Made the World'). Requirement 3d: Look at a globe or map together. Each child points to where they live. Discuss how God made all the different countries, oceans, and continents. Requirement 3e: Each child names five of their favourite things God created. Adults record their answers. Share as a group — what is the most popular answer?",
          resources: ["Globe or world map", "Song sheet: creation song"],
        },
        {
          id: "eb-gpml-craft",
          type: "craft",
          title: "God's World Collage",
          duration: "12 mins",
          instructions:
            "Requirement 3f: Children make a collage, colour a picture of God's world, or (if outdoors) take a walk and find things He made. In the meeting, children create a collage using magazine pictures or their own drawings of things God created.",
          craftName: "My God's World Collage",
          materials: [
            { name: "Large paper or poster board", quantity: "1 per child" },
            { name: "Old magazines or nature printouts" },
            { name: "Scissors" },
            { name: "Glue sticks" },
            { name: "Crayons or markers" },
          ],
          steps: [
            "Write 'God Made My World' across the top of the poster",
            "Cut out pictures of nature, animals, people, sky, and water",
            "Arrange them on the poster to fill God's world",
            "Glue everything down",
            "Draw or add your own five favourite things God made",
            "Write Genesis 1:1 at the bottom",
          ],
        },
        {
          id: "eb-gpml-closing",
          type: "closing",
          title: "Closing — Family Worship Challenge",
          duration: "6 mins",
          instructions:
            "Say the memory verse together: 'In the beginning God created the heavens and the earth. Genesis 1:1.' Distribute the family worship record charts. Explain: Requirement 1 — children will have family worship at home every day for two weeks and record each day on the chart. The chart has spaces for two full weeks (Sunday through Saturday). Challenge them to complete it and bring it back. Close with a prayer asking God to make their homes places of worship and prayer.",
          resources: ["Family worship record chart", "Memory verse card"],
        },
      ],
    },

    // ─────────────────────────────────────────────────
    // MY SELF — Weeks 7–9
    // ─────────────────────────────────────────────────
    {
      id: "eb-i-am-special",
      classId: "early-bird",
      weekNumber: 7,
      title: "I Am Special",
      objective:
        "Complete the Left & Right award by distinguishing left from right in practical, playful contexts and recognising that God made each child unique.",
      memoryVerse: {
        text: "I praise you because I am fearfully and wonderfully made.",
        reference: "Psalm 139:14",
      },
      materials: [
        { name: "Red dot stickers", quantity: "5 per child" },
        { name: "Blue dot stickers", quantity: "5 per child" },
        { name: "Paper for name printing", quantity: "1 per child" },
        { name: "Pencils or crayons" },
        { name: "Their own shoes (worn to the meeting)" },
      ],
      sections: [
        {
          id: "eb-ias-intro",
          type: "introduction",
          title: "God Made You — Just Right!",
          duration: "5 mins",
          instructions:
            "Say: 'God made every single one of you special. He chose exactly how you would look, which hand you would write with, and how you would laugh.' Read Psalm 139:14 together. Ask: 'What makes YOU unique?' Let 2–3 children share. Introduce today's challenge: 'We are going to discover left and right — and it's more important than you think!'",
          resources: [],
        },
        {
          id: "eb-ias-bible",
          type: "bible_story",
          title: "God Knows Every Part of You",
          duration: "8 mins",
          instructions:
            "Read Psalm 139:13-16: God knit us together in our mother's womb. Every part of us was made on purpose. Ask: 'Did you know that even your hands are special to God?' Discuss how right-handed and left-handed people both exist because God made variety on purpose. Jonah 4:11 — God knows the number of people who cannot tell their right hand from their left. God cares about our hands!",
          resources: ["Bible"],
        },
        {
          id: "eb-ias-activity",
          type: "activity",
          title: "Left & Right Award Activities",
          duration: "15 mins",
          instructions:
            "Work through the Left & Right award requirements together: (1) Play 'Simon Says' using left/right — 'Simon says raise your LEFT hand! Simon says touch your RIGHT ear!' (2) Requirement 2: Ask each child which hand they draw with. Have them print their name with that hand on the paper. (3) Requirement 3: Place red dot stickers on the fingers of the left hand; place blue dot stickers on the right hand. (4) Requirement 4: Go to a sink or discuss — which side of the faucet is the hot water? Which side is cold? (left = hot in most countries.) (5) Requirement 5: Take off shoes. Have children put them back on the correct feet. (6) Requirement 6: Practise marching while chanting, 'Left, Right, Left — Left, Right, Left!' together across the room.",
          resources: ["Red dot stickers", "Blue dot stickers", "Paper", "Pencils"],
        },
        {
          id: "eb-ias-craft",
          type: "craft",
          title: "Left & Right Hand Print",
          duration: "10 mins",
          instructions:
            "Children trace both hands on a sheet of paper, label each 'LEFT' and 'RIGHT', and decorate with the dot sticker colours used in the activity.",
          craftName: "My Left & Right Hands",
          materials: [
            { name: "Paper", quantity: "1 per child" },
            { name: "Pencils or crayons" },
            { name: "Red dot stickers", quantity: "5 per child" },
            { name: "Blue dot stickers", quantity: "5 per child" },
          ],
          steps: [
            "Place your left hand on the paper and trace around it",
            "Place your right hand on the paper and trace around it",
            "Write 'LEFT' under the left hand, 'RIGHT' under the right hand",
            "Colour red dots on the left hand fingers",
            "Colour blue dots on the right hand fingers",
            "Write your name at the top",
          ],
        },
        {
          id: "eb-ias-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Do one final march around the room chanting 'Left, Right, Left!' Say the memory verse together: 'I praise you because I am fearfully and wonderfully made. Psalm 139:14.' Ask: 'What is one thing about yourself that you are thankful God made?' Close with a prayer thanking God for making each child exactly as they are.",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "eb-i-can-make-wise-choices",
      classId: "early-bird",
      weekNumber: 8,
      title: "I Can Make Wise Choices",
      objective:
        "Complete the Manners Fun award by learning the Golden Rule, practising five politeness words, and making a craft to illustrate good manners.",
      memoryVerse: {
        text: "Therefore, whatever you want men to do to you, do also to them, for this is the Law and the Prophets.",
        reference: "Matthew 7:12",
      },
      materials: [
        { name: "Bible" },
        { name: "Politeness word game chart (printed or drawn)", quantity: "1 per group" },
        { name: "Paper or card stock", quantity: "1 per child" },
        { name: "Old magazines for cutting" },
        { name: "Scissors" },
        { name: "Glue sticks" },
        { name: "Crayons or markers" },
        { name: "Small counters or tokens for game", quantity: "10 per team" },
      ],
      sections: [
        {
          id: "eb-icmwc-intro",
          type: "introduction",
          title: "The Golden Rule",
          duration: "6 mins",
          instructions:
            "Requirement 1: Learn the Golden Rule — Matthew 7:12. Read it aloud together: 'Therefore, whatever you want men to do to you, do also to them.' Ask: 'What does this mean in your own words?' Let children explain it in simple terms — treat others the way you want to be treated. Ask: 'Can you think of a time when someone treated you the way you WANTED to be treated? How did it feel?' Introduce today's five politeness words: Please, Thank you, You're welcome, Excuse me, I'm sorry.",
          resources: ["Bible"],
        },
        {
          id: "eb-icmwc-bible",
          type: "bible_story",
          title: "Jesus and the Golden Rule",
          duration: "8 mins",
          instructions:
            "Read Matthew 7:12 from the Bible. Explain that Jesus taught this as a summary of how to treat people. Walk through each of the five politeness words with a scenario: 'Please' — when you ask for help. 'Thank you' — when someone does something kind. 'You're welcome' — when someone thanks you. 'Excuse me' — when you need to pass or get someone's attention. 'I'm sorry' — when you have hurt someone. Requirement 2: Ask children: 'What are five politeness words used in your culture?' Confirm the five and add any culture-specific extras the children name.",
          resources: ["Bible"],
        },
        {
          id: "eb-icmwc-activity",
          type: "activity",
          title: "Politeness Word Game",
          duration: "12 mins",
          instructions:
            "Requirement 4: Play the politeness game using the chart from the activity book. Set up 5 rows (one per politeness word) and 10 columns (10 rounds). In each round, leader describes a scenario. Children decide which politeness word applies and a counter is placed in the correct row. Example scenarios: 'You accidentally bump into someone' → Excuse me. 'Your friend gives you a birthday card' → Thank you. 'You need the crayons on the other side of the table' → Please. Play until all 10 rounds are complete. Review which words were used most.",
          resources: ["Politeness word game chart", "Small counters or tokens"],
        },
        {
          id: "eb-icmwc-craft",
          type: "craft",
          title: "Politeness Collage",
          duration: "12 mins",
          instructions:
            "Requirement 3: Children draw or cut and paste pictures to illustrate one of the five politeness words — showing what it looks like in real life.",
          craftName: "My Politeness Collage",
          materials: [
            { name: "Paper or card stock", quantity: "1 per child" },
            { name: "Old magazines for cutting" },
            { name: "Scissors" },
            { name: "Glue sticks" },
            { name: "Crayons or markers" },
          ],
          steps: [
            "Choose one politeness word to illustrate",
            "Write the word in large letters at the top of the page",
            "Draw or cut and paste a picture showing someone using that word",
            "Add a speech bubble with the word being spoken",
            "Write one sentence explaining what is happening",
            "Decorate the border with the other four politeness words",
          ],
        },
        {
          id: "eb-icmwc-closing",
          type: "closing",
          title: "Closing",
          duration: "4 mins",
          instructions:
            "Practise using each of the five politeness words in a sentence as a group — going around the circle. Say the memory verse together: 'Therefore, whatever you want men to do to you, do also to them. Matthew 7:12.' Close with a prayer asking God to help us use kind, polite words that reflect His love to the people around us.",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "eb-i-can-care-for-my-body",
      classId: "early-bird",
      weekNumber: 9,
      title: "I Can Care for My Body",
      objective:
        "Complete the Know Your Body award by naming and drawing twelve body parts, discussing how to use them for God, and understanding that the body is a temple of the Holy Spirit.",
      memoryVerse: {
        text: "Or don't you know that your body is a temple of the Holy Spirit who is in you? Don't you know that you have the Holy Spirit from God, and you don't belong to yourselves?",
        reference: "1 Corinthians 6:19 (CEB)",
      },
      materials: [
        { name: "Bible" },
        { name: "Large body outline template or large roll of paper", quantity: "1 per child" },
        { name: "Crayons or markers" },
        { name: "Label cards for body parts (optional)" },
        { name: "Mirror (optional)" },
        { name: "Cue cards from activity book (optional)" },
      ],
      sections: [
        {
          id: "eb-iccfmb-intro",
          type: "introduction",
          title: "Your Amazing Body",
          duration: "5 mins",
          instructions:
            "Ask: 'What can your body do that is amazing?' Let children share — run, jump, hug, smile, talk, think. Ask: 'Did you know every single part of your body was made by God on purpose?' Read 1 Corinthians 6:19 together. Ask: 'What does it mean that your body is a temple? A temple is a special place where God lives — so your body is very important!'",
          resources: ["Bible"],
        },
        {
          id: "eb-iccfmb-bible",
          type: "bible_story",
          title: "Your Body Belongs to God",
          duration: "8 mins",
          instructions:
            "Read 1 Corinthians 6:19-20 in full: 'You are not your own; you were bought at a price. Therefore honour God with your body.' Explain: God loves us so much He sent Jesus to buy us back. Because of that, our bodies belong to God — and we take care of them to honour Him. Requirement 4: Ask: 'What are knees for?' Knees help us kneel to pray, run, play, and jump. Requirement 5: 'What does your face do for you and others?' Smiling, frowning, showing love, encouraging others. Requirement 7: 'How can you use your mouth for Jesus?' Singing, praying, saying kind words, telling others about God, saying sorry.",
          resources: ["Bible"],
        },
        {
          id: "eb-iccfmb-activity",
          type: "activity",
          title: "Name Twelve Body Parts",
          duration: "10 mins",
          instructions:
            "Requirement 2: Help children name twelve parts of the body. Go around the room — each child names one part without repeating. Aim for: head, neck, shoulders, chest, arms, elbows, hands, fingers, hips, knees, feet, toes (and others like back, stomach, ears, eyes, nose, mouth). Requirement 6: Ask: 'Name some useful things you can do with your hands.' Collect answers — draw, write, build, hug, cook, help. Celebrate each answer. Use the optional cue cards as prompts for any child who needs help.",
          resources: ["Cue cards (optional)"],
        },
        {
          id: "eb-iccfmb-craft",
          type: "craft",
          title: "My Body — Draw & Label",
          duration: "12 mins",
          instructions:
            "Requirement 3: Children draw their body and label twelve parts.",
          craftName: "My Body Drawing",
          materials: [
            { name: "Large paper or body outline template", quantity: "1 per child" },
            { name: "Crayons or markers" },
          ],
          steps: [
            "Draw a full outline of your body (or use the pre-printed template)",
            "Colour your body to look like you",
            "Draw lines to label at least twelve body parts",
            "Write the name of each body part on the label line",
            "At the bottom write 1 Corinthians 6:19 — 'My body is a temple of the Holy Spirit'",
            "Write your name on the front",
          ],
        },
        {
          id: "eb-iccfmb-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Say the memory verse together: '1 Corinthians 6:19 — your body is a temple of the Holy Spirit.' Ask: 'What is one way you will care for your body this week, to honour God?' Let each child answer briefly. Close with a prayer thanking God for our amazing bodies and asking Him to help us use every part to honour Him.",
          resources: ["Memory verse card"],
        },
      ],
    },

    // ─────────────────────────────────────────────────
    // MY FAMILY — Weeks 10–12
    // ─────────────────────────────────────────────────
    {
      id: "eb-i-have-a-family",
      classId: "early-bird",
      weekNumber: 10,
      title: "I Have a Family",
      objective:
        "Learn and recite the fifth commandment, understand why God gave us families, and discuss how to honour parents and guardians.",
      memoryVerse: {
        text: "Honor your father and your mother, that your days may be long in the land that the Lord your God is giving you.",
        reference: "Exodus 20:12",
      },
      materials: [
        { name: "Bible" },
        { name: "Paper for family drawing", quantity: "1 per child" },
        { name: "Crayons or markers" },
        { name: "Commandments display card (optional)" },
      ],
      sections: [
        {
          id: "eb-ihaf-intro",
          type: "introduction",
          title: "Who Is in Your Family?",
          duration: "5 mins",
          instructions:
            "Ask children: 'Who is in your family? Who lives in your home?' Let each child name their family members. Celebrate the variety of family shapes — big families, small families, grandparents, aunts and uncles. Say: 'Every family is a gift from God. Today we are going to learn something God said about how we treat our families.'",
          resources: [],
        },
        {
          id: "eb-ihaf-bible",
          type: "bible_story",
          title: "The Fifth Commandment",
          duration: "10 mins",
          instructions:
            "Requirement 1: Read Exodus 20:12 together: 'Honor your father and your mother, that your days may be long in the land that the Lord your God is giving you.' This is the fifth of God's Ten Commandments. Ask: 'What does it mean to HONOUR someone?' To honour means to respect, obey, value, and show love. Discuss what honouring a parent looks like: Obeying the first time you're asked. Saying please and thank you at home. Helping without complaining. Not arguing back. Speaking respectfully. Tell the story of young Jesus obeying Mary and Joseph in Luke 2:51: 'Then he went down to Nazareth with them and was obedient to them.' Even Jesus honoured His earthly parents!",
          resources: ["Bible"],
        },
        {
          id: "eb-ihaf-activity",
          type: "activity",
          title: "Recite the Fifth Commandment",
          duration: "8 mins",
          instructions:
            "Practice reciting Exodus 20:12 until each child can say it independently. Use echo repetition: leader says half, children repeat. Then say it together. Then try it individually. Play 'Pass the Verse': one child says the first word, the next says the second word, and so on around the circle. Discuss: 'What is one thing you can do THIS WEEK to honour your parent or guardian?' Let each child share their specific plan.",
          resources: ["Commandments display card (optional)"],
        },
        {
          id: "eb-ihaf-craft",
          type: "craft",
          title: "My Family Drawing",
          duration: "10 mins",
          instructions:
            "Children draw a picture of their family — everyone who is important to them — and write 'I honour my family' or 'Exodus 20:12' at the bottom to take home.",
          craftName: "My Family Portrait",
          materials: [
            { name: "Paper for family drawing", quantity: "1 per child" },
            { name: "Crayons or markers" },
          ],
          steps: [
            "Draw every member of your family (and pets if you like!)",
            "Write each person's name beneath them",
            "At the bottom write 'I honour my family — Exodus 20:12'",
            "Decorate the border",
            "Write your name on the back",
            "Give this to a family member when you get home",
          ],
        },
        {
          id: "eb-ihaf-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Stand and say Exodus 20:12 from memory together. Celebrate any child who can say it completely on their own. Close with a family prayer: 'Dear God, thank you for my family. Help me to honour them every day. Amen.' Challenge: Recite Exodus 20:12 to a family member at home tonight.",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "eb-families-care-for-each-other",
      classId: "early-bird",
      weekNumber: 11,
      title: "Families Care for Each Other",
      objective:
        "Complete the Home Helper I award by identifying ways to help at home, choosing one helping task to do for a week, and learning a song about helpers.",
      memoryVerse: {
        text: "Carry each other's burdens, and in this way you will fulfil the law of Christ.",
        reference: "Galatians 6:2",
      },
      materials: [
        { name: "Bible" },
        { name: "Home Helper week chart", quantity: "1 per child" },
        { name: "Pencils" },
        { name: "Helping pictures sheet (for circling options)", quantity: "1 per child" },
        { name: "Song sheet: 'Jesus' Hands Were Kind Hands' or helper song of choice" },
        { name: "Bible or storybook with a helping story" },
      ],
      sections: [
        {
          id: "eb-fcfeo-intro",
          type: "introduction",
          title: "Helpers at Home",
          duration: "6 mins",
          instructions:
            "Requirement 1: Ask: 'What body parts do you use to help at home?' Hands — washing dishes, making the bed, setting the table. Feet — fetching things, walking to help. Eyes — watching for ways to help. Mouth — speaking kind words and offering to help. List the body parts on the board as children suggest them. Then ask: 'What kinds of jobs do you do at home to help?'",
          resources: [],
        },
        {
          id: "eb-fcfeo-bible",
          type: "bible_story",
          title: "Helpers in the Bible",
          duration: "8 mins",
          instructions:
            "Read Galatians 6:2: 'Carry each other's burdens, and in this way you will fulfil the law of Christ.' Requirement 5: Have someone read a story from a Bible or storybook about a helper. Suggestions: young Miriam watching baby Moses, the boy who brought lunch to Jesus, Ruth helping Naomi. After the story ask: 'How did the helper in this story carry someone's burden?'",
          resources: ["Bible or storybook with helping story"],
        },
        {
          id: "eb-fcfeo-activity",
          type: "activity",
          title: "Choose My Helping Task",
          duration: "10 mins",
          instructions:
            "Requirement 2: Each child looks at the pictures of home-helping tasks and circles (or draws) the ones they think they could do — washing dishes, making the bed, feeding a pet, sweeping, setting the table, bringing in the washing, watering plants. Requirement 3: From the list, each child picks ONE way they will help at home — and writes it on the Home Helper week chart. They will record each day they do it for one week (Days 1–7). Discuss: 'What is the hardest thing about helping even when you don't feel like it?'",
          resources: ["Helping pictures sheet", "Home Helper week chart", "Pencils"],
        },
        {
          id: "eb-fcfeo-craft",
          type: "craft",
          title: "My Home Helper Week Chart",
          duration: "8 mins",
          instructions:
            "Decorate the Home Helper week chart that children will take home and fill in each day they complete their chosen helping task.",
          craftName: "Home Helper Chart",
          materials: [
            { name: "Home Helper week chart", quantity: "1 per child" },
            { name: "Crayons or markers" },
          ],
          steps: [
            "Write your name at the top of the chart",
            "Write your chosen helping task in the 'Way to Help' row",
            "Decorate the chart with drawings of your helper task",
            "Write Galatians 6:2 at the bottom",
            "Take the chart home and mark each day you help",
          ],
        },
        {
          id: "eb-fcfeo-closing",
          type: "closing",
          title: "Closing — Helper Song",
          duration: "8 mins",
          instructions:
            "Requirement 4: Learn a song about helpers together — 'Jesus' Hands Were Kind Hands' or another appropriate helper song. Sing it twice as a group. Say the memory verse together: 'Carry each other's burdens, and in this way you will fulfil the law of Christ. Galatians 6:2.' Close with a prayer: 'Dear God, help me to be a helper at home this week. Help me to carry the burdens of my family with a cheerful heart. Amen.'",
          resources: ["Song sheet"],
        },
      ],
    },

    {
      id: "eb-family-helps-me-care",
      classId: "early-bird",
      weekNumber: 12,
      title: "My Family Helps Me Care for Myself",
      objective:
        "Complete the Fire Safety award by learning fire safety rules, memorising a home address and emergency number, and understanding that God's angels guard us.",
      memoryVerse: {
        text: "For he will command his angels concerning you to guard you in all your ways.",
        reference: "Psalm 91:11",
      },
      materials: [
        { name: "Bible" },
        { name: "Fire safety information sheet", quantity: "1 per child" },
        { name: "Address/phone number card (blank)", quantity: "1 per child" },
        { name: "Pencils or markers" },
        { name: "Paper for fire engine drawing" },
        { name: "Red and yellow crayons" },
        { name: "Note-taking sheet for address/number (for caregivers)" },
      ],
      sections: [
        {
          id: "eb-fhmcm-intro",
          type: "introduction",
          title: "Staying Safe",
          duration: "6 mins",
          instructions:
            "Ask: 'Can you think of something that could be dangerous at home?' Collect answers — fire, electricity, sharp objects, hot water. Say: 'Our families help us stay safe. Today we are learning about one of the most important safety rules — fire safety.' Ask: 'Has anyone seen a fire engine? Have you ever met a firefighter?' Let children share.",
          resources: [],
        },
        {
          id: "eb-fhmcm-bible",
          type: "bible_story",
          title: "God's Angels Guard Us",
          duration: "7 mins",
          instructions:
            "Read Psalm 91:11: 'For he will command his angels concerning you to guard you in all your ways.' Tell the story of Shadrach, Meshach, and Abednego (Daniel 3) who were thrown into a fiery furnace but were protected. The king looked in and saw a fourth person walking with them in the fire — and they were not burned. Ask: 'Who protected them?' God did — He sent an angel. Just as God protected them from fire, He has given us knowledge and rules to keep us safe from fire today.",
          resources: ["Bible"],
        },
        {
          id: "eb-fhmcm-activity",
          type: "activity",
          title: "Fire Safety Rules",
          duration: "12 mins",
          instructions:
            "Work through all Fire Safety award requirements: Requirement 1: 'What should you do if your clothes catch on fire?' STOP — DROP — ROLL. Demonstrate together and have children practise. Requirement 2: 'What should you do if there is smoke in your house and it's hard to breathe?' Stay low to the ground where the air is cleaner. Crawl to the exit. Requirement 3: Memorise your phone number and street address. Each child writes or dictates their phone number and address on the card. Practise saying it aloud. Requirement 4: 'What number do you call if there is a fire? What do you tell the person who answers?' Practice: 'There is a fire at [address]. Please send a fire truck.' Requirement 5: Discuss planning a visit to a fire department — or arrange for a fireman or fire truck to visit the group.",
          resources: ["Address/phone number card", "Pencils", "Fire safety information sheet"],
        },
        {
          id: "eb-fhmcm-craft",
          type: "craft",
          title: "My Fire Safety Card",
          duration: "10 mins",
          instructions:
            "Children make a personal fire safety card with their address, emergency number, and the Stop-Drop-Roll reminder to keep at home.",
          craftName: "My Fire Safety Card",
          materials: [
            { name: "Address/phone number card (blank)", quantity: "1 per child" },
            { name: "Pencils or markers" },
            { name: "Red and yellow crayons" },
          ],
          steps: [
            "Write your full name at the top",
            "Write your home address",
            "Write your home phone number",
            "Write the emergency fire number for your area",
            "Draw the Stop-Drop-Roll steps as three small pictures",
            "Decorate the card with red and yellow (fire colours)",
            "Show your card to a parent or guardian tonight",
          ],
        },
        {
          id: "eb-fhmcm-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Practise Stop-Drop-Roll one more time together as a group. Practise saying the emergency number and address in unison. Say the memory verse: 'For he will command his angels concerning you to guard you in all your ways. Psalm 91:11.' Close with a prayer thanking God for His protection and for the people — firefighters, parents, teachers — who help keep us safe.",
          resources: ["Memory verse card"],
        },
      ],
    },

    // ─────────────────────────────────────────────────
    // MY WORLD — Weeks 13–15
    // ─────────────────────────────────────────────────
    {
      id: "eb-world-of-friends",
      classId: "early-bird",
      weekNumber: 13,
      title: "The World of Friends",
      objective:
        "Complete the My Community Friends award by identifying five community friends, creating a friend scrapbook, naming three ways to improve the neighbourhood, and telling a friend that Jesus loves them.",
      memoryVerse: {
        text: "Love your neighbour as yourself.",
        reference: "Mark 12:31",
      },
      materials: [
        { name: "Five 'My Friend' scrapbook pages (from activity book)", quantity: "1 set per child" },
        { name: "Crayons, markers, or coloured pencils" },
        { name: "Photos of community friends (optional — children may draw)" },
        { name: "Glue sticks (if using photos)" },
        { name: "Note-taking sheet for leader/caregiver" },
      ],
      sections: [
        {
          id: "eb-wof-intro",
          type: "introduction",
          title: "Friends in Our Community",
          duration: "7 mins",
          instructions:
            "Requirement 1: Ask each child to name five different friends who live in their community — not just school friends, but neighbours, people from church, children from the park. Adults record the names in the note-taking area. Ask: 'How did you become friends with each of these people? What do you like about them?' Celebrate the variety — different ages, different backgrounds.",
          resources: ["Note-taking sheet"],
        },
        {
          id: "eb-wof-bible",
          type: "bible_story",
          title: "Jesus and the Community",
          duration: "8 mins",
          instructions:
            "Read Mark 12:31: 'Love your neighbour as yourself.' Discuss: 'Who is your neighbour?' Jesus taught that a neighbour is anyone around us who needs our help. Read the story of Zacchaeus (Luke 19:1-10): Jesus visited Zacchaeus in his own community. Zacchaeus was not popular, but Jesus saw him and showed love. That changed Zacchaeus completely — he gave back what he had taken and more. Ask: 'How can showing love to someone in our community change them?'",
          resources: ["Bible"],
        },
        {
          id: "eb-wof-activity",
          type: "activity",
          title: "Making Our Neighbourhood Better",
          duration: "8 mins",
          instructions:
            "Requirement 3: Ask: 'What are three things that you and your friends can do to make your neighbourhood a better place?' Guide children toward practical ideas: picking up litter, greeting neighbours with a smile, inviting a lonely child to play, baking something for a neighbour, planting flowers. Record each child's three ideas. Requirement 6: Discuss how to make a NEW friend in the neighbourhood — how do you introduce yourself? What do you say? Practise a short introduction together. Requirement 5 (take-home): Each child decides what they will do for a community friend and writes it in the chart.",
          resources: ["Note-taking sheet"],
        },
        {
          id: "eb-wof-craft",
          type: "craft",
          title: "Community Friend Scrapbook",
          duration: "13 mins",
          instructions:
            "Requirement 2: Children complete pages 1–5 of the 'My Friend' scrapbook — one page for each community friend. They draw or paste a picture, write the friend's name, and write one thing they like about that friend.",
          craftName: "My Community Friends Scrapbook",
          materials: [
            { name: "Five 'My Friend' scrapbook pages", quantity: "1 set per child" },
            { name: "Crayons, markers, or coloured pencils" },
            { name: "Photos or drawings of community friends" },
            { name: "Glue sticks" },
          ],
          steps: [
            "Write your name on the cover",
            "On page 1: draw or paste a picture of Friend #1 and write their name",
            "Write one thing you like about this friend",
            "Repeat for pages 2, 3, 4, and 5 — one page per community friend",
            "Decorate the borders of each page",
            "On the last page write: 'Jesus loves my friends!' and Mark 12:31",
          ],
        },
        {
          id: "eb-wof-closing",
          type: "closing",
          title: "Closing — Telling Friends Jesus Loves Them",
          duration: "6 mins",
          instructions:
            "Requirement 4: As a group, practise saying to one another: '[Name], Jesus loves you!' Let each child say it to at least two other children. Then say the memory verse together: 'Love your neighbour as yourself. Mark 12:31.' Challenge for the week: Do something nice for a community friend (Requirement 5) and tell at least one friend 'Jesus loves you' (Requirement 4). Close with a prayer for the community around each child's home.",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "eb-world-of-other-people",
      classId: "early-bird",
      weekNumber: 14,
      title: "The World of Other People",
      objective:
        "Complete the Playing with Friends award by exploring what makes a true friend, how to make friends, and making a craft to give to a friend.",
      memoryVerse: {
        text: "My command is this: Love each other as I have loved you.",
        reference: "John 15:12",
      },
      materials: [
        { name: "Bible" },
        { name: "Note-taking sheet for adult caregivers" },
        { name: "Craft materials (leader's choice for friend gift)" },
        { name: "Crayons, markers" },
        { name: "Paper, card stock, or foam" },
        { name: "Scissors and glue" },
        { name: "Song sheet: friend-themed song (optional)" },
      ],
      sections: [
        {
          id: "eb-woop-intro",
          type: "introduction",
          title: "What Is a Friend?",
          duration: "6 mins",
          instructions:
            "Requirement 1: Ask: 'What is a friend?' Let children define it in their own words. Write key ideas on the board — someone who is kind, who listens, who plays with you, who helps you, who is honest. Requirement 2: Ask: 'Name three ways you can make friends.' Record answers. Common ideas: say hello, invite someone to play, ask their name, sit next to them, share something. Validate all ideas and add any the children miss.",
          resources: ["Note-taking sheet"],
        },
        {
          id: "eb-woop-bible",
          type: "bible_story",
          title: "Did Jesus Have Friends?",
          duration: "10 mins",
          instructions:
            "Requirement 6: Ask: 'Did Jesus have friends?' Yes! Read John 15:12-13. Tell a story about one of Jesus' friendships — the disciples, Lazarus (John 11:35-36, 'Jesus wept' — showing deep friendship), or Mary and Martha. Adults help children find a Bible story about Jesus and His friends. Ask: 'What made Jesus such a good friend?' He listened, He helped, He never gave up on people, He was honest but kind.",
          resources: ["Bible"],
        },
        {
          id: "eb-woop-activity",
          type: "activity",
          title: "Choosing & Being a Good Friend",
          duration: "12 mins",
          instructions:
            "Requirement 3: Ask: 'Name four things you can talk about to be friendly with someone.' (Hobbies, family, food likes/dislikes, school, favourite animals.) Requirement 4: 'Name four things you need to think about when choosing a friend.' (Are they kind? Are they honest? Do they make good choices? Do they encourage you?) Requirement 5: 'Name three ways you can know a person is a right friend for you.' (They make you feel good about yourself. They encourage you to do right. They include you and others.) Record all answers in the note-taking area. Discuss: 'Can we still be kind to people who are NOT our close friends?' Yes — we show kindness to everyone.",
          resources: ["Note-taking sheet"],
        },
        {
          id: "eb-woop-craft",
          type: "craft",
          title: "A Gift for My Friend",
          duration: "12 mins",
          instructions:
            "Requirement 7: Children make a craft to give to a friend — a friendship card, a decorated bookmark, a small drawing, or another simple gift chosen by the leader.",
          craftName: "Friend Gift",
          materials: [
            { name: "Card stock or foam", quantity: "1 per child" },
            { name: "Crayons or markers" },
            { name: "Scissors" },
            { name: "Glue" },
            { name: "Stickers or sequins for decoration (optional)" },
          ],
          steps: [
            "Decide who you will give the gift to",
            "Write their name on the gift",
            "Decorate with drawings, stickers, or patterns",
            "Write a message inside: 'You are my friend — Jesus loves you!'",
            "Sign your name",
            "Give your gift to your friend this week",
          ],
        },
        {
          id: "eb-woop-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Requirement 8: Children choose one of the following to close: learn a song about friends, share a story about a friend, or recite a poem about friendship. Say the memory verse together: 'My command is this: Love each other as I have loved you. John 15:12.' Close with a prayer: 'Dear God, thank you for the friends you have given us. Help us to be the kind of friend Jesus is — loving, kind, and true. Amen.'",
          resources: ["Song sheet (optional)", "Memory verse card"],
        },
      ],
    },

    {
      id: "eb-world-of-nature",
      classId: "early-bird",
      weekNumber: 15,
      title: "The World of Nature",
      objective:
        "Complete the Scavenger Hunt award by going on a guided nature walk, finding items from nature, connecting them to Bible stories, and celebrating God's creation together.",
      memoryVerse: {
        text: "The heavens declare the glory of God; the skies proclaim the work of his hands.",
        reference: "Psalm 19:1",
      },
      materials: [
        { name: "Scavenger Hunt checklist", quantity: "1 per child" },
        { name: "Small bag or basket for collecting items", quantity: "1 per child" },
        { name: "Plastic egg or small container", quantity: "1 per child" },
        { name: "Small treat to put in egg (grapes, raisins, crackers)", quantity: "a few per child" },
        { name: "Something red (flower, crayon, piece of material — one to find)" },
        { name: "Bible story item (small basket, stones, multi-coloured material)" },
        { name: "Nature items to find: acorns, pine cones, leaves, sticks" },
        { name: "Pencils for checklist" },
        { name: "Bible" },
      ],
      sections: [
        {
          id: "eb-won-intro",
          type: "introduction",
          title: "God's World Around Us",
          duration: "6 mins",
          instructions:
            "Read Psalm 19:1: 'The heavens declare the glory of God; the skies proclaim the work of his hands.' Ask: 'Where do you see God's creation every day?' Sun, trees, birds, clouds, water, animals. Say: 'Today we are going on a scavenger hunt to find God's creation and connect it to stories in the Bible!' Distribute the Scavenger Hunt checklist and small bags. Review what they will be looking for before heading out.",
          resources: ["Scavenger Hunt checklist", "Small bag per child"],
        },
        {
          id: "eb-won-bible",
          type: "bible_story",
          title: "Creation in the Bible",
          duration: "8 mins",
          instructions:
            "Before going outside, connect the scavenger hunt items to Bible stories. Requirement 3 preview: A small basket = baby Moses in the Nile River (Exodus 2). Cotton or lamb's wool = the lamb that was sacrificed, pointing to Jesus the Lamb of God. Stones = the altar Abraham built, or the stone David used, or the stone rolled away from Jesus' tomb. Multi-coloured material = Joseph's coat of many colours (Genesis 37). Tell one of these Bible stories briefly to build excitement for finding the items. Then read Psalm 19:1 again as a send-off verse.",
          resources: ["Bible"],
        },
        {
          id: "eb-won-activity",
          type: "activity",
          title: "Scavenger Hunt",
          duration: "20 mins",
          instructions:
            "Requirement 1: Go on the scavenger hunt with a parent, teacher, or another adult. Complete all requirements: Requirement 2: Find two items from nature — from the checklist: acorns, pine cones, nuts, leaves, a tiny wildflower, or a stick shaped like a letter. Check off each item found. Requirement 3: Find something relating to a Bible story — small basket, stones, cotton, or multi-coloured material. Talk about the Bible story it connects to. Requirement 4: Find something that is red — a flower, a piece of coloured material, a red crayon. Requirement 5: Find or receive a plastic egg (or small container), open it, and share the contents with another Early Bird. After the hunt, gather to review the Scavenger Hunt checklist together and celebrate every completed requirement.",
          resources: ["Scavenger Hunt checklist", "Plastic egg with treat", "Red item pre-hidden", "Bible story item pre-hidden"],
        },
        {
          id: "eb-won-craft",
          type: "craft",
          title: "Nature Thank-You Collection",
          duration: "10 mins",
          instructions:
            "Children arrange their nature finds (leaves, sticks, pine cones) into a small nature collection display on paper, gluing what they can, and write Psalm 19:1 across the top as a thank-you card to God for His creation.",
          craftName: "My Nature Collection",
          materials: [
            { name: "Large paper or card stock", quantity: "1 per child" },
            { name: "Craft glue" },
            { name: "Nature items found on the hunt" },
            { name: "Crayons or markers" },
          ],
          steps: [
            "Write 'The Heavens Declare — Psalm 19:1' across the top",
            "Arrange your nature items on the paper",
            "Glue the flat items (leaves, petals) to the paper",
            "Draw the items that cannot be glued",
            "Label each item with its name",
            "Write one word that describes how it makes you feel about God",
          ],
        },
        {
          id: "eb-won-closing",
          type: "closing",
          title: "Closing — Celebrating Creation",
          duration: "6 mins",
          instructions:
            "Gather everyone with their nature collections. Each child shares one favourite item they found and why it makes them think of God. Say the memory verse together: 'The heavens declare the glory of God; the skies proclaim the work of his hands. Psalm 19:1.' Celebrate the completion of the Scavenger Hunt award and all the Early Bird requirements! Close with a prayer: 'Dear God, your world is so beautiful. Thank you for making it all for us. Help us to take care of your world and to see you in it every day. Amen.'",
          resources: ["Memory verse card"],
        },
      ],
    },
  ],
};

export default earlyBird;
