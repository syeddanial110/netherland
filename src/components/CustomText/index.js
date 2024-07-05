import React from 'react';
import { Typography } from '@mui/material';

const CustomText = ({
    text,
    textAlign,
    fontSize,
    marginRight,
    color,
    whiteSpace,
    fontWeight,
    width,
    marginBottom,
    marginTop,
}) => {
    return (
        <Typography
            textAlign={textAlign}
            sx={[{
                fontSize: fontSize ? fontSize : 18,
                marginRight: marginRight ? marginRight : 0,
                color: color ? color : '#fff',
                whiteSpace: whiteSpace ? whiteSpace : 'none',
                fontWeight: fontWeight ? fontWeight : 'normal',
            },
            width ? { width: width } : null,
            marginBottom ? { marginBottom: marginBottom } : null,
            marginTop ? { marginTop: marginTop } : null,
            ]}
        >
            {text}
        </Typography>
    );
};

export default CustomText;