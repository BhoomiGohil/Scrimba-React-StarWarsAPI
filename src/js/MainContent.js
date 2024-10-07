import React from "react";

export default function MainContent() {
  // State to hold the fetched Star Wars character data
  const [starWarsData, setStarWarsData] = React.useState({});

  // State to track the current character number to fetch
  const [count, setCount] = React.useState(1);

  // useEffect hook to fetch data when the component mounts or when the count changes
  React.useEffect(() => {
    // Fetch character data from the Star Wars API using the current count
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => setStarWarsData(data)); // Update state with the fetched character data
  }, [count]); // Only re-run the effect if the count changes

  return (
    <div>
      <h2>The count is {count}</h2> {/* Display the current character count */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Get Next Character {/* Button to fetch the next character */}
      </button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      {/* Display the fetched data in a readable format */}
    </div>
  );
}
