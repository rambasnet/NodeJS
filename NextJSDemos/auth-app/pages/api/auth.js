import nextConnect from 'next-connect';
import middleware from '../../middlewares/middleware';
import passport from '../../lib/passport';
import { extractUser } from '../../lib/api-helpers';
import { connectToDatabase } from "../../util/mongodb";

const handler = nextConnect();

handler.use(middleware);



export default async (req, res) => {
  const { db } = await connectToDatabase();

  const movies = await db
    .collection("movies")
    .find({})
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

  res.json(movies);
};

handler.post(passport.authenticate('local'), (req, res) => {
  // return our user object
  console.log(req);
  res.json({ user: extractUser(req.user) });
});

handler.delete((req, res) => {
  req.logOut();
  res.status(204).end();
});

export default handler;