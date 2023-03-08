import Image from 'next/image';
import { Inter } from '@next/font/google';
import Script from 'next/script';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export type gtag = {
  event_action: string;
  event_category: Date;
  event_label: string;
  event_value: string;
};

const Home = () => {
  // const GtagEventGA4 = () => {
  //   window.gtag('event', 'ga4_Custom_Event_GTAG', {
  //     event_action: 'event_action',
  //     event_category: 'event_category',
  //     event_label: 'event_label',
  //     event_value: 'event_value',
  //   });
  //   console.log('Gtag GA4 event + propeties sent');
  // };

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-DNMRELNT2D"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-DNMRELNT2D', {
            page_path: window.location.pathname,
          });
        `,
        }}
      />
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            !!!!Get started by editing&nbsp; ---qqqqqqqqqqqqqq
            <code className={styles.code}>src/app/page.tsx</code>
          </p>
          <div>
            <a
            // href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            // target="_blank"
            // rel="noopener noreferrer"
            // onClick={GtagEventGA4()}
            >
              Click here to send event to GA4!!!!{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/thirteen.svg"
              alt="13"
              width={40}
              height={31}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
            href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Explore the Next.js 13 playground.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div>
      </main>
    </>
  );
};

export default Home;
