export type PersonalityDimension = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
export type PersonalityType = `${Extract<PersonalityDimension, 'E' | 'I'>}${Extract<PersonalityDimension, 'S' | 'N'>}${Extract<PersonalityDimension, 'T' | 'F'>}${Extract<PersonalityDimension, 'J' | 'P'>}`;

export interface Question {
  id: number;
  text: string;
  textAr?: string; // Arabic version of the question
  dimension: [PersonalityDimension, PersonalityDimension]; // [option A dimension, option B dimension]
}

export interface PersonalityTypeInfo {
  type: PersonalityType;
  name: string;
  nameAr?: string; // Arabic name
  description: string;
  descriptionAr?: string; // Arabic description
  strengths: string[];
  strengthsAr?: string[]; // Arabic strengths
  weaknesses: string[];
  weaknessesAr?: string[]; // Arabic weaknesses
  careers?: string[]; // Recommended careers
  careersAr?: string[]; // Arabic recommended careers
  famousPeople?: string[]; // Famous people with this personality type
  famousPeopleAr?: string[]; // Arabic famous people with this personality type
}

export const questions: Question[] = [
  {
    id: 1,
    text: "At social events, you prefer to:",
    textAr: "في المناسبات الاجتماعية، تفضل أن:",
    dimension: ["E", "I"],
  },
  {
    id: 2,
    text: "You find it difficult to introduce yourself to other people.",
    textAr: "تجد صعوبة في تقديم نفسك للآخرين.",
    dimension: ["I", "E"],
  },
  {
    id: 3,
    text: "You often get so lost in thoughts that you ignore or forget your surroundings.",
    textAr: "غالبًا ما تستغرق في أفكارك لدرجة أنك تتجاهل أو تنسى محيطك.",
    dimension: ["N", "S"],
  },
  {
    id: 4,
    text: "You try to respond to your emails as soon as possible and cannot stand a messy inbox.",
    textAr: "تحاول الرد على رسائل البريد الإلكتروني في أسرع وقت ممكن ولا تحتمل صندوق وارد غير منظم.",
    dimension: ["J", "P"],
  },
  {
    id: 5,
    text: "You find it easy to stay relaxed even when there is some pressure.",
    textAr: "تجد من السهل أن تبقى مسترخيًا حتى عندما يكون هناك بعض الضغط.",
    dimension: ["T", "F"],
  },
  {
    id: 6,
    text: "You do not usually initiate conversations.",
    textAr: "أنت لا تبادر عادة ببدء المحادثات.",
    dimension: ["I", "E"],
  },
  {
    id: 7,
    text: "You rarely do something just out of sheer curiosity.",
    textAr: "نادرًا ما تفعل شيئًا لمجرد الفضول.",
    dimension: ["S", "N"],
  },
  {
    id: 8,
    text: "You feel superior to other people.",
    textAr: "تشعر بأنك متفوق على الآخرين.",
    dimension: ["T", "F"],
  },
  {
    id: 9,
    text: "Being organized is more important to you than being adaptable.",
    textAr: "كونك منظمًا أكثر أهمية بالنسبة لك من كونك قابلاً للتكيف.",
    dimension: ["J", "P"],
  },
  {
    id: 10,
    text: "You are usually highly motivated and energetic.",
    textAr: "أنت عادة متحمس وملئ بالطاقة.",
    dimension: ["E", "I"],
  },
  {
    id: 11,
    text: "Winning a debate matters less to you than making sure no one gets upset.",
    textAr: "الفوز في النقاش أقل أهمية بالنسبة لك من التأكد من عدم إزعاج أي شخص.",
    dimension: ["F", "T"],
  },
  {
    id: 12,
    text: "You frequently find yourself lost in thought when walking in nature.",
    textAr: "غالبًا ما تجد نفسك مستغرقًا في التفكير عند المشي في الطبيعة.",
    dimension: ["N", "S"],
  },
  {
    id: 13,
    text: "Your travel plans are usually well thought out.",
    textAr: "خطط سفرك عادة ما تكون مدروسة جيدًا.",
    dimension: ["J", "P"],
  },
  {
    id: 14,
    text: "It is often difficult for you to relate to other people's feelings.",
    textAr: "غالبًا ما يكون من الصعب عليك التعاطف مع مشاعر الآخرين.",
    dimension: ["T", "F"],
  },
  {
    id: 15,
    text: "Your mood can change very quickly.",
    textAr: "مزاجك يمكن أن يتغير بسرعة كبيرة.",
    dimension: ["F", "T"],
  },
  {
    id: 16,
    text: "You prefer to completely finish one project before starting another.",
    textAr: "تفضل إنهاء مشروع واحد تمامًا قبل البدء بآخر.",
    dimension: ["J", "P"],
  },
  {
    id: 17,
    text: "At parties, you spend more time talking than listening.",
    textAr: "في الحفلات، تقضي وقتًا أطول في التحدث أكثر من الاستماع.",
    dimension: ["E", "I"],
  },
  {
    id: 18,
    text: "You are more interested in theoretical concepts than practical applications.",
    textAr: "أنت أكثر اهتمامًا بالمفاهيم النظرية من التطبيقات العملية.",
    dimension: ["N", "S"],
  },
  {
    id: 19,
    text: "When making a decision, you rely more on your feelings than on analysis of the situation.",
    textAr: "عند اتخاذ قرار، تعتمد أكثر على مشاعرك من تحليل الموقف.",
    dimension: ["F", "T"],
  },
  {
    id: 20,
    text: "You prefer to have a wide circle of acquaintances than a small, close circle of friends.",
    textAr: "تفضل أن يكون لديك دائرة واسعة من المعارف على دائرة صغيرة ومقربة من الأصدقاء.",
    dimension: ["E", "I"],
  },
  // Adding 30 more questions to reach a total of 50
  {
    id: 21,
    text: "You often spend time exploring unrealistic yet intriguing ideas.",
    textAr: "غالبًا ما تقضي وقتًا في استكشاف أفكار غير واقعية ولكنها مثيرة للاهتمام.",
    dimension: ["N", "S"],
  },
  {
    id: 22,
    text: "You tend to focus more on details than the big picture.",
    textAr: "تميل إلى التركيز على التفاصيل أكثر من الصورة الكبيرة.",
    dimension: ["S", "N"],
  },
  {
    id: 23,
    text: "You are typically the one who starts conversations at social gatherings.",
    textAr: "أنت عادة الشخص الذي يبدأ المحادثات في التجمعات الاجتماعية.",
    dimension: ["E", "I"],
  },
  {
    id: 24,
    text: "You tend to sympathize with people who have experienced hardships, even if they've made mistakes.",
    textAr: "تميل إلى التعاطف مع الأشخاص الذين واجهوا صعوبات، حتى إذا ارتكبوا أخطاء.",
    dimension: ["F", "T"],
  },
  {
    id: 25,
    text: "Your desk or workspace is usually well-organized.",
    textAr: "مكتبك أو مساحة عملك عادة ما تكون منظمة جيدًا.",
    dimension: ["J", "P"],
  },
  {
    id: 26,
    text: "You enjoy social events with many people more than intimate gatherings with close friends.",
    textAr: "تستمتع بالمناسبات الاجتماعية مع كثير من الناس أكثر من التجمعات الحميمة مع الأصدقاء المقربين.",
    dimension: ["E", "I"],
  },
  {
    id: 27,
    text: "You prefer established methods over experimenting with new approaches.",
    textAr: "تفضل الطرق المعتادة على تجربة أساليب جديدة.",
    dimension: ["S", "N"],
  },
  {
    id: 28,
    text: "When making group decisions, you think fairness is more important than harmony.",
    textAr: "عند اتخاذ قرارات جماعية، تعتقد أن العدالة أهم من الانسجام.",
    dimension: ["T", "F"],
  },
  {
    id: 29,
    text: "You prefer having a flexible schedule to a structured routine.",
    textAr: "تفضل أن يكون لديك جدول مرن بدلاً من روتين منظم.",
    dimension: ["P", "J"],
  },
  {
    id: 30,
    text: "You feel drained after socializing for extended periods, even if you enjoyed it.",
    textAr: "تشعر بالإرهاق بعد التفاعل الاجتماعي لفترات طويلة، حتى لو استمتعت به.",
    dimension: ["I", "E"],
  },
  {
    id: 31,
    text: "You often contemplate the complexity of life and existence.",
    textAr: "غالبًا ما تتأمل في تعقيدات الحياة والوجود.",
    dimension: ["N", "S"],
  },
  {
    id: 32,
    text: "You value objective truth over personal feelings when making important decisions.",
    textAr: "تقدر الحقيقة الموضوعية أكثر من المشاعر الشخصية عند اتخاذ قرارات مهمة.",
    dimension: ["T", "F"],
  },
  {
    id: 33,
    text: "You prefer to have backup plans for your backup plans.",
    textAr: "تفضل أن يكون لديك خطط احتياطية لخططك الاحتياطية.",
    dimension: ["J", "P"],
  },
  {
    id: 34,
    text: "You find it challenging to work on projects that lack clear guidelines and structures.",
    textAr: "تجد صعوبة في العمل على مشاريع تفتقر إلى إرشادات وهياكل واضحة.",
    dimension: ["J", "P"],
  },
  {
    id: 35,
    text: "You avoid leadership roles in group settings.",
    textAr: "تتجنب أدوار القيادة في المجموعات.",
    dimension: ["I", "E"],
  },
  {
    id: 36,
    text: "You are more practical than imaginative.",
    textAr: "أنت أكثر عملية من كونك خياليًا.",
    dimension: ["S", "N"],
  },
  {
    id: 37,
    text: "You find it difficult to make decisions based purely on logic when they affect people you care about.",
    textAr: "تجد صعوبة في اتخاذ قرارات بناءً على المنطق البحت عندما تؤثر على الأشخاص الذين تهتم بهم.",
    dimension: ["F", "T"],
  },
  {
    id: 38,
    text: "You prefer to improvise rather than create a detailed plan.",
    textAr: "تفضل الارتجال بدلاً من إنشاء خطة مفصلة.",
    dimension: ["P", "J"],
  },
  {
    id: 39,
    text: "You find it energizing to be at the center of attention.",
    textAr: "تجد أنه من المنشط أن تكون محور الاهتمام.",
    dimension: ["E", "I"],
  },
  {
    id: 40,
    text: "You notice patterns and connections that others might miss.",
    textAr: "تلاحظ الأنماط والروابط التي قد يفتقدها الآخرون.",
    dimension: ["N", "S"],
  },
  {
    id: 41,
    text: "You often prioritize efficiency over people's feelings.",
    textAr: "غالبًا ما تعطي الأولوية للكفاءة على مشاعر الناس.",
    dimension: ["T", "F"],
  },
  {
    id: 42,
    text: "You feel more comfortable following a schedule than going with the flow.",
    textAr: "تشعر براحة أكبر عند اتباع جدول زمني بدلاً من الانسياق مع التيار.",
    dimension: ["J", "P"],
  },
  {
    id: 43,
    text: "After a long and exhausting week, you prefer to spend time with friends rather than staying home alone.",
    textAr: "بعد أسبوع طويل ومرهق، تفضل قضاء الوقت مع الأصدقاء بدلاً من البقاء وحيدًا في المنزل.",
    dimension: ["E", "I"],
  },
  {
    id: 44,
    text: "You are more interested in what could be rather than what is.",
    textAr: "أنت أكثر اهتمامًا بما يمكن أن يكون بدلاً من ما هو كائن.",
    dimension: ["N", "S"],
  },
  {
    id: 45,
    text: "You generally prioritize your own needs over the needs of others.",
    textAr: "عمومًا، تعطي الأولوية لاحتياجاتك الخاصة على احتياجات الآخرين.",
    dimension: ["T", "F"],
  },
  {
    id: 46,
    text: "You prefer environments that are orderly and clean.",
    textAr: "تفضل البيئات المنظمة والنظيفة.",
    dimension: ["J", "P"],
  },
  {
    id: 47,
    text: "You enjoy being the one who creates harmony in group situations.",
    textAr: "تستمتع بكونك الشخص الذي يخلق الانسجام في المواقف الجماعية.",
    dimension: ["F", "T"],
  },
  {
    id: 48,
    text: "You find it easy to stay focused on a task for long periods without getting distracted.",
    textAr: "تجد أنه من السهل البقاء مركزًا على مهمة لفترات طويلة دون أن تشتت انتباهك.",
    dimension: ["J", "P"],
  },
  {
    id: 49,
    text: "You would rather spend time in a quiet room reading than at a lively party.",
    textAr: "تفضل قضاء الوقت في غرفة هادئة للقراءة بدلاً من حفلة صاخبة.",
    dimension: ["I", "E"],
  },
  {
    id: 50,
    text: "You trust your experience more than theoretical frameworks when solving problems.",
    textAr: "تثق في خبرتك أكثر من الأطر النظرية عند حل المشكلات.",
    dimension: ["S", "N"],
  }
];

