// Lista de álbuns (com 20 álbuns por categoria para cada seção)
const albums = [
    // 12 álbuns brasileiros com a categoria "Brasil"
    { id: 1, title: "Os Mutantes", image: "albuns/Os_Mutantes.jpg", category: "Brasil", link:"https://david-1969.github.io/os-mutantes/" },
    { id: 2, title: "A Peleja do Diabo contra o Dono do Céu", image: "albuns/a peleja.jpg", category: "Brasil",link:"https://david-1969.github.io/ze-ramalho-2/" },
    { id: 3, title: "A Tabua de Esmeralda", image: "albuns/A_Tábua_de_Esmeralda.jpg", category: "Brasil", link: "https://david-1969.github.io/a-tabua-de-esmeralda/" },
    { id: 4, title: "Acabou Chorare", image: "albuns/acabouChorare.jpg", category: "Brasil", link: "https://david-1969.github.io/acabou-chorare/" },
    { id: 5, title: "Chega de Saudade", image: "albuns/ChegaSaudade.jpg", category: "Brasil", link: "https://david-1969.github.io/Chega-de-saudade/" },
    { id: 6, title: "Gita", image: "albuns/Gita.jpg", category: "Brasil", link: "https://david-1969.github.io/Gita/" },
    { id: 7, title: "Construção", image: "albuns/Construção.jpg", category: "Brasil", link: "https://david-1969.github.io/constru-o/" },
    { id: 8, title: "Cartola 1976", image: "albuns/Cartola1976.jpg", category: "Brasil", link: "https://david-1969.github.io/cartola-2/" },
    { id: 9, title: "Roberto Carlos 1969", image: "albuns/Roberto Carlos.jpeg", category: "Brasil", link: "https://david-1969.github.io/Roberto-Carlos/" },
    { id: 10, title: "Sobrevivendo no Inferno", image: "albuns/inferno.jpg", category: "Brasil", link: "https://david-1969.github.io/Sobrevivendo-no-inferno/" },
    { id: 11, title: "Admiravel Chip Novo", image: "albuns/Pitty.jpeg", category: "Brasil", link: "https://david-1969.github.io/admiravel-chip-novo/" },
    { id: 12, title: "Mamonas Assassinas", image: "albuns/mamonas.jpg", category: "Brasil", link: "https://david-1969.github.io/mamonas-assassinas/" },

    // 20 álbuns recentes (2010-2024) com a categoria "Recente"
    { id: 13, title: "Hackney Diamonds", image: "albuns/Hackney Diamonds.jpg", category: "Recente", link:"https://david-1969.github.io/Hackney-Diamonds/" },
    { id: 14, title: "After Hours", image: "albuns/after.jpeg", category: "Recente", link:"https://david-1969.github.io/after-hours/" },
    { id: 15, title: "Damn", image: "albuns/Danm.jpg", category: "Recente", link: "https://david-1969.github.io/Damn/" },
    { id: 16, title: "You Want it Darker", image: "albuns/Darker.jpg", category: "Recente", link:"https://david-1969.github.io/you-want-the-dark/" },
    { id: 17, title: "Midnigths", image: "albuns/Mid.jpg", category: "Recente", link:"https://david-1969.github.io/midnigths/" },
    { id: 18, title: "Eternal Sunshine", image: "albuns/sunshine.jpg", category: "Recente", link:"https://david-1969.github.io/eternal-sunshine/" },
    { id: 19, title: "333", image: "albuns/333.jpeg", category: "Recente", link:"https://david-1969.github.io/333/" },
    { id: 20, title: "Cawboy Carter", image: "albuns/carter.jpeg", category: "Recente", link:"https://david-1969.github.io/cawboy-carter/" },
    { id: 21, title: "Escandolos Intimos", image: "albuns/sonza.jpg", category: "Recente", link:"https://david-1969.github.io/Escandalo-intimo/"},
    { id: 22, title: "Hit Me Hard and Soft", image: "albuns/hit.jpg", category: "Recente", link:"https://david-1969.github.io/hit-me-hard/"},
    { id: 23, title: "Cheek to Cheek", image: "albuns/lady.jpeg", category: "Recente", link:"https://david-1969.github.io/cheek-to-cheek/" },
    { id: 24, title: "Camila", image: "albuns/camila.jpeg", category: "Recente", link:"https://david-1969.github.io/Camila/" },


    // 20 álbuns dos anos 1950 a 1964 com a categoria "Old"
    { id: 25, title: "Elvis Presley", image: "albuns/elvis.jpeg", category: "Old", link: "https://david-1969.github.io/Elvis-presley/" },
    { id: 26, title: "The Everly Brothers", image: "albuns/brothers.jpeg", category: "Old", link:"https://david-1969.github.io/the-everly-brothers/" },
    { id: 27, title: "Berry on the Top", image: "albuns/berry.jpeg", category: "Old", link:"https://david-1969.github.io/berry-is-on-top/" },
    { id: 28, title: "Chega de Saudade", image: "albuns/ChegaSaudade.jpg", category: "Old", link: "https://david-1969.github.io/Chega-de-saudade/" },
    { id: 29, title: "King of the Delta Blues Singers", image: "albuns/robert.jpeg", category: "Old", link:"https://david-1969.github.io/delta/" },
    { id: 30, title: "Johny Cash", image: "albuns/johny.jpg", category: "Old", link:"https://david-1969.github.io/johnny-cash/" },
    { id: 31, title: "This Land is my Land", image: "albuns/woody.jpeg", category: "Old", link: "https://david-1969.github.io/this-land-is-my-land/" },
    { id: 32, title: "Rock Around the Clock", image: "albuns/rock.jpeg", category: "Old", link:"https://david-1969.github.io/rock-around-the-clock/" },
    { id: 33, title: "Memorial Album", image: "albuns/memorial.jpg", category: "Old", link:"https://david-1969.github.io/memorial-album/" },
    { id: 34, title: "The Moaning of moon", image: "albuns/wolf.webp", category: "Old",link:"https://david-1969.github.io/moaning-moon/" },
    { id: 35, title: "Singin' the Blues", image: "albuns/king.jpeg", category: "Old", link:"https://david-1969.github.io/sing-the-blues/" },
    { id: 36, title: "Buddy Holly", image: "albuns/holly.jpg", category: "Old", link: "https://david-1969.github.io/buddy-holly/" },


    // 10 álbuns melhoes albuns do mundo (as categorias podem ser misturadas)
    { id: 37, title: "Revolver", image: "albuns/revolver.jpeg", category: "Mundo", link: "https://david-1969.github.io/Revolver/" },
    { id: 38, title: "Highway 61 Revisited", image: "albuns/dylan.jpeg", category: "Mundo", link: "https://david-1969.github.io/Highway-61-revisited/" },
    { id: 39, title: "Pet Sounds", image: "albuns/pet.jpg", category: "Mundo", link: "http://127.0.0.1:5500/Detalhes/pet%20Sound/index.html" },
    { id: 40, title: "The Darkside of The Moon", image: "albuns/moon.webp", category: "Mundo", link: "https://david-1969.github.io/The-darkside-of-the-moon/" },
    { id: 41, title: "Rubber Soul", image: "albuns/soul.jpg", category: "Mundo", link: "https://david-1969.github.io/rubber-soul/" },
    { id: 42, title: "The Velvet Underground and Nico", image: "albuns/velvet.jpg", category: "Mundo", link:"https://david-1969.github.io/velvet-underground/" },
    { id: 43, title: "Sticky Fingers", image: "albuns/stones.jpg", category: "Mundo", link: "https://david-1969.github.io/sticky-fingers/" },
    { id: 44, title: "The Frewheelin'Bob Dylan", image: "albuns/bob.jpeg", category: "Mundo", link:"https://david-1969.github.io/freewheelin/"},
    { id: 45, title: "Led Zepellin 4", image: "albuns/led.jpeg", category: "Mundo", link:"https://david-1969.github.io/Led-zepelin-4/" },
    { id: 46, title: "Ziggy Stardust", image: "albuns/ziggy.jpeg", category: "Mundo", link:"http://127.0.0.1:5500/Detalhes/index.html" },
    { id: 47, title: "All Things Must Pass", image: "albuns/pass.jpeg", category: "Mundo", link:"https://david-1969.github.io/all-things-must-pass/" },
    { id: 48, title: "Rumours", image: "albuns/rumours.jpeg", category: "Mundo", link: "https://david-1969.github.io/Rumours/" },

     // 10 álbuns melhoes albuns do mundo (as categorias podem ser misturadas)
     { id: 49, title: "Sgt. Peppers Lonely Heart Club Band", image: "albuns/sgt.webp", category: "Stone", link: "https://david-1969.github.io/Sgt.-pepers/" },
     { id: 50, title: "Pet Sound", image: "albuns/pet.jpg", category: "Stone", link: "https://david-1969.github.io/Pet-Sound/" },
     { id: 51, title: "Revolver", image: "albuns/revolver.jpeg", category: "Stone", link: "https://david-1969.github.io/Revolver/" },
     { id: 52, title: "Highway 61 Revisited", image: "albuns/dylan.jpeg", category: "Stone", link: "https://david-1969.github.io/Highway-61-revisited/" },
     { id: 53, title: "Rubber Soul", image: "albuns/soul.jpg", category: "Stone", link: "https://david-1969.github.io/rubber-soul/" },
     { id: 54, title: "What's Going On", image: "albuns/gaye.jpeg", category: "Stone", link:"https://david-1969.github.io/what-go-on/" },
     { id: 55, title: "Exile on Main St.", image: "albuns/rolling.jpeg", category: "Stone", link: "https://david-1969.github.io/exile-on-main/" },
     { id: 56, title: "London Calling", image: "albuns/london.jpeg", category: "Stone", link: "https://david-1969.github.io/Londom-calling/" },
     { id: 57, title: "Blonde on Blonde", image: "albuns/blonde.jpeg", category: "Stone", link: "https://david-1969.github.io/blonde-on-blonde/" },
     { id: 58, title: "White Album", image: "albuns/white.jpeg", category: "Stone", link: "https://david-1969.github.io/white-album/" },
     { id: 59, title: "The Sunset Sessions", image: "albuns/sun.jpeg", category: "Stone", link: "https://david-1969.github.io/The-sun-sessions/" },
     { id: 60, title: "Kind of Blues", image: "albuns/kinda.jpeg", category: "Stone", link: "https://david-1969.github.io/kind-of-blues/" },

      // 10 álbuns melhoes albuns do mundo (as categorias podem ser misturadas)
      { id: 61, title: "Ave Sangria", image: "albuns/ave.jpeg", category: "Inter", link:"https://david-1969.github.io/ave-sangria/" },
      { id: 62, title: "Autobahn", image: "albuns/auto.jpg", category: "Inter", link:"https://david-1969.github.io/autobahn/" },
      { id: 63, title: "Françoise Hardy 1962", image: "albuns/hardy.jpeg", category: "Inter", link:"https://david-1969.github.io/fran-ois-hardy/" },
      { id: 64, title: "Panese Girl", image: "albuns/japan.jpeg", category: "Inter", link:"https://david-1969.github.io/panese-girl/" },
      { id: 65, title: "Jane birkin - Serge Gainsbourg", image: "albuns/jane.jpg", category: "Inter", link:"https://david-1969.github.io/Jane-birkin/" },
      { id: 66, title: "Los Abuelos de la nada 1", image: "albuns/los.jpeg", category: "Inter", link:"https://david-1969.github.io/los-abuelos-/" },
      { id: 67, title: "Luna", image: "albuns/luna.jpg", category: "Inter", link:"https://david-1969.github.io/Luna/" },
      { id: 68, title: "Kazemachi Roman", image: "albuns/roman.jpg", category: "Inter", link:"https://david-1969.github.io/Kazemachi-roman/" },
      { id: 69, title: "Algo Mejor", image: "albuns/mejor.jpg", category: "Inter", link:"https://david-1969.github.io/algo-mejor/" },
      { id: 70, title: "The Mask and the Mirror", image: "albuns/Mirror.JPG", category: "Inter", link:"https://david-1969.github.io/The-mask-and-the-mirror/" },
      { id: 71, title: "Psycodelic Sound of Japan", image: "albuns/mops.jpg", category: "Inter", link:"https://david-1969.github.io/The-mops/" },
      { id: 72, title: "Tornero", image: "albuns/tornero.jpg", category: "Inter",link:"https://david-1969.github.io/tornero/" },
     
      // 10 álbuns melhoes albuns pop (as categorias podem ser misturadas)
      { id: 73, title: "Abbey road", image: "albuns/abbey road.webp", category: "Pop", link: "https://david-1969.github.io/abbey-road/" },
      { id: 74, title: "Thriller", image: "albuns/thriller.jpeg", category: "Pop", link: "https://david-1969.github.io/thriller/" },
      { id: 75, title: "Saturday Nigth Fever", image: "albuns/bee gees.jpeg", category: "Pop", link:"https://david-1969.github.io/saturday-nigth/" },
      { id: 76, title: "AstroWorld", image: "albuns/astro.jpeg", category: "Pop",link:"https://david-1969.github.io/astroworld/" },
      { id: 77, title: "Back to Black", image: "albuns/back to black.jpeg", category: "Pop", link:"https://david-1969.github.io/back-to-black/" },
      { id: 78, title: "Band on the Run", image: "albuns/band.webp", category: "Pop", link:"https://david-1969.github.io/band-on-the-run/" },
      { id: 79, title: "Grease", image: "albuns/grease.jpeg", category: "Pop",link:"https://david-1969.github.io/Grease/" },
      { id: 80, title: "Charlie Brown Jr", image: "albuns/jr.jpg", category: "Pop",link:"https://david-1969.github.io/la-familia/" },
      { id: 81, title: "The Graduation", image: "albuns/west.jpeg", category: "Pop", link:"https://david-1969.github.io/The-graduation/" },
      { id: 82, title: "Like a Virgin", image: "albuns/virgin.jpeg", category: "Pop", link:"https://david-1969.github.io/Like-a-virgin/" },
      { id: 83, title: "As Quartro Estações", image: "albuns/urbana.jpeg", category: "Pop",link:"https://david-1969.github.io/as-quatro-esta-es/" },
      { id: 84, title: "Midnigths", image: "albuns/Mid.jpg", category: "Pop", link:"https://david-1969.github.io/midnigths/" },

       // 10 álbuns melhoes albuns rock (as categorias podem ser misturadas)
       { id: 85, title: "Nevermind", image: "albuns/nevermind.jpg", category: "Rock", link:"https://david-1969.github.io/nevermind/" },
       { id: 86, title: "Ok Computer", image: "albuns/ok.jpeg", category: "Rock", link:"https://david-1969.github.io/ok-computer/" },
       { id: 87, title: "Fruto Proibido", image: "albuns/rita.jpg", category: "Rock", link:"https://david-1969.github.io/fruto-proibido/" },
       { id: 88, title: "Link Park", image: "albuns/link.jpg", category: "Rock", link:"https://david-1969.github.io/link-park/"},
       { id: 89, title: "Krig Ha Bandolo", image: "albuns/KrigHaBandolo.jpg", category: "Rock", link:"https://david-1969.github.io/Krig-ha-bandolo/" },
       { id: 90, title: "Beggars Banquet", image: "albuns/banquet.jpeg", category: "Rock", link:"https://david-1969.github.io/banggers-banquet/" },
       { id: 91, title: "Appetite for Destroctions", image: "albuns/guns.jpeg", category: "Rock", link:"https://david-1969.github.io/apetite-for-destroction/" },
       { id: 92, title: "Black Sabbath", image: "albuns/black.jpeg", category: "Rock", link:"https://david-1969.github.io/black-sabbath/" },
       { id: 93, title: "Pendunlum", image: "albuns/creadence.jpg", category: "Rock", link:"https://david-1969.github.io/Pendunlum/" },
       { id: 94, title: "Elvis Presley", image: "albuns/elvis.jpeg", category: "Rock", link: "https://david-1969.github.io/Elvis-presley/" },
       { id: 95, title: "Eletric Ladyland", image: "albuns/land.jpeg", category: "Rock", link:"https://david-1969.github.io/eletric-ladyland/" },
       { id: 96, title: "Velvet Underground and Nico", image: "albuns/velvet.jpg", category: "Rock", link:"https://david-1969.github.io/velvet-underground/" },
     
        // 10 álbuns melhoes albuns Mais (as categorias podem ser misturadas)
        { id: 97, title: "Alucinação", image: "albuns/alucinação.jpg", category: "Mais", link: "https://david-1969.github.io/alucina-o/" },
        { id: 98, title: "Animals", image: "albuns/animals.jpg", category: "Mais", link:"https://david-1969.github.io/animals/" },
        { id: 99, title: "Music From Big Pink", image: "albuns/big pink.jpg", category: "Mais", link:"https://david-1969.github.io/Big-pink/" },
        { id: 100, title: "Blue", image: "albuns/blue.webp", category: "Mais", link:"https://david-1969.github.io/blue/" },
        { id: 101, title: "Caetano Veloso", image: "albuns/caetano.jpeg", category: "Mais", link:"https://david-1969.github.io/caetano-veloso/" },
        { id: 102, title: "A Divina Comedia", image: "albuns/divina.jpeg", category: "Mais", link:"https://david-1969.github.io/A-divina-comedia/" },
        { id: 103, title: "Mulan Soundtrack", image: "albuns/mulan.jpeg", category: "Mais", link:"https://david-1969.github.io/Mulan/" },
        { id: 104, title: "Harvest", image: "albuns/neil.jpg", category: "Mais", link: "https://david-1969.github.io/harvest-moon/" },
        { id: 105, title: "Please Please me", image: "albuns/please.jpeg", category: "Mais", link:"https://david-1969.github.io/Please-Please-me/" },
        { id: 106, title: "The Times They are A-Changin", image: "albuns/times.jpeg", category: "Mais" },
        { id: 107, title: "Zé Ramalho", image: "albuns/Zé_ramalho.jpg", category: "Mais", link:"http://127.0.0.1:5500/Detalhes/z%C3%A9%20ramalho/index.html" },
        { id: 108, title: "A Nigth of Opera", image: "albuns/opera.jpeg", category: "Mais", link: "https://david-1969.github.io/a-night-of-opera/" },
      
        // 12 álbuns brasileiros com a categoria "Brasil"
    { id: 109, title: "Abbey Road", image: "albuns/abbey road.webp", category: "New", link: "https://david-1969.github.io/abbey-road/"},
    { id: 110, title: "A Nigth of Opera", image: "albuns/opera.jpeg", category: "New", link: "https://david-1969.github.io/a-night-of-opera/" },
    { id: 111, title: "The Darkside of The Moom", image: "albuns/moon.webp", category: "New", link: "https://david-1969.github.io/The-darkside-of-the-moon/" },
    { id: 112, title: "Elvis Presley", image: "albuns/elvis.jpeg", category: "New", link: "http://127.0.0.1:5500/Detalhes/Elvis%20Presley/index.html" },
    { id: 113, title: "Roberto Carlos 1969", image: "albuns/Roberto carlos.jpeg", category: "New", link: "https://david-1969.github.io/Roberto-Carlos/" },
    { id: 114, title: "Gita", image: "albuns/Gita.jpg", category: "New", link: "https://david-1969.github.io/Gita/" },
    { id: 115, title: "Highway 61 Rivisited", image: "albuns/dylan.jpeg", category: "New", link: "https://david-1969.github.io/Highway-61-revisited/"  },
    { id: 116, title: "Damn", image: "albuns//Danm.jpg", category: "New", link: "https://david-1969.github.io/Damn/" },
    { id: 117, title: "Sobrevivendo no Inferno", image: "albuns/inferno.jpg", category: "New", link: "https://david-1969.github.io/Sobrevivendo-no-inferno/" },
    { id: 118, title: "Harvest", image: "albuns//neil.jpg", category: "New", link: "https://david-1969.github.io/harvest-moon/" },
    { id: 119, title: "Sticky Fingers", image: "albuns/stones.jpg", category: "New", link: "https://david-1969.github.io/sticky-fingers/" },
    { id: 120, title: "Thriller", image: "albuns/thriller.jpeg", category: "New", link: "https://david-1969.github.io/thriller/" },
];

