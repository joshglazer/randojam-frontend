import { Jam } from "components/jam";
import React from "react";
import { Grid, Header } from "semantic-ui-react";
import { IJam } from "types";

interface Props {
  title: string;
  emptyText: string;
  jams: IJam[] | null;
}

export const JamList: React.FC<Props> = ({ title, emptyText, jams }) => {
  return (
    jams && (
      <>
        <Header as="h3">My Collabs</Header>
        {jams.length ? (
          <Grid columns={4} stackable>
            <Grid.Row>
              {jams.map((jam) => (
                <Grid.Column key={jam.id}>
                  <Jam jam={jam} />
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        ) : (
          <div>You have not collaborated with any jams.</div>
        )}
      </>
    )
  );
};
