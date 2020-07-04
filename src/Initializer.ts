import { RUNTIME_FOLDER } from "./constants";
import { ReplicatedStorage } from "@rbxts/services";

export default class Initializer {
  private _frameworkFolder: Folder;

  constructor(server: boolean) {
    if (server) {
      this._frameworkFolder = this.createFrameworkFolder();
      print("Algorite client loaded");
    } else {
      this._frameworkFolder = this.waitForFrameworkFolder();
      print("Algorite client loaded");
    }
  }

  private createFrameworkFolder(): Folder {
    const folder = new Instance("Folder");
    folder.Parent = ReplicatedStorage;
    folder.Name = RUNTIME_FOLDER;
    return folder;
  }

  private waitForFrameworkFolder(): Folder {
    return ReplicatedStorage.WaitForChild(RUNTIME_FOLDER) as Folder;
  }

  frameworkFolder(): Folder {
    return this._frameworkFolder;
  }
}
