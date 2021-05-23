module.exports = {
	purge: ["./src/**/*.css", ".html"],
	darkMode: false,
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		function ({addUtilities}) {
            const extendUnderline = {
                '.underline': {
                    'textDecoration': 'underline',
                    'text-decoration-color': '#db2777', // pink-400 color
					'text-decoration-thickness': '3px',
                },
            }
            addUtilities(extendUnderline)
        }
	],
};