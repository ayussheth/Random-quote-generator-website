var quotes = [
    "You never make it. There is no end goal in life so you should enjoy the journey.",
    "If you're doing what everyone else is doing, you're doing it wrong.",
    "Overthinking the process will kill any career in the creative space. You just have to do, not think.",
    "Free time is the enemy of progress. Because free time. Sitting around. Is not doing.",
    "Keep yourself busy. As long as you're doing something you will find your path.",
    "Always the stairs. Never the escalator.",
    "Inspiration is for amateurs, the rest of us just show up and work.",
    "Being nice takes work that's why I really like people who are nice.",
    "Work hard, be brave.",
    "Ideas are cheap. Ideas are easy. Ideas are common. Everybody has ideas. Ideas are highly, highly overvalued. Execution is all that matters.",
    "Always ask yourself: Am I living the life I want? Constantly evaluate where you are in life to make sure you are heading towards the direction you want.",
    "I actively pursue experiences that are unlike any others that I've experienced and cultures that I don't know and unfamiliar places and unfamiliar history and things like that.",
    "The only way you can have a job and sleep at work whenever you want is when you own the company.",
    "Sometimes we need to let go of the old to make room for the new.",
    "It's the execution that matters, never the idea.",
    "Don't try to fit in you will be unhappy when you try to be something you are not.",
    "You can be the hardest working person in the room and I think the hardest working person will always win.",
    "To sit around and say, I'm not motivated so I can't do anything, to me is the same thing as be like, I'm so hungry I can't eat....the only way to fix your motivational problem is to do something.",
]


function getQuote() {
    var randomNumber= Math.floor(Math.random()* quotes.length);
    document.getElementById("newQuoteSection").innerHTML = quotes[randomNumber];
}

