import { ICalendarData } from './calendarData'

const inspiredCalendarInfo = [
  {
    day: 1,
    id: 0,
    christmas: 'D',
    description: `Welcome to this lil' advent calendar! Every day, you'll find a new link to something I've found inspiring, interesting, or just plain fun. I hope you enjoy it! I'm kicking off today with a Swedish band. I lied when I said that I only knew Abba and Ikea when I arrived in Sweden two years ago. One third thing I knew was that Sweden has fun drummers and they even break into your house to perform!`,
    palette: {
      color1: 'rgb(244, 226, 207)',
      color2: 'rgb(232, 193, 167)',
    },
    links: { youtube: 'https://www.youtube.com/watch?v=VNwNsHpoRvc' },
  },
  {
    day: 2,
    id: 19,
    christmas: '3',
    description: `Delicious 'internet 2000' aesthetics for some really good content. For your daily dose of space, powered by NASA. A little reminder to look up at the stars and remember that we're all just tiny specks in the universe.`,
    palette: {
      color1: 'rgb(243, 210, 119)',
      color2: 'rgb(244, 227, 205)',
    },
    links: { website: 'https://apod.nasa.gov/apod/astropix.html' },
  },
  {
    day: 3,
    id: 8,
    christmas: 'N',
    description:
      'The most amusing text editor: utterly useless, but a blast for snobby jazz lovers like me.',
    palette: {
      color1: 'rgb(219, 120, 87)',
      color2: 'rgb(197, 137, 75)',
    },
    links: { website: 'https://jazzkeys.plan8.co/' },
  },
  {
    day: 4,
    id: 17,
    christmas: '0',
    description: `Meet Elizabeth Filips, one of my productivity gurus, sharing tips and embracing the chaos of motivation. She has YouTube videos and a really cool newsletter. I picked that one to remember that it's okay (and encouraged!) to start reading multiple books at once!`,
    palette: {
      color1: 'rgb(221, 120, 111)',
      color2: 'rgb(217, 220, 219)',
    },
    links: {
      website: 'https://www.elizabethfilips.com/post/the-best-reading-skill-no-one-ever-taught-you',
    },
  },
  {
    day: 5,
    id: 3,
    christmas: 'X',
    description: `80 000 hours. That's how much time we spend working in our lives. This website is a great resource to help you find a career that will make a difference. I'm not sure what to do with all those pieces of information yet, but at least, it gets to make me think about what I want to achieve with my professional career. Hope it gives you some food for thought too!`,
    palette: {
      color1: 'rgb(185, 206, 201)',
      color2: 'rgb(135, 172, 171)',
    },
    links: { website: 'https://80000hours.org/' },
  },
  {
    day: 6,
    id: 11,
    christmas: 'L',
    description:
      'Meet one of my favorite developers known for crafting simple yet super creative games and websites that spark joy and curiosity. This one is a fun way to experience what it is to have an almost infinite amount of money. Fun. Scary.',
    palette: {
      color1: 'rgb(220, 119, 110)',
      color2: 'rgb(216, 188, 191)',
    },
    links: { website: 'https://neal.fun/spend/' },
  },
  {
    day: 7,
    id: 22,
    christmas: '♡',
    description: `Unveiling my not-so-secret cookbook filled with favorite recipes. Mostly vegetarian, in Frenglish. Featuring 'the' Västerbottenost paj.`,
    palette: {
      color1: 'rgb(243, 174, 122)',
      color2: 'rgb(217, 220, 219)',
    },
    links: {
      website: 'https://marinakinalone.notion.site/Cookbook-78ac7804d20c4847b4968008300ab1ec',
    },
  },
  {
    day: 8,
    id: 4,
    christmas: '♡',
    description: `Upon arriving in Sweden, my quest for organic and local food stores was a challenge. Here is a city guide for a more sustainable Stockholm, to stay positive and hopeful!`,
    palette: {
      color1: 'rgb(232, 193, 167)',
      color2: 'rgb(219, 120, 87)',
    },
    links: { website: 'https://zerowastestockholm.org/projects/city-guide' },
  },
  {
    day: 9,
    id: 9,
    christmas: 'O',
    description: `Discover Freya Holmér, a Sweden-based developer passionate about mathematics. The animations are beautiful, and the explanations are clear. I'm a big fan!`,
    palette: {
      color1: 'rgb(255, 215, 194)',
      color2: 'rgb(252, 186, 167)',
    },
    links: { youtube: 'https://www.youtube.com/watch?v=aVwxzDHniEw&ab_channel=FreyaHolm%C3%A9r' },
  },
  {
    day: 10,
    id: 18,
    christmas: '2',
    description: `I don't believe in astrology, but I adore reading this horoscope every week. Rob Brezsny's witty and poetic forecasts make philosophy accessible to all.`,
    palette: {
      color1: 'rgb(122, 140, 104)',
      color2: 'rgb(243, 174, 122)',
    },
    links: { website: 'https://freewillastrology.com/horoscopes/allsigns' },
  },
  {
    day: 11,
    id: 7,
    christmas: '♥',
    description: `During crises, people dance, and social dances evolve the most in tumultuous times. Did you know that Stockholm became the new capital of Lindy Hop by making that dance famous again? Here is one of the most famous (and oldest) videos of the dance, to get you in the mood!`,
    palette: {
      color1: 'rgb(135, 172, 171)',
      color2: 'rgb(220, 119, 110)',
    },
    links: { youtube: 'https://www.youtube.com/watch?v=qzc7vY9VTnk&ab_channel=BlackPepperSwing' },
  },
  {
    day: 12,
    id: 16,
    christmas: '2',
    description: `Play is one of the most efficient ways of learning and I believe we should all play more, especially at work. I managed to grasp some difficult CSS concepts thanks to games, and that's quite an achievement. Here is a small game to understand the importance of accessibility in digital products. It's a bit frustrating, but it's a good reminder that we should all be more inclusive in our designs.`,
    palette: {
      color1: 'rgb(241, 184, 158)',
      color2: 'rgb(160, 181, 181)',
    },
    links: { website: 'https://games.de.torontomu.ca/amaze/#/' },
  },
  {
    day: 13,
    id: 13,
    christmas: '♡',
    description: `I don't often listen to podcasts because I find it hard to focus, but this one is a gem. All the conspiracy theories, as if they were true in the fictional town of Night Vale. Very immersive and fun!`,
    palette: {
      color1: 'rgb(252, 186, 167)',
      color2: 'rgb(221, 120, 111)',
    },
    links: { spotify: 'https://open.spotify.com/show/0s6Wc5qf8SIvCtKZNC6N7s?si=a16c880f65fb4d69' },
  },
  {
    day: 14,
    id: 23,
    christmas: '♥',
    description:
      'An interesting indie game to understand anxiety and how to deal with it. AYet another proof that games can be a powerful tool to understand complex concepts and to grow personally.',
    palette: {
      color1: 'rgb(244, 227, 205)',
      color2: 'rgb(220, 119, 110)',
    },
    links: { website: 'https://ncase.me/anxiety/' },
  },
  {
    day: 15,
    id: 1,
    christmas: 'O',
    description: `To unleash the painter in you! The other 'paint toys' are worth a try too!`,
    palette: {
      color1: 'rgb(243, 174, 122)',
      color2: 'rgb(217, 142, 110)',
    },
    links: { website: 'https://mondrianandme.com/' },
  },
  {
    day: 16,
    id: 10,
    christmas: 'Ë',
    description: `My very first coding project! I'm a big fan of the manga and wanted to create an application that wouldn't be the cliché of the coding newbie (think weather app, calculator, etc.). This project even got me a job in a big marketing agency! A reminder to stay true to ourselves and to our passions...`,
    palette: {
      color1: 'rgb(242, 209, 118)',
      color2: 'rgb(186, 171, 110)',
    },
    links: { website: 'https://sailor-moon-quote-machine.vercel.app/' },
  },
  {
    day: 17,
    id: 6,
    christmas: '♡',
    description: `Another website I like to browse when I need a break. The execution is beautifully done, and I'm grateful for all the people who were willing to share a bit of their lives. It's also a great way to travel without leaving your home.`,
    palette: {
      color1: 'rgb(216, 188, 191)',
      color2: 'rgb(242, 209, 118)',
    },
    links: { website: 'https://www.window-swap.com/' },
  },
  {
    day: 18,
    id: 15,
    christmas: '♡',
    description: `A bit of a long read to explore the concept of social fictions and the role of aesthetics in shaping and reinforcing these narratives. An incentive to be present in the world that surrounds us and to question the stories being told to us.`,
    palette: {
      color1: 'rgb(216, 188, 191)',
      color2: 'rgb(243, 210, 119)',
    },
    links: { website: 'https://www.doc.cc/articles/the-aesthetics-of-our-new-fictions' },
  },
  {
    day: 19,
    id: 20,
    christmas: '♡',
    description: `I love, love watching how people decorate their homes (in a non-creepy way). Escape the Scandinavian ultra-classical white 'color' with new ideas from a website I enjoy browsing for relaxation and inspiration.`,
    palette: {
      color1: 'rgb(160, 181, 181)',
      color2: 'rgb(182, 182, 141)',
    },
    links: { website: 'https://www.apartmenttherapy.com/' },
  },
  {
    day: 20,
    id: 12,
    christmas: '♥',
    description: `A fun questionnaire to find out which social dance you should try. One of my first coding projects, not to take so seriously but that can give a little bit of inspiration if you want to try something new someday!`,
    palette: {
      color1: 'rgb(197, 137, 75)',
      color2: 'rgb(241, 184, 158)',
    },
    links: { website: 'https://la-la-dance.vercel.app/' },
  },
  {
    day: 21,
    id: 5,
    christmas: '♡',
    description: `Every week, I receive his newsletter, and while I don't always agree with everything he writes, it has helped me question our society's rules and think outside the box. This article is a good example of that.`,
    palette: {
      color1: 'rgb(217, 142, 110)',
      color2: 'rgb(255, 215, 194)',
    },
    links: { website: 'https://chrisguillebeau.com/36-ways' },
  },
  {
    day: 22,
    id: 14,
    christmas: '♡',
    description:
      'Of the importance of UX design and how design rules our digital world. Frustrating, but eye-opening experience!',
    palette: {
      color1: 'rgb(186, 171, 110)',
      color2: 'rgb(122, 140, 104)',
    },
    links: { website: 'https://userinyerface.com/' },
  },
  {
    day: 23,
    id: 2,
    christmas: 'U',
    description: `As we approach the end of the year, I love to reflect on my life choices and goals. It might sound a bit cliché to use some New Year resolutions, and yet, I believe it's good to take advantage of the positive energy that comes with the new year to set some intentions. Here is an inspiring speech to help with introspection.`,
    palette: {
      color1: 'rgb(235, 207, 198)',
      color2: 'rgb(216, 188, 191)',
    },
    links: { website: 'https://www.speech.almeida.co.uk/edith-sampson' },
  },
  {
    day: 24,
    id: 21,
    christmas: '♡',
    description: `The best podcast with Neil deGrasse Tyson I've come across. Very intimate and eye-opening. I love how he talks about his childhood and how he became an astrophysicist. Something to listen to while entering the new year for inspiration, hope, curiosity, and for remembering that we're all special because we're made of stars. Merry Christmas <3`,
    palette: {
      color1: 'rgb(217, 220, 219)',
      color2: 'rgb(212, 177, 86)',
    },
    links: { website: 'https://youtu.be/_yZiNnQftxU?feature=shared' },
  },
] as ICalendarData[]

export default inspiredCalendarInfo
