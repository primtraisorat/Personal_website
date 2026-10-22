/* Made-up events for the prototype. Each has one of the categories from Taey's "[TappedIn] Pictures" folder,
   and its own photo from that category at assets/events/e{index}.webp. No two events share a photo.
   Cards are filled in from here: <div data-cards="0,1,2,3"></div> (add data-plain for cards without the match badge).
   Load this before proto.js. */
function ev(name, cat, time, date, price, area, addr, match, about, org) {
  return { name: name, cat: cat, time: time, date: date, price: price, area: area, addr: addr, match: match, about: about, org: org };
}
var EVENTS = [
  ev('Indie Night at the Echo', 'Music', '8:00–11:30 PM', 'Fri, Apr 24', '$25', 'Echo Park, Los Angeles', '1822 Sunset Blvd', 97,
    'Three local indie bands on one bill, with the headliner going on at ten. Standing room only, so get there early if you want to be up front.', 'Echo Live'),
  ev('Late Night Small Plates', 'Food & Drink', '9:00 PM–12:00 AM', 'Sat, Apr 25', '$40', 'Arts District, Los Angeles', '777 Alameda St', 94,
    'A shared-table tasting of eight small plates from the chef’s late menu: blistered peppers, crispy rice, charred greens and more. Wine pairings are optional.', 'Night Kitchen LA'),
  ev('Open Mic Comedy Night', 'Comedy', '7:30–9:30 PM', 'Thu, Apr 23', 'Free', 'Westwood, Los Angeles', '1099 Westwood Blvd', 92,
    'Fifteen comics, five minutes each, one very forgiving crowd. Sign up at the door if you want to try your own set. Two-drink minimum, no heckling.', 'Comedy UO'),
  ev('Golden Hour Beach Stretch', 'Wellness', '6:30–7:30 PM', 'Sun, Apr 26', '$12', 'Santa Monica, Los Angeles', 'Tower 26, Santa Monica Beach', 90,
    'An easy jog along the water, then a slow stretch on the sand as the sun goes down. All levels welcome. Bring a towel and a light layer.', 'Salt & Sun Collective'),
  ev('Gallery Night: New Voices', 'Arts', '6:00–10:00 PM', 'Sat, Apr 25', 'Free', 'Arts District, Los Angeles', '811 Traction Ave', 88,
    'Opening night for six emerging LA painters. Meet the artists, grab a glass of wine and vote for your favorite piece of the show.', 'Traction Ave Gallery'),
  ev('Pickup Basketball Night', 'Sports', '7:00–9:30 PM', 'Wed, Apr 22', '$5', 'Westwood, Los Angeles', '425 Charles E Young Dr', 86,
    'Full-court runs under the lights. Teams are picked on the spot and winners stay on, so come solo or bring a crew.', 'Westside Hoops'),
  ev('Founders & Coffee', 'Networking', '8:30–10:00 AM', 'Wed, Apr 1', '$10', 'Culver City, Los Angeles', '9300 Culver Blvd', 84,
    'Casual morning meetup for founders, designers and engineers working on early-stage ideas. Short intros, then open conversation over pour-overs.', 'Culver Builders'),
  ev('Basement Disco', 'Nightlife', '10:00 PM–2:00 AM', 'Fri, Apr 24', '$20', 'Downtown, Los Angeles', '612 S Spring St', 95,
    'A mirror ball, a sweaty little room and a DJ who only plays disco and boogie. Dress up. Glitter is encouraged.', 'Spin Cycle'),
  ev('Candlelit Supper Club', 'Food & Drink', '7:30–10:30 PM', 'Sat, Apr 25', '$65', 'Silver Lake, Los Angeles', '3510 Sunset Blvd', 89,
    'Twenty strangers, one long candlelit table and a five-course menu from a rotating guest chef. Bring your own wine.', 'Long Table Society'),
  ev('Velvet Room Live Vocals', 'Music', '8:00–11:00 PM', 'Thu, Apr 23', '$30', 'Hollywood, Los Angeles', '6145 Franklin Ave', 91,
    'A soul singer and a three-piece band behind red velvet curtains. Small plates and cocktails are served, and seating is first come, first served.', 'The Velvet Room'),
  ev('Paint Party Workshop', 'Arts', '2:00–4:30 PM', 'Sat, Apr 25', '$35', 'Highland Park, Los Angeles', '5000 York Blvd', 87,
    'Big sheets of paper on the floor, bold colors and no rules. A local artist guides you through loose, abstract shapes. Everything you make, you keep.', 'Open Studio HLP'),
  ev('Desert Run Club', 'Sports', '7:00–9:00 AM', 'Sun, Apr 26', 'Free', 'Joshua Tree, California', 'Park Blvd entrance', 93,
    'A 5-mile group run on the desert roads at sunrise, then breakfast burritos at the finish. Every pace is welcome and no one gets left behind.', 'Sunrise Striders'),
  ev('Night of a Thousand Lanterns', 'Other', '7:00–10:00 PM', 'Sat, Apr 25', '$28', 'Pasadena, Los Angeles', '1001 Rose Bowl Dr', 85,
    'Write a wish on a paper lantern and light it up with everyone else at dusk. Food trucks and live acoustic music before the release.', 'Lantern Fest LA'),
  ev('Uno & Snacks Game Night', 'Family', '6:30–9:30 PM', 'Sat, Apr 25', 'Free', 'Koreatown, Los Angeles', '3465 W 6th St', 82,
    'Card games, chips and a lot of yelling “Uno!”. Tables are mixed every hour, so it’s a good one to come to alone or with the whole family.', 'Meeple Lounge'),
  ev('Light-Up Dance Floor Night', 'Other', '9:00 PM–1:00 AM', 'Fri, Apr 31', '$15', 'Venice, Los Angeles', '1600 Pacific Ave', 90,
    'A real light-up dance floor, seventies hits and a free dance lesson at nine. No partner needed, since everyone rotates.', 'Venice Boogie Club'),
  ev('Boxing Basics Class', 'Sports', '6:00–7:00 PM', 'Tue, Apr 21', '$20', 'Mid-City, Los Angeles', '5101 W Pico Blvd', 88,
    'Learn your stance, jab and footwork with a pro coach. Gloves and wraps are provided. A great workout even if you never step in a ring.', 'Pico Boxing Gym'),
  ev('Runway After Dark', 'Fashion', '8:00–10:00 PM', 'Fri, Apr 24', '$30', 'Downtown, Los Angeles', '919 S Broadway', 93,
    'Graduating students from three LA design schools show their final collections on one runway, followed by an afterparty with the designers.', 'LA Student Design Week'),
  ev('Vintage Rack Swap', 'Fashion', '12:00–4:00 PM', 'Sun, Apr 26', 'Free', 'Silver Lake, Los Angeles', '2830 Sunset Blvd', 86,
    'Bring up to ten pieces you don’t wear anymore and leave with new-to-you finds. Leftovers are donated to a local shelter.', 'Second Look Swap'),
  ev('Sketch to Stitch Workshop', 'Fashion', '1:00–5:00 PM', 'Sat, Apr 25', '$55', 'Fashion District, Los Angeles', '110 E 9th St', 84,
    'Draw a simple top, cut the pattern and sew it on a machine in one afternoon. Fabric and machines are provided. Beginners welcome.', 'Thread & Needle Studio'),
  ev('Comedy Cellar Late Show', 'Comedy', '10:00–11:30 PM', 'Fri, Apr 24', '$18', 'Hollywood, Los Angeles', '8433 Sunset Blvd', 91,
    'Five headliners drop in unannounced for short sets in a tiny basement room. You never know who’s coming on next.', 'The Cellar LA'),
  ev('Improv Jam', 'Comedy', '8:00–10:00 PM', 'Wed, Apr 22', '$10', 'Burbank, Los Angeles', '3108 W Magnolia Blvd', 87,
    'Watch the house team, then get pulled on stage for the second half if you’re brave. Every scene comes from audience suggestions.', 'Magnolia Improv'),
  ev('Family Picnic in the Park', 'Family', '11:00 AM–3:00 PM', 'Sun, Apr 26', 'Free', 'Griffith Park, Los Angeles', '4730 Crystal Springs Dr', 89,
    'Lawn games, a bubble station and a storytime tent for kids. Bring a blanket and lunch, and stay for the sing-along at two.', 'Friends of Griffith Park'),
  ev('Holiday Cookie Bake', 'Family', '10:00 AM–12:00 PM', 'Sat, Apr 25', '$15', 'Pasadena, Los Angeles', '45 E Colorado Blvd', 83,
    'Roll, cut and decorate a dozen cookies to take home. Aprons, dough and every sprinkle you could ask for are provided.', 'Little Kitchen Pasadena'),
  ev('Garage Band Showcase', 'Music', '7:00–10:00 PM', 'Sat, Apr 25', '$12', 'Eagle Rock, Los Angeles', '2225 Colorado Blvd', 88,
    'Six student bands, twenty minutes each and one loud room. Vote for your favorite to win a day in a real recording studio.', 'Eagle Rock Music Lab'),
  ev('Creatives Mixer', 'Networking', '6:30–9:00 PM', 'Thu, Apr 23', '$15', 'West Hollywood, Los Angeles', '8221 Sunset Blvd', 85,
    'Designers, photographers and writers meet over drinks. Name tags say what you make, not what your job title is.', 'Made in LA Collective'),
  ev('Panel: Building in LA', 'Networking', '6:00–8:30 PM', 'Tue, Apr 21', 'Free', 'Venice, Los Angeles', '340 Main St', 83,
    'Four early-stage founders talk honestly about their first year, then stay for open Q&A and drinks in the garden.', 'Venice Founders Club'),
  ev('Warehouse Rave', 'Nightlife', '11:00 PM–4:00 AM', 'Sat, Apr 25', '$35', 'Arts District, Los Angeles', '1360 E 6th St', 92,
    'Two rooms, red lights and techno until sunrise. Location is shared the day before. Bring a valid ID.', 'Low Frequency'),
  ev('Neon Night Dance Party', 'Nightlife', '10:00 PM–2:00 AM', 'Fri, Apr 24', '$20', 'Koreatown, Los Angeles', '3500 W 6th St', 90,
    'Pop and throwback hits under purple and blue lights. Wear something neon for free entry before eleven.', 'Glow Up Nights'),
  ev('Crystal Sound Bath', 'Wellness', '7:00–8:15 PM', 'Wed, Apr 22', '$25', 'Topanga, Los Angeles', '1440 N Topanga Canyon Blvd', 89,
    'Lie back on a mat while crystal bowls ring out around you. A calm hour to reset in the middle of the week. Mats and blankets provided.', 'Canyon Sound Studio'),
  ev('Candlelight Breathwork', 'Wellness', '8:00–9:00 PM', 'Thu, Apr 23', '$22', 'Silver Lake, Los Angeles', '2900 Rowena Ave', 87,
    'Guided breathwork in a candlelit room, followed by herbal tea. No experience needed. Wear something comfortable.', 'Still Point'),
  ev('Sunset Strength Session', 'Wellness', '6:00–7:00 PM', 'Mon, Apr 20', '$18', 'Marina del Rey, Los Angeles', '4101 Admiralty Way', 86,
    'A full-body dumbbell class on the waterfront deck as the sun goes down. Weights and mats are provided.', 'Harbor Fit'),
  ev('Dinner for Strangers', 'Other', '8:00–10:30 PM', 'Wed, Apr 22', '$45', 'Los Feliz, Los Angeles', '1800 N Vermont Ave', 84,
    'Six people who have never met share a candlelit table on the sidewalk. Conversation cards are on the table if things go quiet.', 'Table for Six'),
  ev('Bubbles & Bites Tasting', 'Food & Drink', '6:00–8:00 PM', 'Fri, Apr 24', '$38', 'Beverly Grove, Los Angeles', '8250 W 3rd St', 86,
    'Five sparkling wines from small producers, each paired with a bite from the kitchen. A sommelier walks you through every glass.', 'Pop & Pour'),
  ev('Night Tennis Rally', 'Sports', '7:30–9:30 PM', 'Thu, Apr 23', '$15', 'Cheviot Hills, Los Angeles', '2551 Motor Ave', 85,
    'Round-robin doubles under the lights, with a coach on court to fix your serve. Rackets available to borrow.', 'Cheviot Tennis Club'),
  ev('Candlelit Painting Class', 'Arts', '7:00–9:30 PM', 'Fri, Apr 24', '$40', 'Los Feliz, Los Angeles', '1714 N Vermont Ave', 88,
    'Paint a still life of roses by candlelight, one step at a time. Canvas, paint and a glass of wine are included.', 'Rose Easel Studio')
];

/* Each event's photo, cropped to the card from Taey's "[TappedIn] Pictures" folder. */
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
