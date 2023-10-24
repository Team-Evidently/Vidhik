import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { Tabs, Tab, Paper, Typography, Divider, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './LSPAlert.css';
import Navbar from '../../../components/navbar';

const LSPAlert = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'Important Update', content: 'Stay informed about the latest changes in our policies.', read: false },
    { id: 2, title: 'New Feature Released', content: 'Discover exciting features in our latest release.', read: false },
    { id: 3, title: 'Exclusive Offers Inside', content: 'Unlock special offers just for you. Don\'t miss out!', read: false },
    { id: 4, title: 'Upcoming Event', content: 'Save the date for our upcoming event. Details inside!', read: false },
    { id: 5, title: 'Thank You for Your Feedback', content: 'Your feedback is valuable to us. We appreciate your input.', read: false },
    { id: 6, title: 'Account Security Alert', content: 'Take action to secure your account. Follow the steps provided.', read: false },
    { id: 7, title: 'Product Showcase', content: 'Explore our latest products and services. Limited-time offers available.', read: false },
    { id: 8, title: 'Important Notice: System Maintenance', content: 'Scheduled maintenance on our system. Minimal disruption expected.', read: false },
    { id: 9, title: 'Holiday Greetings', content: 'Wishing you a joyful holiday season and a Happy New Year!', read: false },
    { id: 10, title: 'Weekly Newsletter', content: 'Catch up on the latest news and updates in our weekly newsletter.', read: false },
    { id: 11, title: 'Account Verification Required', content: 'Verify your account to ensure continued access to our services.', read: false },
    { id: 12, title: 'Exclusive Partner Offers', content: 'As a valued customer, enjoy exclusive offers from our partners.', read: false },
    { id: 13, title: 'Product Recall Notice', content: 'Important information regarding a product recall. Please review.', read: false },
    { id: 14, title: 'Congratulations! You have Earned Rewards', content: 'Celebrate your achievements with exclusive rewards. Claim now!', read: false },
    { id: 15, title: 'Community Update', content: 'Stay connected with our community. Read the latest updates and announcements.', read: false },
  ]);
  const [deletedIds, setDeletedIds] = useState([]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleRead = (id) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
    setDeletedIds((prevDeletedIds) => [...prevDeletedIds, id]);
  };

  const handleDelete = (id) => {
    setDeletedIds((prevDeletedIds) => [...prevDeletedIds, id]);
  };

  useEffect(() => {
    console.log('Notifications updated:', notifications);
  }, [notifications]);

  const SwipeOutAnimation = ({ children }) => {
    const props = useSpring({
      opacity: 1,
      transform: 'translateX(0%)',
      from: { opacity: 0, transform: 'translateX(100%)' },
    });

    return <animated.div style={props}>{children}</animated.div>;
  };

  return (
    <div>
   <Navbar active="alerts"></Navbar>
    <div>
      <Paper elevation={1} style={{ marginBottom: '20px' }}>
        <Tabs value={activeTab} onChange={handleTabChange} indicatorColor="primary" textColor="primary">
          <Tab label="Unread" />
          <Tab label="Read" />
        </Tabs>
      </Paper>

      <TransitionGroup>
      {activeTab === 0
  ? notifications
      .filter((notification) => !notification.read)
      .map((notification) => (
        <CSSTransition
          key={notification.id}
          timeout={500}
          classNames="notification"
          unmountOnExit
          in={!deletedIds.includes(notification.id)}
        >
          <SwipeOutAnimation>
            <Paper elevation={3} style={{ padding: '20px', marginBottom: '10px', position: 'relative' }}>
              <Typography variant="h6">{notification.title}</Typography>
              <Typography variant="body1">{notification.content}</Typography>
              {activeTab === 0 && !notification.read && (
                <IconButton
                  color="primary"
                  onClick={() => handleRead(notification.id)}
                  style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}
                >
                  <CheckCircleIcon />
                </IconButton>
              )}
              {activeTab === 1 && (
                <IconButton
                  color="error"
                  onClick={() => handleDelete(notification.id)}
                  style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </Paper>
            <Divider />
          </SwipeOutAnimation>
        </CSSTransition>
      ))
  : notifications
  .filter((notification) => notification.read).map((notification) => (
      <CSSTransition
        key={notification.id}
        timeout={500}
        classNames="notification"
        unmountOnExit
        in={!deletedIds.includes(notification.id)}
      >
        <SwipeOutAnimation>
          <Paper elevation={3} style={{ padding: '20px', marginBottom: '10px', position: 'relative' }}>
            <Typography variant="h6">{notification.title}</Typography>
            <Typography variant="body1">{notification.content}</Typography>
            {activeTab === 0 && !notification.read && (
              <IconButton
                color="primary"
                onClick={() => handleRead(notification.id)}
                style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}
              >
                <CheckCircleIcon />
              </IconButton>
            )}
            {activeTab === 1 && (
              <IconButton
                color="error"
                onClick={() => handleDelete(notification.id)}
                style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}
              >
                <DeleteIcon />
              </IconButton>
            )}
          </Paper>
          <Divider />
        </SwipeOutAnimation>
      </CSSTransition>
    ))}

      </TransitionGroup>
    </div>
    </div>
  );
};

export default LSPAlert;
