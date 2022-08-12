import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      ></MeetupDetail>
    </Fragment>
  );
}

export async function getStaticPaths() {
  //Get Connceted to DB
  const client = await MongoClient.connect(
    "mongodb+srv://RozaB:Mymongodb6724!@cluster0.yc593od.mongodb.net/meetups?retryWrites=true&w=majority"
  ); //Step1
  const db = client.db(); //Step2
  const meetupsCollection = db.collection("meetups"); //Step3

  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: "blocking",
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  //fetch data for single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  //Get Connceted to DB
  const client = await MongoClient.connect(
    "mongodb+srv://RozaB:Mymongodb6724!@cluster0.yc593od.mongodb.net/meetups?retryWrites=true&w=majority"
  ); //Step1
  const db = client.db(); //Step2
  const meetupsCollection = db.collection("meetups"); //Step3

  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();

  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
        title: selectedMeetup.title,
      },
      //  {
      //   id: meetupId,
      //   image:
      //     "https://uscvillage.com/wp-content/uploads/2018/08/Facebook_USCVILLAGE_OpenGraph_Homepage_v1.jpg",
      //   title: "A First meetup",
      //   address: "3301 S Hoover St, Los Angeles, CA 90007",
      //   description: "The meetup description",
      // },
    },
    revalidate: 1,
  };
}
export default MeetupDetails;
