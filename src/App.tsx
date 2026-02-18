import { useState } from 'react';
import { 
  Brain, 
  CheckCircle, 
  Zap, 
  BarChart3, 
  Target,
  Smartphone,
  Languages,
  Mic,
  ArrowRight,
  Sparkles,
  X,
  LogOut,
  BookOpen
} from 'lucide-react';

function App() {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [authScreen, setAuthScreen] = useState<'signup' | 'verify' | 'login' | 'dashboard'>('signup');
  const [verificationCode, setVerificationCode] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userFullName, setUserFullName] = useState('');
  const [password, setPassword] = useState('');
  const [isOnDashboard, setIsOnDashboard] = useState(false);
  const [currentLearningModule, setCurrentLearningModule] = useState<'home' | 'practice' | 'weakness' | 'analytics' | 'materials'>('home');
  const [selectedSubject, setSelectedSubject] = useState<'all' | 'mathematics' | 'physics' | 'chemistry' | 'biology'>('all');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{[key: number]: string}>({});
  const [practiceCompleted, setPracticeCompleted] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);

  const features = [
    {
      icon: Target,
      title: 'Adaptive Questioning',
      description: 'Questions adapt in real-time based on student responses and learning patterns'
    },
    {
      icon: CheckCircle,
      title: 'Mistake Analysis',
      description: 'Pinpoints common errors and misconceptions with deep-dive analytics'
    },
    {
      icon: Sparkles,
      title: 'Personalized Explanations',
      description: 'AI generates custom explanations tailored to each student\'s learning style'
    },
    {
      icon: Zap,
      title: 'Smart Revision Generator',
      description: 'Automatically creates focused revision materials for weak areas'
    },
    {
      icon: BarChart3,
      title: 'Weakness Heatmap',
      description: 'Visual representation of learning gaps across different topics'
    },
    {
      icon: Brain,
      title: 'Real-time Adaptation',
      description: 'Tutor adjusts difficulty and teaching approach on-the-fly'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Choose Topic',
      description: 'Select the subject or topic you want to learn or revise'
    },
    {
      number: '02',
      title: 'Answer Questions',
      description: 'Engage with adaptive questions crafted for your level'
    },
    {
      number: '03',
      title: 'AI Analyzes Mistakes',
      description: 'Our AI identifies patterns and root causes of errors'
    },
    {
      number: '04',
      title: 'Tutor Adapts in Real-Time',
      description: 'Experience personalized teaching that evolves with your progress'
    }
  ];

  const futureFeatures = [
    {
      icon: Mic,
      title: 'Voice Support',
      description: 'Learn by speaking - interactive voice-based tutoring'
    },
    {
      icon: Languages,
      title: 'Regional Languages',
      description: 'Access tutoring in multiple regional languages'
    },
    {
      icon: Smartphone,
      title: 'Mobile App',
      description: 'Study on the go with our dedicated mobile application'
    }
  ];

  const allQuestions = [
    { id: 1, subject: 'mathematics', difficulty: 'EASY', question: 'What is the value of 3(x + 2) + 5 = 26?', options: ['x = 4', 'x = 6', 'x = 8'], correct: 'x = 4' },
    { id: 2, subject: 'biology', difficulty: 'EASY', question: 'Which organelle is responsible for energy production in cells?', options: ['Mitochondria', 'Ribosome', 'Golgi Apparatus'], correct: 'Mitochondria' },
    { id: 3, subject: 'physics', difficulty: 'INTERMEDIATE', question: 'A car accelerates uniformly from rest at 4 m/s². How far does it travel in 5 seconds?', options: ['20 m', '50 m', '100 m'], correct: '50 m' },
    { id: 4, subject: 'chemistry', difficulty: 'INTERMEDIATE', question: 'Which element has the highest electronegativity in the periodic table?', options: ['Oxygen', 'Fluorine', 'Chlorine'], correct: 'Fluorine' },
    { id: 5, subject: 'mathematics', difficulty: 'INTERMEDIATE', question: 'In a right triangle, sin(θ) = 3/5. What is cos(θ)?', options: ['4/5', '3/5', '5/3'], correct: '4/5' },
    { id: 6, subject: 'biology', difficulty: 'HARD', question: 'In a dihybrid cross of AaBb × AaBb, what fraction of offspring will show the recessive phenotype for both traits?', options: ['1/16', '3/16', '9/16'], correct: '1/16' },
    { id: 7, subject: 'physics', difficulty: 'HARD', question: 'A rectangular coil of 100 turns with area 0.5 m² rotates in a magnetic field of 0.2 T. If the angular velocity is 10 rad/s, what is the maximum induced EMF?', options: ['50 V', '100 V', '200 V'], correct: '100 V' },
    { id: 8, subject: 'chemistry', difficulty: 'HARD', question: 'For the reaction: N₂ + 3H₂ ⇌ 2NH₃ (ΔH = -92 kJ/mol). If pressure is increased, and temperature is decreased, which combination most favors ammonia production?', options: ['Increases pressure, increases temperature', 'Increases pressure, decreases temperature', 'Decreases pressure, increases temperature'], correct: 'Increases pressure, decreases temperature' },
    { id: 9, subject: 'mathematics', difficulty: 'EASY', question: 'What is the area of a circle with radius 7 cm?', options: ['44 cm²', '154 cm²', '77 cm²'], correct: '154 cm²' },
    { id: 10, subject: 'biology', difficulty: 'EASY', question: 'Which gas is produced as a byproduct during photosynthesis?', options: ['Carbon Dioxide', 'Oxygen', 'Nitrogen'], correct: 'Oxygen' },
    { id: 11, subject: 'physics', difficulty: 'INTERMEDIATE', question: 'Light travels from water (n=1.33) into air (n=1). If the angle of incidence is 30°, what is the angle of refraction?', options: ['22.08°', '41.68°', '30°'], correct: '41.68°' },
    { id: 12, subject: 'chemistry', difficulty: 'INTERMEDIATE', question: 'In the equation: 2Na + Cl₂ → 2NaCl, what is the oxidation state of Na in NaCl?', options: ['0', '+1', '-1'], correct: '+1' },
    { id: 13, subject: 'mathematics', difficulty: 'INTERMEDIATE', question: 'Solve: log₂(x) = 5', options: ['x = 10', 'x = 32', 'x = 25'], correct: 'x = 32' },
    { id: 14, subject: 'biology', difficulty: 'INTERMEDIATE', question: 'Which scientist proposed the theory of evolution by natural selection?', options: ['Gregor Mendel', 'Charles Darwin', 'Jean Lamarck'], correct: 'Charles Darwin' },
    { id: 15, subject: 'physics', difficulty: 'HARD', question: 'A car of mass 1500 kg moves in a circular path of radius 50 m with speed 20 m/s. What is the centripetal force required?', options: ['6000 N', '12000 N', '24000 N'], correct: '12000 N' },
    { id: 16, subject: 'chemistry', difficulty: 'HARD', question: 'What is the IUPAC name of CH₃-CH₂-CH₂-CH₃?', options: ['Propane', 'Butane', 'Pentane'], correct: 'Butane' },
    { id: 17, subject: 'mathematics', difficulty: 'HARD', question: 'Solve: x² - 7x + 12 = 0. What are the roots?', options: ['x = 3 or x = 4', 'x = 2 or x = 6', 'x = -3 or x = -4'], correct: 'x = 3 or x = 4' },
    { id: 18, subject: 'biology', difficulty: 'HARD', question: 'Which chamber of the heart pumps oxygenated blood to the entire body?', options: ['Right Atrium', 'Left Ventricle', 'Right Ventricle'], correct: 'Left Ventricle' },
    { id: 19, subject: 'physics', difficulty: 'EASY', question: 'Newton\'s First Law of Motion states that an object at rest will remain at rest unless acted upon by which force?', options: ['Gravitational Force', 'An External Force', 'Magnetic Force'], correct: 'An External Force' },
    { id: 20, subject: 'chemistry', difficulty: 'EASY', question: 'What is the charge of an electron?', options: ['Positive', 'Negative', 'Neutral'], correct: 'Negative' },
  ];

  const filteredQuestions = allQuestions.filter(q => selectedSubject === 'all' || q.subject === selectedSubject);
  const currentQuestion = filteredQuestions[currentQuestionIndex];

  return (
    <div className="w-full overflow-hidden bg-white">
      {isOnDashboard ? (
        // DASHBOARD PAGE
        <>
          {/* Dashboard Navigation */}
          <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
            <div className="section-container py-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="text-white" size={24} />
                </div>
                <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Infinity Tutor
                </span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-700">
                  <span className="font-semibold">{userFullName}</span>
                </span>
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    setIsOnDashboard(false);
                    setUserEmail('');
                    setUserFullName('');
                  }}
                  className="px-4 py-2 bg-red-100 text-red-600 rounded-lg font-semibold hover:bg-red-200 transition-all flex items-center gap-2"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            </div>
          </nav>

          {/* Dashboard Content */}
          <div className="pt-32 pb-20 px-4 min-h-screen bg-gradient-soft">
            <div className="section-container">
              <div className="mb-12">
                <h1 className="text-5xl font-bold text-gray-900 mb-2">Welcome back, {userFullName}! 👋</h1>
                <p className="text-xl text-gray-600">Your personalized learning dashboard is ready</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="text-blue-600" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Choose Topic</h3>
                  <p className="text-gray-600 text-sm mb-4">Select from Math, Physics, Chemistry, and Biology</p>
                  <select 
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value as any)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="all">All Subjects</option>
                    <option value="mathematics">Mathematics</option>
                    <option value="physics">Physics</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="biology">Biology</option>
                  </select>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="text-purple-600" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Your Progress</h3>
                  <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">85%</p>
                  <p className="text-gray-600 text-sm">Completion rate this month</p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4">
                    <Target className="text-green-600" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">Weak Areas</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Calculus Derivatives</li>
                    <li>• Quantum Physics</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Start Learning Now</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <button 
                    onClick={() => setCurrentLearningModule('practice')}
                    className="p-6 border-2 border-blue-200 rounded-xl hover:bg-blue-50 transition-all text-left hover:border-blue-400 cursor-pointer"
                  >
                    <h3 className="font-bold text-gray-900 mb-2">📝 Practice Questions</h3>
                    <p className="text-gray-600 text-sm">Solve adaptive questions tailored to your level</p>
                  </button>
                  <button 
                    onClick={() => setCurrentLearningModule('weakness')}
                    className="p-6 border-2 border-purple-200 rounded-xl hover:bg-purple-50 transition-all text-left hover:border-purple-400 cursor-pointer"
                  >
                    <h3 className="font-bold text-gray-900 mb-2">🎯 Weakness Revision</h3>
                    <p className="text-gray-600 text-sm">Focus on topics where you need the most help</p>
                  </button>
                  <button 
                    onClick={() => setCurrentLearningModule('analytics')}
                    className="p-6 border-2 border-green-200 rounded-xl hover:bg-green-50 transition-all text-left hover:border-green-400 cursor-pointer"
                  >
                    <h3 className="font-bold text-gray-900 mb-2">📊 View Analytics</h3>
                    <p className="text-gray-600 text-sm">See detailed insights on your performance</p>
                  </button>
                  <button 
                    onClick={() => setCurrentLearningModule('materials')}
                    className="p-6 border-2 border-pink-200 rounded-xl hover:bg-pink-50 transition-all text-left hover:border-pink-400 cursor-pointer"
                  >
                    <h3 className="font-bold text-gray-900 mb-2">🗂️ Study Materials</h3>
                    <p className="text-gray-600 text-sm">Access curated learning resources</p>
                  </button>
                </div>
              </div>

              {/* Learning Modules */}
              {currentLearningModule === 'practice' && (
                <div className="bg-white rounded-xl p-8 border border-gray-100 mt-8">
                  <button onClick={() => {setCurrentLearningModule('home'); setCurrentQuestionIndex(0); setUserAnswers({}); setPracticeCompleted(false); setIsAnswerCorrect(false);}} className="mb-4 text-blue-600 hover:underline font-semibold">← Back to Dashboard</button>
                  
                  {!practiceCompleted ? (
                    <>
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 mb-2">📝 Practice Questions</h2>
                          <p className="text-gray-600">Question {currentQuestionIndex + 1} of {filteredQuestions.length}</p>
                        </div>
                        <div className="w-48">
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Filter by Subject:</label>
                          <select 
                            value={selectedSubject}
                            onChange={(e) => {setSelectedSubject(e.target.value as any); setCurrentQuestionIndex(0); setUserAnswers({}); setIsAnswerCorrect(false);}}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                          >
                            <option value="all">All Subjects</option>
                            <option value="mathematics">Mathematics</option>
                            <option value="physics">Physics</option>
                            <option value="chemistry">Chemistry</option>
                            <option value="biology">Biology</option>
                          </select>
                        </div>
                      </div>

                      {currentQuestion ? (
                        <>
                          <div className="mb-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-2 border-blue-200">
                            <div className="flex justify-between items-center mb-4">
                              <span className="text-sm font-semibold text-gray-600">Question {currentQuestionIndex + 1} of {filteredQuestions.length}</span>
                              <span className={`px-3 py-1 text-white text-xs font-bold rounded-full ${currentQuestion.difficulty === 'EASY' ? 'bg-green-500' : currentQuestion.difficulty === 'INTERMEDIATE' ? 'bg-yellow-500' : 'bg-red-500'}`}>
                                {currentQuestion.difficulty}
                              </span>
                            </div>
                            <p className="text-lg text-gray-900 font-semibold mb-6">{currentQuestion.question}</p>
                            
                            <div className="space-y-3">
                              {currentQuestion.options.map((option, idx) => {
                                const isSelected = userAnswers[currentQuestion.id] === option;
                                const isCorrect = option === currentQuestion.correct;
                                const showResult = userAnswers[currentQuestion.id] !== undefined;
                                
                                let bgColor = 'border-gray-200 hover:border-blue-400 hover:bg-white';
                                if (showResult) {
                                  if (isCorrect) {
                                    bgColor = 'border-green-500 bg-green-50';
                                  } else if (isSelected && !isCorrect) {
                                    bgColor = 'border-red-500 bg-red-50';
                                  }
                                }
                                
                                return (
                                  <button
                                    key={idx}
                                    onClick={() => {
                                      if (!userAnswers[currentQuestion.id]) {
                                        setUserAnswers({...userAnswers, [currentQuestion.id]: option});
                                        setIsAnswerCorrect(option === currentQuestion.correct);
                                      }
                                    }}
                                    disabled={showResult}
                                    className={`w-full flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-all ${bgColor} ${showResult ? 'cursor-default' : 'hover:shadow-md'}`}
                                  >
                                    <span className="text-gray-700 text-left">{option}</span>
                                    {showResult && isCorrect && (
                                      <span className="text-green-600 font-bold text-lg">✓</span>
                                    )}
                                    {showResult && isSelected && !isCorrect && (
                                      <span className="text-red-600 font-bold text-lg">✗</span>
                                    )}
                                  </button>
                                );
                              })}
                            </div>

                            {userAnswers[currentQuestion.id] && (
                              <div className={`mt-4 p-4 rounded-lg ${isAnswerCorrect ? 'bg-green-100 border border-green-500' : 'bg-red-100 border border-red-500'}`}>
                                <p className={`font-semibold ${isAnswerCorrect ? 'text-green-800' : 'text-red-800'}`}>
                                  {isAnswerCorrect ? '✓ Correct! Well done!' : '✗ Incorrect. Try again or move to the next question.'}
                                </p>
                                <p className="text-sm mt-2 text-gray-700">
                                  <strong>Correct Answer:</strong> {currentQuestion.correct}
                                </p>
                              </div>
                            )}
                          </div>

                          <div className="flex gap-4">
                            {currentQuestionIndex < filteredQuestions.length - 1 ? (
                              <>
                                <button 
                                  onClick={() => {
                                    if (userAnswers[currentQuestion.id]) {
                                      setCurrentQuestionIndex(currentQuestionIndex + 1);
                                      setIsAnswerCorrect(false);
                                    }
                                  }}
                                  disabled={!userAnswers[currentQuestion.id]}
                                  className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                  Next Question →
                                </button>
                              </>
                            ) : (
                              <>
                                <button 
                                  onClick={() => {
                                    if (userAnswers[currentQuestion.id]) {
                                      setPracticeCompleted(true);
                                    }
                                  }}
                                  disabled={!userAnswers[currentQuestion.id]}
                                  className="flex-1 px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-bold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                  ✓ Submit & Finish
                                </button>
                              </>
                            )}
                            <button 
                              onClick={() => {setCurrentLearningModule('home'); setCurrentQuestionIndex(0); setUserAnswers({}); setPracticeCompleted(false); setIsAnswerCorrect(false);}}
                              className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-bold hover:border-gray-400 transition-all"
                            >
                              Cancel
                            </button>
                          </div>
                        </>
                      ) : (
                        <div className="p-6 text-center text-gray-500">
                          <p>No questions available for the selected subject.</p>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="p-8 text-center">
                      <div className="inline-block mb-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="text-white" size={40} />
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">Quiz Completed! 🎉</h3>
                      <p className="text-gray-600 mb-6">You answered {Object.keys(userAnswers).length} out of {filteredQuestions.length} questions.</p>
                      
                      <div className="bg-blue-50 p-6 rounded-xl mb-6 text-left">
                        <h4 className="font-bold text-gray-900 mb-4">Your Answers:</h4>
                        <div className="space-y-2">
                          {filteredQuestions.map((q, idx) => (
                            <div key={q.id} className={`p-3 rounded-lg ${userAnswers[q.id] === q.correct ? 'bg-green-100' : 'bg-red-100'}`}>
                              <p className="text-sm font-semibold text-gray-900">Q{idx + 1}: {userAnswers[q.id] === q.correct ? '✓ Correct' : '✗ Incorrect'}</p>
                              <p className="text-xs text-gray-700">Your answer: {userAnswers[q.id]}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <button 
                          onClick={() => {
                            setCurrentQuestionIndex(0);
                            setUserAnswers({});
                            setPracticeCompleted(false);
                            setIsAnswerCorrect(false);
                          }}
                          className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:shadow-lg transition-all"
                        >
                          Retake Quiz
                        </button>
                        <button 
                          onClick={() => {setCurrentLearningModule('home'); setCurrentQuestionIndex(0); setUserAnswers({}); setPracticeCompleted(false); setIsAnswerCorrect(false);}}
                          className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-lg font-bold hover:border-gray-400 transition-all"
                        >
                          Back to Dashboard
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {currentLearningModule === 'weakness' && (
                <div className="bg-white rounded-xl p-8 border border-gray-100 mt-8">
                  <button onClick={() => setCurrentLearningModule('home')} className="mb-4 text-blue-600 hover:underline font-semibold">← Back to Dashboard</button>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">🎯 Weakness Revision - Focus Areas</h2>
                  <div className="space-y-4">
                    <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded">
                      <h3 className="font-bold text-gray-900 mb-2">📌 Calculus Derivatives (85% weak)</h3>
                      <p className="text-gray-700 text-sm mb-3">You've struggled with chain rule and product rule. AI recommends 5 focused questions.</p>
                      <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-all">
                        Practice Now
                      </button>
                    </div>
                    <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded">
                      <h3 className="font-bold text-gray-900 mb-2">📌 Quantum Physics (78% weak)</h3>
                      <p className="text-gray-700 text-sm mb-3">Focus on wave-particle duality and uncertainty principle. 3 targeted exercises available.</p>
                      <button className="px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition-all">
                        Practice Now
                      </button>
                    </div>
                    <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                      <h3 className="font-bold text-gray-900 mb-2">📌 Chemical Bonding (72% weak)</h3>
                      <p className="text-gray-700 text-sm mb-3">Need reinforcement on ionic vs covalent bonds. Quick 2-minute lesson + 4 questions.</p>
                      <button className="px-4 py-2 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 transition-all">
                        Review & Practice
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {currentLearningModule === 'analytics' && (
                <div className="bg-white rounded-xl p-8 border border-gray-100 mt-8">
                  <button onClick={() => setCurrentLearningModule('home')} className="mb-4 text-blue-600 hover:underline font-semibold">← Back to Dashboard</button>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">📊 Your Learning Analytics</h2>
                    </div>
                    <div className="w-48">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Filter by Subject:</label>
                      <select 
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value as any)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="all">All Subjects</option>
                        <option value="mathematics">Mathematics</option>
                        <option value="physics">Physics</option>
                        <option value="chemistry">Chemistry</option>
                        <option value="biology">Biology</option>
                      </select>
                    </div>
                  </div>

                  {selectedSubject === 'all' && (
                    <>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                        <p className="text-gray-600 text-sm">Overall Progress</p>
                        <p className="text-4xl font-bold text-blue-600 mt-2">85%</p>
                        <p className="text-gray-600 text-sm mt-2">📈 +5% this week</p>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                        <p className="text-gray-600 text-sm">Questions Solved</p>
                        <p className="text-4xl font-bold text-green-600 mt-2">127</p>
                        <p className="text-gray-600 text-sm mt-2">Accuracy: 78%</p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                        <p className="text-gray-600 text-sm">Study Streak</p>
                        <p className="text-4xl font-bold text-purple-600 mt-2">12 Days</p>
                        <p className="text-gray-600 text-sm mt-2">Keep it up! 🔥</p>
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
                        <p className="text-gray-600 text-sm">Time Spent</p>
                        <p className="text-4xl font-bold text-orange-600 mt-2">24.5h</p>
                        <p className="text-gray-600 text-sm mt-2">This month</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-bold text-gray-900 mb-4">Subject-wise Performance</h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-semibold text-gray-700">Mathematics</span>
                            <span className="text-sm font-bold text-blue-600">92%</span>
                          </div>
                          <div className="w-full bg-gray-300 rounded-full h-2">
                            <div className="bg-blue-600 h-2 rounded-full" style={{width: '92%'}}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-semibold text-gray-700">Physics</span>
                            <span className="text-sm font-bold text-purple-600">78%</span>
                          </div>
                          <div className="w-full bg-gray-300 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{width: '78%'}}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-semibold text-gray-700">Chemistry</span>
                            <span className="text-sm font-bold text-green-600">85%</span>
                          </div>
                          <div className="w-full bg-gray-300 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{width: '85%'}}></div>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm font-semibold text-gray-700">Biology</span>
                            <span className="text-sm font-bold text-red-600">81%</span>
                          </div>
                          <div className="w-full bg-gray-300 rounded-full h-2">
                            <div className="bg-red-600 h-2 rounded-full" style={{width: '81%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </>
                  )}

                  {selectedSubject === 'mathematics' && (
                    <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">📐 Mathematics Performance</h3>
                      <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-blue-100 p-6 rounded-lg">
                          <p className="text-gray-700 font-semibold">Current Score</p>
                          <p className="text-4xl font-bold text-blue-600 mt-2">92%</p>
                        </div>
                        <div className="bg-blue-100 p-6 rounded-lg">
                          <p className="text-gray-700 font-semibold">Questions Done</p>
                          <p className="text-4xl font-bold text-blue-600 mt-2">34</p>
                        </div>
                        <div className="bg-blue-100 p-6 rounded-lg">
                          <p className="text-gray-700 font-semibold">Time Spent</p>
                          <p className="text-4xl font-bold text-blue-600 mt-2">8.5h</p>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-gray-700"><strong>Topics Covered:</strong> Algebra, Trigonometry, Geometry, Calculus</p>
                        <p className="text-sm text-gray-700 mt-2"><strong>Strongest Area:</strong> Geometry (96%)</p>
                        <p className="text-sm text-gray-700 mt-1"><strong>Needs Work:</strong> Calculus (82%)</p>
                      </div>
                    </div>
                  )}

                  {selectedSubject === 'physics' && (
                    <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">⚛️ Physics Performance</h3>
                      <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-purple-100 p-6 rounded-lg">
                          <p className="text-gray-700 font-semibold">Current Score</p>
                          <p className="text-4xl font-bold text-purple-600 mt-2">78%</p>
                        </div>
                        <div className="bg-purple-100 p-6 rounded-lg">
                          <p className="text-gray-700 font-semibold">Questions Done</p>
                          <p className="text-4xl font-bold text-purple-600 mt-2">28</p>
                        </div>
                        <div className="bg-purple-100 p-6 rounded-lg">
                          <p className="text-gray-700 font-semibold">Time Spent</p>
                          <p className="text-4xl font-bold text-purple-600 mt-2">6.2h</p>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-gray-700"><strong>Topics Covered:</strong> Mechanics, Thermodynamics, Waves, Electromagnetism</p>
                        <p className="text-sm text-gray-700 mt-2"><strong>Strongest Area:</strong> Mechanics (85%)</p>
                        <p className="text-sm text-gray-700 mt-1"><strong>Needs Work:</strong> Electromagnetism (68%)</p>
                      </div>
                    </div>
                  )}

                  {selectedSubject === 'chemistry' && (
                    <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">🧪 Chemistry Performance</h3>
                      <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-green-100 p-6 rounded-lg">
                          <p className="text-gray-700 font-semibold">Current Score</p>
                          <p className="text-4xl font-bold text-green-600 mt-2">85%</p>
                        </div>
                        <div className="bg-green-100 p-6 rounded-lg">
                          <p className="text-gray-700 font-semibold">Questions Done</p>
                          <p className="text-4xl font-bold text-green-600 mt-2">31</p>
                        </div>
                        <div className="bg-green-100 p-6 rounded-lg">
                          <p className="text-gray-700 font-semibold">Time Spent</p>
                          <p className="text-4xl font-bold text-green-600 mt-2">7.1h</p>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-gray-700"><strong>Topics Covered:</strong> Organic, Inorganic, Physical, Analytical</p>
                        <p className="text-sm text-gray-700 mt-2"><strong>Strongest Area:</strong> Inorganic (89%)</p>
                        <p className="text-sm text-gray-700 mt-1"><strong>Needs Work:</strong> Organic Chemistry (76%)</p>
                      </div>
                    </div>
                  )}

                  {selectedSubject === 'biology' && (
                    <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6">🧬 Biology Performance</h3>
                      <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-red-100 p-6 rounded-lg">
                          <p className="text-gray-700 font-semibold">Current Score</p>
                          <p className="text-4xl font-bold text-red-600 mt-2">81%</p>
                        </div>
                        <div className="bg-red-100 p-6 rounded-lg">
                          <p className="text-gray-700 font-semibold">Questions Done</p>
                          <p className="text-4xl font-bold text-red-600 mt-2">34</p>
                        </div>
                        <div className="bg-red-100 p-6 rounded-lg">
                          <p className="text-gray-700 font-semibold">Time Spent</p>
                          <p className="text-4xl font-bold text-red-600 mt-2">2.7h</p>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-gray-700"><strong>Topics Covered:</strong> Genetics, Ecology, Cell Biology, Molecular</p>
                        <p className="text-sm text-gray-700 mt-2"><strong>Strongest Area:</strong> Cell Biology (88%)</p>
                        <p className="text-sm text-gray-700 mt-1"><strong>Needs Work:</strong> Genetics (74%)</p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {currentLearningModule === 'materials' && (
                <div className="bg-white rounded-xl p-8 border border-gray-100 mt-8">
                  <button onClick={() => setCurrentLearningModule('home')} className="mb-4 text-blue-600 hover:underline font-semibold">← Back to Dashboard</button>
                  
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">🗂️ Study Materials & Resources</h2>
                    <p className="text-gray-600">Access comprehensive learning materials for each subject</p>
                  </div>

                  {/* Filter by Subject */}
                  <div className="mb-6 w-48">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Filter by Subject:</label>
                    <select 
                      value={selectedSubject}
                      onChange={(e) => setSelectedSubject(e.target.value as any)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="all">All Subjects</option>
                      <option value="mathematics">Mathematics</option>
                      <option value="physics">Physics</option>
                      <option value="chemistry">Chemistry</option>
                      <option value="biology">Biology</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    {/* MATHEMATICS MATERIALS */}
                    {(selectedSubject === 'all' || selectedSubject === 'mathematics') && (
                      <>
                        <div className="border-t-2 border-blue-200 pt-4 mt-4">
                          <h3 className="text-xl font-bold text-blue-900 mb-4">📐 Mathematics Resources</h3>
                          <div className="space-y-3">
                            <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:shadow-md transition-all">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-bold text-gray-900">📚 Calculus Derivatives - Complete Guide</h4>
                                  <p className="text-gray-700 text-sm mt-1">12-page comprehensive guide with formulas, examples, and practice problems</p>
                                  <p className="text-xs text-gray-600 mt-2">Format: PDF | Difficulty: Intermediate | Updated: 2 days ago</p>
                                </div>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 whitespace-nowrap">Download</button>
                              </div>
                            </div>

                            <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:shadow-md transition-all">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-bold text-gray-900">📊 Algebra & Linear Equations - Problem Set</h4>
                                  <p className="text-gray-700 text-sm mt-1">50 solved examples with step-by-step solutions covering quadratic equations and inequalities</p>
                                  <p className="text-xs text-gray-600 mt-2">Format: PDF | Difficulty: Beginner-Intermediate | Updated: 1 week ago</p>
                                </div>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 whitespace-nowrap">Download</button>
                              </div>
                            </div>

                            <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:shadow-md transition-all">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-bold text-gray-900">🎥 Trigonometry Masterclass (Video Series)</h4>
                                  <p className="text-gray-700 text-sm mt-1">15 videos covering sine, cosine, tangent, and advanced trigonometric identities. Total 5+ hours</p>
                                  <p className="text-xs text-gray-600 mt-2">Format: Video | Difficulty: All Levels | Duration: 5.5 hours</p>
                                </div>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 whitespace-nowrap">Watch</button>
                              </div>
                            </div>

                            <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:shadow-md transition-all">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-bold text-gray-900">🧮 Interactive Math Calculator & Tool</h4>
                                  <p className="text-gray-700 text-sm mt-1">Online tool for graphing functions, solving equations, and visualizing mathematical concepts</p>
                                  <p className="text-xs text-gray-600 mt-2">Format: Web App | Difficulty: All Levels | Updated: 3 days ago</p>
                                </div>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 whitespace-nowrap">Launch</button>
                              </div>
                            </div>

                            <div className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:shadow-md transition-all">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-bold text-gray-900">📖 Statistics & Probability Handbook</h4>
                                  <p className="text-gray-700 text-sm mt-1">Complete reference guide for distributions, hypothesis testing, and statistical analysis with practice problems</p>
                                  <p className="text-xs text-gray-600 mt-2">Format: PDF | Difficulty: Advanced | Updated: 5 days ago</p>
                                </div>
                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 whitespace-nowrap">Download</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* PHYSICS MATERIALS */}
                    {(selectedSubject === 'all' || selectedSubject === 'physics') && (
                      <>
                        <div className="border-t-2 border-purple-200 pt-4 mt-4">
                          <h3 className="text-xl font-bold text-purple-900 mb-4">⚛️ Physics Resources</h3>
                          <div className="space-y-3">
                            <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200 hover:shadow-md transition-all">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-bold text-gray-900">🎥 Quantum Physics Explained (Video Series)</h4>
                                  <p className="text-gray-700 text-sm mt-1">5 videos explaining wave-particle duality, uncertainty principle, and quantum states. In-depth analysis included</p>
                                  <p className="text-xs text-gray-600 mt-2">Format: Video | Difficulty: Advanced | Duration: 8+ hours</p>
                                </div>
                                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 whitespace-nowrap">Watch</button>
                              </div>
                            </div>

                            <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200 hover:shadow-md transition-all">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-bold text-gray-900">📚 Mechanics & Dynamics - Complete Textbook</h4>
                                  <p className="text-gray-700 text-sm mt-1">250+ page comprehensive guide on Newton's laws, motion, forces, and energy with solved examples</p>
                                  <p className="text-xs text-gray-600 mt-2">Format: PDF | Difficulty: Intermediate | Updated: 1 month ago</p>
                                </div>
                                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 whitespace-nowrap">Download</button>
                              </div>
                            </div>

                            <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200 hover:shadow-md transition-all">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-bold text-gray-900">🔬 Electromagnetic Theory Interactive Simulator</h4>
                                  <p className="text-gray-700 text-sm mt-1">Virtual lab to experiment with electric fields, magnetic fields, and electromagnetic waves in real-time</p>
                                  <p className="text-xs text-gray-600 mt-2">Format: Web App | Difficulty: All Levels | Updated: 1 week ago</p>
                                </div>
                                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 whitespace-nowrap">Launch</button>
                              </div>
                            </div>

                            <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200 hover:shadow-md transition-all">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-bold text-gray-900">📊 Thermodynamics & Heat Transfer Guide</h4>
                                  <p className="text-gray-700 text-sm mt-1">Detailed explanations of entropy, enthalpy, laws of thermodynamics with 40+ numerical problems</p>
                                  <p className="text-xs text-gray-600 mt-2">Format: PDF | Difficulty: Intermediate-Advanced | Updated: 2 weeks ago</p>
                                </div>
                                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 whitespace-nowrap">Download</button>
                              </div>
                            </div>

                            <div className="p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200 hover:shadow-md transition-all">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-bold text-gray-900">🌊 Waves & Optics Problem Solutions</h4>
                                  <p className="text-gray-700 text-sm mt-1">100 solved problems on sound waves, light interference, diffraction, and lens systems with diagrams</p>
                                  <p className="text-xs text-gray-600 mt-2">Format: PDF | Difficulty: Intermediate | Updated: 3 days ago</p>
                                </div>
                                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 whitespace-nowrap">Download</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* CHEMISTRY MATERIALS */}
                    {(selectedSubject === 'all' || selectedSubject === 'chemistry') && (
                      <>
                        <div className="border-t-2 border-green-200 pt-4 mt-4">
                          <h3 className="text-xl font-bold text-green-900 mb-4">🧪 Chemistry Resources</h3>
                          <div className="space-y-3">
                            <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200 hover:shadow-md transition-all">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-bold text-gray-900">🧪 Chemical Bonding Interactive Simulator</h4>
                                  <p className="text-gray-700 text-sm mt-1">Interactive tool to visualize ionic, covalent, metallic bonds. Experiment with 50+ elements and compounds</p>
                                  <p className="text-xs text-gray-600 mt-2">Format: Web App | Difficulty: All Levels | Updated: 5 days ago</p>
                                </div>
                                <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 whitespace-nowrap">Launch</button>
                              </div>
                            </div>

                            <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200 hover:shadow-md transition-all">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-bold text-gray-900">📚 Organic Chemistry Reaction Mechanisms</h4>
                                  <p className="text-gray-700 text-sm mt-1">Comprehensive guide on SN1, SN2, elimination, addition, condensation reactions with 80+ examples</p>
                                  <p className="text-xs text-gray-600 mt-2">Format: PDF | Difficulty: Advanced | Updated: 1 week ago</p>
                                </div>
                                <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 whitespace-nowrap">Download</button>
                              </div>
                            </div>

                            <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200 hover:shadow-md transition-all">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-bold text-gray-900">⚗️ Lab Safety & Experimental Procedures</h4>
                                  <p className="text-gray-700 text-sm mt-1">Essential guide on chemical safety, lab equipment handling, and 15 fundamental experiments with precautions</p>
                                  <p className="text-xs text-gray-600 mt-2">Format: PDF | Difficulty: Beginner-Intermediate | Updated: 2 weeks ago</p>
                                </div>
                                <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 whitespace-nowrap">Download</button>
                              </div>
                            </div>

                            <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200 hover:shadow-md transition-all">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-bold text-gray-900">🎥 Electrochemistry & Redox Reactions (Video)</h4>
                                  <p className="text-gray-700 text-sm mt-1">8 detailed videos on oxidation states, balancing redox equations, electrodes, and galvanic cells</p>
                                  <p className="text-xs text-gray-600 mt-2">Format: Video | Difficulty: Intermediate | Duration: 4+ hours</p>
                                </div>
                                <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 whitespace-nowrap">Watch</button>
                              </div>
                            </div>

                            <div className="p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg border border-green-200 hover:shadow-md transition-all">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-bold text-gray-900">📊 Stoichiometry Calculator & Practice Problems</h4>
                                  <p className="text-gray-700 text-sm mt-1">Interactive tool for molar mass calculations, limiting reagents, and 100+ practice problems with solutions</p>
                                  <p className="text-xs text-gray-600 mt-2">Format: Web App | Difficulty: All Levels | Updated: 3 days ago</p>
                                </div>
                                <button className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 whitespace-nowrap">Launch</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* BIOLOGY MATERIALS */}
                    {(selectedSubject === 'all' || selectedSubject === 'biology') && (
                      <>
                        <div className="border-t-2 border-orange-200 pt-4 mt-4">
                          <h3 className="text-xl font-bold text-orange-900 mb-4">🧬 Biology Resources</h3>
                          <div className="space-y-3">
                            <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-200 hover:shadow-md transition-all">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-bold text-gray-900">📝 Biology Flashcard Deck (Cell Structure)</h4>
                                  <p className="text-gray-700 text-sm mt-1">100+ interactive flashcards covering cell organelles, functions, prokaryotes vs eukaryotes, and cell processes</p>
                                  <p className="text-xs text-gray-600 mt-2">Format: Interactive | Difficulty: Beginner | Updated: 1 week ago</p>
                                </div>
                                <button className="px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 whitespace-nowrap">Study</button>
                              </div>
                            </div>

                            <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-200 hover:shadow-md transition-all">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-bold text-gray-900">🎥 Photosynthesis & Respiration Explained (Video)</h4>
                                  <p className="text-gray-700 text-sm mt-1">6 comprehensive videos on light reactions, dark reactions, cellular respiration with animations and diagrams</p>
                                  <p className="text-xs text-gray-600 mt-2">Format: Video | Difficulty: Intermediate | Duration: 3+ hours</p>
                                </div>
                                <button className="px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 whitespace-nowrap">Watch</button>
                              </div>
                            </div>

                            <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-200 hover:shadow-md transition-all">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-bold text-gray-900">🧬 Genetics & Inheritance - Complete Guide</h4>
                                  <p className="text-gray-700 text-sm mt-1">Detailed explanation of Mendelian genetics, DNA replication, protein synthesis, mutations with 60+ solved Punnett squares</p>
                                  <p className="text-xs text-gray-600 mt-2">Format: PDF | Difficulty: Intermediate-Advanced | Updated: 10 days ago</p>
                                </div>
                                <button className="px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 whitespace-nowrap">Download</button>
                              </div>
                            </div>

                            <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-200 hover:shadow-md transition-all">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-bold text-gray-900">❤️ Human Anatomy & Physiology Interactive 3D Model</h4>
                                  <p className="text-gray-700 text-sm mt-1">Interactive 3D model of human body systems: skeletal, muscular, circulatory, nervous, digestive, respiratory</p>
                                  <p className="text-xs text-gray-600 mt-2">Format: Web App | Difficulty: All Levels | Updated: 2 days ago</p>
                                </div>
                                <button className="px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 whitespace-nowrap">Launch</button>
                              </div>
                            </div>

                            <div className="p-4 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg border border-orange-200 hover:shadow-md transition-all">
                              <div className="flex justify-between items-start">
                                <div>
                                  <h4 className="font-bold text-gray-900">🌿 Ecology & Evolution Study Notes</h4>
                                  <p className="text-gray-700 text-sm mt-1">Comprehensive notes on ecosystems, food chains, biodiversity, natural selection, and adaptation with diagrams</p>
                                  <p className="text-xs text-gray-600 mt-2">Format: PDF | Difficulty: Beginner-Intermediate | Updated: 3 weeks ago</p>
                                </div>
                                <button className="px-4 py-2 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 whitespace-nowrap">Download</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        // LANDING PAGE
        <>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="section-container py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="text-white" size={24} />
            </div>
            <span className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Infinity Tutor
            </span>
          </div>
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <>
                <span className="text-sm text-gray-700">
                  Welcome, <span className="font-semibold">{userFullName || userEmail}</span>
                </span>
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    setUserEmail('');
                    setUserFullName('');
                  }}
                  className="px-4 py-2 bg-red-100 text-red-600 rounded-lg font-semibold hover:bg-red-200 transition-all flex items-center gap-2"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Login / Sign Up
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 gradient-soft">
        <div className="section-container text-center">
          <div className="mb-8 inline-block px-4 py-2 bg-blue-100 rounded-full">
            <span className="text-blue-700 font-semibold text-sm flex items-center gap-2">
              <Sparkles size={16} />
              The Future of Personalized Learning
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-gray-900 leading-tight">
            A Tutor That<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
              Never Gets Tired
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Infinity Tutor - An adaptive STEM learning companion that understands your mistakes and grows with you
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="btn-primary flex items-center gap-2 group"
            >
              Get Started Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="px-8 py-3 border-2 border-gray-300 text-gray-900 rounded-lg font-semibold hover:border-purple-600 hover:text-purple-600 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                What Makes Infinity Tutor <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Different</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Traditional tutoring follows a one-size-fits-all approach. Infinity Tutor leverages advanced AI to understand each student's unique learning patterns, mistakes, and growth trajectory.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our platform doesn't just answer questions—it analyzes why a student got something wrong, adapts the teaching method, and adjusts difficulty in real-time to keep learners in their optimal zone of development.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <span>AI-powered adaptive learning</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <span>Available 24/7 - always ready to help</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="text-green-500 flex-shrink-0" size={24} />
                  <span>Personalized to each student's learning style</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-gray-100">
                <div className="space-y-4">
                  <div className="h-12 bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg"></div>
                  <div className="h-12 bg-gradient-to-r from-purple-200 to-pink-200 rounded-lg"></div>
                  <div className="h-12 bg-gradient-to-r from-pink-200 to-blue-200 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 gradient-soft">
        <div className="section-container">
          <h2 className="section-title">Powerful Features</h2>
          <p className="section-subtitle">
            Everything you need for effective, adaptive learning
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="card-hover bg-white p-8 rounded-xl border border-gray-100 cursor-pointer"
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 ${
                    hoveredFeature === index 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white scale-110' 
                      : 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600'
                  }`}>
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4">
        <div className="section-container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Simple, intuitive, and effective learning in four steps
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="card-hover"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                <div className="relative">
                  <div className={`text-6xl font-bold mb-4 transition-all duration-300 ${
                    hoveredStep === index 
                      ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600' 
                      : 'text-gray-200'
                  }`}>
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-3 w-6 h-1 bg-gradient-to-r from-blue-400 to-purple-400 transform translate-x-full"></div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Learning?</h3>
            <p className="text-lg mb-6 opacity-90">Start with a free trial today and experience personalized learning</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-3 bg-white text-purple-600 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300"
            >
              Start Learning Free
            </button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 gradient-soft">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
            <div className="p-8">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                10K+
              </div>
              <p className="text-xl text-gray-700 font-semibold">Students Empowered</p>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                95%
              </div>
              <p className="text-xl text-gray-700 font-semibold">Improvement Rate</p>
            </div>
            <div className="p-8">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600 mb-2">
                24/7
              </div>
              <p className="text-xl text-gray-700 font-semibold">Always Available</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="section-title">Our Mission</h2>
            <p className="text-center text-lg text-gray-600 leading-relaxed">
              We believe quality education should be accessible, affordable, and personalized for everyone. 
              Infinity Tutor breaks down barriers to learning by combining AI-powered adaptation with human-centered design. 
              Whether you're a struggling student, a high achiever seeking challenges, or someone learning independently, 
              we're here to guide you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Future Scope Section */}
      <section className="py-20 px-4">
        <div className="section-container">
          <h2 className="section-title">What's Coming Next</h2>
          <p className="section-subtitle">
            Exciting features in development to enhance your learning experience
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {futureFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-xl border-2 border-dashed border-gray-300 text-center card-hover">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-500">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 text-lg">
              More features coming soon! <span className="font-semibold text-purple-600">Follow us for updates</span>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="section-container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                  <Brain size={20} />
                </div>
                <span className="font-bold text-lg">Infinity Tutor</span>
              </div>
              <p className="text-gray-400 text-sm">Adaptive STEM Learning Companion</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
              <p>&copy; 2024 Infinity Tutor. All rights reserved.</p>
              <p className="flex items-center gap-2">
                ✨ Built for Hackathon
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Authentication Modal/Dashboard */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => {
                setIsModalOpen(false);
                // Only reset to signup if not logged in
                if (!isLoggedIn) {
                  setAuthScreen('signup');
                  setEmail('');
                  setUserName('');
                  setVerificationCode('');
                }
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={24} />
            </button>

            {/* Sign Up Screen */}
            {authScreen === 'signup' && (
              <>
                <h2 className="text-3xl font-bold mb-2 text-gray-900">Get Started Free</h2>
                <p className="text-gray-600 mb-6">Join thousands of students transforming their learning journey</p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setUserEmail(email);
                    setUserFullName(userName);
                    setAuthScreen('verify');
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Learning Level
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    >
                      <option value="">Select your level</option>
                      <option value="high-school">High School</option>
                      <option value="college">College</option>
                      <option value="professional">Professional</option>
                      <option value="hobbyist">Hobbyist Learning</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 mt-6"
                  >
                    Continue to Email Verification
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    No credit card required. Start learning in seconds.
                  </p>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    Already have an account?{' '}
                    <button
                      onClick={() => setAuthScreen('login')}
                      className="text-purple-600 font-semibold hover:underline"
                    >
                      Login here
                    </button>
                  </p>
                </div>
              </>
            )}

            {/* Email Verification Screen */}
            {authScreen === 'verify' && (
              <>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-green-500" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold mb-2 text-gray-900">Verify Your Email</h2>
                  <p className="text-gray-600 text-sm">We sent a confirmation email to <span className="font-semibold">{userEmail}</span></p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (verificationCode === '123456') {
                      setIsLoggedIn(true);
                      setAuthScreen('dashboard');
                      setPassword('');
                      setVerificationCode('');
                    } else {
                      alert('Invalid code. Use any 6-digit code (demo: 123456)');
                    }
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Verification Code
                    </label>
                    <input
                      type="text"
                      placeholder="Enter 6-digit code"
                      maxLength={6}
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all text-center text-2xl tracking-widest"
                    />
                    <p className="text-xs text-gray-500 text-center mt-2">
                      Demo code: <span className="font-mono bg-gray-100 px-2 py-1 rounded">123456</span>
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 mt-6"
                  >
                    Verify & Continue
                  </button>

                  <button
                    type="button"
                    onClick={() => setAuthScreen('signup')}
                    className="w-full py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-purple-600 hover:text-purple-600 transition-all"
                  >
                    Back to Sign Up
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Didn't receive the code? Check your spam folder or click back to try again.
                </p>
              </>
            )}

            {/* Login Screen */}
            {authScreen === 'login' && (
              <>
                <h2 className="text-3xl font-bold mb-2 text-gray-900">Welcome Back</h2>
                <p className="text-gray-600 mb-6">Login to continue your learning journey</p>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email && password) {
                      setUserEmail(email);
                      setUserFullName(email.split('@')[0]); // Use username from email
                      setIsLoggedIn(true);
                      setAuthScreen('dashboard');
                      setTimeout(() => {
                        // Ensure state updates before clearing
                        setPassword('');
                        setEmail('');
                      }, 100);
                    } else {
                      alert('Please enter both email and password');
                    }
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 mt-6"
                  >
                    Login
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-600 text-center">
                    Don't have an account?{' '}
                    <button
                      onClick={() => setAuthScreen('signup')}
                      className="text-purple-600 font-semibold hover:underline"
                    >
                      Sign up here
                    </button>
                  </p>
                </div>
              </>
            )}

            {/* Dashboard Screen */}
            {authScreen === 'dashboard' && (
              <>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-green-500" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Welcome, {userFullName || 'Student'}!</h2>
                  <p className="text-gray-600 text-sm mt-2">Your email has been verified</p>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 mb-6 border border-blue-200">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="text-blue-600" size={24} />
                    <h3 className="font-bold text-gray-900">Ready to Start Learning?</h3>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">
                    Your personalized learning dashboard is now available. Choose a topic and start solving adaptive questions.
                  </p>
                  <button 
                    onClick={() => {
                      setIsOnDashboard(true);
                      setIsModalOpen(false);
                    }}
                    className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Go to Dashboard
                  </button>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="text-green-500 flex-shrink-0" size={20} />
                    <span className="text-sm text-gray-700">Email verified</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Sparkles className="text-purple-500 flex-shrink-0" size={20} />
                    <span className="text-sm text-gray-700">AI tutor ready</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Brain className="text-blue-500 flex-shrink-0" size={20} />
                    <span className="text-sm text-gray-700">Personalization enabled</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    setIsModalOpen(false);
                    setAuthScreen('signup');
                    setUserEmail('');
                    setUserFullName('');
                    setEmail('');
                    setPassword('');
                    setVerificationCode('');
                  }}
                  className="w-full py-3 border-2 border-red-300 text-red-600 rounded-lg font-semibold hover:bg-red-50 transition-all flex items-center justify-center gap-2"
                >
                  <LogOut size={20} />
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Floating Login Button for Logged In User */}
      {isLoggedIn && !isModalOpen && (
        <button
          onClick={() => {
            setIsModalOpen(true);
            setAuthScreen('dashboard');
          }}
          className="fixed top-28 right-6 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
        >
          Dashboard
        </button>
      )}
        </>
      )}
    </div>
  );
}

export default App;
