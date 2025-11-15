'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react'


const DynamicLogo = ({
    darkModeSrc,
    lightModeSrc
}:{
    darkModeSrc: string;
    lightModeSrc: string;
}) => {
    
    const { theme } = useTheme();

    if (theme === 'light') {
        return (<Image src={lightModeSrc} alt="Ascent - web & performance" width={183} height={42} />)
    }
    return (
        <Image src={darkModeSrc} alt="Ascent - web & performance" width={183} height={42} />
    )
}

export default DynamicLogo