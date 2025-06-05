const events1 = [
    {
      title: 'Sinhala-Tamil New Year Celebration',
      date: 'April 13, 2025',
      time: '8.00 AM - 12.00 PM',
      description: 'A two-day retreat for teens to deepen their meditation practice and Buddhist understanding.',
      spots: 30,
      registered: 25
    },
    {
      title: 'Vesak Celebration',
      date: 'May 23, 2025',
      time: '8:00 AM - 12:00 PM',
      description: 'Join us for a special celebration including lantern making, offerings, and cultural performances.',
      spots: 50,
      registered: 32
    },
    {
      title: 'Children\'s Day',
      date: 'October 5, 2025',
      time: '8:00 AM - 12:00 PM',
      description: 'Interactive sessions for families to learn and practice Buddhism together.',
      spots: 100,
      registered: 45
    }
  ];
  import firebaseApp from "$lib/firebaseProject";
  import { collection, getDocs,getFirestore } from 'firebase/firestore';
  async function getEvents() {
    const db = getFirestore(firebaseApp);
    const newsCollectionRef = collection(db, 'news'); // Replace 'news' with your collection name
    const querySnapshot = await getDocs(newsCollectionRef);
    const events=querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return events;
    
  }
  export default getEvents;