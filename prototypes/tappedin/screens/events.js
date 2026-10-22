/* Made-up events for the prototype. Each has a category, and its photo is picked to match that category.
   Cards are filled in from here: <div data-cards="0,1,2,3"></div> (add data-plain for cards without the match badge).
   Load this before proto.js. */
var EVENTS = [
  { name: 'Sunset Rooftop Sessions', cat: 'Music', time: '6:00–9:00 PM', date: 'Fri, Apr 24', price: '$25', area: 'Downtown, Los Angeles', addr: '550 S Flower St', match: 97,
    about: 'A live DJ set on a rooftop terrace as the sun goes down over the skyline. Expect deep house, a craft cocktail bar and plenty of space to dance or just hang out on the lounge chairs.',
    org: 'Skyline Social Club' },
  { name: 'Late Night Taco Crawl', cat: 'Food & Drink', time: '8:00–11:30 PM', date: 'Sat, Apr 25', price: '$18', area: 'Boyle Heights, Los Angeles', addr: '1st St & Soto St', match: 94,
    about: 'Walk between five of the east side’s best taco stands with a local guide. One taco at every stop is included, plus horchata at the finish line.',
    org: 'Eastside Eats' },
  { name: 'Open Mic Comedy Night', cat: 'Comedy', time: '7:30–9:30 PM', date: 'Thu, Apr 23', price: 'Free', area: 'Westwood, Los Angeles', addr: '1099 Westwood Blvd', match: 92,
    about: 'Fifteen comics, five minutes each, one very forgiving crowd. Sign up at the door if you want to try your own set. Two-drink minimum, no heckling.',
    org: 'Laugh Factory Collective' },
  { name: 'Sunrise Beach Yoga', cat: 'Wellness', time: '7:00–8:00 AM', date: 'Sun, Apr 26', price: '$12', area: 'Santa Monica, Los Angeles', addr: 'Tower 26, Santa Monica Beach', match: 90,
    about: 'An all-levels vinyasa flow on the sand while the sun comes up. Mats and coffee are provided. Bring a towel and a light layer for the morning chill.',
    org: 'Salt & Sun Yoga' },
  { name: 'Gallery Night: New Voices', cat: 'Arts', time: '6:00–10:00 PM', date: 'Sat, Apr 25', price: 'Free', area: 'Arts District, Los Angeles', addr: '811 Traction Ave', match: 88,
    about: 'Opening night for six emerging LA painters and photographers. Meet the artists, grab a glass of wine and vote for your favorite piece of the show.',
    org: 'Traction Ave Gallery' },
  { name: 'Pickup Soccer at the Park', cat: 'Sports', time: '10:00 AM–12:00 PM', date: 'Sun, Apr 26', price: 'Free', area: 'Mar Vista, Los Angeles', addr: '12000 W Venice Blvd', match: 86,
    about: 'Friendly 7-on-7 games for every level. Teams are picked on the spot, so come solo or bring a crew. Bring cleats, water and a light and a dark shirt.',
    org: 'Westside Kickabout' },
  { name: 'Founders & Coffee', cat: 'Networking', time: '8:30–10:00 AM', date: 'Wed, Apr 22', price: '$10', area: 'Culver City, Los Angeles', addr: '9300 Culver Blvd', match: 84,
    about: 'Casual morning meetup for founders, designers and engineers working on early-stage ideas. Short intros, then open conversation over pour-overs.',
    org: 'Culver Builders' },
  { name: 'Silent Disco in the Park', cat: 'Nightlife', time: '8:00 PM–12:00 AM', date: 'Fri, Apr 24', price: '$20', area: 'Echo Park, Los Angeles', addr: '751 Echo Park Ave', match: 95,
    about: 'Three DJs, three channels, one pair of glowing headphones. Switch between hip hop, throwbacks and house whenever you like, with the lake lit up behind you.',
    org: 'Quiet Riot Events' },
  { name: 'Farmers Market Brunch', cat: 'Food & Drink', time: '9:00 AM–1:00 PM', date: 'Sun, Apr 26', price: '$15', area: 'Hollywood, Los Angeles', addr: 'Ivar Ave & Selma Ave', match: 89,
    about: 'Shop the stalls, then sit down at a long communal table for a brunch cooked from what the farmers brought that morning. Mimosas are extra.',
    org: 'Hollywood Farmers Market' },
  { name: 'Jazz in the Courtyard', cat: 'Music', time: '7:00–10:00 PM', date: 'Thu, Apr 23', price: '$30', area: 'Leimert Park, Los Angeles', addr: '4343 Leimert Blvd', match: 91,
    about: 'A quartet plays standards and originals under string lights. Small plates and wine are served, and seating is first come, first served.',
    org: 'Leimert Jazz Society' },
  { name: 'Pottery Wheel Workshop', cat: 'Arts', time: '2:00–4:30 PM', date: 'Sat, Apr 25', price: '$45', area: 'Silver Lake, Los Angeles', addr: '3510 Sunset Blvd', match: 87,
    about: 'Learn to center clay and throw your first bowl. Everything you make gets glazed and fired, and it’s ready to pick up two weeks later.',
    org: 'Mud Room Studio' },
  { name: 'Griffith Night Hike', cat: 'Outdoors', time: '7:30–9:30 PM', date: 'Fri, Apr 24', price: 'Free', area: 'Los Feliz, Los Angeles', addr: '2800 E Observatory Rd', match: 93,
    about: 'A guided 4-mile loop up to the observatory to see the city lights. Moderate pace with a stop at the top. Bring a headlamp and good shoes.',
    org: 'LA Trail Crew' },
  { name: 'Film Under the Stars', cat: 'Culture', time: '8:00–10:30 PM', date: 'Sat, Apr 25', price: '$22', area: 'Hollywood, Los Angeles', addr: '6000 Santa Monica Blvd', match: 85,
    about: 'A cult classic projected on a mausoleum wall, with a DJ before the screening. Bring a blanket and a picnic. Low chairs only.',
    org: 'Cinespia' },
  { name: 'Board Game Social', cat: 'Social', time: '6:30–10:00 PM', date: 'Wed, Apr 22', price: '$8', area: 'Koreatown, Los Angeles', addr: '3465 W 6th St', match: 82,
    about: 'Hundreds of games, friendly hosts who teach the rules, and bubble tea on tap. A good one to come to alone, since tables mix every hour.',
    org: 'Meeple Lounge' },
  { name: 'Salsa Night for Beginners', cat: 'Dance', time: '8:00–11:00 PM', date: 'Thu, Apr 23', price: '$15', area: 'Venice, Los Angeles', addr: '1600 Pacific Ave', match: 90,
    about: 'A one-hour beginner lesson followed by open social dancing to a live band. No partner needed, since everyone rotates.',
    org: 'Venice Salsa Club' },
  { name: 'Dodgers Watch Party', cat: 'Sports', time: '7:00–10:00 PM', date: 'Tue, Apr 21', price: 'Free', area: 'Westwood, Los Angeles', addr: '10861 Weyburn Ave', match: 88,
    about: 'Big screens, wings and a packed room of fans. Wear blue for a free drink ticket at the door.',
    org: 'Westwood Sports Bar' }
];

