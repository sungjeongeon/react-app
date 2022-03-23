import styles from './ExploreCard.module.css';

function ExploreCard({ data }) {
  return (
    <a href={`https://www.youtube.com/watch?v=${data.id}`}>
      <div className={styles.card}>
        <img
          className={styles.thumbnail}
          src={data.thumbnail}
          alt={`${data.title}의 썸네일`}
        />
        <div className={styles.info}>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.meta}>
            <a
              href={`https://www.youtube.com/channel/${data.channelId}`}
              className={styles.uploader}
            >
              {data.channelTitle}
            </a>
            <div className={styles.view}>{data.viewCount}</div>
            <div className={styles.time}>{data.date}</div>
          </div>
          <div className={styles.desc}>{data.description}</div>
        </div>
      </div>
    </a>
  );
}
export default ExploreCard;