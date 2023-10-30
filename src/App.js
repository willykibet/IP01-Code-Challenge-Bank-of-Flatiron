import React from "react";
import AccountContainer from "./component/AccountContainer";

function App() {
  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>Bank of Flatiron</h2>
      </div>
      <AccountContainer />
    </div>
  );
}

export default App;