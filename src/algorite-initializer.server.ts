import { ServerScriptService } from "@rbxts/services";
import AbstractService from "./model/AbstractService";

const mainFolder = ServerScriptService.WaitForChild("TS") as Folder;

interface ScriptMap {
  [key: string]: AbstractService;
}

let services: ScriptMap = {};

mainFolder.GetChildren().forEach((child) => {
  if (child.IsA("ModuleScript") && child.Name.endsWith("Service")) {
    services[child.Name] = require(child) as AbstractService;
  }

  services[0].init();
});
