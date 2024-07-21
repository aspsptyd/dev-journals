import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Data Portofolio',
    Svg: require('@site/static/img/icon_3.svg').default,
    description: (
      <>
        Kumpulan portofolio hasil kerja selama berkarir di dunia IT, mungkin belum lengkap akan terus dilengkapi
      </>
    ),
  },
  {
    title: 'Jurnal Develop',
    Svg: require('@site/static/img/icon_2.svg').default,
    description: (
      <>
        Jurnal-jurnal terkait hasil pekerjaan selama berkarir, apa yang pernah dibuat dan apa yang pernah di pelajari kemudian diimplementasikan
      </>
    ),
  },
  {
    title: 'Sharing is Caring',
    Svg: require('@site/static/img/icon_1.svg').default,
    description: (
      <>
        Tentunya sebagai sarana sharing, mungkin bisa bermanfaat di waktu mendatang, so Who Knows, yang bisa kita lakukan just do it!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features} style={{ marginTop: '10px' }}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
