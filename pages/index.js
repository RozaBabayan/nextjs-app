import { Fragment, useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     image:
//       "https://uscvillage.com/wp-content/uploads/2018/08/Facebook_USCVILLAGE_OpenGraph_Homepage_v1.jpg",
//     title: "A First Meetup",
//     address: "3301 S Hoover St, Los Angeles, CA 90007",
//     description: "This is the first meetup",
//   },
//   {
//     id: "m2",
//     image:
//       "https://i0.wp.com/www.iamnotastalker.com/wp-content/uploads/2019/05/Hoose-Library-from-What-Women-Want-19-of-61.jpg",
//     title: "A Second Meetup",
//     address: "3709 Trousdale Pkwy, Los Angeles, CA 90089",
//     description: "This is the second meetup",
//   },
// ];

function HomePage(props) {
  //   const [loadedMeetups, setLoadedMeetups] = useState([]);
  //   useEffect(() => {
  //     //send a http erquest and fetch the data
  //     setLoadedMeetups(DUMMY_MEETUPS);
  //   }, []);
  // return <MeetupList meetups={DUMMY_MEETUPS}> </MeetupList>;
  //return <MeetupList meetups={loadedMeetups}> </MeetupList>;
  return (
    <Fragment>
      <Head>
        <title>Create Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups}> </MeetupList>
    </Fragment>
  );
}

export async function getStaticProps() {
  //fetch the data from the MongoDb
  //Establish a DB conncetion and save the data
  const client = await MongoClient.connect(
    "mongodb+srv://RozaB:Mymongodb6724!@cluster0.yc593od.mongodb.net/meetups?retryWrites=true&w=majority"
  ); //Step1
  const db = client.db(); //Step2
  const meetupsCollection = db.collection("meetups"); //Step3

  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

// export async function getStaticProps() {
//   //which code we type in here will be server side and will not be available in client side
//   //bc it is executed in build process
//   //fetch data from and API/ or DB/ or File
//   //it always returns an object, which has a props
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//     revalidate: 1,
//   };
// }

//alternatively to getStaticProps we can use the following
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   //fetch data from an API/DB/files
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export default HomePage;
