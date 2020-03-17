import React from 'react';

// import component
import ExampleComponent from './ExampleComponent.js';
import Heading from './Heading.js';
import Image from './Image.js';
import Repeater from './Repeater.js';
import ShowHide from './ShowHide.js';

export default function App() {
  return (
    <div className="App">
      <h1>Noroff Task</h1>
      <Heading heading="This is heading">

      </Heading>
      <Repeater count={3}>
        <p>This is the child node</p>
      </Repeater>
      <Image source="https://placedog.net/250/250" alternativeText="Dog Pic">

      </Image>
      <ShowHide show={true}>
        <p>Show hide content node(shown)</p>
      </ShowHide>
      <ShowHide show={false}>
        <p>Show hide content node(hidden)</p>
      </ShowHide>
      {/* EXAMPLE with props the validate */}
      <ExampleComponent
      // we used "" instead of {} to pass in strings
      heading="Example component heading"
      // we must use {} instead of "" to pass in NON-strings
      isAmazingComponent={true}>
        <p>passing in child elements is required</p>
      </ExampleComponent>

      {/* EXAMPLE with props the validate - uncomment it to show the errors */}
      {/* <ExampleComponent heading="Look in the console to see warnings about proptype valdation failures" />*/}

    </div>
  );
}
