import React from 'react';
import Card from './Card';
import launch from '../images/launch128.png';
import design from '../images/design128.png';
import develop from '../images/develop128.png';

const Services = () => {
  const message = {
    design: "It's important to plan but don't over do it. ",
    development: 'The joy is in the journey not the destination.',
    launch: 'Your baby eventually grows up.'
  };

  return (
    <div className="row small-up-2 medium-up-3">
      <Card title="Design" imgSrc={design} imgAlt="Design Logo" message={message.design} />
      <Card title="Develop" imgSrc={develop} imgAlt="Design Logo" message={message.development} />
      <Card title="Launch" imgSrc={launch} imgAlt="Design Logo" message={message.launch} />
    </div>
  );
};

export default Services;
