import { BlogPost, Pillar, Pathway } from './types';

export const PILLARS: Pillar[] = [
  {
    number: '01',
    title: 'The Salvation',
    description: 'Jesus was sent to save us from our sins, bridging the infinite gap between man and God. Salvation is a free gift received by grace through faith in Christ alone.'
  },
  {
    number: '02',
    title: 'The Discipleship',
    description: 'To follow Jesus is to be transformed by Him. We believe in life-on-life discipleship, teaching believers to walk daily in prayer, study of the Word, and fellowship.'
  },
  {
    number: '03',
    title: 'The Commission',
    description: 'Having been saved and transformed, we are now sent to share Him. Every believer is equipped and called to share the Glad Tidings and make disciples of all nations.'
  }
];

export const PATHWAYS: Pathway[] = [
  {
    label: 'Who is He?',
    title: 'Explore Jesus',
    description: 'Discover the life, divinity, claims, and unconditional love of Jesus Christ our Savior.',
    buttonText: 'Learn of Him',
    targetPage: 'jesus'
  },
  {
    label: 'The Way',
    title: 'Receive Salvation',
    description: 'Understand the Romans Road to salvation and how to make a personal decision to follow Christ.',
    buttonText: 'Find Grace',
    targetPage: 'salvation'
  },
  {
    label: 'The Journey',
    title: 'Begin to Grow',
    description: 'Equip yourself with daily spiritual disciplines, Scripture reading, and prayer habits.',
    buttonText: 'Grow Deep',
    targetPage: 'grow'
  },
  {
    label: 'The Guidebook',
    title: 'Read the Book',
    description: 'Preview "Sent to Save", our comprehensive blueprint on sharing the Gospel with grace.',
    buttonText: 'See Book',
    targetPage: 'book'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'post-1',
    category: 'Theology',
    title: 'The Unbearable Weight of Grace',
    excerpt: 'Explore the profound depth of Ephesians 2:8-9, uncovering how absolute unmerited favor destroys religious legalism and transforms the human heart.',
    number: '01',
    meta: 'June 18, 2026 • 5 Min Read'
  },
  {
    id: 'post-2',
    category: 'Evangelism',
    title: 'Sharing Christ Without Fear',
    excerpt: 'Practical, grace-filled methods for organic, non-combative faith conversations in an increasingly skeptical modern culture.',
    number: '02',
    meta: 'May 20, 2026 • 7 Min Read'
  },
  {
    id: 'post-3',
    category: 'Discipleship',
    title: 'The Lost Art of Deep Fellowship',
    excerpt: 'Why superficial church attendance is not enough, and how to recover first-century, life-on-life communal spiritual growth.',
    number: '03',
    meta: 'April 12, 2026 • 6 Min Read'
  }
];

export const GOSPEL_VERSES = {
  quote: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. For God did not send his Son into the world to condemn the world, but in order that the world might be saved through him.",
  ref: "John 3:16-17"
};

export const ROMANS_ROAD_STEPS = [
  {
    title: "Our Condition",
    verse: "For all have sinned and fall short of the glory of God.",
    ref: "Romans 3:23",
    explanation: "No one is perfect. Every human being has fallen short of God's holy standards. Sin is our rebellion against God's loving law, creating a gap we cannot bridge on our own."
  },
  {
    title: "The Cost of Sin",
    verse: "For the wages of sin is death, but the free gift of God is eternal life in Christ Jesus our Lord.",
    ref: "Romans 6:23",
    explanation: "Just as work earns physical wages, our transgressions earn spiritual wages—eternal separation from God. But where we earned judgment, God offers an unmerited, beautiful free gift: Christ Jesus."
  },
  {
    title: "The Great Exchange",
    verse: "But God shows his love for us in that while we were still sinners, Christ died for us.",
    ref: "Romans 5:8",
    explanation: "God did not wait for us to clean up our lives before He reached out. While we were in active rebellion, Jesus took our place on the cross, bearing the full weight of our sentence."
  },
  {
    title: "Our Active Response",
    verse: "If you confess with your mouth that Jesus is Lord and believe in your heart that God raised him from the dead, you will be saved... For everyone who calls on the name of the Lord will be saved.",
    ref: "Romans 10:9, 13",
    explanation: "Salvation is not passive knowledge. It requires a heart decision—believing in His resurrected victory over death and confessing His lordship over your life. Out of sincerity, we cry out to Him."
  },
  {
    title: "The Absolute Promise",
    verse: "There is therefore now no condemnation for those who are in Christ Jesus.",
    ref: "Romans 8:1",
    explanation: "Once you belong to Christ, your guilt is washed away completely. You are adopted into God's family, safe under God's eternal blessing, and sealed by the Holy Spirit."
  }
];

export const GROW_STEPS = [
  {
    title: "1. Abide in Scripture",
    accent: "The Word of God",
    text: "The living Word is your daily sustenance. Start in the Gospel of John, letting the life of Christ become the baseline for your thoughts and choices.",
    scripture: "Man shall not live by bread alone, but by every word that comes from the mouth of God.",
    ref: "Matthew 4:4"
  },
  {
    title: "2. Communal Prayer",
    accent: "Daily Dialogue",
    text: "Prayer is the lifeline of relationship. Speak with God as your heavenly Father—with praise, petition, and silent listening.",
    scripture: "Pray without ceasing, give thanks in all circumstances; for this is the will of God.",
    ref: "1 Thessalonians 5:17-18"
  },
  {
    title: "3. Sacred Fellowship",
    accent: "Life Together",
    text: "Discipleship does not happen in isolation. Join a Bible-believing local church or community to share burdens, serve, and be held accountable.",
    scripture: "And let us consider how to stir up one another to love and good works, not neglecting to meet together.",
    ref: "Hebrews 10:24-25"
  },
  {
    title: "4. The Active Commission",
    accent: "Sharing the Light",
    text: "A saved soul naturally spills over. Share how God rescued you with gentle courage and walk in service to your community.",
    scripture: "But in your hearts honor Christ the Lord as holy, always being prepared to make a defense to anyone who asks.",
    ref: "1 Peter 3:15"
  }
];

export const BOOK_CHAPTERS = [
  { number: "Chapter 1", title: "The Great Sending", pages: "12-25", description: "Unpacking the absolute mission of Jesus as the archetype of our sending." },
  { number: "Chapter 2", title: "The Weight of the Message", pages: "26-47", description: "Articulating the core Gospel with theological accuracy and grace-filled simplicity." },
  { number: "Chapter 3", title: "The Bridge of Compassion", pages: "48-73", description: "Breaking down relational blockades to speak the truth in genuine sacrificial love." },
  { number: "Chapter 4", title: "Romans Road Redux", pages: "74-99", description: "A detailed breakdown of the classic evangelistic tool for a post-secular audience." },
  { number: "Chapter 5", title: "Multiply", pages: "100-128", description: "The calling of every believer to disciple someone else and create a legacy of faith." }
];
