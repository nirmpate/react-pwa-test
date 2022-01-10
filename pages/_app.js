import '../styles/global.css'
import * as PusherPushNotifications from "@pusher/push-notifications-web";
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    window.navigator.serviceWorker.ready.then(serviceWorkerRegistration => {
      const beamsClient = new PusherPushNotifications.Client({
        instanceId: 'e936aba9-8dc9-4365-9af6-1d5d4527a3a5',
        serviceWorkerRegistration: serviceWorkerRegistration,
      })
      beamsClient.start()
      .then(() => beamsClient.addDeviceInterest('hello'))
      .then(() => console.log('Successfully registered and subscribed!'))
      .catch(console.error);
    }


    )


  }, [])
  return <Component {...pageProps} />
}