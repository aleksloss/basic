//Применение регулярных выражений

const funRegex1 = /\b(cat|dog|hamster)\b/g; // classic pet names only (классические имена питомцев)
const funStr1 = 'Office zoo: cat, dog, hamster, hamster again!';
console.log('Example 1:', funStr1.match(funRegex1)); // ['cat', 'dog', 'hamster', 'hamster']


const funRegex2 = /\b(ha){2,}\b/gi; // tidy laughter built from "ha" blocks (аккуратный смех из блоков "ha")
const funStr2 = 'Meeting notes: ha haha HAHAHA haaaah';
console.log('Example 2:', funStr2.match(funRegex2)); // ['ha', 'haha', 'HAHAHA']


const funRegex3 = /\bCaptain\w*\b/gi; // superhero aliases starting with Captain (супергеройские псевдонимы на Captain)
const funStr3 = 'Comic con schedule: Captain Keyboard vs Captain Obvious vs captain planet';
console.log('Example 3:', funStr3.match(funRegex3)); // ['Captain Keyboard', 'Captain Obvious']


const funRegex4 = /\b\d{3}\b/g; // detect 3-digit secret codes (трехзначные секретные коды)
const funStr4 = 'Escape room locks: 007 123 999 404 300';
console.log('Example 4:', funStr4.match(funRegex4)); // ['007', '123', '404', '300']


const funRegex5 = /\bpizza[!?.]{0,2}/g; // pizza with optional excitement marks (пицца с необязательными знаками восторга)
const funStr5 = 'Food poll: pizza, pizza! pizza!! bruschetta';
console.log('Example 5:', funStr5.match(funRegex5)); // ['pizza', 'pizza!', 'pizza!!']


const funRegex6 = /#[\w]+/g; // hashtags for scoreboard (хэштеги для командного табло)
const funStr6 = 'Hackathon hashtags: #sleepIsForLater #winning #404teamNotFound';
console.log('Example 6:', funStr6.match(funRegex6)); // ['#sleepIsForLater', '#winning', '#404teamNotFound']


const funRegex7 = /\b\w*ify\b/g; // startup buzzwords that end with "ify" (стартап-словечки, оканчивающиеся на "ify")
const funStr7 = 'Startup pitch: gamify, uniconify, coffee, debugify, stuff';
console.log('Example 7:', funStr7.match(funRegex7)); // ['gamify', 'uniconify', 'debugify']


const funRegex8 = /\b\d{1,2}:\d{2}\b/g; // simple timestamps (простые отметки времени)
const funStr8 = 'Train times: 07:30, 19:45, 8:15';
console.log('Example 8:', funStr8.match(funRegex8)); // ['07:30', '19:45', '8:15']


const funRegex9 = /\bone|two|three\b/gi; // count-out shouts (считалочка с криками)
const funStr9 = 'Countdown remix: one TWO three!';
console.log('Example 9:', funStr9.match(funRegex9)); // ['one', 'TWO', 'three']


const funRegex10 = /TODO(?=:\s)/g; // TODO notes with a neat colon and space (заметки TODO с аккуратным двоеточием и пробелом)
const funStr10 = 'TODO: learn regex, TODONT: ignore tests, TODO : buy coffee';
console.log('Example 10:', funStr10.match(funRegex10)); // ['TODO']


// Упражнения:

// Упражнение 1: Составьте регулярку, которая поймает каждое слово на "cake" в строке "cupcake pancake sneakysnake".
const funRegex11 = /\b\w*cake\b/g;
const funStr11 = "cupcake pancake sneakysnake";
console.log('Example 11:', funStr11.match(funRegex11)); // ['cupcake', 'pancake']

// Упражнение 2: Создайте регулярку, которая найдёт смайлики ":)", ":(", и ":D" в строке "Mood log: :) :( :P :D".
const funRegex12 = /:\)|:\(|:D/g;
const funStr12 = "Mood log: :) :( :P :D";
console.log('Example 12:', funStr12.match(funRegex12)); // [':)', ':(', ':D']



