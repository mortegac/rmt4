import { PrismicRichText } from '@prismicio/react'
import { Box } from './DescriptionStyle';

const Description = ({description}) => {
    return(
        // <>
            <Box style={{marginTop: '16px'}}>
            {
                description ?
                <PrismicRichText field={description}/>
                : <p>Sin description</p>
            }
            </Box>
        // </>
)};

export default Description;
