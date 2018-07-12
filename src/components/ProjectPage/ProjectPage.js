import React from 'react'

import Layout from '../layout'

const ProjectPage = ({children, location}) => {
    return (
        <Layout location={location}>
            {children}
        </Layout>
    )
}


export default ProjectPage;