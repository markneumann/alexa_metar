
// This is a list of many (but by no means enough)
// airports by city. This is for the city-based 
// lookup function.

var names = {
    'istanbul'          : 'LTBA',
    'moscow'            : 'UUDD',
    'berlin'            : 'EDDI',
    'kiev'              : 'UKBB',
    'rome'              : 'LIRU',
    'minsk'             : 'UMMS',
    'bucharest'         : 'LROP',
    'budapest'          : 'EPWA',
    'warsaw'            : 'LHBP',
    'barcelona'         : 'LEBL',
    'munich'            : 'EDDM',
    'milan'             : 'LIML',
    'prague'            : 'LKPR',
    'brussels'          : 'EBBR',
    'kazan'             : 'UWKD',
    'belgrade'          : 'LYBE',
    'birmingham'        : 'EGBB',
    'odessa'            : 'KODO',
    'naples'            : 'KAPF',
    'helsinki'          : 'EFHK',
    'cardiff'           : 'EGFF',
    'copenhagen'        : 'EKRK',
    'lyon'              : 'EKCH',
    'nice'              : 'LFMN',
    'oslo'              : 'ENGM',
    'seville'           : 'LETA',
    'zurich'            : 'LSZH',
    'boise'             : 'KBOI',
    'teterboro'         : 'KTEB',
    'westchester'       : 'KHPN',
    'caldwell'          : 'KCDW',
    'dubai'             : 'OMDB',
    'tokyo'             : 'RJTT',
    'london'            : 'EGLL',
    'heathrow'          : 'EGLL',
    'gatwick'           : 'EGKK',
    'hong kong'         : 'VHHH',
    'glasgow'           : 'EGPF',
    'edinburgh'         : 'EGPH',
    'dublin'            : 'EIDW',
    'paris'             : 'LFPG',
    'frankfurt'         : 'EDDF',
    'shanghai'          : 'ZSPD',
    'amsterdam'         : 'EHAM',
    'melbourne'         : 'YMML',
    'sydney'            : 'YSSY',
    'seoul'             : 'RKSI',
    'madrid'            : 'LEMD',
    'delhi'             : 'VIDP',
    'beijing'           : 'ZBAA',
    'virginia beach'    : 'KORF',
    'norfolk'           : 'KORF',
    'atlanta'           : 'KATL',
    'los angeles'       : 'KLAX',
    'chicago'           : 'KORD',
    'o\'hare'           : 'KORD',
    'dallas fort worth' : 'KDFW',
    'fort worth'        : 'KDFW',
    'dallas'            : 'KDFW',
    'new york'          : 'KJFK',
    'san francisco'     : 'KSFO',
    'charlotte'         : 'KCLT',
    'denver   '         : 'KDEN',
    'las vegas'         : 'KLAS',
    'mccarran'          : 'KLAS',
    'louisville'        : 'KSDF',
    'vegas'             : 'KLAS',
    'phoenix'           : 'KPHX',
    'philadelphia'      : 'KPHL',
    'houston'           : 'KIAH',
    'seattle'           : 'KSEA',
    'newark'            : 'KEWR',
    'orlando'           : 'KMCO',
    'minneapolis'       : 'KMSP',
    'saint paul'        : 'KMSP',
    'tulsa'             : 'KTUL',
    'el paso'           : 'KELP',
    'detroit'           : 'KDTW',
    'boston'            : 'KBOS',
    'laguardia'         : 'KLGA',
    'fort lauderdale'   : 'KFLL',
    'oklahoma city'     : 'KOKC',
    'baltimore'         : 'KBWI',
    'dulles'            : 'KIAD',
    'midway'            : 'KMDW',
    'salt lake city'    : 'KSLC',
    'memphis'           : 'KMEM',
    'wasington dc'      : 'KDCA',
    'national'          : 'KDCA',
    'reagan'            : 'KDCA',
    'honolulu'          : 'PHNL',
    'san diego'         : 'KSAN',
    'portland'          : 'KPDX',
    'lambert'           : 'KSTL',
    'st louis'          : 'KSTL',
    'corpus christi'    : 'KCRP',
    'hobby'             : 'KHOU',
    'nashville'         : 'KBNA',
    'austin'            : 'KAUS',
    'oakland'           : 'KOAK',
    'mesa'              : 'KAZA',
    'kansas city'       : 'KMCI',
    'arlington'         : 'KGKY',
    'new orleans'       : 'KMSY',
    'raleigh-durham'    : 'KRDU',
    'raleigh'           : 'KRDU',
    'durham'            : 'KRDU',
    'miami'             : 'KMIA',
    'san jose'          : 'KSJC',
    'john wayne'        : 'KSNA',
    'anaheim'           : 'KSNA',
    'love'              : 'KDAL',
    'long beach'        : 'KLGB',
    'sacramento'        : 'KSMF',
    'san antonio'       : 'KSAT',
    'pittsburgh'        : 'KPIT',
    'lexington'         : 'KLEX',
    'cleveland'         : 'KCLE',
    'indianapolis'      : 'KIND',
    'milwaukee'         : 'KMKE',
    'columbus'          : 'KCMH',
    'kahului'           : 'PHOG',
    'palm beach'        : 'KPBI',
    'hartford'          : 'KBDL',
    'cincinnati'        : 'KCVG',
    'jacksonville'      : 'KJAX',
    'anchorage'         : 'KANC',
    'buffalo'           : 'KBUF',
    'fresno'            : 'KFAT',
    'tucson'            : 'KTUS',
    'albuquerque'       : 'KABQ',
    'ontario'           : 'KONT',
    'colorado springs'  : 'KCOS',
    'omaha'             : 'KOMA',
    'burbank'           : 'KBUR',
    'palo alto'         : 'KPAO',
    'south lake tahoe'  : 'KTVL',
    'riverside'         : 'KRAL',
    'santa ana'         : 'KRAL',
    'bakersfield'       : 'KBFL',
    'tampa'             : 'KTPA',
};

module.exports = names;


