import { HoudiniClient } from '$houdini';

import { timer } from './plugins/timer';

const plugins = [...(process.env.NODE_ENV === 'production' ? [] : [timer])];

export default new HoudiniClient({
	url: 'https://rickandmortyapi.com/graphql',
	plugins
});
