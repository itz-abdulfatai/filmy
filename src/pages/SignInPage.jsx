import { useContext, useState } from "react";
import Button from "../components/Button";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { socials } from "../assets";
import { assets } from "../assets/icons";
import Carousel from "../components/Carousel";

function SignInPage() {
  const [isNew, setIsNew] = useState(false);
  const [isHandlinP, setIsHandilingP] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const { user, setUser, loggedIn, setLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();
  const [selectedQuestion, setSelectedQuestion] = useState(
    user.securityQuestions[0]
  );
  const [checkPassed, setCheckPassed] = useState(null);
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
  });

  if (loggedIn) {
    navigate("/");
  }

  function handleForgot() {
    setIsHandilingP(true);
  }

  function handleSignup() {
    alert("handling signup");
  }

  function handleLogin(e) {
    e.preventDefault();
    const userExist = user.userName == loginDetails.username;
    const passwordCorrect = user.password == loginDetails.password;
    console.log(user);

    console.log(
      `does user exist? ${userExist} correct user is ${user.userName} you wrote ${loginDetails.username}`
    );

    console.log(
      `password is correct? ${passwordCorrect} the correct one is ${user.password} you inputed ${loginDetails.password}`
    );

    if (userExist && passwordCorrect) {
      setLoggedIn(true);
    } else if (userExist && !passwordCorrect) {
      alert("password incorrect");
    } else {
      alert("invalid credentials");
    }
  }

  // function handleReveal(e) {
  //   e.preventDefault()
  //   const answerMatch = activeQuestion.answer == answer;
  //   console.log(activeQuestion)

  //   alert(`currect? ${answerMatch} the real one is ${activeQuestion.answer} you wrote ${answer}` )
  // }

  const handleReveal = (e) => {
    e.preventDefault();
    if (answer.toLowerCase() === selectedQuestion.answer.toLowerCase()) {
      setCheckPassed(true);
    } else {
      setCheckPassed(false);
    }
  };

  return (
    <>
      {!loggedIn && (
        <main className=" pt-20">
          <div className=" w-[90%] md:w-[70%] max-w-[400px] mx-auto h-screen flex flex-col items-center">
            <h1 className=" text-5xl capitalize mb-8">
              {isNew ? "signup" : "login"}
            </h1>
            <form className=" flex flex-col justify-center items-stretch w-full">
              <label htmlFor="username" className=" text-sm">
                UserName
              </label>
              <input
                required
                placeholder="input username"
                id="username"
                value={loginDetails.username}
                onChange={(e) => {
                  setLoginDetails({
                    ...loginDetails,
                    username: e.target.value,
                  });
                }}
                className=" border-0 border-b-2 bg-transparent border-secondary focus:outline-none focus:border-ash focus:ring-0 mb-3 text-sm"
              />

              <label htmlFor="password" className=" text-sm">
                password
              </label>
              <input
                required
                placeholder="input password"
                id="password"
                type="password"
                value={loginDetails.password}
                onChange={(e) => {
                  setLoginDetails({
                    ...loginDetails,
                    password: e.target.value,
                  });
                }}
                className=" border-0 border-b-2 bg-transparent border-secondary focus:outline-none focus:border-ash focus:ring-0 mb-5 text-sm"
              />
              {!isNew && (
                <p
                  onClick={handleForgot}
                  className=" text-sm hover:text-ash cursor-pointer self-end mb-2"
                >
                  forgot password?
                </p>
              )}

              {isNew && (
                <Button text="signup" bg="accent" onClick={handleSignup} />
              )}
              {!isNew && (
                <Button text="login" bg="accent" onClick={handleLogin} />
              )}
            </form>

            <div className=" mt-5 flex flex-col items-center">
              <p className="text-ash text-sm">
                or {isNew ? "signup" : "login"} using
              </p>
              <div className="flex justify-center items-center gap-3 mt-3">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    target="blank"
                    className=" w-[35px] h-[35px] bg-secondary rounded flex justify-center items-center p-1 "
                    href={social.link}
                  >
                    <img src={social.image} alt={social.name} />
                  </a>
                ))}
              </div>

              <div className=" mt-24 flex flex-col text-ash text-sm">
                <p>
                  {isNew && "already have an account?"}
                  {!isNew && "dont have an account?"}
                </p>
                {isNew && (
                  <button
                    onClick={() => {
                      setIsNew(false);
                    }}
                    className=" hover:text-accent font-bold"
                  >
                    login
                  </button>
                )}
                {!isNew && (
                  <button
                    onClick={() => {
                      setIsNew(true);
                    }}
                    className=" hover:text-accent font-bold"
                  >
                    signup
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>
      )}

      {isHandlinP && (
        <div className=" absolute top-0 left-0 right-0 bottom-0 bg-secondary bg-opacity-50 flex justify-center items-center">
          <div className=" w-[90%] sm:w-1/2 md:w-1/3 h-2/5 bg-primary">
            <div className=" w-full flex justify-end pt-3 px-4">
              <span
                onClick={() => {
                  setIsHandilingP(false);
                }}
                className="text-xs hover:text-accent cursor-pointer text-end "
              >
                <img src={assets.x} alt="" />
              </span>
            </div>

            <form
              onSubmit={handleReveal}
              className=" flex flex-col justify-center items-stretch w-full p-3"
            >
              <label
                className=" text-sm capitalize  text-ash mb-2"
                htmlFor="security-question"
              >
                Select a question:
              </label>
              <select
                value={selectedQuestion}
                id="security-question"
                className=" border-0 border-b-2 bg-transparent border-secondary focus:outline-none focus:border-ash focus:ring-0 mb-3"
                onChange={(e) => {
                  const question = user.securityQuestions.find(
                    (q) => q.question === e.target.value
                  );
                  setSelectedQuestion(question);
                }}
              >
                <option className="options" value="" disabled>
                  Select a security question
                </option>
                {user.securityQuestions.map((question, index) => (
                  <option
                    className="options"
                    key={index}
                    value={question.question}
                  >
                    {question.question}
                  </option>
                ))}
              </select>
              <label
                className="text-sm capitalize  text-ash mb-2"
                htmlFor="answer"
              >
                Your answer:
              </label>
              <input
                id="answer"
                type="text"
                className="border-0 border-b-2 bg-transparent border-secondary focus:outline-none focus:border-ash focus:ring-0 mb-2 text-sm"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />

              {checkPassed && (
                <p className=" text-xs mb-3"> password is: {user.password}</p>
              )}
              <Button text="Reveal password" bg="accent" />
            </form>
          </div>
        </div>
      )}
      {/* <Carousel/> */}
    </>
  );
}

export default SignInPage;
