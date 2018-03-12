import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWords, fetchByCrawler, sendWords, deleteWords, deleteByCrawler } from './StopWordActions';
import Words from "./StopWords";

const mapStateToProps= state =>{
    return {
        words: state.words
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchWords: bindActionCreators(fetchWords, dispatch),
        fetchByCrawler: bindActionCreators(fetchByCrawler, dispatch),
        deleteByCrawler: bindActionCreators(deleteByCrawler, dispatch),
        sendWords: bindActionCreators(sendWords, dispatch),
        deleteWords: bindActionCreators(deleteWords, dispatch)
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Words);
