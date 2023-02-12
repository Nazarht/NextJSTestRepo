import { useRouter } from "next/router";
import NewMeetupFrom from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const router = useRouter();
  const addMeetupHandler = async (data) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });

    const result = await response.json();

    console.log(result);

    router.push("/");
  };

  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Add your own meetups!"
        />
      </Head>
      <NewMeetupFrom onAddMeetup={addMeetupHandler} />
    </>
  );
}

export default NewMeetupPage;
