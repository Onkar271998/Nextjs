import { GetServerSideProps } from 'next';
import Link from 'next/link';
import Navbar from '../../components/Navbar';

const index = ({userData}: any) => {
  return (
      <div>
          <Navbar/>
          {userData.map((e:any) => (
              <h3 key={e.id}>
                  • <span></span>
                  <Link href={`/users/${e.id}`}>
                      {e.name}
                  </Link>
              </h3>
          ))}
    </div>
  )
}

export default index


export const getServerSideProps: GetServerSideProps = async () => {
    const data:any = await fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json())

    return {
        props: {
            userData: data
        },
    };
};