import { createApp } from "./create_app.ts";

const app = createApp();
addEventListener("fetch", app.fetchEventHandler());
