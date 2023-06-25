import { useState } from "react";
import {
  NotificationProvider,
  NotificationConsumer,
} from "doom-react-notifications";
import "doom-react-notifications/dist/style.css";
import { Buttons } from "./components/Buttons";
import { Counter } from "./components/Counter";

const Custom = ({ title, message, onClick }) => {
  return (
    <div onClick={onClick} style={{ borderStyle: "dashed" }}>
      <p className="notification-title">{title}</p>
      <p className="notification-message">{message} with custom skeleton</p>
    </div>
  );
};

function App() {
  const [useCustom, setUseCustom] = useState(false);

  return (
    <NotificationProvider>
      <h1 style={{ textAlign: "center" }}>React Easy Notifications</h1>
      <Counter />
      <Buttons custom={{ useCustom, setUseCustom }} />
      <NotificationConsumer Custom={useCustom && Custom} />
      <div>
        Documentation and information on{" "}
        <a
          href="https://github.com/CMOISDEAD/react-notifications"
          target="_blank"
        >
          Github
        </a>
        .
      </div>
    </NotificationProvider>
  );
}

export default App;
