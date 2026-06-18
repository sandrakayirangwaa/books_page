import Card from "./Card";
import styles from "./CardGrid.module.css";

export default function CardGrid({ items = [] }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <Card
          key={item.id}
          name={item.title}
          author={item.author}
          rating={item.rating}
          description={item.description}
          image={item.image}
        />
      ))}
    </div>
  );
}



