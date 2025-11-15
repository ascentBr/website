'use client';

import React from 'react'
import styles from './Benefits.module.scss'
import Image from 'next/image'
// 


type BenefitItemProps = {
    icon: string;
    title: string;
    description: string;
}

const BenefitItem = ({ icon, title, description }:BenefitItemProps) => {
    return (
        <div className={styles.benefitItem}>
           {<Image src={icon} alt={title} width={64} height={64} />}
            <h3 className={styles.benefitItemTitle}>{title}</h3>
            <p className={styles.benefitItemSubtitle}>{description}</p>
        </div>
    )
}

export default BenefitItem