/* Photo for each category. Swap these for the real photos (one per event in assets/events/). */
function eventPhoto(i) { return 'assets/events/e' + i + '.webp'; }
var PHOTO_FALLBACK = 'assets/ti-event.webp';

function eventCard(i, plain) {
  var e = EVENTS[i];
  return '<div class="ti-card" data-overlay="event-details#' + i + '" aria-label="' + e.name + '">' +
    '<img src="' + eventPhoto(i) + '" alt="" onerror="this.onerror=null;this.src=PHOTO_FALLBACK">' +
    '<button class="ti-heart" data-toggle aria-pressed="false" aria-label="Save ' + e.name + '"><svg viewBox="0 0 24 24"><path d="M12 20.5s-7.5-4.6-9.3-9.2C1.4 8 3.6 4.5 7 4.5c2 0 3.6 1.1 5 2.9 1.4-1.8 3-2.9 5-2.9 3.4 0 5.6 3.5 4.3 6.8-1.8 4.6-9.3 9.2-9.3 9.2z"/></svg></button>' +
    '<div class="ti-card-body"><div class="ti-card-title"><span class="ti-name">' + e.name + '</span>' + (plain ? '' : '<span class="ti-match">' + e.match + '%</span>') + '</div>' +
    '<div class="ti-card-meta"><span>' + e.time + ' | ' + e.date + ' | ' + e.price + '</span><span>' + e.area + '</span></div></div></div>';
}

document.querySelectorAll('[data-cards]').forEach(function (box) {
  box.innerHTML = box.getAttribute('data-cards').split(',').map(function (i) { return eventCard(+i, box.hasAttribute('data-plain')); }).join('');
});
