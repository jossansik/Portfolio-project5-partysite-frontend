import { rest } from "msw";

const baseURL = "http://localhost/";

export const handlers = [
  rest.get(
    `${baseURL}api/categories/`,
    (req, res, ctx) => {
      return res(
        ctx.json({
          count: 1,
          next: null,
          previous: null,
          results: [
            {
              id: 1,
              name: "Halloween",
              description:
                "On October 31 comes the holiday dedicated to remembering the dead and warding off ghosts.\r\nHere you will find all the inspiration you need to throw the most fun and scary Halloween party.",
              image:
                "https://res.cloudinary.com/dqdqw/image/upload/v1/media/images/HALLOWEEN_sb59nm",
              created_at: "19 Oct 2022",
              updated_at: "25 Oct 2022",
            },
          ],
        })
      );
    }
  ),
];
