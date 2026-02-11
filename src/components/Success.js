import React from "react";
import successKuromi from "../kuromi-melody.gif";

/**
 * Success component displaying a sweet message upon acceptance.
 *
 * @returns {JSX.Element} JSX element representing the Success component.
 */
const Success = () => (
  <div className="App-success">
    {/* Displaying a cute kisses gif */}
    <img className="App-gif" src={successKuromi} alt="Kisses" />
    {/* Personalized success messages */}
    <p className="App-text-success">
      Yaaayy! I love you so much hihi 💕
    </p>
    <p className="App-text-success">
      Check your email for more details! See yaaaa 💕
    </p>
    {/* Displaying the date of the special moment */}
    <p className="App-text-date">02/14/2026</p>
  </div>
);

export default Success;
