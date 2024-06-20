import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, styles.backgroundImage)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>

        <p style={{ fontSize: '18px' }}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function NewContent() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner, styles.backgroundImage2)}>
      <div className="container">
        <Heading as="h3" className="hero__title">
          Pintasan Menu
        </Heading>

        <p style={{ fontSize: '18px' }}>Akses cepat menu-menu di dalam sistem terintegrasi yang kami sediakan dibawah ini</p>

        <table style={{ border: '0px solid', marginLeft: -11 }}>
          <tr style={{ border: '0px solid' }}>
            <td style={{ border: '0px solid' }}>
              <div>
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/intro">
                  📥 &nbsp;&nbsp;Overviews
                </Link>
              </div>
            </td>
            <td style={{ border: '0px solid' }}>
              <div>
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/intro">
                  🎲 &nbsp;&nbsp;Documentations
                </Link>
              </div>
            </td>
            <td style={{ border: '0px solid' }}>
              <div>
                <Link
                  className="button button--secondary button--lg"
                  to="/blog">
                  🚧 &nbsp;&nbsp;Changelogs
                </Link>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
      <NewContent />
    </Layout>
  );
}