function populateAlbums(sectionId, category) {
    const sectionContainer = document.getElementById(sectionId);
    sectionContainer.innerHTML = "";  // Limpa os álbuns existentes

    // Filtra os álbuns pela categoria e exibe os primeiros 12
    const albumsToDisplay = albums.filter(album => album.category === category).slice(0, 12);

    albumsToDisplay.forEach(album => {
        const albumCard = document.createElement("div");
        albumCard.classList.add("album-card");

        // Cria o link para o álbum
        const albumLink = document.createElement("a");
        albumLink.href = album.link;  // Definir o link para o álbum
        albumLink.target = "_blank";  // Abre o link em uma nova aba

        // Adiciona o conteúdo do álbum ao link
        albumLink.innerHTML = `
            <img src="${album.image}" alt="${album.title}">
            <p>${album.title}</p>
        `;

        // Adiciona o link ao card de álbum
        albumCard.appendChild(albumLink);

        // Adiciona o card de álbum à seção
        sectionContainer.appendChild(albumCard);
    });
}


// Função para gerenciar o scroll para os álbuns
function scrollAlbums(direction, sectionId) {
    const sectionContainer = document.getElementById(sectionId);
    const cardWidth = sectionContainer.querySelector(".album-card")?.offsetWidth || 130;  // Obter a largura do card de álbum
    const currentScroll = sectionContainer.scrollLeft;

    // Se o usuário clicar para a direita, mova a seção para a direita, caso contrário, mova para a esquerda
    sectionContainer.scrollLeft = currentScroll + (direction * cardWidth);
}

