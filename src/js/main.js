import 'css/normalize.css';
import 'css/main.css';
import $ from 'jquery';

require.context('file?name=[path][name].[ext]!../img/', true);
require.context('file?name=[path][name].[ext]!..', false, /\.(txt|xml)$/);

$("html").removeClass("no-js");
