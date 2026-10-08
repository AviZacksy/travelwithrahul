const fs = require('fs');
const path = require('path');
const https = require('https');

const places = {
  gujarat: [
    { query: "Somnath temple", name: 'Somenath jyotirlinga temple', file: "somnath.jpg" },
    { query: "Dwarkadhish Temple", name: 'Dwarkadhish temple', file: "dwarkadhish.jpg" },
    { query: "Nageshvara Jyotirlinga", name: 'Nageswar jyotirlinga temple', file: "nageshwar.jpg" },
    { query: "Bet Dwarka", name: 'Beyt dwarka temple', file: "bet_dwarka.jpg" },
    { query: "Kalika Mata Temple, Pavagadh", name: 'Pawagad maa kali temple', file: "pavagadh.jpg" },
    { query: "Statue of Unity", name: 'Statue of unity', file: "statue_of_unity.jpg" },
  ],
  'uttar-pradesh': [
    { query: "Kashi Vishwanath Temple", name: 'Kashi vishwanath jyotirlinga temple', file: "kashi_vishwanath.jpg" },
    { query: "Ram Mandir, Ayodhya", name: 'Ayodhya Ram ji Temple', file: "ayodhya_ram.jpg" },
    { query: "Chitrakoot, Madhya Pradesh", name: 'Chitrakoot Temple', file: "chitrakoot.jpg" },
    { query: "Krishna Janmasthan Temple Complex", name: 'Mathura Temple', file: "mathura.jpg" },
    { query: "Prem Mandir, Vrindavan", name: 'Vrindavan Temple', file: "vrindavan.jpg" },
    { query: "Taj Mahal", name: 'Agra Taj Mahal', file: "taj_mahal.jpg" },
  ],
  uttarakhand: [
    { query: "Har ki Pauri", name: 'Haridwar Ganga River', file: "haridwar.jpg" },
    { query: "Ram Jhula", name: 'Rishikesh Ram jhula', file: "ram_jhula.jpg" },
    { query: "Kedarnath Temple", name: 'Kedarnath jyotirlinga Temple', file: "kedarnath.jpg" },
    { query: "Badrinath Temple", name: 'Badarinath Temple', file: "badrinath.jpg" },
    { query: "Gangotri Temple", name: 'Gangotri Temple', file: "gangotri.jpg" },
    { query: "Yamunotri Temple", name: 'Yamunotri Temple', file: "yamunotri.jpg" },
    { query: "Nainital Lake", name: 'Nenital', file: "nainital.jpg" },
    { query: "Mussoorie", name: 'Mussoorie', file: "mussoorie.jpg" },
  ],
  'madhya-pradesh': [
    { query: "Mahakaleshwar Jyotirlinga", name: 'Mahakaleshwar Jyotirlinga temple Ujjain', file: "mahakaleshwar.jpg" },
    { query: "Omkareshwar Temple", name: 'Omkareshwar jyotirlinga Temple', file: "omkareshwar.jpg" },
    { query: "Maheshwar", name: 'Maheshwar Fort', file: "maheshwar.jpg" },
    { query: "Bagalamukhi", name: 'Bagnlamukhi Temple', file: "bagalamukhi.jpg" },
    { query: "Maihar", name: 'Maihar sharda mata Temple', file: "maihar.jpg" },
    { query: "Dewas", name: 'Dewas Chamunda Mata Temple', file: "dewas.jpg" },
    { query: "Khajuraho Group of Monuments", name: 'Khajuraho Fort', file: "khajuraho.jpg" },
    { query: "Pachmarhi", name: 'Pachmarhi Hill station', file: "pachmarhi.jpg" },
    { query: "Sanchi", name: 'Sanchi Stupa', file: "sanchi.jpg" },
  ]
};

const outputDir = path.join(__dirname, 'public', 'states_images');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function fetchImage(query) {
  const url = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=thumbnail&pithumbsize=800&titles=${encodeURIComponent(query)}`;
  const options = { headers: { 'User-Agent': 'TravelAppBot/1.0 (test@example.com)' } };
  
  return new Promise((resolve, reject) => {
    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          const pages = json.query.pages;
          const pageId = Object.keys(pages)[0];
          if (pageId !== '-1' && pages[pageId].thumbnail) {
            resolve(pages[pageId].thumbnail.source);
          } else {
            resolve(null);
          }
        } catch (e) {
          resolve(null);
        }
      });
    }).on('error', reject);
  });
}

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    const options = { headers: { 'User-Agent': 'TravelAppBot/1.0 (test@example.com)' } };
    https.get(url, options, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function main() {
  for (const [state, locations] of Object.entries(places)) {
    console.log(`Processing ${state}...`);
    for (const loc of locations) {
      console.log(`  Fetching ${loc.query}...`);
      let imgUrl = await fetchImage(loc.query);
      
      // Fallback for missing images
      if (!imgUrl) {
         console.log(`    Not found, using generic placeholder`);
         imgUrl = `https://picsum.photos/seed/${encodeURIComponent(loc.query)}/800/600`;
      }
      
      const dest = path.join(outputDir, loc.file);
      try {
        await downloadImage(imgUrl, dest);
        console.log(`    Saved to ${loc.file}`);
      } catch (e) {
        console.log(`    Failed to download: ${e.message}`);
      }
    }
  }
  console.log("Done!");
}

main();
