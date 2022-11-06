import { GetServerSideProps } from 'next';
import Navbar from '../../components/Navbar';

const UserDetails = ({userdata}: any) => {
  return (
      <div>
          <Navbar />
          <h1>Name: {userdata.name}</h1>
          <p>Email: { userdata.email }</p>
          <p>Phone: { userdata.phone }</p>
          <p>City: { userdata.address.city }</p>
    </div>
  )
}

export default UserDetails

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { userid } = context.query;
    
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${userid}`).then((res) => res.json());

    return {
        props: {
            userdata: data
        },
    };
};