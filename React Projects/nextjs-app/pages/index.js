import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse List of React Meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export async function getServerSideProps(context) {
  const client = await MongoClient.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      })),
    },
  };
}

export default HomePage;
