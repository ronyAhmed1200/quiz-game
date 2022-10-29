import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert } from "@mui/material";
import { uiActions } from "./../store/uiSlice";

function Notification({ type, message }) {
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  function handleClose() {
    dispatch(uiActions.setShowNotification({ open: false }));
  }

  return (
    <div>
      {notification.open && (
        <Alert
          className="mt-6"
          variant="filled"
          severity={type}
          onClose={handleClose}
        >
          {message}
        </Alert>
      )}
    </div>
  );
}

export default Notification;
