import { RunService, ReplicatedStorage } from "@rbxts/services";
import Initializer from "./Initializer";
import RemoteEventMaker from "./RemoteEventMaker";

const RUNTIME_FOLDER = "_algorite";

const app = new Initializer(RunService.IsServer());

export function registerClientEvent(
  name: string,
  callback: (player: Player, ...args: unknown[]) => void
): RBXScriptConnection {
  if (RunService.IsClient()) {
    error(
      "The registerClientEvent event method can only be called from a server!"
    );
  }

  return new RemoteEventMaker(name, app.frameworkFolder())
    .event()
    .OnServerEvent.Connect(callback);
}

export function fireServer(name: string, ...props: any[]) {
  if (RunService.IsServer()) {
    error("this method can only be called from the client");
  } else {
    const event = app.frameworkFolder().FindFirstChild(name);
    if (event && event.IsA("RemoteEvent")) {
      event.FireServer(props);
    } else {
      error(`event '${name}' was not found`);
    }
  }
}
