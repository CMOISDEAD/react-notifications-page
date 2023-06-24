import { useContext } from "react";
import { NotificationContext } from "../notifier/NotificationContext";

export const useNotification = () => {
  const {
    notification,
    createNotification,
    notificationList,
    addNotification,
    Custom,
  } = useContext(NotificationContext);

  const showNotification = (newNotification) => {
    newNotification.id = notificationList.length;
    createNotification(newNotification);
    addNotification([...notificationList, newNotification]);
  };

  const wipeNotifications = () => {
    addNotification([]);
  };

  return {
    notification,
    showNotification,
    notificationList,
    wipeNotifications,
    Custom,
  };
};
