import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who was the first Indian woman in Space ?",
      answers: [
        {
          text: "Kalpana Chawla",
          correct: true,
        },
        {
          text: "Sunita Williams",
          correct: false,
        },
        {
          text: "Koneru Humpy",
          correct: false,
        },
        {
          text: "none",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who built the Jama Masjid ?",
      answers: [
        {
          text: "Jahangir",
          correct: false,
        },
        {
          text: "Akbar",
          correct: false,
        },
        {
          text: "Imam Bukhari",
          correct: false,
        },
        {
          text: "Shah Jahan",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "Who was the first Indian Scientist to win a Nobel Prize ?",
      answers: [
        {
          text: "CV Raman",
          correct: true,
        },
        {
          text: "Amartya Sen",
          correct: false,
        },
        {
          text: "Hargobind Khorana",
          correct: false,
        },
        {
          text: "Subramanian Chrandrashekar",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "How tall is Mount Everest?",
      answers: [
        {
          text: "6,683ft",
          correct: false,
        },
        {
          text: "7,918ft",
          correct: false,
        },
        {
          text: "19,341ft",
          correct: true,
        },
        {
          text: "29,029ft",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question:
        " Which of these leaders was a recipient of a gallantry award in 1987 by a state government for saving two girls from drowning?",
      answers: [
        {
          text: "Anandiben Patel",
          correct: true,
        },
        {
          text: "vasundhara Raje",
          correct: false,
        },
        {
          text: "Uma Bharti",
          correct: false,
        },
        {
          text: "Mamata Banerjee",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: " Which day is observed as World Standard Day?",
      answers: [
        {
          text: "june 26",
          correct: false,
        },
        {
          text: "oct 14",
          correct: true,
        },
        {
          text: "Nov 15 ",
          correct: false,
        },
        {
          text: "Dec 2",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question:
        "Who was the first person to be awarded the Bharat Ratna posthumously?",
      answers: [
        {
          text: "Rajiv Gandhi ",
          correct: false,
        },
        {
          text: " Vinoba Bhave",
          correct: false,
        },
        {
          text: "Lal Bahadur Shastri",
          correct: true,
        },
        {
          text: "Indira gandhi",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question:
        "The SI unit for which of these is named after James Watt, a Scottish inventor and engineer?",
      answers: [
        {
          text: "Temperature",
          correct: false,
        },
        {
          text: "Power",
          correct: true,
        },
        {
          text: "Force",
          correct: false,
        },
        {
          text: "Electric Current",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question:
        "Which of these medical conditions is classified into Type-I and Type-2 ?",
      answers: [
        {
          text: "Common cold",
          correct: false,
        },
        {
          text: "Diabetes",
          correct: true,
        },
        {
          text: "Hepatitis",
          correct: false,
        },
        {
          text: "Night Blindness",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "which country’s beauty queen won the Miss world 2012 title?",
      answers: [
        {
          text: "USA",
          correct: false,
        },
        {
          text: "India",
          correct: false,
        },
        {
          text: "China",
          correct: true,
        },
        {
          text: "Russia",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Who won the ‘ICC ODI Cricketer of the Year’ award in 2012 ?",
      answers: [
        {
          text: "Lasith Malinga",
          correct: false,
        },
        {
          text: "M. S. Dhoni",
          correct: false,
        },
        {
          text: "Virat Kohli",
          correct: true,
        },
        {
          text: "Kumar Sangakkara",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question:
        "Who was the Indian Bowler off Whom Australian Legend got a single to reach his 100th first class century?",
      answers: [
        {
          text: "Baqa Jilani",
          correct: false,
        },
        {
          text: "Commandur RangaChari",
          correct: false,
        },
        {
          text: "Gogumal Kishenchand",
          correct: true,
        },
        {
          text: "Kanwar Rai singh",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  key={m.id}
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
