import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <img
        src={`https://flagcdn.com/w40/${country.emoji.toLowerCase()}.png`}
        alt={`${country} flag`}
        className={styles.emoji}
      />
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
