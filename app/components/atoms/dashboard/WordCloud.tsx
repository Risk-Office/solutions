const WordCloud = () => {
  const words = [
    { text: "Policy", size: 40 },
    { text: "Healthcare", size: 36 },
    { text: "Government", size: 34 },
    { text: "Labour", size: 32 },
    { text: "Political", size: 30 },
    { text: "Income", size: 30 },
    { text: "LegalRegulatory", size: 28 },
    { text: "Management", size: 26 },
    { text: "Services", size: 26 },
    { text: "Economic", size: 26 },
    { text: "Lifestyle", size: 24 },
    { text: "Expectations", size: 24 },
    { text: "Competitive Forces", size: 24 },
    { text: "Technology", size: 24 },
    { text: "Environmental", size: 22 },
    { text: "Social Demographics", size: 22 },
    { text: "Technological", size: 22 },
    { text: "Climate", size: 22 },
    { text: "Quality", size: 20 },
    { text: "Tax", size: 20 },
    { text: "Wages", size: 20 },
    { text: "Elder", size: 20 },
    { text: "Adoption CPI", size: 20 },
    { text: "Rights", size: 18 },
    { text: "Educational", size: 18 },
    { text: "Distribution", size: 18 },
    { text: "Protection", size: 18 },
    { text: "Pollution", size: 18 },
    { text: "Change", size: 18 },
    { text: "Cybersecurity", size: 18 },
    { text: "Attitudes", size: 18 },
    { text: "Contract", size: 18 },
    { text: "Disposable", size: 18 },
    { text: "Tech", size: 18 },
    { text: "Waste", size: 18 },
    { text: "Entrants", size: 18 },
    { text: "CPI", size: 18 },
    { text: "Funding", size: 18 },
    { text: "Effect", size: 18 },
    { text: "Automation AI", size: 18 },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center h-[300px] overflow-hidden">
      {words.map((word, i) => (
        <span
          key={i}
          className="m-1 inline-block transition-transform hover:scale-110 cursor-pointer"
          style={{
            fontSize: `${Math.max(word.size * 0.7, 12)}px`,
            fontWeight: word.size > 28 ? "bold" : "normal",
            color: `hsl(${(i * 37) % 360}, 70%, 45%)`,
            transform: `rotate(${Math.random() * 20 - 10}deg)`,
          }}
        >
          {word.text}
        </span>
      ))}
    </div>
  );
};

export default WordCloud;
