
import styles from "./page.module.css";
import { getAllLecturers } from "./lib/api";
import  Image  from "next/image";


export default function Home() {


  const lecturer=  getAllLecturers()
  console.log(lecturer)

  return (
    <main className={styles.main}>
     
      </main>
  );
}
