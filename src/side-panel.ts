import { createEndpointRuntime } from "./internal/endpoint-runtime";
import { createStreamWirings } from "./internal/stream";
import { createPersistentPort } from "./internal/persistent-port";

export function getSidePanel(tabId) {
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
