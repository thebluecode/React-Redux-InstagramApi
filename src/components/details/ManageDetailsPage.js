import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ManageDetailsPage extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            medias: []
        };
    } 
    
    componentWillMount() {
        //this.getMediasByPosition(this.props.params.lat, this.props.params.lng, this.props.params.user_id);
    }    

    getMediasByPosition(lat, lng, userId) {
        var medias = this.props.medias.filter(media => 
            media.location.latitude === lat &&
            media.location.longitude === lng &&
            media.user.id === userId
        );
        
        this.setState({ medias: medias });
    }

    render() {
        return (
            <div>
                {this.medias.map(media =>
                    <img src={media.images.standard_resolution.url} alt={'media'} />
                )}
            </div>
        );
    }
}

ManageDetailsPage.propTypes = {
    medias: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    console.log(state.map);
    return {
        medias: state.map.medias
    };
}

export default connect(mapStateToProps)(ManageDetailsPage);