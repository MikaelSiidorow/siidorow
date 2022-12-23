import "./app.css";
import App from "./App.svelte";
import "./styles/reset.css";
import "./styles/theme.css";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
