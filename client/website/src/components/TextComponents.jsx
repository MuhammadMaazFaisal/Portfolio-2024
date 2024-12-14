import React from 'react';
import { styles } from "../styles";

export const SectionText = ({ variant, classNames, children }) => {
  const variantStyles = {
    subText: styles.sectionSubText,
    headText: styles.sectionHeadText,
    heroHeadText: styles.heroHeadText,
    heroSubText: styles.heroSubText,
  };

  const tagMapping = {
    heroHeadText: 'h1',
    headText: 'h2',
    subText: 'p',
    heroSubText: 'p',
  };

  const Tag = tagMapping[variant] || 'p';

  return (
    <Tag className={`${variantStyles[variant]} ${classNames}`}>
      {children}
    </Tag>
  );
};