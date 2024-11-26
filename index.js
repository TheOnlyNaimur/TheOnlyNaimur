// Save this as `index.js` and deploy with Vercel
const quotes = [
  { quote: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
  { quote: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { quote: "Experience is the name everyone gives to their mistakes.", author: "Oscar Wilde" },
  { quote: "Fix the cause, not the symptom.", author: "Steve Maguire" },
  { quote: "Good code is its own best documentation.", author: "Steve McConnell" }
];

export default function handler(req, res) {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const image = `
    <svg xmlns="http://www.w3.org/2000/svg" width="800" height="200">
      <rect width="100%" height="100%" fill="#282c34"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="20" font-family="Arial">
        "${randomQuote.quote}" — ${randomQuote.author}
      </text>
    </svg>
  `;
  res.setHeader("Content-Type", "image/svg+xml");
  res.status(200).send(image);
}
