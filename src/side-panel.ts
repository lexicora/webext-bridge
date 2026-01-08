import { createEndpointRuntime } from "./internal/endpoint-runtime";
import { createStreamWirings } from "./internal/stream";
import { createPersistentPort } from "./internal/persistent-port";

export function getSidePanel(tabId: string | number | undefined) {
  const port = createPersistentPort(`side-panel@${tabId}`);
  const endpointRuntime = createEndpointRuntime("side-panel", (message) =>
    port.postMessage(message),
  );

  port.onMessage(endpointRuntime.handleMessage);

  const { sendMessage, onMessage } = endpointRuntime;
  const { openStream, onOpenStreamChannel } =
    createStreamWirings(endpointRuntime);
  return {
    sendMessage,
    onMessage,
    openStream,
    onOpenStreamChannel,
  };
}

//* INFO: Credit to code in this file: https://github.com/serversideup/webext-bridge/discussions/91 -> https://github.com/adao [Author]

// Second approach:
// import browser from 'webextension-polyfill'
// import { createEndpointRuntime } from './internal/endpoint-runtime'
// import { createStreamWirings } from './internal/stream'
// import { createPersistentPort } from './internal/persistent-port'

// const [tab] = await browser.tabs.query({active: true, currentWindow: true})
// const port = createPersistentPort(`side-panel@${tab.id}`)
// const endpointRuntime = createEndpointRuntime(
//   'side-panel',
//   message => port.postMessage(message),
// )

// port.onMessage(endpointRuntime.handleMessage)

// export const { sendMessage, onMessage } = endpointRuntime
// export const { openStream, onOpenStreamChannel } = createStreamWirings(endpointRuntime)
