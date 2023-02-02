const fakeProducts = [
  {
    category: "Helmets",
    name: "Bauer Hyperlite Senior Hockey Helmet",
    description:
      "Brand new for 2021, Bauer is once again looking to change the game with the Bauer Hyperlite Helmet. Engineered to further improve head protection while also improving on weight, the Hyperlite Helmet will excel in all-around performance and protection.",
    price: 300,
    quantity: 5,
    size: "Medium",
    color: "Black",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/b/a/bauer-hockey-helmet-hyperlite-sr.jpg",
  },
  {
    category: "Accessories",
    name: "Zamboni Model 552AC Electric",
    description:
      "Zero battery maintenance and lithium-ion power combine for the ultimate upgrade to the worlds most popular electric ice resurfacer",
    price: 150000,
    quantity: 1,
    size: "Very Large",
    color: "Blue/White",
    image:
      "https://zamboni.com/wp-content/uploads/2021/11/552ac-3quarter-view.png",
  },
  {
    category: "Protective Gear",
    name: "CCM Tacks 9550 Senior Hockey Shoulder Pads",
    description:
      "Brand new for 2023 are the CCM Tacks 9550 Senior Shoulder Pads! These pads will offer reliable and functional protection that is ideal for recreational use.",
    price: 70,
    quantity: 5,
    size: "Large",
    color: "Black",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/c/c/ccm-hockey-shoulder-pads-tacks-9550-sr-inset1.jpg",
  },
  {
    category: "Protective Gear",
    name: "Warrior Alpha DX Pro Senior Hockey Shin Guards",
    description:
      "Starting off with the protection aspect, the Alpha DX Pro Shin Guards feature Warriors premium protection. What this entails is perforated, lightweight, molded slash guards and calf guards. This setup helps protect players against the force of direct impacts such as blocked shots and slashes!",
    price: 130,
    quantity: 3,
    size: "Large",
    color: "Black",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/w/a/warrior-hockey-shin-guards-alpha-dx-pro-sr-inset1.jpg",
  },
  {
    category: "Protective Gear",
    name: "Warrior Alpha DX Pro Senior Hockey Elbow Pads",
    description:
      "The premium protection in the Alpha DX Pro Elbow Pads consist of molded plastic inserts within the forearm and bicep area! This setup is lightweight and ergonomic, ensuring that players do not have restricted feel without having to sacrifice the elite-level protection. Paired with this is Warrior’s compression-molded EVA foam throughout the entirety.",
    price: 100,
    quantity: 8,
    size: "Large",
    color: "Black/Silver",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/w/a/warrior-hockey-elbow-pads-alpha-dx-pro-sr-inset2.jpg",
  },
  {
    category: "Sticks",
    name: "Warrior Covert QRE 10 Grip Tyke Hockey Stick - 20 Flex",
    description:
      "Starting off with the overall shape and design of the Warrior QRE 10, you will feel the Edge Taper through the stick that drives flex energy through the stick that magnifies power and quick release. This unique stick shape geometry improves the response of the stick and makes a more stable feel that plays stronger.",
    price: 50,
    quantity: 2,
    size: "Youth",
    color: "Orange",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/w/a/warrior-hockey-stick-covert-qre-10-grip-yth-20.jpg",
  },
  {
    category: "Accessories",
    name: "Winnwell 72in. Heavy Duty Target",
    description:
      "Fits full regulation net 72in x 48in x 30in. Heavy duty 1800D Polyester construction reinforced with PVC backing. 12 bungee cords with stainless and steel grommets for quick set-up",
    price: 80,
    quantity: 3,
    size: "Extra Large",
    color: "Black",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/6/7/676824018417.jpg",
  },
  {
    category: "Protective Gear",
    name: "CCM Jetspeed FT4 Pro Senior Hockey Equipment Bundle",
    description:
      "Moving right into the construction of the Jetspeed FT4 Pro Shoulder Pads, CCM is using an all-new amplified mobility design with molded Zotefoam, which provides maximum freedom of movement and mobility while keeping the player dry and light throughout the game. This design provides superior freedom of movement. This is paired up with ultra-light Ufoam constructed shoulder caps that provide solid protection in a lightweight package.",
    price: 555,
    quantity: 3,
    size: "Extra Large",
    color: "WHite/Red",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/c/c/ccm-ex-ft4pro-sr.png",
  },
  {
    category: "Sticks",
    name: "Warrior Alpha DX Grip Senior Hockey Stick",
    description:
      "Brand new for the 2019-2020 season is the Warrior Alpha DX Senior Hockey Stick from Warrior Hockey. This second iteration of the Alpha stick line features upgrades made to both the shaft as well as the blade making the Alpha DX Hockey Stick one of Warrior’s most advanced to date!",
    price: 260,
    quantity: 9,
    size: "Senior",
    color: "Black/Yellow",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/w/a/warrior-hockey-stick-alpha-dx-sr.jpg",
  },
  {
    category: "Skates",
    name: "CCM Ribcor 86K Senior Ice Hockey Skates",
    description:
      "Starting off with the quarter package, the Ribcor 86K Hockey Skates feature a composite quarter package using an injected synthetic composite. This durable boot shapes your foot better for a good fit around your foot. This boot will have a good structural stiffness and a performance stiffness of 130 which will generate a good skating performance.",
    price: 230,
    quantity: 10,
    size: "Extra Large",
    color: "Black.Green",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/c/c/ccm-hockey-skates-ribcor-86k-sr.jpg",
  },
  {
    category: "Skates",
    name: "CCM Super Tacks 9350 Youth Ice Hockey Skates",
    description:
      "The CCM Super Tacks 9350 Youth Hockey Skates are a great option for youth hockey players who are still developing their game. Built with reinforced injected materials in the quarter package, the 9380 Youth Hockey Skates provide great protection and just the right amount of stiffness. This will allow younger players to hone their skating skills without having to worry about any discomfort!",
    price: 55,
    quantity: 4,
    size: "Small",
    color: "Black/Yellow",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/c/c/ccm-hockey-skates-super-tacks-9350-yth.jpg",
  },
  {
    category: "Goalie Gear",
    name: "eBauer Supreme M5 Pro Senior Goalie Equipment Combo",
    description:
      "Following the success of the 3S leg pads, the M5 Pro will feature a crisp digital printed graphic, divided into four visually striking zones. Internally, the M5 Pro will feature a dual density foam core along with a Curv composite reinforced thigh. A single internal break below the knee is featured along a flex profile that is slightly stiffer when compared to the 3S. Finally at the boot the popular 120 degree soft flex returns from previous generations of the Supreme line.",
    price: 1460,
    quantity: 10,
    size: "Large",
    color: "Blue/White",
    image:
      "https://www.goaliemonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/b/a/bauer-ec-supreme-m5-pro-sr.jpg",
  },
  {
    category: "Team Apparel",
    name: "Pittsburgh Penguins Adidas AdiZero Authentic NHL Hockey Jersey",
    description:
      "AdiZero technology is lightweight for breathability and mobility",
    price: 180,
    quantity: 5,
    size: "Medium",
    color: "Pittsburgh",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/a/d/adidas-hockey-jersey-adizero-authentic-nhl-pit-inset9.jpg",
  },
  {
    category: "Goalie Gear",
    name: "CCM Axis A1.5 Junior Certified Straight Bar Goalie Mask",
    description:
      "Starting off with the Shell of the CCM A1.5, a Polycarbonate shell is used to provide protection while being shaped for puck deflection in key impact zones.",
    price: 190,
    quantity: 5,
    size: "Extra Large",
    color: "Black",
    image:
      "https://www.goaliemonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/c/c/ccm-goalie-mask-axis-a1-5-cert-straight-bar-jr.jpg",
  },
  {
    category: "Accessories",
    name: "Bauer Tuuk Lightspeed Edge Senior Holder",
    description:
      "A revolutionary holder design that allows players to change out their blade in seconds. Players now have the ability to quickly and easily change out their steel without having to take off their skates or come out of the game. Get the EDGE over your competition.",
    price: 55,
    quantity: 7,
    size: "Medium",
    color: "White",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/b/a/bauer-hockey-tuuk-lightspeed-edge-holder-sr.jpg",
  },
  {
    category: "Goalie Gear",
    name: "CCM YTFlex Youth Goalie Stick",
    description:
      "A durable yet lightweight shaft and paddle design are engineered to help smaller hands grip the stick the right way, allowing young goalies to hold onto the stick better making their first saves.",
    price: 80,
    quantity: 7,
    size: "Large",
    color: "Black/White",
    image:
      "https://www.goaliemonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/c/c/ccm-goalie-stick-ytflex-yt.jpg",
  },
  {
    category: "Protective Gear",
    name: "Bauer X Senior Hockey Shoulder Pads",
    description:
      "Low profile full coverage shoulder caps. Injection molded sternum with detailed textures. FlexCell comfort foam with sublimated graphic",
    price: 80,
    quantity: 1,
    size: "Small",
    color: "Black/Blue",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/b/a/bauer-hockey-shoulder-pads-x-sr-inset1.jpg",
  },
  {
    category: "Skates",
    name: "Bauer X-LS Senior Ice Hockey Skates",
    description:
      "Perfect skate for beginners or recreational use. 3D Poly Carb Quarter Package. Microfiber liner with anaform ankle pads",
    price: 80,
    quantity: 10,
    size: "Medium",
    color: "Black/White",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/b/a/bauer-hockey-skates-x-ls-sr.jpg",
  },
  {
    category: "Sticks",
    name: "CCM 252 Heat ABS Youth Wood Hockey Stick - '18 Model",
    description: "ABS core with white ash veneer",
    price: 25,
    quantity: 4,
    size: "Extra Large",
    color: "Red",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/c/c/ccm-hockey-stick-252-heat-abs-yth-2018-inset2.jpg",
  },
  {
    category: "Protective Gear",
    name: "Bauer X Senior Hockey Shin Guards",
    description:
      "New injected shin cap with textured details. ErgoDynamic lab knee cap gives a deep fit",
    price: 65,
    quantity: 9,
    size: "Large",
    color: "Black",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/b/a/bauer-hockey-shin-guards-x-sr.jpg",
  },
  {
    category: "Helmets",
    name: "CCM Tacks 910 Hockey Helmet Combo",
    description:
      "Years of leading R&D and performance testing have led to the pinnacle in head protection, thus introducing the new CCM Super Tacks 910 Hockey Helmet Combo from CCM Hockey! Thanks to all-new pro-grade technologies, the Super Tacks 910 Helmet is one of the most advanced on the market.",
    price: 290,
    quantity: 8,
    size: "Large",
    color: "Black",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/c/c/ccm-hockey-helmet-tacks-910-combo.jpg",
  },
  {
    category: "Helmets",
    name: "Warrior Alpha One Hockey Helmet Combo",
    description:
      "True one shell for stiff, strong, lightweight protection. Best in class impact diffusion. Omnishock+ protection system with viconic inserts.Focused impact zones on the frontal lobe, temples and occipital are enhanced with a lightweight diffusion plate called Viconic. Absorbs multiple impacts both linear and twisting",
    price: 290,
    quantity: 6,
    size: "Small",
    color: "Navy Blue",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/w/a/warrior-hockey-helmet-alpha-one-combo-sr.jpg",
  },
  {
    category: "Team Apparel",
    name: "Men's Colorado Avalanche Patrick Roy Jersey",
    description:
      "Pay tribute to the achievements of Patrick Roy by rocking this Colorado Avalanche Premier Breakaway Retired Player jersey from Fanatics Branded. It features authentic throwback Colorado Avalanche graphics and colors. You'll prove that your team loyalty goes beyond the current roster when you sport this Patrick Roy jersey.",
    price: 170,
    quantity: 2,
    size: "Small",
    color: "Colorado",
    image:
      "https://fanatics.frgimages.com/colorado-avalanche/mens-fanatics-branded-patrick-roy-burgundy-colorado-avalanche-breakaway-retired-player-jersey_pi4193000_altimages_ff_4193449-5c033a8b13f7035218a1alt2_full.jpg?_hv=2&w=900",
  },
  {
    category: "Protective Gear",
    name: "Bauer X Senior Hockey Elbow Pads",
    description:
      "Anatomical Split Cap Design. Integrated bicep with molded PE insert",
    price: 45,
    quantity: 6,
    size: "Small",
    color: "Black/Blue",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/b/a/bauer-hockey-elbow-pads-x-sr.jpg",
  },
  {
    category: "Accessories",
    name: "Elite Notorious Pro Ultra Dry Blade Soakers",
    description:
      "Specially designed to easily “slip” over the sharp edges of your skate blades. Provides the ultimate protection from nicks and cuts to both your hockey equipment and bag",
    price: 17,
    quantity: 2,
    size: "Medium",
    color: "Orange",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/e/l/elite-skate-accessories-notorious-pro-ultra-dry-soaker.jpg",
  },
  {
    category: "Protective Gear",
    name: "Bauer Vapor 3X Senior Hockey Equipment Bundle",
    description:
      "Starting off with the front of the Vapor 3X Shoulder Pads, the Ventaprene vest is made to flex with your body, and it allows you the ultimate freedom of mobility while staying very lightweight, giving you the ability to be as fast as possible on the ice. Bauer has also integrated a molded sternum protector with MD foam and PE inserts to deliver top tier protection in this most crucial area.",
    price: 330,
    quantity: 1,
    size: "Large",
    color: "Black/Red",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/b/a/bauer-ex-3x-sr.jpg",
  },
  {
    category: "Accessories",
    name: "Renfrew Clear Shinpad Hockey Tape - 3 Pack",
    description:
      "Ideal for securing and stabilizing protective shin guards. This higly comfortable tape is formulated to provide sufficient elasticity to hold shin guards, or other equipment securely in place, yet allow players to skate comfortably through the game.",
    price: 9,
    quantity: 10,
    size: "1 in x 98 ft",
    color: "Clear",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/0/5/059585755553.jpg",
  },
  {
    category: "Sticks",
    name: "CCM Ultimate Senior Wood Hockey Stick",
    description: "SHAFT - multi-lam construction. BLADE - ultimate ABS core",
    price: 27,
    quantity: 7,
    size: "Extra Large",
    color: "Black/Red",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/c/c/ccm-hockey-stick-ultimate-sr.jpg",
  },
  {
    category: "Goalie Gear",
    name: "Warrior Ritual G6 E+ Youth Goalie Equipment Combo",
    description:
      "A RVH optimized shape on the outer roll makes its return from the G5 on the G6 line. The shape is designed to seal the face and post while in RVH position to prevent pucks from sliding in the gap that can be found on most pads.",
    price: 480,
    quantity: 7,
    size: "Large",
    color: "White/Green/Black",
    image:
      "https://www.goaliemonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/w/a/warrior-ec-ritual-g6-e-plus-yt.jpg",
  },
  {
    category: "Sticks",
    name: "Alkali Revel 4 Standard Senior Hockey Shaft",
    description: "Matte finish. 50% Carbon / 50% Fiberglass",
    price: 65,
    quantity: 1,
    size: "Large",
    color: "Black/Blue",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/a/l/alkali-hockey-shaft-revel-4-standard-sr.jpg",
  },
  {
    category: "Pucks",
    name: "NHL Official Black Ice Hockey Puck",
    description: "NHL Official Black Ice Hockey Puck",
    price: 2,
    quantity: 2,
    size: "Standard",
    color: "Black",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/6/7/676824032031.jpg",
  },
  {
    category: "Protective Gear",
    name: "venenatis lacinia aenean",
    description:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    price: 75,
    quantity: 8,
    size: "Extra Large",
    color: "Aquamarine",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "Bauer X-LS Youth Ice Hockey Skates",
    description:
      "Perfect skate for beginners or recreational use. Velcro Strapping specific to youth model. 3D Poly Carb Quarter Package",
    price: 50,
    quantity: 3,
    size: "Large",
    color: "Black/Green",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/b/a/bauer-hockey-skates-x-ls-yth.jpg",
  },
  {
    category: "Skates",
    name: "CCM Tacks AS-550 Senior Ice Hockey Skates",
    description:
      "New for 2022, CCM Hockey is revamping their ever-popular Tacks skate for the modern power skater. The CCM Tacks AS 550 Senior Ice Hockey Skates are built for strength and power while being lightweight. This skate provides more direct energy transfer and a closer fit to support the most intense skating strides.",
    price: 91,
    quantity: 3,
    size: "Small",
    color: "Black",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/c/c/ccm-hockey-skates-tacks-as-550-sr.jpg",
  },
  {
    category: "Team Apparel",
    name: "Chicago Blackhawks Adidas AdiZero Authentic NHL Hockey Jersey",
    description:
      "Chicago Blackhawks Adidas AdiZero Authentic NHL Hockey Jersey",
    price: 180,
    quantity: 7,
    size: "Small",
    color: "Chicago",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/a/d/adidas-hockey-jersey-adizero-authentic-nhl-chi-inset2.jpg",
  },
  {
    category: "Helmets",
    name: "Warrior Alpha Chrome Pro Stock Hockey Helmet",
    description:
      "With a true one-piece construction, along with various features in the protection department, plus a custom fit system, the Alpha One Pro Helmet is one of the most advanced helmets on the market!",
    price: 270,
    quantity: 8,
    size: "Extra Large",
    color: "Gold",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/6/4/647742455653.jpg",
  },
  {
    category: "Accessories",
    name: "Renfrew White Cloth Hockey Tape - 3 Pack",
    description:
      "Woven cotton cloth tape. Can be used for taping blades, grips, handles and equipment",
    price: 10,
    quantity: 1,
    size: "Roll Length: 1 inch x 27 yards",
    color: "White",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/0/5/059585755546.jpg",
  },
  {
    category: "Skates",
    name: "Bauer X-LP Youth Ice Hockey Skates",
    description:
      "Perfect skate for beginners or recreational use. 3D Poly Carb Quarter Package. Microfiber liner with anaform ankle pads",
    price: 60,
    quantity: 6,
    size: "Extra Large",
    color: "Black",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/b/a/bauer-hockey-skates-x-lp-yth.jpg",
  },
  {
    category: "Team Apparel",
    name: "Pittsburgh Penguins MonkeySports Mesh Hockey Socks",
    description: "100% Pro weight fabric",
    price: 25,
    quantity: 2,
    size: "Large",
    color: "Powder Blue",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/6/2/628931069950.jpg",
  },
  {
    category: "Pucks",
    name: "Winnwell Ice Hockey Puck Pail - 18 Pack",
    description: "Pail of 18 Hockey Pucks",
    price: 25,
    quantity: 4,
    size: "Pail",
    color: "White",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/6/7/676824032130.jpg",
  },
  {
    category: "Helmets",
    name: "Bauer RE-AKT 150 Hockey Helmet Combo",
    description:
      "The Re-Akt 150 Helmet is highlighted by its advanced adjustment system, now known as the FreeForm Adjustment System. This new system allows players to independently change the length and width of the helmet, depending on their preferences, providing unmatched comfort, fit, and protection. Offering up to 18 millimeters of adjustment, the Re-Akt 150 Helmet has 250% more adjustment than any other Bauer Helmet on the market!",
    price: 270,
    quantity: 4,
    size: "Medium",
    color: "White",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/b/a/bauer-hockey-helmet-re-akt-150-combo.jpg",
  },
  {
    category: "Goalie Gear",
    name: "CCM Extreme Flex E5.5 Junior Goalie Equipment Combo",
    description:
      "Starting off with the graphic of the CCM Extreme Flex E5.5 Junior Goalie Leg Pads, CCM has aimed to give a wide range of variety throughout the graphic with intersecting zones strategically placed to achieve unique designs both simple and complex. Similar to the A1.5 line, the E5.5 includes special zones with the all new UV Printed zones seen at the top inner zone and the lower outer zone. These zones allow the pad to be visually elevated by adding that little extra spice to an already top tier designed pad.",
    price: 690,
    quantity: 6,
    size: "Large",
    color: "Black/White/Yellow",
    image:
      "https://www.goaliemonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/c/c/ccm-ec-exflex5-e-5-5-jr.jpg",
  },
  {
    category: "Pucks",
    name: "Winnwell Weighted Training Puck",
    description: "Heavy 10oz weighted puck",
    price: 3,
    quantity: 10,
    size: "Standard",
    color: "Orange",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/w/i/winnwell-hockey-accessories-weighted-training-puck-10oz.jpg",
  },
  {
    category: "Sticks",
    name: "Warrior Alpha DX4 Grip Junior Hockey Stick",
    description:
      "Not only has the technology changed within the Alpha stick line, but so has the colorway, now featuring a sleeker, predominantly grey look. The top third of the stick features the most color, a light blue color, with a DX4 logo at the center. Moving down, a white Alpha DX4 logo can be found on top of the carbon fiber type background of the shaft. The bottom third of the stick is a blacked-out Warrior logo.",
    price: 90,
    quantity: 9,
    size: "Extra Large",
    color: "Light Blue/Black",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/w/a/warrior-hockey-stick-alpha-dx4-grip-jr.jpg",
  },
  {
    category: "Protective Gear",
    name: "duis mattis",
    description:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    price: 33,
    quantity: 6,
    size: "Medium",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "Colorado Avalanche MonkeySports Mesh Hockey Socks",
    description: "100% Pro weight fabric",
    price: 25,
    quantity: 10,
    size: "Medium",
    color: "Colorado",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/m/o/monkeysports-hockey-socks-mesh-col-inset5.jpg",
  },
  {
    category: "Helmets",
    name: "Warrior Covert PX2 Pro Stock Hockey Helmet",
    description:
      "The Warrior Covert PX2 was built to give players the best of both worlds when it comes to traditional feel and high performance in fit and protection. Warrior used an optimal blend of multi-layered VN foams and plastics as the key component of comfort and protection.",
    price: 90,
    quantity: 9,
    size: "Medium",
    color: "Red",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/w/a/warrior-pro-stock-hockey-helmet-covert-px2-sr-inset8.jpg",
  },
  {
    category: "Pucks",
    name: "Winnwell Youth 4oz Training Puck",
    description: "Used for training younger players",
    price: 3,
    quantity: 1,
    size: "Small",
    color: "Blue",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/w/i/winnwell-hockey-accessories-youth-training-puck-4oz.jpg",
  },
  {
    category: "Pucks",
    name: "Alkali Quantum Roller Hockey Puck",
    description: "Specially formulated PVC body",
    price: 8,
    quantity: 4,
    size: "Standard",
    color: "Orange",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/a/l/alkali-accessories-quantum-puck.jpg",
  },
  {
    category: "Accessories",
    name: "Blue Sports Hockey Stick Wax",
    description: "Blue Sports hockey stick wax",
    price: 6,
    quantity: 5,
    size: "Small",
    color: "Clear",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/b/l/blue-sports-accessories-hockey-tin-stick-wax.jpg",
  },
  {
    category: "Team Apparel",
    name: "Chicago Blackhawks MonkeySports Mesh Hockey Socks",
    description: "100% Pro weight fabric",
    price: 25,
    quantity: 8,
    size: "Medium",
    color: "Chicago",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/m/o/monkeysports-hockey-socks-mesh-chi-inset3.jpg",
  },
  {
    category: "Goalie Gear",
    name: "Vaughn Ventus SLR3 Pro Senior Goalie Equipment Combo",
    description:
      "Starting off with the face of the Vaughn Ventus SLR3 goalie leg pad, the graphic is designed as a series of long color zones that start at the lower outside of the pad, travel in toward the middle and then shoot toward the upper outside of the pad, before finally pivoting back towards the center of the pad at the top of the thigh, creating the illusion of a wider leg pad.",
    price: 1580,
    quantity: 9,
    size: "Medium",
    color: "White/Red",
    image:
      "https://www.goaliemonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/v/a/vaughn-ec-ventus-slr3-pro-sr.jpg",
  },
  {
    category: "Goalie Gear",
    name: "Warrior Ritual V1 Pro Senior Goalie Stick",
    description:
      "Starting with the materials, the Warrior Ritual V1 Pro is composed of lightweight Minimus Carbon 1000 which is a high strength and responsive flat carbon-composite weave design that will withstand the impact of high velocity shots and provide key durability keeping the stick feeling fresh.",
    price: 200,
    quantity: 3,
    size: "Small",
    color: "Black",
    image:
      "https://www.goaliemonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/m/s/ms1463455-1.jpg",
  },
  {
    category: "Helmets",
    name: "CCM Tacks 710 Hockey Helmet Combo",
    description:
      "The new Tacks helmet was designed to offer state of the art comfort and fit. With a completley new comfort liner, it delivers an amazing fit. An elite level of protection in incororated with the use of D30 Lite and R.E.D system materials.",
    price: 230,
    quantity: 3,
    size: "Small",
    color: "Navy Blue",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/c/c/ccm-hockey-helmet-tacks-710-combo-inset8.jpg",
  },
  {
    category: "Goalie Gear",
    name: "Warrior Ritual R/F1 Senior Certified Straight Bar Goalie Mask",
    description:
      "Starting with the overall look, Warrior has dialed in the shape of the R/F1 to not only look amazing, but also optimizes chin mobility for the goaltender to have the best vision on the ice possible.",
    price: 220,
    quantity: 2,
    size: "Extra Large",
    color: "White",
    image:
      "https://www.goaliemonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/w/a/warrior-goalie-mask-ritual-r-f1-sr.jpg",
  },
  {
    category: "Goalie Gear",
    name: "ut",
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    price: 27,
    quantity: 3,
    size: "Medium",
    color: "Mauv",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "dapibus augue vel accumsan",
    description:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    price: 2,
    quantity: 9,
    size: "Large",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "Green Biscuit Roller Puck",
    description:
      "The Green Biscuit Roller Hockey Puck combines their famously smooth, fast gliding action with minimal roll in a roller hockey puck that was built for strenuous game play. It features a similar two-piece design that made the Original Green Biscuit the most popular off-ice puck in the industry. This game play version comes with pegs and a slightly softer material that can withstand repeated impacts with goal posts and dasher boards.",
    price: 11,
    quantity: 4,
    size: "Standard",
    color: "Black/Green",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/g/r/green-biscuit-hockey-accessories-roller-puck.jpg",
  },
  {
    category: "Protective Gear",
    name: "erat curabitur gravida",
    description:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    price: 58,
    quantity: 4,
    size: "Medium",
    color: "Aquamarine",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "Blue Sports Wooden Stickhandling Ball",
    description: "Wooden Stickhandling Ball",
    price: 4,
    quantity: 6,
    size: "Ball",
    color: "Wood",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/b/l/blue-sports-accessories-stickhandling-ball.jpg",
  },
  {
    category: "Helmets",
    name: "CCM Super Tacks X Senior Hockey Helmet",
    description:
      "Years of game changing R&D, performance testing, and 3D digital manufacturing have led to the next generation in head protection, the Super Tacks X Helmet from CCM Hockey! Thanks to these all-new innovative technologies, the Super Tacks X Helmet is one of the most advanced on the market.",
    price: 7,
    quantity: 10,
    size: "Large",
    color: "White",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/c/c/ccm-hockey-helmet-super-tacks-x-sr.jpg",
  },
  {
    category: "Protective Gear",
    name: "praesent lectus",
    description:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    price: 91,
    quantity: 9,
    size: "Extra Large",
    color: "Khaki",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "Shock Doctor Gel Max Mouth Guard",
    description:
      "Shock Doctor has made their best mouth guard even better! By improving the gel-fit liner where your teeth sit, the Gel Max is now easier to fit correctly. In addition, they've engineered the mouthguard to have a convertible tether so you can wear your Gel Max strapped or strapless. All these improvements were made without sacrificing the great fit, comfort and protection you expect from the always reliable, never-fail Gel Max Mouthguard.",
    price: 13,
    quantity: 6,
    size: "Adult",
    color: "Black/Blue",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/s/h/shock-doctor-hockey-mouthguard-gel-max.jpg",
  },
  {
    category: "Accessories",
    name: "id luctus nec",
    description:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    price: 31,
    quantity: 9,
    size: "Medium",
    color: "Orange",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "posuere cubilia curae",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    price: 26,
    quantity: 1,
    size: "Small",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "Warrior Covert QR Edge Grip Senior Hockey Stick",
    description:
      "Covert QR Edge technology is unlike anything seen before in a hockey stick. We created the Edge Taper which maximizes the energy transfer by focusing the energy down into the blade for our fastest release yet.",
    price: 260,
    quantity: 6,
    size: "Large",
    color: "Black/Red",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/w/a/warrior-hockey-stick-covert-qr-edge-grip-sr.jpg",
  },
  {
    category: "Team Apparel",
    name: "Stadium Adult Hockey Jersey",
    description: "100% Pro weight fabric",
    price: 30,
    quantity: 7,
    size: "Extra Large",
    color: "White/Black/Red",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/f/i/firstar-hockey-jersey-stadium-wht-blk-red-inset5.jpg",
  },
  {
    category: "Sticks",
    name: "Warrior Covert QRE 40 Grip Senior Hockey Stick",
    description:
      "Starting off with the overall shape and design of the Warrior QRE 40, you will feel the Edge Taper through the stick that drives flex energy through the stick that magnifies power and quick release. This unique stick shape geometry improves the response of the stick and makes a more stable feel that plays stronger.",
    price: 100,
    quantity: 1,
    size: "Large",
    color: "Black",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/w/a/warrior-hockey-stick-covert-qre-40-grip-sr.jpg",
  },
  {
    category: "Accessories",
    name: "tincidunt ante",
    description:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    price: 15,
    quantity: 5,
    size: "Large",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "Bauer Supreme M3 Senior Ice Hockey Skatess",
    description:
      "Constantly pushing innovation with their skates, Bauer Hockey has designed a new Supreme skate for 2022. Engineered for performance driven athletes, the all-new Bauer Supreme M3 Senior Ice Hockey Skates are designed for competitive players looking for the best bang for their buck.",
    price: 280,
    quantity: 1,
    size: "Small",
    color: "Black/Yellow",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/b/a/bauer-hockey-skates-supreme-m3-sr.jpg",
  },
  {
    category: "Goalie Gear",
    name: "aliquam sit",
    description:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    price: 81,
    quantity: 2,
    size: "Medium",
    color: "Orange",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "Men's Washington Capitals Player Jersey",
    description:
      "Men's Washington Capitals Alexander Ovechkin Fanatics Branded Red Breakaway Player Jersey",
    price: 175,
    quantity: 6,
    size: "Large",
    color: "Washington",
    image:
      "https://fanatics.frgimages.com/washington-capitals/mens-fanatics-branded-alexander-ovechkin-red-washington-capitals-breakaway-player-jersey_pi2724000_altimages_ff_2724722alt2_full.jpg?_hv=2&w=900",
  },
  {
    category: "Team Apparel",
    name: "dui vel",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.",
    price: 78,
    quantity: 10,
    size: "Small",
    color: "Crimson",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "eget semper",
    description:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci.",
    price: 79,
    quantity: 5,
    size: "Extra Large",
    color: "Orange",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "CCM Deluxe Hockey Puck Bag - '19 Model",
    description:
      "The CCM Deluxe Hockey Puck Bag is perfect for conveniently and comfortably carrying as many as 60 hockey pucks.",
    price: 40,
    quantity: 9,
    size: "Large",
    color: "Black",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/c/c/ccm-hockey-equipment-bag-deluxe-puck-19-inset3.jpg",
  },
  {
    category: "Sticks",
    name: "quis lectus suspendisse",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    price: 35,
    quantity: 9,
    size: "Extra Large",
    color: "Maroon",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "aliquam sit amet",
    description:
      "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    price: 100,
    quantity: 9,
    size: "Large",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "integer ac neque",
    description:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio.",
    price: 8,
    quantity: 6,
    size: "Large",
    color: "Green",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "eros suspendisse accumsan",
    description:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    price: 38,
    quantity: 4,
    size: "Extra Large",
    color: "Yellow",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "nulla facilisi cras",
    description:
      "Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    price: 69,
    quantity: 10,
    size: "Large",
    color: "Khaki",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "CCM Tacks AS-550 Youth Ice Hockey Skates",
    description:
      "Mesh skin injected quarter package creates a durable boot with structural stiffness. Easy-tie eyelets take the strain out of lacing up your young one’s skates with three easy-tie hook eyelets atop the boot",
    price: 55,
    quantity: 6,
    size: "Small",
    color: "Black",
    image:
      "https://www.hockeymonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/c/c/ccm-hockey-skates-tacks-as-550-yth.jpg",
  },
  {
    category: "Pucks",
    name: "mi integer",
    description:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    price: 42,
    quantity: 7,
    size: "Extra Large",
    color: "Fuscia",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "platea",
    description:
      "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio.",
    price: 21,
    quantity: 8,
    size: "Small",
    color: "Maroon",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "eget massa",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    price: 45,
    quantity: 7,
    size: "Extra Large",
    color: "Khaki",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "semper rutrum",
    description:
      "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
    price: 31,
    quantity: 10,
    size: "Extra Large",
    color: "Aquamarine",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "sociis natoque penatibus",
    description:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    price: 44,
    quantity: 4,
    size: "Small",
    color: "Purple",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "consectetuer",
    description:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    price: 2,
    quantity: 9,
    size: "Medium",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "sed accumsan felis",
    description:
      "Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    price: 57,
    quantity: 9,
    size: "Extra Large",
    color: "Purple",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "cras in",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    price: 85,
    quantity: 1,
    size: "Large",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "semper rutrum nulla nunc",
    description:
      "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    price: 61,
    quantity: 7,
    size: "Small",
    color: "Goldenrod",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "neque vestibulum eget",
    description:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    price: 80,
    quantity: 9,
    size: "Small",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "justo lacinia eget tincidunt",
    description:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    price: 95,
    quantity: 3,
    size: "Extra Large",
    color: "Green",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "eu interdum",
    description:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    price: 49,
    quantity: 2,
    size: "Small",
    color: "Red",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "duis faucibus accumsan",
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    price: 5,
    quantity: 1,
    size: "Medium",
    color: "Orange",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "felis",
    description:
      "Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    price: 74,
    quantity: 1,
    size: "Extra Large",
    color: "Green",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "ante",
    description:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    price: 11,
    quantity: 9,
    size: "Small",
    color: "Crimson",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "potenti cras in",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    price: 75,
    quantity: 6,
    size: "Large",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "et tempus",
    description:
      "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    price: 2,
    quantity: 1,
    size: "Extra Large",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "interdum",
    description:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    price: 97,
    quantity: 3,
    size: "Extra Large",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "interdum in ante",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    price: 78,
    quantity: 1,
    size: "Medium",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "sit",
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    price: 11,
    quantity: 1,
    size: "Large",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "fermentum justo nec",
    description:
      "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    price: 17,
    quantity: 2,
    size: "Large",
    color: "Crimson",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "eget vulputate ut ultrices",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    price: 65,
    quantity: 1,
    size: "Large",
    color: "Green",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "tortor id nulla ultrices",
    description:
      "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    price: 89,
    quantity: 7,
    size: "Extra Large",
    color: "Red",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "vestibulum",
    description:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    price: 37,
    quantity: 6,
    size: "Extra Large",
    color: "Khaki",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "sagittis nam",
    description:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    price: 77,
    quantity: 1,
    size: "Large",
    color: "Red",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "nulla elit ac",
    description:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    price: 51,
    quantity: 7,
    size: "Small",
    color: "Crimson",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "non",
    description:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    price: 35,
    quantity: 2,
    size: "Extra Large",
    color: "Goldenrod",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "sit amet nunc",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    price: 73,
    quantity: 2,
    size: "Extra Large",
    color: "Violet",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "habitasse platea dictumst maecenas",
    description:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    price: 99,
    quantity: 1,
    size: "Large",
    color: "Goldenrod",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "vulputate vitae",
    description:
      "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    price: 88,
    quantity: 7,
    size: "Large",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "nonummy maecenas",
    description: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    price: 3,
    quantity: 6,
    size: "Medium",
    color: "Orange",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "rutrum nulla tellus",
    description:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    price: 33,
    quantity: 5,
    size: "Medium",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "curae duis faucibus",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    price: 11,
    quantity: 4,
    size: "Large",
    color: "Green",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "nulla",
    description:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    price: 16,
    quantity: 10,
    size: "Extra Large",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "vulputate elementum nullam varius",
    description:
      "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    price: 47,
    quantity: 7,
    size: "Extra Large",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "nulla sed",
    description:
      "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    price: 65,
    quantity: 7,
    size: "Large",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "sed magna at nunc",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    price: 42,
    quantity: 8,
    size: "Extra Large",
    color: "Purple",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "ut rhoncus aliquet",
    description:
      "Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    price: 17,
    quantity: 10,
    size: "Medium",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "justo",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    price: 52,
    quantity: 1,
    size: "Small",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "aliquam non",
    description:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    price: 80,
    quantity: 9,
    size: "Small",
    color: "Goldenrod",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "consequat nulla nisl",
    description:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    price: 67,
    quantity: 6,
    size: "Medium",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "tristique fusce",
    description:
      "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    price: 72,
    quantity: 10,
    size: "Extra Large",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "dolor sit",
    description:
      "Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    price: 35,
    quantity: 1,
    size: "Small",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "consectetuer eget rutrum at",
    description:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    price: 92,
    quantity: 5,
    size: "Small",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "maecenas rhoncus aliquam",
    description:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    price: 58,
    quantity: 7,
    size: "Extra Large",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "et magnis dis parturient",
    description:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    price: 13,
    quantity: 1,
    size: "Large",
    color: "Violet",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "justo in",
    description:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    price: 87,
    quantity: 7,
    size: "Extra Large",
    color: "Aquamarine",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "in faucibus orci",
    description: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    price: 7,
    quantity: 9,
    size: "Extra Large",
    color: "Red",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "ullamcorper augue a",
    description:
      "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    price: 96,
    quantity: 8,
    size: "Medium",
    color: "Mauv",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "a suscipit nulla elit",
    description:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    price: 22,
    quantity: 7,
    size: "Large",
    color: "Red",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "blandit",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    price: 33,
    quantity: 2,
    size: "Small",
    color: "Orange",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "mauris",
    description:
      "Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    price: 93,
    quantity: 9,
    size: "Small",
    color: "Orange",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "amet turpis",
    description:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    price: 56,
    quantity: 4,
    size: "Large",
    color: "Crimson",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "odio condimentum id",
    description:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.",
    price: 66,
    quantity: 6,
    size: "Medium",
    color: "Maroon",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "libero quis",
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    price: 94,
    quantity: 4,
    size: "Extra Large",
    color: "Fuscia",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "non quam nec",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    price: 6,
    quantity: 6,
    size: "Large",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "accumsan tellus nisi eu",
    description:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    price: 48,
    quantity: 1,
    size: "Large",
    color: "Fuscia",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "proin leo",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    price: 30,
    quantity: 5,
    size: "Medium",
    color: "Fuscia",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "donec vitae nisi",
    description:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    price: 84,
    quantity: 4,
    size: "Small",
    color: "Yellow",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "nulla dapibus",
    description:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    price: 28,
    quantity: 5,
    size: "Extra Large",
    color: "Violet",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "ac leo pellentesque",
    description:
      "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    price: 97,
    quantity: 5,
    size: "Small",
    color: "Mauv",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "congue",
    description:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    price: 51,
    quantity: 1,
    size: "Large",
    color: "Teal",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "posuere felis",
    description:
      "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
    price: 50,
    quantity: 6,
    size: "Large",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "posuere",
    description:
      "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    price: 9,
    quantity: 1,
    size: "Small",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "pellentesque volutpat dui maecenas",
    description:
      "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    price: 72,
    quantity: 10,
    size: "Extra Large",
    color: "Goldenrod",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "suscipit a",
    description:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    price: 18,
    quantity: 10,
    size: "Medium",
    color: "Yellow",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "sapien cursus vestibulum",
    description:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    price: 78,
    quantity: 4,
    size: "Extra Large",
    color: "Fuscia",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "fermentum justo nec",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    price: 12,
    quantity: 2,
    size: "Small",
    color: "Yellow",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "a feugiat et",
    description:
      "Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.",
    price: 22,
    quantity: 1,
    size: "Small",
    color: "Mauv",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "eget semper rutrum nulla",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    price: 46,
    quantity: 10,
    size: "Small",
    color: "Yellow",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "eu magna vulputate",
    description:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.",
    price: 40,
    quantity: 1,
    size: "Medium",
    color: "Khaki",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "lectus",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    price: 37,
    quantity: 10,
    size: "Medium",
    color: "Aquamarine",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "phasellus id",
    description:
      "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    price: 60,
    quantity: 9,
    size: "Small",
    color: "Fuscia",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "viverra eget",
    description:
      "Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    price: 23,
    quantity: 10,
    size: "Large",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "eget",
    description:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    price: 3,
    quantity: 6,
    size: "Medium",
    color: "Fuscia",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "gravida sem",
    description:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
    price: 91,
    quantity: 5,
    size: "Large",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "quis augue luctus tincidunt",
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    price: 16,
    quantity: 9,
    size: "Small",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "non mi integer",
    description:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    price: 2,
    quantity: 5,
    size: "Medium",
    color: "Khaki",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "ipsum",
    description:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    price: 64,
    quantity: 6,
    size: "Medium",
    color: "Red",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "eleifend pede libero",
    description:
      "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    price: 22,
    quantity: 4,
    size: "Extra Large",
    color: "Green",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "leo pellentesque ultrices",
    description:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    price: 33,
    quantity: 2,
    size: "Extra Large",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "id nisl",
    description:
      "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    price: 89,
    quantity: 3,
    size: "Medium",
    color: "Violet",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "et tempus",
    description:
      "Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    price: 69,
    quantity: 6,
    size: "Extra Large",
    color: "Goldenrod",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "integer",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    price: 19,
    quantity: 3,
    size: "Small",
    color: "Aquamarine",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "iaculis diam",
    description:
      "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    price: 96,
    quantity: 9,
    size: "Large",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "et",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    price: 47,
    quantity: 4,
    size: "Medium",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "nam nulla",
    description:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    price: 92,
    quantity: 6,
    size: "Medium",
    color: "Teal",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "in hac habitasse",
    description:
      "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
    price: 72,
    quantity: 7,
    size: "Small",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "quam nec",
    description:
      "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    price: 90,
    quantity: 9,
    size: "Extra Large",
    color: "Fuscia",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "quisque ut erat curabitur",
    description:
      "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    price: 74,
    quantity: 8,
    size: "Small",
    color: "Yellow",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "imperdiet et commodo vulputate",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    price: 37,
    quantity: 2,
    size: "Large",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "commodo placerat praesent blandit",
    description:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    price: 100,
    quantity: 8,
    size: "Large",
    color: "Aquamarine",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "dapibus nulla suscipit ligula",
    description:
      "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    price: 88,
    quantity: 8,
    size: "Medium",
    color: "Maroon",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "diam",
    description:
      "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    price: 94,
    quantity: 10,
    size: "Extra Large",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "justo aliquam quis",
    description:
      "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
    price: 68,
    quantity: 1,
    size: "Medium",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "massa",
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    price: 91,
    quantity: 4,
    size: "Medium",
    color: "Turquoise",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "magnis",
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    price: 47,
    quantity: 2,
    size: "Medium",
    color: "Green",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "ante nulla justo aliquam",
    description:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    price: 44,
    quantity: 4,
    size: "Large",
    color: "Yellow",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "id massa id",
    description:
      "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
    price: 65,
    quantity: 3,
    size: "Small",
    color: "Purple",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "sapien cursus vestibulum",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.",
    price: 83,
    quantity: 2,
    size: "Medium",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "justo nec",
    description:
      "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    price: 40,
    quantity: 4,
    size: "Medium",
    color: "Aquamarine",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "dui",
    description:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi.",
    price: 34,
    quantity: 7,
    size: "Small",
    color: "Teal",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "at ipsum",
    description:
      "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    price: 63,
    quantity: 1,
    size: "Medium",
    color: "Khaki",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "curabitur",
    description:
      "Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    price: 99,
    quantity: 3,
    size: "Large",
    color: "Maroon",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "convallis duis",
    description:
      "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    price: 33,
    quantity: 10,
    size: "Large",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "aliquam",
    description:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum.",
    price: 64,
    quantity: 8,
    size: "Large",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "sed ante vivamus tortor",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    price: 98,
    quantity: 4,
    size: "Medium",
    color: "Khaki",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "nullam sit",
    description:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    price: 54,
    quantity: 9,
    size: "Large",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "ipsum integer",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    price: 28,
    quantity: 7,
    size: "Small",
    color: "Goldenrod",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "sapien cum sociis",
    description: "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    price: 90,
    quantity: 2,
    size: "Medium",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "at feugiat non pretium",
    description:
      "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    price: 14,
    quantity: 4,
    size: "Medium",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "vestibulum quam",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    price: 48,
    quantity: 7,
    size: "Large",
    color: "Purple",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "vestibulum velit id",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    price: 99,
    quantity: 10,
    size: "Large",
    color: "Fuscia",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "maecenas pulvinar lobortis",
    description:
      "Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum.",
    price: 20,
    quantity: 7,
    size: "Medium",
    color: "Khaki",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "lobortis",
    description:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    price: 48,
    quantity: 9,
    size: "Medium",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "consequat dui",
    description:
      "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.",
    price: 75,
    quantity: 4,
    size: "Small",
    color: "Fuscia",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "primis in faucibus",
    description:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    price: 92,
    quantity: 10,
    size: "Small",
    color: "Violet",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "lobortis",
    description:
      "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
    price: 46,
    quantity: 8,
    size: "Large",
    color: "Teal",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "ac nibh",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
    price: 67,
    quantity: 4,
    size: "Large",
    color: "Maroon",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "etiam pretium iaculis",
    description:
      "Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    price: 35,
    quantity: 6,
    size: "Extra Large",
    color: "Red",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "ligula suspendisse ornare consequat",
    description:
      "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    price: 21,
    quantity: 8,
    size: "Large",
    color: "Crimson",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "lacus purus",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    price: 16,
    quantity: 6,
    size: "Large",
    color: "Orange",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "id sapien",
    description:
      "Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    price: 42,
    quantity: 6,
    size: "Large",
    color: "Maroon",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "dapibus dolor",
    description:
      "Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    price: 43,
    quantity: 1,
    size: "Small",
    color: "Crimson",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "sed vel enim",
    description:
      "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    price: 43,
    quantity: 5,
    size: "Extra Large",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "parturient",
    description:
      "Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    price: 97,
    quantity: 9,
    size: "Medium",
    color: "Aquamarine",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "ligula in lacus curabitur",
    description:
      "Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    price: 18,
    quantity: 7,
    size: "Large",
    color: "Purple",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "aenean auctor gravida",
    description:
      "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue.",
    price: 38,
    quantity: 4,
    size: "Extra Large",
    color: "Maroon",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "venenatis",
    description:
      "Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    price: 89,
    quantity: 9,
    size: "Medium",
    color: "Mauv",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "quam suspendisse",
    description:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    price: 2,
    quantity: 4,
    size: "Large",
    color: "Crimson",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "magna vestibulum aliquet",
    description:
      "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    price: 43,
    quantity: 8,
    size: "Small",
    color: "Yellow",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "elit sodales",
    description:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.",
    price: 44,
    quantity: 7,
    size: "Large",
    color: "Maroon",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "sed nisl nunc",
    description:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet.",
    price: 6,
    quantity: 3,
    size: "Medium",
    color: "Maroon",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "nibh",
    description:
      "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo.",
    price: 22,
    quantity: 10,
    size: "Large",
    color: "Yellow",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "gravida sem praesent id",
    description:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh.",
    price: 100,
    quantity: 8,
    size: "Large",
    color: "Red",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "vel lectus in",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    price: 28,
    quantity: 8,
    size: "Extra Large",
    color: "Goldenrod",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "mauris ullamcorper purus sit",
    description:
      "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    price: 56,
    quantity: 8,
    size: "Extra Large",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "scelerisque",
    description:
      "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo.",
    price: 3,
    quantity: 7,
    size: "Small",
    color: "Fuscia",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "nulla neque libero convallis",
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    price: 43,
    quantity: 7,
    size: "Medium",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "maecenas tristique",
    description:
      "Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    price: 65,
    quantity: 4,
    size: "Small",
    color: "Purple",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "pede venenatis non sodales",
    description:
      "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    price: 62,
    quantity: 8,
    size: "Extra Large",
    color: "Crimson",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "imperdiet nullam",
    description:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    price: 37,
    quantity: 5,
    size: "Small",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "ante nulla",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    price: 46,
    quantity: 5,
    size: "Medium",
    color: "Teal",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "ac est",
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    price: 48,
    quantity: 10,
    size: "Large",
    color: "Red",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "massa id",
    description:
      "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    price: 28,
    quantity: 3,
    size: "Medium",
    color: "Orange",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "nibh in",
    description:
      "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
    price: 34,
    quantity: 4,
    size: "Extra Large",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "amet",
    description:
      "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero.",
    price: 55,
    quantity: 10,
    size: "Small",
    color: "Violet",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "auctor gravida sem praesent",
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
    price: 37,
    quantity: 3,
    size: "Medium",
    color: "Yellow",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "ac diam cras",
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    price: 4,
    quantity: 8,
    size: "Large",
    color: "Green",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "elementum in",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    price: 75,
    quantity: 6,
    size: "Large",
    color: "Teal",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "a ipsum integer",
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    price: 77,
    quantity: 7,
    size: "Medium",
    color: "Goldenrod",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Protective Gear",
    name: "aenean sit amet",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
    price: 71,
    quantity: 5,
    size: "Small",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "curabitur in libero ut",
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    price: 59,
    quantity: 10,
    size: "Small",
    color: "Teal",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Goalie Gear",
    name: "at nibh",
    description:
      "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
    price: 20,
    quantity: 10,
    size: "Large",
    color: "Violet",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "convallis",
    description:
      "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    price: 47,
    quantity: 5,
    size: "Extra Large",
    color: "Red",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "faucibus orci luctus",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    price: 38,
    quantity: 2,
    size: "Large",
    color: "Puce",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "mi pede malesuada in",
    description:
      "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    price: 95,
    quantity: 7,
    size: "Extra Large",
    color: "Aquamarine",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "primis in faucibus",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum.",
    price: 8,
    quantity: 5,
    size: "Large",
    color: "Pink",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Helmets",
    name: "nulla",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio.",
    price: 67,
    quantity: 6,
    size: "Large",
    color: "Goldenrod",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "consequat",
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim.",
    price: 82,
    quantity: 2,
    size: "Large",
    color: "Violet",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "cras non velit",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat. In congue. Etiam justo.",
    price: 83,
    quantity: 1,
    size: "Small",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "eu",
    description:
      "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    price: 45,
    quantity: 5,
    size: "Medium",
    color: "Crimson",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Accessories",
    name: "sit",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante.",
    price: 47,
    quantity: 4,
    size: "Medium",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "consequat in",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis.",
    price: 43,
    quantity: 10,
    size: "Medium",
    color: "Aquamarine",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Sticks",
    name: "amet",
    description:
      "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat.",
    price: 24,
    quantity: 5,
    size: "Medium",
    color: "Teal",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Team Apparel",
    name: "pellentesque volutpat dui maecenas",
    description:
      "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.",
    price: 3,
    quantity: 10,
    size: "Medium",
    color: "Teal",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Skates",
    name: "nisl",
    description:
      "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
    price: 42,
    quantity: 9,
    size: "Extra Large",
    color: "Khaki",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "id ligula",
    description:
      "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.",
    price: 17,
    quantity: 2,
    size: "Large",
    color: "Indigo",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
  {
    category: "Pucks",
    name: "ligula sit amet",
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor.",
    price: 78,
    quantity: 6,
    size: "Small",
    color: "Blue",
    image:
      "https://i.pinimg.com/736x/f9/9a/ea/f99aea99c36f9b33c470742a02601a27--hockey-gear-ice-hockey.jpg",
  },
];

module.exports = { fakeProducts };
