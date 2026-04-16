// Interviewer enemy definitions

export const INTERVIEWERS = [
  {
    id: 1,
    name: 'Junior Dev Interviewer',
    hp: 80,
    difficulty: 'Easy',
    questions: [
      { text: 'Tell me about yourself', difficulty: 'easy' },
      { text: 'Why do you want this job?', difficulty: 'easy' },
      { text: 'What are your strengths?', difficulty: 'easy' }
    ]
  },
  {
    id: 2,
    name: 'Senior Dev Interviewer',
    hp: 120,
    difficulty: 'Medium',
    questions: [
      { text: 'Explain closures in JavaScript', difficulty: 'medium' },
      { text: 'What is the difference between == and ===?', difficulty: 'medium' },
      { text: 'Explain the event loop', difficulty: 'medium' },
      { text: 'Why should we hire you?', difficulty: 'medium' },
      { text: 'What is your biggest weakness?', difficulty: 'medium' }
    ]
  },
  {
    id: 3,
    name: 'HR from Hell',
    hp: 150,
    difficulty: 'Hard',
    questions: [
      { text: 'Explain a complex technical concept to a non-technical person', difficulty: 'hard' },
      { text: 'Why were you fired from your last job?', difficulty: 'hard' },
      { text: 'What is your salary expectation?', difficulty: 'hard' },
      { text: 'Tell me about a time you failed', difficulty: 'hard' },
      { text: 'Why are there gaps in your resume?', difficulty: 'hard' },
      { text: 'What would your current boss say about you?', difficulty: 'hard' }
    ]
  },
  {
    id: 4,
    name: 'Tech Lead',
    hp: 130,
    difficulty: 'Hard',
    questions: [
      { text: 'Design a scalable system architecture', difficulty: 'hard' },
      { text: 'How do you handle technical debt?', difficulty: 'hard' },
      { text: 'Explain your approach to code reviews', difficulty: 'hard' },
      { text: 'Describe a challenging project you led', difficulty: 'hard' }
    ]
  },
  {
    id: 5,
    name: 'Principal Engineer',
    hp: 160,
    difficulty: 'Expert',
    questions: [
      { text: 'Explain the trade-offs between SQL and NoSQL databases', difficulty: 'expert' },
      { text: 'How would you design a microservices architecture?', difficulty: 'expert' },
      { text: 'What is your approach to system reliability?', difficulty: 'expert' },
      { text: 'How do you mentor junior developers?', difficulty: 'medium' },
      { text: 'What makes a great engineering culture?', difficulty: 'hard' }
    ]
  }
]

export function getInterviewerById(id) {
  return INTERVIEWERS.find(i => i.id === id)
}

export function getRandomInterviewer() {
  const randomIndex = Math.floor(Math.random() * INTERVIEWERS.length)
  return INTERVIEWERS[randomIndex]
}
