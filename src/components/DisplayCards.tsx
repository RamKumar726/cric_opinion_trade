import React from "react";
import Cards  from "./Card.tsx";
export default function DisplayCards() {
  const cardsdata = [
    {
      number: 1,
      title: "Select A Match",
      description: "Choose an upcoming match that you want to play",
      imageUrl: "images/card1.webp",
    },
    {
      number: 2,
      title: "Join A Team",
      description: "Find and join a team to compete in the match",
      imageUrl: "images/card2.webp",
    },
    {
      number: 3,
      title: "Win Prizes",
      description: "Participate and win exciting prizes",
      imageUrl: "images/card3.webp",
    },
  ];
  return (
    <div>
      <div className="lg:px-70 px-10 mb-10">
        <h2 className="text-xl font-bold text-red-800 mb-8">
          It's easy to start playing on Cric Opinion
        </h2>
        <p>
          Enter into the thrilling world of Fantasy sports, a strategy-based
          online sports game wherein you can create a virtual team of real
          players playing in real life matches. Create your team to win points
          based on all the players' performance in a live game.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center  lg:px-70 px-7 mb-20">
        {cardsdata.map((card, index) => (
          <Cards
            key={index}
            number={card.number}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
