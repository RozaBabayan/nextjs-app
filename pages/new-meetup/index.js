//our-domain.com/new-meetup
import { useRouter } from "next/router";
import { Fragment } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import Head from "next/head";

function NewMeetupPage() {
  const router = useRouter();
  async function addMeetupHandler(eneteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(eneteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    router.push("/");
  }
  return (
    <Fragment>
      <Head>
        <title>Add New Meetups</title>
        <meta name="description" content="Add a new meetup" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler}> </NewMeetupForm>;
    </Fragment>
  );
}

export default NewMeetupPage;
