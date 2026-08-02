(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,47163,e=>{"use strict";let t=(e,t=0,a=1)=>Math.min(a,Math.max(t,e));e.s(["clamp",0,t,"cn",0,(...e)=>e.filter(Boolean).join(" "),"logScale",0,(e,a,o)=>{let r=Math.log10(Math.max(a,1e-15));return t((Math.log10(Math.max(e,1e-15))-r)/(Math.log10(Math.max(o,1e-15))-r))},"mapRange",0,(e,a,o,r,i)=>r+(t(e,Math.min(a,o),Math.max(a,o))-a)/(o-a)*(i-r),"seeded",0,e=>{let t=e>>>0||1;return()=>(t^=t<<13,t^=t>>>17,((t^=t<<5)>>>0)%1e5/1e5)}])},71197,e=>{"use strict";let t=[{slug:"mercury",name:"Mercury",epithet:"The Scorched Messenger",order:1,klass:"terrestrial",accent:"#c9a48a",summary:"A cratered iron world barely larger than the Moon, whipping around the Sun every 88 days while its day lasts twice as long as its year.",hero:"Closest to the Sun, and yet not the hottest — Mercury has almost no air to hold the heat it collects.",diameterKm:4879,massKg:33011e19,massEarth:.055,gravity:3.7,distanceKm:579e5,distanceAu:.387,tempC:167,tempMinC:-180,tempMaxC:430,orbitalPeriodDays:88,orbitalPeriodLabel:"88 Earth days",rotationHours:1407.6,rotationLabel:"58.6 Earth days",solarDayHours:4222.6,moons:0,moonsNote:"No natural satellites — the Sun's pull strips them away.",atmosphere:"Exosphere only — atoms knocked off the surface by the solar wind",composition:[{gas:"Oxygen",pct:42},{gas:"Sodium",pct:29},{gas:"Hydrogen",pct:22},{gas:"Helium",pct:6},{gas:"Potassium",pct:.5}],pressureBar:1e-14,magneticField:"Weak global dipole, roughly 1% of Earth's strength",magneticRel:.011,water:"Water ice hides in permanently shadowed polar craters",waterScore:12,life:"No — no atmosphere, no stable liquid, 600 °C daily swing",habitability:2,densityKgM3:5429,escapeVelocityKmS:4.3,axialTiltDeg:.034,funFacts:["A single Mercury day (sunrise to sunrise) lasts two Mercury years.","Its 600 °C day-to-night temperature swing is the largest of any planet.","Mercury is shrinking: the iron core cooled and wrinkled the crust into cliffs kilometres high.","It is the closest planet to Earth on average — because it never strays far from the Sun."],science:["The core makes up about 85% of the planet's radius, an iron fraction no other planet matches.","MESSENGER radar found billions of tonnes of polar ice, shielded in craters that never see sunlight.","Its 3:2 spin-orbit resonance means it turns exactly three times for every two orbits.","The magnetic field is offset 480 km north of centre, leaving the southern hemisphere far more exposed."],discoveries:[{year:"1974",text:"Mariner 10 makes the first flyby and maps 45% of the surface."},{year:"2011",text:"MESSENGER enters orbit and confirms polar water ice."},{year:"2025",text:"BepiColombo completes its final gravity-assist flyby before orbit insertion."}],missions:["Mariner 10","MESSENGER","BepiColombo"],weather:[{label:"Surface wind",value:"None",detail:"There is no atmosphere to move."},{label:"Day / night",value:"430 / −180 °C",detail:"Heat escapes the instant the Sun sets."},{label:"Solar wind",value:"Direct",detail:"Charged particles strike the surface unfiltered."}],structure:[{name:"Solid inner core",to:.5,temp:"~1,700 °C",color:"#ffd7a8",note:"Iron, unusually large."},{name:"Liquid outer core",to:.85,temp:"~1,400 °C",color:"#f0a15c",note:"Generates the weak field."},{name:"Silicate mantle",to:.96,temp:"~700 °C",color:"#8a6a5a",note:"Thin, only ~400 km."},{name:"Crust",to:1,temp:"−180…430 °C",color:"#c9a48a",note:"Cratered, cracked by shrinkage."}],moonList:[],orbitRadius:7.2,orbitSpeed:1.6,render:{radius:.62,colorDeep:"#4a3a33",colorMid:"#8d7566",colorHigh:"#d3b59c",atmosphere:"#c8a98f",atmosphereStrength:.12,bands:0,bandContrast:0,storm:0,storms:0,clouds:0,cloudColor:"#ffffff",ice:.06,nightLights:0,roughness:1,specular:.04,tilt:.03,spin:.11}},{slug:"venus",name:"Venus",epithet:"The Veiled Inferno",order:2,klass:"terrestrial",accent:"#f0c26b",summary:"Earth's twin in size and nothing else: a 92-bar carbon dioxide ocean of air, sulphuric acid clouds, and a surface hot enough to melt lead.",hero:"A runaway greenhouse that turned a possible ocean world into the hottest surface in the Solar System.",diameterKm:12104,massKg:48675e20,massEarth:.815,gravity:8.87,distanceKm:1082e5,distanceAu:.723,tempC:464,tempMinC:437,tempMaxC:497,orbitalPeriodDays:224.7,orbitalPeriodLabel:"224.7 Earth days",rotationHours:5832.5,rotationLabel:"243 Earth days — retrograde",solarDayHours:2802,moons:0,moonsNote:"No moons. Any early satellite likely spiralled in and was destroyed.",atmosphere:"Crushing CO₂ with clouds of sulphuric acid",composition:[{gas:"Carbon dioxide",pct:96.5},{gas:"Nitrogen",pct:3.5},{gas:"Sulphur dioxide",pct:.015},{gas:"Water vapour",pct:.002}],pressureBar:92,magneticField:"No intrinsic field — only a weak magnetosphere induced by the solar wind",magneticRel:1e-4,water:"Essentially none — the oceans boiled away and the hydrogen escaped to space",waterScore:3,life:"Not on the surface. The 50 km cloud deck is temperate, and remains debated.",habitability:6,densityKgM3:5243,escapeVelocityKmS:10.36,axialTiltDeg:177.4,funFacts:["Venus spins backwards — on Venus the Sun rises in the west.","Its day is longer than its year.","Surface pressure equals being 900 metres underwater on Earth.","It is the brightest object in our sky after the Sun and Moon."],science:["The atmosphere super-rotates: winds circle the planet in four days while the surface takes 243.","Radar mapping by Magellan found over 1,600 major volcanoes and almost no impact craters — the surface is only ~500 million years old.","2023 reanalysis of Magellan data caught a vent changing shape, the first direct evidence of active volcanism.","At 50 km altitude, pressure is 1 bar and temperature is 30 °C — the most Earth-like conditions off Earth."],discoveries:[{year:"1962",text:"Mariner 2 makes the first successful planetary flyby in history."},{year:"1975",text:"Venera 9 returns the first photograph from another planet's surface."},{year:"2020",text:"A contested phosphine detection reopens the question of cloud-deck biology."},{year:"2023",text:"Archival radar reveals an actively erupting volcanic vent."}],missions:["Mariner 2","Venera 9","Magellan","Akatsuki","VERITAS","DAVINCI"],weather:[{label:"Cloud-top winds",value:"360 km/h",detail:"Super-rotation laps the planet in 4 days."},{label:"Surface wind",value:"3 km/h",detail:"But the air is so dense it moves like slow water."},{label:"Rain",value:"Sulphuric acid",detail:"It evaporates before reaching the ground."}],structure:[{name:"Iron core",to:.52,temp:"~5,000 °C",color:"#ffdca8",note:"Likely partly liquid, but no dynamo."},{name:"Mantle",to:.9,temp:"~1,200 °C",color:"#d98d4a",note:"Hot, mobile, resurfaces the planet."},{name:"Crust",to:.97,temp:"464 °C",color:"#e0b071",note:"Basalt, ~20 km thick, geologically young."},{name:"Atmosphere",to:1,temp:"464 → −45 °C",color:"#f7e0a3",note:"92 bar of CO₂ and acid haze."}],moonList:[],orbitRadius:9.6,orbitSpeed:1.17,render:{radius:.95,colorDeep:"#8a6428",colorMid:"#d9a445",colorHigh:"#f6e0a6",atmosphere:"#ffd88a",atmosphereStrength:.85,bands:4,bandContrast:.22,storm:0,storms:0,clouds:.9,cloudColor:"#fff0c9",ice:0,nightLights:0,roughness:.9,specular:.08,tilt:177.4,spin:.03}},{slug:"earth",name:"Earth",epithet:"The Pale Blue Dot",order:3,klass:"terrestrial",accent:"#4da3ff",summary:"The only world where liquid water, a protective magnetosphere and a breathable atmosphere line up at once — and the only one where anything is known to be alive.",hero:"One planet in 6,000 known worlds has an ocean you can swim in. So far, it is this one.",diameterKm:12756,massKg:59724e20,massEarth:1,gravity:9.81,distanceKm:1496e5,distanceAu:1,tempC:15,tempMinC:-89,tempMaxC:57,orbitalPeriodDays:365.25,orbitalPeriodLabel:"365.25 days",rotationHours:23.93,rotationLabel:"23 h 56 m",solarDayHours:24,moons:1,moonsNote:"One unusually large moon, born from a giant impact 4.5 billion years ago.",atmosphere:"Nitrogen–oxygen, with an ozone layer that blocks hard UV",composition:[{gas:"Nitrogen",pct:78.08},{gas:"Oxygen",pct:20.95},{gas:"Argon",pct:.93},{gas:"Carbon dioxide",pct:.042}],pressureBar:1.014,magneticField:"Strong dipole from a churning liquid-iron core — the shield that keeps the air on",magneticRel:1,water:"71% of the surface, plus ice caps, aquifers and atmospheric vapour",waterScore:100,life:"Confirmed. The only known case, from deep-sea vents to the stratosphere.",habitability:100,densityKgM3:5514,escapeVelocityKmS:11.19,axialTiltDeg:23.44,funFacts:["Earth is not a sphere — it bulges 43 km wider at the equator.","The Moon is drifting away 3.8 cm per year, and our days are slowly lengthening.","The magnetic poles have flipped hundreds of times; the last reversal was 780,000 years ago.","About 100 tonnes of space dust settle onto Earth every day."],science:["The 23.44° axial tilt — not the orbital distance — is what creates the seasons.","Plate tectonics recycles carbon between rock and air, acting as a long-term thermostat no other known planet has.","The magnetosphere deflects the solar wind at about 10 Earth radii, funnelling particles to the poles as aurorae.","Oxygen is a biosignature: without life continuously producing it, it would react away within millions of years."],discoveries:[{year:"1543",text:"Copernicus moves Earth out of the centre of the universe."},{year:"1968",text:"Apollo 8 photographs Earthrise; the environmental movement finds its image."},{year:"1972",text:"The Blue Marble is taken by Apollo 17 — still the most reproduced photograph in history."}],missions:["Apollo programme","ISS","Landsat","Sentinel","GOES-R"],weather:[{label:"Jet stream",value:"up to 400 km/h",detail:"Steers weather systems around the globe."},{label:"Lightning",value:"44 strikes/s",detail:"Roughly 1.4 billion flashes a year."},{label:"Water cycle",value:"505,000 km³/yr",detail:"Evaporated and returned as rain and snow."}],structure:[{name:"Inner core",to:.19,temp:"5,400 °C",color:"#fff1c4",note:"Solid iron, as hot as the Sun's surface."},{name:"Outer core",to:.55,temp:"4,500 °C",color:"#ffb347",note:"Liquid metal; source of the magnetic field."},{name:"Mantle",to:.98,temp:"1,000–3,700 °C",color:"#b4553c",note:"Slow-flowing rock driving the plates."},{name:"Crust",to:1,temp:"15 °C",color:"#4da3ff",note:"5–70 km thin. Everything you know is here."}],moonList:[{name:"Moon",diameterKm:3475,orbitR:60,note:"Stabilises Earth's tilt and drives the tides.",color:"#d8d4cc"}],orbitRadius:12.4,orbitSpeed:1,render:{radius:1,colorDeep:"#0b3a7a",colorMid:"#2a7f4e",colorHigh:"#c2ab72",atmosphere:"#5aa9ff",atmosphereStrength:.8,bands:0,bandContrast:0,storm:0,storms:0,clouds:.5,cloudColor:"#ffffff",seaLevel:.1,ice:.2,nightLights:1,roughness:.7,specular:.7,tilt:23.44,spin:.3}},{slug:"mars",name:"Mars",epithet:"The Rusted Frontier",order:4,klass:"terrestrial",accent:"#ff7a4d",summary:"A cold desert with the tallest volcano and deepest canyon in the Solar System, buried ice at both poles, and rivers that dried up three billion years ago.",hero:"Every rover we have sent has found the same thing: this was once a world with water.",diameterKm:6792,massKg:64171e19,massEarth:.107,gravity:3.71,distanceKm:2279e5,distanceAu:1.523,tempC:-65,tempMinC:-153,tempMaxC:20,orbitalPeriodDays:687,orbitalPeriodLabel:"687 Earth days (1.88 years)",rotationHours:24.62,rotationLabel:"24 h 37 m — one sol",solarDayHours:24.66,moons:2,moonsNote:"Phobos and Deimos, probably captured asteroids.",atmosphere:"Thin CO₂, less than 1% of Earth's pressure",composition:[{gas:"Carbon dioxide",pct:95.1},{gas:"Nitrogen",pct:2.59},{gas:"Argon",pct:1.94},{gas:"Oxygen",pct:.16}],pressureBar:.006,magneticField:"No global field. Crustal magnetism survives in ancient southern highlands.",magneticRel:2e-4,water:"Polar caps, buried glaciers, and seasonal briny flows",waterScore:45,life:"Not found. Past habitability is considered likely; the search continues.",habitability:38,densityKgM3:3934,escapeVelocityKmS:5.03,axialTiltDeg:25.19,funFacts:["Olympus Mons is 22 km tall — nearly three Everests — and as wide as France.","Valles Marineris would stretch across the entire United States.","Martian sunsets are blue: fine dust scatters red light away from the Sun's disc.","Its gravity is so low that a 70 kg astronaut would weigh 26 kg."],science:["Curiosity found ancient lakebed mudstones with all six elements life requires.","MARSIS radar detected bright reflections under the south polar cap, interpreted by some as brine.","Perseverance has sealed 20+ samples in tubes, staged for a future return to Earth.","InSight recorded over 1,300 marsquakes and measured the core: liquid, and larger than expected."],discoveries:[{year:"1965",text:"Mariner 4 returns the first close-up images — a cratered, dead-looking world."},{year:"1976",text:"Viking 1 and 2 land and run the first biology experiments."},{year:"2012",text:"Curiosity lands in Gale Crater and confirms an ancient habitable lake."},{year:"2021",text:"Perseverance lands; Ingenuity makes the first powered flight on another planet."}],missions:["Viking","Spirit & Opportunity","Curiosity","InSight","Perseverance","Ingenuity"],weather:[{label:"Dust storms",value:"Planet-wide",detail:"Can cloak Mars for months at a time."},{label:"Wind",value:"100 km/h",detail:"Strong, but the thin air barely pushes."},{label:"Frost",value:"CO₂ snow",detail:"Dry ice falls at the winter poles."}],structure:[{name:"Liquid core",to:.5,temp:"~1,900 °C",color:"#ffd0a0",note:"Iron-sulphur, surprisingly light."},{name:"Mantle",to:.94,temp:"~1,500 °C",color:"#9c4b2e",note:"Rigid — plate tectonics never started."},{name:"Crust",to:1,temp:"−65 °C",color:"#ff7a4d",note:"Iron oxide dust gives Mars its colour."}],moonList:[{name:"Phobos",diameterKm:22,orbitR:2.8,note:"Spiralling inward; will break apart in ~50 Myr.",color:"#9a8b7d"},{name:"Deimos",diameterKm:12,orbitR:6.9,note:"Tiny, smooth, and slowly drifting away.",color:"#b3a595"}],orbitRadius:15.6,orbitSpeed:.8,render:{radius:.72,colorDeep:"#5c2410",colorMid:"#b8552d",colorHigh:"#e79a63",atmosphere:"#ff9b6a",atmosphereStrength:.35,bands:0,bandContrast:0,storm:0,storms:0,clouds:.12,cloudColor:"#f4d9c4",ice:.22,nightLights:0,roughness:.95,specular:.06,tilt:25.19,spin:.29}},{slug:"jupiter",name:"Jupiter",epithet:"The Storm King",order:5,klass:"gas-giant",accent:"#e8a76b",summary:"Two and a half times the mass of every other planet combined, with a 350-year-old storm, a magnetic field that would fill our sky, and an ocean moon that may hold life.",hero:"If Jupiter were 80 times heavier, it would have ignited and we would live in a binary star system.",diameterKm:142984,massKg:18982e23,massEarth:317.8,gravity:24.79,distanceKm:7785e5,distanceAu:5.203,tempC:-110,tempMinC:-145,tempMaxC:-108,orbitalPeriodDays:4333,orbitalPeriodLabel:"11.86 Earth years",rotationHours:9.93,rotationLabel:"9 h 56 m — the fastest in the Solar System",solarDayHours:9.93,moons:95,moonsNote:"95 IAU-confirmed moons, including the four Galilean worlds.",atmosphere:"Hydrogen and helium, banded into jets by furious rotation",composition:[{gas:"Hydrogen",pct:89.8},{gas:"Helium",pct:10.2},{gas:"Methane",pct:.3},{gas:"Ammonia",pct:.026}],pressureBar:1e3,magneticField:"The strongest planetary field known — about 20,000× Earth's",magneticRel:2e4,water:"Water clouds deep in the atmosphere; Europa hides a global salt ocean",waterScore:60,life:"Not in the atmosphere. Europa's subsurface ocean is a leading target.",habitability:18,densityKgM3:1326,escapeVelocityKmS:59.5,axialTiltDeg:3.13,funFacts:["The Great Red Spot has raged for at least 350 years — and is shrinking.","Jupiter's magnetosphere would look twice the size of the full Moon from Earth if we could see it.","It spins so fast that it is visibly flattened at the poles.","Ganymede is larger than the planet Mercury."],science:["Juno found the bands run at least 3,000 km deep, not just cloud-level patterns.","The core appears 'fuzzy' — diluted into the mantle rather than a sharp rocky centre.","Its gravity shapes the asteroid belt and deflects or redirects comets bound for the inner system.","Polar cyclones sit in stable geometric arrangements — eight around the north pole, five around the south."],discoveries:[{year:"1610",text:"Galileo sees four moons circling Jupiter and ends the geocentric model."},{year:"1979",text:"Voyager 1 discovers active volcanoes on Io and Jupiter's faint rings."},{year:"1995",text:"Galileo drops a probe into the atmosphere; it survives 58 minutes."},{year:"2016",text:"Juno arrives and reveals a deep, fuzzy core and polar cyclone clusters."}],missions:["Pioneer 10","Voyager 1 & 2","Galileo","Juno","JUICE","Europa Clipper"],weather:[{label:"Great Red Spot",value:"1.3 Earths wide",detail:"Winds of 430 km/h, centuries old."},{label:"Jet streams",value:"540 km/h",detail:"Alternating bands locked by rotation."},{label:"Lightning",value:"1,000× Earth's",detail:"Juno detected flashes near both poles."}],structure:[{name:"Fuzzy core",to:.25,temp:"~24,000 °C",color:"#ffe8b0",note:"Rock and ice diluted into the mantle."},{name:"Metallic hydrogen",to:.78,temp:"~10,000 °C",color:"#9ecbff",note:"Hydrogen behaving like a liquid metal."},{name:"Molecular hydrogen",to:.96,temp:"~1,000 °C",color:"#d3a578",note:"Gradually becomes gas — no surface."},{name:"Cloud decks",to:1,temp:"−110 °C",color:"#e8a76b",note:"Ammonia ice over ammonium hydrosulphide."}],moonList:[{name:"Io",diameterKm:3643,orbitR:5.9,note:"400+ active volcanoes; the most geologically alive body known.",color:"#f2d16b"},{name:"Europa",diameterKm:3122,orbitR:9.4,note:"Ice shell over a salt ocean holding twice Earth's water.",color:"#dfe8f0"},{name:"Ganymede",diameterKm:5268,orbitR:15,note:"The largest moon in the Solar System, with its own magnetic field.",color:"#a89b8c"},{name:"Callisto",diameterKm:4821,orbitR:26.4,note:"The most heavily cratered surface known.",color:"#7c7168"}],orbitRadius:21,orbitSpeed:.44,render:{radius:2.6,colorDeep:"#7c4a29",colorMid:"#d79b63",colorHigh:"#f6e3c4",atmosphere:"#ffc48a",atmosphereStrength:.55,bands:15,bandContrast:.62,storm:1,storms:3,clouds:.18,cloudColor:"#fff4e0",ice:0,nightLights:0,roughness:.85,specular:.1,tilt:3.13,spin:.72,ring:{inner:1.45,outer:1.8,colorA:"#8a6a52",colorB:"#4a3a30",opacity:.12,tiltNoise:.2}}},{slug:"saturn",name:"Saturn",epithet:"The Ringed Sovereign",order:6,klass:"gas-giant",accent:"#f3d99b",summary:"A planet less dense than water, wrapped in 280,000 km of ice rings that are only tens of metres thick — and orbited by more moons than the rest of the Solar System combined.",hero:"The rings are young, bright, and temporary. We arrived in time to see them.",diameterKm:120536,massKg:56834e22,massEarth:95.2,gravity:10.44,distanceKm:1432e6,distanceAu:9.57,tempC:-140,tempMinC:-189,tempMaxC:-130,orbitalPeriodDays:10759,orbitalPeriodLabel:"29.4 Earth years",rotationHours:10.7,rotationLabel:"10 h 42 m",solarDayHours:10.7,moons:274,moonsNote:"274 confirmed — 128 irregular moons were announced in a single batch in March 2025.",atmosphere:"Hydrogen and helium under a soft ammonia haze",composition:[{gas:"Hydrogen",pct:96.3},{gas:"Helium",pct:3.25},{gas:"Methane",pct:.45},{gas:"Ammonia",pct:.0125}],pressureBar:1e3,magneticField:"Strong and almost perfectly aligned with the rotation axis — unique among planets",magneticRel:578,water:"The rings are 99% water ice; Enceladus vents a liquid ocean into space",waterScore:72,life:"Enceladus and Titan are two of the four best places to look off Earth.",habitability:22,densityKgM3:687,escapeVelocityKmS:35.5,axialTiltDeg:26.73,funFacts:["Saturn would float in a bathtub big enough to hold it — its density is 0.69 g/cm³.","The rings span 280,000 km but average only about 10 metres thick.","A hexagonal jet stream, wider than two Earths, circles the north pole.","Titan has rivers, lakes and rain — of liquid methane."],science:["Cassini's Grand Finale dives measured the rings' mass and suggest they are only 10–100 million years old.","Enceladus fires plumes of salty water, silica and organic molecules 500 km into space from its south pole.","The ring system is slowly raining onto the planet and may be gone within 100 million years.","Saturn radiates about 2.5 times more energy than it receives, driven by helium raining through its interior."],discoveries:[{year:"1655",text:"Huygens works out that the 'ears' Galileo saw are a ring, and finds Titan."},{year:"1980",text:"Voyager 1 resolves the rings into thousands of ringlets."},{year:"2005",text:"Huygens lands on Titan — the most distant landing ever achieved."},{year:"2017",text:"Cassini ends its mission by diving into Saturn to protect Enceladus."}],missions:["Pioneer 11","Voyager 1 & 2","Cassini–Huygens","Dragonfly"],weather:[{label:"Equatorial winds",value:"1,800 km/h",detail:"Second only to Neptune."},{label:"Polar hexagon",value:"29,000 km wide",detail:"A six-sided jet stream, stable for decades."},{label:"Great White Spot",value:"Every ~30 years",detail:"A planet-encircling storm once per Saturn year."}],structure:[{name:"Rocky core",to:.22,temp:"~11,700 °C",color:"#ffe8b0",note:"Roughly 9–22 Earth masses."},{name:"Metallic hydrogen",to:.6,temp:"~6,000 °C",color:"#a9c9ff",note:"Where helium rain releases heat."},{name:"Liquid hydrogen",to:.93,temp:"~1,000 °C",color:"#e3c894",note:"No boundary, just thickening gas."},{name:"Cloud decks",to:1,temp:"−140 °C",color:"#f3d99b",note:"Ammonia haze, softening the bands."}],moonList:[{name:"Titan",diameterKm:5150,orbitR:20.3,note:"Thick nitrogen air, methane lakes, and a subsurface ocean.",color:"#e8b96a"},{name:"Enceladus",diameterKm:504,orbitR:3.9,note:"Cryovolcanic plumes carrying organics from a global ocean.",color:"#f2fbff"},{name:"Mimas",diameterKm:396,orbitR:3.1,note:"The Herschel crater makes it a dead ringer for the Death Star.",color:"#cfd4d8"},{name:"Iapetus",diameterKm:1469,orbitR:59,note:"One hemisphere bright as snow, the other dark as coal.",color:"#b0a494"}],orbitRadius:27,orbitSpeed:.32,render:{radius:2.25,colorDeep:"#b08d4d",colorMid:"#eed6a0",colorHigh:"#fdf6e4",atmosphere:"#ffe6ad",atmosphereStrength:.5,bands:11,bandContrast:.22,storm:.4,storms:1,clouds:.14,cloudColor:"#fff8e8",ice:0,nightLights:0,roughness:.9,specular:.08,tilt:26.73,spin:.66,ring:{inner:1.3,outer:2.35,colorA:"#f0e0bd",colorB:"#8d7a5c",opacity:.95,tiltNoise:.55}}},{slug:"uranus",name:"Uranus",epithet:"The Toppled Ice World",order:7,klass:"ice-giant",accent:"#7fe3e0",summary:"An ice giant knocked onto its side, orbiting the Sun like a rolling ball, with a magnetic field tilted 59° from its axis and rings that stand vertically.",hero:"Each pole spends 42 years in continuous sunlight, then 42 years in darkness.",diameterKm:51118,massKg:8681e22,massEarth:14.5,gravity:8.87,distanceKm:2867e6,distanceAu:19.17,tempC:-195,tempMinC:-224,tempMaxC:-190,orbitalPeriodDays:30687,orbitalPeriodLabel:"84 Earth years",rotationHours:17.24,rotationLabel:"17 h 14 m — retrograde",solarDayHours:17.24,moons:28,moonsNote:"28 moons, all named after Shakespeare and Pope characters.",atmosphere:"Hydrogen, helium and the methane that makes it cyan",composition:[{gas:"Hydrogen",pct:82.5},{gas:"Helium",pct:15.2},{gas:"Methane",pct:2.3}],pressureBar:1e3,magneticField:"Tilted 59° from the spin axis and offset from the centre — it wobbles wildly each rotation",magneticRel:47.9,water:"A hot, dense water–ammonia–methane mantle: an 'ice' ocean under enormous pressure",waterScore:55,life:"No plausible habitat identified.",habitability:4,densityKgM3:1270,escapeVelocityKmS:21.3,axialTiltDeg:97.77,funFacts:["Uranus rolls around its orbit on its side, tipped 98°.","It was the first planet discovered with a telescope, in 1781.","It is the coldest planet, despite Neptune being far further out.","It may rain diamonds: pressure cracks methane and the carbon crystallises."],science:["The extreme tilt is best explained by one or more giant impacts during formation.","Unlike every other giant, Uranus radiates almost no internal heat — the reason it is the coldest.","Its 13 narrow rings were found in 1977 when the planet occulted a star and the light blinked before and after.","Voyager 2 remains the only spacecraft ever to visit, for a few hours in 1986."],discoveries:[{year:"1781",text:"William Herschel finds the first planet unknown to antiquity."},{year:"1977",text:"Stellar occultation reveals a ring system."},{year:"1986",text:"Voyager 2 flies by and discovers 10 new moons."},{year:"2023",text:"JWST resolves the rings and the bright seasonal polar cap in the infrared."}],missions:["Voyager 2","JWST observations","Uranus Orbiter and Probe (proposed)"],weather:[{label:"Winds",value:"900 km/h",detail:"Blowing against the planet's rotation."},{label:"Seasons",value:"21 years each",detail:"A consequence of the 98° tilt."},{label:"Dark spots",value:"Occasional",detail:"Storm vortices that appear and fade."}],structure:[{name:"Rocky core",to:.2,temp:"~5,000 °C",color:"#ffe0b0",note:"About the mass of Earth."},{name:"Icy mantle",to:.8,temp:"~2,700 °C",color:"#6fd8e8",note:"Hot, electrically conducting water and ammonia."},{name:"Hydrogen envelope",to:.97,temp:"~200 °C",color:"#b6f0f0",note:"Where the odd magnetic field is generated."},{name:"Cloud deck",to:1,temp:"−195 °C",color:"#7fe3e0",note:"Methane haze absorbing red light."}],moonList:[{name:"Titania",diameterKm:1578,orbitR:17,note:"The largest Uranian moon, scarred by huge canyons.",color:"#b8b2ac"},{name:"Miranda",diameterKm:471,orbitR:5.1,note:"A shattered patchwork with a 20 km cliff — the tallest known.",color:"#cfd0d2"},{name:"Ariel",diameterKm:1158,orbitR:7.5,note:"The brightest, with signs of recent resurfacing.",color:"#c8c6c0"},{name:"Oberon",diameterKm:1523,orbitR:22.8,note:"Ancient, cratered, and reddened by dust.",color:"#a09a92"}],orbitRadius:32.5,orbitSpeed:.23,render:{radius:1.55,colorDeep:"#1d6f83",colorMid:"#63c6cf",colorHigh:"#c4f4f2",atmosphere:"#8ff0ec",atmosphereStrength:.7,bands:5,bandContrast:.12,storm:.15,storms:1,clouds:.08,cloudColor:"#e8ffff",ice:.05,nightLights:0,roughness:.8,specular:.12,tilt:97.77,spin:.42,ring:{inner:1.55,outer:2,colorA:"#9fdfe6",colorB:"#3d6b76",opacity:.35,tiltNoise:.15}}},{slug:"neptune",name:"Neptune",epithet:"The Wind Titan",order:8,klass:"ice-giant",accent:"#5b7dff",summary:"The farthest planet, found by mathematics before anyone saw it, where supersonic winds tear across a deep blue methane sky at 2,100 km/h.",hero:"Sunlight out here is 900 times fainter than on Earth — and yet Neptune has the fastest weather we know of.",diameterKm:49528,massKg:102413e21,massEarth:17.1,gravity:11.15,distanceKm:4515e6,distanceAu:30.18,tempC:-200,tempMinC:-223,tempMaxC:-195,orbitalPeriodDays:60190,orbitalPeriodLabel:"164.8 Earth years",rotationHours:16.11,rotationLabel:"16 h 7 m",solarDayHours:16.11,moons:16,moonsNote:"16 moons; Triton alone accounts for 99.5% of their combined mass.",atmosphere:"Hydrogen, helium and methane — deeper blue than Uranus",composition:[{gas:"Hydrogen",pct:80},{gas:"Helium",pct:19},{gas:"Methane",pct:1.5}],pressureBar:1e3,magneticField:"Offset 47° from the axis and displaced from the centre, like Uranus",magneticRel:27,water:"A supercritical water–ammonia mantle, thousands of kilometres deep",waterScore:58,life:"No plausible habitat identified.",habitability:3,densityKgM3:1638,escapeVelocityKmS:23.5,axialTiltDeg:28.32,funFacts:["Neptune was found with a pen: Le Verrier predicted its position from Uranus's wobble.","It completed its first full orbit since discovery only in 2011.","Winds reach 2,100 km/h — the fastest in the Solar System.","Triton orbits backwards, so it was captured, not formed there."],science:["Neptune emits 2.6 times the energy it absorbs from the Sun, powering that violent weather.","The Great Dark Spot Voyager 2 saw in 1989 had vanished by 1994; new ones come and go.","Triton is geologically active, with nitrogen geysers, and is spiralling in — it will be torn into a ring.","JWST re-imaged the faint rings in 2022 with a clarity nothing since Voyager 2 had achieved."],discoveries:[{year:"1846",text:"Galle finds Neptune within 1° of Le Verrier's predicted position."},{year:"1989",text:"Voyager 2 flies by, revealing the Great Dark Spot and Triton's geysers."},{year:"2022",text:"JWST captures the rings and seven moons in the infrared."}],missions:["Voyager 2","JWST observations","Neptune Odyssey (proposed)"],weather:[{label:"Peak winds",value:"2,100 km/h",detail:"Supersonic — the fastest measured anywhere."},{label:"Dark spots",value:"Earth-sized",detail:"Anticyclones that form and dissipate in years."},{label:"Clouds",value:"Methane ice",detail:"Casting visible shadows on the deck below."}],structure:[{name:"Rocky core",to:.2,temp:"~5,200 °C",color:"#ffdcae",note:"Roughly Earth-mass, iron and silicate."},{name:"Icy mantle",to:.78,temp:"~3,000 °C",color:"#5d8bff",note:"Where diamond rain is thought to fall."},{name:"Hydrogen envelope",to:.96,temp:"~150 °C",color:"#9fb8ff",note:"Hydrogen, helium and methane gas."},{name:"Cloud deck",to:1,temp:"−200 °C",color:"#5b7dff",note:"Methane ice clouds above a blue haze."}],moonList:[{name:"Triton",diameterKm:2707,orbitR:14.3,note:"Retrograde, geologically active, and doomed to become a ring.",color:"#e0d8e8"},{name:"Proteus",diameterKm:420,orbitR:4.8,note:"About as large as an irregular body can get.",color:"#8c8a90"},{name:"Nereid",diameterKm:340,orbitR:222,note:"One of the most eccentric orbits of any moon.",color:"#a9a5ad"}],orbitRadius:37.5,orbitSpeed:.18,render:{radius:1.5,colorDeep:"#131f6b",colorMid:"#3f5fd8",colorHigh:"#a9c4ff",atmosphere:"#6f92ff",atmosphereStrength:.75,bands:7,bandContrast:.2,storm:.6,storms:2,clouds:.16,cloudColor:"#e6efff",ice:0,nightLights:0,roughness:.8,specular:.12,tilt:28.32,spin:.44,ring:{inner:1.6,outer:2.05,colorA:"#8ea6ff",colorB:"#2c3a7a",opacity:.22,tiltNoise:.1}}}],a=Object.fromEntries(t.map(e=>[e.slug,e])),o=(e,t=0)=>e.toLocaleString("en-US",{maximumFractionDigits:t}),r=[{id:"gravity",label:"Surface gravity",unit:"m/s²",scale:"linear",get:e=>e.gravity,format:e=>`${e.gravity} m/s\xb2`,hint:"What a 70 kg person would weigh, in effect."},{id:"mass",label:"Mass",unit:"× Earth",scale:"log",get:e=>e.massEarth,format:e=>`${e.massEarth} \xd7`,hint:"Logarithmic — Jupiter outweighs Mercury 5,700 to 1."},{id:"diameter",label:"Diameter",unit:"km",scale:"linear",get:e=>e.diameterKm,format:e=>`${o(e.diameterKm)} km`,hint:"Equatorial diameter."},{id:"temp",label:"Mean temperature",unit:"°C",scale:"linear",get:e=>e.tempC,format:e=>`${e.tempC} \xb0C`,hint:"Surface for rocky worlds, 1-bar level for giants."},{id:"pressure",label:"Atmospheric pressure",unit:"bar",scale:"log",get:e=>e.pressureBar,format:e=>e.pressureBar<.001?`${e.pressureBar.toExponential(0)} bar`:`${o(e.pressureBar,3)} bar`,hint:"Giants have no surface; 1,000 bar is a reference depth."},{id:"density",label:"Density",unit:"kg/m³",scale:"linear",get:e=>e.densityKgM3,format:e=>`${o(e.densityKgM3)} kg/m\xb3`,hint:"Water is 1,000. Saturn floats."},{id:"escape",label:"Escape velocity",unit:"km/s",scale:"linear",get:e=>e.escapeVelocityKmS,format:e=>`${e.escapeVelocityKmS} km/s`,hint:"How fast you must move to leave for good."},{id:"day",label:"Length of day",unit:"hours",scale:"log",get:e=>e.solarDayHours,format:e=>e.solarDayHours>48?`${o(e.solarDayHours/24,1)} Earth days`:`${o(e.solarDayHours,1)} h`,hint:"Sunrise to sunrise, not one rotation."},{id:"year",label:"Length of year",unit:"Earth days",scale:"log",get:e=>e.orbitalPeriodDays,format:e=>e.orbitalPeriodDays>800?`${o(e.orbitalPeriodDays/365.25,1)} years`:`${o(e.orbitalPeriodDays,1)} days`,hint:"One full orbit of the Sun."},{id:"magnetic",label:"Magnetic field",unit:"× Earth",scale:"log",get:e=>Math.max(e.magneticRel,5e-5),format:e=>e.magneticRel<.001?"None (induced only)":`${o(e.magneticRel,3)} \xd7`,hint:"Dipole strength relative to Earth."},{id:"water",label:"Water availability",unit:"index",scale:"linear",get:e=>e.waterScore,format:e=>e.water,hint:"A qualitative index, Earth = 100."},{id:"habitability",label:"Habitability",unit:"index",scale:"linear",get:e=>e.habitability,format:e=>e.life,hint:"Present-day potential for life as we know it, Earth = 100."}];e.s(["METRICS",0,r,"PLANETS",0,t,"PLANET_BY_SLUG",0,a])},94800,49408,95079,e=>{"use strict";var t=e.i(70950);e.s(["useFrame",()=>t.D],94800);var a=e.i(43476),o=e.i(90072),r=e.i(71645),t=t,i=e.i(48546);let n=`
/*
  Sin-free hash (Hoskins). The textbook version wraps a dot product in
  fract(sin(...) * 43758.5453), which costs three sin() per call — and with
  8 hashes per gradient-noise lookup and 4 octaves per fbm, that was ~96
  transcendentals per fbm per pixel. This is a few multiplies instead, with no
  visible loss of character.
*/
vec3 hash33(vec3 p) {
  p = fract(p * vec3(0.1031, 0.1030, 0.0973));
  p += dot(p, p.yxz + 33.33);
  return -1.0 + 2.0 * fract((p.xxy + p.yxx) * p.zyx);
}

// Gradient noise, [-1,1].
float gnoise(vec3 p) {
  vec3 i = floor(p);
  vec3 f = fract(p);
  vec3 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(dot(hash33(i + vec3(0,0,0)), f - vec3(0,0,0)),
                     dot(hash33(i + vec3(1,0,0)), f - vec3(1,0,0)), u.x),
                 mix(dot(hash33(i + vec3(0,1,0)), f - vec3(0,1,0)),
                     dot(hash33(i + vec3(1,1,0)), f - vec3(1,1,0)), u.x), u.y),
             mix(mix(dot(hash33(i + vec3(0,0,1)), f - vec3(0,0,1)),
                     dot(hash33(i + vec3(1,0,1)), f - vec3(1,0,1)), u.x),
                 mix(dot(hash33(i + vec3(0,1,1)), f - vec3(0,1,1)),
                     dot(hash33(i + vec3(1,1,1)), f - vec3(1,1,1)), u.x), u.y), u.z);
}

float fbm(vec3 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < OCTAVES; i++) {
    v += a * gnoise(p);
    p *= 2.02;
    a *= 0.5;
  }
  return v;
}

// Ridged variant — sharper crests, used for craters and storm filaments.
float ridged(vec3 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < OCTAVES; i++) {
    v += a * (1.0 - abs(gnoise(p)));
    p *= 2.11;
    a *= 0.5;
  }
  return v;
}
`,s=`
varying vec3 vObj;
varying vec3 vNrm;
varying vec3 vWorld;
varying vec3 vViewDir;

void main() {
  vObj = normalize(position);
  vNrm = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vViewDir = normalize(cameraPosition - wp.xyz);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,l=`
uniform float uTime;
uniform vec3  uDeep;
uniform vec3  uMid;
uniform vec3  uHigh;
uniform float uBands;
uniform float uBandContrast;
uniform float uStorm;
uniform float uStorms;
uniform float uIce;
uniform float uNight;
uniform float uSpecular;
uniform float uRough;
uniform float uSeaLevel;      // fbm height that counts as coastline
uniform vec3  uLightPos;      // world space
uniform vec3  uLightPosObj;   // object space, for shadow casting
uniform vec3  uLightColor;
uniform float uAmbient;
uniform float uRingInner;
uniform float uRingOuter;
uniform float uHasRing;
uniform vec4  uMoon;          // xyz object-space position, w radius
uniform float uHasMoon;
uniform float uSeed;

varying vec3 vObj;
varying vec3 vNrm;
varying vec3 vWorld;
varying vec3 vViewDir;

${n}

// Swirled vortex used for the Great Red Spot and its smaller cousins.
float vortex(vec3 p, vec3 centre, float radius, float twist) {
  vec3 d = p - centre;
  float r = length(d) / radius;
  if (r > 1.6) return 0.0;
  float ang = atan(d.z, d.x) + twist * (1.0 - clamp(r, 0.0, 1.0)) * 3.0;
  vec3 q = vec3(cos(ang), d.y * 3.0, sin(ang)) * (0.7 + r * 1.4);
  float n = fbm(q * 3.0 + uSeed);
  return smoothstep(1.25, 0.15, r) * (0.6 + 0.4 * n);
}

void main() {
  vec3 p = vObj;
  float lat = p.y;

  /* ---- albedo -------------------------------------------------- */
  vec3 albedo;
  float rough = uRough;
  float terrain = 0.0;

  if (uBands > 0.5) {
    // Gas / ice giant: latitude bands, domain-warped so they meander.
    float warp = fbm(p * 2.6 + vec3(0.0, uTime * 0.006, 0.0)) * 0.42;
    float turb = fbm(p * 7.0 + vec3(uTime * 0.01, 0.0, 0.0)) * 0.16;
    float band = sin((lat + warp + turb) * uBands * 3.14159);
    band = band * 0.5 + 0.5;
    band = mix(band, smoothstep(0.25, 0.75, band), uBandContrast);

    albedo = mix(uDeep, uMid, smoothstep(0.1, 0.62, band));
    albedo = mix(albedo, uHigh, smoothstep(0.58, 0.98, band + turb * 1.4));

    // Fine filaments along the shear zones.
    float fil = ridged(p * vec3(14.0, 42.0, 14.0) + vec3(uTime * 0.02, 0.0, 0.0));
    albedo = mix(albedo, uHigh, clamp((fil - 0.62) * 0.9, 0.0, 0.35) * uBandContrast);

    if (uStorms > 0.5) {
      float s1 = vortex(p, normalize(vec3(0.72, -0.30, 0.62)), 0.42, 2.4) * uStorm;
      albedo = mix(albedo, vec3(0.86, 0.36, 0.22), s1 * 0.85);
    }
    if (uStorms > 1.5) {
      float s2 = vortex(p, normalize(vec3(-0.62, 0.34, 0.72)), 0.22, -1.8) * uStorm;
      albedo = mix(albedo, uHigh * 1.1, s2 * 0.6);
    }
    if (uStorms > 2.5) {
      float s3 = vortex(p, normalize(vec3(-0.30, -0.55, -0.78)), 0.17, 2.0) * uStorm;
      albedo = mix(albedo, vec3(0.95, 0.88, 0.78), s3 * 0.5);
    }
  } else {
    // Rocky world: continents from fbm, craters from ridged noise.
    float h = fbm(p * 2.3 + uSeed);
    float detail = fbm(p * 9.0 + uSeed * 2.0) * 0.28;
    float land = h + detail;
    terrain = land;

    float crater = ridged(p * 11.0 + uSeed * 3.0);
    crater = smoothstep(0.55, 0.95, crater);

    // uSeaLevel sets how much of the surface the deep tone covers. On Earth
    // that is 71% ocean; on an airless world it just controls contrast.
    albedo = mix(uDeep, uMid, smoothstep(uSeaLevel, uSeaLevel + 0.22, land));
    albedo = mix(albedo, uHigh, smoothstep(uSeaLevel + 0.26, uSeaLevel + 0.56, land));
    // Craters belong to airless, non-reflective worlds — not to oceans.
    albedo = mix(albedo, uHigh * 0.86, crater * 0.5 * (1.0 - step(0.3, uSpecular)));
    rough = mix(rough, 1.0, crater * 0.4);

    // Oceans: low ground on a specular world stays dark and glossy.
    float ocean = 1.0 - smoothstep(uSeaLevel - 0.06, uSeaLevel + 0.02, land);
    rough = mix(rough, 0.18, ocean * step(0.3, uSpecular));
  }

  // Polar caps, following the actual pole rather than a UV seam.
  float ice = smoothstep(1.0 - uIce * 1.15, 1.0 - uIce * 0.35, abs(lat) + fbm(p * 5.0) * 0.08);
  albedo = mix(albedo, vec3(0.94, 0.97, 1.0), ice * step(0.001, uIce));
  rough = mix(rough, 0.35, ice * step(0.001, uIce));

  /* ---- lighting ------------------------------------------------ */
  vec3 N = normalize(vNrm);
  vec3 L = normalize(uLightPos - vWorld);
  vec3 V = normalize(vViewDir);
  vec3 H = normalize(L + V);

  float ndl = dot(N, L);
  // Soft terminator — a hard N\xb7L edge reads as CGI on a sphere this size.
  float diff = smoothstep(-0.16, 0.42, ndl);

  float shadow = 1.0;

  // Ring shadow: march to the ring plane along the light direction.
  if (uHasRing > 0.5) {
    vec3 Lo = normalize(uLightPosObj - vObj);
    if (abs(Lo.y) > 0.0001) {
      float t = -vObj.y / Lo.y;
      if (t > 0.0) {
        vec2 hit = (vObj + Lo * t).xz;
        float r = length(hit);
        if (r > uRingInner && r < uRingOuter) {
          float band = 0.55 + 0.45 * fbm(vec3(r * 26.0, 0.0, 0.0));
          shadow *= 1.0 - 0.72 * band;
        }
      }
    }
  }

  // Moon umbra.
  if (uHasMoon > 0.5) {
    vec3 Lo = normalize(uLightPosObj - vObj);
    float t = dot(uMoon.xyz - vObj, Lo);
    if (t > 0.0) {
      float d = length(vObj + Lo * t - uMoon.xyz);
      shadow *= smoothstep(uMoon.w * 0.55, uMoon.w * 1.6, d);
    }
  }

  // GGX-ish specular: oceans and ice glint, dust does not.
  // Normalised with a\xb2 rather than a: the raw D term peaks around 20 on a
  // surface as smooth as an ocean, which tone-mapped to a flat white disc
  // instead of a sun glint. This keeps the roughness-driven falloff but pins
  // the peak near 1/π whatever the roughness.
  float a = max(rough * rough, 0.004);
  float ndh = max(dot(N, H), 0.0);
  float denom = ndh * ndh * (a - 1.0) + 1.0;
  float d = (a * a) / (3.14159 * denom * denom + 1e-4);
  float spec = clamp(d * 3.0, 0.0, 1.2) * uSpecular * step(0.0, ndl) * diff;

  vec3 lit = albedo * uLightColor * diff * shadow;
  lit += uLightColor * spec * shadow * 0.5;
  lit += albedo * uAmbient;

  // City lights on the night side of an inhabited world. The terrain value was
  // already computed in the rocky branch — recomputing it here cost two more
  // fbm stacks per pixel on the one planet that can least afford them.
  if (uNight > 0.5) {
    float pop = smoothstep(uSeaLevel + 0.04, uSeaLevel + 0.28, terrain) * (1.0 - ice);
    float cluster = smoothstep(0.42, 0.78, fbm(p * 16.0 + 4.0));
    float night = (1.0 - smoothstep(-0.28, 0.08, ndl));
    lit += vec3(1.0, 0.82, 0.5) * pop * cluster * night * 0.55;
  }

  // Limb darkening, so the sphere does not read as a flat disc.
  float limb = pow(clamp(dot(N, V), 0.0, 1.0), 0.32);
  lit *= mix(0.72, 1.0, limb);

  gl_FragColor = vec4(lit, 1.0);
}
`,d=`
varying vec3 vNrm;
varying vec3 vWorld;
varying vec3 vViewDir;
void main() {
  vNrm = normalize(mat3(modelMatrix) * normal);
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vViewDir = normalize(cameraPosition - wp.xyz);
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,c=`
uniform vec3  uColor;
uniform float uStrength;
uniform vec3  uLightPos;
uniform float uPower;
varying vec3 vNrm;
varying vec3 vWorld;
varying vec3 vViewDir;

void main() {
  vec3 N = normalize(vNrm);
  vec3 V = normalize(vViewDir);
  vec3 L = normalize(uLightPos - vWorld);

  // Rim: thickest where we look through the most air.
  float rim = pow(1.0 - abs(dot(N, V)), uPower);
  // Forward scattering: the limb toward the star glows brightest.
  float lit = smoothstep(-0.55, 0.35, dot(N, L));
  float fwd = pow(max(dot(V, -L), 0.0), 2.0) * 0.45;

  float a = rim * (lit * 0.85 + fwd) * uStrength;
  gl_FragColor = vec4(uColor * a, a);
}
`,m=`
uniform float uTime;
uniform vec3  uColor;
uniform float uCover;
uniform vec3  uLightPos;
uniform float uAmbient;
uniform float uSeed;
varying vec3 vObj;
varying vec3 vNrm;
varying vec3 vWorld;
varying vec3 vViewDir;

${n}

void main() {
  vec3 p = vObj;
  // Two layers drifting at different rates reads as weather rather than fog.
  vec3 q = p * 3.2 + vec3(uTime * 0.012, 0.0, uTime * 0.004) + uSeed;
  float n = fbm(q) * 0.6 + fbm(q * 2.7 + 5.0) * 0.4;
  // Threshold the noise so uCover reads as actual sky coverage. The old
  // mapping saturated well before 0.5 and buried every surface in white.
  float th = 1.0 - uCover * 0.55;
  float mask = smoothstep(th - 0.05, th + 0.17, n * 0.5 + 0.5);

  vec3 N = normalize(vNrm);
  vec3 L = normalize(uLightPos - vWorld);
  float diff = smoothstep(-0.2, 0.45, dot(N, L));
  float limb = pow(clamp(dot(N, normalize(vViewDir)), 0.0, 1.0), 0.5);

  float a = mask * diff * mix(0.55, 1.0, limb) * 0.92;
  gl_FragColor = vec4(uColor * (diff + uAmbient), a);
}
`,u=`
varying vec3 vObj;
varying vec3 vWorld;
void main() {
  vObj = position;
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,h=`
uniform vec3  uColorA;
uniform vec3  uColorB;
uniform float uInner;
uniform float uOuter;
uniform float uOpacity;
uniform float uDetail;
uniform vec3  uLightPosObj;
uniform float uPlanetRadius;
uniform float uTime;
varying vec3 vObj;
varying vec3 vWorld;

${n}

void main() {
  float r = length(vObj.xy);
  float t = (r - uInner) / (uOuter - uInner);
  if (t < 0.0 || t > 1.0) discard;

  // Ringlets: many narrow bands plus a couple of hard gaps (Cassini division).
  float fine = 0.5 + 0.5 * sin(t * 260.0 + gnoise(vec3(t * 40.0, 0.0, 0.0)) * 6.0);
  float coarse = 0.5 + 0.5 * fbm(vec3(t * 12.0, 0.0, 0.0));
  float dens = mix(coarse, fine, 0.45 * uDetail);

  dens *= smoothstep(0.0, 0.05, t) * (1.0 - smoothstep(0.86, 1.0, t));
  dens *= 1.0 - 0.85 * smoothstep(0.60, 0.64, t) * (1.0 - smoothstep(0.68, 0.72, t));
  dens *= 1.0 - 0.5 * smoothstep(0.30, 0.32, t) * (1.0 - smoothstep(0.35, 0.37, t));

  vec3 col = mix(uColorB, uColorA, dens);

  // The planet's own shadow falling across the rings. RingGeometry lies in
  // local XY and the mesh is rotated -90\xb0 about X, so local (x,y) maps to
  // (x, 0, -y) in the tilt group's frame — which is where uLightPosObj lives.
  vec3 P = vec3(vObj.x, 0.0, -vObj.y);
  vec3 L = normalize(uLightPosObj - P);
  float tc = dot(-P, L);
  float shade = 1.0;
  if (tc > 0.0) {
    float dist = length(P + L * tc);
    shade = smoothstep(uPlanetRadius * 0.94, uPlanetRadius * 1.12, dist);
  }
  col *= mix(0.18, 1.0, shade);

  gl_FragColor = vec4(col, dens * uOpacity);
}
`,f=`
attribute float aSize;
attribute float aPhase;
attribute vec3 aColor;
uniform float uTime;
uniform float uPixelRatio;
varying vec3 vColor;
varying float vTwinkle;

void main() {
  vColor = aColor;
  vTwinkle = 0.55 + 0.45 * sin(uTime * 1.4 + aPhase * 6.283);
  vec4 mv = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mv;
  gl_PointSize = aSize * uPixelRatio * (140.0 / max(-mv.z, 1.0));
}
`,p=`
varying vec3 vColor;
varying float vTwinkle;
void main() {
  vec2 uv = gl_PointCoord - 0.5;
  float d = length(uv);
  if (d > 0.5) discard;
  float core = smoothstep(0.5, 0.0, d);
  float halo = smoothstep(0.5, 0.12, d);
  float a = core * core * vTwinkle;
  gl_FragColor = vec4(vColor * (core + halo * 0.4), a);
}
`,g=`
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,v=`
uniform float uTime;
uniform vec3  uColorA;
uniform vec3  uColorB;
uniform float uIntensity;
uniform float uSeed;
uniform float uScale;
varying vec2 vUv;

${n}

void main() {
  vec2 uv = (vUv - 0.5) * uScale;
  float t = uTime * 0.014;

  // Domain warping is what turns fbm into gas clouds instead of grey static.
  // One warp lookup, mirrored onto the second axis: a second independent fbm
  // here cost a full extra noise stack per pixel across a very large quad and
  // the swirls are indistinguishable.
  vec3 p = vec3(uv, uSeed);
  float w = fbm(p * 1.3 + t);
  vec3 warp = vec3(w, -w * 0.8, 0.0);
  float n = fbm(p * 2.1 + warp * 1.6);
  float n2 = fbm(p * 4.7 - warp * 0.8 + 3.0);

  float density = smoothstep(-0.12, 0.55, n) * (0.55 + 0.45 * n2);
  // Fade to nothing at the plane's edge so the quad is never visible.
  float vign = smoothstep(1.0, 0.15, length(vUv - 0.5) * 2.0);

  vec3 col = mix(uColorA, uColorB, smoothstep(0.1, 0.8, n2 * 0.5 + 0.5));
  col += uColorB * pow(density, 3.0) * 0.6;

  float a = density * vign * uIntensity;
  gl_FragColor = vec4(col * a, a);
}
`,b=`
uniform float uTime;
uniform vec3  uHot;
uniform vec3  uCool;
uniform float uOpacity;
varying vec3 vObj;
varying vec3 vWorld;

${n}

void main() {
  float r = length(vObj.xy);
  float t = (r - 0.34) / 0.66;
  if (t < 0.0 || t > 1.0) discard;

  float ang = atan(vObj.y, vObj.x);
  // Inner material orbits faster — differential rotation shears the streaks.
  float swirl = ang + uTime * (0.9 / (0.25 + t * 1.6));
  float streak = fbm(vec3(cos(swirl), sin(swirl), t * 5.0) * 3.4);
  float dens = smoothstep(0.0, 0.18, t) * (1.0 - smoothstep(0.55, 1.0, t));
  dens *= 0.55 + 0.65 * streak;

  // Doppler beaming: the side rotating toward us is brighter and bluer.
  float beam = 0.55 + 0.85 * pow(max(sin(ang), 0.0), 1.5);

  vec3 col = mix(uHot, uCool, smoothstep(0.05, 0.75, t));
  col *= beam * (1.6 - t);

  gl_FragColor = vec4(col * dens, dens * uOpacity);
}
`,y=`
uniform vec3  uColor;
uniform float uOpacity;
varying vec2 vUv;
void main() {
  vec2 uv = vUv - 0.5;
  float d = length(uv) * 2.0;
  // A thin bright annulus (the photon ring) over a soft outer bloom.
  float ring = smoothstep(0.52, 0.49, d) * smoothstep(0.42, 0.47, d);
  float glow = smoothstep(1.0, 0.46, d) * 0.28;
  float shadow = smoothstep(0.46, 0.44, d);
  float a = (ring * 1.4 + glow) * uOpacity * (1.0 - shadow * 0.96);
  gl_FragColor = vec4(uColor * a, a);
}
`,w=`
uniform float uTime;
uniform vec3  uCore;
uniform vec3  uEdge;
varying vec3 vObj;
varying vec3 vNrm;
varying vec3 vViewDir;

${n}

void main() {
  vec3 p = vObj * 4.0;
  float gran = fbm(p + vec3(0.0, uTime * 0.05, 0.0));
  float cells = ridged(p * 2.4 - vec3(uTime * 0.03));
  float h = gran * 0.6 + cells * 0.5;

  vec3 col = mix(uEdge, uCore, smoothstep(0.15, 0.85, h));
  // Limb darkening, plus a hot rim so the disc edge does not look cut out.
  float limb = pow(clamp(dot(normalize(vNrm), normalize(vViewDir)), 0.0, 1.0), 0.45);
  col *= mix(0.55, 1.25, limb);
  col += uCore * pow(1.0 - limb, 3.0) * 0.5;

  gl_FragColor = vec4(col, 1.0);
}
`;e.s(["ATMO_FRAG",0,c,"ATMO_VERT",0,d,"BH_DISC_FRAG",0,b,"BH_RING_FRAG",0,y,"CLOUD_FRAG",0,m,"NEBULA_FRAG",0,v,"NEBULA_VERT",0,g,"PLANET_FRAG",0,l,"PLANET_VERT",0,s,"RING_FRAG",0,h,"RING_VERT",0,u,"STAR_FRAG",0,p,"STAR_VERT",0,f,"SUN_FRAG",0,w],49408),e.s(["default",0,function({count:e=4200,inner:n=60,outer:s=320,drift:l=.004,sizeScale:d=1}){let c=(0,r.useRef)(null),m=(0,i.useThree)(e=>e.viewport.dpr),u=(0,r.useMemo)(()=>{let t=new Float32Array(3*e),a=new Float32Array(e),r=new Float32Array(e),i=new Float32Array(3*e),l=new o.Color;for(let o=0;o<e;o++){let e=2*Math.random()-1,c=Math.random()*Math.PI*2,m=Math.sqrt(1-e*e),u=n+(s-n)*Math.cbrt(Math.random());t[3*o]=Math.cos(c)*m*u,t[3*o+1]=e*u*.72,t[3*o+2]=Math.sin(c)*m*u;let h=Math.pow(Math.random(),3.2);a[o]=(.55+3.4*h)*d,r[o]=Math.random();let f=Math.random();f>.9?l.setHSL(.08,.55,.72):f>.74?l.setHSL(.58,.62,.78):f>.58?l.setHSL(.74,.4,.8):l.setHSL(.6,.12,.93),i[3*o]=l.r,i[3*o+1]=l.g,i[3*o+2]=l.b}let c=new o.BufferGeometry;return c.setAttribute("position",new o.BufferAttribute(t,3)),c.setAttribute("aSize",new o.BufferAttribute(a,1)),c.setAttribute("aPhase",new o.BufferAttribute(r,1)),c.setAttribute("aColor",new o.BufferAttribute(i,3)),c},[e,n,s,d]),h=(0,r.useMemo)(()=>new o.ShaderMaterial({vertexShader:f,fragmentShader:p,transparent:!0,depthWrite:!1,blending:o.AdditiveBlending,uniforms:{uTime:{value:0},uPixelRatio:{value:1}}}),[]);return(0,r.useEffect)(()=>{h.uniforms.uPixelRatio.value=m},[m,h]),(0,r.useEffect)(()=>()=>{u.dispose(),h.dispose()},[u,h]),(0,t.D)((e,t)=>{h.uniforms.uTime.value+=Math.min(t,.05),c.current&&(c.current.rotation.y+=t*l)}),(0,a.jsx)("points",{ref:c,geometry:u,material:h,frustumCulled:!1})}],95079)},72037,e=>{"use strict";var t=e.i(43476),a=e.i(90072),o=e.i(71645),r=e.i(94800),i=e.i(49408);e.s(["default",0,function({position:e=[0,0,-40],rotation:n=[0,0,0],scale:s=60,colorA:l="#3b1d7a",colorB:d="#22d3ee",intensity:c=.55,seed:m=1,detail:u=2.4,octaves:h="4",billboard:f=!1}){let p=(0,o.useRef)(null),g=(0,o.useMemo)(()=>new a.ShaderMaterial({vertexShader:i.NEBULA_VERT,fragmentShader:i.NEBULA_FRAG,defines:{OCTAVES:h},transparent:!0,depthWrite:!1,depthTest:!0,blending:a.AdditiveBlending,uniforms:{uTime:{value:10*m},uColorA:{value:new a.Color(l)},uColorB:{value:new a.Color(d)},uIntensity:{value:c},uSeed:{value:m},uScale:{value:u}}}),[l,d,c,m,u,h]);return(0,o.useEffect)(()=>()=>g.dispose(),[g]),(0,r.useFrame)(({camera:e},t)=>{g.uniforms.uTime.value+=Math.min(t,.05),f&&p.current&&p.current.quaternion.copy(e.quaternion)}),(0,t.jsxs)("mesh",{ref:p,position:e,rotation:n,scale:s,raycast:()=>null,children:[(0,t.jsx)("planeGeometry",{args:[1,1]}),(0,t.jsx)("primitive",{object:g,attach:"material"})]})}])}]);