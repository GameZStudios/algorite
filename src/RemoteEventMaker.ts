export default class RemoteEventMaker {
  private _event: RemoteEvent;

  constructor(name: string, folder: Folder) {
    if (folder.FindFirstChild(name)) {
      error(
        `the event ${name} could not be registered again! it already exists`
      );
    }

    this._event = new Instance("RemoteEvent");
    this._event.Parent = folder;
    this._event.Name = name;
  }

  event(): RemoteEvent {
    return this._event;
  }
}
