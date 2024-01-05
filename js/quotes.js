const quotes = [
    {
        quote: "오직 남을 위해 산 인생만이 가치 있는 것이다.",
        author: "알버트 아인슈타인"
    },
    {
        quote: "누군가를 사랑한다는 것은 자신을 그와 동일시 하는 것이다.",
        author: "아리스토텔레스"
    },
    {
        quote: "오래 살기를 바라기 보다 잘 살기를 바라라.",
        author: "벤자민 프랭클린"
    },
    {
        quote: "지식을 얻으려면 공부를 해야 하고, 지혜를 얻으려면 관찰을 해야 한다.",
        author: "조지 버나드 쇼"
    },
    {
        quote: "목적없는 공부는 기억에 해가 될 뿐이며, 머리속에 들어온 어떤 것도 간직하지 못한다.",
        author: "레오나르도 다빈치"
    },
    {
        quote: "실천이 말보다 낫다.",
        author: "벤자민 프랭클린"
    },
    {
        quote: "계획 없는 목표는 한낱 꿈에 불과하다.",
        author: "생텍쥐페리"
    },
    {
        quote: "작은 기회로부터 종종 위대한 업적이 시작된다.",
        author: "데모스테네스"
    },
    {
        quote: "열정없이 사느니 차라리 죽는게 낫다.",
        author: "커트 코베인"
    },
    {
        quote: "도전은 인생을 흥미롭게 만들며, 도전의 극복이 인생을 의미있게 한다.",
        author: "조슈아 J. 마린"
    }
];

const author = document.querySelector("#quote span:first-child");
const quote = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

author.innerText = `${todaysQuote.author}`;
quote.innerText = `- "${todaysQuote.quote}"`;