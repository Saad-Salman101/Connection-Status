import { useEffect, useState } from 'react';
import isOnline from 'is-online';

function NetworkStatus() {
  const [online, setOnline] = useState(null);

  useEffect(() => {
    const checkNetworkStatus = async () => {
      const isOnlineStatus = await isOnline();
      setOnline(isOnlineStatus);
    };

    checkNetworkStatus();
  }, []);

  return (
    <div>
      Network Status: {online === null ? 'Loading...' : (online ? 'Online' : 'Offline')}
    </div>
  );
}

export default NetworkStatus;
