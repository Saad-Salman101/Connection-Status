import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConnectivityCheck = () => {
  const [prevEffectiveType, setPrevEffectiveType] = useState('');
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    setIsOnline(navigator.onLine);

    const handleOnlineStatus = () => {
      setIsOnline(true);
    };

    const handleOfflineStatus = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnlineStatus);
    window.addEventListener('offline', handleOfflineStatus);

    return () => {
      window.removeEventListener('online', handleOnlineStatus);
      window.removeEventListener('offline', handleOfflineStatus);
    };
  }, []);

  useEffect(() => {
    if (isOnline && typeof navigator !== 'undefined' && navigator.connection) {
      const connection = navigator.connection;
      connection.onchange = () => {
        const currentEffectiveType = connection.effectiveType;

        if (prevEffectiveType !== currentEffectiveType) {
          setPrevEffectiveType(currentEffectiveType);

          if (currentEffectiveType === 'slow-2g' || currentEffectiveType === '2g') {
            toast.error('Poor connectivity');
          } else if (currentEffectiveType === 'slow-3g' || currentEffectiveType === '3g') {
            toast.warning('Moderate connectivity');
          } else if (currentEffectiveType === 'offline' || currentEffectiveType === 'offline') {
            toast.success('Good connectivity');
          }
          else {
            toast.error('offline');
          }
        }
      };
    } else {
      // Handle offline status
    }
  }, [isOnline, prevEffectiveType]);

  return (
    <>
      <ToastContainer />
    </>
  );
};

export default ConnectivityCheck;