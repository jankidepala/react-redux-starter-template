import React, { PropTypes, Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap'
import { Link, Router, Route, browserHistory } from 'react-router';
import { Photo_Url } from '../actions/types'
const products = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

class PhotoGallery extends Component {
    componentWillMount() {
        console.log("Phot PhotoGallery Loaded");
        const { apiFetch} = this.props;
        var t = {     }
        var _url = Photo_Url;
        this.props.apiFetch(_url, t, 'GET', 'photo');
    }
    render() {
        const {posts, i, comments, increment } = this.props;
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, i) =>
                    <figure className="grid-figure" {...this.props} key={i}>
                        <img className="grid-photo" src={post.display_src} />
                        <Link to={`/view/${post.code}`}>myPage</Link>
                        <div>
                        </div>
                        {post.caption}
                        <div key={post.code} className="control-button">
                            <button className="likes" onClick={this.props.increment.bind(null, i)}>&hearts; </button>
                            <button className="likes" >{post.likes}&hearts; </button>
                            <Link className="button" to={`/view/${post.code}`}>
                                <span className="comment-count">
                                    <span className="speech-b">nn</span>
                                </span>
                            </Link>
                        </div>
                    </figure>)}
            </div>
        )
    }
}


PhotoGallery.propTypes = {
    posts: PropTypes.array,
    apiFetch: PropTypes.func,
    increment: PropTypes.func
};
export default PhotoGallery;
