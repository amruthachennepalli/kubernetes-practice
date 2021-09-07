import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Use it inside your CI/CD pipeline',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Typescript/Javascript SDK (coming soon..)
        Use with Kubectl, helm, ...
        Up and running in few seconds..
      </>
    ),
  },
  {
    title: 'Low-cost clusters for your testing',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Free for hobby and Paid plans starting from 1$ USD per 1GB memory / 0.5 vcpu
        Simple & Easy to understand billing
      </>
    ),
  },
  {
    title: 'Create your hobby clusters for free',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
         Your latest k8s version up and running in few seconds
         Host it on our domains with free ssl or use your own domain (coming soon)
         Install add-ons from easy to use UI
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
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
