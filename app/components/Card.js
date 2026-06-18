// import Image from "next/image";
// import styles from "./Card.module.css";

// export default function Card({ name, blurb, rating, emoji, image }) {
//   return (
//     <article className={styles.card}>
//       {image ? (
//         <Image src={image} alt={name} width={240} height={140} />
//       ) : (
//         <div className={styles.emoji}>{emoji}</div>
//       )}
//       <h2>{name}</h2>
//       <p>{blurb}</p>
//       <p className={styles.stars}>{"⭐".repeat(rating)}</p>
//     </article>
//   );
// }


import styles from './Card.module.css';

export default function Card({ name, author, rating, image, description}) {
  return (
    <div className={styles.card}>
  
      <div className={styles.coverWrapper}>
        <img src={image} alt={name} className={styles.bookCover} />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.author}>{author}</p>
        <p className={styles.description}>{description}</p>
      </div>

      <div className={styles.footer}>
        <div className={styles.stars}>
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < rating ? styles.starActive : styles.starInactive}>
              ★
            </span>
          ))}
        </div>
        <span className={styles.ratingText}>{rating}.0</span>
      </div>
    </div>
  );
}

