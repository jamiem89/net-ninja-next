import Link from "next/link";
import styles from '../../styles/Ninjas.module.css'

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    return {
        props: {
            users: data
        }
    }
}

const Ninjas = ({users}) => {
    return (<>
        <div className="">
            <h1>All ninjas</h1>
            {users.map(user => (
                <Link href={`/ninjas/${user.id}`} className={styles.single} key={user.id}>{user.name}</Link>
            ))}
        </div>
    </>);
}

export default Ninjas;