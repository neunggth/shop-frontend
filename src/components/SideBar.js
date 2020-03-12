//


import React, { Component } from 'react'

class SideBar extends Component {
    render() {
        return (
            <>
            <ol>
                {
                    this.props.menus.map( (menu, index) => {
                        return <li key={index}> 
                        <a href={menu.url}>{menu.title} </a>
                        </li>
                })
                }
            </ol>
            </>
        )
    }
}

export default SideBar
