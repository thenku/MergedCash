/** @type {import('@sveltejs/kit').Handle} */

import { siteconfig } from "./siteconfig";


function get_lang(e:any){//can be extended later
	return siteconfig.language;
}
export function handle({event, resolve}:{ event:Event, resolve:any, }) {
	return resolve(event, {
		transformPageChunk: ({html}:{html:string}) => {
			return html.replace('%lang%', get_lang(event))
		}
	});
}