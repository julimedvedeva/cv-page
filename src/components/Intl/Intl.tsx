import React, { useMemo } from 'react';
import { useIntl } from '@/queries';

interface IProps {
    value: string;
}

const Intl: React.FC<IProps> = ({
    value
}) => {
    const intlQuery = useIntl();

    const text = useMemo(() => {
        return intlQuery.data?.[value]
    }, [intlQuery.data, value])

    return text
}

export default Intl;