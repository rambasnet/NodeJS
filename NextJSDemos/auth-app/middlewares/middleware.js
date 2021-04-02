import nextConnect from 'next-connect';
import database from './database';
import session from './session';
import passport from '../lib/passport';

const middleware = nextConnect();

middleware
  .use(database)
  .use(session)
  .use(passport.initialize()) // passport middleware handles authenthentication, which populates req.user
  .use(passport.session());

export default middleware;