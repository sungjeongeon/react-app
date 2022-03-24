import styles from './Home.module.css';
import Layout from '../components/shared/Layout';
import youtubeData from '../data/youtubeData.json';
import HomeFilter from '../components/home/HomeFilter';
import HomeCard from '../components/home/HomeCard';
import { useState } from 'react';

const target = ['전체', 'BTS', 'LISA', '아이폰'];

function Home() {
  const [filter, setFilter] = useState('전체');

  function mapFunc(data, index) {
    return (
      <HomeFilter
        filter={filter}
        text={data}
        onClickFilter={function () {
          setFilter(data);
        }}
        key={`home-filter-${index}`}
      />
    );
  }
  function filterFunc(data) {
    if (filter === '전체' || data.title.includes(filter) || data.description.includes(filter)) return true;
    return false;
  }

  return (
    <Layout activeMenu="home">
      <div className={styles.header}>{target.map(mapFunc)}</div>
      <div className={styles.container}>
        <div className={styles.grid}>{youtubeData['data'].filter(filterFunc).map(HomeCard)}</div>
      </div>
    </Layout>
  );
}

export default Home;