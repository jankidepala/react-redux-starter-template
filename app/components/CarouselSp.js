import React, { PropTypes, Component } from 'react';
import { Grid, Row, Col, Navbar, Carousel } from 'react-bootstrap';
import { Link } from 'react-router';

class CarouselSp extends Component {
    constructor(props) {
        super(props);
    }
    state = {
            index: 0,
            direction: 'next'
        
    }
    handleDoubleClick = (selectedIndex, e) => {
        this.setState({ index: selectedIndex,  direction: 'prev' })
    }
    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction || 'next'
        });
    }
    render() {
        const { UserLogin} = this.props
        return (
                 <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleDoubleClick}>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="./media/Spotlight/1.png" />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="./media/Spotlight/2.png" />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src="./media/Spotlight/3.png" />
                    <Carousel.Caption>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        )
    };
}
CarouselSp.propTypes = {
    UserLogin: PropTypes.object,
    name: PropTypes.object

};

export default CarouselSp;
