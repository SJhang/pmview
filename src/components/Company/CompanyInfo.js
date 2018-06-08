import React from 'react';
import CompanyCard from './CompanyCard';
import * as Api from '../../api/index';
import { Card } from 'semantic-ui-react';
import CompanyFeaturedCard from "./CompanyFeaturedCard";

class CompanyInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = { companies: [] };
    }

    componentDidMount() {
        Api.fetchCompanies("all").then(res => {
            this.setState({ companies: res })
        })
    }

    renderCompanyCards() {
        return this.state.companies.map(company => {
            let { id, location, name, hours, phone, rating, rank, views, recommended, outstanding, cardImage, tag, likes, comments } = company;
            return (
                <CompanyCard
                    key={id}
                    location={location}
                    companyName={name}
                    image={cardImage}
                    officeHours={hours}
                    phoneNumber={phone}
                    rating={rating}
                    rank={rank}
                    views={views}
                    tag={tag}
                    recommened={recommended}
                    outstanding={outstanding}
                    likes={likes}
                    comments={comments}
                />
            )
        })
    }

    render() {
        return (
            <React.Fragment>
                <CompanyFeaturedCard companyName={'BurgerKing'}/>
                <Card.Group itemsPerRow={4}>
                    {this.renderCompanyCards()}
                </Card.Group>
            </React.Fragment>
        )
    };
}

export default CompanyInfo;