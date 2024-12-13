import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant, zoomIn, slideIn } from '../utils/motion';

const variantsMap = {
  fadeIn,
  textVariant,
  zoomIn,
  slideIn,
};

export const MotionDiv = ({ variant, variantProps = [], className, children, ...props }) => {
  const variants = variantsMap[variant] ? variantsMap[variant](...variantProps) : {};
  return (
    <motion.div variants={variants} className={className} {...props}>
      {children}
    </motion.div>
  );
};

export const MotionParagraph = ({ variant, variantProps = [], className, children, ...props }) => {
  const variants = variantsMap[variant] ? variantsMap[variant](...variantProps) : {};
  return (
    <motion.p variants={variants} className={className} {...props}>
      {children}
    </motion.p>
  );
};

export const MotionImage = ({ variant, variantProps = [], className, src, alt, ...props }) => {
  const variants = variantsMap[variant] ? variantsMap[variant](...variantProps) : {};
  return (
    <motion.img variants={variants} className={className} src={src} alt={alt} {...props} />
  );
};