export const questionChoices: Record<PersonalityDimension, Record<string, string>> = {
  E: {
    en: "Interact with many people, feeling energized",
    ar: "التفاعل مع الكثير من الناس، والشعور بالنشاط"
  },
  I: {
    en: "Have deeper conversations with a few close friends",
    ar: "إجراء محادثات أعمق مع عدد قليل من الأصدقاء المقربين"
  },
  S: {
    en: "Concrete facts and details",
    ar: "الحقائق والتفاصيل الملموسة"
  },
  N: {
    en: "Patterns and possibilities for the future",
    ar: "الأنماط والاحتمالات للمستقبل"
  },
  T: {
    en: "Logic and objective analysis",
    ar: "المنطق والتحليل الموضوعي"
  },
  F: {
    en: "Your values and how others might feel",
    ar: "قيمك وكيف قد يشعر الآخرون"
  },
  J: {
    en: "Structured and organized",
    ar: "منظم ومرتب"
  },
  P: {
    en: "Flexible and spontaneous",
    ar: "مرن وتلقائي"
  }
};

export const dimensionDescriptions: Record<PersonalityDimension, Record<string, string>> = {
  E: {
    en: "Extraversion - Gets energy from external world, social interactions",
    ar: "الانبساط - يستمد الطاقة من العالم الخارجي والتفاعلات الاجتماعية"
  },
  I: {
    en: "Introversion - Gets energy from internal reflection, quiet time",
    ar: "الانطواء - يستمد الطاقة من التأمل الداخلي وأوقات الهدوء"
  },
  S: {
    en: "Sensing - Focuses on concrete facts, details, and present reality",
    ar: "الإحساس - يركز على الحقائق الملموسة والتفاصيل والواقع الحالي"
  },
  N: {
    en: "Intuition - Focuses on patterns, possibilities, and future potential",
    ar: "الحدس - يركز على الأنماط والاحتمالات والإمكانات المستقبلية"
  },
  T: {
    en: "Thinking - Makes decisions based on logic, analysis, and consistency",
    ar: "التفكير - يتخذ القرارات بناءً على المنطق والتحليل والاتساق"
  },
  F: {
    en: "Feeling - Makes decisions based on values, harmony, and empathy",
    ar: "الشعور - يتخذ القرارات بناءً على القيم والانسجام والتعاطف"
  },
  J: {
    en: "Judging - Prefers structure, planning, and clear decisions",
    ar: "الحكم - يفضل الهيكل والتخطيط والقرارات الواضحة"
  },
  P: {
    en: "Perceiving - Prefers flexibility, spontaneity, and keeping options open",
    ar: "الإدراك - يفضل المرونة والتلقائية وإبقاء الخيارات مفتوحة"
  }
};

