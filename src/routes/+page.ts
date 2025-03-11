import { load_Characters, loadAll } from '$houdini';
import type { PageLoad } from './$houdini';

export const load: PageLoad = async (event) => {
	return {
		...(await loadAll(load_Characters({ event })))
	};
};
