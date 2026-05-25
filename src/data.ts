import { BlogPost, Pillar, Pathway, BookPart } from './types';

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
    category: 'Testimony',
    title: 'The Drive That Saved My Life',
    excerpt: 'I am going to tell you something I do not say out loud very often. Not because it is hard to talk about — I have talked about it plenty. I tell it because someone reading this right now is sitting at their own version of that road, and they need to know what I know now: it was not the end. It was the beginning.',
    number: '01',
    meta: 'May 11, 2026 • 5 Min Read'
  },
  {
    id: 'post-2',
    category: 'Faith',
    title: 'You Are Not Too Far Gone',
    excerpt: 'I know the lie. It does not come loudly. It does not announce itself. It just settles in quietly, like carbon monoxide, you cannot smell it, but it is filling the room.',
    number: '02',
    meta: 'May 18, 2026 • 7 Min Read'
  },
  {
    id: 'post-3',
    category: 'Gospel',
    title: 'How to Share Jesus Without Being Weird About It',
    excerpt: 'Most Christians I know want to share their faith. They genuinely do. They care about the people in their lives. They believe what they believe. They are not trying to keep it to themselves.',
    number: '03',
    meta: 'May 25, 2026 • 6 Min Read'
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

export const BOOK_PARTS: BookPart[] = [
  {
    partNumber: 'Part I',
    title: 'THE BATTLE WITHIN',
    chapters: [
      {
        chapterNumber: 1,
        title: 'The Standard of Manhood',
        pages: '12-28',
        description: 'Uncovering the true design of biblical masculinity and spiritual leadership.',
        excerpt: 'Every man stands at a crossroad. The world demands performance and superficial strength, but Christ invites us to an inner transformation that starts with surrendering our control and confessing our need.',
        insights: [
          'The default setting of the human heart',
          'How culture distorts spiritual strength',
          'Walking in authentic humility'
        ]
      },
      {
        chapterNumber: 2,
        title: 'The Enemy at the Gate',
        pages: '29-44',
        description: 'Identifying the spiritual forces and temptations aiming to derail your progress.',
        excerpt: 'Spiritual warfare is not a myth; it is an active daily conflict. The enemy does not attack with fanfare, but with subtle compromises that erode your devotion and compromise your family\'s protection.',
        insights: [
          'Recognizing subtle hooks',
          'The power of scripture in temptation',
          'Alertness as a spiritual discipline'
        ]
      },
      {
        chapterNumber: 3,
        title: 'The Sins of the Father',
        pages: '45-58',
        description: 'Breaking generational chains of failure and establishing a godly heritage.',
        excerpt: 'We are shaped by those who walked before us, but we are not defined by their failures. Christ has given us the absolute authority to break generational cycles of anger, addiction, and neglect.',
        insights: [
          'The weight of spiritual inheritance',
          'Repentance as a pathway to family healing',
          'Forgiving and letting go'
        ]
      },
      {
        chapterNumber: 4,
        title: 'Walking in Christ\'s Identity',
        pages: '59-75',
        description: 'Anchoring your worth and confidence in the secure, finished work of Jesus.',
        excerpt: 'If you do not know who you are in Christ, you will spend your life trying to prove your worth. You are not defined by your failures or your successes; you are defined by His blood.',
        insights: [
          'The doctrine of active adoption',
          'Rejecting the performance trap',
          'Worship as identity defense'
        ]
      }
    ]
  },
  {
    partNumber: 'Part II',
    title: 'MARRIAGE',
    chapters: [
      {
        chapterNumber: 5,
        title: 'Sacred Covenant',
        pages: '78-94',
        description: 'Rejecting modern disposable relationships to pursue a divine lifelong covenant.',
        excerpt: 'Marriage is not a contract of convenience; it is a profound living covenant that mirrors Christ\'s sacrificial love for His church. When you commit, you lay down your life.',
        insights: [
          'The absolute permanence of covenant',
          'Emulating Christ\'s sacrificial posture',
          'Daily renewal of vows'
        ]
      },
      {
        chapterNumber: 6,
        title: 'Dying to Self Daily',
        pages: '95-108',
        description: 'The practical path of setting aside ego to elevate and serve your spouse.',
        excerpt: 'The primary battleground of marital peace is the ego. To love your wife is to crucify your selfishness every single day, preferring her flourishing over your comfort.',
        insights: [
          'The high cost of selfish isolation',
          'Active communication as serving',
          'Resolving conflict with grace'
        ]
      },
      {
        chapterNumber: 7,
        title: 'The Spiritual Protector',
        pages: '109-122',
        description: 'Leading your marriage through spiritual stewardship, prayer, and protection.',
        excerpt: 'A husband\'s highest calling is to stand as a spiritual watchman. You are called to wash your family in the word, pray over your home, and guard the spiritual atmosphere of your household.',
        insights: [
          'Establishing a family altar of prayer',
          'Stewardship of the heart',
          'Gentle spiritual leadership'
        ]
      },
      {
        chapterNumber: 8,
        title: 'Restoration and Healing',
        pages: '123-138',
        description: 'Seeking reconciliation, covering wounds with grace, and renewing broken trust.',
        excerpt: 'No marriage is too fractured for God\'s redemption. In Christ, old wounds do not define your future. True healing begins when we step out of defensive walls and step into radical forgiveness.',
        insights: [
          'The mechanics of genuine apology',
          'Re-educating trust through consistency',
          'The ministry of reconciliation'
        ]
      }
    ]
  },
  {
    partNumber: 'Part III',
    title: 'FATHERHOOD',
    chapters: [
      {
        chapterNumber: 9,
        title: 'The Father\'s Legacy',
        pages: '142-156',
        description: 'Equipping children with spiritual boundaries, love, and unwavering presence.',
        excerpt: 'Your children will learn what God is like by watching how you love them. You cannot outsource fatherhood to the church or the school; you are God\'s chosen representative in their lives.',
        insights: [
          'Validating children through presence',
          'Discipline with perfect love',
          'Modeling sincere discipleship'
        ]
      },
      {
        chapterNumber: 10,
        title: 'Household Discipleship',
        pages: '157-172',
        description: 'Building a culture of discipleship where the Word is natural and lived.',
        excerpt: 'Discipleship is not a Sunday lecture; it is a natural daily rhythm. It is found in how you talk when you sit in your house, when you walk along the road, and when you lie down.',
        insights: [
          'Organic faith discussions',
          'Creating a high-grace household',
          'The power of family prayer'
        ]
      },
      {
        chapterNumber: 11,
        title: 'Raising Warriors for Christ',
        pages: '173-188',
        description: 'Training the next generation to stand firm and carry the Gospel into the culture.',
        excerpt: 'We are not raising children to be comfortable; we are training spiritual warriors to stand strong against cultural tides. We equip them with truth, armor, and a vision of eternity.',
        insights: [
          'Shaping worldview through scripture',
          'Teaching discernment and courage',
          'Blessing and launching children'
        ]
      }
    ]
  },
  {
    partNumber: 'Part IV',
    title: 'STRENGTH TO SURRENDER',
    chapters: [
      {
        chapterNumber: 12,
        title: 'Surrendering Your Will',
        pages: '192-206',
        description: 'Yielding control and plans to experience the true sovereignty of God.',
        excerpt: 'True strength is not found in holding on, but in letting go. When you surrender your plans to the Father, you exchange your fragile strength for His infinite sovereignty.',
        insights: [
          'The peace of absolute surrender',
          'Identifying modern idols',
          'Trusting God with outcomes'
        ]
      },
      {
        chapterNumber: 13,
        title: 'Strength in Weakness',
        pages: '207-220',
        description: 'Discovering how God\'s power is perfected in our acknowledged vulnerabilities.',
        excerpt: 'Our brokenness is not an obstacle to God\'s work; it is the very conduit for His raw power. When we admit we are weak, He steps in as our supreme and absolute strength.',
        insights: [
          'The mystery of 2 Corinthians 12',
          'Walking with healthy vulnerability',
          'Humility as high dynamic power'
        ]
      },
      {
        chapterNumber: 14,
        title: 'The Throne of Grace',
        pages: '221-236',
        description: 'Daily resting in the unmerited favor, mercy, and restorative power of Jesus.',
        excerpt: 'You do not approach God on the basis of your performance. You approach Him on the basis of Christ\'s blood. His throne is not a seat of condemnation, but an abundant fountain of grace.',
        insights: [
          'Boldness in daily prayer',
          'Remission of all condemnation',
          'The ongoing care of the Spirit'
        ]
      }
    ]
  },
  {
    partNumber: 'Part V',
    title: 'BATTLE PLAN',
    chapters: [
      {
        chapterNumber: 15,
        title: 'The Full Armor of God',
        pages: '240-254',
        description: 'Equipping your life with daily weapons of truth, righteousness, faith, and salvation.',
        excerpt: 'You do not go to battle unprepared. Every morning, you must consciously equip yourself with the belt of truth, the breastplate of righteousness, and the shield of faith.',
        insights: [
          'The functional role of each piece of armor',
          'Standing firm in cultural chaos',
          'Guard rails for spiritual focus'
        ]
      },
      {
        chapterNumber: 16,
        title: 'Dynamic Prayer Warfare',
        pages: '255-268',
        description: 'Interceding for your family and church with authority and persistence.',
        excerpt: 'Prayer is not a passive wish list; it is a tactical weapon of spiritual warfare. It tears down persistent strongholds, heals families, and releases the movement of God\'s Spirit.',
        insights: [
          'The lifestyle of fasting and prayer',
          'Persistent intercession techniques',
          'Aligning prayers with scripture'
        ]
      },
      {
        chapterNumber: 17,
        title: 'Band of Brothers',
        pages: '269-284',
        description: 'Building deep brotherhood for accountability, mutual support, and joint action.',
        excerpt: 'An isolated man is a defeated man. You need a band of brothers who will stand with you in the heat of battle, tell you the truth when you are wrong, and lift you up when you fall.',
        insights: [
          'The absolute survival necessity of fellowship',
          'Fostering mutual accountability',
          'Sharing deep burdens safely'
        ]
      },
      {
        chapterNumber: 18,
        title: 'Reclaiming Ground',
        pages: '285-300',
        description: 'Taking back stolen territory in your mind, habits, relationships, and legacy.',
        excerpt: 'The enemy has stolen enough territory in our minds and families. Today, we draw a line in the dust. Through Christ, we reclaim our purity, our marriages, and our children.',
        insights: [
          'Revisiting broken commitments',
          'Tearing down persistent habits',
          'The authority of the believer'
        ]
      }
    ]
  },
  {
    partNumber: 'Part VI',
    title: 'LEGACY',
    chapters: [
      {
        chapterNumber: 19,
        title: 'Finisher of the Faith',
        pages: '304-318',
        description: 'Walking with steady perseverance to complete the course God has assigned you.',
        excerpt: 'Starting well is easy; finishing well is what matters. The calling of every disciple is to walk with absolute consistency until we see Him face-to-face and hear, \'Well done.\'',
        insights: [
          'Persevering through spiritual fatigue',
          'Combating late-life compromises',
          'Eyes fixed on the eternal crown'
        ]
      },
      {
        chapterNumber: 20,
        title: 'Generating Disciples',
        pages: '319-332',
        description: 'Investing your life-on-life into reproduction, mentoring others in grace.',
        excerpt: 'If your Christian walk ends with you, the line stops. Discipleship is a chain of multiplication. Find faithful men, invest your life in them, and teach them to do the same.',
        insights: [
          'The mechanics of lifegiving mentorship',
          'Passing on core gospel conviction',
          'Spiritual parenting as joy'
        ]
      },
      {
        chapterNumber: 21,
        title: 'Sent to Save the Next Gen',
        pages: '333-350',
        description: 'Releasing a movement that outlives your life, transforming generations to come.',
        excerpt: 'We are sent to save. Not just our own souls, but those whom God places in our path. This is our legacy: that the generation to come might know Him, and set their hope in God.',
        insights: [
          'Creating trans-generational legacy',
          'The unstoppable power of the church',
          'Final charge for sending'
        ]
      }
    ]
  }
];
