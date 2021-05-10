// Import the class so we can make new Vocabulary objects.
import Vocabulary from './vocabulary.js';

// Create new object
const amused = new Vocabulary(
  '😄',
  'amused',
  `showing that you think something is funny
  被逗乐的`,
  `She was very amused by/at your comments.
  她被你的话逗得很开心。`,
  false,
  'http://ssl.gstatic.com/dictionary/static/pronunciation/2021-03-01/audio/am/amused_en_gb_1.mp3',
  'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80'
);

const appalled = new Vocabulary(
  '😱',
  ' appalled',
  `feeling or showing horror or disgust at sth unpleasant or wrong
  对某件不好的事感到惊恐或厌恶`,
  `I was appalled at/by the lack of staff in the hospital.
   医院里人手之少令我震惊。`,
  false,
  'https://ssl.gstatic.com/dictionary/static/pronunciation/2021-03-01/audio/ap/appalled_en_gb_1.mp3',
  'https://images.unsplash.com/photo-1552345386-6690de5b2c09?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
);

const astonished = new Vocabulary(
  '😲',
  'astonished',
  `very surprised
  十分惊讶`,
  `The doctors were astonished at the speed of her recovery.
  她康复速度之快令医生们感到惊讶。`,
  false,
  'https://ssl.gstatic.com/dictionary/static/pronunciation/2021-03-01/audio/as/astonished_en_gb_1.mp3',
  'https://images.unsplash.com/photo-1603792907191-89e55f70099a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'
);
const brooding = new Vocabulary(
  '😞',
  'brooding',
  `making you feel uncomfortable or worried as though something bad is going to happen
  令人不安的，忧心忡忡`,
  `The same heavy, brooding silence descended on them.
  他们也感觉到了同样沉重压抑的寂静。`,
  false,
  'https://ssl.gstatic.com/dictionary/static/pronunciation/2021-03-01/audio/br/brooding_en_gb_1.mp3',
  'https://images.unsplash.com/photo-1511221984990-6b65291628ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1311&q=80'
);
const combative = new Vocabulary(
  '🤠',
  'combative',
  `ready and willing to fight or argue
  好斗的;好争论的`,
  `He conducted the meeting in his usual combative style, refusing to admit any mistakes.
  他主持会议的时候仍旧显示出一贯的好辩作风，拒绝承认任何错误。`,
  false,
  'https://ssl.gstatic.com/dictionary/static/pronunciation/2021-03-01/audio/co/combative_en_gb_1.mp3',
  'https://images.unsplash.com/photo-1487241281672-301e0f542588?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80'
);

// Add Backpack objects into an array
const vocabularyObjectArray = [
  amused,
  appalled,
  astonished,
  brooding,
  combative,
];

// Export the array to be used in other files
export default vocabularyObjectArray;
