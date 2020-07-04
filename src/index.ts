import { RunService, ReplicatedStorage } from "@rbxts/services";

export function registerClientEvent(
  name: string
): RBXScriptSignal<(player: Player, ...args: unknown[]) => void> {
  if (RunService.IsClient()) {
    error(
      "The registerClientEvent event method can only be called from a server!"
    );
  }

  const event = new Instance("RemoteEvent");
  event.Parent = ReplicatedStorage;
  event.Name = name;

  return event.OnServerEvent;
}

export function registerBindableEvent(name: string): BindableEvent {
  return new Instance("BindableEvent");
}

export function fireEvent(name: string, ...props: any[]) {
  if (RunService.IsServer()) {
    // check if a bindable event exists
  } else {
    // check if a remote event exists
  }
  // fire the event
}
