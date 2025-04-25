import image1 from "@/public/images/user/user-01.png";
import image2 from "@/public/images/user/user-02.png";
import user1 from "@/public/images/user/alex.jpeg";
import user2 from "@/public/images/user/mark.jpeg";
import user3 from "@/public/images/user/whitney.jpeg";

import { Testimonial } from "@/types/testimonial";

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Mark Reed",
    designation: "Co-founder @Estaie",
    image: user2,
    content:
      "FincorpX has been a game-changer for our startup. The automated bookkeeping has saved us countless hours.",
  },
  {
    id: 2,
    name: "Whitney Myrus",
    designation: "Founter @EAO Group Limited",
    image: user3,
    content:
      "Fincorpx helps keep my business finances crystal clear. No more guessing, no more fumbling around in Excel sheets.",
  },
  {
    id: 3,
    name: "Alex Griffths",
    designation: "Co-founder @Liris",
    image: user1,
    content:
      "Fincorpx delivers exactly what we need no fluff, just results. Their straightforward services and supportive team are perfect for startups and small businesses like ours.",
  },
  // {
  //   id: 4,
  //   name: "Jhon Abraham",
  //   designation: "Founter @democompany",
  //   image: image2,
  //   content:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit, ligula sit amet cursus tincidunt, lorem sem elementum nisi, convallis fringilla ante nibh non urna.",
  // },
];
