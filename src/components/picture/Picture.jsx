import React from 'react';
import PropTypes from 'prop-types';
import styles from './Picture.module.css';
import spinner from '../../assets/rolling.svg'

class Picture extends React.Component {

    state = {
        loaded: false
    }

    onLoad() {
        this.setState({loaded: true});
    }

    render() {
        const {id, author, url} = this.props;
        const correctUrl = `http://source.unsplash.com/${url.split("/")[url.split("/").length-1]}`;

        return (
            <div className={styles.wrapper}>
                {
                    this.state.loaded?
                    null
                    :
                    <div className={styles.spinnerWrapper}>
                        <img className={styles.spinner} src={spinner} alt=""/>
                    </div>
                }
                <img className={styles.image} src={correctUrl} alt="photo" 
                style ={this.state.loaded? {} : {display: 'none'}} onLoad={this.onLoad.bind(this)}/>
                <p className={styles.id}>Id: {id}</p>
                <h2 className={styles.author}>Author: {author}</h2>
            </div>
        )
    }
}

Picture.propTypes = {
    author: PropTypes.string,
    id: PropTypes.string,
    url: PropTypes.string
}

Picture.defaultProps = {
    author: "--",
    id: "--"
}
    
export default Picture;