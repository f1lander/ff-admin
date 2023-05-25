import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import thirteen from "../public/thirteen.svg";
import next from "../public/next.svg";
import vercel from "../public/vercel.svg";

const inter = Inter({ subsets: ["latin"] });

const FEATURES_FLAGS = {
  SHOW_DOCS: false,
  SHOW_TEMPLATES: false,
  SHOW_DEPLOY: true,
} as const;

type FeatureFlagProps = {
  name: keyof typeof FEATURES_FLAGS;
  children: React.ReactNode;
};

const isFeatureFlag = (
  name: keyof typeof FEATURES_FLAGS
): name is keyof typeof FEATURES_FLAGS => {
  return FEATURES_FLAGS[name];
};

const FeatureFlag: React.FC<FeatureFlagProps> = ({ name, children }) => {
  if (FEATURES_FLAGS[name]) {
    return <>{children}</>;
  }

  return null;
};

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src={vercel}
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
          src={next}
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.thirteen}>
          <Image src={thirteen} alt="13" width={40} height={31} priority />
        </div>
      </div>

      <div className={styles.grid}>
        <FeatureFlag name="SHOW_DOCS">
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
        </FeatureFlag>
        {isFeatureFlag("SHOW_TEMPLATES") && (
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
        )}
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
  );
}
