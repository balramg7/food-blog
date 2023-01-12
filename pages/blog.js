import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

const Blog = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
    <div className={styles.blogItem}>
      <Link href={'/blogpost/eat-alootikki'}>
      <h3>Ganpat Chat Bhandar</h3></Link>
      <p>This Shop is famous for Aloo Tikki</p>
    </div>
    <div className={styles.blogItem}>
      <h3>Kunjilal Sweet Corner</h3>
      <p>This Shop is famous for different variety of sweet</p>
    </div>
    <div className={styles.blogItem}>
      <h3>Mangla ChamCham Corner</h3>
      <p>This Shop is famous for ChamCham</p>
    </div>
    </main>
    </div>
  )
}

export default Blog
