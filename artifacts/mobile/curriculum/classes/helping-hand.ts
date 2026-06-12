import type { AdventurerClassDef } from "../types";

const helpingHand: AdventurerClassDef = {
  id: "helping-hand",
  name: "Helping Hand",
  ageRange: "10–11 years",
  description: "Servant leadership and making a lasting difference for Christ.",
  color: "#C4B5FD",
  lessons: [
    // ─────────────────────────────────────────────────
    // BASIC — Requirements 1 & 2
    // ─────────────────────────────────────────────────
    {
      id: "hh-pledge-and-reading",
      classId: "helping-hand",
      weekNumber: 1,
      title: "The Adventurer Pledge, Law & Reading",
      objective:
        "Accept and demonstrate the Adventurer Pledge and Law through real-life situations, and complete the Reading IV award by engaging with scripture, health, family, nature, history, and mission books.",
      memoryVerse: {
        text: "In everything I did, I showed you that by this kind of hard work we must help the weak, remembering the words the Lord Jesus himself said: 'It is more blessed to give than to receive.'",
        reference: "Acts 20:35",
      },
      materials: [
        { name: "Adventurer Pledge and Law display card" },
        { name: "Bible (modern translation)" },
        { name: "Reading IV log sheets", quantity: "1 per child" },
        { name: "Books or reading materials: 1 Samuel 1–3, Jesus story book, health/safety book, family/feelings book, history/missions book, nature book" },
        { name: "Scenario cards for pledge demonstration" },
        { name: "Paper for illustration", quantity: "1 per child" },
        { name: "Crayons or markers" },
      ],
      sections: [
        {
          id: "hh-plr-intro",
          type: "introduction",
          title: "Pledge and Law — From Memory",
          duration: "10 mins",
          instructions:
            "Open by reciting the Adventurer Pledge together from memory: 'Because Jesus loves me, I will always do my best.' Then recite the Adventurer Law. Ask: 'What does it mean to truly ACCEPT this pledge — not just say it, but mean it?' Discuss: accepting the pledge means making a personal commitment that Jesus helps you live it daily. Children say both from memory without looking at the card.",
          resources: ["Adventurer Pledge and Law display card"],
        },
        {
          id: "hh-plr-bible",
          type: "bible_story",
          title: "Real-Life Pledge Situations",
          duration: "12 mins",
          instructions:
            "Present scenario cards — situations where the Pledge and Law guide a Christ-like response. Examples: a friend is being bullied (be kind, be helpful), a parent asks you to do something you don't want to do (be obedient), you're tempted to copy someone's work (be true, be pure). For each scenario, children discuss: 'What part of the Pledge or Law helps here? What would a Christ-like response look like?' Read Acts 20:35 — connect giving and serving to living the pledge daily.",
          resources: ["Bible", "Scenario cards"],
        },
        {
          id: "hh-plr-activity",
          type: "activity",
          title: "Reading IV Award Introduction",
          duration: "8 mins",
          instructions:
            "Introduce the Reading IV award. Children must read or listen while someone reads: (1) 1 Samuel 1–3 from a modern translation; (2) a Bible story or book about Jesus; (3) a book on health or safety; (4) a book on family, friends, or feelings; (5) a book on history or missions; (6) a book on nature. Hand out Reading IV log sheets. Children start reading one item today if books are available. Explain: reading is completed at home over the coming weeks — each meeting, children report progress.",
          resources: ["Reading IV log sheets", "Available books"],
        },
        {
          id: "hh-plr-craft",
          type: "craft",
          title: "Illustrate the Pledge in Action",
          duration: "12 mins",
          instructions:
            "Children illustrate or act out one real-life situation where the Pledge and Law helped them respond in a Christ-like way.",
          craftName: "Pledge in Real Life",
          materials: [
            { name: "Paper for illustration", quantity: "1 per child" },
            { name: "Crayons or markers" },
          ],
          steps: [
            "Think of a real situation from your life where it was hard to do the right thing",
            "Choose the part of the Pledge or Law that applies to your situation",
            "Divide your paper in two: label left 'The Situation', right 'My Christ-like Response'",
            "Draw or describe both sides clearly",
            "Write the relevant part of the Pledge or Law at the top",
            "Share your illustration with the group and explain what happened",
          ],
        },
        {
          id: "hh-plr-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Each child shares one reading they will start this week for the Reading IV award. Say the memory verse together. Close in prayer: 'Lord, help us not just to say the Pledge but to live it. As we read Your Word and learn from books this week, open our hearts to become more like You. Amen.'",
          resources: [],
        },
      ],
    },

    // ─────────────────────────────────────────────────
    // BASIC — Requirement 3
    // ─────────────────────────────────────────────────
    {
      id: "hh-hands-of-service",
      classId: "helping-hand",
      weekNumber: 2,
      title: "Hands of Service",
      objective:
        "Discover the biblical foundation for serving others, brainstorm a list of 10 service ideas for different communities, and plan and carry out a real neighbourhood or community service project.",
      memoryVerse: {
        text: "The Son of Man did not come to be served, but to serve, and to give his life as a ransom for many.",
        reference: "Matthew 20:28",
      },
      materials: [
        { name: "Bibles" },
        { name: "Large paper or whiteboard" },
        { name: "Markers" },
        { name: "Service project planning sheets", quantity: "1 per group" },
        { name: "Pencils", quantity: "1 per child" },
        { name: "Hands of Service commitment card", quantity: "1 per child" },
        { name: "Card stock, scissors, glue for craft" },
        { name: "Paint or ink pads (for handprint craft)" },
      ],
      sections: [
        {
          id: "hh-hos-intro",
          type: "introduction",
          title: "Why Do We Serve?",
          duration: "7 mins",
          instructions:
            "Ask: 'Has anyone done something to help someone else recently? How did it feel?' Take 3–4 answers. Then ask: 'Why do you think God wants us to serve others?' Discuss briefly. Tell the group: 'Today we're going to look at what the Bible says about service — and then we're going to plan a REAL service project to carry out.'",
          resources: [],
        },
        {
          id: "hh-hos-bible",
          type: "bible_story",
          title: "The Bible on Service — Sheep and Goats",
          duration: "15 mins",
          instructions:
            "Read aloud the six Bible verses about service: (a) Acts 20:35 — it is more blessed to give than to receive; (b) 1 Peter 4:10–11 — use your gifts to serve others; (c) Galatians 5:13–14 — serve one another in love; (d) Matthew 20:28 — Jesus came to serve; (e) Mark 10:44–45 — whoever wants to be great must be servant of all; (f) Philippians 2:1–11 — have the same attitude as Christ. Then read and discuss the parable of the sheep and goats (Matthew 25:31–46): (a) What do the 'sheep' and 'goats' represent? (b) What actions are different between them? (c) What actions does the King call 'blessed'? Why? (d) What does your club and church do that is similar? (e) Are the sheep in the 'habit' of serving? How do we build that habit? (f) How does it feel to serve others?",
          resources: ["Bibles"],
        },
        {
          id: "hh-hos-activity",
          type: "activity",
          title: "10 Service Ideas + Project Planning",
          duration: "15 mins",
          instructions:
            "Part 1: Together, create a list of at least 10 things the Helping Hands club could do to serve other people. Brainstorm in categories: (a) your family; (b) your church community; (c) your school community; (d) your neighbourhood or near the church; (e) people in need. Write all ideas on the large paper. Part 2: From the list, choose one service project for item (d) or (e) — a real community project to plan and carry out. Use planning sheets: Who needs help? What will we do? What materials do we need? Who does what? When will we do it? Report back to the club what difference it made.",
          resources: ["Large paper", "Markers", "Service project planning sheets", "Pencils"],
        },
        {
          id: "hh-hos-craft",
          type: "craft",
          title: "Helping Hands Handprint",
          duration: "10 mins",
          instructions:
            "Children create a personal 'Helping Hands' commitment card using their own handprint.",
          craftName: "My Helping Hands",
          materials: [
            { name: "Card stock", quantity: "1 per child" },
            { name: "Paint or ink pads (in a warm colour)" },
            { name: "Markers for writing" },
          ],
          steps: [
            "Press your hand in paint or on an ink pad",
            "Stamp your handprint on the card stock",
            "Let dry for 1–2 minutes",
            "Write 'My Helping Hands' at the top",
            "On each finger, write one way you will serve someone this week",
            "Write Matthew 20:28 at the bottom",
            "Sign and date the card",
            "Post it somewhere visible at home as a daily reminder",
          ],
        },
        {
          id: "hh-hos-closing",
          type: "closing",
          title: "Closing — Service Commitment",
          duration: "5 mins",
          instructions:
            "Children hold up their handprint cards. Ask: 'What is one service action you WILL do before the next meeting?' Each child states one specific action. Say the memory verse together. Close in prayer: 'Lord, You came to serve, not to be served. Help us to follow Your example and go into our communities this week with hands ready to help. Amen.'",
          resources: [],
        },
      ],
    },

    // ─────────────────────────────────────────────────
    // MY GOD — Meetings 1, 2, 3
    // ─────────────────────────────────────────────────
    {
      id: "hh-gods-plan-to-save-me",
      classId: "helping-hand",
      weekNumber: 3,
      title: "God's Plan to Save Me",
      objective:
        "Create a story chart tracing God's plan of salvation through Paul, Martin Luther, Ellen White, and yourself — and present one of these spiritual heroes through a skit or news story.",
      memoryVerse: {
        text: "Now faith is confidence in what we hope for and assurance about what we do not see.",
        reference: "Hebrews 11:1",
      },
      materials: [
        { name: "Bibles and age-appropriate story books about Paul, Martin Luther, Ellen White" },
        { name: "Large paper for story chart", quantity: "1 per child" },
        { name: "Crayons, markers, or coloured pencils" },
        { name: "Skit props or simple costume items (optional)" },
        { name: "Lined paper for news story writing", quantity: "1 per child" },
        { name: "Pencils", quantity: "1 per child" },
      ],
      sections: [
        {
          id: "hh-gpsm-intro",
          type: "introduction",
          title: "Spiritual Heroes Through History",
          duration: "8 mins",
          instructions:
            "Ask: 'Can you name someone who changed the world for God?' Take answers. Introduce the four people in today's lesson: the Apostle Paul (early church, New Testament), Martin Luther (Reformation, 1500s), Ellen White (Adventist Church, 1800s), and YOU (today). Ask: 'What connects all four of these people across 2,000 years?' Lead them to see: each one believed God's message and acted on it, even at great cost to themselves.",
          resources: [],
        },
        {
          id: "hh-gpsm-bible",
          type: "bible_story",
          title: "Four Heroes of Faith — Chronological Story Chart",
          duration: "15 mins",
          instructions:
            "Walk through each hero's story briefly in chronological order: (1) Paul — persecuted Christians, met Jesus on the road to Damascus, became the greatest missionary of the early church; (2) Martin Luther — Catholic monk who discovered 'the just shall live by faith' (Romans 1:17), nailed 95 Theses, launched the Protestant Reformation; (3) Ellen White — young girl with a vision, co-founder of the Seventh-day Adventist Church, prolific writer and health reformer; (4) You — alive today with the Holy Spirit, carrying God's plan forward. Discuss: 'What risks did each person take? What made them a spiritual hero?' Connect to Hebrews 11 — the great hall of faith.",
          resources: ["Bibles", "Story books about Paul, Luther, White"],
        },
        {
          id: "hh-gpsm-activity",
          type: "activity",
          title: "Story Chart + Skit or News Story",
          duration: "13 mins",
          instructions:
            "Part 1 (Story Chart): Each child draws a chronological story chart of the four heroes. In each box, draw the person and a key symbol from their story (Paul — Damascus road flash; Luther — 95 Theses scroll; White — quill and book; You — your name and today's date). Label each clearly. Part 2 (Skit or News Story): Choose ONE of the four heroes and either plan a short skit (act out their key moment) OR write a short news story (who, what, when, where, why — from the perspective of a reporter at the time). The goal: show how this person is a spiritual hero.",
          resources: ["Large paper", "Crayons and markers", "Pencils", "Lined paper for news story"],
        },
        {
          id: "hh-gpsm-craft",
          type: "craft",
          title: "My Place in God's Story",
          duration: "10 mins",
          instructions:
            "Children create a personal panel to add to the story chart — representing themselves as the next link in God's ongoing plan of salvation.",
          craftName: "I Am Part of God's Story",
          materials: [
            { name: "Card stock or thick paper", quantity: "1 per child" },
            { name: "Markers and crayons" },
          ],
          steps: [
            "Write your name at the top: 'My name is ___ and I am part of God's story'",
            "Draw yourself in the centre",
            "Around yourself, write 3 ways you can carry God's message forward today",
            "Write the year and your age",
            "Write Hebrews 11:1 at the bottom",
            "Attach your panel to the end of the class story chart",
          ],
        },
        {
          id: "hh-gpsm-closing",
          type: "closing",
          title: "Closing — Your Part in the Story",
          duration: "5 mins",
          instructions:
            "Groups perform their skits or share their news stories. Applaud each. Ask: 'Which spiritual hero inspired you most today? Why?' Say the memory verse together. Close in prayer: 'Lord, thank You for Paul, Martin Luther, and Ellen White who kept the faith before us. Help us to carry Your story forward in our generation. Amen.'",
          resources: [],
        },
      ],
    },

    {
      id: "hh-gods-message-to-me",
      classId: "helping-hand",
      weekNumber: 4,
      title: "God's Message to Me",
      objective:
        "Complete the Bible IV award — know the New Testament books, trace Paul's journeys, retell his conversion, choose and memorise three salvation verses, and identify modern spiritual heroes.",
      memoryVerse: {
        text: "Believe in the Lord Jesus, and you will be saved — you and your household.",
        reference: "Acts 16:31",
      },
      materials: [
        { name: "Bibles" },
        { name: "New Testament books list (printed)" },
        { name: "Bible atlas or printed map of Paul's missionary journeys" },
        { name: "Acts 9 story overview card" },
        { name: "Bible verse cards: Acts 16:31, John 1:12, Galatians 3:26, 2 Corinthians 5:7, Psalm 51:10" },
        { name: "Card stock for comic strip", quantity: "1 per child" },
        { name: "Pencils and markers" },
        { name: "Modern spiritual heroes brainstorm sheet" },
      ],
      sections: [
        {
          id: "hh-gmtm-intro",
          type: "introduction",
          title: "New Testament Books — Paul and the Apostles",
          duration: "10 mins",
          instructions:
            "Begin with a New Testament song or chant to learn the books in order. Then focus: 'Which books were written by Paul or tell stories of Paul and the Apostles?' Walk through and identify them: Matthew–John (Gospels), Acts (history), Romans, 1–2 Corinthians, Galatians, Ephesians, Philippians, Colossians, 1–2 Thessalonians, 1–2 Timothy, Titus, Philemon (Paul's letters), Hebrews–Revelation (other apostles). Play a quick 'which book is this?' game using the list. Then practise finding texts in the Bible quickly using a game — children race to find given references.",
          resources: ["Bibles", "New Testament books list"],
        },
        {
          id: "hh-gmtm-bible",
          type: "bible_story",
          title: "Paul's Conversion — Acts 9",
          duration: "15 mins",
          instructions:
            "Read or tell the story of Paul (Saul) on the road to Damascus (Acts 9). Set the scene: Saul was a zealous Pharisee who actively arrested and killed Christians. On the road to Damascus, a blinding light knocked him down and Jesus spoke: 'Saul, why do you persecute me?' Discuss: 'Why is Paul's conversion so important for Christianity? If God can transform someone like Paul — who was killing Christians — what does that say about His grace?' Look at a Bible map together: find three cities Paul visited on his missionary journeys (e.g., Philippi, Corinth, Ephesus). Then choose one story from Acts of someone telling someone else about Jesus and summarise it (Acts 8:26–40, Acts 16:21–34, etc.).",
          resources: ["Bibles", "Bible atlas / Paul's journeys map", "Acts 9 story overview card"],
        },
        {
          id: "hh-gmtm-activity",
          type: "activity",
          title: "Salvation Verses + Spiritual Heroes",
          duration: "10 mins",
          instructions:
            "Part 1 — Salvation Verses: Each child chooses three of the five Bible verses about giving your life to Jesus: Acts 16:31, John 1:12, Galatians 3:26, 2 Corinthians 5:7, Psalm 51:10. They read, memorise, and explain what each verse means. Practice in pairs: take turns explaining your verse to a partner in your own words. Part 2 — Modern Spiritual Heroes: As a group, brainstorm a list of modern spiritual heroes — people alive today who inspire you by their faith. Write the list on the board. Discuss: 'Why do we admire them? What do they do that reflects Jesus?'",
          resources: ["Bible verse cards", "Modern spiritual heroes brainstorm sheet", "Pencils"],
        },
        {
          id: "hh-gmtm-craft",
          type: "craft",
          title: "Comic Strip — A Story from Acts",
          duration: "12 mins",
          instructions:
            "Children create a 4–6 panel comic strip retelling a story from the book of Acts of someone telling another person about Jesus, and its value to us today.",
          craftName: "Good News Comic Strip",
          materials: [
            { name: "Card stock", quantity: "1 per child" },
            { name: "Pencils and markers" },
          ],
          steps: [
            "Choose your Acts story (e.g., Acts 8:26–40 Philip and the Ethiopian, or Acts 16:21–34 the Philippian jailer)",
            "Divide your card into 4–6 panels",
            "Panel 1: Introduce the characters and setting",
            "Panels 2–4: Tell the key events of the story",
            "Panel 5: Show the decision/conversion moment",
            "Panel 6: Write the value or lesson of this story for us today",
            "Add colour and speech bubbles to bring it to life",
            "Write Acts 16:31 somewhere on your comic strip",
          ],
        },
        {
          id: "hh-gmtm-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Children share their comic strips briefly. Ask: 'What would it look like for YOU to tell someone about Jesus this week — not with a big speech, but in a natural moment?' Say Acts 16:31 together. Close in prayer: 'Lord, You changed Paul on a Damascus road. You can change anyone. Give us courage to share Your good news with someone this week. Amen.'",
          resources: [],
        },
      ],
    },

    {
      id: "hh-gods-power-in-my-life",
      classId: "helping-hand",
      weekNumber: 5,
      title: "God's Power in My Life",
      objective:
        "Maintain a daily quiet time record with Jesus, understand the steps to salvation, ask three people why they gave their life to Jesus, and connect deeply with your church community through the My Church award.",
      memoryVerse: {
        text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
        reference: "John 3:16",
      },
      materials: [
        { name: "Quiet Time record sheet (4 weeks)", quantity: "1 per child" },
        { name: "Bible" },
        { name: "Steps to Jesus interview sheet (3 people)", quantity: "1 per child" },
        { name: "Large paper for church mural / map" },
        { name: "Markers and crayons" },
        { name: "Plain paper for footprint commitment craft", quantity: "1 per child" },
        { name: "Pencil for tracing foot" },
      ],
      sections: [
        {
          id: "hh-gpml-intro",
          type: "introduction",
          title: "Quiet Time — Walking with Jesus Daily",
          duration: "7 mins",
          instructions:
            "Ask: 'Does anyone have a regular quiet time with Jesus? What does it look like?' Share ideas: reading a passage, praying, journalling, singing a song of worship. Hand out the 4-week Quiet Time record sheet (Sun–Sat for each week). Explain: for the next four weeks, children track whether they spent time with Jesus each day — not judging others, just building the habit. Today they also need to complete the challenge: ask three people (other than family) why they decided to give their life to Jesus.",
          resources: ["Quiet Time record sheet"],
        },
        {
          id: "hh-gpml-bible",
          type: "bible_story",
          title: "Steps to Jesus — Understanding Salvation",
          duration: "15 mins",
          instructions:
            "Walk through the steps to salvation using the following progression with Bible verses: (1) God is love — 1 John 4:8, Jeremiah 31:3, John 3:16. God loves me deeply. (2) I am a sinner — Romans 3:23. Everyone has sinned; all need salvation. (3) Jesus died for me — John 3:16, 1 Corinthians 15:3–4. He rose as my Saviour; when I receive Him, my sins are forgiven (Isaiah 1:18, 1 John 2:1–2). (4) Salvation is a gift — John 1:12. I must personally ask Jesus to be my Saviour. God hears prayer. (5) I am a new person — 2 Corinthians 5:17. I don't want to do wrong because I love Jesus. (6) I can be sure I am saved — John 3:26, Hebrews 13:5. If I confess sin, Jesus forgives completely (Jeremiah 31:34, 1 John 1:9). Discuss and read four of the Bible stories of conversion: the Ethiopian (Acts 8:26–40); Naaman (2 Kings 5); Lost coin/sheep/son (Luke 15); Zacchaeus (Luke 19:1–10). Memorise John 3:16, Acts 16:31, and 1 John 1:9.",
          resources: ["Bible"],
        },
        {
          id: "hh-gpml-activity",
          type: "activity",
          title: "My Church Award — Know Your Church",
          duration: "12 mins",
          instructions:
            "Complete the My Church award activities together: (1) Learn and memorise 1 Corinthians 3:16 — 'You are God's temple.' Learn the song 'Lord, Prepare Me to Be a Sanctuary.' (2) As a club, draw a mural with your church in the centre. Each child adds their house and names the roads between the houses and the church. (3) Discuss the church board: what is it and what does it do? Name 10 church board positions. (4) Discuss: 'What is one way I can help God in my church every week starting this week?' Ask the pastor (or discuss based on knowledge): the questions about their calling and how children can serve now. (5) Draw the floor plan of your church, labelling: sanctuary, office, Sabbath school room, fellowship hall, restrooms, Adventurer room, community service room.",
          resources: ["Large paper for mural/map", "Markers and crayons"],
        },
        {
          id: "hh-gpml-craft",
          type: "craft",
          title: "First Steps to Jesus Footprint",
          duration: "10 mins",
          instructions:
            "Children make a personal 'First Steps to Jesus' commitment by tracing their foot and writing a declaration of faith.",
          craftName: "My First Steps to Jesus",
          materials: [
            { name: "Plain paper", quantity: "1 per child" },
            { name: "Pencil for tracing" },
            { name: "Markers and crayons" },
          ],
          steps: [
            "Take off one shoe and trace around your foot on the paper",
            "Inside the footprint, write: 'I ___ have taken my first steps to Jesus today ___ (date)'",
            "Leave a space for an adult witness to sign: 'with ___'",
            "Decorate the footprint any way you like",
            "Write John 3:16 around the border",
            "Share your footprint with a leader and make your personal decision to follow Jesus",
          ],
        },
        {
          id: "hh-gpml-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Children who are ready share their footprint commitment with a leader or the group. Respect those who are still deciding — no pressure. Challenge: ask three people this week (not family) why they decided to give their life to Jesus. Record their answers. Say John 3:16 together from memory. Close in prayer: 'Lord, You love us so much You sent Jesus. Today we choose to follow Him. Give us courage to walk with You every day. Amen.'",
          resources: [],
        },
      ],
    },

    // ─────────────────────────────────────────────────
    // MY SELF — Meetings 1, 2, 3
    // ─────────────────────────────────────────────────
    {
      id: "hh-i-am-special",
      classId: "helping-hand",
      weekNumber: 6,
      title: "I Am Special",
      objective:
        "Identify personal interests and abilities that God has given you, and demonstrate a talent by working toward an Adventurer award that expresses your gifts.",
      memoryVerse: {
        text: "We are God's accomplishment, created in Christ Jesus to do good things.",
        reference: "Ephesians 2:10",
      },
      materials: [
        { name: "Bible" },
        { name: "Gifts and Abilities worksheet", quantity: "1 per child" },
        { name: "Adventurer award options list (talent-related awards)" },
        { name: "Large paper for talent showcase display" },
        { name: "Pencils", quantity: "1 per child" },
        { name: "Card stock for talent card", quantity: "1 per child" },
        { name: "Markers and crayons" },
        { name: "Stickers or decorative items" },
      ],
      sections: [
        {
          id: "hh-ias-intro",
          type: "introduction",
          title: "What Makes You Unique?",
          duration: "7 mins",
          instructions:
            "Ask: 'If you could choose a superpower based on something you are already good at, what would it be?' Take fun answers. Then shift: 'God gave you REAL abilities that are just as powerful — maybe not flying, but things that can genuinely change lives.' Read Ephesians 2:10 together: 'We are God's accomplishment, created in Christ Jesus to do good things.' Emphasise: 'God made you ON PURPOSE. Your interests and abilities are not accidents.'",
          resources: ["Bible"],
        },
        {
          id: "hh-ias-bible",
          type: "bible_story",
          title: "God's Gifts Are for Serving",
          duration: "10 mins",
          instructions:
            "Discuss the parable of the talents (Matthew 25:14–30). Ask: 'What happened to the servant who buried his talent? What does this tell us about hiding our gifts?' Connect to 1 Peter 4:10 — 'Each of you should use whatever gift you have received to serve others.' Examples of biblical people who used their talents: Bezalel (craftsman, Exodus 31:1–5), Miriam (music and dance, Exodus 15:20–21), David (music, 1 Samuel 16:18), Tabitha/Dorcas (sewing, Acts 9:36–39). Ask: 'What would the church and world look like if everyone used their gifts for God?'",
          resources: ["Bible"],
        },
        {
          id: "hh-ias-activity",
          type: "activity",
          title: "Gifts and Abilities Discovery",
          duration: "12 mins",
          instructions:
            "Each child fills in the Gifts and Abilities worksheet: (1) List 3 things you enjoy doing; (2) List 3 things people say you are good at; (3) List 1 thing you wish you were better at; (4) Circle any that could be used to serve God and others. Share in pairs. Then introduce the Adventurer talent award options — children choose one award that matches their talents (e.g., music, art, craft, cooking, language). Explain that completing one of these awards is their requirement to demonstrate and share their talent.",
          resources: ["Gifts and Abilities worksheet", "Adventurer award options list", "Pencils"],
        },
        {
          id: "hh-ias-craft",
          type: "craft",
          title: "My Talent Card",
          duration: "13 mins",
          instructions:
            "Children create a personal talent card that celebrates who God made them to be.",
          craftName: "God Made Me For This",
          materials: [
            { name: "Card stock", quantity: "1 per child" },
            { name: "Markers and crayons" },
            { name: "Stickers or decorative items" },
          ],
          steps: [
            "Fold card stock into a card or leave flat as a poster",
            "Write your name boldly at the top",
            "Draw or write your top 3 gifts and abilities inside or on the card",
            "Write one way you will use each gift to serve God or others",
            "Write Ephesians 2:10 at the bottom",
            "Decorate with symbols that represent your talents",
            "Share your card with the group — present it as if introducing yourself to Jesus",
          ],
        },
        {
          id: "hh-ias-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Children share their talent cards. Ask: 'Which Adventurer award will you work on to demonstrate your talent?' Each child states their chosen award. Say the memory verse together. Close in prayer: 'Lord, thank You that You made us on purpose with specific gifts. Help us to see them clearly and use them boldly for You. Amen.'",
          resources: [],
        },
      ],
    },

    {
      id: "hh-i-can-make-wise-choices",
      classId: "helping-hand",
      weekNumber: 7,
      title: "I Can Make Wise Choices",
      objective:
        "Learn and apply the four steps of good decision-making to solve two real-life problems, using biblical wisdom as the ultimate guide.",
      memoryVerse: {
        text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
        reference: "Proverbs 3:5-6",
      },
      materials: [
        { name: "Bible" },
        { name: "Decision-making steps poster (printed or written on board)" },
        { name: "Real-life scenario cards", quantity: "1 set" },
        { name: "Decision worksheet", quantity: "1 per child" },
        { name: "Pencils", quantity: "1 per child" },
        { name: "Card stock for decision-tree craft", quantity: "1 per child" },
        { name: "Markers and crayons" },
      ],
      sections: [
        {
          id: "hh-icmwc-intro",
          type: "introduction",
          title: "Hard Decisions",
          duration: "7 mins",
          instructions:
            "Ask: 'Has anyone had a really hard decision to make recently? You don't have to share details — just raise your hand if you've faced a tough choice.' Acknowledge that decisions are hard for everyone. Ask: 'How do you usually decide what to do?' Take answers. Then: 'Today we learn a four-step process for making wise decisions — and we'll test it on some real problems.'",
          resources: [],
        },
        {
          id: "hh-icmwc-bible",
          type: "bible_story",
          title: "Four Steps of Good Decision-Making",
          duration: "12 mins",
          instructions:
            "Present the four steps of good decision-making: (1) Define the problem — what exactly is the problem? Be specific. (2) Brainstorm all possible solutions — list every option, even silly ones; don't judge yet. (3) Consider the consequences for yourself AND others — what happens for each option? Who is affected? What would Jesus do? (4) Decide on a solution and carry it out — make your choice and act. Connect to scripture: Step 1 — Proverbs 14:15 'The simple believe anything, but the prudent give thought to their steps.' Step 2 — Proverbs 15:22 'Plans fail without counsel.' Step 3 — Philippians 4:8 'Think on things that are true, right, pure.' Step 4 — James 1:22 'Be doers of the word, not hearers only.' Read and discuss Proverbs 3:5–6 together as the foundation for all decision-making.",
          resources: ["Bible", "Decision-making steps poster"],
        },
        {
          id: "hh-icmwc-activity",
          type: "activity",
          title: "Solving Real-Life Problems",
          duration: "15 mins",
          instructions:
            "Children work through TWO real-life problem scenarios using the four-step process. Use scenario cards appropriate to their age group. Examples: (a) Your friend asks you to lie to a teacher to cover for them — what do you do? (b) You see someone being bullied at school — what do you do? (c) You accidentally broke something at home — your parents don't know — what do you do? For each scenario: Step 1 — define the problem clearly. Step 2 — list every possible solution (no judgment). Step 3 — evaluate consequences for yourself and others. Step 4 — decide and explain how you would carry it out. Groups share their decisions and reasoning.",
          resources: ["Scenario cards", "Decision worksheet", "Pencils"],
        },
        {
          id: "hh-icmwc-craft",
          type: "craft",
          title: "My Decision Tree",
          duration: "13 mins",
          instructions:
            "Children create a visual Decision Tree — a personal reference tool they can use whenever they face a hard choice.",
          craftName: "My 4-Step Decision Tree",
          materials: [
            { name: "Card stock", quantity: "1 per child" },
            { name: "Markers and crayons" },
          ],
          steps: [
            "Draw a large tree on your card stock — trunk, branches, and roots",
            "In the ROOTS write: 'Proverbs 3:5–6 — Trust God with all my heart'",
            "In the TRUNK write: 'Step 1 — Define the problem clearly'",
            "On branch 1: 'Step 2 — Brainstorm all solutions'",
            "On branch 2: 'Step 3 — Consider consequences for me AND others'",
            "On branch 3: 'Step 4 — Decide and carry it out'",
            "In the leaves: write 3 words that describe a wise decision-maker (e.g., patient, prayerful, brave)",
            "Colour and decorate your tree",
          ],
        },
        {
          id: "hh-icmwc-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Ask: 'Which step of the decision-making process is hardest for you personally? Why?' Take 2–3 answers. Say Proverbs 3:5–6 together. Close in prayer: 'Lord, every day we face hard choices. Help us to trust You with all our heart and not lean on our own understanding. Make our paths straight. Amen.'",
          resources: [],
        },
      ],
    },

    {
      id: "hh-i-can-care-for-my-body",
      classId: "helping-hand",
      weekNumber: 8,
      title: "I Can Care for My Body",
      objective:
        "Complete the Hygiene award — understand personal cleanliness from a biblical perspective, practise handwashing and teeth brushing, and discover how healthy habits honour God.",
      memoryVerse: {
        text: "I have hidden your word in my heart that I might not sin against you.",
        reference: "Psalm 119:11",
      },
      materials: [
        { name: "Bible" },
        { name: "Soap and water (handwashing station or hand sanitiser)" },
        { name: "Toothbrushes (new, one per child if available) and toothpaste" },
        { name: "Paper cups for toothbrushing practice" },
        { name: "Hygiene quiz cards" },
        { name: "Plain paper for hygiene poster", quantity: "1 per child" },
        { name: "Markers and crayons" },
        { name: "Water cups (8 per child to count daily water intake)" },
      ],
      sections: [
        {
          id: "hh-iccfb-intro",
          type: "introduction",
          title: "Why Does Hygiene Matter?",
          duration: "7 mins",
          instructions:
            "Ask: 'What do you do every morning to take care of your body?' List answers on the board (brush teeth, wash face, shower, etc.). Ask: 'Why do these things matter? Is it just about looking good?' Connect to the Bible: our bodies are God's temple (1 Corinthians 6:19). Caring for our bodies is a form of worship — it honours God. Read and find Psalm 119:11, Psalm 51:10, and Psalm 19:14 together. Ask: 'What do these verses say about cleanliness — both inner and outer?'",
          resources: ["Bible"],
        },
        {
          id: "hh-iccfb-bible",
          type: "bible_story",
          title: "Hygiene Award — Key Habits",
          duration: "12 mins",
          instructions:
            "Work through the Hygiene award requirements together: (1) Find, read, and discuss Psalm 119:11, 51:10, and 19:14 — inner and outer cleanliness both matter to God. (2) Personal cleanliness: discuss what it means to keep your body, hair, and clothing clean. (3) Three important times for handwashing: before eating, after using the toilet, after touching animals/dirt. Ask: why is this? Explain germ theory at a basic level. (4) Discuss regular bathing and keeping hair clean — frequency, products, why it matters. (5) Ask: how many glasses of water should you drink daily? (8 glasses / about 2 litres). Why? (6) Is it important to keep clothing clean? Why? (appearance, respect, hygiene, confidence).",
          resources: ["Bible"],
        },
        {
          id: "hh-iccfb-activity",
          type: "activity",
          title: "Proper Teeth Brushing & Handwashing Practice",
          duration: "12 mins",
          instructions:
            "Hands-on practice stations: Station 1 — Proper toothbrushing: demonstrate the correct technique (small circles, 2 minutes, all surfaces, floss). Children practise. Discuss: how often should you brush? What happens if you don't? Station 2 — Proper handwashing: demonstrate the 20-second handwashing technique (soap, lather, scrub between fingers, rinse, dry). Children practise at the handwashing station. Hygiene Quiz: rapid-fire questions on hygiene facts — correct answers earn points for the group.",
          resources: ["Soap and water", "Toothbrushes and toothpaste", "Paper cups", "Hygiene quiz cards"],
        },
        {
          id: "hh-iccfb-craft",
          type: "craft",
          title: "My Hygiene Habits Poster",
          duration: "11 mins",
          instructions:
            "Children create a personal hygiene habits poster to display in their bathroom at home.",
          craftName: "My Body Is God's Temple",
          materials: [
            { name: "Plain paper or card stock", quantity: "1 per child" },
            { name: "Markers and crayons" },
          ],
          steps: [
            "Write the title at the top: 'My Body Is God's Temple'",
            "Draw 6 boxes — one for each daily hygiene habit",
            "Label each box: Brush teeth, Wash hands (3 times), Shower/bathe, Drink 8 glasses of water, Clean clothes, Quiet time with God",
            "Illustrate each habit with a small drawing",
            "Write Psalm 119:11 at the bottom",
            "Add your name and hang it in your bathroom at home",
          ],
        },
        {
          id: "hh-iccfb-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Hold up posters. Ask: 'Which of these habits is hardest for you to remember? How will you make it a habit?' Say the memory verse together. Close in prayer: 'Lord, thank You for giving us these bodies. Help us to honour You in how we care for them — inside and out — every day. Amen.'",
          resources: [],
        },
      ],
    },

    // ─────────────────────────────────────────────────
    // MY FAMILY — Meetings 1, 2, 3
    // ─────────────────────────────────────────────────
    {
      id: "hh-i-have-a-family",
      classId: "helping-hand",
      weekNumber: 9,
      title: "I Have a Family",
      objective:
        "Create a family flag or banner that represents your family's values and identity, and complete the My Picture Book award using family history photos and Joel 1:3.",
      memoryVerse: {
        text: "Tell your children of it, and let your children tell their children, and their children to another generation.",
        reference: "Joel 1:3",
      },
      materials: [
        { name: "Family photos (ask parents to send in advance — 6+ photos per child)" },
        { name: "Fabric or thick felt for family flag/banner", quantity: "1 piece per child" },
        { name: "Fabric markers or paint sticks" },
        { name: "Dowel or stick for banner", quantity: "1 per child" },
        { name: "Tape or glue for attaching fabric to stick" },
        { name: "Blank picture book pages (folded A4 paper stapled)", quantity: "1 booklet per child" },
        { name: "Glue sticks for photos", quantity: "1 per child" },
        { name: "Pencils and markers for captions" },
        { name: "Bible" },
      ],
      sections: [
        {
          id: "hh-ihaf-intro",
          type: "introduction",
          title: "Your Family's Story",
          duration: "7 mins",
          instructions:
            "Ask: 'What are some symbols or traditions in your family that are uniquely yours? A family saying, a food you always have at celebrations, something your family does that nobody else does?' Share a few. Ask: 'If your family had a flag, what would be on it?' Take fun answers. Read Joel 1:3: 'Tell your children of it, and let your children tell their children.' Discuss: why does God want family stories to be passed down? Every family has a story worth telling.",
          resources: ["Bible"],
        },
        {
          id: "hh-ihaf-bible",
          type: "bible_story",
          title: "Families in the Bible — Passing Down Faith",
          duration: "10 mins",
          instructions:
            "Discuss how God designed families to be storytellers of His faithfulness. Examples: Deuteronomy 6:4–9 — parents are commanded to teach God's ways at all times (at home, walking, sleeping, waking); 2 Timothy 1:5 — Paul commends Timothy's faith passed down from grandmother Lois and mother Eunice; Joshua 4:6–7 — the stones from the Jordan were set up so that children would ask 'What do these stones mean?' and parents could tell the story. Ask: 'What stories in your family tell of God's faithfulness? A healing? An answered prayer? A time God provided?'",
          resources: ["Bible"],
        },
        {
          id: "hh-ihaf-activity",
          type: "activity",
          title: "My Picture Book Award",
          duration: "13 mins",
          instructions:
            "Using family photos provided in advance, children create their My Picture Book: (1) Make a picture book of at least 6 pages — one photo per page. (2) All pages must have some form of decoration (borders, drawings, stickers). (3) Write a description of each photo: who is in it, when it was taken, what was happening. (4) Memorise Joel 1:3 together. (5) On the last page, write how making this book helped you understand Joel 1:3. Plan to share the book with family at home.",
          resources: ["Family photos", "Blank picture book pages", "Glue sticks", "Pencils and markers"],
        },
        {
          id: "hh-ihaf-craft",
          type: "craft",
          title: "Family Flag or Banner",
          duration: "13 mins",
          instructions:
            "Children design and create a family flag or banner that represents their family's identity, values, and faith.",
          craftName: "My Family Flag",
          materials: [
            { name: "Fabric or thick felt", quantity: "1 piece per child" },
            { name: "Fabric markers or paint sticks" },
            { name: "Dowel or stick", quantity: "1 per child" },
            { name: "Tape or glue for attachment" },
          ],
          steps: [
            "Think about your family: What do you love? What are your values? What is your faith heritage?",
            "Sketch a design on paper first (colours, symbols, words)",
            "Choose colours that mean something to your family",
            "Add at least one symbol that represents your family's faith",
            "Add your family name or initials",
            "Transfer your design onto the fabric using fabric markers or paint",
            "When dry, attach the fabric to the dowel with tape or glue",
            "Present your flag and explain the meaning of each element",
          ],
        },
        {
          id: "hh-ihaf-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Children display and explain their family flags. Applaud each one. Ask: 'What is one family story you want to make sure gets passed to the next generation?' Say Joel 1:3 together. Close in prayer: 'Lord, thank You for the gift of family. Help us to pass on stories of Your faithfulness so that our children's children will know You. Amen.'",
          resources: [],
        },
      ],
    },

    {
      id: "hh-families-care-for-each-other",
      classId: "helping-hand",
      weekNumber: 10,
      title: "Families Care for Each Other",
      objective:
        "Plan and carry out a special family worship, family night, or family outing, and report back to the group about the experience and its impact.",
      memoryVerse: {
        text: "And let us consider how we may spur one another on toward love and good deeds, not giving up meeting together.",
        reference: "Hebrews 10:24-25",
      },
      materials: [
        { name: "Bible" },
        { name: "Family event planning worksheet", quantity: "1 per child" },
        { name: "Pencils", quantity: "1 per child" },
        { name: "Sample family worship / family night ideas list" },
        { name: "Card stock for planning card", quantity: "1 per child" },
        { name: "Markers and crayons" },
        { name: "Stickers for planning card decoration" },
      ],
      sections: [
        {
          id: "hh-fcofe-intro",
          type: "introduction",
          title: "When Did Your Family Last Do Something Together?",
          duration: "7 mins",
          instructions:
            "Ask: 'When did your family last do something fun or meaningful together? What was it?' Take 3–4 answers. Celebrate all sizes of family activity. Ask: 'What makes family time feel special vs. just being in the same room?' Discuss: intentionality — choosing to make it happen. Read Hebrews 10:24–25 — 'not giving up meeting together.' While this is about church, the principle applies to families. Ask: 'Why does God say meeting together matters?'",
          resources: ["Bible"],
        },
        {
          id: "hh-fcofe-bible",
          type: "bible_story",
          title: "Families That Worshipped Together",
          duration: "10 mins",
          instructions:
            "Look at Bible families who made intentional time together: (1) Joshua 24:15 — 'As for me and my house, we will serve the Lord.' Discuss: what did Joshua mean by this public declaration? (2) Luke 2:41–52 — Mary and Joseph made an annual trip to Jerusalem for Passover (a family worship tradition). This was how Jesus grew up. (3) Acts 16:34 — the Philippian jailer and his whole household were baptised and then 'was filled with joy because he had come to believe in God — he and his whole family.' Ask: 'What family worship or family night traditions would you like to start in your family?'",
          resources: ["Bible"],
        },
        {
          id: "hh-fcofe-activity",
          type: "activity",
          title: "Plan Your Family Event",
          duration: "15 mins",
          instructions:
            "Each child plans their own family worship, family night, or family outing using the planning worksheet. Guide them: (a) What type of event? (worship, game night, movie night with discussion, picnic, service project together); (b) Who is included? (parents, siblings, grandparents); (c) What will happen? (outline the activities step by step); (d) When will it happen? (pick an actual date this week or next); (e) What do you need to prepare? Discuss: how will they 'report back' to the group at the next meeting? They should note what happened, how their family responded, and what difference it made.",
          resources: ["Family event planning worksheet", "Pencils", "Sample ideas list"],
        },
        {
          id: "hh-fcofe-craft",
          type: "craft",
          title: "Family Event Planning Card",
          duration: "10 mins",
          instructions:
            "Children create a colourful planning card to give to their parents — a formal invitation to the family event they have planned.",
          craftName: "Family Night Invitation",
          materials: [
            { name: "Card stock", quantity: "1 per child" },
            { name: "Markers and crayons" },
            { name: "Stickers for decoration" },
          ],
          steps: [
            "Fold card stock into a card",
            "On the front: write 'You Are Invited!' with a drawing that represents the activity",
            "Inside: write the date, time, place, and what will happen",
            "Write a personal message to your family: 'I planned this because I love you and want us to spend time together'",
            "Write Hebrews 10:24–25 inside",
            "Sign and decorate with stickers",
            "Give the card to your parent or guardian TODAY",
          ],
        },
        {
          id: "hh-fcofe-closing",
          type: "closing",
          title: "Closing — Report-Back Commitment",
          duration: "5 mins",
          instructions:
            "Children share their event plans briefly. Ask each: 'When is your family event happening?' Hold them accountable with a specific date. At the NEXT meeting, each child will report back: what happened, how the family responded, and what difference it made. Say the memory verse together. Close in prayer: 'Lord, help us to be intentional about family. Give us the courage to plan something meaningful this week and the joy of watching You work through it. Amen.'",
          resources: [],
        },
      ],
    },

    {
      id: "hh-family-helps-me-care-for-myself",
      classId: "helping-hand",
      weekNumber: 11,
      title: "My Family Helps Me Care for Myself",
      objective:
        "Complete the Cooperation award — understand what cooperation means from scripture, practise it through role play and cooperative games, and create a cooperative craft together.",
      memoryVerse: {
        text: "All the believers were one in heart and mind. No one claimed that any of their possessions was their own, but they shared everything they had.",
        reference: "Acts 4:32",
      },
      materials: [
        { name: "Bible" },
        { name: "Role play scenario cards for Bible cooperation stories" },
        { name: "Cooperative game materials (rope, cones, or cooperative board game)" },
        { name: "Cooperative craft materials: large paper, paint, tape" },
        { name: "Cooperation award definition card" },
        { name: "Markers" },
      ],
      sections: [
        {
          id: "hh-fhmcfm-intro",
          type: "introduction",
          title: "What Is Cooperation?",
          duration: "7 mins",
          instructions:
            "Ask: 'Has anyone ever tried to do something that was IMPOSSIBLE alone but easy with help?' Give an example: moving heavy furniture, carrying a large box, building something large. Introduce: 'Today we're going to learn about cooperation — working together — and we'll practise it through games, role play, and a craft.' Ask: 'What do you think cooperation means? Is it just taking turns, or is there more to it?' Take answers. Define: cooperation is working together willingly and joyfully to achieve a shared goal.",
          resources: [],
        },
        {
          id: "hh-fhmcfm-bible",
          type: "bible_story",
          title: "Bible Stories About Cooperation",
          duration: "12 mins",
          instructions:
            "Read and discuss three key Bible passages about cooperation: (1) Acts 4:32–37 — the early church shared everything; no one was in need. Ask: 'What made this cooperation possible? (one heart and mind, love for Jesus)' (2) Exodus 35:20–29 — the people willingly brought offerings to build the tabernacle. Ask: 'What motivated them to give? (love for God, willingness of heart)' (3) Exodus 36:2–7 — so much was given that Moses had to tell people to STOP bringing offerings! Ask: 'What does this say about the spirit of cooperation in that community?' Discuss: Why is cooperation important in your family? School? Church?",
          resources: ["Bible"],
        },
        {
          id: "hh-fhmcfm-activity",
          type: "activity",
          title: "Bible Cooperation Role Play + Cooperative Game",
          duration: "15 mins",
          instructions:
            "Part 1 — Role Play: In small groups, role play one of three Bible cooperation stories: the early church sharing (Acts 4), the tabernacle building (Exodus 35–36), or Nehemiah rebuilding the wall (Nehemiah 3 — each family and guild building their section). Each group performs their 2-minute role play, then the class identifies: 'What made their cooperation work?' Part 2 — Cooperative Game: Play a cooperative game where the whole group wins or loses together (e.g., keep a balloon in the air without letting it touch the ground using only elbows, or a blindfolded maze navigated by teammates calling directions). Debrief: 'What made us succeed or fail? What does this teach us about cooperation?'",
          resources: ["Cooperation role play scenario cards", "Balloon or cooperative game equipment"],
        },
        {
          id: "hh-fhmcfm-craft",
          type: "craft",
          title: "Cooperative Group Mural",
          duration: "13 mins",
          instructions:
            "The WHOLE group creates one large mural together — demonstrating cooperation in real time.",
          craftName: "One Heart, One Mind — Group Mural",
          materials: [
            { name: "Large paper (at least 1m wide), taped to the wall or floor" },
            { name: "Paint in 3–4 colours" },
            { name: "Large and small brushes" },
            { name: "Sponges or stamping materials" },
          ],
          steps: [
            "As a group, agree on a theme (e.g., 'God's Family', 'Helping Hands', 'Working Together')",
            "Divide the mural into sections — each person is responsible for one area",
            "But each person's section must connect to at least two other people's sections",
            "Everyone paints at the same time — no waiting for others to finish",
            "As you paint, talk to your neighbours about how your sections connect",
            "When complete, step back and look at the whole — what do you see?",
            "Write Acts 4:32 across the bottom as a group",
            "Sign your section with your name",
          ],
        },
        {
          id: "hh-fhmcfm-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Stand back and admire the group mural. Ask: 'What was hard about cooperating on this? What was great about it?' Observe: 'Every section is different — but together it makes something beautiful. That's what cooperation does.' Sing a cooperation song together if time allows. Say the memory verse together. Close in prayer: 'Lord, help us to be people who cooperate willingly — in our families, our school, and our church. Make us one in heart and mind. Amen.'",
          resources: [],
        },
      ],
    },

    // ─────────────────────────────────────────────────
    // MY WORLD — Meetings 1, 2, 3
    // ─────────────────────────────────────────────────
    {
      id: "hh-world-of-friends",
      classId: "helping-hand",
      weekNumber: 12,
      title: "The World of Friends",
      objective:
        "Complete the Early Adventist Pioneer award — discover the faith, sacrifice, and legacy of five Adventist pioneers and connect their story to our calling today.",
      memoryVerse: {
        text: "Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Jesus.",
        reference: "Revelation 14:12",
      },
      materials: [
        { name: "Adventist Pioneer profile cards (William Miller, James White, Ellen White, Joseph Bates, Hiram Edson)" },
        { name: "Early Adventist hymn: 'The Advent Still Our Theme' or similar (printed lyrics)" },
        { name: "Granola ingredients: oats, honey, nuts, dried fruit, vegetable oil, vanilla" },
        { name: "Baking tray and oven (or stovetop pan)" },
        { name: "Plain bandana or similar cloth item", quantity: "1 per child" },
        { name: "Fabric markers or dye for bandana" },
        { name: "Bible" },
        { name: "Large book (like Ellen White held in her vision)" },
        { name: "Early American game instructions (e.g., marbles, graces, hoop and stick)" },
      ],
      sections: [
        {
          id: "hh-wof-intro",
          type: "introduction",
          title: "Five Adventist Pioneers",
          duration: "10 mins",
          instructions:
            "Introduce the five Adventist Pioneers using profile cards. For each, share name + key facts + something remarkable: (1) William Miller — preached the Second Coming; the Great Disappointment of 1844; never stopped trusting God; (2) James White — co-founder of the Adventist Church; publisher, evangelist, husband of Ellen White; (3) Ellen White — received visions beginning at age 17; wrote over 100,000 pages; demonstrated God's guidance in the early church; held an open 18-lb Bible in her outstretched hand for 45 minutes during a vision without looking away; (4) Joseph Bates — sea captain who championed the Sabbath; (5) Hiram Edson — corn field vision that helped explain the 1844 disappointment. Ask: 'What made these people heroes? What did they risk?'",
          resources: ["Pioneer profile cards"],
        },
        {
          id: "hh-wof-bible",
          type: "bible_story",
          title: "The Pioneer Hymn and Revelation 14:12",
          duration: "12 mins",
          instructions:
            "Part 1 — Read a story about one Adventist Pioneer in more detail (use a pioneer story book or detailed profile card). Ask: 'What sacrifice did this person make? What does their life say about faith?' Part 2 — Read Revelation 14:12 and memorise it: 'Here is the patience of the saints: here are they that keep the commandments of God, and the faith of Jesus.' Discuss: 'How did the Adventist pioneers demonstrate this verse? How can WE demonstrate it today?' Part 3 — Learn an early Adventist hymn. Sing together, memorising the first verse. Discuss: Why did the early Adventists sing so much? What was the role of music in their faith?",
          resources: ["Bible", "Pioneer story book or card", "Hymn lyrics"],
        },
        {
          id: "hh-wof-activity",
          type: "activity",
          title: "Hold the Book! Pioneer Experience Activities",
          duration: "13 mins",
          instructions:
            "Activity 1 — Hold the Book: Pass around the largest book available (Bible or heavy hardback). Take turns holding it outstretched in one hand while someone times how long each person can hold it. Ellen White held an open 18-lb Bible for 45 minutes in a vision — without looking away! Debrief: 'What does this tell us about God's power?' Activity 2 — Granola Making (if kitchen available): Prepare granola — connect to the Adventist health message that pioneers like Ellen White championed. (Mix oats, honey, nuts, dried fruit, oil, vanilla; bake or toast.) Discuss: what did granola have to do with the pioneers? Activity 3 — Early American game: Play one early American game such as marbles, graces, or hoop and stick.",
          resources: ["Large heavy book", "Granola ingredients (optional)", "Early American game materials"],
        },
        {
          id: "hh-wof-craft",
          type: "craft",
          title: "Pioneer Costume Bandana",
          duration: "10 mins",
          instructions:
            "Children paint, tie-dye, or decorate a plain bandana or similar cloth item to use as a pioneer costume.",
          craftName: "Pioneer Bandana",
          materials: [
            { name: "Plain bandana or cloth", quantity: "1 per child" },
            { name: "Fabric markers, tie-dye kit, or paint" },
          ],
          steps: [
            "Decide your decoration style: tie-dye (twist and bind), fabric paint (draw), or markers (write and draw)",
            "If tie-dying: twist and bind sections with rubber bands, apply dye, leave 30 mins",
            "If painting or drawing: sketch your pioneer-themed design first (cross, Bible, 1844, Revelation 14:12)",
            "Add the name of your favourite pioneer somewhere on the bandana",
            "Write Revelation 14:12 on one corner",
            "Let dry and wear it as your pioneer costume",
          ],
        },
        {
          id: "hh-wof-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Children wear their bandanas. Sing the pioneer hymn one final time. Ask: 'What would you be willing to give up or risk for your faith?' Say Revelation 14:12 together from memory. Close in prayer: 'Lord, thank You for the Adventist pioneers who kept the faith when it was costly. Help us to have their courage and patience as we serve You today. Amen.'",
          resources: [],
        },
      ],
    },

    {
      id: "hh-world-of-other-people",
      classId: "helping-hand",
      weekNumber: 13,
      title: "The World of Other People",
      objective:
        "Complete the Country Fun award — research a country of your choice, learn its geography, culture, customs, and connect it to the global scope of God's love.",
      memoryVerse: {
        text: "From one man he made all the nations, that they should inhabit the whole earth; and he marked out their appointed times in history and the boundaries of their lands.",
        reference: "Acts 17:26",
      },
      materials: [
        { name: "World map (large, for display)" },
        { name: "Reference books or printed country fact sheets" },
        { name: "Pencils and crayons", quantity: "1 set per child" },
        { name: "Blank map outline template (world map)", quantity: "1 per child" },
        { name: "Flag colouring template for chosen country", quantity: "1 per child" },
        { name: "Simple craft or food materials from chosen country (optional)" },
        { name: "Stamp, postcard, or coin from different countries (for display)" },
        { name: "Bible" },
      ],
      sections: [
        {
          id: "hh-woop-intro",
          type: "introduction",
          title: "A World of Countries",
          duration: "7 mins",
          instructions:
            "Display a large world map. Ask: 'How many countries are in the world? (195 officially recognised countries.) Can anyone point to their home country? Their family's country of origin? A country they dream of visiting?' Let children come up and point. Ask: 'Why do you think God made so many different countries with different languages, cultures, and people?' Read Acts 17:26 — 'From one man He made all the nations.' Discuss: all nations come from one source; God loves every one.",
          resources: ["World map", "Bible"],
        },
        {
          id: "hh-woop-bible",
          type: "bible_story",
          title: "Country Fun Award — Research and Discovery",
          duration: "15 mins",
          instructions:
            "Each child picks a country they want to study. Using reference books or fact sheets, research: (1) Location on the world map — which continent? (2) Map and flag — draw or trace both. (3) Six country facts — choose from: (a) native dress; (b) a Sabbath or secular song; (c) national anthem; (d) a game; (e) main religion(s); (f) a stamp, postcard, or coin; (g) a legend, myth, or story. (4) Make a simple craft or food from the country if materials are available. (5) Read Genesis 11:1–9 — the Tower of Babel: how did languages originate? How does that connect to the diversity of countries today?",
          resources: ["Reference books / printed country fact sheets", "World map", "Bible"],
        },
        {
          id: "hh-woop-activity",
          type: "activity",
          title: "Country Presentation & Game",
          duration: "12 mins",
          instructions:
            "Each child shares their country with the group: 'My country is ___, found in ___ on the ___ continent. Something unique about it is ___.' Point to it on the world map. If a game from a country is available, play it briefly together. Display stamps, postcards, or coins from different countries. Discuss: 'How does learning about other countries help us understand God better? How does it help us fulfil the Great Commission (Matthew 28:19)?'",
          resources: ["World map", "Stamps/postcards/coins for display"],
        },
        {
          id: "hh-woop-craft",
          type: "craft",
          title: "My Country Report Page",
          duration: "13 mins",
          instructions:
            "Children create a completed Country Fun report page with map, flag, and six key facts.",
          craftName: "My Country Fun Report",
          materials: [
            { name: "Blank world map outline", quantity: "1 per child" },
            { name: "Flag colouring template for chosen country", quantity: "1 per child" },
            { name: "Plain paper for facts page", quantity: "1 per child" },
            { name: "Pencils, crayons, and markers" },
          ],
          steps: [
            "On the world map outline, circle and label your chosen country",
            "Colour the flag accurately using the template",
            "On the facts page, write your country name and continent at the top",
            "List 6 country facts with a small illustration for each",
            "Draw a simple map of the country showing its shape and capital city",
            "Write Acts 17:26 at the bottom",
            "Share your report with the group",
          ],
        },
        {
          id: "hh-woop-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Each child points to their country on the map one final time and shares their favourite fact. Ask: 'If you could visit your country to share the love of Jesus, what would you do?' Say Acts 17:26 together. Close in prayer: 'Lord, You made all the nations from one family. Help us to love every nation the way You do, and to carry Your love to the whole world. Amen.'",
          resources: ["World map"],
        },
      ],
    },

    {
      id: "hh-world-of-nature",
      classId: "helping-hand",
      weekNumber: 14,
      title: "The World of Nature",
      objective:
        "Complete two nature awards not previously earned, exploring the wonder of God's creation and deepening responsibility as stewards of the natural world.",
      memoryVerse: {
        text: "Lord, our Lord, how majestic is your name in all the earth! You have set your glory in the heavens.",
        reference: "Psalm 8:1",
      },
      materials: [
        { name: "Nature award requirement sheets for chosen awards (e.g., Environmentalist, Geologist, Honey Bee, Outdoor Explorer, Habitat, Rainbow Promise)" },
        { name: "Age-appropriate nature books for chosen topics" },
        { name: "Magnifying glasses", quantity: "1 per pair" },
        { name: "Nature journals or blank paper", quantity: "1 per child" },
        { name: "Pencils and crayons" },
        { name: "Outdoor access if possible (garden, park, courtyard)" },
        { name: "Bible" },
        { name: "Nature craft materials based on chosen award (rocks, leaves, twigs, etc.)" },
      ],
      sections: [
        {
          id: "hh-won-intro",
          type: "introduction",
          title: "Nature Wonder Walk",
          duration: "10 mins",
          instructions:
            "If outdoor access is available, take a 5-minute 'wonder walk' — children silently observe nature around them (sky, plants, insects, soil, sounds). They note 3 things they noticed. Back inside, share. If outdoors is not possible, use nature images or bring in natural objects: rocks, leaves, flowers, bark, seeds. Read Psalm 8:1 — 'Lord, how majestic is your name in all the earth!' Ask: 'When you look at nature, what part of God do you see?'",
          resources: ["Outdoor area or natural objects", "Bible"],
        },
        {
          id: "hh-won-bible",
          type: "bible_story",
          title: "We Are Stewards of Creation",
          duration: "10 mins",
          instructions:
            "Read Genesis 1:26–31 and Genesis 2:15. God gave humans dominion AND the responsibility to 'work it and take care of it.' Ask: 'What does it mean to have dominion over nature? Is it the same as having the right to destroy it?' Discuss the difference between dominion (responsible care) and domination (selfish use). Connect to the nature awards: each one teaches children to understand and protect a part of God's creation. Introduce the two nature awards the group will work on today. Choose from: Environmentalist, Geologist, Honey Bee, Outdoor Explorer, Habitat, Rainbow Promise, or other available awards.",
          resources: ["Bible"],
        },
        {
          id: "hh-won-activity",
          type: "activity",
          title: "Nature Award Work",
          duration: "15 mins",
          instructions:
            "Begin work on two chosen nature awards. Follow the specific requirements for each selected award. Examples: Environmentalist — discuss environmental stewardship, identify local environmental issues, make a plan to help; Geologist — identify rock types (igneous, sedimentary, metamorphic), collect and display rocks; Honey Bee — learn about the life cycle of a bee, the role of bees in pollination, bee threats and conservation; Outdoor Explorer — use a compass, identify cloud types, read a simple map, explore outdoors; Habitat — identify a local habitat, the plants and animals in it, and threats it faces. Record findings in nature journals.",
          resources: ["Nature award requirement sheets", "Nature books", "Magnifying glasses", "Nature journals", "Pencils"],
        },
        {
          id: "hh-won-craft",
          type: "craft",
          title: "Nature Journal Page",
          duration: "12 mins",
          instructions:
            "Children create a detailed nature journal page documenting their observations and learning from today's nature award work.",
          craftName: "My Nature Journal — God's Creation",
          materials: [
            { name: "Nature journal or blank paper", quantity: "1 per child" },
            { name: "Pencils and crayons" },
            { name: "Natural objects for observational drawing (leaves, rocks, seeds, flowers)" },
          ],
          steps: [
            "At the top, write the name of the nature topic you studied today",
            "Draw one detailed observational illustration of something from nature (rock, insect, plant, cloud)",
            "Label all parts of your illustration accurately",
            "Write 5 facts you learned today about this topic",
            "Write one question you still have about this topic",
            "Write how this part of nature shows you something about God",
            "Write Psalm 8:1 at the bottom with your name and today's date",
          ],
        },
        {
          id: "hh-won-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Children share one thing from their nature journal — a fact, a drawing, or a question. Ask: 'What one thing will you do to care for God's creation this week?' Take answers. Say Psalm 8:1 together. Close in prayer: 'Lord, Your creation declares Your glory. Help us to be faithful stewards of the beautiful world You made, caring for it the way You entrusted us to. Amen.'",
          resources: [],
        },
      ],
    },
  ],
};

export default helpingHand;
