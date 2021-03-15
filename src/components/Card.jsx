import React from 'react';

class Card extends React.Component {


    render() {
        const { Poster, Title, Type, Year } = this.props;
        return (
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        Poster === 'N/A' ?
                            <img className="activator" src={`https://via.placeholder.com/300x420.png?text=${Title}`} alt="#" /> 
                            :
                            <img className="activator" src={Poster} alt="#" />
                    }

                </div>
                <div className="card-content">
                    <span className="card-title activator grey-text text-darken-4">{Title}</span>
                    <p>{Type}</p>
                    <p>{Year}</p>
                </div>
            </div>
        )
    }
}

export { Card };