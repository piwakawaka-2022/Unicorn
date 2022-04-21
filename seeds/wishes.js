exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('wishes').del()
  await knex('wishes').insert([
    {
      id: 1,
      title: 'Hire to work together',
      description:
        'You are granted a job opportunity to work along with all your Piwakawaka friends in Xero!!  Time to show off your React skills here!!',
      img: '/images/xero.png',
    },
    {
      id: 2,
      title: 'Press the rewind button',
      description:
        'You are granted with a chance to press a rewind button.  Go back to any point in time and have some fun!! How do you want to treat this one time opportunity?',
      img: '/images/rewind.png',
    },
    {
      id: 3,
      title: 'Have a panda as pet',
      description: 'You can get a panda for a pet',
      img: 'https://static.dw.com/image/40668507_303.jpg',
    },
    {
      id: 4,
      title: 'Learn water color',
      description:
        'Follow with the greatest teacher to learn watercolor for a whole year',
      img: 'https://artincontext.org/wp-content/uploads/2021/10/Watercolor-Paintings-Tips.jpg',
    },
    {
      id: 5,
      title: 'Trip to space station',
      description:
        'Have your choice of Elon Musk or Jeff Bezos rocket to space!',
      img: 'https://cdn.mos.cms.futurecdn.net/mPFET8wxkZENQazxvRg7K5.jpg',
    },
    {
      id: 6,
      title: '14 day trip in the Amazon forest',
      description:
        'Go back to your primal roots and learn the ways of the jungle by an experienced shaman!',
      img: 'https://images.unsplash.com/photo-1593069567131-53a0614dde1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW1hem9uJTIwZm9yZXN0fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
    },
    {
      id: 7,
      title: 'Date with Robert Pattison',
      description:
        'You are granted a date with Robert Pattison at a local restaurant of your choosing.',
      img: '/images/robpat.png',
    },
    {
      id: 8,
      title:
        'Fully paid for Holiday to Tokyo to eat at Jiro Ono’s 10-seat restaurant',
      description:
        'You are granted a fully paid for holiday to Tokyo to stay at a 5 star restaurant and eat at Japanese sushi chef Jiro Ono’s 10-seat restaurant located in a Tokyo subway station.',
      img: '/images/jiro.png',
    },
    {
      id: 9,
      title: 'Dance it off',
      description:
        'You are granted magical dance skills. No matter how un-co you are in daily life, when you hit the d-floor suddenly you have got moves better than Fred Astair',
      img: 'https://swungover.files.wordpress.com/2011/05/fred-astaire-jump.jpg',
    },
    {
      id: 10,
      title: 'Bowling wipeout',
      description:
        'You go bowling with the P crew and get a total of 9 strikes confirming your status as bowling champion. You then write a sweet sweet test for each frame thus winning Gerards approval forever',
      img: 'https://clubrunner.blob.core.windows.net/00000013052/Images/istockphoto-480732472-612x612.jpg',
    },
    {
      id: 11,
      title: 'A Home in New Zealand',
      description:
        'This is what you all have been waiting for a home for FREE in the city of your choice.',
      img: 'https://media-cdn.tripadvisor.com/media/photo-s/02/6a/88/e8/studio-spa-suite.jpg',
    },
    {
      id: 12,
      title: 'Unlimited travel',
      description:
        'As the title suggest you are now allowed to travel wherever you want to go with no limitations.',
      img: ' https://www.pixelstalk.net/wp-content/uploads/2016/08/Free-Desktop-Travel-Backgrounds.jpg',
    },
  ])
}
