import { Member, Song, GalleryItem, NewsItem } from './types';

export const MEMBERS: Member[] = [
  {
    id: 'ren',
    name: 'Ren Adanu',
    role: 'Leader & Main Producer',
    bio: 'As the driving force behind the group’s distinctive sound, Ren is a self-taught vocalist, songwriter, and producer. He serves as the leader, main producer, and music arranger for SYNRG.',
    personality: ['Introspective', 'Perfectionist', 'Enigmatic', 'Visionary'],
    birthdate: 'May 21',
    mbti: 'INFP',
    voiceType: 'Smooth tone / Controlled power',
    quote: 'Art is the collision of silence and noise. We are simply the medium.',
    aesthetic: 'Draped black silhouettes, raw leather, brushed chrome, industrial minimalist.',
    imageUrl: '/images/members/ren.png'
  },
  {
    id: 'lysander',
    name: 'Lysander Lee',
    role: 'Main Rapper & Performance Director',
    bio: 'A classically-trained vocalist turned avant-garde rapper, Lysander Lee brings razor-sharp kinetic energy to SYNRG. His flow is highly rhythmic and experimental, contrasting with a warm, conversational demeanor off-stage.',
    personality: ['Electric', 'Charismatic', 'Expressive', 'Philosophical'],
    birthplace: '-',
    birthdate: 'October 06',
    mbti: 'ENTJ',
    voiceType: 'Gravelly baritone flow / High-register belt',
    quote: 'Movement is the first language. Rhythm is the second. Everything else is translation.',
    aesthetic: 'Deconstructed tailoring, copper accent jewelry, raw linen, earthy warm undertones.',
    imageUrl: '/images/members/lysander.png'
  },
  {
    id: 'zee',
    name: 'Zee',
    role: 'Main Vocalist & Face of the Group',
    bio: 'The voice that defines its identity, captivating with a distinct tone and emotion. His presence shapes the signature sound that sets SYNRG apart.',
    personality: ['Observant', 'Analytical', 'Savant', 'Calm'],
    birthplace: '-',
    birthdate: 'September 30',
    mbti: 'ENFJ',
    voiceType: 'Expressive belt / Signature R&B runs',
    quote: 'Sound is space made audible. If you control the frequencies, you control the mood.',
    aesthetic: 'Sleek dark tech-wear, silver micro-accents, matte black, architectural structure.',
    imageUrl: '/images/members/zee.png'
  }
];

