// Interviewer enemy definitions

export const INTERVIEWERS = [
  {
    id: 1,
    hp: 80,
    difficulty: 'Easy',
    questions: [
      { text: 'What\'s your greatest achievement that nobody noticed?', difficulty: 'easy' },
      { text: 'If you were a kitchen appliance, what would you be and why?', difficulty: 'easy' },
      { text: 'How many ping pong balls can you fit in a school bus?', difficulty: 'easy' },
      { text: 'What\'s your spirit animal and why is it a sloth?', difficulty: 'easy' },
      { text: 'If you could eliminate one day of the week, which one and why?', difficulty: 'easy' }
    ]
  },
  {
    id: 2,
    hp: 120,
    difficulty: 'Medium',
    questions: [
      { text: 'What\'s the weirdest thing you\'ve ever done on a dare?', difficulty: 'medium' },
      { text: 'If you were a potato, how would you like to be cooked?', difficulty: 'medium' },
      { text: 'What\'s your most useless talent that you\'re weirdly proud of?', difficulty: 'medium' },
      { text: 'If animals could talk, which species would be the rudest?', difficulty: 'medium' },
      { text: 'What\'s the worst haircut you\'ve ever had and why did you get it?', difficulty: 'medium' },
      { text: 'If you could trade lives with anyone for a day, who would it be?', difficulty: 'medium' }
    ]
  },
  {
    id: 3,
    hp: 150,
    difficulty: 'Hard',
    questions: [
      { text: 'Describe a challenging situation you faced and how you overcame it', difficulty: 'hard' },
      { text: 'What motivates you to do your best work?', difficulty: 'hard' },
      { text: 'How do you handle pressure and stress?', difficulty: 'hard' },
      { text: 'Tell me about a time you made a mistake and how you fixed it', difficulty: 'hard' },
      { text: 'Where do you see yourself in 5 years?', difficulty: 'hard' },
      { text: 'What would your previous employer say about you?', difficulty: 'hard' }
    ]
  },
  {
    id: 4,
    hp: 130,
    difficulty: 'Hard',
    questions: [
      { text: 'Describe your leadership style and give an example', difficulty: 'hard' },
      { text: 'How do you handle conflicts with team members?', difficulty: 'hard' },
      { text: 'What\'s your approach to problem-solving?', difficulty: 'hard' },
      { text: 'How do you prioritize your work when everything is urgent?', difficulty: 'hard' },
      { text: 'What is the time complexity of binary search?', difficulty: 'hard', special: true, answer: 'O(log n)', career: 'all' }
    ]
  },
  {
    id: 5,
    hp: 160,
    difficulty: 'Expert',
    questions: [
      { text: 'What makes you the best candidate for this position?', difficulty: 'expert' },
      { text: 'How would you contribute to our company culture?', difficulty: 'expert' },
      { text: 'What\'s your biggest professional achievement?', difficulty: 'expert' },
      { text: 'Why do you want to work here specifically?', difficulty: 'expert' },
      { text: 'What salary expectations do you have?', difficulty: 'hard' },
      { text: 'What is the purpose of the CSS box-sizing property?', difficulty: 'expert', special: true, answer: 'border-box', career: 'frontend' },
      { text: 'What does ACID stand for in databases?', difficulty: 'expert', special: true, answer: 'Atomicity, Consistency, Isolation, Durability', career: 'backend' },
      { text: 'What is a container in DevOps?', difficulty: 'expert', special: true, answer: 'A lightweight, standalone package', career: 'devops' },
      { text: 'What is the difference between monolithic and microservices architecture?', difficulty: 'expert', special: true, answer: 'Monolithic is single unit, microservices are distributed', career: 'fullstack' },
      { text: 'What is the time complexity of binary search?', difficulty: 'expert', special: true, answer: 'O(log n)', career: 'software_developer' }
    ]
  }
]

