# mew-protect
MEW Protect alerts you when a scam site is pretending to look like the real version of myetherwallet.com. The plugin will change the extension button color and spawn alert modals if it detects a possible scam.

## Installation

Simply [download the zipped plugin](https://github.com/devinmancuso/mew-protect/archive/0.0.1.zip), extract it, go to Chrome menu > More Tools > Extensions (enter chrome://extensions/ in your url bar), check developer mode (top right corner) then press Load unpacked extension button and select the plugin folder. 

## Usage

Leave the plugin running to always stay protected or activate it manually when you want to check the validity of a site that looks like myetherwallet.com

## Features

At present the plugin has the following features:

* Popups an alert modal if a scam url is detected or if the url is different from myetherwallet.com but a similar HTML structure is detected to the original site 

* Internal list of known MEW scam urls

* Sets a green badge if the official myetherwallet.com domain is detected successfully



**To-Do**

- [ ] Setup an externally hosted list of known scam urls
- [ ] Setup a report this site feature
- [ ] Pull in known scam URLs from community maintained lists
- [ ] Support Punycode syntax for scam domains
- [ ] Firefox support

**Contribute**

If you think this is a cool idea, but kind of inefficient, please submit a PR and let's make this better.

© 2017, Devin Mancuso · MIT License you know the deal
