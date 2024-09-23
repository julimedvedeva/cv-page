import React from 'react';
import classnames from 'classnames';

import styles from "./ScreenBack.module.scss";

interface IProps {

}

const ScreenBack: React.FC<React.PropsWithChildren<IProps>> = ({
    children
}) => {
    return (
        <div>
            <div className="bg-[#2C2C2C] min-h-screen w-screen pointer-events-none fixed top-0 left-0 overflow-hidden">
                <div className="w-screen h-screen overflow-hidden fixed top-0 z-0">
                    <img src="/images/bg-1.svg" className={styles.shapeA} />
                    <img src="/images/bg-2.svg" className={styles.shapeB} />
                </div>
            </div>

            <div className="relative w-screen h-screen flex justify-center items-center pointer-events-auto z-10 sm:h-auto">
                {children}
            </div>
        </div>
        
    )
}

export default ScreenBack;