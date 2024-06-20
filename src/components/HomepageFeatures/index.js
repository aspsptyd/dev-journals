import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Changelog of Version',
    Svg: require('@site/static/img/icon_3.svg').default,
    description: (
      <>
        Historical of improvement, can access detail feature on the products, no worry about lost data, we achieve all recap.
      </>
    ),
  },
  {
    title: 'Documentation Breakdown',
    Svg: require('@site/static/img/icon_2.svg').default,
    description: (
      <>
        We still update of documentation products at goodeva technology
      </>
    ),
  },
  {
    title: 'Achievement & Improvement',
    Svg: require('@site/static/img/icon_1.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
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
    <section className={styles.features} style={{ marginTop: '20px' }}>
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
