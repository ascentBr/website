'use client';

import React from 'react'
import styles from './Benefits.module.scss'
// 

import BrandSvg from '@/assets/icons/brand.svg';
import webdevSvg from '@/assets/icons/web_dev.svg';
import digitalSvg from '@/assets/icons/digital_marketing.svg';
import mobileSvg from '@/assets/icons/mobile_app.svg';
import seoSvg from '@/assets/icons/seo.svg';
import userSvg from '@/assets/icons/user.svg';


type BenefitItemProps = {
    icon: string;
    title: string;
    description: string;
}


const BenefitItem = ({ icon, title, description }: BenefitItemProps) => {

    const icons: Record<string, React.ComponentType> = {
        '/benefits/brand.svg': BrandSvg,
        '/benefits/web_dev.svg': webdevSvg,
        '/benefits/digital_marketing.svg': digitalSvg,
        '/benefits/mobile_app.svg': mobileSvg,
        '/benefits/seo.svg': seoSvg,
        '/benefits/user.svg': userSvg,
    }
    const Icon = icons[icon];

    return (
        <div className={styles.benefitItem}>
            <i className={styles.benefitItemIcon}><Icon /></i>
            <h3 className={styles.benefitItemTitle}>{title}</h3>
            <p className={styles.benefitItemSubtitle}>{description}</p>
        </div>
    )
}

export default BenefitItem