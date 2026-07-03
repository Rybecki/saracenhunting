import { HuntOffer, Tenant, Testimonial, GalleryItem } from "./types";

export const TENANTS: Tenant[] = [
  {
    id: "saracen-pl",
    name: "Saracen Hunting Poland",
    country: "Poland",
    currency: "EUR",
    flag: "🇵🇱",
    email: "kontakt@saracenhunting.pl",
    phone: "+48 607 040 396",
    address: "ul. Cmentarna 28, 44-341 Gołkowice, Poland"
  },
  {
    id: "saracen-no",
    name: "Saracen Hunting Norge",
    country: "Norway",
    currency: "EUR",
    flag: "🇳🇴",
    email: "norway@saracenhunting.com",
    phone: "+47 912 45 678",
    address: "Fjellskogveien 89, 3580 Geilo, Norway"
  },
  {
    id: "saracen-de",
    name: "Saracen Hunting Central Europe",
    country: "Germany / UK",
    currency: "EUR",
    flag: "🇬🇧",
    email: "europe@saracenhunting.com",
    phone: "+49 (0) 30 882 143",
    address: "Kurfürstendamm 210, 10719 Berlin, Germany"
  }
];

export const HUNT_OFFERS: HuntOffer[] = [
  {
    id: "hunt-deer",
    category: "deer",
    priceEuro: 350,
    durationDays: 4,
    image: "/offers/jelen.png",
    title: {
      pl: "Polowanie na Jelenie Szlachetne",
      en: "Majestic Red Deer Hunt",
      no: "Majestetisk Kronhjortjakt"
    },
    subtitle: {
      pl: "Rykowisko na Jurze Krakowsko-Częstochowskiej",
      en: "September rut in the Kraków-Częstochowa Upland",
      no: "September-brunst i Jurakrakowsko-Częstochowska"
    },
    description: {
      pl: "Przeżyj najbardziej emocjonujące polowanie podczas wrześniowego rykowiska. Usłysz potężny ryk jeleni rozchodzący się o świcie w jurajskich lasach i stań oko w oko z potężnymi bykami.",
      en: "Experience the ultimate hunting rush during the September rut. Hear the thunderous roar of stags echoing at dawn in the Jurassic woodlands, tracking mature trophies with elite guides.",
      no: "Opplev det ultimate jaktkikket under hjortebrunsten i september. Hør det dundrende brølet fra kronhjorten som ekkoer ved daggry i jurassiske skoger, ledet av elitemessige guider."
    }
  },
  {
    id: "hunt-boar",
    category: "wild_boar",
    priceEuro: 450,
    durationDays: 3,
    image: "/offers/dzik.png",
    title: {
      pl: "Polowania na Dziki",
      en: "Thrilling Wild Boar Hunt",
      no: "Spennende Villsvinjakt"
    },
    subtitle: {
      pl: "Polowania pędzone oraz nocne zasiadki",
      en: "Driven winter hunts and moonlit stalking",
      no: "Drivjakt om vinteren og måneskinnsjakt"
    },
    description: {
      pl: "Polowanie o wysokim poziomie adrenaliny. Oferujemy zarówno dynamiczne polowania pędzone w zimowej aurze z psami, jak i nastrojowe nocne polowania przy pełni księżyca na potężne odyńce.",
      en: "A high-adrenaline hunting pursuit. We offer both highly dynamic driven winter hunts with experienced hounds, and silent, atmospheric night stalking under a full moon.",
      no: "En jakt full av adrenalin. Vi tilbyr både dynamisk drivjakt om vinteren med veltrente hunder, og stille måneskinnsjakt på store villsviner."
    }
  },
  {
    id: "hunt-roe",
    category: "roe_deer",
    priceEuro: 340,
    durationDays: 3,
    image: "/offers/sarna.png",
    title: {
      pl: "Majowe Rogacze",
      en: "Roe Buck Spring Classic",
      no: "Råbukk Vårklassiker"
    },
    subtitle: {
      pl: "Polowanie w budzącej się do życia naturze",
      en: "Stalking across pristine green meadows",
      no: "Snikjakt over frodige, grønne enger"
    },
    description: {
      pl: "Wiosenny klasyk dla koneserów precyzyjnego strzału. Polowanie na rogacze w połowie maja, gdy łąki są soczyście zielone, a rzepaki zaczynają kwitnąć. Niezrównany urok majowych poranków.",
      en: "A spring classic for seekers of precise marksmanship. Hunt mature roe bucks in mid-May when the meadows are lush green and fields bloom, capturing the serene magic of spring mornings.",
      no: "En ekte vårklassiker for den kresne jeger. Jakt på modne råbukker i midten av mai når engene er frodige og grønne, og opplev den magiske stillheten i vårmorgenen."
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    name: "Hans-Dieter Meyer",
    country: "Germany",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    content: {
      pl: "Organizacja polowania na jelenie przerosła moje najśmielsze oczekiwania. Przewodnik wykazał się nieprawdopodobną intuicją. Zdobyłem życiowego byka o wadze wieńca 8.7 kg. Serdecznie polecam Saracen Hunting!",
      en: "The red deer hunt organization exceeded my wildest dreams. The guide showed unbelievable intuition and experience. I harvested a magnificent stag with an 8.7 kg trophy. I highly recommend Saracen Hunting!",
      no: "Organiseringen av hjortejakten overgikk mine villeste drømmer. Guiden viste utrolig intuisjon og erfaring. Jeg felte en fantastisk hjort med et trofe på 8,7 kg. Jeg anbefaler Saracen Hunting på det sterkeste!"
    },
    huntType: {
      pl: "Polowanie na Jelenie",
      en: "Red Deer Rut Hunt",
      no: "Hjortejakt under brunst"
    }
  },
  {
    id: "t-2",
    name: "Lars Lindqvist",
    country: "Sweden",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    content: {
      pl: "Wyjazd z grupą przyjaciół na polowanie zbiorowe w listopadzie to był strzał w dziesiątkę. Trzy dni wspaniałej organizacji, pyszne jedzenie, piękne krajobrazy Jury Krakowsko-Częstochowskiej i pełen emocji pokot. Wrócimy na pewno za rok!",
      en: "A group trip with my friends for a driven hunt in November was an absolute hit. Three days of flawless organization, delicious game cuisine, beautiful scenery of Poland. We are definitely coming back!",
      no: "En gruppetur med mine venner på drivjakt i november var en absolutt suksess. Tre dager med feilfri organisering, deilig mat og vakkert landskap. Vi kommer garantert tilbake neste år!"
    },
    huntType: {
      pl: "Polowanie Zbiorowe",
      en: "Driven Hunt for Groups",
      no: "Drivjakt for grupper"
    }
  },
  {
    id: "t-3",
    name: "Christian Thorne",
    country: "Norway",
    rating: 5,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=150",
    content: {
      pl: "Polowanie na kozły wiosną to moja ulubiona tradycja, ale z Saracen Hunting nabrała nowego wymiaru. Zakwaterowanie w dworku było luksusowe, a podprowadzający znał każdy centymetr terenu. Zdobyłem dwa przepiękne parostki.",
      en: "Spring buck hunting is my favorite tradition, but Saracen Hunting raised the bar to a brand new level. The manor house lodging was luxurious, and our stalker knew every inch of the land. Harvested two incredible bucks.",
      no: "Råbukkjakt om våren er min favoritttradisjon, men Saracen Hunting løftet opplevelsen til et helt nytt nivå. Innkvarteringen på herregården var luksuriøs og guiden var eksepsjonell. Fikk to utrolige bukker."
    },
    huntType: {
      pl: "Polowanie na Rogacze",
      en: "Spring Roe Buck Hunt",
      no: "Råbukkjakt om våren"
    }
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    url: "/gallery/01-tradycje-pokot.png",
    category: "traditions",
    title: {
      pl: "Tradycyjny pokot po polowaniu",
      en: "Traditional hunting tribute ceremony",
      no: "Tradisjonell jaktseremoni etter jakten"
    }
  },
  {
    id: "g-2",
    url: "/gallery/02-polowanie-zbiorowe.png",
    category: "group_hunts",
    title: {
      pl: "Polowanie zbiorowe — cała ekipa myśliwych",
      en: "Group hunt — the full hunting party",
      no: "Drivjakt — hele jaktlaget samlet"
    }
  },
  {
    id: "g-3",
    url: "/gallery/03-jelen-pokot.png",
    category: "red_deer",
    title: {
      pl: "Pokot jeleni szlachetnych",
      en: "Red deer hunting tribute",
      no: "Hyllest til kronhjortene"
    }
  },
  {
    id: "g-4",
    url: "/gallery/04-tradycje-strefa.png",
    category: "traditions",
    title: {
      pl: "Strefa pokotu z pochodniami",
      en: "Tribute zone with ceremonial torches",
      no: "Seremoniell sone med fakler"
    }
  },
  {
    id: "g-5",
    url: "/gallery/05-polowanie-zbiorowe-linia.png",
    category: "group_hunts",
    title: {
      pl: "Myśliwi przed uroczystym pokotem",
      en: "Hunters gathered before the tribute",
      no: "Jegere samlet før seremonien"
    }
  },
  {
    id: "g-6",
    url: "/gallery/06-jelen-trofeum.png",
    category: "red_deer",
    title: {
      pl: "Trofeum jelenia szlachetnego",
      en: "Red deer trophy",
      no: "Kronhjorttrofé"
    }
  },
  {
    id: "g-7",
    url: "/gallery/07-dzik.png",
    category: "wild_boar",
    title: {
      pl: "Upolowany dzik",
      en: "Harvested wild boar",
      no: "Felt villsvin"
    }
  },
  {
    id: "g-8",
    url: "/gallery/08-polowanie-zbiorowe-pokot.png",
    category: "group_hunts",
    title: {
      pl: "Udane polowanie zbiorowe",
      en: "Successful driven hunt",
      no: "Vellykket drivjakt"
    }
  },
  {
    id: "g-9",
    url: "/gallery/09-jelen-byk.png",
    category: "red_deer",
    title: {
      pl: "Potężny byk jelenia szlachetnego",
      en: "Impressive red deer stag",
      no: "Imponerende kronhjortbukk"
    }
  },
  {
    id: "g-10",
    url: "/gallery/10-tradycje-pochodnia.png",
    category: "traditions",
    title: {
      pl: "Ceremonia przy pochodni",
      en: "Ceremony by the torch",
      no: "Seremoni ved fakkelbålet"
    }
  },
  {
    id: "g-11",
    url: "/gallery/11-muflon.png",
    category: "mouflon",
    title: {
      pl: "Trofeum muflona",
      en: "Mouflon trophy",
      no: "Mufflontrofé"
    }
  },
  {
    id: "g-12",
    url: "/hero-bg.png",
    category: "group_hunts",
    title: {
      pl: "Polowanie w sercu polskiej przyrody",
      en: "Hunting in the heart of Polish wilderness",
      no: "Jakt i hjertet av polsk villmark"
    }
  },
  {
    id: "g-13",
    url: "/hero/slide-2.png",
    category: "traditions",
    title: {
      pl: "Rogacz — wspólne chwile na łowisku",
      en: "Roe buck — shared moments in the field",
      no: "Råbukk — felles øyeblikk i feltet"
    }
  },
  {
    id: "g-14",
    url: "/hero/slide-3.png",
    category: "traditions",
    title: {
      pl: "Majowy rogacz na łące",
      en: "May roe buck in the meadow",
      no: "Mai-råbukk på engen"
    }
  },
  {
    id: "g-15",
    url: "/gallery/12-rogacz-las.png",
    category: "traditions",
    title: {
      pl: "Rogacz — ostatnie poddanie czci",
      en: "Roe buck — the hunter's tribute",
      no: "Råbukk — jegerens hyllest"
    }
  },
  {
    id: "g-16",
    url: "/gallery/13-rogacz-siano.png",
    category: "traditions",
    title: {
      pl: "Rogacz o złotej porze",
      en: "Roe buck at golden hour",
      no: "Råbukk i gyllen time"
    }
  },
  {
    id: "g-17",
    url: "/gallery/14-rogacze-para.png",
    category: "traditions",
    title: {
      pl: "Dwa rogacze z wyprawy",
      en: "Two roe bucks from the hunt",
      no: "To råbukker fra jakten"
    }
  },
  {
    id: "g-18",
    url: "/gallery/15-muflon-mysliwy.png",
    category: "mouflon",
    title: {
      pl: "Muflon — trofeum w jesiennych lasach",
      en: "Mouflon trophy in the autumn woods",
      no: "Mufflon — trofé i høstskogen"
    }
  }
];

export const HOME_GALLERY_PREVIEW_IDS = ["g-1", "g-2", "g-14", "g-4"];
