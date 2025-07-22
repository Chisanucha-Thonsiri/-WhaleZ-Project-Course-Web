// NotificationBubble.js
import React, { forwardRef } from 'react';
import '../css/component-css/NotificationBubble.css';

const NotificationBubble = forwardRef(({ type }, ref) => {
  if (type === 'create-post-success') {
    return (
      <div className="create-post-success-notification">
        <div
          ref={ref}
          className="create-post-success-notification-bubble"
        >
          <i className="fa-solid fa-check fa-shake fa-xl" style={{ color: '#00a313' }}></i>
          <span>โพสต์สำเร็จแล้ว!</span>
        </div>
      </div>
    );
  }

  return null;
});

export default NotificationBubble;
