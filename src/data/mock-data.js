import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';

let imgUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgn0fe-KcSBxFJ0Lo7Fi4ketgolNsm2KxahqPdOFKzO02CRFG";

let user1 = {name:"AwesomeSauce", img: imgUrl};
let user2 = {name:"KillerBud", img: imgUrl};
let user3 = {name:"Beasely", img: imgUrl};
let user4 = {name:"Smokin Joe", img: imgUrl};
let user5 = {name:"ImaginaryCow", img: imgUrl};

let rep1 = "some super cool response";
let rep2 = "that was a stupid comment";
let rep3 = "what is wrong with your brain?!";

let reply1 = {user: user1, comment: rep1};
let reply2 = {user: user2, comment: rep2};
let reply3 = {user: user3, comment: rep3};
let replies = [reply1, reply2, reply3];

export let MainMatch = {
  title: "MainMatch",
  image1: image1,
  image2: image2,
  image1Votes: "8574",
  image2Votes: "4597",
  comments: [
    {
      user: user5,
      comment: "I make the best comments!",
      replies: [replies]
    },
    {
      user: user4,
      comment: "Got to be joking",
      replies: [replies]
    },
    {
      user: user3,
      comment: "Have to be missing something up there!",
      replies: [replies]
    }
  ]
}

export let Matchups = [
    {
      title: "match1",
      image1: image3,
      image2: image4,
      image1Votes: "153",
      image2Votes: "741",
      comments: [
        {
          user: user5,
          comment: "I make the best comments!",
          replies: [replies]
        },
        {
          user: user4,
          comment: "Got to be joking",
          replies: [replies]
        },
        {
          user: user3,
          comment: "Have to be missing something up there!",
          replies: [replies]
        }
      ]
    },
    {
      title: "match2",
      image1: image5,
      image2: image6,
      image1Votes: "395",
      image2Votes: "749",
      comments: [
        {
          user: user5,
          comment: "I make the best comments!",
          replies: [replies]
        },
        {
          user: user4,
          comment: "Got to be joking",
          replies: [replies]
        },
        {
          user: user3,
          comment: "Have to be missing something up there!",
          replies: [replies]
        }
      ]
    },
    {
      title: "match3",
      image1: image3,
      image2: image4,
      image1Votes: "725",
      image2Votes: "904",
      comments: [
        {
          user: user5,
          comment: "I make the best comments!",
          replies: [replies]
        },
        {
          user: user4,
          comment: "Got to be joking",
          replies: [replies]
        },
        {
          user: user3,
          comment: "Have to be missing something up there!",
          replies: [replies]
        }
      ]
    },
    {
      title: "match4",
      image1: image5,
      image2: image6,
      image1Votes: "246",
      image2Votes: "767",
      comments: [
        {
          user: user5,
          comment: "I make the best comments!",
          replies: [replies]
        },
        {
          user: user4,
          comment: "Got to be joking",
          replies: [replies]
        },
        {
          user: user3,
          comment: "Have to be missing something up there!",
          replies: [replies]
        }
      ]
    },
    {
      title: "match5",
      image1: image3,
      image2: image4,
      image1Votes: "1053",
      image2Votes: "643",
      comments: [
        {
          user: user5,
          comment: "I make the best comments!",
          replies: [replies]
        },
        {
          user: user4,
          comment: "Got to be joking",
          replies: [replies]
        },
        {
          user: user3,
          comment: "Have to be missing something up there!",
          replies: [replies]
        }
      ]
    },
    {
      title: "match6",
      image1: image5,
      image2: image6,
      image1Votes: "1503",
      image2Votes: "999",
      comments: [
        {
          user: user5,
          comment: "I make the best comments!",
          replies: [replies]
        },
        {
          user: user4,
          comment: "Got to be joking",
          replies: [replies]
        },
        {
          user: user3,
          comment: "Have to be missing something up there!",
          replies: [replies]
        }
      ]
    }
  ];
