import { useNotification } from "../hook/useNotification";

export const Buttons = ({ custom }) => {
  const { showNotification, wipeNotifications } = useNotification();

  const handleClick = (e) => {
    const { name } = e.target;
    const newNotification = {
      type: name,
      title: `${name} type notification`,
      message: `notification of type ${name}`,
      visible: true,
    };

    showNotification(newNotification);
  };

  const types = ["success", "error", "warning", "info", "soon"];

  return (
    <div className="button-group">
      {types.map((type, i) => (
        <button onClick={handleClick} name={type} key={i}>
          {type.toUpperCase()}
        </button>
      ))}
      <button onClick={wipeNotifications} style={{ background: "red" }}>
        Wipe History
      </button>
      <button
        onClick={() => custom.setUseCustom(!custom.useCustom)}
        style={{
          border: "1px solid",
          borderColor: custom.useCustom ? "green" : "black",
        }}
      >
        Toggle custom component
      </button>
    </div>
  );
};
