import { Strategy, ExtractJwt } from 'passport-jwt';

const opts = {
	jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
	secretOrKey:" holapomodoro"
};

const myStrategy: Strategy = new Strategy(
	opts, (payload, done) => {
		const usuario = {
			id: payload.id,
			username: payload.username
		};
		if (usuario) {
			return done(null, usuario);
		} else {
			return done(null, false);

		}
	}
);

export default myStrategy;