import { Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import PageHeaderWithBreadCamp from '../../components/custom/PageHeaderWithBreadCamp'
import { MainContainer } from '../../components/custom/StyledComponents'
import AddUserForm from '../../components/users/AddUserForm'

const AddUser = () => {
    const crumbs = [
        <NavLink underline="hover" style={{ color: "gray" }} to="/admin/users">
          Users
        </NavLink>,
        <Typography key="3" color="text.primary">
          Add User
        </Typography>
      ]
    return (
        <MainContainer>
            <PageHeaderWithBreadCamp title="All Users" action={()=>{}} crumbs={crumbs} />
            <AddUserForm />
        </MainContainer>
    )
}

export default AddUser
