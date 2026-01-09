import { createEndpointRuntime } from "./internal/endpoint-runtime";
import { createStreamWirings } from "./internal/stream";
import { createPersistentPort } from "./internal/persistent-port";

/**
 * Creates a Side Panel messaging endpoint.
 * @param scopeId - The unique identifier for the side panel scope (e.g., tab ID, window ID).
 *
 * If you wish to pass nothing to scopeId, you can just pass a 0 or an empty string.
 *
 * @returns An object containing methods to send messages, listen for messages,
 *          open streams, and handle stream channels.
 */
export function getSidePanel(scopeId: string | number) {
  const port = createPersistentPort(`side-panel@${scopeId}`);
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

//* INFO: Code in this file inspired by: https://github.com/serversideup/webext-bridge/discussions/91 -> https://github.com/adao [Author]
