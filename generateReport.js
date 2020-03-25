#!/usr/bin/env node

const docTemplates = require("docx-templates");
const yargs = require("yargs").argv;
var inputFile = require(yargs.input);
var name = yargs.name
var outputFile = yargs.output;
var templateFile =yargs.template;
var regex = /-/g
var report = {
	"name":name,
	"data": {
		"url": inputFile.finalUrl,
		"is_on_https": inputFile.audits["is-on-https"],
		"first_contentful_paint": inputFile.audits["first-contentful-paint"],
		"first_meaningful_paint": inputFile.audits['first-meaningful-paint'],
		"speed_index": inputFile.audits["speed-index"],
		"estimated_input_latency" : inputFile.audits["estimated-input-latency"],
		"interactive": inputFile.audits["interactive"],
		"diagnostics": inputFile.audits["diagnostics"],
    	"uses_rel_preconnect": inputFile.audits["uses-rel-preconnect"],
		"uses_rel_prefetch": inputFile.audits["uses-rel-prefetch"],
		"offscreen_images" : inputFile.audits["offscreen-images"],
		"render_blocking_resources": inputFile.audits["render-blocking-resources"],
		"uses_webp_images": inputFile.audits["uses-webp-images"],
		 "password_inputs_can_be_pasted_into":inputFile.audits["password-inputs-can-be-pasted-into"],
		 "uses_http2": inputFile.audits["uses-http2"],
		 "meta_description": inputFile.audits["meta-description"],
		  "link_text": inputFile.audits["link-text"],
		  "is_crawlable": inputFile.audits["is-crawlable"],
		  "robots_txt": inputFile.audits["robots-txt"],
		  "structured_data": inputFile.audits["structured_data"],
		  "language": inputFile.audits["hreflang"],
		  "uses_long_cache_ttl" :inputFile.audits["uses-long-cache-ttl"],
		  "unminified_javascript": inputFile.audits["unminified-javascript"],
		  "unminified_css": inputFile.audits["unminified-css"],
		  "unused_css_rules" : inputFile.audits["unused-css-rules"],
		  "image_alt": inputFile.audits["image-alt"],
		  "metrics": inputFile.audits["metrics"]
	}
};

/*
function clean_json(jsonObj){
	cleanedJson = {};
	keys = Object.keys(jsonObj);
	for (i in keys){
		cleanAtt = cleanedJson[keys[i].replace(regex,"_")];
		console.log(cleanAtt +"Hell0");
		if (jsonObj[keys[i]].constructor == Object){
			subKeys = Object.keys(jsonObj[keys[i]])
			for (j in subKeys){
				console.
			cleanAtt[subKeys[j].replace(regex,"_")] = jsonObj[keys[i]][subKeys[j]];
			}
 
		}
		else {

			cleanedJson[keys[i].replace(regex,"_")]  = jsonObj[keys[i]];
			console.log(cleanedJson[keys[i].replace(regex,"_")])
		}			

	}
	return cleanedJson; 
};
console.log(clean_json(inputFile));
*/

console.log(report)
console.log(Object.keys(report.data))
 docTemplates({template:templateFile,output:outputFile,
	data:{report}},
	(err)=>{console.log(err)});

