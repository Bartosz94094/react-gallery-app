import React from 'react';
import PropTypes from 'prop-types';
import Picture from '../picture/Picture';
import styles from './Gallery.module.css';
import Header from '../header/Header';

class Gallery extends React.Component {

    data = this.props.data;

    state = {
        number: 0
    }

    //it scrolls to the top of the website on mobile devices (portrait mode)
    componentDidUpdate() {
        if(window.innerHeight>=window.innerWidth) {
            window.scrollTo(0,0);
        }
    }

    render() {
        return(
            <div className={styles.galleryWrapper}>
                <Header/>
                <div className={styles.picturesWrapper}>
                    {
                        this.data.slice(this.state.number, this.state.number+3).map(picture => (<Picture {...picture} key={picture.id}/>))
                    }
                </div>
                <button onClick={this.displayNextImages.bind(this)} className={styles.button}>Next!</button>
            </div>
        );
    }

    displayNextImages() {
        this.setState(prevState => {
            if(this.state.number < this.data.length - 3) {
                return {number: prevState.number+3};
            }
            return {number:0};
        });
    }
}

Gallery.propTypes = {
    data: PropTypes.array
}

export default Gallery;