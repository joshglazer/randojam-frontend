import React, { useContext, useEffect } from "react";
import { Header } from "semantic-ui-react";
import { JamList } from "components/jam-list";
import { GlobalContext } from "state/GlobalProvider";

function Dashboard() {
  const { jamsDispatch, jamsState } = useContext(GlobalContext);

  useEffect(() => {
    jamsDispatch({ type: "loadJams" });
  }, [jamsDispatch]);

  return (
    <>
      <Header as="h2">Dashboard</Header>
      <div>Hello and Welcome to RandoJam!</div>

      <JamList
        jams={jamsState.myJams}
        title="My Jams"
        emptyText="You have not created any jams."
      ></JamList>

      <JamList
        jams={jamsState.myJams}
        title="My Collabs"
        emptyText="You have not collabed on any jams."
      ></JamList>
    </>
  );
}

export default Dashboard;
