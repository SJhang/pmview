import React from 'react';
import { Card, Image, List, Label, Icon } from 'semantic-ui-react';

function CompanyCard({companyName, location, image, likes, comments, officeHours, phoneNumber, rating, rank, views, recommended, outstanding}) {
    return (
        <Card raised>
            <Image src={image} size={"small"} wrapped centered />

            <Card.Content>
                <Card.Header>{companyName}</Card.Header>
                <Card.Meta>
                    <span className="location">{location}</span>
                </Card.Meta>
                <Card.Description>
                    <List divided selection>
                        <List.Item>
                            <Label horizontal>
                                <Icon name={"clock"} /> Hours
                            </Label>
                            {officeHours}
                        </List.Item>
                        <List.Item>
                            <Label horizontal>
                                <Icon name={"phone"} /> Phone
                            </Label>
                            {phoneNumber}
                        </List.Item>
                        <List.Item>
                            <Label horizontal>
                                <Icon name={"gratipay"} /> Rating
                            </Label>
                            {rating}
                        </List.Item>
                    </List>
                </Card.Description>
            </Card.Content>

            <Card.Content extra>
                <Label as={"a"} color={"red"}>
                    <Icon name={"heart"} />
                    {likes}
                </Label>
                <Label as={"a"} color={"blue"}>
                    <Icon name={"edit"} />
                    {comments}
                </Label>
                <Label as={"a"}>
                    <Icon name={"comment"} />
                </Label>
                <Label as={"a"}>
                    <Icon name={"calendar"} />
                </Label>
            </Card.Content>

        </Card>
    );
}

export default CompanyCard;