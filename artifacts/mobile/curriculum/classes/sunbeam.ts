import type { AdventurerClassDef } from "../types";

const sunbeam: AdventurerClassDef = {
  id: "sunbeam",
  name: "Sunbeam",
  ageRange: "8–9 years",
  description: "Shining God's light through faith, family, and service in the world.",
  color: "#FCA5A5",
  lessons: [
    // ─────────────────────────────────────────────────
    // BASIC — Weeks 1–3
    // ─────────────────────────────────────────────────
    {
      id: "sb-pledge-and-law",
      classId: "sunbeam",
      weekNumber: 1,
      title: "The Adventurer Law",
      objective:
        "Repeat the Adventurer Law from memory and understand how each quality applies to everyday life.",
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
          id: "sb-pal-intro",
          type: "introduction",
          title: "Welcome & Opening Pledge",
          duration: "5 mins",
          instructions:
            "Gather children together. Recite the Adventurer Pledge aloud: 'Because Jesus loves me, I will always do my best.' Ask: 'Why do you think we say this every time we meet?' Let 2–3 children share. Explain that today they will learn the Adventurer Law and what it means to live it every single day as a Sunbeam.",
          resources: ["Adventurer Pledge and Law display card"],
        },
        {
          id: "sb-pal-bible",
          type: "bible_story",
          title: "What the Law Looks Like",
          duration: "10 mins",
          instructions:
            "Read Matthew 5:14-16: 'You are the light of the world. A town built on a hill cannot be hidden... let your light shine before others, that they may see your good deeds and glorify your Father in heaven.' Explain each part of the Adventurer Law with a real-life example for an 8–9 year old: Be obedient — following instructions the first time. Be pure — choosing kind words and clean thoughts. Be true — telling the truth even when it's uncomfortable. Be kind — noticing when someone is left out. Be respectful — listening when someone else is speaking. Be attentive — giving your full attention. Be helpful — looking for ways to serve without being asked. Be cheerful — keeping a positive attitude. Be thoughtful — thinking about how others feel. Be reverent — being quiet and focused during prayer and worship.",
          resources: ["Bible"],
        },
        {
          id: "sb-pal-activity",
          type: "activity",
          title: "Law Scenarios Game",
          duration: "8 mins",
          instructions:
            "Read out real-life scenarios one at a time. Children must call out which part of the Adventurer Law applies. Example scenarios: 'Your teacher is explaining something and another child is talking loudly — which Law quality is needed?' (Attentive.) 'A new child sits alone at lunch — which quality should you show?' (Kind.) 'Your parent asks you to tidy your room but you'd rather play — which quality applies?' (Obedient.) After running through 5–6 scenarios, have each child recite the full Adventurer Law from memory to a partner.",
          resources: ["Adventurer Pledge and Law display card"],
        },
        {
          id: "sb-pal-craft",
          type: "craft",
          title: "My Adventurer Law Bookmark",
          duration: "12 mins",
          instructions:
            "Children create a bookmark listing the Adventurer Law to take home and practise each day.",
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
            "Beside each quality, write one way you will live it this week",
            "Decorate the border with drawings or stickers",
            "Write your name on the back",
            "Practise reading it aloud before taking it home",
          ],
        },
        {
          id: "sb-pal-closing",
          type: "closing",
          title: "Closing — Law from Memory",
          duration: "5 mins",
          instructions:
            "Stand together and recite the full Adventurer Pledge and Law from memory — without looking at the card. Celebrate with applause. Challenge: practise the Law every morning at home this week. Close with a short prayer thanking Jesus for helping us live the Law and shine as Sunbeams in the world.",
          resources: ["Adventurer Pledge and Law display card"],
        },
      ],
    },

    {
      id: "sb-reading-ii",
      classId: "sunbeam",
      weekNumber: 2,
      title: "Reading II — God's Word and Good Books",
      objective:
        "Complete the Reading II award by reading or listening to six books from approved categories, keeping a reading log, and sharing what was learned.",
      memoryVerse: {
        text: "Your word is a lamp to my feet and a light to my path.",
        reference: "Psalm 119:105",
      },
      materials: [
        { name: "Reading Log sheets from activity book", quantity: "1 per child" },
        { name: "Six age-appropriate books (one per category)" },
        { name: "Pencils or pens" },
        { name: "Card stock for reading certificate craft", quantity: "1 per child" },
        { name: "Crayons or markers" },
      ],
      sections: [
        {
          id: "sb-rii-intro",
          type: "introduction",
          title: "Why Reading Matters",
          duration: "5 mins",
          instructions:
            "Ask: 'What was the last book you read? What did you enjoy about it?' Let 2–3 children share. Say: 'God gave us minds that love to learn through stories and facts. The Reading II award helps us explore different kinds of books — from the Bible to nature to history.' Introduce the six categories: (1) Two chapters from Mark, (2) A Bible story or book about Jesus, (3) A book on health or safety, (4) A book on family, friends, or feelings, (5) A book on history or missions, (6) A book on nature.",
          resources: ["Reading Log sheets"],
        },
        {
          id: "sb-rii-bible",
          type: "bible_story",
          title: "The Book of Mark — Reading Together",
          duration: "12 mins",
          instructions:
            "Reading II Requirement 1: Read two chapters from the book of Mark together from a simple modern translation. Suggested chapters: Mark 1 (Jesus is baptised, begins His ministry) and Mark 10 (Jesus and the children, the rich young man). After reading, ask: 'What stood out to you? What did you learn about Jesus?' Record children's answers in the reading log. Discuss: 'Why is it important to read the Bible in its own words, not just hear stories about it?'",
          resources: ["Bible (modern translation)", "Reading Log sheets"],
        },
        {
          id: "sb-rii-activity",
          type: "activity",
          title: "Reading Log & Book Discussion",
          duration: "12 mins",
          instructions:
            "Help children fill in their Reading Log for the books they have already read or listened to (categories 2–6). For each book: write the name of the book, author, date completed, and a comment. If a child has not yet read all six, plan together which books they will read before the next meeting. Discuss one book from category 5 (history or missions) together as a group — share something surprising or inspiring from the story. Discuss: 'How do books about missionaries show God's love for people around the world?'",
          resources: ["Reading Log sheets", "Pencils"],
        },
        {
          id: "sb-rii-craft",
          type: "craft",
          title: "My Reading Certificate",
          duration: "10 mins",
          instructions:
            "Children create a personal reading certificate to celebrate completing the Reading II award.",
          craftName: "Reading II Certificate",
          materials: [
            { name: "Card stock", quantity: "1 per child" },
            { name: "Crayons or markers" },
            { name: "Ruler" },
          ],
          steps: [
            "Write 'Reading II Award' across the top in large letters",
            "Write your name: 'This certifies that [your name] has completed Reading II'",
            "Draw a small book for each of the six categories",
            "Write the title of the book you read inside each book drawing",
            "Write the memory verse: Psalm 119:105 across the bottom",
            "Decorate the border and colour the certificate",
          ],
        },
        {
          id: "sb-rii-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Say the memory verse together: 'Your word is a lamp to my feet and a light to my path. Psalm 119:105.' Ask: 'How is reading the Bible like having a lamp on a dark path?' Let a child answer. Challenge: complete any remaining Reading II books before the next meeting and bring the completed reading log. Close with a prayer thanking God for people who write good books and for the gift of His Word.",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "sb-seasons",
      classId: "sunbeam",
      weekNumber: 3,
      title: "Seasons — God's Perfect Timing",
      objective:
        "Complete the Seasons award by studying Ecclesiastes 3:1-8, illustrating Ecclesiastes 3:11, identifying the seasons in their area, and playing a seasons game.",
      memoryVerse: {
        text: "He has made everything beautiful in its time.",
        reference: "Ecclesiastes 3:11",
      },
      materials: [
        { name: "Bible" },
        { name: "Drawing paper", quantity: "1 per child" },
        { name: "Crayons, markers, or watercolours" },
        { name: "Seasons sorting cards or pictures (summer, autumn, winter, spring)" },
        { name: "Ball or beanbag for seasons game" },
      ],
      sections: [
        {
          id: "sb-sea-intro",
          type: "introduction",
          title: "What Season Is It?",
          duration: "5 mins",
          instructions:
            "Seasons Requirement 3: Ask children to identify the current season in their area. Ask: 'How do you know it's [current season]? What does the weather feel like? What are people wearing? What is happening in nature?' Discuss all four seasons in your local area — some regions have distinct four seasons, others have wet/dry or hot/cool cycles. Celebrate the variety of God's design in different climates around the world.",
          resources: ["Seasons sorting cards or pictures"],
        },
        {
          id: "sb-sea-bible",
          type: "bible_story",
          title: "A Time for Everything — Ecclesiastes 3:1-8",
          duration: "12 mins",
          instructions:
            "Seasons Requirement 1: Read and discuss Ecclesiastes 3:1-8 together. Read the passage aloud, then go through it phrase by phrase. 'There is a time for everything, and a season for every activity under the heavens.' Ask after each phrase: 'Can you think of a time in your life when this was true?' For example: 'a time to be born and a time to die' — when was a new baby born in your family? 'A time to plant and a time to uproot' — what does a farmer do in each season? Connect the passage to God's perfect timing in our lives.",
          resources: ["Bible"],
        },
        {
          id: "sb-sea-activity",
          type: "activity",
          title: "Seasons Preparation Discussion & Game",
          duration: "12 mins",
          instructions:
            "Seasons Requirement 4: Discuss how you prepare for each season — clothing (warm coats for winter, light clothes for summer), gardening (planting in spring, harvesting in autumn), activities (swimming in summer, indoor crafts in winter), school (back to school in autumn). Let children share how their own families prepare for seasons. Then play Seasons Requirement 5: a seasons game. Option A: Toss a ball around the circle. When someone catches it, they must name one thing about a season the leader calls out. Option B: Leader calls a season — children quickly mime an activity for that season (shivering in winter, swimming in summer, raking leaves in autumn, planting seeds in spring).",
          resources: ["Ball or beanbag"],
        },
        {
          id: "sb-sea-craft",
          type: "craft",
          title: "Illustrating Ecclesiastes 3:11",
          duration: "13 mins",
          instructions:
            "Seasons Requirement 2: Illustrate Ecclesiastes 3:11 — 'He has made everything beautiful in its time.' Children draw a picture showing the beauty of the seasons — they may choose one season or divide the page into four sections, one for each season.",
          craftName: "Ecclesiastes 3:11 Seasons Illustration",
          materials: [
            { name: "Drawing paper", quantity: "1 per child" },
            { name: "Crayons, markers, or watercolours" },
          ],
          steps: [
            "Write the memory verse at the top: 'He has made everything beautiful in its time. Ecclesiastes 3:11'",
            "Divide your paper into four equal sections",
            "Label each section: Spring, Summer, Autumn (Fall), Winter",
            "Draw a scene that shows the beauty of each season in your area",
            "Add colours that reflect each season",
            "Write one thing you love about each season in that section",
          ],
        },
        {
          id: "sb-sea-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Hold up the Ecclesiastes 3:11 illustrations. Let each child share which season they drew and why they chose it. Say the memory verse together: 'He has made everything beautiful in its time. Ecclesiastes 3:11.' Ask: 'What is beautiful in the season we are in RIGHT NOW?' Close with a prayer thanking God for making every season beautiful and for perfect timing in all things.",
          resources: ["Memory verse card"],
        },
      ],
    },

    // ─────────────────────────────────────────────────
    // MY GOD — Weeks 4–6
    // ─────────────────────────────────────────────────
    {
      id: "sb-gods-plan-to-save-me",
      classId: "sunbeam",
      weekNumber: 4,
      title: "God's Plan to Save Me",
      objective:
        "Create a story chart showing the key events of Jesus' life and find a creative way to share the joy of salvation with someone else.",
      memoryVerse: {
        text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
        reference: "John 3:16",
      },
      materials: [
        { name: "Story chart or lapbook template: Jesus' life", quantity: "1 per child" },
        { name: "Crayons or coloured pencils" },
        { name: "Bible with pictures" },
        { name: "Scissors" },
        { name: "Glue sticks" },
        { name: "Bible story picture cards (optional)" },
      ],
      sections: [
        {
          id: "sb-gpsm-intro",
          type: "introduction",
          title: "The Greatest Story Ever Told",
          duration: "5 mins",
          instructions:
            "Ask: 'If you had to tell someone who had never heard of Jesus the most important things about His life, what would you say?' Let 2–3 children respond. Introduce the seven key events: Birth, Baptism, Miracles, Parables, Death, Resurrection, and Return to Heaven. Say: 'Today we are going to create a story chart that maps out this amazing plan — God's plan to save us.'",
          resources: [],
        },
        {
          id: "sb-gpsm-bible",
          type: "bible_story",
          title: "The Story of Jesus — Birth to Heaven",
          duration: "15 mins",
          instructions:
            "Walk through each key event of Jesus' life with a Bible reference for each: (1) Birth — Luke 2:1-20: Jesus was born in Bethlehem in a manger. Angels announced His arrival to shepherds. (2) Baptism — Matthew 3:13-17: Jesus was baptised by John. The Holy Spirit descended like a dove and God said, 'This is my Son, whom I love.' (3) Miracles — John 2:1-11: Jesus turned water to wine. He also healed the sick, fed 5000, walked on water. (4) Parables — Luke 15:11-32: Jesus told stories to teach about God's kingdom — the Lost Son, the Lost Sheep, the Good Samaritan. (5) Death — Luke 23:33-46: Jesus died on the cross for our sins — the ultimate sacrifice. (6) Resurrection — Luke 24:1-12: Three days later Jesus rose from the dead! The tomb was empty. (7) Return to Heaven — Acts 1:9-11: Jesus ascended to heaven and promised to come back. Ask after each: 'What does this event teach us about who Jesus is?'",
          resources: ["Bible with pictures"],
        },
        {
          id: "sb-gpsm-activity",
          type: "activity",
          title: "Telling the Story Creatively",
          duration: "8 mins",
          instructions:
            "God's Plan to Save Me Requirement 1b: Help each child find a creative way to tell the story of Jesus to someone else. Brainstorm options: acting it out in a short skit, drawing a comic strip, writing a song with the key events, creating a puppet show script, or making a poster. Each child chooses their method and begins planning. They will present their chosen method at the end of the craft time or at the next meeting to a family member.",
          resources: [],
        },
        {
          id: "sb-gpsm-craft",
          type: "craft",
          title: "Jesus' Life Story Chart",
          duration: "14 mins",
          instructions:
            "God's Plan to Save Me Requirement 1a: Children create a story chart (or lapbook) showing the seven key events of Jesus' life.",
          craftName: "My Jesus Life Story Chart",
          materials: [
            { name: "Story chart or lapbook template", quantity: "1 per child" },
            { name: "Crayons or coloured pencils" },
            { name: "Bible story picture cards (optional)" },
            { name: "Glue sticks" },
          ],
          steps: [
            "Write your name on the front",
            "Panel 1: Draw the BIRTH scene — baby Jesus in a manger with a star above",
            "Panel 2: Draw the BAPTISM — Jesus in water with a dove above",
            "Panel 3: Draw a MIRACLE — Jesus healing someone or feeding the crowd",
            "Panel 4: Draw a PARABLE — the lost sheep or the lost son",
            "Panel 5: Draw the DEATH — the cross on the hill",
            "Panel 6: Draw the RESURRECTION — the empty tomb with the stone rolled away",
            "Panel 7: Draw the RETURN TO HEAVEN — Jesus rising into the clouds",
            "Write a one-sentence summary under each panel",
          ],
        },
        {
          id: "sb-gpsm-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Hold up the completed story charts. Let 2 children briefly share their chart. Say the memory verse together: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. John 3:16.' Challenge: This week, share your creative retelling of Jesus' life with one family member or friend. Close with a prayer thanking God for His amazing plan to save us.",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "sb-gods-message-to-me",
      classId: "sunbeam",
      weekNumber: 5,
      title: "God's Message to Me — Bible II",
      objective:
        "Complete the Bible II award by identifying the two major parts of the Bible and the four gospels, reading gospel stories, explaining salvation verses, and telling a Jesus story to someone.",
      memoryVerse: {
        text: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness.",
        reference: "2 Timothy 3:16",
      },
      materials: [
        { name: "Bible (each child to own or have use of one)" },
        { name: "Bible II worksheet (fill in the gospels names)", quantity: "1 per child" },
        { name: "Paper for writing favourite Jesus story", quantity: "1 per child" },
        { name: "Pens or pencils" },
        { name: "Card stock for gospel bookmarks", quantity: "1 per child" },
        { name: "Crayons or markers" },
      ],
      sections: [
        {
          id: "sb-gmtm-intro",
          type: "introduction",
          title: "Do You Own a Bible?",
          duration: "5 mins",
          instructions:
            "Bible II Requirement 1: Ask: 'Does everyone here have their own Bible or access to one at home?' Discuss why having personal access to a Bible is important for a Sunbeam. Bible II Requirement 2: Ask: 'What are the two major parts of the Bible?' Answer: Old Testament and New Testament. Show children where they are in a physical Bible. Ask: 'How many books are in the Old Testament? In the New Testament?' (39 and 27 — 66 total.) Celebrate that God's message to us is in one amazing book!",
          resources: ["Bible"],
        },
        {
          id: "sb-gmtm-bible",
          type: "bible_story",
          title: "The Four Gospels",
          duration: "12 mins",
          instructions:
            "Bible II Requirement 2 (continued): Name the four gospels and show children where they are located in the New Testament: Matthew, Mark, Luke, John. Fill in the worksheet together (the fill-in boxes from the activity book). Explain what a gospel is: 'Good news — the story of Jesus' life from four different authors, each showing a different perspective.' Bible II Requirement 3: Read or listen together to three or more gospel stories about Jesus. Choose from: (a) Jesus is born — Luke 2:1-20 and Matthew 2:1-12, (b) Jesus is baptised — Matthew 3:13-17, (c) Jesus tells stories — Lost Sheep, Lost Coin, Lost Son in Luke 15, (d) Jesus heals people, (e) Jesus dies and is resurrected. For each story ask: 'What does this show us about who Jesus is?'",
          resources: ["Bible", "Bible II worksheet"],
        },
        {
          id: "sb-gmtm-activity",
          type: "activity",
          title: "Salvation Verses & Telling the Story",
          duration: "10 mins",
          instructions:
            "Bible II Requirement 4: Explain two Bible verses about being saved by Jesus. Read together: (a) John 3:16 — 'God so loved the world that he gave his one and only Son...' (b) Romans 6:23 — 'For the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.' Discuss what each verse means in simple terms. Also available: Matthew 22:37-39, 1 John 1:9, Isaiah 1:18. Bible II Requirement 5: Each child practises telling a story about Jesus to a partner — choosing one favourite gospel story and explaining in their own words why Jesus is special to them. Record readiness in the instructor checklist.",
          resources: ["Bible"],
        },
        {
          id: "sb-gmtm-craft",
          type: "craft",
          title: "Four Gospels Bookmark",
          duration: "12 mins",
          instructions:
            "Children create a bookmark listing the four gospels to keep in their Bible.",
          craftName: "Four Gospels Bookmark",
          materials: [
            { name: "Card stock", quantity: "1 per child" },
            { name: "Crayons or markers" },
            { name: "Scissors" },
          ],
          steps: [
            "Cut card stock into a bookmark shape (approx 5 cm × 20 cm)",
            "Write 'The Four Gospels' at the top",
            "List: Matthew, Mark, Luke, John",
            "Write one key fact about each gospel author or their focus",
            "Write the memory verse: 2 Timothy 3:16 at the bottom",
            "Decorate the border and colour the bookmark",
            "Place it in your Bible at the start of Matthew",
          ],
        },
        {
          id: "sb-gmtm-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Say the memory verse together: 'All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness. 2 Timothy 3:16.' Ask: 'What is one thing you learned from a Bible verse this week that surprised you?' Challenge: This week, tell your favourite Jesus story from the gospels to a family member or friend — fulfilling Bible II Requirement 5. Close with a prayer thanking God for giving us His Word.",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "sb-gods-power-in-my-life",
      classId: "sunbeam",
      weekNumber: 6,
      title: "God's Power in My Life",
      objective:
        "Keep a family worship time record, ask three people about their favourite Jesus story, and complete the Parables of Jesus award.",
      memoryVerse: {
        text: "The kingdom of heaven is like treasure hidden in a field. When a man found it, he hid it again, and then in his joy went and sold all he had and bought that field.",
        reference: "Matthew 13:44",
      },
      materials: [
        { name: "Family Worship Time Record chart from activity book", quantity: "1 per child" },
        { name: "Bible" },
        { name: "Parable diorama or craft supplies (shoeboxes, paper, crayons)" },
        { name: "Get Well or Thinking of You card template", quantity: "1 per child" },
        { name: "Pens or pencils" },
      ],
      sections: [
        {
          id: "sb-gpml-intro",
          type: "introduction",
          title: "Quiet Time with Jesus",
          duration: "5 mins",
          instructions:
            "God's Power in My Life Requirement 1a: Introduce the Family Worship Time Record. Explain: 'This chart helps you keep a record of spending quiet time with Jesus every day for four weeks.' Show the chart from the activity book (a grid with Sunday–Saturday for four weeks). Ask: 'What does spending quiet time with Jesus look like for you? Reading the Bible? Praying? Worship music?' Challenge children to fill in this chart daily and bring it back completed. Ask: 'Who already has a regular quiet time habit?' Let 1–2 share what they do.",
          resources: ["Family Worship Time Record chart"],
        },
        {
          id: "sb-gpml-bible",
          type: "bible_story",
          title: "Parables of Jesus",
          duration: "12 mins",
          instructions:
            "Parables of Jesus Requirement 1: Read and discuss Matthew 13:44 — the Parable of the Hidden Treasure. Ask: 'What is a parable? Why did Jesus use parables?' (A parable is a short story with a deeper meaning. Jesus used parables to help people understand truths about God's kingdom.) Parables Requirement 3: Name and learn the meaning of a parable from each of the four gospels. Matthew 13:44 — Hidden Treasure (the kingdom of God is worth everything). Mark 4:30-32 — The Mustard Seed (faith that grows from small beginnings). Luke 15:11-32 — The Lost Son (God's love and forgiveness). John 10:11-16 — The Good Shepherd (Jesus cares for each of us personally). Discuss the meaning of each parable together.",
          resources: ["Bible"],
        },
        {
          id: "sb-gpml-activity",
          type: "activity",
          title: "Favourite Jesus Story Interviews & Parable Game",
          duration: "10 mins",
          instructions:
            "God's Power in My Life Requirement 1b: Each child must ask three people (outside the club) their favourite 'Jesus story' from the gospels and why. Practise the interview together — children ask a partner the question and record the answer. They will complete the three real interviews at home this week and bring back the name of each adult and their signature. Then play a game related to Parables Requirement 5: Physical parable game — act out the Parable of the Lost Son using movement (the son walks away, spends everything, comes back, the father runs to meet him). Children take turns acting out roles.",
          resources: ["Pen for notes"],
        },
        {
          id: "sb-gpml-craft",
          type: "craft",
          title: "Parable Diorama or Good Samaritan Card",
          duration: "15 mins",
          instructions:
            "Parables Requirement 4: Make a craft or diorama depicting a parable. Option A: Create a shoebox diorama of the Hidden Treasure or the Good Samaritan. Option B (Requirement 6): Make a Get Well or Thinking of You card or story book illustrating Luke 10:25-37 — the Good Samaritan.",
          craftName: "Parable Diorama or Good Samaritan Card",
          materials: [
            { name: "Shoebox or card base", quantity: "1 per child" },
            { name: "Paper, crayons, markers" },
            { name: "Scissors and glue" },
            { name: "Small figures or drawn characters" },
          ],
          steps: [
            "Choose a parable to illustrate: Hidden Treasure or Good Samaritan",
            "If making a diorama: decorate the inside of the shoebox as the scene",
            "Draw and cut out the characters in the parable",
            "Stand the characters in the scene using folded paper bases",
            "Write the parable's reference and one-sentence meaning on the outside",
            "If making a card: fold card stock and illustrate the Good Samaritan scene on the front",
            "Write a caring message inside (Luke 10:25-37)",
            "Give the card to someone who needs encouragement",
          ],
        },
        {
          id: "sb-gpml-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Share the completed dioramas or cards. Say the memory verse together: 'The kingdom of heaven is like treasure hidden in a field. Matthew 13:44.' Ask: 'If God's kingdom is treasure worth everything, what is one thing you are willing to give up to follow Jesus?' Close with a prayer asking God to give each child power to spend quiet time with Him daily and courage to share His stories with others.",
          resources: ["Memory verse card"],
        },
      ],
    },

    // ─────────────────────────────────────────────────
    // MY SELF — Weeks 7–9
    // ─────────────────────────────────────────────────
    {
      id: "sb-i-am-special",
      classId: "sunbeam",
      weekNumber: 7,
      title: "I Am Special",
      objective:
        "Make a life-size tracing decorated with pictures and words showing good things about yourself, then share your drawing with the group and compliment one another.",
      memoryVerse: {
        text: "I praise you because I am fearfully and wonderfully made; your works are wonderful, I know that full well.",
        reference: "Psalm 139:14",
      },
      materials: [
        { name: "Large paper or butcher paper (body-sized)", quantity: "1 per child" },
        { name: "Crayons, markers, or coloured pencils" },
        { name: "Pencils for tracing" },
        { name: "Old magazines for cutting pictures (optional)" },
        { name: "Scissors and glue sticks (optional)" },
        { name: "Sticky notes for compliments", quantity: "5 per child" },
      ],
      sections: [
        {
          id: "sb-ias-intro",
          type: "introduction",
          title: "You Are Wonderfully Made",
          duration: "5 mins",
          instructions:
            "Ask: 'Have you ever looked at yourself in the mirror and thought about everything you are good at or what makes you YOU?' Let 2–3 children share. Read Psalm 139:14: 'I praise you because I am fearfully and wonderfully made.' Explain: 'God designed each of us on purpose — our personalities, our gifts, our laugh, our love for certain things. Today we celebrate what makes each of YOU special.'",
          resources: [],
        },
        {
          id: "sb-ias-bible",
          type: "bible_story",
          title: "God Knows You Completely",
          duration: "10 mins",
          instructions:
            "Read Psalm 139:1-16 together, pausing to discuss. Verse 1-6: God knows everything about us — when we sit, when we stand, what we think. Verse 13-14: God formed us in our mother's womb — we are fearfully and wonderfully made. Verse 16: 'All the days ordained for me were written in your book before one of them came to be.' Ask: 'What does it feel like to know that God knows you completely — your strengths AND your weaknesses — and still loves you?' Discuss how understanding this helps us value ourselves AND others.",
          resources: ["Bible"],
        },
        {
          id: "sb-ias-activity",
          type: "activity",
          title: "Compliment Circle",
          duration: "8 mins",
          instructions:
            "I Am Special Requirement: Tell each other something that makes them special. Sit in a circle. Give each child sticky notes. Each child writes one genuine compliment for every other child in the group (what makes them special) and sticks them together per person. Then one at a time, each child reads out the compliments they received. Leader facilitates: 'When someone gives you a compliment, practise saying thank you and believing it — because God made you exactly as you are!'",
          resources: ["Sticky notes", "Pens"],
        },
        {
          id: "sb-ias-craft",
          type: "craft",
          title: "My Life-Size Tracing",
          duration: "18 mins",
          instructions:
            "I Am Special Requirement 1a: Make a tracing of yourself. Decorate it with pictures and words which tell good things about you. Share your drawing with your group.",
          craftName: "I Am Special Life-Size Tracing",
          materials: [
            { name: "Large butcher paper", quantity: "1 sheet per child" },
            { name: "Crayons or markers" },
            { name: "Old magazines (optional)" },
            { name: "Scissors and glue sticks" },
          ],
          steps: [
            "Lie down on the large paper and have a partner trace around your whole body",
            "Draw in your face, hair, and clothing to look like you",
            "Inside the body outline, fill the space with words and pictures",
            "Write your name, favourite things, talents, and what you love about God",
            "Draw or cut and paste pictures of things that represent who you are",
            "Around the outside, write qualities that describe you (kind, creative, funny, brave)",
            "Write the memory verse — Psalm 139:14 — somewhere on your tracing",
          ],
        },
        {
          id: "sb-ias-closing",
          type: "closing",
          title: "Closing — Sharing Our Drawings",
          duration: "5 mins",
          instructions:
            "Stand each life-size tracing up or hold it up. Each child briefly shares one thing on their tracing — one word or picture that they feel represents them best. Celebrate the uniqueness and variety in the group. Say the memory verse together: 'I praise you because I am fearfully and wonderfully made. Psalm 139:14.' Close with a prayer thanking God for making each child exactly as they are.",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "sb-wise-choices",
      classId: "sunbeam",
      weekNumber: 8,
      title: "I Can Make Wise Choices",
      objective:
        "Participate in an activity or game about choices, learning to distinguish wise choices from unwise ones and understanding that Jesus helps us choose well.",
      memoryVerse: {
        text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
        reference: "Proverbs 3:5-6",
      },
      materials: [
        { name: "Choices scenario cards", quantity: "1 set" },
        { name: "Two signs: 'WISE' and 'UNWISE' (for the game)" },
        { name: "Bible" },
        { name: "Paper and pens for choices pledge", quantity: "1 per child" },
        { name: "Crayons or markers" },
      ],
      sections: [
        {
          id: "sb-wc-intro",
          type: "introduction",
          title: "Every Day Is Full of Choices",
          duration: "5 mins",
          instructions:
            "Ask: 'How many choices do you think you make in one day?' (Researchers estimate hundreds!) 'From what to eat for breakfast to how to treat a friend — choices shape our lives.' Ask: 'Can you think of a choice you made recently that turned out well? One that didn't?' Let 2 children share. Say: 'Today we're going to practise making wise choices — and discover that Jesus is always ready to help us.'",
          resources: [],
        },
        {
          id: "sb-wc-bible",
          type: "bible_story",
          title: "Solomon's Wise Choice",
          duration: "10 mins",
          instructions:
            "Read 1 Kings 3:5-14: God appeared to Solomon in a dream and said, 'Ask for whatever you want me to give you.' Solomon could have asked for riches, power, or long life — but instead he asked for a discerning heart to govern God's people and to distinguish between right and wrong. God was pleased and gave Solomon wisdom AND the things he didn't ask for. Ask: 'Why was Solomon's choice wise? What would YOU have asked for?' Discuss: The wisest choice is often the one that considers others and seeks God's guidance, not just what we want in the moment.",
          resources: ["Bible"],
        },
        {
          id: "sb-wc-activity",
          type: "activity",
          title: "Wise or Unwise? Choices Game",
          duration: "15 mins",
          instructions:
            "I Can Make Wise Choices Requirement 1a: Participate in an activity or game about choices. Set up two signs on opposite sides of the room: 'WISE' and 'UNWISE.' Leader reads scenario cards one at a time. Children run to the sign that matches the choice described. After each one: discuss WHY it is wise or unwise and what a better choice would look like. Scenario examples: (1) A friend asks you to keep a secret that could hurt someone — run to UNWISE. (2) You feel angry so you take a deep breath before responding — WISE. (3) You copy your friend's homework — UNWISE. (4) You include the new child who is sitting alone at lunch — WISE. (5) You take something from a store without paying — UNWISE. (6) You spend an extra five minutes in prayer before a hard test — WISE.",
          resources: ["Scenario cards", "'WISE' and 'UNWISE' signs"],
        },
        {
          id: "sb-wc-craft",
          type: "craft",
          title: "My Wise Choices Pledge",
          duration: "10 mins",
          instructions:
            "Children write and decorate a personal Wise Choices pledge — a commitment to seek God's guidance in their decisions.",
          craftName: "My Wise Choices Pledge",
          materials: [
            { name: "Paper", quantity: "1 per child" },
            { name: "Pens or markers" },
          ],
          steps: [
            "Write 'My Wise Choices Pledge' as the heading",
            "Write: 'I, [your name], choose to trust God in my decisions.'",
            "Write three areas of life where you want to make wiser choices (friendships, schoolwork, how I treat my family, etc.)",
            "For each area, write one specific wise choice you commit to making",
            "Write Proverbs 3:5-6 at the bottom",
            "Sign and date the pledge",
            "Decorate the border",
          ],
        },
        {
          id: "sb-wc-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Let 2–3 children share one commitment from their pledge. Say the memory verse together: 'Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight. Proverbs 3:5-6.' Close with a prayer: 'Lord Jesus, thank you for helping us make wise choices. This week, when I face a hard decision, remind me to ask YOU first. Amen.'",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "sb-care-for-my-body",
      classId: "sunbeam",
      weekNumber: 9,
      title: "I Can Care for My Body — Fitness Fun",
      objective:
        "Complete the Fitness Fun award by listing things that contribute to physical fitness, running 800 metres, long jumping, skipping rope, stretching, completing an obstacle course, and playing an organised group game.",
      memoryVerse: {
        text: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God?",
        reference: "1 Corinthians 6:19",
      },
      materials: [
        { name: "Open outdoor space or gymnasium" },
        { name: "Skipping ropes", quantity: "1 per child" },
        { name: "Measuring tape or chalk for long jump" },
        { name: "Stopwatch or timer" },
        { name: "Cones or markers for obstacle course" },
        { name: "Ball for team game" },
        { name: "Fitness Fun record sheet", quantity: "1 per child" },
        { name: "Water bottles", quantity: "1 per child" },
      ],
      sections: [
        {
          id: "sb-cfmb-intro",
          type: "introduction",
          title: "Our Bodies Are God's Temple",
          duration: "5 mins",
          instructions:
            "Fitness Fun Requirement 1: Ask: 'What does it mean to be physically fit?' Guide children to list at least four things that contribute to physical fitness: (1) Regular exercise, (2) Healthy eating (fruits, vegetables, water), (3) Adequate sleep (8-10 hours for children), (4) Avoiding harmful substances, (5) Stretching and flexibility, (6) Rest and recovery. Read 1 Corinthians 6:19: 'Do you not know that your bodies are temples of the Holy Spirit?' Explain: 'When we care for our bodies, we are honouring God who made us and lives within us.'",
          resources: ["Fitness Fun record sheet"],
        },
        {
          id: "sb-cfmb-bible",
          type: "bible_story",
          title: "Daniel's Healthy Choice",
          duration: "8 mins",
          instructions:
            "Read Daniel 1:8-16: Daniel resolved not to defile himself with the royal food and wine. He asked the guard for permission to eat only vegetables and water for ten days. After ten days Daniel and his friends looked healthier than all the other young men who ate the royal food. Ask: 'What does this tell us about how our food choices affect us?' Discuss: 'Being healthy isn't just about sport — it's about every daily choice we make about food, sleep, and how we treat our bodies.' Connect to the Fitness Fun award: 'Today we are going to have fun caring for our God-given bodies!'",
          resources: ["Bible"],
        },
        {
          id: "sb-cfmb-activity",
          type: "activity",
          title: "Fitness Fun — Awards Circuit",
          duration: "25 mins",
          instructions:
            "Work through the Fitness Fun requirements as a circuit. Record each child's results on the record sheet. Requirement 2: Run or jog 800 metres (approximately half a mile) — or if space is limited, run 50 metres. Requirement 3: Long jump — mark starting line with chalk, each child makes four attempts, record the longest jump. Requirement 4: Jump or skip rope for three minutes without stopping (allow brief pauses for younger children). Requirement 5: Three different stretches — (a) Leg stretch: sit on floor, reach for toes; (b) Back stretch: seated twist; (c) Arms/shoulders: overhead arm pull. Hold each for 10 seconds. Requirement 6: Obstacle course — set up cones, chairs, and markers for children to navigate: crawl under, jump over, run around. Requirement 7: Each child demonstrates one of: ten sit-ups, climbing a pole or rope, or hanging from a bar with hands and knees. Celebrate each child's achievement!",
          resources: ["Skipping ropes", "Measuring tape", "Cones", "Timer", "Fitness Fun record sheet"],
        },
        {
          id: "sb-cfmb-craft",
          type: "craft",
          title: "My Fitness Fun Certificate",
          duration: "7 mins",
          instructions:
            "Children fill in their Fitness Fun record sheet as their award record.",
          craftName: "Fitness Fun Record Certificate",
          materials: [
            { name: "Fitness Fun record sheet", quantity: "1 per child" },
            { name: "Pens or markers" },
          ],
          steps: [
            "Write your name and today's date",
            "Record your results: distance run, long jump measurement, skip rope time",
            "Tick each requirement as completed",
            "Write the memory verse on the back: 1 Corinthians 6:19",
            "Draw a small trophy or star to celebrate your achievement",
            "Get the leader's signature to certify completion",
          ],
        },
        {
          id: "sb-cfmb-closing",
          type: "closing",
          title: "Closing — Organised Team Game",
          duration: "10 mins",
          instructions:
            "Fitness Fun Requirement 8: Participate in an organised game requiring physical fitness — such as a relay race, leapfrog, ball game, or capture the flag. Play together as a group, celebrating teamwork and effort. After the game, gather to cool down. Say the memory verse together: 'Do you not know that your bodies are temples of the Holy Spirit. 1 Corinthians 6:19.' Close with a prayer: 'Lord, thank you for giving us strong bodies. Help us to honour you by caring for what you have given us. Amen.'",
          resources: ["Ball or equipment for team game"],
        },
      ],
    },

    // ─────────────────────────────────────────────────
    // MY FAMILY — Weeks 10–12
    // ─────────────────────────────────────────────────
    {
      id: "sb-i-have-a-family",
      classId: "sunbeam",
      weekNumber: 10,
      title: "I Have a Family",
      objective:
        "Ask each member of your family to share their favourite memories and create a family picture and letter celebrating what makes your family special.",
      memoryVerse: {
        text: "As for me and my household, we will serve the Lord.",
        reference: "Joshua 24:15",
      },
      materials: [
        { name: "Letter for parents template from activity book", quantity: "1 per child" },
        { name: "Family Picture page from activity book", quantity: "1 per child" },
        { name: "Crayons or coloured pencils" },
        { name: "Pencils for writing" },
        { name: "Envelopes (optional)" },
      ],
      sections: [
        {
          id: "sb-ihaf-intro",
          type: "introduction",
          title: "Every Family Is Unique",
          duration: "5 mins",
          instructions:
            "Ask: 'How many people are in your family? What do you love most about your family?' Let 2–3 children share. Explain: 'God places every person in a family. Families come in all shapes and sizes — big families, small families, grandparents, aunts and uncles. All of them are a gift from God.' Say: 'Today we are going to celebrate our families by learning about their memories — stories we can carry with us forever.'",
          resources: [],
        },
        {
          id: "sb-ihaf-bible",
          type: "bible_story",
          title: "Family in the Bible",
          duration: "10 mins",
          instructions:
            "Read Joshua 24:14-15: Joshua challenges the Israelites to choose who they will serve, and he declares: 'As for me and my household, we will serve the Lord.' Discuss: 'What does it mean for a family to serve the Lord together?' Share the story of Timothy's family (2 Timothy 1:5): 'I am reminded of your sincere faith, which first lived in your grandmother Lois and in your mother Eunice, and I am convinced now lives in you also.' Ask: 'Who in your family has helped you learn about God?' Celebrate family faith passed down through generations.",
          resources: ["Bible"],
        },
        {
          id: "sb-ihaf-activity",
          type: "activity",
          title: "Favourite Family Memories Interview",
          duration: "12 mins",
          instructions:
            "I Have a Family Requirement 1a: This week each child will ask every member of their family to tell some of their favourite memories. Practise the interview together in class first — pair children up and have them ask each other: 'What is your favourite memory from when you were my age? What is your favourite family holiday or celebration memory? What is one memory you never want to forget?' Record the responses. Send home the parent letter explaining the assignment and inviting parents to share their memories with their child. This is completed as a family homework activity.",
          resources: ["Letter for parents template"],
        },
        {
          id: "sb-ihaf-craft",
          type: "craft",
          title: "My Family Picture",
          duration: "15 mins",
          instructions:
            "Children draw their family picture on the Family Picture page from the activity book.",
          craftName: "My Family Picture",
          materials: [
            { name: "Family Picture page", quantity: "1 per child" },
            { name: "Crayons or coloured pencils" },
          ],
          steps: [
            "Draw every person in your family — include grandparents, siblings, pets!",
            "Write each person's name under their picture",
            "Write a caption: 'My family serves the Lord' (from Joshua 24:15)",
            "Colour the picture with care",
            "Write one favourite memory you share with your family underneath",
            "Take the family letter home to give to your parents",
          ],
        },
        {
          id: "sb-ihaf-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Let 2–3 children share something they are grateful for about their family. Say the memory verse together: 'As for me and my household, we will serve the Lord. Joshua 24:15.' Challenge: Complete the family memory interviews at home this week. Close with a prayer: 'Lord, thank you for giving each of us a family. Help our families to serve you together and to treasure the memories you have given us. Amen.'",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "sb-families-care",
      classId: "sunbeam",
      weekNumber: 11,
      title: "Families Care for Each Other",
      objective:
        "Show how Jesus can help resolve family disagreements using role play or puppets, and complete the Acts of Kindness award.",
      memoryVerse: {
        text: "Be kindly affectionate to one another with brotherly love, in honour giving preference to one another.",
        reference: "Romans 12:10",
      },
      materials: [
        { name: "Puppets or simple puppet materials (paper bags, socks)", quantity: "1 set per group" },
        { name: "Bible" },
        { name: "Acts of Kindness story books or printed stories (3 kindness stories)", quantity: "1 set" },
        { name: "Kindness skit role cards", quantity: "1 set per group" },
        { name: "Kindness class project supplies (leader to determine)" },
      ],
      sections: [
        {
          id: "sb-fce-intro",
          type: "introduction",
          title: "Disagreements Happen in Every Family",
          duration: "5 mins",
          instructions:
            "Ask: 'Has anyone ever had a disagreement with a brother, sister, or parent? Without naming anyone — what kind of things do families disagree about?' Let 2–3 children share common examples: who gets to choose the TV show, sharing bedroom space, unfair chores. Say: 'Disagreements are normal — even the best families have them. The question is HOW we deal with them. Today we learn how Jesus can help.'",
          resources: [],
        },
        {
          id: "sb-fce-bible",
          type: "bible_story",
          title: "Love and Kindness — Romans 12:10 and Proverbs 12:25",
          duration: "10 mins",
          instructions:
            "Acts of Kindness Requirement 1: Read and discuss Romans 12:10 and Proverbs 12:25. Romans 12:10: 'Be kindly affectionate to one another with brotherly love, in honour giving preference to one another.' Proverbs 12:25: 'Anxiety in the heart of man causes depression, but a good word makes it glad.' Discuss what each verse means: Romans 12:10 — putting others before ourselves, especially in the family. Proverbs 12:25 — a kind word can actually heal worry and sadness in someone's heart. Acts of Kindness Requirement 2: Give examples of kindness and love. Ask: 'What is the difference between kindness and love? Can you be kind without loving someone? Can you love someone and not be kind?' Guide discussion.",
          resources: ["Bible"],
        },
        {
          id: "sb-fce-activity",
          type: "activity",
          title: "Puppet Role Play — Jesus Helps Us Disagree Well",
          duration: "15 mins",
          instructions:
            "Families Care Requirement 1a: Show how Jesus can help deal with disagreements using puppets or role playing. Divide children into groups of 2–3. Give each group a skit scenario: (a) Two siblings arguing over who gets to use the computer first. (b) A child who feels a parent is being unfair about bedtime. (c) Two friends arguing over the rules of a game. Groups create a 2-minute puppet or role-play skit showing the disagreement AND how Jesus' way (patience, listening, forgiveness, compromise) resolves it. Each group performs. After each skit discuss: 'What did they do to solve it? Which part of the Adventurer Law did they use?' Acts of Kindness Requirement 5: Act out in a skit or charade different acts of kindness — groups add a second short scene showing an act of kindness after the conflict is resolved.",
          resources: ["Puppets or puppet materials", "Skit role cards"],
        },
        {
          id: "sb-fce-craft",
          type: "craft",
          title: "Good Samaritan Kindness Illustration",
          duration: "10 mins",
          instructions:
            "Acts of Kindness Requirement 3: Use a Bible story to illustrate someone who showed love and kindness. Children draw a scene from the Good Samaritan (Luke 10:25-37) or the story of Ruth and Naomi as a kindness illustration.",
          craftName: "Kindness Bible Story Illustration",
          materials: [
            { name: "Drawing paper", quantity: "1 per child" },
            { name: "Crayons or markers" },
          ],
          steps: [
            "Choose a Bible kindness story: Good Samaritan or Ruth and Naomi",
            "Draw the key moment of kindness in the story",
            "Write the character names and Bible reference",
            "Write one sentence explaining the act of kindness",
            "Write Romans 12:10 at the bottom",
          ],
        },
        {
          id: "sb-fce-closing",
          type: "closing",
          title: "Closing — Class Kindness Plan",
          duration: "5 mins",
          instructions:
            "Acts of Kindness Requirement 6: Plan a class or club act of kindness together. Brainstorm ideas: making cards for a hospital, collecting food for a food bank, helping clean up a common area. Choose one to do before the next meeting. Acts of Kindness Requirement 4: Announce that children will read or listen to three modern stories of kindness as a take-home activity. Say the memory verse together: 'Be kindly affectionate to one another with brotherly love, in honour giving preference to one another. Romans 12:10.' Close with a prayer for kind hearts at home.",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "sb-family-safety",
      classId: "sunbeam",
      weekNumber: 12,
      title: "My Family Helps Me Care for Myself — Road Safety",
      objective:
        "Complete the Road Safety award by identifying ten important road signs, learning when and where to cross safely, understanding road rules, and listening to a safety talk.",
      memoryVerse: {
        text: "For he will command his angels concerning you to guard you in all your ways.",
        reference: "Psalm 91:11",
      },
      materials: [
        { name: "Road sign flashcards or pictures (at least 10 signs)", quantity: "1 set" },
        { name: "Road Safety worksheet from activity book", quantity: "1 per child" },
        { name: "Crayons or coloured pencils" },
        { name: "Chalk for outdoor road safety game (optional)" },
        { name: "Guest speaker invitation (highway patrol officer or safety person) if available" },
      ],
      sections: [
        {
          id: "sb-fhm-intro",
          type: "introduction",
          title: "God's Angels Guard Our Ways",
          duration: "5 mins",
          instructions:
            "Read Psalm 91:11: 'For he will command his angels concerning you to guard you in all your ways.' Ask: 'Do you think God is interested in our safety? Why or why not?' Explain: 'God cares about every part of our lives — including whether we get home safely. Today we learn how to be road smart — because part of caring for ourselves is staying safe.' Introduce the Road Safety award.",
          resources: [],
        },
        {
          id: "sb-fhm-bible",
          type: "bible_story",
          title: "God's Protection and Our Responsibility",
          duration: "8 mins",
          instructions:
            "Read Proverbs 22:3: 'The prudent see danger and take refuge, but the simple keep going and pay the penalty.' Discuss: 'Being wise means NOTICING danger and making a plan. A prudent person doesn't walk into a dangerous situation carelessly.' Connect to road safety: 'God gives us wisdom AND road rules to keep us safe. Using both is honouring God.' Share a simple story about the importance of looking both ways before crossing — even when we're in a hurry or distracted. Ask: 'Can you think of a time when you had to stop and think before crossing a road?'",
          resources: ["Bible"],
        },
        {
          id: "sb-fhm-activity",
          type: "activity",
          title: "Road Signs & Safety Rules",
          duration: "20 mins",
          instructions:
            "Road Safety Requirement 1: Show ten road sign flashcards one at a time. For each sign, children identify what it means and write it on their worksheet. Include: Stop, Give Way/Yield, Speed Limit, Pedestrian Crossing, School Zone, No Entry, Road Works, Traffic Lights, Roundabout, Railway Crossing. Road Safety Requirement 2: Discuss when and where to cross the road safely — at a marked pedestrian crossing, traffic lights, or where you have a clear view in both directions. Road Safety Requirement 3: Go through safety rules for: (a) Walking along the road — walk facing traffic, stay on footpaths, (b) Riding a bicycle — wear a helmet, obey traffic signals, (c) Riding a horse — keep to designated paths, (d) Walking with a group — walk in pairs, listen to a leader. Road Safety Requirement 4: Ask: 'Why do we wear a seatbelt in a car?' Discuss seatbelt laws and the physics of accidents in simple terms. Road Safety Requirement 6: Play a safety game — chalk a 'road' outside and children practise crossing safely while a leader acts as traffic.",
          resources: ["Road sign flashcards", "Road Safety worksheet", "Chalk"],
        },
        {
          id: "sb-fhm-craft",
          type: "craft",
          title: "My Road Safety Sign",
          duration: "12 mins",
          instructions:
            "Children draw their own road safety sign or illustrate the Road Safety worksheet from the activity book, colouring in the signs they identified.",
          craftName: "Road Safety Signs Drawing",
          materials: [
            { name: "Road Safety worksheet", quantity: "1 per child" },
            { name: "Crayons or coloured pencils" },
          ],
          steps: [
            "Colour in all ten road signs on the worksheet",
            "Write the meaning of each sign next to it",
            "On the back, write three road safety rules you will always follow",
            "Write the memory verse: Psalm 91:11",
            "Draw an angel in the corner to remind you of God's protection",
          ],
        },
        {
          id: "sb-fhm-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Road Safety Requirement 5: If a highway patrol officer or safety person was invited, allow them time to speak. Otherwise, ask: 'What is the most important road safety rule you learned today?' Let each child answer. Say the memory verse: 'For he will command his angels concerning you to guard you in all your ways. Psalm 91:11.' Close with a prayer: 'Lord, thank you for protecting us every day. Help us to be wise and careful, and to keep ourselves and others safe. Amen.'",
          resources: ["Memory verse card"],
        },
      ],
    },

    // ─────────────────────────────────────────────────
    // MY WORLD — Weeks 13–15
    // ─────────────────────────────────────────────────
    {
      id: "sb-world-of-friends",
      classId: "sunbeam",
      weekNumber: 13,
      title: "The World of Friends — Courtesy",
      objective:
        "Complete the Courtesy award by explaining courtesy and the Golden Rule, demonstrating good table manners and phone etiquette, and sharing personal experiences of courtesy.",
      memoryVerse: {
        text: "So in everything, do to others what you would have them do to you.",
        reference: "Matthew 7:12",
      },
      materials: [
        { name: "Bible" },
        { name: "Table set-up for table manners demonstration (plates, cutlery, cups)" },
        { name: "Mobile phone or toy phone for telephone manners practice" },
        { name: "Courtesy scenario cards", quantity: "1 set" },
        { name: "Golden Rule poster or banner" },
      ],
      sections: [
        {
          id: "sb-wof-intro",
          type: "introduction",
          title: "What Is Courtesy?",
          duration: "5 mins",
          instructions:
            "Courtesy Requirement 1: Ask: 'What does the word COURTESY mean?' Let children define it. Guide toward: treating others with respect, politeness, and consideration. Ask: 'Can you think of someone who is very courteous? What do they do that makes them courteous?' Examples: holding doors open, saying please and thank you, letting someone else go first, listening when others speak. Say: 'Courtesy is love in action — it's how we show others that they matter.'",
          resources: [],
        },
        {
          id: "sb-wof-bible",
          type: "bible_story",
          title: "The Golden Rule — Matthew 7:12",
          duration: "10 mins",
          instructions:
            "Courtesy Requirement 2: Read Matthew 7:12: 'So in everything, do to others what you would have them do to you.' This is called the Golden Rule. Ask: 'Why is it called the GOLDEN Rule? What makes it so valuable?' Discuss: 'Before you act toward someone, ask yourself: Would I like to be treated this way?' Share a story of Jesus modelling the Golden Rule — washing the disciples' feet (John 13:1-17). Jesus, the Teacher and Lord, took the role of a servant to demonstrate how to treat others. Ask: 'What does this teach us about courtesy?'",
          resources: ["Bible"],
        },
        {
          id: "sb-wof-activity",
          type: "activity",
          title: "Table Manners & Telephone Etiquette",
          duration: "15 mins",
          instructions:
            "Courtesy Requirement 3: Demonstrate good table manners. Set up a small table. Go through key table manners: sitting up straight, placing a napkin on your lap, waiting for everyone to be served before eating, saying 'please pass' instead of reaching, chewing with mouth closed, saying 'excuse me' after a cough, saying thank you to the person who prepared the meal. Children take turns demonstrating. Courtesy Requirement 4: Demonstrate how to answer the phone correctly. Role play: (a) Making a telephone call to an adult — 'Hello, this is [name]. May I please speak to [adult's name]?' (b) Making a telephone call to a friend — 'Hi [friend's name], it's [name]! Is this a good time to talk?' OR (c) Introducing an adult to a friend. (d) Introducing your teacher to a parent. Practise each scenario in pairs.",
          resources: ["Table setting", "Phone"],
        },
        {
          id: "sb-wof-craft",
          type: "craft",
          title: "Golden Rule Poster",
          duration: "10 mins",
          instructions:
            "Children create a personal Golden Rule poster to display at home.",
          craftName: "My Golden Rule Poster",
          materials: [
            { name: "A4 or A3 paper", quantity: "1 per child" },
            { name: "Markers or crayons" },
            { name: "Ruler" },
          ],
          steps: [
            "Write 'THE GOLDEN RULE' as a bold heading",
            "Write Matthew 7:12 in large letters in the centre",
            "Around the verse, draw or write 6 specific ways you will live the Golden Rule",
            "Decorate the border with gold-coloured patterns or stars",
            "Write your name and the date",
            "Hang it somewhere at home where you will see it every day",
          ],
        },
        {
          id: "sb-wof-closing",
          type: "closing",
          title: "Closing — Sharing Courtesy Experiences",
          duration: "5 mins",
          instructions:
            "Courtesy Requirements 5 & 6: Ask children to share (a) a time when an adult was courteous to them — how did it make them feel? (b) A time when they were courteous to another person — what did they do? Then demonstrate acts of courtesy together: (a) Ask for a drink of water — properly and politely, (b) Say thank you to a partner, (c) Apologise sincerely for something, (d) Greet a friend warmly, (e) Share something and take turns. Say the memory verse: 'So in everything, do to others what you would have them do to you. Matthew 7:12.' Close with a prayer for a courteous heart.",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "sb-world-of-other-people",
      classId: "sunbeam",
      weekNumber: 14,
      title: "The World of Other People",
      objective:
        "Explore your neighbourhood, list things that are good and things you could help make better, then choose ways to actively improve your community.",
      memoryVerse: {
        text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
        reference: "Galatians 6:9",
      },
      materials: [
        { name: "The World of Other People worksheet from activity book", quantity: "1 per child" },
        { name: "Pencils for listing observations" },
        { name: "Crayons or markers" },
        { name: "Paper for neighbourhood improvement plan", quantity: "1 per child" },
      ],
      sections: [
        {
          id: "sb-woop-intro",
          type: "introduction",
          title: "Look Around Your Neighbourhood",
          duration: "5 mins",
          instructions:
            "Ask: 'Have you ever really looked carefully at your neighbourhood — the streets, the shops, the park, the people? What did you notice?' Let 2–3 children share. Introduce the activity: 'God calls us to be not just observers but contributors to our world. Today we think carefully about WHERE we live and ask: How can we make it better?' Distribute the worksheet — point out the two-column table: 'Good Things' and 'Things I Can Help Make Better.'",
          resources: ["Worksheet"],
        },
        {
          id: "sb-woop-bible",
          type: "bible_story",
          title: "Nehemiah — Rebuilding What Was Broken",
          duration: "10 mins",
          instructions:
            "Read Nehemiah 1:1-4 and 2:17-18: Nehemiah heard that the walls of Jerusalem were broken down and the people were in trouble and disgrace. He wept, prayed, and then took action — he went to Jerusalem and led the people to rebuild the walls in just 52 days. Ask: 'What did Nehemiah do when he saw something broken in his community? He (1) noticed the problem, (2) prayed, (3) made a plan, (4) took action.' Discuss: 'What broken walls do you see in your neighbourhood — things that are not right that could be improved? What can a Sunbeam do about it?'",
          resources: ["Bible"],
        },
        {
          id: "sb-woop-activity",
          type: "activity",
          title: "Neighbourhood Observation & Improvement Plan",
          duration: "15 mins",
          instructions:
            "The World of Other People Requirement 1a: Each child fills in the two-column worksheet — listing at least 8 good things about their neighbourhood AND 8 things they could help make better. Good things: nearby park, friendly neighbours, community garden, library. Things to improve: litter on footpaths, lonely elderly person, overgrown garden, graffiti. Requirement 1b: From their list, each child chooses two things they will personally do to make their neighbourhood better. They write a simple plan: What will I do? When? With whom? How will I know it worked? Children share their plans with a partner.",
          resources: ["Worksheet", "Pencils"],
        },
        {
          id: "sb-woop-craft",
          type: "craft",
          title: "My Neighbourhood Improvement Map",
          duration: "12 mins",
          instructions:
            "Children draw a simple map of their neighbourhood and mark both the good things and the things they plan to improve.",
          craftName: "My Neighbourhood Map",
          materials: [
            { name: "Paper", quantity: "1 per child" },
            { name: "Crayons or markers" },
          ],
          steps: [
            "Draw a simple top-down map of your street or neighbourhood",
            "Mark your house with a star",
            "Draw key places: school, church, park, shops, neighbours' homes",
            "Put a GREEN circle on things that are good in your neighbourhood",
            "Put an ORANGE circle on things you plan to help improve",
            "Write your improvement action beside each orange circle",
            "Write Galatians 6:9 along the border",
          ],
        },
        {
          id: "sb-woop-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Let 2–3 children share one thing from their neighbourhood improvement plan. Celebrate the variety of ideas. Say the memory verse: 'Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up. Galatians 6:9.' Challenge: This week, do at least one thing from your improvement plan. Report back at the next meeting. Close with a prayer: 'Lord, help us to see our neighbourhoods through your eyes — and to do our part to make them shine with your love. Amen.'",
          resources: ["Memory verse card"],
        },
      ],
    },

    {
      id: "sb-world-of-nature",
      classId: "sunbeam",
      weekNumber: 15,
      title: "The World of Nature — Friend of Nature",
      objective:
        "Complete the Friend of Nature award by learning how to protect nature, identifying trees and leaves, exploring a natural area, and going on a nature walk.",
      memoryVerse: {
        text: "The earth is the Lord's, and everything in it, the world, and all who live in it.",
        reference: "Psalm 24:1",
      },
      materials: [
        { name: "Nature walk area (park, garden, or outdoor space)" },
        { name: "Bark rubbing paper and crayons", quantity: "1 set per child" },
        { name: "Collection bag for leaves and nature items", quantity: "1 per child" },
        { name: "Magnifying glass", quantity: "1–2 per group" },
        { name: "Nature identification guide or pictures" },
        { name: "Large paper for leaf and bark display", quantity: "1 per child" },
        { name: "Glue sticks" },
      ],
      sections: [
        {
          id: "sb-won-intro",
          type: "introduction",
          title: "How to Be a Friend of Nature",
          duration: "8 mins",
          instructions:
            "Friend of Nature Requirement 1: Discuss three things. (a) How to become a friend of nature: spend time observing it, learn the names of plants and animals, avoid harming what you find, leave natural areas as you found them. (b) How to pick a flower and when it is allowed: only pick wildflowers where it is permitted, never pick flowers from private gardens or protected areas, pick single stems not bunches, and never uproot the whole plant. (c) How to protect trees, nests, and wildlife: do not carve or damage tree bark, never disturb a bird's nest or take eggs, do not remove animals from their natural habitat, report damage to trees or wildlife to an adult.",
          resources: [],
        },
        {
          id: "sb-won-bible",
          type: "bible_story",
          title: "God's World — Our Responsibility",
          duration: "8 mins",
          instructions:
            "Read Genesis 2:15: 'The Lord God took the man and put him in the Garden of Eden to work it and take care of it.' Ask: 'What does take care of it mean for us today?' Discuss stewardship — God made the world and gave it to us to look after, not to use carelessly. Read Psalm 24:1: 'The earth is the Lord's, and everything in it.' Say: 'If the earth belongs to God, what does that mean for how we treat it?' Connect to the nature walk: 'Today we go outside as guests in God's world — observing, learning, and caring.'",
          resources: ["Bible"],
        },
        {
          id: "sb-won-activity",
          type: "activity",
          title: "Nature Walk & Exploration",
          duration: "20 mins",
          instructions:
            "Friend of Nature Requirement 2: On the nature walk, identify the names of three different trees. For each tree, do a bark rubbing on paper — place paper against the bark and rub a crayon sideways across it to capture the texture. Friend of Nature Requirement 3: Collect four different kinds of leaves and compare them: Are they smooth or rough? Large or small? Pointed or rounded? Same colour or different shades of green? Friend of Nature Requirement 4a: Using a magnifying glass, explore all the things you can see in a ten square-foot area — insects, soil types, tiny plants, moss. Record observations together. Friend of Nature Requirement 5a: Take a nature walk and collect items of interest — interesting pebbles, fallen bark, seed pods, feathers. Note: take only fallen items, nothing attached to living plants.",
          resources: ["Collection bags", "Magnifying glasses", "Bark rubbing paper and crayons", "Nature guide"],
        },
        {
          id: "sb-won-craft",
          type: "craft",
          title: "Nature Collection Collage",
          duration: "14 mins",
          instructions:
            "Friend of Nature Requirement 5a (ii): Make the collected nature items into a collage or poster. Children arrange their leaves, bark rubbings, and drawings of nature finds into a display.",
          craftName: "My Nature Collection Collage",
          materials: [
            { name: "Large paper or card stock", quantity: "1 per child" },
            { name: "Craft glue" },
            { name: "Leaves and flat nature items collected on the walk" },
            { name: "Bark rubbings from trees" },
            { name: "Crayons or markers for labelling" },
          ],
          steps: [
            "Write 'The Earth Is the Lord's — Psalm 24:1' across the top",
            "Glue your bark rubbings in a row with the tree name written below each",
            "Arrange and glue your four leaves, labelling each with its tree name",
            "Draw or glue any other items you collected",
            "Write one interesting fact about something you discovered on the walk",
            "Write your name and today's date",
          ],
        },
        {
          id: "sb-won-closing",
          type: "closing",
          title: "Closing — Celebrating God's World",
          duration: "5 mins",
          instructions:
            "Hold up the nature collages. Each child shares one favourite discovery from the nature walk and what it tells them about God. Celebrate completing the Friend of Nature award and ALL Sunbeam requirements! Say the memory verse: 'The earth is the Lord's, and everything in it, the world, and all who live in it. Psalm 24:1.' Note: The Friend of Nature award also includes additional awards that can be earned: Feathered Friends, Ladybugs, Seeds, Trees, and Whales. Close with a prayer: 'Lord, thank you for this amazing world you made. Help us to be good friends of nature — caring for what you have entrusted to us. Amen.'",
          resources: ["Memory verse card"],
        },
      ],
    },
  ],
};

export default sunbeam;