// Preenchendo as seções com álbuns
document.addEventListener('DOMContentLoaded', () => {
    populateAlbums('discover-row', 'New');
    populateAlbums('brazil-row', 'Brasil');
    populateAlbums('world-row', 'Mundo');
    populateAlbums('oldies-row', 'Old');
    populateAlbums('pop-row', 'Pop');
    populateAlbums('recent-row', 'Recente');
    populateAlbums('best-rated-row', 'Rock');
    populateAlbums('rolling-stone-row', 'Stone');
    populateAlbums('followed-row', 'Inter');
    populateAlbums('classics-row', 'Mais');
});

const albuns = [
    { title: "Álbum 1", category: "Pop", link: "#", image: "image1.jpg" },
    { title: "Álbum 2", category: "Rock", link: "#", image: "image2.jpg" },
    { title: "Álbum 3", category: "Jazz", link: "#", image: "image3.jpg" },
    // Adicione mais álbuns conforme necessário
];

document.getElementById("search-btn").addEventListener("click", openSearch);

function openSearch() {
    document.getElementById("search-bar-container").style.display = "block";
    document.getElementById("search-btn").style.display = "none";
}

function closeSearch() {
    document.getElementById("search-bar-container").style.display = "none";
    document.getElementById("search-btn").style.display = "block";
    document.getElementById("search-bar").value = ""; // Limpa a pesquisa
    clearSearchResults(); // Limpa os resultados da pesquisa
}

function searchAlbums() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const results = albums.filter(album => album.title.toLowerCase().includes(query));
    displaySearchResults(results);
}

function displaySearchResults(results) {
    const container = document.getElementById("discover-row");
    container.innerHTML = ""; // Limpa os resultados anteriores

    results.forEach(album => {
        const albumCard = document.createElement("div");
        albumCard.classList.add("album-card");
        
        const albumLink = document.createElement("a");
        albumLink.href = album.link;
        albumLink.target = "_blank"; 
        
        albumLink.innerHTML = `
            <img src="${album.image}" alt="${album.title}">
            <p>${album.title}</p>
        `;
        
        albumCard.appendChild(albumLink);
        container.appendChild(albumCard);
    });
}

function clearSearchResults() {
    const container = document.getElementById("discover-row");
    container.innerHTML = ""; // Limpa os resultados da pesquisa
}