export const SONGS: Song[] = [
  {
    id: 'synrg-x-cover',
    title: 'X (CLOSE YOUR EYES)',
    type: 'Cover',
    releaseDate: 'June 08, 2026',
    description: 'Our debut improvised cover of "X", released for Rebelle\'s Cover Event: The Rebels. With raw, emotional, and deconstructed dual vocals by Ren Adanu, Lysander Lee, and Zee.',
    coverUrl: '/images/songs/synrg-x-cover.jpg',
    audioUrl: '/audio/synrg-x-cover.mp3',
    duration: '3:47',
    lyrics: `INTRO
[REN ADANU]
Hm-mm

([LYSANDER LEE] To the max, to the max, to the max)
Yeah hey

VERSE 1
[LYSANDER LEE]
Uh 손끝에 느껴지는 whiplash ([REN] Whiplash, yeah)
Uh sonkkeute neukkyeojineun whiplash ([REN] Whiplash, yeah)
Uh, the whiplash felt at my fingertips ([REN] Whiplash, yeah)

돌아봐 turning back, 남겨 놓은 trace (Mm-mm)
Dorabwa turning back, namgyeo noeun trace (Mm-mm)
Look back, turning back, the trace left behind (Mm-mm)

흔들리는 네 눈빛 (네 눈빛)
Heundeullineun ne nunbit (ne nunbit)
Your wavering eyes (your eyes)

그 속에 우릴 봐 꽤나 대담해 (Mm-mm)
Geu soge uril bwa kkwaena daedamhae (Mm-mm)
Look at us in them, quite bold (Mm-mm)

[ZEE]
Uh, uh, 어젠 이미 erased it (Erase it)
Uh, uh, eojen imi erased it (Erase it)
Uh, uh, yesterday is already erased it (Erase it)

No, no, 고민하지 마, face it
No, no, gominhaji ma, face it
No, no, don't overthink it, face it

[LYSANDER LEE]
I don't care 'bout any digits
멈춘듯한 minute, yeah, uno más (Ooh)
Meomchundeuthan minute, yeah, uno más (Ooh)
A minute that seems to have stopped, yeah, one more (Ooh)

[REN ADANU]
([LYSANDER LEE] Like four-five-eight) Yeah, got another gear

([LYSANDER LEE] 줘 계속, 더 배로) 만족은 이르니 (Oh)
([LYSANDER LEE] Jwo gyesok, deo baero) manjogeun ireuni (Oh)
([LYSANDER LEE] Give it more, double it) It's too early to be satisfied (Oh)

Way I move, 예측 못해
Way I move, yecheuk mothae
Way I move, you can't predict it

선명해진 순간 자유로운 paradigm, yeah
Seonmyeonghaejin sungan jayuroun paradigm, yeah
The moment it becomes clear, a free paradigm, yeah

PRE-CHORUS
[LYSANDER LEE]
망설임은 pass 나를 자극해
Mangseorimeun pass nareul jageukae
Hesitation is a pass, it stimulates me

그게 뭐 어때? Take that
Geuge mwo eottae? Take that
What's wrong with that? Take that

혼자만의 race, love it
Honjamanui race, love it
A race of my own, love it

Own my lane

CHORUS
[ZEE]
([LYSANDER LEE] To the max) Limit 없는 speed
([LYSANDER LEE] To the max) Limit eomneun speed
([LYSANDER LEE] To the max) Speed with no limit

([LYSANDER LEE] X, X, X) 오직 나만의
([LYSANDER LEE] X, X, X) ojik namanui
([LYSANDER LEE] X, X, X) Only my own

([LYSANDER LEE] To the max)맘을 따르지
([LYSANDER LEE] To the max) mameul ttareuji
([LYSANDER LEE] To the max) I follow my heart

Five, six, seven, eight, 깨뜨릴 때까지
Five, six, seven, eight, kkaetteuril ttaekkaji
Five, six, seven, eight, until I break it

[REN ADANU]
([LYSANDER LEE] Max) 휘청여도 돼
([LYSANDER LEE] Max) hwicheongyeodo dwae
([LYSANDER LEE] Max) It's okay to stumble

([LYSANDER LEE] X, X, X) 내겐 없는 shame (Yeah)
([LYSANDER LEE] X, X, X) naegen eomneun shame (Yeah)
([LYSANDER LEE] X, X, X) I have no shame (Yeah)

([LYSANDER LEE] To the max) Night and day, I'm blazing

Five, six, seven, eight, 깨뜨릴 때까지
Five, six, seven, eight, kkaetteuril ttaekkaji
Five, six, seven, eight, until I break it

POST-CHORUS
[ZEE]
I got me in that mood ([LYSANDER LEE] To the max)

[REN ADANU]
Got me in that mood, to the max
Got me in that mood, to the max ([ZEE] Got me in the mood)
Got me in that mood, got me in that mood, to the max ([ZEE] To, to the max)

VERSE 2
[REN ADANU]
Light it up, no doubt (Light it up, no doubt)
거침없는 move 눈빛은 roar
Geochimeomneun move nunbicheun roar
Unstoppable move, eyes roaring

꺼지지 않는 headlight
Kkeojiji anneun headlight
Headlights that don't turn off

타오르는 맘의 온도
Taoreuneun mamui ondo
The temperature of my burning heart

[ZEE]
낯선 감각을 느껴 ([LYSANDER LEE] 느껴)
Natseon gamgageul neukkyeo ([LYSANDER LEE] neukkyeo)
Feel the unfamiliar sensation ([LYSANDER LEE] feel it)

긴장감은 적당해, just drive
Ginjanggameun jeokdanghae, just drive
The tension is just right, just drive

Electric feel vibes
(Mm-mm) Oh, I'm on my way

PRE-CHORUS
[REN ADANU ↑ /LYSANDER LEE ↓ ]
망설임은 pass 나를 자극해
Mangseorimeun pass nareul jageukae
Hesitation is a pass, it stimulates me

그게 뭐 어때? Take that
Geuge mwo eottae? Take that
What's wrong with that? Take that

[LYSANDER LEE]
화려해지는 steppin' ([REN ADANU] Yeah)
Hwaryeohaejineun steppin' ([REN ADANU] Yeah)
Stepping gets more glamorous ([REN ADANU] Yeah)

That's my pace ([REN ADANU] That's my pace)

CHORUS
[ZEE]
([LYSANDER LEE] To the max) Limit 없는 speed ([REN ADANU] 없는 speed)
([LYSANDER LEE] To the max) Limit eomneun speed ([REN ADANU] eomneun speed)
([LYSANDER LEE] To the max) Speed with no limit ([REN ADANU] speed with no limit)

([LYSANDER LEE] X, X, X) 오직 나만의 ([REN ADANU] Oh, oh)
([LYSANDER LEE] X, X, X) ojik namanui ([REN ADANU] Oh, oh)
([LYSANDER LEE] X, X, X) Only my own ([REN ADANU] Oh, oh)

([LYSANDER LEE] To the max) 맘을 따르지 ([REN ADANU] To the max)
([LYSANDER LEE] To the max) mameul ttareuji ([REN ADANU] To the max)
([LYSANDER LEE] To the max) I follow my heart ([REN ADANU] To the max)

Five, six, seven, eight, 깨뜨릴 때까지 ([REN ADANU] Yeah, 깨뜨릴 때까지)
Five, six, seven, eight, kkaetteuril ttaekkaji ([REN ADANU] Yeah, kkaetteuril ttaekkaji)
Five, six, seven, eight, until I break it ([REN ADANU] Yeah, until I break it)

[REN ADANU]
([LYSANDER LEE] Max) 휘청여도 돼 ([ZEE] Ooh, ooh)
([LYSANDER LEE] Max) hwicheongyeodo dwae ([ZEE] Ooh, ooh)
([LYSANDER LEE] Max) It's okay to stumble ([ZEE] Ooh, ooh)

([LYSANDER LEE] X, X, X) 내겐 없는 shame ([ZEE] Yeah, yeah)
([LYSANDER LEE] X, X, X) naegen eomneun shame ([ZEE] Yeah, yeah)
([LYSANDER LEE] X, X, X) I have no shame ([ZEE] Yeah, yeah)

([LYSANDER LEE] To the max) Night and day, I'm blazing
To, to, to the max

INTERLUDE
{IMPROV - RAP IMPROVE BY LYSANDER LEE (HARMS ZEE)}
[LYSANDER LEE]’
Shh..
Open your eyes
Shifting up the gear, no fear, better recognize
시선들은 ignore, piercing through the flashing lights
Siseondeureun ignore, piercing through the flashing lights
Ignore the gazes, piercing through the flashing lights
Flowing like a river but we hitting like a wave
Every step is calculated, look at the path we pave

I ain't gonna stop, 남들과는 다르게
I ain't gonna stop, namdeulgwaneun dareuge
I ain't gonna stop, unlike the others

We just making to the top, 피어나는 energy
We just making to the top, pieonaneun energy
We just making to the top, blooming energy

No stress, no doubt, we're breaking out the cage

좀 더 높이, yeah, we flipping a new page
Jom deo nopi, yeah, we flipping a new page
A little higher, yeah, we flipping a new page

To the max, taking flight, crossing over every line

Never looking back, 'cause it's 우리만의 time
Never looking back, 'cause it's urimanui time
Never looking back, 'cause it's our own time

Watch me elevate, SYNRG never gon' deflate
Now let me set the pace...

BRIDGE
[ZEE]
Trap 따위는 받아들여
Trap ttawineun badadeullyeo
I accept things like traps

평범함은 skip it, focus on mine
Pyeongbeomhameun skip it, focus on mine
Skip the ordinary, focus on mine

[REN ADANU]
내가 딛는 모든 곳이 출발선
Naega dinneun modeun gosi chulbalseon
Everywhere I step is a starting line

가득 품은 ambition
Gadeuk pumeun ambition
Ambition I've fully embraced

Who knew? That's my groove, groove, like a vroom, vroom

가늠할 수 없는 나의 heartbeat
Ganeumhal su eomneun naui heartbeat
My unfathomable heartbeat

CHORUS
[ZEE]
([LYSANDER LEE] To the max) Limit 없는 speed
([LYSANDER LEE] To the max) Limit eomneun speed
([LYSANDER LEE] To the max) Speed with no limit

([LYSANDER LEE] X, X, X) 오직 나만의
([LYSANDER LEE] X, X, X) ojik namanui
([LYSANDER LEE] X, X, X) Only my own

([LYSANDER LEE] To the max)맘을 따르지
([LYSANDER LEE] To the max) mameul ttareuji
([LYSANDER LEE] To the max) I follow my heart

[ZEE/REN ADANU]
Five, six, seven, eight, 깨뜨릴 때까지
Five, six, seven, eight, kkaetteuril ttaekkaji
Five, six, seven, eight, until I break it

[REN ADANU]
([LYSANDER LEE] Max) 휘청여도 돼 ([ZEE] Hoo)
([LYSANDER LEE] Max) hwicheongyeodo dwae ([ZEE] Hoo)
([LYSANDER LEE] Max) It's okay to stumble ([ZEE] Hoo)

([LYSANDER LEE] X, X, X) 내겐 없는 shame ([ZEE] 없는 shame; Yeah, yeah )
([LYSANDER LEE] X, X, X) naegen eomneun shame ([ZEE] eomneun shame; Yeah, yeah )
([LYSANDER LEE] X, X, X) I have no shame ([ZEE] no shame; Yeah, yeah )

([LYSANDER LEE] To the max) Night and day, I'm blazing

Five, six, seven, eight, 깨뜨릴 때까지
Five, six, seven, eight, kkaetteuril ttaekkaji
Five, six, seven, eight, until I break it

POST-CHORUS
[ZEE]
I got me in that mood ([REN] Oh yeah, 깨뜨릴 때까지)
I got me in that mood ([REN] Oh yeah, kkaetteuril ttaekkaji)
I got me in that mood ([REN] Oh yeah, until I break it)

[REN ADANU]
Five, six, seven, eight, 깨뜨릴 때까지
Five, six, seven, eight, kkaetteuril ttaekkaji
Five, six, seven, eight, until I break it

[ZEE]
Hm, yeah, hm, I got me in that mood

[LYSANDER LEE]
To the max, to the max, to the max, 깨뜨릴 때까지
To the max, to the max, to the max, kkaetteuril ttaekkaji
To the max, to the max, to the max, until I break it`
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'cert-1',
    title: 'The Rebels - Top 1 Male at REBELLE\'s 1ST Anniversary Event 2026',
    category: 'Competition',
    imageUrl: '/images/gallery/synrg-top-1.jpg',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 'cert-2',
    title: 'The Rebels - Audience Choice Award at REBELLE\'s 1ST Anniversary Event 2026',
    category: 'Competition',
    imageUrl: '/images/gallery/synrg-audience-choice.jpg',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 'cert-3',
    title: 'The Rebels - Best Audio Award at REBELLE\'s 1ST Anniversary Event 2026',
    category: 'Competition',
    imageUrl: '/images/gallery/synrg-best-audio.jpg',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 'cert-4',
    title: 'The Rebels - Outstanding Performance Award at REBELLE\'s 1ST Anniversary Event 2026',
    category: 'Competition',
    imageUrl: '/images/gallery/synrg-outstanding.jpg',
    aspectRatio: 'aspect-[4/3]'
  },
  {
    id: 'cert-5',
    title: 'The Rebels - Creative Rebel Award at REBELLE\'s 1ST Anniversary Event 2026',
    category: 'Competition',
    imageUrl: '/images/gallery/synrg-creative-rebel.jpg',
    aspectRatio: 'aspect-[4/3]'
  }
];

