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

      // Check if the effectiveType property is supported
      if (connection.effectiveType) {
        // Check the effectiveType value to determine the connection quality
        const currentEffectiveType = connection.effectiveType;

        if (prevEffectiveType !== currentEffectiveType) {
          setPrevEffectiveType(currentEffectiveType);

          if (currentEffectiveType === 'slow-2g' || currentEffectiveType === '2g') {
            toast.error('Poor connectivity');
            console.log(currentEffectiveType);
            console.log('Poor connectivity');
          } else if (currentEffectiveType === 'slow-3g' || currentEffectiveType === '3g') {
            toast.warning('Moderate connectivity');
            console.log(currentEffectiveType);
            console.log('Moderate connectivity');
          } else {
            toast.success('Good connectivity');
            console.log(currentEffectiveType);
            console.log('Good connectivity');
          }
        }
      } else {
        // The effectiveType property is not supported, fallback to other methods
        // You can use other approaches like measuring network latency or throughput to determine connectivity quality
      }
    } else {
      console.log('Offline');
      toast.error('Offline')
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
