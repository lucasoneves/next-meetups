import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

function NewMeetup() {
	const router = useRouter();
  async function addMeetup(enteredMeetupData) {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

		router.push('/')
  }
  return <NewMeetupForm onAddMeetup={addMeetup}></NewMeetupForm>;
}

export default NewMeetup;
