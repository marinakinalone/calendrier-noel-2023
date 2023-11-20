interface ICalendarJazzItem {
  day: number
  description: string
  links: {
    youtube: string
    deezer?: string
    spotify?: string
  }
}

const calendarJazzInfo = [
  {
    day: 1,
    description: `Bienvenue dans le calendrier de l'avent jazzy de Marina Kinalone. Chaque jour, un nouveau morceau de musique pour vous accompagner jusqu'à Noël. Joyeuses fêtes !`,
    links: {
      youtube: 'https://www.youtube.com/watch?v=oQqSg4VhZ_E&ab_channel=StaceyKent-Topic',
      deezer: 'https://deezer.page.link/eP4RYNgyAUmGAWWy7',
      spotify: 'https://open.spotify.com/track/3aLl9YbZI3OusU7znsPhNv?si=79e68511ac594c19',
    },
  },
  {
    day: 2,
    description: `J'ai un jour pris le train avec mon petit chat Stormy et j'ai une vidéo de ce moment. Stormy est sur mes genoux en train de regarder le paysage enneigé défiler à travers la fenêtre. En fond sonore, ce duo tout mignon. À chaque fois que je l'entends, je repense à ce voyage en train...`,
    links: {
      youtube: 'https://www.youtube.com/watch?v=JZtIF0wpi5g&ab_channel=Laufey',
      deezer: 'https://deezer.page.link/SUriNMw2pCUgZEnk9',
      spotify: 'https://open.spotify.com/track/3bq7dXN7arTdaq8mmKXxob?si=b897cfe59b1a4d0d',
    },
  },
  {
    day: 3,
    description: `Ma dernière obsession musicale. Je n'ai pourtant pas vu le film ! Mon seul regret est que c'est bien trop court !`,
    links: {
      youtube: 'https://www.youtube.com/watch?v=igm0qLWkxUc&ab_channel=FabriceLecomte-Topic',
      deezer: 'https://deezer.page.link/v9waQ2CieJcDGL14A',
      spotify: 'https://open.spotify.com/track/5td1HlRkYwRwtfutbhjDp6?si=af60136771bd4027',
    },
  },
  {
    day: 4,
    description: `"Petits moments, grandes émotions." De temps en temps, la radio me fait découvrir quelques pépites pas (encore) connues du grand public. C'est le cas avec ce groupe géorgien qui n'existe même pas sur Deezer.`,
    links: {
      youtube:
        'https://www.youtube.com/watch?v=SFHToaOC0cE&ab_channel=NiniNutsubdayze%2CJanngo%26GiorgiGigashvili-Topic',
      spotify: 'https://open.spotify.com/track/2nYBCtR4qTDDFtxkwbCddY?si=263388c442444630',
    },
  },
  {
    day: 5,
    description: ``,
    links: {
      youtube: 'https://www.youtube.com/watch?v=ilNEqmfUyzI&ab_channel=COLORS',
      deezer: 'https://deezer.page.link/PEzZzFXg5WyKZgEV8',
      spotify: 'https://open.spotify.com/track/0vMctOnb4YNIvbqgkbWNDy?si=4a696219ffea49e3',
    },
  },
  {
    day: 6,
    description: ``,
    links: {
      youtube: 'https://www.youtube.com/watch?v=GF_NDRM3498&ab_channel=Tataeivoiolla',
      deezer: 'https://deezer.page.link/gEtf2LsZtjYCXnVn8',
      spotify: 'https://open.spotify.com/track/5gBWGTO2prExy9yVwhUbOU?si=6b6632b2dda34e04',
    },
  },
  {
    day: 7,
    description: `Un crooner pour Noël, mais d'origine Norvégienne s'il vous plaît !`,
    links: {
      youtube: 'https://www.youtube.com/watch?v=jMwvb0FymoE&ab_channel=TrondHaugmark-Topic',
      deezer: 'https://deezer.page.link/XFh44XdZGiykkcNz6',
      spotify: 'https://open.spotify.com/track/0Vj81CYipA2ZMsGkQj3TON?si=02f1b95ce32f4f45',
    },
  },
  {
    day: 8,
    description: ``,
    links: {
      youtube: 'https://www.youtube.com/watch?v=v5jr4ymrFpE&ab_channel=AmandaGinsburg-Topic',
      deezer: 'https://deezer.page.link/Qgq14AiJY9rC6P2w6',
      spotify: 'https://open.spotify.com/track/3orVKZwCVOs58WVMumf1NP?si=bb49cb6a85c747e0',
    },
  },
  {
    day: 9,
    description: `Quand Nöel approche, j'ai une folle envie de danser le lindy hop. Il y a quelque chose dans le swing qui me rappelle l'ambiance des fêtes de fin d'année. Alors aujourd'hui, ça va swinguer un petit peu! PS: la vdayéo est adorable !`,
    links: {
      youtube: 'https://www.youtube.com/watch?v=m2T7WI4CI4Y&ab_channel=Rachael%26Vilray',
      deezer: 'https://deezer.page.link/LUaGo8ZNqjLMzoKCA',
      spotify: 'https://open.spotify.com/track/0pVUyPxZk9qYINtd0nsWhG?si=e965752cd1f84028',
    },
  },
  {
    day: 10,
    description: ``,
    links: {
      youtube: 'https://www.youtube.com/watch?v=6gfLU2AELlY&ab_channel=StaceyKentMusic',
      deezer: 'https://deezer.page.link/ZCgBB84Y2W1wmhZd9',
      spotify: 'https://open.spotify.com/track/5GDMoDTI2iqYlykNq5hw6l?si=64b9b3b4a5054118',
    },
  },
  {
    day: 11,
    description: `Ce morceau est pour vous si vous aimez les harmonies vintage et le ukulélé !`,
    links: {
      youtube: 'https://www.youtube.com/watch?v=FWKaqhEurY4&ab_channel=CharliePeacock',
      deezer: 'ttps://deezer.page.link/UY6r6mbk3vTERLt77',
      spotify: 'https://open.spotify.com/track/1sJnKCMOkGvcRPes8Tln2x?si=a80c6cc4b3684ed6',
    },
  },
  {
    day: 12,
    description: `loose`,
    links: {
      youtube: 'https://www.youtube.com/watch?v=EFEh0npHExw&ab_channel=%2aHarbrow%2a',
      deezer: 'https://deezer.page.link/vEEPFoASAub9hmZcA',
      spotify: 'https://open.spotify.com/track/59acp1OhcvxwVBwQJBYKuX?si=a1f8d6b5684d4e19',
    },
  },
  {
    day: 13,
    description: `Spotify a une fonctionalité qui permet de générer des playlists se basant sur les goûts musicaux qu'ont en commun un groupe de personnes. J'ai une playlist commune avec mes meilleures amies des quatre coins du monde et c'est la bossa nova qui met tout le monde d'accord !`,
    links: {
      youtube: 'https://www.youtube.com/watch?v=2RCnbOzCj1I&ab_channel=jonjonjon',
      deezer: 'https://deezer.page.link/SgP27aVP7k7tRj4h7',
      spotify: 'https://open.spotify.com/track/3JbZ8W2aFTIEP6EdayBlN38?si=5a086d86914a44a2',
    },
  },
  {
    day: 14,
    description: `https://deezer.page.link/NovdWnBNbysNjgMq7`,
    links: {
      youtube: 'https://www.youtube.com/watch?v=7UyMjlNDBlg&ab_channel=StaceyKent-Topic',
      deezer: 'https://deezer.page.link/NovdWnBNbysNjgMq7',
      spotify: 'https://open.spotify.com/track/4zuEST1RluOFMupcKNvM2m?si=4024d79e881b4778',
    },
  },
  {
    day: 15,
    description: `Même morceau qu'hier... mais en français !`,
    links: {
      youtube: 'https://www.youtube.com/watch?v=c7_QZOG_mgg&ab_channel=CarolWelsman-Topic',
      deezer: 'https://deezer.page.link/ETWevBnDupDJCmYR9',
      spotify: 'https://open.spotify.com/track/3xzjWsVxspvyGefnsPlUn9?si=7ca7df4c1d3a45b2',
    },
  },
  {
    day: 16,
    description: `Mon coup de coeur de l'année 2023 en jazz vocal. Je vous recommande de suivre le lien YouTube pour voir la version live. Cette chanteuse est époustouflante (et elle n'a que vingt-quatre ans) !`,
    links: {
      youtube: 'https://www.youtube.com/watch?v=Dzdwk2D0rh4&ab_channel=SamaraJoyVEVO',
      deezer: 'https://deezer.page.link/STdsGxXo7VqkqsB37',
      spotify: 'https://open.spotify.com/track/0HW2RKF80cPR9mnN5T5Rum?si=18e6057b895c490c',
    },
  },
  {
    day: 17,
    description: ``,
    links: {
      youtube: 'https://www.youtube.com/watch?v=qndrrfdmPIA&ab_channel=MelodyGardot',
      deezer: 'https://deezer.page.link/YV8VfsDqxu8tSPLZ8',
      spotify: 'https://open.spotify.com/track/3fkoZm1DZEfsyAx1Z87bKR?si=89b0fa2514f340a9',
    },
  },
  {
    day: 18,
    description: ``,
    links: {
      youtube: 'https://www.youtube.com/watch?v=52X-sFY2drA&ab_channel=LauraMisch',
      deezer: 'https://deezer.page.link/BM422eeRcuDx5YL58',
      spotify: 'https://open.spotify.com/track/19OYmVAI2mdkbAj1dW0DYd?si=edff0047c97c4b1d',
    },
  },
  {
    day: 19,
    description: ``,
    links: {
      youtube: 'https://www.youtube.com/watch?v=NSRQUlPhqZo&ab_channel=LELY',
      deezer: 'https://deezer.page.link/uwa8RkkDxBFGhN5g8',
      spotify: 'https://open.spotify.com/track/3HMuJG1y7pyjg7Rrk17Rsb?si=fa0a8059d29a4d15',
    },
  },
  {
    day: 20,
    description: `Un morceau qui réchauffe le coeur. Je vous ai partagé la version live (suivez le lien YouTube)... magique !`,
    links: {
      youtube: 'https://www.youtube.com/watch?v=0zWnPCqUjjg&ab_channel=SamaraJoyVEVO',
      deezer: 'https://deezer.page.link/MHTbGFGhqGEP2gnx5',
      spotify: 'https://open.spotify.com/track/4iZUPqpbdr4cI8OOzlKKqR?si=ddb2e61c6b474a97',
    },
  },
  {
    day: 21,
    description: `Une chanson  qui passait à la radio lorsque les premières neiges sont tombées à Stockholm. C’est officiellement l’hiver aujourd’hui !`,
    links: {
      youtube: 'https://www.youtube.com/watch?v=LC7gVvI6Bts&ab_channel=AlJarreau-Topic',
      deezer: 'https://deezer.page.link/y9feg2B7paRKTyHR8',
      spotify: 'https://open.spotify.com/track/3ZcjoGgMAZspOswkAcMcgk?si=e9e8d70ae8434022',
    },
  },
  {
    day: 22,
    description: `Si je vous dis musicien un peu loufoque, qui s’est fait connaître grâce à ses vdayéos sur YouTube dans lesquelles il joue d’une vingtaine d’instruments, et qui manie les harmonies comme personne, à qui pensez-vous ?`,
    links: {
      youtube: 'https://www.youtube.com/watch?v=o9CusMKhoqk&ab_channel=JacobCollier',
      deezer: 'https://deezer.page.link/fWs1qAfBx64rx4WN8',
      spotify: 'https://open.spotify.com/track/4azpxOozyGBpqBZ9OlC9L2?si=83f91f09eb2a4b5e',
    },
  },
  {
    day: 23,
    description: `Les crooners de type “Michael Bublé” ont toujours la côte à Noël. J’ai tenté de trouver un peu plus original cette année. Saviez-vous que crooner en suédois se dit “smörsångare”, autrement dit “chanteur de beurre” ?  `,
    links: {
      youtube: 'https://www.youtube.com/watch?v=BHsmQYSsZJw&ab_channel=Release-Topic',
      deezer: 'https://deezer.page.link/bHNkDKGxUyqd3Hbs7',
      spotify: 'https://open.spotify.com/track/3ocQIXRqydJZNhJfMbKnEQ?si=abb70b193ca340f8',
    },
  },
  {
    day: 24,
    description: `Un réveillon en valsant avec la douce Laufey… “It's that time of year when the world falls in love. Every song you hear seems to say Merry Christmas, may your New Year dreams come true.” [C'est cette période de l'année où le monde tombe amoureux. Chaque chanson que vous entendez semble dire Joyeux Noël, que vos rêves du Nouvel An se réalisent.] Tout est dit !  Joyeuses fêtes de fin d’année !`,
    links: {
      youtube: 'https://www.youtube.com/watch?v=X_-2hYo_iCk&ab_channel=Laufey',
      deezer: 'https://deezer.page.link/c8hSUvjgcf1E27bY8',
      spotify: 'https://open.spotify.com/track/4eEdv0ZBTtWh8zS41SeUp8?si=1ba0d9e3870c4e85',
    },
  },
] as ICalendarJazzItem[]

export default calendarJazzInfo
