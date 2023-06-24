import { NotificationProvider } from "./notifier/NotificationContext";
import { NotificationConsumer } from "./notifier/NotificationConsumer";
import { Buttons } from "./components/Buttons";
import { Counter } from "./components/Counter";
import { useState } from "react";

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
    <NotificationProvider Custom={useCustom && Custom}>
      <h1 style={{ textAlign: "center" }}>React Easy Notifications</h1>
      <Counter />
      <Buttons custom={{ useCustom, setUseCustom }} />
      <NotificationConsumer />
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