export const answerLabels = {
  en: [
    "Strongly Agree",
    "Agree", 
    "Neutral",
    "Disagree",
    "Strongly Disagree"
  ],
  ar: [
    "أوافق بشدة",
    "أوافق",
    "محايد",
    "لا أوافق",
    "لا أوافق بشدة"
  ]
};

export const personalityTypes: PersonalityTypeInfo[] = [
  {
    type: "INFJ",
    name: "The Advocate",
    nameAr: "المناصر",
    description: "Quiet and mystical, yet very inspiring and tireless idealists. INFJs want to help others and make the world a better place.",
    descriptionAr: "هادئون وغامضون، ومع ذلك ملهمون ومثاليون لا يكلون. يريد الـINFJs مساعدة الآخرين وجعل العالم مكانًا أفضل.",
    strengths: ["Insightful", "Creative", "Principled", "Passionate", "Altruistic"],
    strengthsAr: ["بصيرة", "إبداعي", "مبدئي", "متحمس", "غيري"],
    weaknesses: ["Perfectionist", "Burnout prone", "Can be overly private", "Sensitive to criticism"],
    weaknessesAr: ["كمالي", "عرضة للإرهاق", "يمكن أن يكون منطويًا للغاية", "حساس للنقد"],
    careers: ["Counselor", "Psychologist", "Writer", "Professor", "Healthcare Professional"],
    famousPeople: ["Martin Luther King Jr.", "Nelson Mandela", "Plato", "Carl Jung"]
  },
  {
    type: "INFP",
    name: "The Mediator",
    nameAr: "الوسيط",
    description: "Poetic, kind, and altruistic, always eager to help a good cause. INFPs are guided by their own core values and beliefs.",
    descriptionAr: "شاعريون ولطيفون وإيثاريون، حريصون دائمًا على المساعدة في قضية نبيلة. يتم توجيه الـINFPs من خلال قيمهم ومعتقداتهم الأساسية.",
    strengths: ["Empathetic", "Creative", "Open-minded", "Passionate", "Idealistic"],
    strengthsAr: ["متعاطف", "مبدع", "متفتح", "متحمس", "مثالي"],
    weaknesses: ["Idealistic", "Impractical", "Self-isolating", "Sensitive to criticism"],
    weaknessesAr: ["مثالي", "غير عملي", "عازل لنفسه", "حساس للنقد"],
    careers: ["Writer", "Artist", "Social Worker", "Teacher", "Musician"],
    famousPeople: ["William Shakespeare", "J.R.R. Tolkien", "John Lennon", "Lisa Kudrow"]
  },
  {
    type: "INTJ",
    name: "The Architect",
    nameAr: "المهندس",
    description: "Imaginative and strategic thinkers with a plan for everything. INTJs are analytical, creative, and driven to achieve their goals.",
    descriptionAr: "مفكرون مبدعون واستراتيجيون لديهم خطة لكل شيء. الـINTJs تحليليون ومبدعون ومدفوعون لتحقيق أهدافهم.",
    strengths: ["Strategic", "Independent", "Determined", "Knowledgeable", "Analytical"],
    strengthsAr: ["استراتيجي", "مستقل", "حازم", "واسع المعرفة", "تحليلي"],
    weaknesses: ["Arrogant", "Dismissive of emotions", "Overly critical", "Perfectionistic"],
    weaknessesAr: ["متغطرس", "رافض للعواطف", "مفرط في الانتقاد", "متعصب للكمال"],
    careers: ["Engineer", "Scientist", "Lawyer", "Professor", "Business Analyst"],
    famousPeople: ["Elon Musk", "Mark Zuckerberg", "Stephen Hawking", "Christopher Nolan"]
  },
  {
    type: "INTP",
    name: "The Logician",
    nameAr: "المنطقي",
    description: "Innovative inventors with an unquenchable thirst for knowledge. INTPs are logical, analytical, and enjoy exploring complex ideas.",
    descriptionAr: "مخترعون مبتكرون لديهم تعطش لا يهدأ للمعرفة. الـINTPs منطقيون وتحليليون ويستمتعون باستكشاف الأفكار المعقدة.",
    strengths: ["Analytical", "Original", "Open-minded", "Curious", "Objective"],
    strengthsAr: ["تحليلي", "أصلي", "متفتح", "فضولي", "موضوعي"],
    weaknesses: ["Disconnected", "Insensitive", "Perfectionist", "Overly critical"],
    weaknessesAr: ["منفصل", "غير حساس", "متعصب للكمال", "مفرط في الانتقاد"],
    careers: ["Programmer", "Researcher", "Mathematician", "Physicist", "Philosopher"],
    famousPeople: ["Albert Einstein", "Bill Gates", "Isaac Newton", "Marie Curie"]
  },
  {
    type: "ENFJ",
    name: "The Protagonist",
    nameAr: "البطل",
    description: "Charismatic and inspiring leaders, able to mesmerize their listeners. ENFJs are passionate, empathetic, and driven to help others.",
    descriptionAr: "قادة يتمتعون بالكاريزما والملهمون، قادرون على سحر مستمعيهم. الـENFJs متحمسون ومتعاطفون ومدفوعون لمساعدة الآخرين.",
    strengths: ["Charismatic", "Empathetic", "Reliable", "Natural leaders", "Passionate"],
    strengthsAr: ["يتمتع بالكاريزما", "متعاطف", "موثوق", "قادة بالفطرة", "متحمس"],
    weaknesses: ["Idealistic", "Too selfless", "Approval-seeking", "Sensitive to criticism"],
    weaknessesAr: ["مثالي", "غير أناني للغاية", "يسعى للحصول على الموافقة", "حساس للنقد"],
    careers: ["Teacher", "Politician", "Social Worker", "Counselor", "Human Resources"],
    famousPeople: ["Barack Obama", "Oprah Winfrey", "Martin Luther King Jr.", "Maya Angelou"]
  },
  {
    type: "ENFP",
    name: "The Campaigner",
    nameAr: "الناشط",
    description: "Enthusiastic, creative, and sociable free spirits who can always find a reason to smile. ENFPs are energetic, curious, and excellent communicators.",
    descriptionAr: "أرواح حرة متحمسة ومبدعة واجتماعية يمكنها دائمًا إيجاد سبب للابتسام. الـENFPs نشيطون وفضوليون ومتواصلون ممتازون.",
    strengths: ["Curious", "Observant", "Energetic", "Excellent communicators", "Creative"],
    strengthsAr: ["فضولي", "مراقب", "نشيط", "متواصلون ممتازون", "مبدع"],
    weaknesses: ["People-pleasing", "Unfocused", "Disorganized", "Easily stressed"],
    weaknessesAr: ["إرضاء الناس", "غير مركز", "غير منظم", "يتوتر بسهولة"],
    careers: ["Journalist", "Actor", "Entrepreneur", "Designer", "Public Relations"],
    famousPeople: ["Robert Downey Jr.", "Robin Williams", "Mark Twain", "Ellen DeGeneres"]
  },
  {
    type: "ENTJ",
    name: "The Commander",
    nameAr: "القائد",
    description: "Bold, imaginative, and strong-willed leaders, always finding a way – or making one. ENTJs are strategic, efficient, and self-confident.",
    descriptionAr: "قادة جريئون ومبدعون وذوو إرادة قوية، يجدون دائمًا طريقة - أو يصنعونها. الـENTJs استراتيجيون وفعالون وواثقون بأنفسهم.",
    strengths: ["Efficient", "Energetic", "Self-confident", "Strategic", "Decisive"],
    strengthsAr: ["فعال", "نشيط", "واثق بنفسه", "استراتيجي", "حاسم"],
    weaknesses: ["Stubborn", "Impatient", "Arrogant", "Overly critical"],
    weaknessesAr: ["عنيد", "غير صبور", "متغطرس", "مفرط في الانتقاد"],
    careers: ["Executive", "Entrepreneur", "Lawyer", "Consultant", "Politician"],
    famousPeople: ["Steve Jobs", "Margaret Thatcher", "Bill Gates", "Franklin D. Roosevelt"]
  },
  {
    type: "ENTP",
    name: "The Debater",
    nameAr: "المناظر",
    description: "Smart and curious thinkers who cannot resist an intellectual challenge. ENTPs are knowledgeable, quick thinkers, and charismatic.",
    descriptionAr: "مفكرون أذكياء وفضوليون لا يستطيعون مقاومة التحدي الفكري. الـENTPs واسعو المعرفة وسريعو التفكير ويتمتعون بالكاريزما.",
    strengths: ["Knowledgeable", "Quick thinkers", "Original", "Charismatic", "Analytical"],
    strengthsAr: ["واسع المعرفة", "سريع التفكير", "أصلي", "يتمتع بالكاريزما", "تحليلي"],
    weaknesses: ["Argumentative", "Insensitive", "Intolerant", "Risk-prone"],
    weaknessesAr: ["جدلي", "غير حساس", "غير متسامح", "عرضة للمخاطرة"],
    careers: ["Entrepreneur", "Lawyer", "Journalist", "Inventor", "Consultant"],
    famousPeople: ["Thomas Edison", "Celine Dion", "Sacha Baron Cohen", "Walt Disney"]
  },
  {
    type: "ISTJ",
    name: "The Logistician",
    nameAr: "اللوجستي",
    description: "Practical and fact-minded individuals, whose reliability cannot be doubted. ISTJs are honest, direct, and responsible.",
    descriptionAr: "أفراد عمليون وواقعيون، لا يمكن الشك في موثوقيتهم. الـISTJs صادقون ومباشرون ومسؤولون.",
    strengths: ["Honest", "Direct", "Responsible", "Calm under pressure", "Organized"],
    strengthsAr: ["صادق", "مباشر", "مسؤول", "هادئ تحت الضغط", "منظم"],
    weaknesses: ["Stubborn", "Insensitive", "Always by the book", "Judgmental"],
    weaknessesAr: ["عنيد", "غير حساس", "دائمًا حسب الكتاب", "حكم"],
    careers: ["Accountant", "Auditor", "Police Officer", "Military Officer", "Project Manager"],
    famousPeople: ["George Washington", "Angela Merkel", "Warren Buffett", "Queen Elizabeth I"]
  },
  {
    type: "ISFJ",
    name: "The Defender",
    nameAr: "المدافع",
    description: "Very dedicated and warm protectors, always ready to defend their loved ones. ISFJs are supportive, reliable, and observant.",
    descriptionAr: "حماة متفانون ودافئون للغاية، مستعدون دائمًا للدفاع عن أحبائهم. الـISFJs داعمون وموثوقون ومراقبون.",
    strengths: ["Supportive", "Reliable", "Observant", "Patient", "Loyal"],
    strengthsAr: ["داعم", "موثوق", "مراقب", "صبور", "مخلص"],
    weaknesses: ["Overworked", "Shy", "Reluctant to change", "Sensitive to criticism"],
    weaknessesAr: ["مرهق", "خجول", "متردد في التغيير", "حساس للنقد"],
    careers: ["Nurse", "Teacher", "Social Worker", "Office Manager", "Customer Service"],
    famousPeople: ["Beyoncé", "Vin Diesel", "Kate Middleton", "Mother Teresa"]
  },
  {
    type: "ESTJ",
    name: "The Executive",
    nameAr: "التنفيذي",
    description: "Excellent administrators, unsurpassed at managing things – or people. ESTJs are dedicated, strong-willed, and direct.",
    descriptionAr: "مديرون ممتازون، لا مثيل لهم في إدارة الأشياء - أو الأشخاص. الـESTJs متفاني وذوو إرادة قوية ومباشرون.",
    strengths: ["Dedicated", "Strong-willed", "Direct", "Honest", "Efficient"],
    strengthsAr: ["متفاني", "ذو إرادة قوية", "مباشر", "صادق", "فعال"],
    weaknesses: ["Inflexible", "Stubborn", "Judgmental", "Dominating"],
    weaknessesAr: ["غير مرن", "عنيد", "حكم", "مهيمن"],
    careers: ["Manager", "Administrator", "Lawyer", "Accountant", "Military Officer"],
    famousPeople: ["George W. Bush", "Margaret Thatcher", "Simon Cowell", "Laura Linney"]
  },
  {
    type: "ESFJ",
    name: "The Consul",
    nameAr: "القنصل",
    description: "Extraordinarily caring, social, and popular people, always eager to help. ESFJs are loyal, sensitive, and good at connecting with others.",
    descriptionAr: "أشخاص اجتماعيون وشعبيون ومهتمون بشكل غير عادي، حريصون دائمًا على المساعدة. الـESFJs مخلصون وحساسون وجيدون في التواصل مع الآخرين.",
    strengths: ["Strong practical skills", "Loyal", "Sensitive", "Good at connecting", "Warm"],
    strengthsAr: ["مهارات عملية قوية", "مخلص", "حساس", "جيد في التواصل", "دافئ"],
    weaknesses: ["Worried about social status", "Inflexible", "Vulnerable to criticism", "People-pleasing"],
    weaknessesAr: ["قلق بشأن الوضع الاجتماعي", "غير مرن", "عرضة للنقد", "إرضاء الناس"],
    careers: ["Teacher", "Nurse", "Event Planner", "Customer Service", "Office Manager"],
    famousPeople: ["Taylor Swift", "Jennifer Garner", "Bill Clinton", "Tyra Banks"]
  },
  {
    type: "ISTP",
    name: "The Virtuoso",
    nameAr: "الموسيقي",
    description: "Bold and practical experimenters, masters of all kinds of tools. ISTPs are optimistic, creative, and spontaneous.",
    descriptionAr: "مجربون جريئون وعمليون، يتقنون جميع أنواع الأدوات. الـISTPs متفائلون ومبدعون وتلقائيون.",
    strengths: ["Optimistic", "Creative", "Practical", "Spontaneous", "Resourceful"],
    strengthsAr: ["متفائل", "مبدع", "عملي", "تلقائي", "واسع الحيلة"],
    weaknesses: ["Stubborn", "Insensitive", "Private", "Easily bored"],
    weaknessesAr: ["عنيد", "غير حساس", "خاص", "يشعر بالملل بسهولة"],
    careers: ["Engineer", "Mechanic", "Pilot", "Athlete", "Detective"],
    famousPeople: ["Michael Jordan", "Clint Eastwood", "Tom Cruise", "Kristen Stewart"]
  },
  {
    type: "ISFP",
    name: "The Adventurer",
    nameAr: "المغامر",
    description: "Flexible and charming artists, always ready to explore and experience something new. ISFPs are charming, sensitive to others, and passionate.",
    descriptionAr: "فنانون مرنون وساحرون، مستعدون دائمًا لاستكشاف وتجربة شيء جديد. الـISFPs ساحرون وحساسون للآخرين ومتحمسون.",
    strengths: ["Charming", "Sensitive to others", "Creative", "Passionate", "Artistic"],
    strengthsAr: ["ساحر", "حساس للآخرين", "مبدع", "متحمس", "فني"],
    weaknesses: ["Unpredictable", "Easily stressed", "Overly competitive", "Avoiding conflict"],
    weaknessesAr: ["لا يمكن التنبؤ به", "يتوتر بسهولة", "تنافسي بشكل مفرط", "تجنب الصراع"],
    careers: ["Artist", "Musician", "Designer", "Chef", "Travel Guide"],
    famousPeople: ["Paul McCartney", "Britney Spears", "Elvis Presley", "Lana Del Rey"]
  },
  {
    type: "ESTP",
    name: "The Entrepreneur",
    nameAr: "رائد الأعمال",
    description: "Smart, energetic, and very perceptive people who live in the moment and enjoy excitement and drama. ESTPs are bold risk-takers who live fast-paced lives.",
    descriptionAr: "أشخاص أذكياء ومفعمون بالطاقة وحساسون جدًا يعيشون اللحظة ويستمتعون بالإثارة والدراما. الـESTP مغامرون جريئون يعيشون حياة سريعة الوتيرة.",
    strengths: ["Energetic", "Rational", "Practical", "Sociable", "Spontaneous"],
    strengthsAr: ["نشيط", "عقلاني", "عملي", "اجتماعي", "تلقائي"],
    weaknesses: ["Impatient", "Risk-prone", "Unstructured", "May miss long-term consequences"],
    weaknessesAr: ["غير صبور", "عرضة للمخاطرة", "غير منظم", "قد يفوت العواقب طويلة المدى"],
    careers: ["Entrepreneur", "Sales Agent", "Marketing Executive", "Performer", "Emergency Responder"],
    famousPeople: ["Donald Trump", "Ernest Hemingway", "Madonna", "Bruce Willis"]
  }
];
