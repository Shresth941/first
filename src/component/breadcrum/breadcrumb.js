import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
const PageBreadcrumb = ({page}) => {
  return (
    <Breadcrumb className='mt-3'>
    <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
   
    <Breadcrumb.Item active>{page}</Breadcrumb.Item>
  </Breadcrumb>
  )
}

export default PageBreadcrumb
