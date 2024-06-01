//importing components from reactstrap

import {Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

////defining the component CampsiteCard
const CampsiteCard = (({ campsite }) => {
    //a const for further destructuring
    const { image, name } = campsite;
    //returning statements rendering the things exported from reactstrap
    return(
        <Card>
            <CardImg
                width = '100%'
                src = {image}
                alt = {name}
            />

            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
})

export default CampsiteCard;