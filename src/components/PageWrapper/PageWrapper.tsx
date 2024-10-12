import React from 'react';
import classnames from 'classnames';

import { motion } from 'framer-motion';

interface IProps {

}

const PageWrapper: React.FC<React.PropsWithChildren> = ({
    children
}) => {
    return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
          }}
          className='w-full h-full mx-auto flex justify-center'
        >
            {children}
        </motion.div>
    )
}

export default PageWrapper;