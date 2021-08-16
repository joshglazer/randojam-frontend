import React from "react";
import { Container, Grid, Segment } from "semantic-ui-react";

function PageFooter(): JSX.Element {
  return (
    <Segment
      inverted
      vertical
      style={{ margin: "5em 0em 0em", padding: "2em 0em" }}
    >
      <Container>
        <Grid divided inverted stackable>
          <Grid.Column width={8}>
            A{" "}
            <a
              href="https://portfolio.joshglazer.com"
              target="_blank"
              rel="noreferrer"
            >
              Josh Glazer
            </a>{" "}
            Project
          </Grid.Column>
          <Grid.Column width={8}></Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );
}

export default PageFooter;
