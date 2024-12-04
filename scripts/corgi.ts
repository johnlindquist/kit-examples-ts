/*
# Display Images with Widgets

- Opens a widget displaying a picture of a corgi
- Clicking on the corgi requests a new image
- Closing the Widget speaks `Luv u Corgi!`
*/
// Name: Corgi Widget
// Description: Display a Corgi in a Widget
// Author: John Lindquist
// Twitter: @johnlindquist

import "@johnlindquist/kit";

interface DogResponse {
  data: {
    message: string;
  };
}

let dogUrl: string = `https://dog.ceo/api/breed/corgi/images/random`;
let getState = async () => {
  let response: DogResponse = await get(dogUrl);
  return {
    url: response.data.message,
  };
};

// Create a Corgi Widget
// When focused, close with `escape` or `cmd + w`
/*
  Note: the `draggable` class is necessary to use an html element to drag the widget, 
  but it will also interfere with all other mouse interactions
*/
let dragBar: string = `draggable absolute z-10 h-6 w-full top-0 left-0 bg-gray-100 bg-opacity-50`;
let corgi = await widget(
  `
<img :src="url"/>
<div class="${dragBar}">
`,
  {
    state: await getState(),
  }
);

corgi.onInit(async () => {
  corgi.focus();

  await wait(2000);
  corgi.fit();
});

// Update State on Click
corgi.onClick(async () => {
  corgi.setState(await getState());
});

corgi.onResized(async () => {
  corgi.fit();
});

corgi.onClose(async () => {
  say(`Luv u Corgi!`);
  // You can also forcefully exit a process early, otherwise it will wait for all widgets/prompts to close
  // process.exit(0);
});
