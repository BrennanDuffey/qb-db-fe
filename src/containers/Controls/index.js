import React, { Component } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

function Controls() {

  const categories = [
    { label: 'Geography', id: 15 },
    { label: 'History', id: 15 },
    { label: 'Science', id: 15 },
    { label: 'Literature', id: 15 },
    { label: 'Fine Arts', id: 15 },
    { label: 'Religion', id: 15 },
    { label: 'Mythology', id: 15 },
    { label: 'Philosophy', id: 15 },
    { label: 'Current Events', id: 15 },
    { label: 'Social Science', id: 15 }
  ]

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <Select options={ categories } />
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </div>
  )
}