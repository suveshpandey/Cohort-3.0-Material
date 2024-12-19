import { useMemo, useState } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue, useRecoilState } from 'recoil'
import { jobsAtom, networkAtom, notificationsAtom, messagingAtom, totalNotificationsSelector } from './atoms'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}
function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const notificationCount = useRecoilValue(notificationsAtom);
  const [messageNotificationCount, setMessageNotificationCount ] = useRecoilState(messagingAtom); //something like useState
  //selector
  const totalNotifications = useRecoilValue(totalNotificationsSelector);
  //? or the below thing
  // const totalNotifications = useMemo(()=>{
  //   return networkNotificationCount + jobsNotificationCount + notificationCount + messageNotificationCount;
  // }, [networkNotificationCount, jobsNotificationCount, notificationCount, messageNotificationCount]);
  
  return(
    <div>
      <button>Home</button>

      <button>My Network ({networkNotificationCount < 100 ? networkNotificationCount : `99+`}) </button>
      <button>Jobs ({jobsNotificationCount < 100 ? jobsNotificationCount : `99+`}) </button>
      <button>Notifications ({notificationCount < 100 ? notificationCount : `99+`}) </button>
      <button>Messages ({messageNotificationCount < 100 ? messageNotificationCount : `99+`}) </button>

      <button onClick={()=>setMessageNotificationCount(messageNotificationCount + 1)}>Me({totalNotifications})</button>
    </div>
  )
}

export default App
