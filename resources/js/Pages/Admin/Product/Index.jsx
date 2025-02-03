import AdminLayout from '@/Layouts/AdminLayout'
import React from 'react'
import ProductList from './ProductList'


export default function index() {
  return (
    <AdminLayout>
        <ProductList/>
    </AdminLayout>
  )
}
