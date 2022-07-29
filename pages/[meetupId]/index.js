import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://imagens.itforum.com.br/itforum.com.br/wp-content/uploads/2020/02/Sao-Paulo-e-a-terceira-cidade-do-mundo-que-mais-sera-impactada-pela-mobilidade.jpg"
      title="A first meetup"
      address="Some street, 4 - Some City"
      description="The Meetup description right here"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m12",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log("meetup id", meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://imagens.itforum.com.br/itforum.com.br/wp-content/uploads/2020/02/Sao-Paulo-e-a-terceira-cidade-do-mundo-que-mais-sera-impactada-pela-mobilidade.jpg",
        title: "A first meetup",
        address: "Some street, 4 - Some City",
        description: "The Meetup description right here",
        id: meetupId,
      },
    },
  };
}

export default MeetupDetails;
