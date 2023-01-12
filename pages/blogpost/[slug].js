import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.h1}>Title of the blog page {slug}</h1>
        <hr />
        <hr />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          obcaecati quidem aliquid? Vero quisquam ratione obcaecati quae dolorum
          nemo quia laboriosam eligendi. Qui officiis fugit consequatur facilis,
          vero totam recusandae?
        </div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        fuga qui sequi, aut beatae commodi. Adipisci voluptatum ab ipsam aut
        placeat temporibus labore, odit molestiae harum quaerat vitae corporis
        perferendis natus perspiciatis saepe quas illo nostrum dolores aperiam
        consequuntur, veniam qui? Perspiciatis necessitatibus sit saepe ullam
        amet! Officiis perferendis provident iure dolorem fuga, aspernatur
        corrupti dolores possimus non assumenda reiciendis ullam, molestiae eum
        sapiente sit voluptate dolorum molestias unde itaque. Ipsum odit
        consectetur, hic distinctio deserunt aperiam modi similique, vitae
        nostrum pariatur labore commodi! Aliquid assumenda quibusdam dolore
        numquam cum ducimus atque officia fugit magnam porro veritatis, nihil
        accusantium dolorem!
      </main>
    </div>
  );
};

export default slug;
