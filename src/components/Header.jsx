import React from 'react'
import { StyledHeader, StyledIcon, StyledList } from './styles'
import { BiBarChartSquare } from 'react-icons/bi'
import { RiSettings5Fill } from 'react-icons/ri'
import { HiUserCircle } from 'react-icons/hi'
import {FaCheckCircle} from 'react-icons/fa'


const Header = () => {
    return (
        <>
            <StyledHeader>
                <StyledIcon>
                    <FaCheckCircle />
                    <h1>PomoPedro</h1>
                </StyledIcon>
                <StyledList>
                    <li><a><BiBarChartSquare />Report</a></li>
                    <li><a><RiSettings5Fill />Settings</a></li>
                    <li><a><HiUserCircle />Login</a></li>
                </StyledList>

            </StyledHeader>
        </>
    )
}

export default Header