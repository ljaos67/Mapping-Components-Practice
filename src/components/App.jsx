import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function addEntry(e) {
  return <Entry key={e.id} emoji={e.emoji} name={e.name} meaning={e.meaning} />;
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{emojipedia.map(addEntry)}</dl>
    </div>
  );
}

export default App;
