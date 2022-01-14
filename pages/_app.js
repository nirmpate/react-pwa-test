import '../styles/global.css'
import * as PusherPushNotifications from "@pusher/push-notifications-web";
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    window.navigator.serviceWorker.ready.then(serviceWorkerRegistration => {
      const beamsClient = new PusherPushNotifications.Client({
        instanceId: '2eb57a6c-be2b-4c05-9d56-db89a773285a',
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