export const NEWS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'SYNRG Releases "X" by CLOSE YOUR EYES Debut Cover on YouTube',
    date: 'June 08, 2026',
    category: 'Event',
    summary: 'Our official debut cover performance of "X" by CLOSE YOUR EYES is now live on YouTube. Watch the atmospheric live session now.',
    isImportant: true
  },
];

export const STORY_CONTENT = {
  formation: 'SYNRG was formed in 2026 in Jakarta, Indonesia. Emerging as a specialized audio-visual music group, the three members combined their distinct talents—Ren\'s haunting vocals, Lysander\'s sharp kinetic performance direction, and Zee\'s progressive sound design—to craft a high-fidelity collective dedicated to reimagining modern music.',
  concept: 'The collective operates on the core concept of "Audio-Visual Alchemy," focusing predominantly on high-concept musical covers. We specialize in taking well-known classic and contemporary tracks and completely reconstructing them into our signature moody, electronic, and cinematic soundscapes. While our current focus is primarily as a cover song group, we are also actively developing our own original material.',
  philosophy: 'The name "SYNRG" represents the perfect synthesis of Synergy and Energy, with the omitted vowels highlighting our commitment to minimalist perfection. By focusing heavily on curated covers, we pay homage to our major musical inspirations while simultaneously building the sonic foundation for our upcoming original singles. We are a synchronized artistic current.',
  lore: 'Written by Ren Adanu. In 2148, three teenagers from different walks of life are thrown decades back in time by a catastrophic explosion at the Chronos Gate research facility. Armed with dark knowledge of the future, they form a secret underground alliance named SYNRG to alter history—only to realize that rewriting time carries dangerous, unforeseen consequences.'
};

