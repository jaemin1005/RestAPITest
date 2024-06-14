import { ButtonEvent } from "./controllers/ButtonEvent";
import { Hello } from "@shared/dummy";

Hello();
const $btn = document.getElementById("button")!;
$btn.addEventListener("click", () => ButtonEvent());
