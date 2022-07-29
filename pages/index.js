import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m2",
    title: "First Meetup",
    image:
      "https://imagens.itforum.com.br/itforum.com.br/wp-content/uploads/2020/02/Sao-Paulo-e-a-terceira-cidade-do-mundo-que-mais-sera-impactada-pela-mobilidade.jpg",
    address: "Avenida Paulista, 1200 - São Paulo",
    description: "Nosso primeiro Meetup",
  },
  {
    id: "m12",
    title: "Second Meetup",
    image:
      "https://files.tecnoblog.net/wp-content/uploads/2020/03/rio-de-janeiro.jpg",
    address: "Copacabana, 1200 - Rio de Janeiro",
    description: "Nosso segundo Meetup",
  },
];

function Home(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 10
  }
}
export default Home;
