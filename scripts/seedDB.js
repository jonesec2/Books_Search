const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
   process.env.MONGODB_URI ||
   "mongodb://localhost/googleBooks"
);

const bookSeed = [
   {
      title: "The Hunger Games",
      authors: ["Suzanne Collins"],
      description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
      image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"

   },
   {
      title: "Wuthering Heights",
      authors: ["Emily Bronte"],
      description: "Published in 1845, Emily Bronte’s gothic novel set on the windy moors of Yorkshire is the story of the doomed love between Catherine Earnshaw and her father’s adopted son, Heathcliff. The book was initially poorly received by many critics who found its dark, tragic story needlessly harsh and disturbing. That opinion has not endured, and the only novel Emily Bronte published is now considered to be one of the great classics of English literature.",
      image: "https://books.google.com/books/content?id=KhMYAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      link: "https://www.google.com/books/edition/Wuthering_Heights/KhMYAAAAYAAJ?hl=en&gbpv=1&dq=wuthering+heights&printsec=frontcover"
   },
   {
      title: "The Three Musketeers",
      authors: ["Alexandre Dumas"],
      description: "One of the preeminent novels by French writer Alexandre Dumas, this swashbuckling tale follows a group of honorable 17th-century swordsmen who must contend with powerful adversaries scheming against the queen. Determined to join the royal guard, young d'Artagnan leaves his country home and travels to Paris, where he unintentionally angers Aramis, Athos, and Porthos, the esteemed Three Musketeers. Eventually winning the trust and admiration of the formidable trio of fighters, d'Artagnan joins them in their quest to thwart the plans of the sinister Cardinal Richelieu.",
      image: "https://books.google.com/books/content?id=KW0YAAAAYAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      link: "https://books.google.com/books?id=KW0YAAAAYAAJ&newbks=1&newbks_redir=0&hl=eni"
   }
];

db.Book
   .remove({})
   .then(() => db.Book.collection.insertMany(bookSeed))
   .then(data => {
      console.log(data.result.n + " records inserted!");
      process.exit(0);
   })
   .catch(err => {
      console.error(err);
      process.exit(1);
   });
