import React from 'react';

import Image from 'react-bootstrap/Image';
import male from '../../assets/male_silhouette.png';
import female from '../../assets/female_silhouette.png';

import './styles.scss';

export default (props) => {
    const [source, setSource] = React.useState(`https://twitter.com/${props.twitter_account}/profile_image?size=original`);
    const [silhouetteSource, setSilhouetteSilhouetteSource] = React.useState(null);
    
    React.useEffect(() => {
        setSilhouetteSilhouetteSource(
            props.gender === 'female'
                ? female
                : male);
    }, [props]);

    return (
        <Image className='center' roundedCircle height={120} src={source} onError={e => setSource(silhouetteSource)}/>
    );
}
    
