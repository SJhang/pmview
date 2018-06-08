import React from 'react';
import { Card, Image, List, Label, Icon, Segment, Header } from 'semantic-ui-react';

function CompanyFeaturedCard({companyName, location, image, likes, comments, officeHours, phoneNumber, rating, rank, views, tag, recommended, outstanding}) {
    return (
        <Segment raised>
            <Image
                src={'/images/burgerking.png'}
                size={'large'}
                bordered
                verticalAlign={'center'}
                label={{ as: 'a', ribbon: true, color: 'red', icon: 'thumbs up', content: views }}
            />
            {companyName}
            <Card.Content>
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
                        <List.Item>
                            <Label horizontal>
                                <Icon name={"tag"} /> Tag
                            </Label>
                            {tag}
                        </List.Item>
                    </List>
                </Card.Description>
            </Card.Content>

            <Card.Content extra>
                <Label as={"a"} color={"orange"}>
                    <Icon name={"trophy"} />
                    {`Rank ${rank}`}
                </Label>
                <Label as={"a"} color={"red"}>
                    <Icon name={"heart"} />
                    {likes}
                </Label>
                <Label as={"a"} color={"blue"}>
                    <Icon name={"edit"} />
                    {comments}
                </Label>
            </Card.Content>

        </Segment>
    );
}

export default CompanyFeaturedCard;