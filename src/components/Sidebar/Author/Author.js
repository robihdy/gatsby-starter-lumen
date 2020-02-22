// @flow strict
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './Author.module.scss';

type Props = {
  author: {
    name: string,
<<<<<<< HEAD
    bio: string
=======
    bio: string,
    photo: string
>>>>>>> 459e90851d03195f019b1301e7afc789a8a229c1
  },
  isIndex: ?boolean
};

const Author = ({ author, isIndex }: Props) => (
  <div className={styles['author']}>
<<<<<<< HEAD
    {isIndex === true ? (
      <h1 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">
          {author.name}
        </Link>
      </h1>
    ) : (
      <h2 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">
          {author.name}
        </Link>
=======
    <Link to="/">
      <img
        src={withPrefix(author.photo)}
        className={styles['author__photo']}
        width="75"
        height="75"
        alt={author.name}
      />
    </Link>

    { isIndex === true ? (
      <h1 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
      </h1>
    ) : (
      <h2 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">{author.name}</Link>
>>>>>>> 459e90851d03195f019b1301e7afc789a8a229c1
      </h2>
    )}
    <p className={styles['author__subtitle']}>{author.bio}</p>
  </div>
);

export default Author;