export function getInterviewerName(interviewer, career) {
  const interviewerNames = {
    professional_sleeper: ['Sleep Study Coordinator', 'Nap Time Manager', 'Dream Analyst', 'Sleep Quality Director', 'Chief Sleep Officer'],
    dog_surfing: ['Surf Instructor Rex', 'Wave Master Max', 'Beach Buddy Bella', 'Surf Captain Charlie', 'Ocean Director Oliver'],
    ice_cream_taster: ['Flavor Expert Frank', 'Scoop Master Sally', 'Taste Tester Tim', 'Cream Queen Carol', 'Flavor Director Felix'],
    water_slide_tester: ['Splash Specialist Sam', 'Slide Tester Sue', 'Water Wizard Will', 'Splash Captain Chris', 'Aqua Director Alex'],
    professional_mourner: ['Grief Guide Grace', 'Tear Tender Tom', 'Sorrow Specialist Sarah', 'Mourning Manager Mike', 'Grief Director Gabriel'],
    chicken_sexer: ['Chick Checker Chuck', 'Poultry Pro Penny', 'Egg Expert Emma', 'Fowl Finder Frank', 'Poultry Director Patricia'],
    snake_milker: ['Venom Victor', 'Snake Specialist Sally', 'Reptile Ranger Rick', 'Venom Master Vicky', 'Reptile Director Ryan'],
    pet_food_taster: ['Taste Tester Ted', 'Flavor Finder Fiona', 'Snack Specialist Sam', 'Pet Pal Paul', 'Flavor Director Frank'],
    face_feeler: ['Touch Expert Tony', 'Skin Specialist Sarah', 'Face Feeler Frank', 'Texture Tester Tina', 'Sensory Director Simon'],
    golf_ball_diver: ['Ball Hunter Bob', 'Diver Dave', 'Splash Specialist Steve', 'Ball Finder Bella', 'Aquatic Director Andy'],
    line_stand_in: ['Queue Queen Quinn', 'Line Leader Larry', 'Wait Specialist Wendy', 'Queue Captain Quincy', 'Time Director Tom'],
    fortune_cookie_writer: ['Fortune Writer Fred', 'Cookie Captain Cathy', 'Prophecy Pro Pete', 'Fortune Finder Fiona', 'Destiny Director Dave'],
    odor_judge: ['Smell Specialist Sam', 'Scent Expert Sally', 'Nose Navigator Ned', 'Aroma Analyzer Amy', 'Sensory Director Simon'],
    professional_cuddler: ['Cuddle Captain Cathy', 'Hug Hero Harry', 'Comfort Specialist Carol', 'Snuggle Master Steve', 'Wellness Director Wendy'],
    video_game_tester: ['Game Tester Gary', 'Pixel Pro Penny', 'Bug Buster Bob', 'Level Master Larry', 'Quality Director Quinn'],
    fake_wedding_guest: ['Guest Guru Grace', 'Party Pro Paul', 'Celebration Specialist Cindy', 'Wedding Wizard Will', 'Event Director Eddie'],
    train_pusher: ['Push Pro Pete', 'Train Titan Tina', 'Crowd Captain Carl', 'Station Specialist Sam', 'Transit Director Tony'],
    bed_warmer: ['Warmth Wizard Wendy', 'Heat Hero Harry', 'Comfort Specialist Carol', 'Cozy Captain Chris', 'Temperature Director Ted'],
    human_statue: ['Statue Specialist Steve', 'Pose Pro Penny', 'Still Life Sally', 'Motion Master Mike', 'Artistic Director Andy'],
    toilet_paper_tester: ['TP Tester Tom', 'Softness Specialist Sarah', 'Paper Pro Paul', 'Texture Tester Tina', 'Quality Director Quinn'],
    software_developer: ['Code Captain Chris', 'Bug Buster Bob', 'Dev Director Dave', 'Tech Lead Tina', 'Software Architect Sam']
  }
  
  const names = interviewerNames[career] || interviewerNames['professional_sleeper']
  return names[interviewer.id - 1] || 'Interviewer'
}

