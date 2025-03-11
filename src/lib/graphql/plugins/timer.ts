import { type ClientPlugin } from '$houdini';

export const timer: ClientPlugin = () => {
	return {
		start(ctx, { next }) {
			// add the start time to the context's stuff
			ctx.stuff = {
				...ctx.stuff,
				startTime: Date.now()
			};

			// move onto the next plugin
			next(ctx);
		},
		end(ctx, { resolve }) {
			const diff = Date.now() - ctx.stuff.startTime;
			console.log(`[query - ${ctx.name}] request took ${diff}ms`);

			resolve(ctx);
		}
	};
};
