import React from 'react';
import { HomepageBanner, HomepageCallout } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';
import { calloutLink } from './Homepage.module.scss';

import Carbon from '../../images/cloudnative2.jpg';

const BannerText = () => <h1>Cloud Native<br/>Developer Activation (prototype)</h1>;

const FirstLeftText = () => <p>Sandbox</p>;

const FirstRightText = () => (
  <p>
      This Developer Activation enables a Cloud Native developer to learn how to complete key Day 1 and Day 2 developer tasks with the IBM Cloud and Red Hat OpenShift container service.
    <a
      className={calloutLink}
      href="https://www.ibm.com/cloud"
    >
      IBM Cloud →
    </a>
  </p>
);

const SecondLeftText = () => <p>Cloud Paks</p>;

const SecondRightText = () => (
  <p>
      The Enablement builds on an Open Source Software Development Life Cycle and enables developers to use and consume the IBM Cloud Paks, including Applications with App Modernization, Integration with API Connect.
    <a
      className={calloutLink}
      href="https://www.ibm.com/garage/method"
    >
      IBM Garage Method →
    </a>
  </p>
);


const customProps = {
  Banner: <HomepageBanner renderText={BannerText} image={Carbon} />,
  FirstCallout: (
    <HomepageCallout
      backgroundColor="#030303"
      color="white"
      leftText={FirstLeftText}
      rightText={FirstRightText}
    />
  ),
  SecondCallout: (
    <HomepageCallout
      leftText={SecondLeftText}
      rightText={SecondRightText}
      color="white"
      backgroundColor="#061f80"
    />
  ),
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