export function getQuestionsForCareer(interviewer, career) {
  const careerSpecificQuestions = {
    professional_sleeper: {
      2: [
        { text: 'What\'s your preferred sleeping position and why?', difficulty: 'medium' },
        { text: 'How do you handle being woken up mid-nap?', difficulty: 'medium' },
        { text: 'What\'s your dream pillow material?', difficulty: 'medium' },
        { text: 'Can you sleep through anything or do you need absolute silence?', difficulty: 'medium' },
        { text: 'What\'s the weirdest place you\'ve ever fallen asleep?', difficulty: 'medium' },
        { text: 'How many hours of sleep do you consider "professional"?', difficulty: 'medium' }
      ]
    },
    dog_surfing: {
      2: [
        { text: 'How do you handle a dog who refuses to catch a wave?', difficulty: 'medium' },
        { text: 'What\'s the most stubborn breed you\'ve worked with?', difficulty: 'medium' },
        { text: 'Have you ever been wiped out by your own student?', difficulty: 'medium' },
        { text: 'Do dogs get seasick or is that just humans?', difficulty: 'medium' },
        { text: 'What\'s the best surfing dog name you\'ve heard?', difficulty: 'medium' },
        { text: 'Do you wear a wetsuit even in summer?', difficulty: 'medium' }
      ]
    },
    ice_cream_taster: {
      2: [
        { text: 'What\'s the worst flavor you\'ve ever tasted?', difficulty: 'medium' },
        { text: 'Do you get brain freezes or have you built immunity?', difficulty: 'medium' },
        { text: 'What\'s your favorite base: chocolate, vanilla, or something exotic?', difficulty: 'medium' },
        { text: 'How many scoops can you eat before calling it quits?', difficulty: 'medium' },
        { text: 'What\'s the weirdest ice cream flavor that actually tasted good?', difficulty: 'medium' },
        { text: 'Do you prefer cup or cone?', difficulty: 'medium' }
      ]
    },
    water_slide_tester: {
      2: [
        { text: 'What\'s the scariest slide you\'ve ever tested?', difficulty: 'medium' },
        { text: 'Have you ever gotten stuck in a slide?', difficulty: 'medium' },
        { text: 'What\'s your swimsuit of choice for "safety testing"?', difficulty: 'medium' },
        { text: 'Do you test slides in the dark too?', difficulty: 'medium' },
        { text: 'What\'s the weirdest thing you\'ve found in a slide?', difficulty: 'medium' },
        { text: 'How many times do you go down the same slide?', difficulty: 'medium' }
      ]
    },
    professional_mourner: {
      2: [
        { text: 'How do you make yourself cry on demand?', difficulty: 'medium' },
        { text: 'What\'s the most awkward funeral you\'ve attended?', difficulty: 'medium' },
        { text: 'Do you research the deceased or just wing it?', difficulty: 'medium' },
        { text: 'What\'s your go-to crying sound?', difficulty: 'medium' },
        { text: 'Have you ever accidentally laughed at a funeral?', difficulty: 'medium' },
        { text: 'Do you charge by the tear or by the hour?', difficulty: 'medium' }
      ]
    },
    chicken_sexer: {
      2: [
        { text: 'How do you tell male from female chicks anyway?', difficulty: 'medium' },
        { text: 'What\'s the most common mistake beginners make?', difficulty: 'medium' },
        { text: 'Do chickens ever try to escape your grasp?', difficulty: 'medium' },
        { text: 'What\'s the weirdest thing a chicken has done to you?', difficulty: 'medium' },
        { text: 'Can you sex other birds or just chickens?', difficulty: 'medium' },
        { text: 'How fast can you sex a chick?', difficulty: 'medium' }
      ]
    },
    snake_milker: {
      2: [
        { text: 'What\'s the most venomous snake you\'ve milked?', difficulty: 'medium' },
        { text: 'Have you ever been bitten?', difficulty: 'medium' },
        { text: 'What\'s the scariest moment you\'ve had on the job?', difficulty: 'medium' },
        { text: 'Do snakes ever try to be friendly or are they always grumpy?', difficulty: 'medium' },
        { text: 'What do you do with all that venom anyway?', difficulty: 'medium' },
        { text: 'Do you name your snakes or is that unprofessional?', difficulty: 'medium' }
      ]
    },
    pet_food_taster: {
      2: [
        { text: 'What\'s the worst pet food you\'ve ever tasted?', difficulty: 'medium' },
        { text: 'Do you prefer cat food or dog food?', difficulty: 'medium' },
        { text: 'What\'s the surprising ingredient in most pet foods?', difficulty: 'medium' },
        { text: 'Do you ever accidentally eat your lunch at work?', difficulty: 'medium' },
        { text: 'What\'s the fanciest pet food you\'ve tried?', difficulty: 'medium' },
        { text: 'Do pets ever judge you while you\'re eating their food?', difficulty: 'medium' }
      ]
    },
    face_feeler: {
      2: [
        { text: 'What\'s the softest face you\'ve ever felt?', difficulty: 'medium' },
        { text: 'How do you tell someone their face feels weird without being rude?', difficulty: 'medium' },
        { text: 'Do you wash your hands between every face?', difficulty: 'medium' },
        { text: 'What\'s the most awkward face-feeling moment?', difficulty: 'medium' },
        { text: 'Can you feel someone\'s emotions through their skin?', difficulty: 'medium' },
        { text: 'Do people ever think you\'re hitting on them?', difficulty: 'medium' }
      ]
    },
    golf_ball_diver: {
      2: [
        { text: 'What\'s the deepest water hazard you\'ve dived into?', difficulty: 'medium' },
        { text: 'Have you ever found anything other than golf balls?', difficulty: 'medium' },
        { text: 'Do golfers ever tip you for retrieving their balls?', difficulty: 'medium' },
        { text: 'What\'s the grossest thing in a golf course pond?', difficulty: 'medium' },
        { text: 'Do you keep the balls or sell them back?', difficulty: 'medium' },
        { text: 'Have you ever been hit by a golf ball?', difficulty: 'medium' }
      ]
    },
    line_stand_in: {
      2: [
        { text: 'What\'s the longest line you\'ve ever waited in?', difficulty: 'medium' },
        { text: 'How do you entertain yourself while waiting?', difficulty: 'medium' },
        { text: 'What\'s the weirdest thing you\'ve been paid to wait for?', difficulty: 'medium' },
        { text: 'Do people ever get mad when you skip them in line?', difficulty: 'medium' },
        { text: 'What\'s the most boring line you\'ve stood in?', difficulty: 'medium' },
        { text: 'Do you charge by the hour or by the line length?', difficulty: 'medium' }
      ]
    },
    fortune_cookie_writer: {
      2: [
        { text: 'What\'s the worst fortune you\'ve ever written?', difficulty: 'medium' },
        { text: 'Do you add "in bed" to all your fortunes secretly?', difficulty: 'medium' },
        { text: 'What\'s the most inspiring fortune you\'ve written?', difficulty: 'medium' },
        { text: 'Do you run out of ideas or is there an infinite supply?', difficulty: 'medium' },
        { text: 'What\'s the weirdest fortune request you\'ve received?', difficulty: 'medium' },
        { text: 'Do you eat the cookies after writing the fortunes?', difficulty: 'medium' }
      ]
    },
    odor_judge: {
      2: [
        { text: 'What\'s the worst smell you\'ve ever judged?', difficulty: 'medium' },
        { text: 'How do you recover from a particularly bad smell?', difficulty: 'medium' },
        { text: 'Do you have a super nose or just a strong stomach?', difficulty: 'medium' },
        { text: 'What\'s the most pleasant surprise smell test?', difficulty: 'medium' },
        { text: 'Do people get offended when you rate their smell?', difficulty: 'medium' },
        { text: 'How do you describe smells without being gross?', difficulty: 'medium' }
      ]
    },
    professional_cuddler: {
      2: [
        { text: 'What\'s the cuddling position most people prefer?', difficulty: 'medium' },
        { text: 'How do you handle clients who get too attached?', difficulty: 'medium' },
        { text: 'What\'s the most awkward cuddling moment?', difficulty: 'medium' },
        { text: 'Do you cuddle with pets too or just humans?', difficulty: 'medium' },
        { text: 'What\'s your cuddling technique?', difficulty: 'medium' },
        { text: 'Do you fall asleep during sessions sometimes?', difficulty: 'medium' }
      ]
    },
    video_game_tester: {
      2: [
        { text: 'What\'s the most frustrating bug you\'ve ever found?', difficulty: 'medium' },
        { text: 'Do you ever get tired of playing games?', difficulty: 'medium' },
        { text: 'What\'s the weirdest glitch you\'ve encountered?', difficulty: 'medium' },
        { text: 'Do you test games you hate just for the money?', difficulty: 'medium' },
        { text: 'What\'s the best game you\'ve ever tested?', difficulty: 'medium' },
        { text: 'Do people get jealous of your job?', difficulty: 'medium' }
      ]
    },
    fake_wedding_guest: {
      2: [
        { text: 'What\'s the most awkward wedding you\'ve attended?', difficulty: 'medium' },
        { text: 'How do you remember everyone\'s names and relationships?', difficulty: 'medium' },
        { text: 'Have you ever been caught not knowing the bride or groom?', difficulty: 'medium' },
        { text: 'What\'s the weirdest wedding tradition you\'ve witnessed?', difficulty: 'medium' },
        { text: 'Do you dance at the weddings or just stand there?', difficulty: 'medium' },
        { text: 'What\'s the most dramatic wedding moment you\'ve seen?', difficulty: 'medium' }
      ]
    },
    train_pusher: {
      2: [
        { text: 'What\'s the most crowded train you\'ve ever pushed people onto?', difficulty: 'medium' },
        { text: 'Do people get angry or grateful when you push them?', difficulty: 'medium' },
        { text: 'What\'s your pushing technique?', difficulty: 'medium' },
        { text: 'Have you ever fallen onto the tracks?', difficulty: 'medium' },
        { text: 'What\'s the weirdest thing you\'ve seen on a train?', difficulty: 'medium' },
        { text: 'Do you wear special shoes for traction?', difficulty: 'medium' }
      ]
    },
    bed_warmer: {
      2: [
        { text: 'What\'s the coldest bed you\'ve ever had to warm?', difficulty: 'medium' },
        { text: 'Do you wear pajamas or regular clothes?', difficulty: 'medium' },
        { text: 'What\'s the most luxurious bed you\'ve warmed?', difficulty: 'medium' },
        { text: 'Do guests ever wake up and get freaked out?', difficulty: 'medium' },
        { text: 'What\'s your warming technique?', difficulty: 'medium' },
        { text: 'Do you ever accidentally fall asleep on the job?', difficulty: 'medium' }
      ]
    },
    human_statue: {
      2: [
        { text: 'What\'s the longest you\'ve ever stood perfectly still?', difficulty: 'medium' },
        { text: 'How do you deal with itchy nose while performing?', difficulty: 'medium' },
        { text: 'What\'s the weirdest thing someone has done to test if you\'re real?', difficulty: 'medium' },
        { text: 'Do you ever get bored and think about dinner?', difficulty: 'medium' },
        { text: 'What\'s your go-to statue pose?', difficulty: 'medium' },
        { text: 'Have you ever been mistaken for an actual statue?', difficulty: 'medium' }
      ]
    },
    toilet_paper_tester: {
      2: [
        { text: 'What\'s the worst toilet paper you\'ve ever tested?', difficulty: 'medium' },
        { text: 'How do you evaluate softness scientifically?', difficulty: 'medium' },
        { text: 'What\'s the most luxurious TP you\'ve ever tried?', difficulty: 'medium' },
        { text: 'Do you have a favorite brand or are they all the same?', difficulty: 'medium' },
        { text: 'What\'s the weirdest toilet paper feature you\'ve tested?', difficulty: 'medium' },
        { text: 'Do people make fun of your job or think it\'s cool?', difficulty: 'medium' }
      ]
    },
    software_developer: {
      2: [
        { text: 'What\'s the worst bug you\'ve ever shipped to production?', difficulty: 'medium' },
        { text: 'Do you actually read documentation or just StackOverflow everything?', difficulty: 'medium' },
        { text: 'What\'s your go-to excuse for missing deadlines?', difficulty: 'medium' },
        { text: 'Tabs or spaces - and why is the other one wrong?', difficulty: 'medium' },
        { text: 'How many times have you said "it works on my machine"?', difficulty: 'medium' },
        { text: 'What\'s the most creative solution you\'ve found for a simple problem?', difficulty: 'medium' }
      ]
    }
  }
  
  // For levels 4-5, include special questions that can be answered
  const questions = interviewer.questions.map(q => ({ ...q }))
  
  // Add career-specific questions for levels 2-3
  if (careerSpecificQuestions[career] && careerSpecificQuestions[career][interviewer.id]) {
    return careerSpecificQuestions[career][interviewer.id]
  }
  
  // For levels 4-5, filter special questions based on career
  if (interviewer.id >= 4) {
    return questions.filter(q => {
      if (q.special) {
        return q.career === career || q.career === 'all'
      }
      return true
    })
  }
  
  return questions
}

export function getInterviewerById(id) {
  return INTERVIEWERS.find(i => i.id === id)
}

export function getRandomInterviewer() {
  const randomIndex = Math.floor(Math.random() * INTERVIEWERS.length)
  return INTERVIEWERS[randomIndex]
}
