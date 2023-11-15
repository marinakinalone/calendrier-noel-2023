interface ICalendarJazzItem {
  id: number
  description: string
  links: {
    youtube: string
    deezer?: string
    spotify?: string
  }
}

const calendarJazzInfo = [
  {
    id: 0,
    description: `Bienvenue dans le calendrier de l'avent jazzy de Marina Kinalone. Chaque jour, une nouveau morceau de musique pour vous accompagner jusqu'à Noël. Joyeuses fêtes !`,
    links: {
      youtube: 'https://www.youtube.com/watch?v=oQqSg4VhZ_E&ab_channel=StaceyKent-Topic',
      deezer: 'jazz-link-0',
      spotify: 'https://open.spotify.com/track/3aLl9YbZI3OusU7znsPhNv?si=79e68511ac594c19',
    },
  },
  {
    id: 1,
    description: `J'ai un jour pris le train avec mon petit chat Stormy et j'ai une vidéo de ce moment. Stormy est sur mes genoux en train de regarder le paysage enneigé défiler à travers la fenêtre. En fond sonore, ce duo tout mignon. À chaque fois que je l'entends, je repense à ce voyage en train...`,
    links: {
      youtube: 'https://www.youtube.com/watch?v=JZtIF0wpi5g&ab_channel=Laufey',
      deezer: 'jazz-link-0',
      spotify: 'https://open.spotify.com/track/3bq7dXN7arTdaq8mmKXxob?si=b897cfe59b1a4d0d',
    },
  },
  {
    id: 2,
    description: `Ma dernière obsession musicale. Je n'ai pourtant pas vu le film ! Mon seul regret est que c'est bien trop court !`,
    links: {
      youtube: 'https://www.youtube.com/watch?v=igm0qLWkxUc&ab_channel=FabriceLecomte-Topic',
      deezer: 'jazz-link-2',
      spotify: 'https://open.spotify.com/track/5td1HlRkYwRwtfutbhjDp6?si=af60136771bd4027',
    },
  },
  {
    id: 3,
    description: 'Little moments big emotions *',
    links: {
      youtube:
        'https://www.youtube.com/watch?v=SFHToaOC0cE&ab_channel=NiniNutsubidze%2CJanngo%26GiorgiGigashvili-Topic',
      deezer: 'jazz-link-3',
      spotify: 'https://open.spotify.com/track/2nYBCtR4qTDDFtxkwbCddY?si=263388c442444630',
    },
  },
  {
    id: 4,
    description: 'Tom Misch - It runs through me *',
    links: {
      youtube: 'https://www.youtube.com/watch?v=ilNEqmfUyzI&ab_channel=COLORS',
      deezer: 'jazz-link-4',
      spotify: 'https://open.spotify.com/track/0vMctOnb4YNIvbqgkbWNDy?si=4a696219ffea49e3',
    },
  },
  {
    id: 5,
    description: 'Walking my baby back home *, avec des images de Stockholm',
    links: {
      youtube: 'https://www.youtube.com/watch?v=GF_NDRM3498&ab_channel=Tataeivoiolla',
      deezer: 'jazz-link-7',
      spotify: 'https://open.spotify.com/track/5gBWGTO2prExy9yVwhUbOU?si=6b6632b2dda34e04',
    },
  },
  {
    id: 6,
    description: 'Tron Haugmark My favourite things *',
    links: {
      youtube: 'https://www.youtube.com/watch?v=jMwvb0FymoE&ab_channel=TrondHaugmark-Topic',
      deezer: 'jazz-link-6',
      spotify: 'https://open.spotify.com/track/0Vj81CYipA2ZMsGkQj3TON?si=02f1b95ce32f4f45',
    },
  },
  {
    id: 7,
    description: 'Vintern rasar in *',
    links: {
      youtube: 'https://www.youtube.com/watch?v=v5jr4ymrFpE&ab_channel=AmandaGinsburg-Topic',
      deezer: 'jazz-link-5',
      spotify: 'https://open.spotify.com/track/3orVKZwCVOs58WVMumf1NP?si=bb49cb6a85c747e0',
    },
  },
  {
    id: 8,
    description: `Quand Nöel approche, j'ai une folle envie de danser le lindy hop. Il y a quelque chose dans le swing qui me rappelle l'ambiance des fêtes de fin d'année. Alors aujourd'hui, ça va swinguer un petit peu! PS: la vidéo est adorable !`,
    links: {
      youtube: 'https://www.youtube.com/watch?v=m2T7WI4CI4Y&ab_channel=Rachael%26Vilray',
      deezer: 'jazz-link-8',
      spotify: 'https://open.spotify.com/track/0pVUyPxZk9qYINtd0nsWhG?si=e965752cd1f84028',
    },
  },
  {
    id: 9,
    description: 'stacey kent christmas time is here *',
    links: {
      youtube: 'https://www.youtube.com/watch?v=6gfLU2AELlY&ab_channel=StaceyKentMusic',
      deezer: 'jazz-link-9',
      spotify: 'https://open.spotify.com/track/5GDMoDTI2iqYlykNq5hw6l?si=64b9b3b4a5054118',
    },
  },
  {
    id: 10,
    description: 'my kind of night, for harmonies vintage et ukulélé *',
    links: {
      youtube: 'https://www.youtube.com/watch?v=FWKaqhEurY4&ab_channel=CharliePeacock',
      deezer: 'jazz-link-10',
      spotify: 'https://open.spotify.com/track/1sJnKCMOkGvcRPes8Tln2x?si=a80c6cc4b3684ed6',
    },
  },
  {
    id: 11,
    description: 'Loose *',
    links: {
      youtube: 'https://www.youtube.com/watch?v=EFEh0npHExw&ab_channel=%2aHarbrow%2a',
      deezer: 'jazz-link-11',
      spotify: 'https://open.spotify.com/track/59acp1OhcvxwVBwQJBYKuX?si=a1f8d6b5684d4e19',
    },
  },
  {
    id: 12,
    description: 'Wave Gilberto *',
    links: {
      youtube: 'https://www.youtube.com/watch?v=2RCnbOzCj1I&ab_channel=jonjonjon',
      deezer: 'jazz-link-12',
      spotify: 'https://open.spotify.com/track/3JbZ8W2aFTIEP6EidBlN38?si=5a086d86914a44a2',
    },
  },
  {
    id: 13,
    description: 'Winter Wonderland SK *',
    links: {
      youtube: 'https://www.youtube.com/watch?v=7UyMjlNDBlg&ab_channel=StaceyKent-Topic',
      deezer: 'jazz-link-13',
      spotify: 'https://open.spotify.com/track/4zuEST1RluOFMupcKNvM2m?si=4024d79e881b4778',
    },
  },
  {
    id: 14,
    description: 'la même que hier, mais en français. Au royaume du bonhomme hiver *',
    links: {
      youtube: 'https://www.youtube.com/watch?v=c7_QZOG_mgg&ab_channel=CarolWelsman-Topic',
      deezer: 'jazz-link-14',
      spotify: 'https://open.spotify.com/track/3xzjWsVxspvyGefnsPlUn9?si=7ca7df4c1d3a45b2',
    },
  },
  {
    id: 15,
    description: `Mon coup de coeur de l'année 2023 en jazz vocal. Je vous recommande de suivre le lien YouTube pour voir la version live. Cette chanteuse est époustouflante (et elle n'a que vingt-quatre ans) !`,
    links: {
      youtube: 'https://www.youtube.com/watch?v=Dzdwk2D0rh4&ab_channel=SamaraJoyVEVO',
      deezer: 'jazz-link-15',
      spotify: 'https://open.spotify.com/track/0HW2RKF80cPR9mnN5T5Rum?si=18e6057b895c490c',
    },
  },
  {
    id: 16,
    description: 'Sunset in the blue *',
    links: {
      youtube: 'https://www.youtube.com/watch?v=qndrrfdmPIA&ab_channel=MelodyGardot',
      deezer: 'jazz-link-16',
      spotify: 'https://open.spotify.com/track/3fkoZm1DZEfsyAx1Z87bKR?si=89b0fa2514f340a9',
    },
  },
  {
    id: 17,
    description: 'Listen to the sky *',
    links: {
      youtube: 'https://www.youtube.com/watch?v=52X-sFY2drA&ab_channel=LauraMisch',
      deezer: 'jazz-link-17',
      spotify: 'https://open.spotify.com/track/19OYmVAI2mdkbAj1dW0DYd?si=edff0047c97c4b1d',
    },
  },
  {
    id: 18,
    description: 'Algo contigo *',
    links: {
      youtube: 'https://www.youtube.com/watch?v=NSRQUlPhqZo&ab_channel=LELY',
      deezer: 'jazz-link-18',
      spotify: 'https://open.spotify.com/track/3HMuJG1y7pyjg7Rrk17Rsb?si=fa0a8059d29a4d15',
    },
  },
  {
    id: 19,
    description:
      'Warm in december . Je vous ai partagé la version live (suivez le lien YouTube)... magique !',
    links: {
      youtube: 'https://www.youtube.com/watch?v=0zWnPCqUjjg&ab_channel=SamaraJoyVEVO',
      deezer: 'jazz-link-19',
      spotify: 'https://open.spotify.com/track/4iZUPqpbdr4cI8OOzlKKqR?si=ddb2e61c6b474a97',
    },
  },
  {
    id: 20,
    description: `Une chanson  qui passait à la radio lorsque les premières neiges sont tombées à Stockholm. C’est officiellement l’hiver aujourd’hui !`,
    links: {
      youtube: 'https://www.youtube.com/watch?v=LC7gVvI6Bts&ab_channel=AlJarreau-Topic',
      deezer: 'jazz-link-20',
      spotify: 'https://open.spotify.com/track/3ZcjoGgMAZspOswkAcMcgk?si=e9e8d70ae8434022',
    },
  },
  {
    id: 21,
    description: `Si je vous dis musicien un peu loufoque, qui s’est fait connaître grâce à ses vidéos sur YouTube dans lesquelles il joue d’une vingtaine d’instruments, et qui manie les harmonies comme personne, à qui pensez-vous ?`,
    links: {
      youtube: 'https://www.youtube.com/watch?v=o9CusMKhoqk&ab_channel=JacobCollier',
      deezer: 'jazz-link-21',
      spotify: 'https://open.spotify.com/track/4azpxOozyGBpqBZ9OlC9L2?si=83f91f09eb2a4b5e',
    },
  },
  {
    id: 22,
    description: `Les crooners de type “Michael Bublé” ont toujours la côte à Noël. J’ai tenté de trouver un peu plus original cette année. Saviez-vous que crooner en suédois se dit “smörsångare”, autrement dit “chanteur de beurre” ?  `,
    links: {
      youtube: 'https://www.youtube.com/watch?v=BHsmQYSsZJw&ab_channel=Release-Topic',
      deezer: 'jazz-link-22',
      spotify: 'https://open.spotify.com/track/3ocQIXRqydJZNhJfMbKnEQ?si=abb70b193ca340f8',
    },
  },
  {
    id: 23,
    description: `Un réveillon en valsant avec la douce Laufey… “It's that time of year when the world falls in love. Every song you hear seems to say Merry Christmas, may your New Year dreams come true.” [C'est cette période de l'année où le monde tombe amoureux. Chaque chanson que vous entendez semble dire Joyeux Noël, que vos rêves du Nouvel An se réalisent.] Tout est dit !  Joyeuses fêtes de fin d’année !`,
    links: {
      youtube: 'https://www.youtube.com/watch?v=X_-2hYo_iCk&ab_channel=Laufey',
      deezer: 'jazz-link-22',
      spotify: 'https://open.spotify.com/track/4eEdv0ZBTtWh8zS41SeUp8?si=1ba0d9e3870c4e85',
    },
  },
] as ICalendarJazzItem[]

export default calendarJazzInfo
