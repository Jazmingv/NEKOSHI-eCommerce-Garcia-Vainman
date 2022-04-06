const mockProducts = [
  {
    id: 1,
    category: "Classics",
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    imageUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1383718290l/13079982.jpg",
    sinopsis:
      "Guy Montag is a fireman. His job is to destroy the most illegal of commodities, the printed book, along with the houses in which they are hidden. Montag never questions the destruction and ruin his actions produce, returning each day to his bland life and wife, Mildred, who spends all day with her television “family.” But when he meets an eccentric young neighbor, Clarisse, who introduces him to a past where people didn’t live in fear and to a present where one sees the world through the ideas in books instead of the mindless chatter of television, Montag begins to question everything he has ever known.",
    price: 12.99,
    initialQuantity: 0,
    currentStock: 37,
  },
  {
    id: 2,
    category: "Classics",
    title: "To Kill A Mockingbird",
    author: "Harper Lee",
    imageUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553383690l/2657.jpg",
    sinopsis: `A lawyer's advice to his children as he defends the real mockingbird of Harper Lee's classic novel - a black man falsely charged with the rape of a white girl. Through the young eyes of Scout and Jem Finch, Harper Lee explores with exuberant humour the irrationality of adult attitudes to race and class in the Deep South of the 1930s.
                The conscience of a town steeped in prejudice, violence and hypocrisy is pricked by the stamina of one man's struggle for justice. But the weight of history will only tolerate so much.
                To Kill a Mockingbird is a coming-of-age story, an anti-racist novel, a historical drama of the Great Depression and a sublime example of the Southern writing tradition.`,
    price: 22.37,
    initialQuantity: 0,
    currentStock: 29,
  },
  {
    id: 3,
    category: "Classics",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    imageUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1490528560l/4671._SY475_.jpg",
    sinopsis: `The Great Gatsby is a Great American Novel of the 20th century. Set in the Jazz Age on Long Island, near New York City, The Great Gatsby depicts the tragic story of Jay Gatsby, a self-made millionaire, and his pursuit of Daisy Buchanan, a wealthy young woman who is his former lover. His doomed love story for the ultimately unattainable Daisy is considered an American dream that is never fulfilled.`,
    price: 4.99,
    initialQuantity: 0,
    currentStock: 87,
  },
  {
    id: 4,
    category: "Classics",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    imageUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398034300l/5107.jpg",
    sinopsis: `It's Christmas time and Holden Caulfield has just been expelled from yet another school. Fleeing the crooks at Pencey Prep, he pinballs around New York City seeking solace in fleeting encounters - shooting the bull with strangers in dive hotels, wandering alone round Central Park, getting beaten up by pimps and cut down by erstwhile girlfriends. The city is beautiful and terrible, in all its neon loneliness and seedy glamour, its mingled sense of possibility and emptiness. Holden passes through it like a ghost, thinking always of his kid sister Phoebe, the only person who really understands him, and his determination to escape the phonies and find a life of true meaning.`,
    price: 15.99,
    initialQuantity: 0,
    currentStock: 17,
  },
  {
    id: 5,
    category: "Classics",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    imageUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1320399351l/1885.jpg",
    sinopsis: `Pride and Prejudice is a novel of manners by Jane Austen, first published in 1813. The story follows the main character, Elizabeth Bennet, as she deals with issues of manners, upbringing, morality, education, and marriage in the society of the landed gentry of the British Regency.When Elizabeth Bennet meets Fitzwilliam Darcy for the first time at a ball, she writes him off as an arrogant and obnoxious man. He not only acts like an insufferable snob, but she also overhears him rejecting the very idea of asking her for a dance! Through this tale about two warring hearts, Austen weaves a witty satire about life in eighteenth century England.`,
    price: 8.99,
    initialQuantity: 0,
    currentStock: 51,
  },
  {
    id: 6,
    category: "Classics",
    title: "The Metamorphossis",
    author: "Franz Kafka",
    imageUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1646444605l/485894._SY475_.jpg",
    sinopsis: `"As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect. He was laying on his hard, as it were armor-plated, back and when he lifted his head a little he could see his domelike brown belly divided into stiff arched segments on top of which the bed quilt could hardly keep in position and was about to slide off completely. His numerous legs, which were pitifully thin compared to the rest of his bulk, waved helplessly before his eyes."
                With it's startling, bizarre, yet surprisingly funny first opening, Kafka begins his masterpiece, The Metamorphosis. It is the story of a young man who, transformed overnight into a giant beetle-like insect, becomes an object of disgrace to his family, an outsider in his own home, a quintessentially alienated man. A harrowing—though absurdly comic—meditation on human feelings of inadequacy, guilt, and isolation, The Metamorphosis has taken its place as one of the most widely read and influential works of twentieth-century fiction.`,
    price: 3.99,
    initialQuantity: 0,
    currentStock: 69,
  },
  {
    id: 7,
    category: "Science Fiction",
    title: "Foundation (The Foundation Series)",
    author: "Isaac Asimov",
    imageUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1417900846l/29579.jpg",
    sinopsis: `For twelve thousand years the Galactic Empire has ruled supreme. Now it is dying. Only Hari Seldon, creator of the revolutionary science of psychohistory, can see into the future—a dark age of ignorance, barbarism, and warfare that will last thirty thousand years. To preserve knowledge and save humanity, Seldon gathers the best minds in the Empire—both scientists and scholars—and brings them to a bleak planet at the edge of the galaxy to serve as a beacon of hope for future generations. He calls this sanctuary the Foundation.
                But soon the fledgling Foundation finds itself at the mercy of corrupt warlords rising in the wake of the receding Empire. And mankind’s last best hope is faced with an agonizing choice: submit to the barbarians and live as slaves—or take a stand for freedom and risk total destruction.`,
    price: 38.5,
    initialQuantity: 0,
    currentStock: 72,
  },
  {
    id: 8,
    category: "Science Fiction",
    title: "Babel-17",
    author: "Samuel R. Delany",
    imageUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1257546421l/1199688.jpg",
    sinopsis: `Babel-17 is all about the power of language. Humanity, which has spread throughout the universe, is involved in a war with the Invaders, who have been covertly assassinating officials and sabotaging spaceships. The only clues humanity has to go on are strange alien messages that have been intercepted in space. Poet and linguist Rydra Wong is determined to understand the language and stop the alien threat.`,
    price: 16.48,
    initialQuantity: 0,
    currentStock: 98,
  },
  {
    id: 9,
    category: "Science Fiction",
    title: "Ringworld (Ringworld #1)",
    author: "Larry Niven",
    imageUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1408793358l/61179.jpg",
    sinopsis: `The artefact is a circular ribbon of matter six hundred million miles long and ninety million miles in radius. Pierson's puppeteers, the aliens who discovered it, are understandably wary of encountering the builders of such an immense structure and have assembled a team of two humans, a mad puppeteer and a kzin, a huge cat-like alien, to explore it. But a crash landing on the vast edifice forces the crew on a desperate and dangerous trek across the Ringworld.`,
    price: 14.13,
    initialQuantity: 0,
    currentStock: 13,
  },
  {
    id: 10,
    category: "Science Fiction",
    title: "Ancillary Justice (Imperial Radch #1)",
    author: "Ann Leckie",
    imageUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1398034300l/5107.jpg",
    sinopsis: `On a remote, icy planet, the soldier known as Breq is drawing closer to completing her quest.
                Once, she was the Justice of Toren - a colossal starship with an artificial intelligence linking thousands of soldiers in the service of the Radch, the empire that conquered the galaxy.
                Now, an act of treachery has ripped it all away, leaving her with one fragile human body, unanswered questions, and a burning desire for vengeance.`,
    price: 17.99,
    initialQuantity: 0,
    currentStock: 81,
  },
  {
    id: 11,
    category: "Science Fiction",
    title: "Rendezvous with Rama (Rama #1)",
    author: "Arthur C. Clarke",
    imageUrl: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1405456427l/112537.jpg",
    sinopsis: `At first, only a few things are known about the celestial object that astronomers dub Rama. It is huge, weighing more than ten trillion tons. And it is hurtling through the solar system at an inconceivable speed. Then a space probe confirms the unthinkable: Rama is no natural object. It is, incredibly, an interstellar spacecraft. Space explorers and planet-bound scientists alike prepare for mankind's first encounter with alien intelligence. It will kindle their wildest dreams... and fan their darkest fears. For no one knows who the Ramans are or why they have come. And now the moment of rendezvous awaits — just behind a Raman airlock door.`,
    price: 25.75,
    initialQuantity: 0,
    currentStock: 92,
  },
  {
    id: 12,
    category: "Science Fiction",
    title: "Dune (Dune #1)",
    author: "Frank Herbert",
    imageUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555447414l/44767458.jpg",
    sinopsis: `Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for...
                When House Atreides is betrayed, the destruction of Paul’s family will set the boy on a journey toward a destiny greater than he could ever have imagined. And as he evolves into the mysterious man known as Muad’Dib, he will bring to fruition humankind’s most ancient and unattainable dream.`,
    price: 31.99,
    initialQuantity: 0,
    currentStock: 100,
  },
  {
    id: 13,
    category: "Fantasy",
    title: "Harry Potter and the Philosopher's Stone (Harry Potter #1)",
    author: "J. K. Rowling",
    imageUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SY475_.jpg",
    sinopsis: `Harry Potter's life is miserable. His parents are dead and he's stuck with his heartless relatives, who force him to live in a tiny closet under the stairs. But his fortune changes when he receives a letter that tells him the truth about himself: he's a wizard. A mysterious visitor rescues him from his relatives and takes him to his new home, Hogwarts School of Witchcraft and Wizardry.
                After a lifetime of bottling up his magical powers, Harry finally feels like a normal kid. But even within the Wizarding community, he is special. He is the boy who lived: the only person to have ever survived a killing curse inflicted by the evil Lord Voldemort, who launched a brutal takeover of the Wizarding world, only to vanish after failing to kill Harry.
                Though Harry's first year at Hogwarts is the best of his life, not everything is perfect. There is a dangerous secret object hidden within the castle walls, and Harry believes it's his responsibility to prevent it from falling into evil hands. But doing so will bring him into contact with forces more terrifying than he ever could have imagined.
                Full of sympathetic characters, wildly imaginative situations, and countless exciting details, the first installment in the series assembles an unforgettable magical world and sets the stage for many high-stakes adventures to come.`,
    price: 18.59,
    initialQuantity: 0,
    currentStock: 76,
  },
  {
    id: 14,
    category: "Fantasy",
    title: "The Hunger Games (The Hunger Games, #1)",
    author: "Suzanne Collins",
    imageUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1586722975l/2767052.jpg",
    sinopsis: `In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.
                Sixteen-year-old Katniss Everdeen, who lives alone with her mother and younger sister, regards it as a death sentence when she steps forward to take her sister's place in the Games. But Katniss has been close to dead before—and survival, for her, is second nature. Without really meaning to, she becomes a contender. But if she is to win, she will have to start making choices that weight survival against humanity and life against love.`,
    price: 13.21,
    initialQuantity: 0,
    currentStock: 59,
  },
  {
    id: 15,
    category: "Fantasy",
    title: "The Lightning Thief (Percy Jackson and the Olympians #1)",
    author: "Rick Riordan",
    imageUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1400602609l/28187.jpg",
    sinopsis: `Percy Jackson is a good kid, but he can't seem to focus on his schoolwork or control his temper. And lately, being away at boarding school is only getting worse - Percy could have sworn his pre-algebra teacher turned into a monster and tried to kill him. When Percy's mom finds out, she knows it's time that he knew the truth about where he came from, and that he go to the one place he'll be safe. She sends Percy to Camp Half Blood, a summer camp for demigods (on Long Island), where he learns that the father he never knew is Poseidon, God of the Sea. Soon a mystery unfolds and together with his friends—one a satyr and the other the demigod daughter of Athena - Percy sets out on a quest across the United States to reach the gates of the Underworld (located in a recording studio in Hollywood) and prevent a catastrophic war between the gods.`,
    price: 18.8,
    initialQuantity: 0,
    currentStock: 74,
  },
  {
    id: 16,
    category: "Fantasy",
    title: "The Hobbit, or There and Back Again",
    author: "J.R.R. Tolkien",
    imageUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546071216l/5907.jpg",
    sinopsis: `In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort. Written for J.R.R. Tolkien's own children, The Hobbit met with instant critical acclaim when it was first published in 1937. Now recognized as a timeless classic, this introduction to the hobbit Bilbo Baggins, the wizard Gandalf, Gollum, and the spectacular world of Middle-earth recounts of the adventures of a reluctant hero, a powerful and dangerous ring, and the cruel dragon Smaug the Magnificent.`,
    price: 12.69,
    initialQuantity: 0,
    currentStock: 35,
  },
  {
    id: 17,
    category: "Fantasy",
    title: "Circe",
    author: "Madeline Miller",
    imageUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1565909496l/35959740._SY475_.jpg",
    sinopsis: `In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born. But Circe is a strange child - not powerful, like her father, nor viciously alluring like her mother. Turning to the world of mortals for companionship, she discovers that she does possess power - the power of witchcraft, which can transform rivals into monsters and menace the gods themselves.
                Threatened, Zeus banishes her to a deserted island, where she hones her occult craft, tames wild beasts and crosses paths with many of the most famous figures in all of mythology, including the Minotaur, Daedalus and his doomed son Icarus, the murderous Medea, and, of course, wily Odysseus.
                But there is danger, too, for a woman who stands alone, and Circe unwittingly draws the wrath of both men and gods, ultimately finding herself pitted against one of the most terrifying and vengeful of the Olympians. To protect what she loves most, Circe must summon all her strength and choose, once and for all, whether she belongs with the gods she is born from, or the mortals she has come to love.`,
    price: 15.99,
    initialQuantity: 0,
    currentStock: 6,
  },
  {
    id: 18,
    category: "Fantasy",
    title: "The Lion, the Witch and the Wardrobe (Narnia #2)",
    author: "C.S. Lewis",
    imageUrl:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353029077l/100915.jpg",
    sinopsis: `Narnia… the land beyond the wardrobe door, a secret place frozen in eternal winter, a magical country waiting to be set free.
                Lucy is the first to find the secret of the wardrobe in the professor's mysterious old house. At first her brothers and sister don't believe her when she tells of her visit to the land of Narnia. But soon Edmund, then Peter and Susan step through the wardrobe themselves. In Narnia they find a country buried under the evil enchantment of the White Witch. When they meet the Lion Aslan, they realize they've been called to a great adventure and bravely join the battle to free Narnia from the Witch's sinister spell.`,
    price: 12.49,
    initialQuantity: 0,
    currentStock: 33,
  },
];

export default mockProducts;
