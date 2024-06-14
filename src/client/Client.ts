import { ButtonEvent } from "./controllers/ButtonEvent";

const $btn = document.getElementById("button")!;
$btn.addEventListener("click", () => ButtonEvent());
