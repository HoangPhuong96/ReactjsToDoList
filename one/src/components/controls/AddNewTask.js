import React, { Component } from 'react'

export default class AddNewTask extends Component {
    render() {
        return (
            <button type="button" className="btn my btn--newTask" data-toggle="modal" data-target="#modalTask">
                <i className="fa fa-pencil-square-o" />
                Tạo Task mới
      </button>
        )
    }
}