export interface LoreChapter {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface LoreData {
  title: string;
  author: string;
  chapters: LoreChapter[];
}

export const FULL_LORE: LoreData = {
  title: "SYNRG’S LORE",
  author: "REN ADANU",
  chapters: [
    {
      id: "collapse",
      title: "I. The Collapse (2148)",
      paragraphs: [
        "In the year 2148, the world had lost the form once known as “normal.” Cities lay in a state of semi-ruin, filled with damaged buildings and news screens constantly broadcasting casualty figures from various regions. The air felt heavy with dust and industrial smoke. People lived with a fear so commonplace that it eventually felt like a part of everyday life.",
        "Children grow up without truly understanding what the world was like before the collapse began.",
        "In those days, people no longer hoped the Earth could be saved. They only hoped to survive a little longer."
      ]
    },
    {
      id: "teenagers",
      title: "II. Three Paths Cross",
      paragraphs: [
        "In the midst of such a world, three teenagers are brought together by a coincidence they never fully understood. They come from completely different lives.",
        "The first lived alone in the lower district after losing his family in the food riots several years earlier. The second had been a government prisoner for leaking data on illegal experiments conducted by one of the world’s largest tech companies. The last grew up in an elite environment and, for years, was forced to watch as those in power slowly destroyed the world to maintain their own grip on power.",
        "They never really got along from the start. Their meeting felt more like a group of desperate people who just happened to be in the same place at the wrong time."
      ]
    },
    {
      id: "chronos",
      title: "III. The Chronos Gate Incident",
      paragraphs: [
        "That night, the Chronos Gate research facility was in chaos. Alarms were blaring throughout the building, scientists were running about, and explosions could be heard from several floors below. No one knew for sure what was happening, except for one rumor circulating among the workers: the time-travel project had finally succeeded.",
        "The three teenagers were there for different reasons. One wanted to steal data, another was looking for someone, and the third was simply trying to escape from the authorities. But before they could get out of the facility, a massive explosion struck the entire building.",
        "The power went out. The room shook violently. And for a moment, the world felt as though it had stopped moving."
      ]
    },
    {
      id: "arrival",
      title: "IV. A Sky of Bright Blue",
      paragraphs: [
        "When they opened their eyes again, everything had changed. There were no sirens. No smell of smoke. No red sky that had always filled their world. The sky above them was bright blue.",
        "They stood in the middle of a city that was both foreign and familiar. The streets were filled with vehicles far older than any they had known. People walked leisurely without air masks or weapons in their hands.",
        "Until finally, one of them noticed the date on the screen of a bus stop. At first, they thought it was impossible. But the longer they lived in that time, the more they realized they had truly returned to decades before the world collapsed."
      ]
    },
    {
      id: "alliance",
      title: "V. The Secret Alliance",
      paragraphs: [
        "At first, they tried to live their own lives. Hiding. Surviving. Trying to understand what was really happening. But the past turned out to be far from as simple as they had imagined.",
        "They knew too much about the future. They knew which companies would eventually spark a major war. They knew which experiments would cause millions of deaths. They knew the key figures who would later lead the world to ruin. And knowing all that made it impossible for them to pretend to be ordinary people.",
        "Their small gatherings slowly turned into a secret alliance. They called themselves SYNRG."
      ]
    },
    {
      id: "consequences",
      title: "VI. Unintended Consequences",
      paragraphs: [
        "There was no noble purpose at first. They just wanted to prevent their own world from coming into existence. But the further they tried to change the future, the more they realized that every action has consequences that are never simple.",
        "They managed to prevent some events. But others actually turned out even worse. And little by little, people began to notice their existence."
      ]
    },
    {
      id: "accused",
      title: "VII. The Underground",
      paragraphs: [
        "Rumors about three mysterious young people began to spread online after several major incidents strangely failed to occur. Some claimed to have seen them in different locations at nearly the same time. Others believed they were involved in various acts of sabotage against companies and government projects.",
        "The media began calling them a dangerous underground group. Some people believed SYNRG was just a bunch of young criminals. Others began to view them as a cult trying to change the world order.",
        "Without realizing it, more and more parties began hunting them down. Yet behind all those accusations, they were just three kids who never actually asked to shoulder the fate of the world on their shoulders."
      ]
    }
  ]
};
