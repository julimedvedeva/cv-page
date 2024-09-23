/* eslint-disable @next/next/no-img-element */

import React, { FC } from 'react'

import classNames from 'classnames';

interface IProps {
    src: string;
    className?: string;
}

const Icon: FC<IProps> = ({
    src,
    className,
}) => {
    return (
        <div
            className={classNames(className, 'block')}
            style={{
                maskImage: `url(${src})`,
                WebkitMaskImage: `url(${src})`,
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                background: 'currentColor'
            } as any}
        />
    )
}

export default Icon;