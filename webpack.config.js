/* eslint-disable */
module.exports = {
	entry: './dist/react-leaflet-easyprint.min.js',
	output: {
		library: {
			root: 'ReactLeafletEasyprint',
			amd: 'react-leaflet-easyprint',
			commonjs: 'react-leaflet-easyprint'
		},
		libraryExport: 'default',
		libraryTarget: 'umd'
	},
	externals: {
		leaflet: {
			commonjs: 'leaflet',
			commonjs2: 'leaflet',
			root: 'L'
		},
		'react-leaflet': {
			commonjs: 'react-leaflet',
			commonjs2: 'react-leaflet',
			root: 'ReactLeaflet'
		},
		react: {
			commonjs: 'react',
			commonjs2: 'react',
			root: 'React'
		}
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react'],
                    plugins: ['transform-class-properties', 'transform-object-rest-spread']
                }
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' }
				]
			}
		]
	}
};
