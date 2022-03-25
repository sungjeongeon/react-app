import moment from 'moment';
import 'moment/locale/ko';
import { ProcessViewCount, ProcessUploadDate} from '../../utils';
import styles from './HomeCard.module.css';

function HomeCard(data, index) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${data.id}`}
      key={`home-card-${index}`}
      className={styles.card}
    >
      <img
        className={styles.thumbnail}
        src={data.thumbnail}
        alt={`${data.title}의 썸네일`}
      />
      <div className={styles.info}>
        <a href={`https://www.youtube.com/channel/${data.channelId}`}>
          <img
            className={styles.channelImg}
            src={data.channelThumbnail}
            alt={`${data.channelTitle} 프로필 사진`}
          />
        </a>

        <div>
          <div className={styles.title}> {data.title}</div>
          <div className={styles.uploader}>{data.channelTitle}</div>
          <div className={styles.flex}>
            <div className={styles.view}>
              {ProcessViewCount(data.viewCount)}
            </div>
            <div className={styles.date}>
              {ProcessUploadDate(moment(data.date))}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default HomeCard;