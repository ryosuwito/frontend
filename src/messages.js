export default {
  footer: {
    copyright: `© ${ (new Date()).getFullYear() } Dynamic Technology Lab Pte Ltd. All Rights Reserved.`,
  },
  culture: {
    ourValues: {
      blocks: [
        {
          title: 'Teamwork',
          img: '/images/culture/teamwork.png',
          imgAlt: 'teamwork',
          paragraph: 'We operate in an inclusive work environment where everyone feels connected. We work together to achieve great things.',
        },
        {
          title: 'Meritocracy',
          img: '/images/culture/meritocracy.png',
          imgAlt: 'meritocracy',
          paragraph: 'We create a level playing field in advancement and opportunities. We reward employees based on performance.',
        },
        {
          title: 'Integrity',
          img: '/images/culture/integrity.png',
          imgAlt: 'integrity',
          paragraph: 'We display integrity by being transparent and accountable. We care deeply about doing the right thing, without compromise.',
        },
        {
          img: '/images/culture/learning.png',
          imgAlt: 'learning',
          title: 'Learning',
          paragraph: 'Our culture emphasises continuous learning and improvement. We never stop learning and growing.',
        },
        {
          img: '/images/culture/agility.png',
          imgAlt: 'agility',
          title: 'Agility',
          paragraph: 'We have the ability to move fast and stay relevant in the rapidly changing world. We take action today with tomorrow in mind.',
        },
        {
          img: '/images/culture/winning.png',
          imgAlt: 'winning',
          title: 'Winning',
          paragraph: 'We are committed to the pursuit of excellence. Good is never good enough. We constantly seek progress and push boundaries.',
        }
      ]
    }
  },
  contact: {
    offices: [
      {
        country: 'singapore',
        city: 'singapore',
        address: [
          '#04-01B, Delta House,',
          '2 Alexandra Road,',
          'Singapore 159919',
        ],
        backgroundImage: '/images/contact/singapore.jpg',
        flagClassname: 'flag-icon-sg',
      },
      {
        country: 'china',
        city: 'shanghai',
        address: [
          'Room 606, Keyuan Building,',
          '5 Bibo Road,',
          'Pudong, Shanghai',
        ],
        backgroundImage: '/images/contact/shanghai.jpg',
        flagClassname: 'flag-icon-cn',
      },
      {
        country: 'vietnam',
        city: 'hanoi',
        address: [
          'Bac A tower,',
          '9 Dao Duy Anh street,',
          'Dong Da, Hanoi'
        ],
        backgroundImage: '/images/contact/hanoi.jpg',
        flagClassname: 'flag-icon-vn',
      },
    ]
  }
}