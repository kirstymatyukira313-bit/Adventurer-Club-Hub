import type { AdventurerClassDef } from "../types";

const builder: AdventurerClassDef = {
  id: "builder",
  name: "Builder",
  ageRange: "8–9 years",
  description: "Constructing a life of faith with solid biblical foundations.",
  color: "#93C5FD",
  lessons: [
    // ─────────────────────────────────────────────────
    // BASIC — Meetings 1 & 2
    // ─────────────────────────────────────────────────
    {
      id: "bu-pledge-and-law",
      classId: "builder",
      weekNumber: 1,
      title: "The Adventurer Pledge and Law",
      objective:
        "Memorise the Adventurer Pledge and Law and understand how each part applies to everyday life through art or a skit.",
      memoryVerse: {
        text: "Let the little children come to me, and do not hinder them, for the kingdom of heaven belongs to such as these.",
        reference: "Matthew 19:14",
      },
      materials: [
        { name: "Adventurer Pledge and Law display card" },
        { name: "Paper or poster board", quantity: "1 per child" },
        { name: "Crayons, markers, or paints" },
        { name: "Dress-up props for skit (optional)" },
        { name: "Stickers or stamps for reward" },
      ],
      sections: [
        {
          id: "bu-pl-intro",
          type: "introduction",
          title: "Opening — Recite the Pledge and Law",
          duration: "10 mins",
          instructions:
            "Open the meeting by reciting the Adventurer Pledge together: 'Because Jesus loves me, I will always do my best.' Then recite the Adventurer Law: 'Jesus can help me to: Be obedient, Be pure, Be true, Be kind, Be respectful, Be attentive, Be helpful, Be cheerful, Be thoughtful, Be reverent.' Practise until children can say both from memory without looking at the card.",
          resources: ["Adventurer Pledge and Law display card"],
        },
        {
          id: "bu-pl-bible",
          type: "bible_story",
          title: "What Does It Mean?",
          duration: "10 mins",
          instructions:
            "Discuss each part of the Pledge and Law with real-life examples for 8-year-olds. Ask: 'What does it look like to be obedient at school? To be cheerful when something goes wrong? To be reverent in church?' Read Matthew 19:14 and connect: Jesus wants children close to Him — the Pledge and Law help us live close to Him every day.",
          resources: ["Bible"],
        },
        {
          id: "bu-pl-activity",
          type: "activity",
          title: "Pledge & Law Quiz",
          duration: "8 mins",
          instructions:
            "Play a quiz: leader calls out one word from the Law (e.g., 'Be...') and children shout the next word. Then describe a scenario and children call out which part of the Law it demonstrates: 'You let someone go first in line — what part of the Law is that?' Celebrate every correct answer with applause.",
          resources: [],
        },
        {
          id: "bu-pl-craft",
          type: "craft",
          title: "Pledge and Law Art or Skit",
          duration: "15 mins",
          instructions:
            "Children choose to express the Pledge and Law through either art (draw/paint a scene showing one part of the Law in action) or a skit (act out a 2-minute scene demonstrating the Pledge or Law). Groups may work together on a skit or individuals on art. Each child presents or performs.",
          craftName: "Living the Pledge",
          materials: [
            { name: "Paper or poster board", quantity: "1 per child" },
            { name: "Crayons, markers, or paints" },
            { name: "Dress-up props for skit (optional)" },
          ],
          steps: [
            "Choose: art (draw) OR skit (perform)",
            "If art: decide which part of the Law you will illustrate",
            "Sketch your scene showing someone living the Pledge or Law",
            "Colour and label your artwork with the part of the Law it shows",
            "If skit: plan a 2-minute scene with your group and practise",
            "Present or perform for the group",
          ],
        },
        {
          id: "bu-pl-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Say the Pledge and Law one final time from memory. Ask: 'Which part of the Law do you want to focus on this week?' Each child shares one answer. Close in prayer asking God to help them live the Pledge and Law every day.",
          resources: [],
        },
      ],
    },

    {
      id: "bu-building-blocks",
      classId: "builder",
      weekNumber: 2,
      title: "Building Blocks",
      objective:
        "Explore Bible stories about buildings from Noah's ark to the New Jerusalem and discover that a strong life — like a strong building — is built on Jesus Christ.",
      memoryVerse: {
        text: "For no one can lay any foundation other than the one already laid, which is Jesus Christ.",
        reference: "1 Corinthians 3:11",
      },
      materials: [
        { name: "Bibles or Bible story books" },
        { name: "Building materials: Lego, blocks, craft sticks, or card stock", quantity: "1 set per group" },
        { name: "Large paper for Venn Diagram / comparison chart" },
        { name: "Markers" },
        { name: "Gemstone pictures or coloured stones for New Jerusalem activity" },
        { name: "Foldable house templates (printed, optional)" },
      ],
      sections: [
        {
          id: "bu-bb-intro",
          type: "introduction",
          title: "Building Challenge",
          duration: "8 mins",
          instructions:
            "Divide into small teams. Give each team building materials (blocks, craft sticks, or Lego). Challenge: build the tallest freestanding structure in 3 minutes. Observe which structures stay standing. Ask: 'Why did some fall? What made the strong ones stand?' Connect to life: 'Our choices and values are like a building. What foundation are we building on?'",
          resources: ["Building blocks, craft sticks, or Lego"],
        },
        {
          id: "bu-bb-bible",
          type: "bible_story",
          title: "Bible Buildings — From Noah to New Jerusalem",
          duration: "15 mins",
          instructions:
            "Walk through 3 or more Bible building stories, looking up each in the Bible: (a) Noah's ark (Gen 6–7) — God asked Noah to build; it took 120 years; (b) Tower of Babel (Gen 11:1–9) — God knew tents were better for spreading across the earth; (c) Wilderness tabernacle (Ex 25–27) — a portable place to worship; (d) Solomon's temple (1 Chr 28:1–10) — a permanent home for God; (e) The manger (Luke 2:1–20) — God sent Jesus to a humble stable; (f) Wise and foolish builders (Luke 6:47–49) — building on rock vs sand; (g) New Jerusalem (Rev 21–22) — God's eternal home for us. Draw a simple comparison chart: What was each building for? Who built it? What materials? Read and discuss 1 Corinthians 3:11 and Philippians 4:8.",
          resources: ["Bibles", "Large comparison chart paper", "Markers"],
        },
        {
          id: "bu-bb-activity",
          type: "activity",
          title: "Character Choices Builder",
          duration: "10 mins",
          instructions:
            "Discuss: 'A building and its foundation are like our lives and our choices.' Ask each child to share 2 choices they can make this week that will BUILD UP and not break down their character. Examples: reading the Bible instead of watching something harmful, being kind when they feel like being mean. Write them on 'bricks' on a poster wall. Connect to Philippians 4:8 — think about things that are true, noble, right, pure, lovely, admirable.",
          resources: ["Poster paper drawn as a brick wall", "Markers"],
        },
        {
          id: "bu-bb-craft",
          type: "craft",
          title: "Construct a Bible Building",
          duration: "15 mins",
          instructions:
            "Children construct one or more buildings using available materials. They may choose any Bible building or their own home/church/imagined heavenly home. As they build, leaders circulate and ask: 'Which Bible building are you making? Why did you choose it?'",
          craftName: "My Bible Building",
          materials: [
            { name: "Building materials: Lego, blocks, craft sticks, card stock, or play dough" },
            { name: "Foldable house templates (optional, printed)" },
            { name: "Crayons or markers for labelling" },
          ],
          steps: [
            "Choose a Bible building to construct (or your own design)",
            "Plan what your structure will look like",
            "Build using available materials — work individually or in a team",
            "Label your building with its Bible name",
            "Be ready to explain: Who built it? Why? What does it represent?",
            "Display and share with the group",
          ],
        },
        {
          id: "bu-bb-closing",
          type: "closing",
          title: "Closing — Heavenly Home",
          duration: "7 mins",
          instructions:
            "Read Revelation 21–22 briefly (or summarise): God is building a home for everyone who chooses His gift of eternal life. Ask: 'What building materials does God use? (gold, jewels, pearls) Why should we wish to be in heaven?' Show gemstone pictures or coloured stones. Say the memory verse together. Close with a prayer: 'Lord, help us build our lives on You — the only true foundation. Amen.'",
          resources: ["Bible", "Gemstone pictures or coloured stones"],
        },
      ],
    },

    // ─────────────────────────────────────────────────
    // MY GOD — Meetings 3, 4, 5
    // ─────────────────────────────────────────────────
    {
      id: "bu-gods-plan-to-save-me",
      classId: "builder",
      weekNumber: 3,
      title: "God's Plan to Save Me",
      objective:
        "Create a chronological story chart of Old Testament heroes — Noah, Abraham, Moses, Ruth, David, Daniel, and Esther — and show through a diorama, poem, or song how one of these heroes models living for God.",
      memoryVerse: {
        text: "I can do all this through him who gives me strength.",
        reference: "Philippians 4:13",
      },
      materials: [
        { name: "Bibles or Bible story books" },
        { name: "Large paper or card for story timeline", quantity: "1 per child" },
        { name: "Crayons, coloured pencils, or markers" },
        { name: "Construction paper for diorama" },
        { name: "Scissors (child-safe)", quantity: "1 per child" },
        { name: "Glue sticks", quantity: "1 per child" },
        { name: "Small objects/figurines for diorama (optional)" },
        { name: "Lined paper for poem writing" },
      ],
      sections: [
        {
          id: "bu-gpsm-intro",
          type: "introduction",
          title: "Who Are God's Heroes?",
          duration: "7 mins",
          instructions:
            "Ask: 'Can you name any Old Testament Bible heroes?' Take answers. Introduce the seven heroes from this lesson: Noah, Abraham, Moses, Ruth, David, Daniel, Esther. Ask if anyone knows what order they lived in. Tell them: 'Today we're going to put them in the right order on a story chart and discover what each one teaches us about living for God.'",
          resources: [],
        },
        {
          id: "bu-gpsm-bible",
          type: "bible_story",
          title: "Old Testament Hero Stories",
          duration: "15 mins",
          instructions:
            "Briefly summarise each hero in chronological order, noting the approximate period of history: (1) Noah — trusted God when no one else did; built the ark; (2) Abraham — left everything to follow God's call; (3) Moses — led God's people out of Egypt despite his own doubts; (4) Ruth — showed faithful love and loyalty; (5) David — a man after God's own heart despite his failures; (6) Daniel — prayed even when it was illegal; (7) Esther — risked her life saying 'If I perish, I perish.' Ask after each: 'What does this hero teach us about trusting God?'",
          resources: ["Bibles", "Bible story books"],
        },
        {
          id: "bu-gpsm-activity",
          type: "activity",
          title: "Story Chart Timeline",
          duration: "10 mins",
          instructions:
            "Each child creates a chronological story chart. Draw 7 boxes in order on the large paper — one for each hero. In each box, draw a simple picture to represent that person (encourage creativity: Noah could be a boat, Moses a burning bush, Daniel a lion). Label each box. Challenge children to be creative in how they depict each person. Share with the group when done.",
          resources: ["Large paper", "Crayons or markers"],
        },
        {
          id: "bu-gpsm-craft",
          type: "craft",
          title: "Diorama, Poem, or Song",
          duration: "15 mins",
          instructions:
            "Each child chooses ONE of the seven heroes and creates a diorama, poem, or song to show someone how to live for God based on that hero's story. Each child selects a different person if possible for group variety.",
          craftName: "Living for God — Bible Hero Project",
          materials: [
            { name: "Construction paper", quantity: "several sheets per child" },
            { name: "Scissors (child-safe)", quantity: "1 per child" },
            { name: "Glue sticks", quantity: "1 per child" },
            { name: "Crayons or markers" },
            { name: "Lined paper for poem", quantity: "1 per child" },
            { name: "Small objects or figurines for diorama (optional)" },
          ],
          steps: [
            "Choose your Bible hero: Noah / Abraham / Moses / Ruth / David / Daniel / Esther",
            "Choose your format: Diorama, Poem, or Song",
            "Diorama: fold paper into a three-sided frame; add figures and scenery inside",
            "Poem: write at least 4 lines about what your hero did and how it shows us to live for God",
            "Song: write 1–2 verses (use a simple tune you know) about your hero's faith",
            "Share your creation with the group and explain the lesson it teaches",
          ],
        },
        {
          id: "bu-gpsm-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Each child shares their diorama, poem, or song briefly. Applaud each effort. Say the memory verse together: 'I can do all this through him who gives me strength. Philippians 4:13.' Close in prayer: 'Lord, like Noah, Abraham, Moses, Ruth, David, Daniel, and Esther — help us trust You with all our hearts. Amen.'",
          resources: [],
        },
      ],
    },

    {
      id: "bu-gods-message-to-me",
      classId: "builder",
      weekNumber: 4,
      title: "God's Message to Me",
      objective:
        "Know and tell the great Old Testament Bible stories, recite the books of the Old Testament in order, and memorise key verses about living for Jesus.",
      memoryVerse: {
        text: "To him who is able to keep you from stumbling and to present you before his glorious presence without fault and with great joy.",
        reference: "Jude 24",
      },
      materials: [
        { name: "Bibles" },
        { name: "Old Testament books list (printed or on display)" },
        { name: "Bible story book or illustrated Bible" },
        { name: "Balloons (large)", quantity: "1 per child" },
        { name: "Markers (permanent)" },
        { name: "Bible verse cards (printed): Philippians 4:13, Philippians 2:13, 1 John 2:1-2, Jude 24" },
      ],
      sections: [
        {
          id: "bu-gmtm-intro",
          type: "introduction",
          title: "Books of the Old Testament",
          duration: "10 mins",
          instructions:
            "Begin by reciting the books of the Old Testament in order. Use a song, chant, or rhythm to help. Start with Genesis, Exodus, Leviticus... go all the way to Malachi. Practise 2–3 times. Then quiz children: 'What comes after Joshua? What comes after Psalms?' Celebrate each correct answer.",
          resources: ["Old Testament books list"],
        },
        {
          id: "bu-gmtm-bible",
          type: "bible_story",
          title: "Old Testament Hero Stories — Tell or Act Out",
          duration: "15 mins",
          instructions:
            "In groups or individually, children tell or act out five Bible stories: (1) Noah — the flood and rainbow; (2) Abraham — leaving home to follow God; (3) Moses — the burning bush and the Exodus; (4) David — defeating Goliath with faith; (5) Daniel — praying even when threatened. Assign one story per group. After each performance, discuss: 'What can we learn about living for Jesus from this story?' Then read or listen to one additional Bible story together.",
          resources: ["Bibles", "Bible story book"],
        },
        {
          id: "bu-gmtm-activity",
          type: "activity",
          title: "Samuel Balloon Game",
          duration: "10 mins",
          instructions:
            "Give each child a balloon to blow up. On the balloon, write something God tells us to do (help them brainstorm first: love one another, pray without ceasing, be kind, forgive, etc.). Then connect to the story of Samuel listening to God (1 Samuel 3). Ask: 'What does God want to say to us today?' Each child shares what is on their balloon and what it means for their life.",
          resources: ["Balloons", "Permanent markers"],
        },
        {
          id: "bu-gmtm-craft",
          type: "craft",
          title: "Bible Verse Art",
          duration: "13 mins",
          instructions:
            "Children choose and memorise one of the key verses about living for Jesus, then illustrate it creatively.",
          craftName: "Living for Jesus — Bible Verse Illustration",
          materials: [
            { name: "Plain white paper or card", quantity: "1 per child" },
            { name: "Crayons or markers" },
            { name: "Bible verse cards: Philippians 4:13, Philippians 2:13, 1 John 2:1-2, Jude 24" },
          ],
          steps: [
            "Choose one Bible verse from the list",
            "Write the verse neatly at the top of your paper",
            "Draw a picture that illustrates what the verse means",
            "Colour your illustration",
            "On the back, write 1–2 sentences explaining what the verse means to you",
            "Memorise and say your verse aloud to a leader",
          ],
        },
        {
          id: "bu-gmtm-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Each child recites their chosen verse from memory. Celebrate each recitation with applause. Say Jude 24 together as a group. Close in prayer: 'Lord, let Your Word be alive in our hearts. Help us tell Your great stories to everyone we meet. Amen.'",
          resources: [],
        },
      ],
    },

    {
      id: "bu-gods-power-in-my-life",
      classId: "builder",
      weekNumber: 5,
      title: "God's Power in My Life",
      objective:
        "Develop a daily quiet time with Jesus, interview three people about their Bible heroes, and learn to pray using the Five Finger Prayer guide.",
      memoryVerse: {
        text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.",
        reference: "Isaiah 40:31",
      },
      materials: [
        { name: "Quiet Time record sheet", quantity: "1 per child" },
        { name: "Bible" },
        { name: "Bible Hero interview sheet (printed)", quantity: "1 per child" },
        { name: "Moldable medium: play dough, Modeling Magic, or air-dry clay" },
        { name: "Paper plates for prayer craft", quantity: "1 per child" },
        { name: "Markers" },
        { name: "Plaster of Paris (optional, for permanent prayer hand)" },
      ],
      sections: [
        {
          id: "bu-gpml-intro",
          type: "introduction",
          title: "Quiet Time Introduction",
          duration: "7 mins",
          instructions:
            "Ask: 'Does anyone have a special time they spend with Jesus each day?' Discuss what quiet time looks like: reading the Bible, praying, journalling, singing, listening. Read Mark 1:35 — even Jesus got up early to spend time alone with God. Hand out the Quiet Time record sheet. Explain: for the next four weeks, children will keep a record of their daily quiet time — Sun through Sat, week 1 through week 4.",
          resources: ["Quiet Time record sheet"],
        },
        {
          id: "bu-gpml-bible",
          type: "bible_story",
          title: "Bible Hero Interviews & The Lord's Prayer",
          duration: "15 mins",
          instructions:
            "Part 1 — Bible Heroes: Each child needs to ask three people (adults or other children) who their favourite Bible hero is (other than Jesus) and why. Start in the group — children interview each other and one or two adult leaders. Record names and heroes on the interview sheet. Discuss: 'What made these heroes great? Trust in God, obedience, willingness to follow even when afraid.' Part 2 — The Lord's Prayer: Read Matthew 6:5–15 together. Discuss what Jesus taught about prayer: where to pray, how to address God, what to ask for, and why forgiveness matters.",
          resources: ["Bible", "Bible Hero interview sheet"],
        },
        {
          id: "bu-gpml-activity",
          type: "activity",
          title: "Moulding Art — My Bible Hero",
          duration: "10 mins",
          instructions:
            "Give each child a small lump of play dough or modelling clay. Ask them to make a figure or item connected to their favourite Bible hero (e.g., Moses — staff; David — harp; Samson — pillars; Esther — food; Peter — fish). As they work, discuss: 'What makes a Bible hero? Trust, dependency on God, willingness to obey.' After shaping, each child does a show-and-tell. Allow to air dry on a rack. Encourage children to take it home and use it to tell the Bible story to their family.",
          resources: ["Play dough or air-dry clay"],
        },
        {
          id: "bu-gpml-craft",
          type: "craft",
          title: "Five Finger Prayer Guide",
          duration: "13 mins",
          instructions:
            "Children create a Five Finger Prayer guide on a paper plate to take home as a reminder of how to pray.",
          craftName: "Five Finger Prayer",
          materials: [
            { name: "Paper plates", quantity: "1 per child" },
            { name: "Markers" },
            { name: "Crayons (optional)" },
          ],
          steps: [
            "Trace your open hand onto the paper plate",
            "Label the THUMB: 'Thanks' — begin with prayer and thanksgiving (Matthew 6:9)",
            "Label the INDEX finger: 'Ministry' — pray for God's will and opportunities to serve (Matthew 6:10)",
            "Label the MIDDLE finger: 'Needs' — pray for daily needs, spiritual and physical (Matthew 6:11)",
            "Label the RING finger: 'Sorry / Others' — ask for forgiveness and pray for those who mistreat you (Matthew 6:12)",
            "Label the LITTLE finger: 'Power' — pray for spiritual growth and God's Spirit to lead you (Matthew 6:13)",
            "Decorate the border and write Isaiah 40:31 at the bottom",
            "Use it every day during your quiet time",
          ],
        },
        {
          id: "bu-gpml-closing",
          type: "closing",
          title: "Closing — Prayer Challenge",
          duration: "8 mins",
          instructions:
            "Read 1 Thessalonians 5:17 — 'Pray continually.' Challenge: Pray to God three times a day for one week. Use the Five Finger Prayer guide each time. Also: teach someone at home about the Five Finger Prayer and pray with them. Say Isaiah 40:31 together. Close with a group prayer led by a volunteer child using the Five Finger format.",
          resources: ["Five Finger Prayer cards"],
        },
      ],
    },

    // ─────────────────────────────────────────────────
    // MY SELF — Meetings 6, 7, 8
    // ─────────────────────────────────────────────────
    {
      id: "bu-i-am-special",
      classId: "builder",
      weekNumber: 6,
      title: "I Am Special",
      objective:
        "Identify personal gifts and abilities and create a scrapbook, poster, or collage showing specific ways to serve God and others.",
      memoryVerse: {
        text: "For we are God's handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.",
        reference: "Ephesians 2:10",
      },
      materials: [
        { name: "Old magazines or printed photo clippings (pre-sorted for appropriateness)" },
        { name: "Poster board or large paper", quantity: "1 per child" },
        { name: "Glue sticks", quantity: "1 per child" },
        { name: "Scissors (child-safe)", quantity: "1 per child" },
        { name: "Markers or crayons" },
        { name: "Stickers and decorative items" },
      ],
      sections: [
        {
          id: "bu-ias-intro",
          type: "introduction",
          title: "What Makes You Special?",
          duration: "7 mins",
          instructions:
            "Ask each child to share one thing they are good at and one thing they enjoy doing. Write these on a whiteboard or large paper. After everyone has shared, ask: 'Did you know that God gave you those talents on purpose? He PLANNED for you to use them to serve Him and others!' Read Ephesians 2:10 together.",
          resources: [],
        },
        {
          id: "bu-ias-bible",
          type: "bible_story",
          title: "What Does Serving God Look Like?",
          duration: "10 mins",
          instructions:
            "Brainstorm together: what are KINDS of things that would make a great way to serve God? Write all ideas on one side of the poster board first. Prompt with categories: serving at church, helping at home, helping in the community, using a talent for God (singing, drawing, helping). Connect to Bible examples: Dorcas sewed clothes for the poor (Acts 9:36–39), young Samuel served in the temple (1 Sam 2:11). God used ordinary people doing ordinary things in extraordinary ways.",
          resources: ["Bible", "Whiteboard or poster paper", "Markers"],
        },
        {
          id: "bu-ias-activity",
          type: "activity",
          title: "Magazine Scramble",
          duration: "10 mins",
          instructions:
            "Place pre-sorted magazine clippings or printed photos on the table. Children look through them and identify images that represent ways to serve God (a doctor helping someone, someone gardening, children singing, collecting food). They sort images into categories: serve at church / serve at home / serve in the community / use a talent. Discuss any images that are tricky to categorise.",
          resources: ["Magazine clippings or printed photos"],
        },
        {
          id: "bu-ias-craft",
          type: "craft",
          title: "Ways We Serve God — Collage",
          duration: "15 mins",
          instructions:
            "Children create a scrapbook page, poster, or collage showing things they can do to serve God and others.",
          craftName: "Ways I Serve God",
          materials: [
            { name: "Poster board or large paper", quantity: "1 per child" },
            { name: "Magazine clippings or printed photos" },
            { name: "Glue sticks", quantity: "1 per child" },
            { name: "Scissors (child-safe)", quantity: "1 per child" },
            { name: "Markers or crayons" },
            { name: "Stickers and decorative items" },
          ],
          steps: [
            "Title your poster: 'Ways I Serve God'",
            "Glue selected images onto your poster",
            "Label each image with the specific serving task it represents",
            "Draw any additional ideas that were not in the magazines",
            "In one corner, write Ephesians 2:10",
            "Decorate the border with stickers or drawings",
            "Share your poster with the group and name your top serving idea",
          ],
        },
        {
          id: "bu-ias-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Children display their posters. Ask each child: 'Which way of serving God on your poster will you try first this month?' Say the memory verse together. Close in prayer: 'Lord, thank you that You made us on purpose for a purpose. Help us use our gifts to serve You and others. Amen.'",
          resources: [],
        },
      ],
    },

    {
      id: "bu-i-can-make-wise-choices",
      classId: "builder",
      weekNumber: 7,
      title: "I Can Make Wise Choices",
      objective:
        "Learn to evaluate media through a biblical filter and understand wise stewardship of time and money as gifts from God.",
      memoryVerse: {
        text: "Whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable — if anything is excellent or praiseworthy — think about such things.",
        reference: "Philippians 4:8",
      },
      materials: [
        { name: "Media log worksheets (printed)", quantity: "1 per child" },
        { name: "Bible" },
        { name: "A story to read aloud (beginning only)" },
        { name: "Large soup cans (1 per child) and 2 smaller cans per child (cleaned, labels removed)" },
        { name: "Paper strips to wrap around cans" },
        { name: "Glue, paint, or markers for decorating cans" },
        { name: "Tithe envelope (enlarged to A4 if possible)" },
        { name: "Poster board for stewardship poster", quantity: "1 per child" },
        { name: "Magazines for stewardship poster images" },
      ],
      sections: [
        {
          id: "bu-icmwc-intro",
          type: "introduction",
          title: "What Is Media?",
          duration: "7 mins",
          instructions:
            "Ask: 'What is media? Can you give me some examples?' (TV, internet, YouTube, books, radio, social media, music, games). Discuss: media is neutral — it can be used for good or bad. The question is: are WE in control of it, or is it in control of us? Read Philippians 4:8 and introduce it as a 'media filter': before watching, reading, or listening, ask — Is it true? Noble? Right? Pure? Lovely? Admirable? Excellent? Praiseworthy?",
          resources: ["Bible"],
        },
        {
          id: "bu-icmwc-bible",
          type: "bible_story",
          title: "Wise Stewardship — God Owns It All",
          duration: "12 mins",
          instructions:
            "Part 1 — Media Critic: Together with an adult, watch part of a short video, read a short story, or listen to a recording. Then evaluate it using Philippians 4:8 as a filter. Discuss: Is this true? Is this pure? Would Jesus watch this? Part 2 — Wise Steward: Find a Bible verse telling who owns everything on earth (Psalm 24:1 — 'The earth is the Lord's'). Read and discuss Malachi 3:8–10 — God asks us to return tithe. Ask: 'What is a wise steward?' (Responsible and faithful to God and others — 1 Corinthians 4:2.) Read and discuss the widow's offering (Mark 12:41–44).",
          resources: ["Bible", "Short video or story for media critique"],
        },
        {
          id: "bu-icmwc-activity",
          type: "activity",
          title: "Media Log & Tithe Envelope",
          duration: "10 mins",
          instructions:
            "Media log activity: Explain that for TWO WEEKS children will keep a log of time spent with different types of media, noting whether it is Christ-centred or secular. Start the log today. Tithe practice: Show an enlarged tithe envelope. Walk through how to fill it out — what is tithe? (10% of all money received.) Practice filling in a tithe envelope together. Introduce the challenge of reading the beginning of a short story (leader reads it), then children make up and share their own endings — practising imagination and Christ-centred thinking.",
          resources: ["Media log worksheets", "Enlarged tithe envelope"],
        },
        {
          id: "bu-icmwc-craft",
          type: "craft",
          title: "Cans for God — Stewardship Money Organiser",
          duration: "15 mins",
          instructions:
            "Children create a three-can money organiser: one for tithe, one for offerings, and one for personal spending — helping them see that all money ultimately belongs to God.",
          craftName: "Cans for God",
          materials: [
            { name: "One large can per child (labels removed, edges smooth)" },
            { name: "Two smaller cans per child (labels removed, edges smooth)" },
            { name: "Paper strips to wrap around cans" },
            { name: "Glue" },
            { name: "Paint, crayons, or markers" },
          ],
          steps: [
            "Write 'God Gave Me' on the paper strip for the large can",
            "Write 'Tithe' on a strip for the first small can",
            "Write 'Offerings' on a strip for the second small can",
            "Decorate each strip with drawings that match the label",
            "Glue the strips around each can",
            "Optional: paint the cans in your favourite colours",
            "Take them home and use them to organise your money faithfully",
          ],
        },
        {
          id: "bu-icmwc-closing",
          type: "closing",
          title: "Closing",
          duration: "6 mins",
          instructions:
            "Ask: 'Using Philippians 4:8 as your filter — what is ONE change you will make to what you watch, read, or listen to this week?' Each child shares one answer. Say the memory verse together as a filter pledge. Close in prayer: 'Lord, help us think on things that honour You. Help us be faithful stewards of everything You have given us. Amen.'",
          resources: [],
        },
      ],
    },

    {
      id: "bu-i-can-care-for-my-body",
      classId: "builder",
      weekNumber: 8,
      title: "I Can Care for My Body",
      objective:
        "Understand temperance and the dangers of drugs, alcohol, and tobacco; plan a skit encouraging peers to say no; and create an anti-substance poster or T-shirt design.",
      memoryVerse: {
        text: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honour God with your bodies.",
        reference: "1 Corinthians 6:19-20",
      },
      materials: [
        { name: "Bible" },
        { name: "Video or printed resource on dangers of tobacco/alcohol/drugs (from public health)" },
        { name: "Skit planning cards", quantity: "1 per group" },
        { name: "Plain white T-shirts OR poster board", quantity: "1 per child" },
        { name: "Fabric paint (if using T-shirts) or markers (for poster)" },
        { name: "Magazine images of healthy athletes or role models (optional)" },
      ],
      sections: [
        {
          id: "bu-iccfmb-intro",
          type: "introduction",
          title: "What Does Temperance Mean?",
          duration: "7 mins",
          instructions:
            "Ask: 'Has anyone heard the word temperance? What do you think it means?' Explain: temperance means self-control in every area of life. Read 1 Corinthians 6:19–20 and 1 Corinthians 3:17. Ask: 'If your body is a temple of the Holy Spirit, how should you treat it?' Discuss drug abuse: misuse of any drug or medication to get a feeling that is harmful. Note: medicine used correctly is fine — misuse is the problem.",
          resources: ["Bible"],
        },
        {
          id: "bu-iccfmb-bible",
          type: "bible_story",
          title: "The Harm in Harmful Substances",
          duration: "12 mins",
          instructions:
            "Discuss the harm caused by tobacco, alcohol, and other drugs. Options: (a) watch and discuss a short age-appropriate video on the dangers; (b) invite a doctor or nurse to speak (or describe what one would say). Discuss: 'Why do some people choose these things?' (peer pressure, curiosity, to feel good, stress). 'How can we choose NOT to?' (strong convictions, good friends, saying no early, choosing positive activities). Identify two well-known people (athletes, musicians, leaders) who live healthfully without these substances and are excellent in their field.",
          resources: ["Video or printed health resource"],
        },
        {
          id: "bu-iccfmb-activity",
          type: "activity",
          title: "Say NO Skit",
          duration: "12 mins",
          instructions:
            "Divide into small groups. Each group plans and performs a 2-minute skit in which a character is pressured to smoke, drink, or try a drug, and courageously says NO. The skit must show both the pressure and a clear, confident way to respond. Groups perform for each other. Debrief: 'Which response was most powerful? What made it work?' The skit may later be performed at school or a church activity.",
          resources: ["Skit planning cards"],
        },
        {
          id: "bu-iccfmb-craft",
          type: "craft",
          title: "Anti-Substance T-Shirt or Poster",
          duration: "12 mins",
          instructions:
            "Children design and create an anti-smoking, anti-drug, or anti-alcohol T-shirt or poster showing the dangers and their commitment to a healthy life.",
          craftName: "My Healthy Choice Design",
          materials: [
            { name: "Plain white T-shirt OR poster board", quantity: "1 per child" },
            { name: "Fabric paint (for T-shirt) or markers (for poster)" },
          ],
          steps: [
            "Decide your message: anti-smoking, anti-drug, or anti-alcohol",
            "Sketch your design on paper first",
            "Include a slogan (e.g., 'My body is God's temple', 'I choose health!', 'Say NO and go!')",
            "Include an image that represents your choice (e.g., a cross-out symbol, a strong athlete)",
            "Transfer your design to the T-shirt or poster",
            "Write 1 Corinthians 6:19 somewhere on your design",
            "Share with the group — explain your message",
          ],
        },
        {
          id: "bu-iccfmb-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Hold up T-shirts or posters. Say the memory verse together twice — once quietly, once boldly. Ask each child: 'What is ONE healthy choice you will make this week to honour God with your body?' Close in prayer: 'Lord, thank You that our bodies are Your temple. Give us strength to make choices that honour You every day. Amen.'",
          resources: [],
        },
      ],
    },

    // ─────────────────────────────────────────────────
    // MY FAMILY — Meetings 9, 10, 11
    // ─────────────────────────────────────────────────
    {
      id: "bu-i-have-a-family",
      classId: "builder",
      weekNumber: 9,
      title: "I Have a Family",
      objective:
        "Share one way your family has changed over time and how that change feels, and find a Bible story about a family similar to your own.",
      memoryVerse: {
        text: "God sets the lonely in families.",
        reference: "Psalm 68:6",
      },
      materials: [
        { name: "Family photos (ask parents to send 2: before and after a family change)" },
        { name: "Bibles and Bible story books" },
        { name: "Family Bible Stories reference list (Hannah/Samuel, Mary/Joseph, Abraham/Sarah, Jacob/Esau, etc.)" },
        { name: "Paper for family timeline or portrait", quantity: "1 per child" },
        { name: "Crayons or markers" },
        { name: "Glue sticks (if using photos)" },
      ],
      sections: [
        {
          id: "bu-ihaf-intro",
          type: "introduction",
          title: "Photo Safari — Family Changes",
          duration: "10 mins",
          instructions:
            "Ask children to bring or share two family photos: one from before a change and one after (e.g., a new sibling, a grandparent who passed, a move, a parent's graduation). Each child shares: 'This is how my family changed — and this is how it made me feel.' Be warm and sensitive — allow all feelings (happy, sad, confused, excited). Celebrate the diversity of families. Say: 'All families change. God sees every change and He is with us through all of it.'",
          resources: ["Family photos"],
        },
        {
          id: "bu-ihaf-bible",
          type: "bible_story",
          title: "Bible Families Like Yours",
          duration: "15 mins",
          instructions:
            "Introduce the variety of family types in the Bible — most were far from perfect! Share options for children to find a family like their own: Hannah and Samuel (loving mother, step-siblings, answered prayer); Mary, Joseph, and Jesus (trusting family, raising an exceptional child); Samson and parents (one child, boundaries challenged); Adam, Eve, Cain and Abel (loss, sibling conflict); Zechariah and Elizabeth (older parents, one miraculous child); Abraham and Sarah, Isaac (older parents, step-siblings); Jacob and Esau (twins, parental favouritism). Each child looks through a Bible story book to find a family story that matches something about their family.",
          resources: ["Bibles", "Bible story books", "Family Bible Stories reference list"],
        },
        {
          id: "bu-ihaf-activity",
          type: "activity",
          title: "Find Your Bible Family",
          duration: "8 mins",
          instructions:
            "Each child identifies their chosen Bible family and answers: 'Why is this family like mine? What happened in this family? What can I learn from them about how God helps families?' Children share their answer with a partner. Focus on aspects that can be found in scripture — help children connect their real-life experience to a Bible story of God's faithfulness.",
          resources: ["Bibles"],
        },
        {
          id: "bu-ihaf-craft",
          type: "craft",
          title: "My Family Portrait",
          duration: "10 mins",
          instructions:
            "Children draw their family and label each member, capturing who their family is today.",
          craftName: "My Family — Then and Now",
          materials: [
            { name: "Paper", quantity: "1 sheet per child" },
            { name: "Crayons or markers" },
            { name: "Glue sticks", quantity: "1 per child (if using photos)" },
          ],
          steps: [
            "Divide your paper in half: 'Then' on the left, 'Now' on the right",
            "Draw your family as it was before the change on the left",
            "Draw your family as it is now on the right",
            "Label each family member by name",
            "Write one thing you love about your family at the bottom",
            "Write Psalm 68:6 on the back",
          ],
        },
        {
          id: "bu-ihaf-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Children show their family portraits. Say the memory verse together. Ask: 'What is one thing you want to thank God for about your family this week?' Close in prayer thanking God for every kind of family and asking for His love to fill each home.",
          resources: [],
        },
      ],
    },

    {
      id: "bu-families-care-for-each-other",
      classId: "builder",
      weekNumber: 10,
      title: "Families Care for Each Other",
      objective:
        "Play a family appreciation game that shows gratitude to each family member, and begin a three-week log of daily family helping.",
      memoryVerse: {
        text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.",
        reference: "Galatians 6:9",
      },
      materials: [
        { name: "Large paper and markers for Gratitude writing activity" },
        { name: "Camera or phone for photo (optional)" },
        { name: "Flag or item to pass in Gratitude Relay" },
        { name: "Jar or can for relay" },
        { name: "Paper strips and pens for relay" },
        { name: "Bible" },
        { name: "Family Helper log sheets (3-week)", quantity: "1 per child" },
        { name: "Card-making supplies: construction paper, scissors, crayons, stickers" },
      ],
      sections: [
        {
          id: "bu-fcofe-intro",
          type: "introduction",
          title: "Gratitude Game",
          duration: "8 mins",
          instructions:
            "Teach and play the Gratitude Relay: place paper strips and a jar about 9 metres away. Teams line up. On GO: run to the jar, write something you appreciate about your family on a strip, put it in the jar, run back, and tag the next person. After all teams finish, pull out strips and read them aloud. Celebrate how many different things your families do for you. Ask: 'How do you think your family feels when you notice and appreciate what they do?'",
          resources: ["Paper strips", "Pens", "Jar or can", "Cones"],
        },
        {
          id: "bu-fcofe-bible",
          type: "bible_story",
          title: "Bible Study — The Helper's Heart",
          duration: "12 mins",
          instructions:
            "Read and discuss four Bible verses together: (a) Philippians 2:14 — 'Do everything without complaining or arguing.' Ask: 'Why is helping without complaining so important?' (b) John 15:12 — 'Love one another, just as I have loved you.' Ask: 'How did Jesus show this?' (c) Psalm 118:7 — 'The Lord is with me; he helps me.' Discuss: God Himself is a helper! (d) Galatians 6:9 — 'Let us not become weary in doing good.' Discuss: what makes helping feel tiring? What helps us keep going?",
          resources: ["Bible"],
        },
        {
          id: "bu-fcofe-activity",
          type: "activity",
          title: "Gratitude Photo & Family Helper Commitment",
          duration: "10 mins",
          instructions:
            "Part 1 — Gratitude Photo: Each child writes on a large paper the ways they are thankful for their family (parents, grandparents, guardians). Write neatly and carefully. Take a photo of the child holding their paper. Send or print the photo as a gift for the family. Part 2 — Family Helper Log: Introduce the 3-week Family Helper log. Discuss: 'What is a family helper? Anyone who helps the family work — taking out rubbish, helping siblings, doing chores.' Brainstorm specific helping tasks. Children write their name and start date on their log.",
          resources: ["Large paper", "Markers", "Camera (optional)", "Family Helper log sheets"],
        },
        {
          id: "bu-fcofe-craft",
          type: "craft",
          title: "Thank You Card for Parents",
          duration: "12 mins",
          instructions:
            "Children make a heartfelt thank you card for their parent or guardian.",
          craftName: "Thank You — From the Heart",
          materials: [
            { name: "Construction paper", quantity: "1 sheet per child" },
            { name: "Crayons or markers" },
            { name: "Stickers or stamps" },
            { name: "Scissors (optional, for shaping)" },
          ],
          steps: [
            "Fold a sheet of construction paper in half to make a card",
            "On the front: draw a picture or write a big 'THANK YOU!'",
            "On the inside: write specific things your parent/guardian does for you",
            "Write 'I love you because...' and list 3 reasons",
            "Sign your name",
            "Decorate with stickers and drawings",
            "Give the card to your parent or guardian as soon as possible",
          ],
        },
        {
          id: "bu-fcofe-closing",
          type: "closing",
          title: "Closing — Helper's Challenge",
          duration: "5 mins",
          instructions:
            "Remind children of the 3-week Family Helper log. Each week they will discuss progress with a leader: what did they help with? Which was their favourite? How could they have helped differently? Say the memory verse together. Close in prayer: 'Lord, help us to help our families without complaining, with love, and without giving up. Amen.'",
          resources: ["Family Helper log sheets"],
        },
      ],
    },

    {
      id: "bu-family-helps-me-care-for-myself",
      classId: "builder",
      weekNumber: 11,
      title: "My Family Helps Me Care for Myself",
      objective:
        "Learn essential first aid skills — treating cuts, nosebleeds, and bandaging — understand how to use a first aid kit, and connect Jesus as the ultimate healer.",
      memoryVerse: {
        text: "Dear friend, I pray that you may enjoy good health and that all may go well with you.",
        reference: "3 John 1:2",
      },
      materials: [
        { name: "First aid kit items: bandages (various types), gauze pads, tweezers, scissors, thermometer, antiseptic wipe, calamine lotion, ace bandage" },
        { name: "Clean cloths and one-use bandages for practice" },
        { name: "Blank first aid symbol template", quantity: "1 per child" },
        { name: "Red and white markers/paint for first aid symbol" },
        { name: "Small box or pouch for first aid kit craft", quantity: "1 per child" },
        { name: "Bible" },
        { name: "Crutches or wheelchair (optional, for hospital roleplay)" },
      ],
      sections: [
        {
          id: "bu-fhmcfm-intro",
          type: "introduction",
          title: "What Is First Aid?",
          duration: "7 mins",
          instructions:
            "Ask: 'Has anyone ever had to give or receive first aid? What happened?' Discuss what first aid is: the immediate care given to someone before professional medical help arrives. Ask: 'Why is knowing first aid important for families?' Note that knowing what to do in an emergency can save a life. Describe the First Aid symbol (white cross on red background) — ask if anyone can draw it. Tell them: 'Today we're going to become First Aid Helpers!'",
          resources: [],
        },
        {
          id: "bu-fhmcfm-bible",
          type: "bible_story",
          title: "Jesus — The Ultimate Healer",
          duration: "10 mins",
          instructions:
            "Discuss: Jesus was the greatest healer in history. Find and read Matthew 26:51 — when the soldier's ear was cut off in the Garden of Gethsemane, Jesus immediately healed it. Ask: 'What does this tell us about Jesus?' Discuss other healings: the bleeding woman (Matthew 9:20–22), the lepers (Luke 17:11–19), blind Bartimaeus. Connect: 'When we learn first aid, we are following Jesus' example of caring for the suffering people around us.'",
          resources: ["Bible"],
        },
        {
          id: "bu-fhmcfm-activity",
          type: "activity",
          title: "Doctors' Office Roleplay",
          duration: "15 mins",
          instructions:
            "Set up three stations with three coloured role cards (Doctor, Nurse, Patient). Children rotate through all three roles. Practise: (1) Treating a cut or abrasion — clean with running water, apply clean bandage, explain dangers of dirty dressings; (2) Treating a nosebleed — sit down, lean forward, apply pressure on bleeding side, cold compress; (3) Applying a bandage — adhesive strip, triangular bandage, or spiral wrap. Discuss: how to sterilise tweezers, thermometer, or needle. Describe and draw the First Aid symbol. Name when Jesus gave first aid (Matthew 26:51).",
          resources: ["Bandages", "Clean cloths", "First aid kit items", "Role cards"],
        },
        {
          id: "bu-fhmcfm-craft",
          type: "craft",
          title: "My First Aid Kit",
          duration: "12 mins",
          instructions:
            "Children assemble and decorate a basic first aid kit to take home and draw the First Aid symbol.",
          craftName: "My First Aid Kit",
          materials: [
            { name: "Small box or pouch", quantity: "1 per child" },
            { name: "Adhesive bandages (a few per child)" },
            { name: "Gauze pad" },
            { name: "Antiseptic wipe" },
            { name: "Blank first aid symbol template", quantity: "1 per child" },
            { name: "Red and white markers or paint" },
            { name: "Markers for labelling the kit" },
          ],
          steps: [
            "Decorate the outside of your box or pouch with a large First Aid cross (red on white)",
            "Write 'First Aid Kit' and your name on the box",
            "Place each item into the kit as you learn what it is for",
            "On a separate card, list each item and its use",
            "On the blank template: draw and colour the official First Aid symbol",
            "Write 3 John 1:2 on the inside lid of your kit",
            "Take it home and show your family how to use each item",
          ],
        },
        {
          id: "bu-fhmcfm-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Ask each child: 'What is the most important thing you learned today about first aid?' Say the memory verse together. Challenge: this week, teach one family member two of the first aid skills you learned. Close in prayer: 'Lord, thank You for families who help us stay safe and healthy. Help us be ready to care for others in their time of need. Amen.'",
          resources: [],
        },
      ],
    },

    // ─────────────────────────────────────────────────
    // MY WORLD — Meetings 12, 13, 14–15
    // ─────────────────────────────────────────────────
    {
      id: "bu-world-of-friends",
      classId: "builder",
      weekNumber: 12,
      title: "The World of Friends",
      objective:
        "Become a caring friend by listening deeply, serving a shut-in or neighbour, and sharing the love of Jesus with someone new.",
      memoryVerse: {
        text: "Cast all your anxiety on him because he cares for you.",
        reference: "1 Peter 5:7",
      },
      materials: [
        { name: "Friendship interview worksheet (printed)", quantity: "1 per child" },
        { name: "Bible" },
        { name: "Greeting card or small gift to take to a shut-in" },
        { name: "Card-making supplies: paper, markers, stickers" },
        { name: "Pencils", quantity: "1 per child" },
      ],
      sections: [
        {
          id: "bu-wof-intro",
          type: "introduction",
          title: "How to Be a Caring Friend",
          duration: "7 mins",
          instructions:
            "Ask: 'What does it mean to be a caring friend? Is it just hanging out together?' Share examples: taking flowers to someone who is sick, listening when a friend is sad, sharing your last biscuit, remembering someone's birthday. Read and memorise 1 Peter 5:7: 'Cast all your anxiety on him because he cares for you.' Connect: Jesus is the most caring friend. When we care for others, we reflect Him.",
          resources: ["Bible"],
        },
        {
          id: "bu-wof-bible",
          type: "bible_story",
          title: "Caring Friend Conversation",
          duration: "12 mins",
          instructions:
            "Walk through the Caring Friend award requirements. Explain: a caring friend LISTENS deeply. Demonstrate by doing a Friendship Interview with a child. Ask: (a) When is your birthday? (b) What is your favourite animal? (c) Two favourite colours? (d) Three favourite foods? (e) Four things most important to you? (f) Tell me about your last trip. Discuss: 'What did you learn about that person that you didn't know before? How does it feel to really be listened to?' This skill is also the foundation for visiting a shut-in (elderly or sick person) with genuine care.",
          resources: ["Friendship interview worksheet"],
        },
        {
          id: "bu-wof-activity",
          type: "activity",
          title: "Friendship Interviews",
          duration: "12 mins",
          instructions:
            "Children pair up and conduct a full Friendship Interview with each other, writing down answers on the worksheet. Then groups share two surprising things they learned about their partner. Discuss: 'Plan to visit a shut-in or elderly church member this week using these exact questions as a conversation starter. Take something with you — a card, flowers, or a small gift.' Also discuss: how can we show that we are a caring person at home? (Keep room tidy, help in the kitchen, do extra chores without being told.) Each child shares something special they have done for a friend.",
          resources: ["Friendship interview worksheets", "Pencils"],
        },
        {
          id: "bu-wof-craft",
          type: "craft",
          title: "Care Card for a Shut-In",
          duration: "12 mins",
          instructions:
            "Children make a personal care card to give to a shut-in, elderly person, or someone who needs encouragement.",
          craftName: "A Card for Someone Who Needs Care",
          materials: [
            { name: "Card-making paper", quantity: "1 per child" },
            { name: "Markers and crayons" },
            { name: "Stickers for decoration" },
          ],
          steps: [
            "Think of a specific person you will visit or send this card to",
            "Fold the paper into a card",
            "On the front: draw something that will make them smile",
            "Inside: write their name and a personal message of care",
            "Share how Jesus loves you and that He loves them too",
            "Write 1 Peter 5:7 on the inside",
            "Sign your name and deliver the card in person if possible",
          ],
        },
        {
          id: "bu-wof-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Hold up care cards. Say 1 Peter 5:7 together from memory. Ask each child: 'Who is one person you will show extra care to this week?' Close in prayer: 'Lord, help us to care the way You care — deeply, specifically, and without expecting anything in return. Amen.'",
          resources: [],
        },
      ],
    },

    {
      id: "bu-world-of-other-people",
      classId: "builder",
      weekNumber: 13,
      title: "The World of Other People",
      objective:
        "Develop civic awareness by learning the national anthem and flag, naming the country's capital and leader, and understanding God's design for community and authority.",
      memoryVerse: {
        text: "Let everyone be subject to the governing authorities, for there is no authority except that which God has established.",
        reference: "Romans 13:1",
      },
      materials: [
        { name: "Printed copy of national anthem", quantity: "1 per child" },
        { name: "Image or small flag of the national flag", quantity: "1 per child" },
        { name: "Map of the country showing the capital city" },
        { name: "Plain white paper for flag colouring", quantity: "1 per child" },
        { name: "Crayons, markers, or coloured pencils" },
        { name: "Country Facts worksheet (printed)", quantity: "1 per child" },
        { name: "Bible" },
      ],
      sections: [
        {
          id: "bu-woop-intro",
          type: "introduction",
          title: "Our National Anthem",
          duration: "10 mins",
          instructions:
            "Distribute printed copies of the national anthem. Read through the words first, explaining any unfamiliar words. Ask: 'What is this song about? What values does it express?' Then sing it together — twice if time allows. Ask: 'Why does a country have a national anthem? What does it mean to belong to a nation?'",
          resources: ["National anthem printout"],
        },
        {
          id: "bu-woop-bible",
          type: "bible_story",
          title: "God and Government",
          duration: "10 mins",
          instructions:
            "Read Romans 13:1 and discuss: God established governments and authorities to bring order to society. Ask: 'Does that mean we obey EVERY law?' Discuss the principle: we obey authority unless it asks us to disobey God (Daniel 6 — Daniel prayed even when it was illegal because prayer was right). Discuss: 'What is our capital city? Who is the leader of our country? What do they do?' Point out the capital on a map.",
          resources: ["Bible", "Map of the country"],
        },
        {
          id: "bu-woop-activity",
          type: "activity",
          title: "Flag and Country Facts Quiz",
          duration: "8 mins",
          instructions:
            "Show the national flag and ask: 'What do the colours and symbols represent?' Discuss the meaning of each element. Then quiz children on country facts: What is our capital? Who is our current leader? What is the name of our national anthem? What country is to the north/south/east/west? Fill in the Country Facts worksheet together.",
          resources: ["National flag image", "Country Facts worksheet"],
        },
        {
          id: "bu-woop-craft",
          type: "craft",
          title: "National Flag and Facts Page",
          duration: "14 mins",
          instructions:
            "Children draw and colour an accurate copy of the national flag and complete a country facts page.",
          craftName: "My Country — Flag and Facts",
          materials: [
            { name: "Plain white paper for flag", quantity: "1 per child" },
            { name: "Crayons, markers, or coloured pencils" },
            { name: "Country Facts worksheet", quantity: "1 per child" },
            { name: "Pencils", quantity: "1 per child" },
          ],
          steps: [
            "Look carefully at the national flag image",
            "Draw the flag accurately on your white paper, including all symbols and colours",
            "Label the colours and explain what each element represents",
            "On the Country Facts sheet, fill in: Country name, Capital city, Leader, National anthem name",
            "Write one thing you are proud of about your country",
            "Write Romans 13:1 at the bottom",
          ],
        },
        {
          id: "bu-woop-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Sing the national anthem together one more time. Say the memory verse together. Ask: 'How can Christians be good citizens while staying faithful to God?' Close in prayer thanking God for the country and its leaders, and asking for wisdom for those in authority.",
          resources: [],
        },
      ],
    },

    {
      id: "bu-world-of-nature",
      classId: "builder",
      weekNumber: 14,
      title: "The World of Nature",
      objective:
        "Complete a new nature award — exploring bodies of water, insects, stars, weather, or zoo animals — and deepen awe for God's creation.",
      memoryVerse: {
        text: "The heavens declare the glory of God; the skies proclaim the work of his hands.",
        reference: "Psalm 19:1",
      },
      materials: [
        { name: "Age-appropriate nature books (bodies of water, insects, stars, weather, or zoo animals)" },
        { name: "Nature song lyrics" },
        { name: "Magnifying glasses (for insects/nature observation)", quantity: "1 per pair" },
        { name: "Dark blue or black paper for star craft", quantity: "1 per child" },
        { name: "White or silver crayons or chalk" },
        { name: "Weather chart template (optional)" },
        { name: "Insect or water creature colouring sheet (optional)" },
        { name: "Drawing paper", quantity: "1 per child" },
        { name: "Pencils and crayons" },
      ],
      sections: [
        {
          id: "bu-won-intro",
          type: "introduction",
          title: "Nature Wonder",
          duration: "7 mins",
          instructions:
            "Choose one of the five nature topics with the group: Bodies of Water, Insects, Stars, Weather, or Zoo Animals. Show a striking image or bring in a nature item (a jar of water, an insect specimen in a jar, a star chart, a weather photo, or zoo animal pictures). Ask: 'What do you already know about this? What do you wonder about?' Sing a nature-themed song together.",
          resources: ["Nature image or item", "Nature song lyrics"],
        },
        {
          id: "bu-won-bible",
          type: "bible_story",
          title: "Nature Study",
          duration: "15 mins",
          instructions:
            "Read from an age-appropriate book on the chosen topic. (Bodies of Water: listen to a book about lakes, streams, rivers, and oceans — sing a song about them, play a game; Insects: listen to a book, say three things you learned, play an action game; Stars: listen to a book, say three things, play an action game, sing a song; Weather: listen to a book, say three things, play an action game; Zoo Animals: describe animals seen — what they eat, any birds, draw/colour two things from the zoo, who made everything at the zoo — find the answer in the Bible.) Ask children to say at least three things they learned. A helper notes these down.",
          resources: ["Age-appropriate nature books", "Magnifying glasses"],
        },
        {
          id: "bu-won-activity",
          type: "activity",
          title: "Nature Action Game",
          duration: "10 mins",
          instructions:
            "Play a nature action game based on the chosen topic. Bodies of Water: be a stream (wiggle slowly), then a river (faster), then ocean waves (big arms), then a waterfall (jump!). Insects: crawl like a beetle, hop like a grasshopper, flutter like a butterfly, sting like a bee (sit down fast). Stars: reach high and twinkle fingers, shoot like a meteor (run). Weather: sunshine (arms wide), wind (sway), rain (wiggle fingers down), thunder (stomp), lightning (freeze). Zoo Animals: roar, slither, hop, fly. Sing the nature song between rounds.",
          resources: ["Open floor space"],
        },
        {
          id: "bu-won-craft",
          type: "craft",
          title: "Nature Award Craft",
          duration: "13 mins",
          instructions:
            "Children complete a craft matching the nature topic chosen. Recommended for Stars: create a Starry Night picture.",
          craftName: "God's Creation — Nature Award Craft",
          materials: [
            { name: "Dark blue or black paper (for Stars)", quantity: "1 per child" },
            { name: "White or silver crayons or chalk" },
            { name: "Drawing paper (for other topics)", quantity: "1 per child" },
            { name: "Pencils and crayons" },
            { name: "Colouring sheets for chosen topic (optional)" },
          ],
          steps: [
            "Stars: use dark paper and white/silver chalk to draw lots of stars and a moon",
            "Add a landscape below (tree, hill, house)",
            "Write 'God Made the Stars' at the top",
            "Bodies of Water: draw a river, lake, or ocean scene with all the creatures in it",
            "Insects: draw your favourite insect in detail and label its body parts",
            "Weather: draw a weather scene with sun, clouds, rain, and rainbow",
            "Zoo Animals: draw or colour two animals you love from the zoo",
            "On all crafts: write Psalm 19:1 and who made this part of creation",
          ],
        },
        {
          id: "bu-won-closing",
          type: "closing",
          title: "Closing",
          duration: "5 mins",
          instructions:
            "Children share their nature crafts. Say the memory verse together: 'The heavens declare the glory of God; the skies proclaim the work of his hands. Psalm 19:1.' Ask: 'What part of God's creation amazes you most?' Each child answers. Close in prayer: 'Lord, your creation is magnificent. Thank you for making such a beautiful world for us to discover and care for. Amen.'",
          resources: [],
        },
      ],
    },
  ],
};

export default builder;
