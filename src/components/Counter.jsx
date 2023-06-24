import { useNotification } from "../hook/useNotification";

export const Counter = () => {
  const { notificationList } = useNotification();
  return (
    <div style={{ marginBottom: "15px", textAlign: "center" }}>
      Number of <strong>notifications</strong>: {notificationList.length}
    </div>
  );
};
