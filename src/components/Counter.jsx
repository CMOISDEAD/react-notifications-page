import { useNotification } from "doom-react-notifications";

export const Counter = () => {
  const { notificationList } = useNotification();
  return (
    <div style={{ marginBottom: "15px", textAlign: "center" }}>
      Number of <strong>notifications</strong>: {notificationList.length}
    </div>
  );
};
