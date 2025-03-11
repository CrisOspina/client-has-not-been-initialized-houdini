/// <references types="houdini-svelte">

/** @type {import('houdini').ConfigFile} */
const config = {
	acceptImperativeInstability: true,
	watchSchema: {
		url: 'https://rickandmortyapi.com/graphql',
		interval: null
	},
	plugins: {
		'houdini-svelte': {
			client: './src/lib/graphql/client'
		}
	},
	scalars: {
		bpchar: {
			type: 'string'
		},
		numeric: {
			type: 'number'
		},
		bigint: {
			type: 'number'
		},
		smallint: {
			type: 'number'
		},
		float8: {
			type: 'number'
		},
		time: {
			type: 'Date'
		},
		timestamp: {
			type: 'Date'
		},
		timestamptz: {
			type: 'Date'
		},
		DateTime: {
			type: 'Date',
			unmarshal(val) {
				return val ? new Date(val) : null;
			},
			marshal(date) {
				return date && date.getTime();
			}
		}
	}
};

export default config;
