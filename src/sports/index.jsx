import { Link } from "react-router-dom";

const SportsPage = () => {
  return (
    <div>
      <Link to="/" className="text-blue-600 underline hover:text-blue-900">
        Home
      </Link>
      <div className="max-w-3xl px-4 py-8 mx-auto">
        <h1 className="mb-4 text-3xl font-bold">
          Unusual Sports Around the World
        </h1>
        <p className="mb-6 text-lg">
          In a world filled with popular sports like football, cricket, and
          basketball (no, really), there are some lesser-known sports that are
          equally fascinating and exciting. Let&apos;s explore a few of these
          unusual sports from different corners of the globe.
        </p>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Bo-taoshi</h2>
          <p className="mb-2">
            Originating in Japan, Bo-taoshi is a unique and intense team sport
            often played as part of school festivals. The objective is simple
            yet challenging: each team aims to lower the opposing team&apos;s
            pole while defending their own. With players divided into attackers
            and defenders, Bo-taoshi requires strategy, coordination, and
            physical prowess.
          </p>
          <p>
            The chaotic nature of Bo-taoshi makes it a thrilling spectacle to
            watch, as teams engage in a frenzied battle to gain control of the
            pole amidst the chaos.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Kabaddi</h2>
          <p className="mb-2">
            Kabaddi, often referred to as the &apos;game of struggle,&apos; is a
            traditional sport popular in South Asia, particularly in India.
            Combining elements of wrestling, tag, and endurance, Kabaddi is
            played between two teams, each taking turns to send a player into
            the opponent&apos;s half to tag as many defenders as possible
            without getting tackled.
          </p>
          <p>
            The fast-paced nature of Kabaddi, coupled with its emphasis on
            agility and strength, makes it a riveting sport to watch, drawing
            huge crowds during major tournaments.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Korfball</h2>
          <p className="mb-2">
            Korfball is a mixed-gender team sport that originated in the
            Netherlands in the early 20th century. Similar to basketball and
            netball, Korfball features two teams aiming to score points by
            shooting a ball through a raised hoop. What sets Korfball apart is
            its unique rule that prohibits players from shooting if they are
            being defended by a member of the opposite sex.
          </p>
          <p>
            Korfball promotes teamwork, cooperation, and gender equality on the
            field, making it an inclusive and dynamic sport enjoyed by players
            of all ages and backgrounds.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Sepak Takraw</h2>
          <p className="mb-2">
            Hailing from Southeast Asia, Sepak Takraw is a high-energy sport
            that combines elements of football, volleyball, and martial arts.
            Played with a rattan ball, teams of three players attempt to keep
            the ball off the ground and volley it over a net using only their
            feet, knees, chest, and head.
          </p>
          <p>
            The acrobatic displays and lightning-fast reflexes exhibited by
            Sepak Takraw players make it a visually stunning and captivating
            sport to watch, showcasing the athleticism and agility of its
            participants.
          </p>
        </div>

        <p className="text-lg">
          These are just a few examples of the many unusual sports enjoyed by
          people around the world. Whether it&apos;s the frenetic action of
          Bo-taoshi, the strategic gameplay of Korfball, or the sheer
          athleticism of Sepak Takraw, these sports offer a glimpse into the
          rich diversity of athletic pursuits across different cultures.
        </p>
      </div>
    </div>
  );
};

export default SportsPage;
