import {atom, selector} from 'recoil';

export const networkAtom = atom({
    key: "networkAtom",
    default: 12
})
export const jobsAtom = atom({
    key: "jobsAtom",
    default: 3
})
export const notificationsAtom = atom({
    key: "notificationsAtom",
    default: 38
})
export const messagingAtom = atom({
    key: "messagingAtom",
    default: 4
})
//selector
export const totalNotificationsSelector = selector({
    key: "totalNotificationSelector",
    value: ({get}) =>{
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationAtomCount = get(notificationsAtom);
        const messagingAtomCount = get(messagingAtom);

        return networkAtomCount + jobsAtomCount + notificationAtomCount + messagingAtomCount;
    }
})