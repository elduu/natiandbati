export type Lang = "en" | "am";

/**
 * English source text → Amharic translation.
 * Any string without an entry falls back to the English original.
 */
export const amharic: Readonly<Record<string, string>> = {
  // ── Menu ───────────────────────────────────────────────────────────
  Home: "መነሻ",
  "Our Story": "የእኛ ታሪክ",
  "About Us": "ስለ እኛ",
  Gallery: "የፎቶ ማዕከል",
  "Guest Gallery": "የእንግዶች ፎቶዎች",
  RSVP: "መገኘትዎን ያረጋግጡ",
  Gifts: "ስጦታዎች",
  Location: "አድራሻ",
  Wishes: "መልካም ምኞቶች",
  Schedule: "መርሐ ግብር",
  Films: "ፊልሞች",
  Story: "ታሪክ",
  Invitation: "ግብዣ",
  Venue: "ቦታ",

  // ── Names and dates ────────────────────────────────────────────────
  Natnael: "ናትናኤል",
  Bethel: "ቤቴል",
  Betty: "ቤቲ",
  Natty: "ናቲ",
  "November 21, 2026": "ኅዳር 12 ቀን 2019 ዓ.ም",
  "NOV 21, 2026": "ኅዳር 12 ቀን 2019 ዓ.ም",
  "November 2026": "ኅዳር 2019 ዓ.ም",
  "21": "12",
  Saturday: "ቅዳሜ",

  // ── Hero ───────────────────────────────────────────────────────────
  "We're getting married": "ልንጋባ ነው",
  "Two souls, one beautiful journey. Join us as we celebrate the beginning of our forever.":
    "ሁለት ነፍሳት፣ አንድ ውብ ጉዞ። የዘላለም ሕይወታችንን ጅማሬ ስናከብር አብረውን ይሁኑ።",
  "RSVP Now": "አሁን ያረጋግጡ",
  "View Details": "ዝርዝሩን ይመልከቱ",

  // ── Invitation ─────────────────────────────────────────────────────
  "Dear Family and Friends": "ውድ ቤተሰቦቻችን እና ጓደኞቻችን",
  "O Jeshurun, there is none like God, who rides across the heavens to help you, and upon the clouds in his majesty.":
    "ይሹሩን ሆይ፥ በሰማያት ላይ ለረድኤትህ፥ በደመናትም ላይ በታላቅነት እንደሚሄድ እንደ እግዚአብሔር ያለ ማንም የለም።",
  "Deuteronomy 33:26": "ኦሪት ዘዳግም 33:26",
  "Together with our families, we joyfully invite you to celebrate our marriage on":
    "ከቤተሰቦቻችን ጋር በመሆን፣ ጋብቻችንን ከእኛ ጋር እንዲያከብሩ በደስታ እንጋብዝዎታለን። ቀኑ",
  "The ceremony will be held at": "የጋብቻ ሥነ ሥርዓቱ የሚካሄደው",
  "Gulele Paulos Muluwengel Church": "ጉለሌ ጳውሎስ ሙሉ ወንጌል ቤተ ክርስቲያን",
  "Addis Ababa": "አዲስ አበባ",
  "The ceremony begins at": "ሥነ ሥርዓቱ የሚጀምረው",
  "3:00 PM": "ከቀኑ 9፡00 ሰዓት",
  "We would be honored to have you share this special day with us.":
    "ይህን ልዩ ቀን ከእኛ ጋር ቢያሳልፉ ታላቅ ክብር ይሆንልናል።",

  // ── Countdown ──────────────────────────────────────────────────────
  "Counting down to": "በጉጉት እየጠበቅን",
  "Our Wedding Day": "የሠርጋችን ቀን",
  Days: "ቀናት",
  Hours: "ሰዓታት",
  Minutes: "ደቂቃዎች",
  Seconds: "ሰከንዶች",

  // ── Event schedule ─────────────────────────────────────────────────
  "Save the date": "ቀኑን ያስታውሱ",
  "Event Schedule": "የዝግጅቱ መርሐ ግብር",
  "Add it to your calendar so you don't miss a moment.":
    "አንድም ጊዜ እንዳያመልጥዎ በቀን መቁጠሪያዎ ላይ ያስገቡት።",
  "Add to Calendar": "ወደ ቀን መቁጠሪያ ያክሉ",
  "Photo Program": "የፎቶ ፕሮግራም",
  "The event starts with the photo program.": "ዝግጅቱ በፎቶ ፕሮግራም ይጀምራል።",
  "8:00 – 9:30 AM": "ከጠዋቱ 2፡00 – 3፡30",
  Lunch: "ምሳ",
  "Lunch at both the bride’s and the groom’s homes.": "ምሳ በሙሽራይቱም በሙሽራውም ቤት።",
  "11:00 AM": "ከጠዋቱ 5፡00",
  "Going to the Bride’s House": "ወደ ሙሽራይቱ ቤት መሄድ",
  "Everyone moves to the bride’s house.": "ሁሉም ወደ ሙሽራይቱ ቤት ይሄዳል።",
  "12:00 PM": "ከቀኑ 6፡00",
  "Going to the Church": "ወደ ቤተ ክርስቲያን መሄድ",
  "We head to the church for the wedding ceremony.": "ለጋብቻ ሥነ ሥርዓቱ ወደ ቤተ ክርስቲያን እንሄዳለን።",
  "Cake Ceremony": "የኬክ ሥነ ሥርዓት",
  "Cutting the cake and celebrating together.": "ኬኩን ቆርጠን አብረን እናከብራለን።",
  "5:30 PM": "ከቀኑ 11፡30",

  // ── About the couple ───────────────────────────────────────────────
  "Get to know us": "እኛን ይወቁን",
  "About the Couple": "ስለ ጥንዶቹ",
  "Two different worlds that found a perfect rhythm together.":
    "አብረው ፍጹም ቅኝት ያገኙ ሁለት የተለያዩ ዓለማት።",
  "The Bride": "ሙሽራይቱ",
  "The Groom": "ሙሽራው",
  "A civil engineering graduate who serves her church by leading worship. Singing is her great love, and she brings that joy to every room she steps into.":
    "በሲቪል ምህንድስና የተመረቀች፣ በቤተ ክርስቲያኗ የአምልኮ መሪ ሆና የምታገለግል። መዘመር ታላቅ ፍቅሯ ነው፤ ያንንም ደስታ ወደምትገባበት ክፍል ሁሉ ታመጣለች።",
  "A marketing graduate who is building his own business. Playing music is what he loves most, and it fills his life with joy.":
    "በማርኬቲንግ የተመረቀ፣ የራሱን ንግድ እየገነባ ያለ። ሙዚቃ መጫወት በጣም የሚወደው ነገር ነው፤ ሕይወቱንም በደስታ ይሞላዋል።",

  // ── Story ──────────────────────────────────────────────────────────
  "How it began": "እንዴት ተጀመረ",
  "Our Love Story": "የፍቅር ታሪካችን",
  "Every great love has a beginning. Here's a glimpse of ours.":
    "ታላቅ ፍቅር ሁሉ ጅማሬ አለው። የእኛን በጨረፍታ እነሆ።",
  "Six years ago": "ከስድስት ዓመት በፊት",
  "First Meeting": "የመጀመሪያ ግንኙነት",
  "Six years ago, our paths first crossed at a recording studio, where Natnael had come to record songs. It was the start of a friendship we never expected would become so much more.":
    "ከስድስት ዓመት በፊት መንገዶቻችን ለመጀመሪያ ጊዜ የተገናኙት በሙዚቃ ስቱዲዮ ውስጥ ሲሆን፣ ናትናኤል ዜማዎችን ለመቅረጽ መጥቶ ነበር። ይህ ወደዚህ ያህል ይሆናል ብለን ያልጠበቅነው የጓደኝነት መጀመሪያ ነበር።",
  "Through the years": "በዓመታት ውስጥ",
  "Meeting at Church": "በቤተ ክርስቲያን መገናኘት",
  "After that, we met most of the time at church. Week after week, our friendship grew in faith and in the quiet moments we shared.":
    "ከዚያ በኋላ ብዙውን ጊዜ የምንገናኘው በቤተ ክርስቲያን ነበር። ሳምንት በሳምንት ጓደኝነታችን በእምነት እና በጋራ ባሳለፍናቸው ጸጥ ያሉ ጊዜያት አደገ።",
  "July 12, 2025 · Hamle 5, 2017 E.C.": "ሐምሌ 5 ቀን 2017 ዓ.ም · ጁላይ 12፣ 2025",
  "The Proposal": "የጋብቻ ጥያቄ",
  "A beautiful new chapter began on this day, turning years of friendship and love into a promise of a lifetime.":
    "በዚህ ቀን አዲስ ውብ ምዕራፍ ተጀመረ፤ የዓመታት ጓደኝነትና ፍቅርም የዕድሜ ልክ ቃል ኪዳን ሆነ።",
  "July 19, 2025 · Hamle 12, 2017 E.C.": "ሐምሌ 12 ቀን 2017 ዓ.ም · ጁላይ 19፣ 2025",
  Shemgelna: "ሽምግልና",
  "A week later, our families came together for the Shemgelna, honoring our culture and the traditions passed down to us, and blessing our journey.":
    "ከአንድ ሳምንት በኋላ ቤተሰቦቻችን ለሽምግልና ተሰበሰቡ፤ ባህላችንንና የተላለፉልንን ወጎች አከበሩ፤ ጉዟችንንም ባረኩ።",
  "November 21, 2026 · Hidar 12, 2019 E.C.": "ኅዳር 12 ቀን 2019 ዓ.ም · ኖቬምበር 21፣ 2026",
  "Our Wedding": "ሠርጋችን",
  "And now, surrounded by everyone we love, we begin our greatest adventure yet: a lifetime, hand in hand.":
    "አሁን በምንወዳቸው ሰዎች ሁሉ ተከበን፣ እስካሁን ከነበሩት ሁሉ የላቀውን ጀብዳችንን እንጀምራለን፤ የዕድሜ ልክ ጉዞ፣ እጅ ለእጅ።",

  // ── Films ──────────────────────────────────────────────────────────
  "In motion": "በእንቅስቃሴ",
  "Our Films": "የእኛ ቪዲዮዎች",
  "Some moments are best remembered in motion. Press play and relive them with us.":
    "አንዳንድ ጊዜያት በእንቅስቃሴ ይታወሳሉ። ተጫውተው ከእኛ ጋር ያስታውሷቸው።",
  Engagement: "የእጮኝነት",
  "Our engagement film": "የእጮኝነት ፊልማችን",
  Play: "አጫውት",
  "Video player": "የቪዲዮ ማጫወቻ",
  "Your browser does not support video playback.": "አሳሽዎ ቪዲዮ ማጫወትን አይደግፍም።",

  // ── Photo gallery ──────────────────────────────────────────────────
  "Captured moments": "የተቀረጹ ጊዜያት",
  "Our Gallery": "የፎቶ ማዕከላችን",
  "A collection of memories, frozen in time and forever cherished.":
    "በጊዜ የቀዘቀዙ እና ለዘላለም የሚወደዱ ትዝታዎች ስብስብ።",
  "See all photos": "ሁሉንም ፎቶዎች አሳይ",
  "Show less": "ጥቂቱን አሳይ",
  "Open image": "ምስሉን ክፈት",
  "Wedding photo": "የሠርግ ፎቶ",

  // ── Guest gallery (Telegram) ───────────────────────────────────────
  "Share the joy": "ደስታውን ያጋሩ",
  "Captured a moment you love? Send your photos to our Telegram bot and they will appear here.":
    "የሚወዱትን ጊዜ ቀርጸዋል? ፎቶዎችዎን ወደ ቴሌግራም ቦታችን ይላኩ፤ እዚህ ይታያሉ።",
  "Share your photos": "ፎቶዎችዎን ያጋሩ",
  "Tap the button, open our Telegram bot and send your photos. Then come back to see everyone's.":
    "ቁልፉን ነክተው የቴሌግራም ቦታችንን ይክፈቱ እና ፎቶዎችዎን ይላኩ። ከዚያ ተመልሰው የሁሉንም ፎቶ ይመልከቱ።",
  "Send photos on Telegram": "በቴሌግራም ፎቶ ይላኩ",
  "View all photos": "ሁሉንም ፎቶዎች ይመልከቱ",
  "Guest photos": "የእንግዶች ፎቶዎች",
  "Loading photos...": "ፎቶዎች በመጫን ላይ...",
  "Could not load the photos. Please try again later.":
    "ፎቶዎቹን መጫን አልተቻለም። እባክዎ ቆይተው እንደገና ይሞክሩ።",
  "No photos have been shared yet. Be the first!": "እስካሁን ምንም ፎቶ አልተጋራም። የመጀመሪያው ይሁኑ!",
  Download: "አውርድ",
  "Shared by": "የተጋራው በ",
  "Photo shared by": "ፎቶውን ያጋራው",
  "Guest photo": "የእንግዳ ፎቶ",

  // ── RSVP ───────────────────────────────────────────────────────────
  "Will you join us?": "አብረውን ይሆናሉ?",
  RSVP_PLACEHOLDER_UNUSED: "",
  "We can't wait to celebrate with you.": "ከእርስዎ ጋር ለማክበር ጓጉተናል።",
  "Full Name": "ሙሉ ስም",
  "Your full name": "ሙሉ ስምዎ",
  "Will you attend?": "ይገኛሉ?",
  "Joyfully accepts": "በደስታ እገኛለሁ",
  "Regretfully declines": "በሐዘን አልገኝም",
  "Your Wish for the Couple": "ለጥንዶቹ ምኞትዎ",
  "Share your well wishes...": "መልካም ምኞትዎን ያጋሩ...",
  "Send RSVP": "ምላሽ ይላኩ",
  "Sending...": "በመላክ ላይ...",
  "Please enter your name.": "እባክዎ ስምዎን ያስገቡ።",
  "Please write a short wish for the couple.": "እባክዎ ለጥንዶቹ አጭር ምኞት ይጻፉ።",
  "Something went wrong. Please try again.": "የሆነ ችግር ተፈጥሯል። እባክዎ እንደገና ይሞክሩ።",
  "Thank you!": "እናመሰግናለን!",
  "Your response has been received": "ምላሽዎ ደርሶናል",
  "We're overjoyed that you'll be part of our special day.": "በልዩ ቀናችን ስለሚገኙ በጣም ደስ ብሎናል።",
  "You will be missed, and we're grateful you let us know.": "እናስታውስዎታለን፤ ስላሳወቁንም እናመሰግናለን።",
  "Submit another response": "ሌላ ምላሽ ይላኩ",

  // ── Warm wishes ────────────────────────────────────────────────────
  "From those we love": "ከምንወዳቸው",
  "Warm Wishes": "ሞቅ ያለ ምኞቶች",
  "Heartfelt messages from the people who mean the most to us.":
    "ለእኛ ትልቅ ትርጉም ካላቸው ሰዎች የመጡ ልባዊ መልዕክቶች።",
  "Loading wishes...": "ምኞቶች በመጫን ላይ...",
  "Could not load the wishes. Please try again later.": "ምኞቶቹን መጫን አልተቻለም። እባክዎ ቆይተው እንደገና ይሞክሩ።",
  "No wishes yet. Be the first to send one in the RSVP section!":
    "እስካሁን ምንም ምኞት የለም። በመገኘት ማረጋገጫው ክፍል የመጀመሪያው ይሁኑ!",
  "View all wishes": "ሁሉንም ምኞቶች ይመልከቱ",
  "All wishes": "ሁሉም ምኞቶች",

  // ── Gifts ──────────────────────────────────────────────────────────
  "With gratitude": "በምስጋና",
  "Gift Registry": "የስጦታ ዝርዝር",
  "Your presence is the greatest gift of all. But should you wish to give, you are welcome to send a gift.":
    "የእርስዎ መገኘት ከሁሉ የላቀ ስጦታ ነው። ለመስጠት ከፈለጉ ግን ስጦታ መላክ ይችላሉ።",
  "Send a Gift": "ስጦታ ይላኩ",
  "Commercial Bank of Ethiopia (CBE)": "የኢትዮጵያ ንግድ ባንክ (CBE)",
  "Account number": "የሒሳብ ቁጥር",
  "Copy account number": "የሒሳብ ቁጥር ቅዳ",
  "Copied!": "ተቀድቷል!",
  "Hide details": "ዝርዝሩን ደብቅ",

  // ── Locations ──────────────────────────────────────────────────────
  "Find your way": "መንገድዎን ያግኙ",
  Locations: "ቦታዎች",
  "Tap a place to open it in Maps.": "ቦታውን በካርታ ለመክፈት ይንኩት።",
  Church: "ቤተ ክርስቲያን",
  "Bride’s Home": "የሙሽራይቱ ቤት",
  "Groom’s Home": "የሙሽራው ቤት",
  "View on map": "በካርታ ይመልከቱ",
  Map: "ካርታ",

  // ── Footer, music, welcome ─────────────────────────────────────────
  "Made with love.": "በፍቅር የተሰራ።",
  "Play music": "ሙዚቃ አጫውት",
  "Pause music": "ሙዚቃ አቁም",
  "Together with our families": "ከቤተሰቦቻችን ጋር",
  "You're invited": "ተጋብዘዋል",
  "Open invitation": "ግብዣውን ይክፈቱ",
};