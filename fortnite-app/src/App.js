import React from 'react';
import './App.css';
import Maps from './components/Maps';
import NewsCard from './components/NewsCard';
import Table from './components/Table';
import UpcomingCard from './components/UpcomingCard';
import UserSearchInputs from './components/UserSearchInputs';
import VideoCard from './components/VideoCard';

function App() {


//  useEffect(() => {
//   //  const fetchData = async () => {
//   //   const id = await userFetch('gugamarahu');
//   //   const data = await getStats(id);
//   //   console.log(data)
//   //  } 
//   //  fetchData();
//   const fetchData = async () => {
//     const maps = await getMaps();
//     console.log(maps)
//    } 
//    fetchData();
//  }, [])

  return (
    <div className="App">
        <UserSearchInputs />
        <h1>Stats</h1>
        <Table />
        <h1>Mapa</h1>
        <Maps />
        <h1> Novidades da loja </h1>
        <UpcomingCard />
        <h1>Notícias</h1>
        <NewsCard />
        <h1>Vídeo da Temporada</h1>
        <VideoCard />
    </div>
  );
}

export default App;
