import React from 'react';
import CompanyCard from './CompanyCard.jsx';
import * as Api from '../api';
import { Card } from 'semantic-ui-react';

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
            let { id, location, name, hours, phone, rating, rank, views, recommended, outstanding, cardImage } = company;
            return (
                <Card.Group key={id}>
                    {
                        <CompanyCard
                            location={location}
                            companyName={name}
                            image={cardImage}
                            officeHours={hours}
                            phoneNumber={phone}
                            rating={rating}
                            rank={rank}
                            views={views}
                            recommened={recommended}
                            outstanding={outstanding}
                            likes={"5,312"}
                            comments={"2,123"}
                        />
                    }
                </Card.Group>
            )
        })
    }

    render() {
        return (
            <React.Fragment>
                {this.renderCompanyCards()}
            </React.Fragment>
        )
    };
}

export default CompanyInfo;