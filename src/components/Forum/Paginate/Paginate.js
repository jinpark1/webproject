import React, { Component } from 'react';
import './Paginate.css';
import Pagination from 'react-paginating';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Paginate extends Component {
    constructor(){
        super();
        this.state = {
            currentPage: 1,
            threads: [],
            offset: 0
          };

    }

    componentDidMount() {
        const id = this.state.offset * 10
        axios.get(`/api/threads/${id}`).then( res => {
           this.setState({
               offset: this.state.offset + 1,
               threads: res.data
           })
       }) 
    }

    handlePageChange = page => {
        this.setState({
          currentPage: page
        });
      };

      render() {
        const limit = 2;
        const total = this.state.threads.length * 2;
        // const total = 5;
        const { currentPage } = this.state;
        console.log('Paginate---', this.state.threads);
        const threads = this.state.threads ? this.state.threads.map( (v, i) => {
            return (
                <Link to={`/forums/${v.thread_id}`} className="thread-list" key={i}>
                    <div className="thread-list-left">
                        <div className="thread-list-subject">{v.subject}</div>
                        <div className="thread-list-id">{v.online_id}</div>
                    </div>
                    <div className="thread-list-right">
                        <div className="thread-list-category">{v.category}</div>
                        <div className="thread-list-created">{v.created}</div>
                    </div>
                </Link>
            )
        }) : null;

        let threadDisplay = this.state.threads;

        return (
          <div>
            <ul>
            {threadDisplay.map( (v, i) => {
            return (
                <Link to={`/forums/${v.thread_id}`} className="thread-list" key={i}>
                    <div className="thread-list-left">
                        <div className="thread-list-subject">{v.subject}</div>
                        <div className="thread-list-id">{v.online_id}</div>
                    </div>
                    <div className="thread-list-right">
                        <div className="thread-list-category">{v.category}</div>
                        <div className="thread-list-created">{v.created}</div>
                    </div>
                </Link>)})}
                {/* {fruits[currentPage - 1].map(item => <li key={item}>{item}</li>)} */}
            </ul>
            <Pagination total={total} limit={2} pageCount={3} currentPage={currentPage}>
              {({
                pages,
                currentPage,
                hasNextPage,
                hasPreviousPage,
                previousPage,
                nextPage,
                totalPages,
                getPageItemProps
              }) => (
                <div>
                  <button {...getPageItemProps({ pageValue: 1, onPageChange: this.handlePageChange })}>
                    first
                  </button>
    
                  {hasPreviousPage && (
                    <button {...getPageItemProps({ pageValue: previousPage, onPageChange: this.handlePageChange })}>
                      {'<'}
                    </button>
                  )}
    
                  {pages.map(page => {
                    let activePage = null;
                    if (currentPage === page) {
                      activePage = { backgroundColor: '#fdce09' };
                    }
                    return (
                      <button key={page} style={activePage} {...getPageItemProps({ pageValue: page, onPageChange: this.handlePageChange })}>
                        {page}
                      </button>
                    );
                  })}
    
                  {hasNextPage && (
                    <button {...getPageItemProps({ pageValue: nextPage, onPageChange: this.handlePageChange })}>{'>'}</button>
                  )}
                  <button {...getPageItemProps({pageValue: totalPages, onPageChange: this.handlePageChange})}>last</button>
                </div>
              )}
            </Pagination>
          </div>
        );
      }
    }

export default Paginate;


