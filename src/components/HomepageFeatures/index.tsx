import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};


function Feature({ title, Svg, description }: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <p style={{
          fontSize: '28px'
        }}>
          ✒️ Brief introduction
        </p>
        <div style={{ padding: "15px" }} className="row">
          <p>
            This is a currently work in progress website filled with rants, opinions, and documentation/guides of tools about my experience in journeying through the field of tech. I believe by sharing these opinions I give you (the reader) some prespective and knowledge to pick up.
          </p>
          <p>All this aside, you may contact me through one of these mediums:</p>
          <br />
          <ul>
            <li>Discord: <b>kale0602.</b> (preferred)</li>
            <li><a href='https://my.linkedin.com/in/kaaal'>LinkedIn</a></li>
            <li><a href='mailto:muhammad.haikal100602@gmail.com'>Email</a></li>
          </ul>
        </div>
        <p style={{
          fontSize: '28px'
        }}>
          ❗ TODOS
        </p>
        <div className="row">
          <ul>
            <li>Make this homepage a bit more personalized.</li>
            <li>Create a newslettering feature.</li>
            <li>Make a budget-friendly script for newslettering.</li>
            <li>Find a way to make the Twitter image metaheaders for this framework.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
