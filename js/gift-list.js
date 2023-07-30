(() => {
  const products = [
    {
      title: "Microondas",
      price: 850,
      code: "1UCnSWK",
      img: "images/products/microondas.jpeg",
    },
    {
      title: "Rack de sala",
      price: 499,
      code: "2CwJvhM",
      img: "images/products/rack.jpeg",
    },
    {
      title: "Mesa de jantar",
      price: 1480,
      code: "2kZuECs",
      img: "images/products/mesa-cadeiras.jpg",
    },
    {
      title: "Tapete para sala",
      price: 190,
      code: "2QoqVaA",
      img: "images/products/tapete.jpg",
    },
    {
      title: "Máquina de lavar roupa",
      price: 1299,
      code: "12Ugqdx",
      img: "images/products/maquina_de_lavar_roupa.jpeg",
    },
    {
      title: "Multiprocessador",
      price: 299,
      code: "2G181e8",
      img: "images/products/multiprocessador.jpg",
    },
    {
      title: "Faqueiro",
      price: 100,
      code: "2pCDsYs",
      img: "images/products/faqueiro.jpg",
    },
    {
      title: "Air Fryer",
      price: 449,
      code: "1r2qjHZ",
      img: "images/products/air-fryer.jpg",
    },
    {
      title: "Conjunto de panelas de teflon",
      price: 349,
      code: "19GVuMB",
      img: "images/products/conjunto-de-panelas-de-teflon.jpg",
    },
    {
      title: "Panela de pressão",
      price: 229,
      code: "2qsTMfu",
      img: "images/products/panela-de-pressao.jpg",
    },
    {
      title: "Varal de chão",
      price: 89,
      code: "15WxVd4",
      img: "images/products/varal-de-chao.jpg",
    },
    {
      title: "Ferro de passar roupa",
      price: 150,
      code: "1gL9wRH",
      img: "images/products/ferro-de-passar-roupa.jpg",
    },
    {
      title: "Mesa de passar roupa",
      price: 110,
      code: "1eTaBYC",
      img: "images/products/mesa-de-passar-roupa.jpg",
    },
    {
      title: "Jogo de cama",
      price: 269,
      code: "27PkedL",
      img: "images/products/jogo-de-cama.jpg",
    },
    {
      title: "Jogo de travesseiros",
      price: 80,
      code: "2hsVQWt",
      img: "images/products/jogo-de-travesseiro.jpg",
    },
    {
      title: "Cortina",
      price: 169,
      code: "1p9jCGL",
      img: "images/products/cortinas.jpg",
    },
    {
      title: "Toalhas de banho",
      price: 69,
      code: "1QD6AQv",
      img: "images/products/toalhas-de-banho.jpg",
    },
    {
      title: "Colcha de cama",
      price: 159,
      code: "21JGAL9",
      img: "images/products/colcha.jpg",
    },
    {
      title: "Edredon",
      price: 160,
      code: "2ehSZXy",
      img: "images/products/edredon.jpg",
    },
    {
      title: "Ventilador",
      price: 120,
      code: "2ZXAt1E",
      img: "images/products/ventilador.jpg",
    },
    {
      title: "Garrafa de café inox",
      price: 90,
      code: "2Mkfs1J",
      img: "images/products/garrafa-de-cafe.jpg",
    },
    {
      title: "Sofá",
      price: 700,
      code: "2mBLcgQ",
      img: "images/products/sofa.jpg",
    },
    {
      title: "Cama de casal",
      price: 999,
      code: "1W4y5Mx",
      img: "images/products/cama.jpg",
    },
    {
      title: "Fogão 5 bocas",
      price: 899,
      code: "1jjroDa",
      img: "images/products/fogao.jpg",
    },
    {
      title: "Liquidificador",
      price: 260,
      code: "17kZKdY",
      img: "images/products/liquidificador.jpg",
    },
  ];

  const giftListContainer = $("#gift-list .row");
  const searchInput = $(".gift-list .gift-list__search input");
  const sortInput = $(".gift-list .gift-list__sort select");

  const createGiftCard = (title, price, code, img) => {
    return `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${img}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">
              <div class="gift-item__name">
                ${title}
              </div>

              <div class="gift-item__price text-nowrap">
                <span>R$</span>
                <span class="gift-item__value">
                  ${Intl.NumberFormat("pt-br", {
                    minimumFractionDigits: 2,
                  }).format(price)}
                </span>
              </div>
            </h5>
            <a href="https://mpago.la/${code}" class="btn btn-outline-light btn-block" target="_blank">
              Presentear
            </a>
          </div>
        </div>
      </div>
      `;
  };

  const shuffle = (array) => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  };

  const createGiftList = (container, items, randomize) => {
    if (randomize) {
      shuffle(items);
    }

    container.html("");

    if (!items.length) {
      container.html(
        `
        <div class="col">Nenhum item encontrado...</div>
        `
      );
      return;
    }

    items.forEach((item) => {
      container.append(
        createGiftCard(item.title, item.price, item.code, item.img)
      );
    });
  };

  const searchGift = (keyword, list) => {
    var filtered = list.filter((item) =>
      item.title.toLowerCase().includes(keyword.toLowerCase())
    );

    createGiftList(giftListContainer, filtered);
  };

  const initSearch = (input, list) => {
    input.keyup(function () {
      let keyword = input.val();
      searchGift(keyword, list);
    });
  };

  const sortByPrice = (list, order = "desc") => {
    list.sort((a, b) => {
      if (order == "desc") {
        return a.price > b.price ? -1 : 1;
      } else if (order == "asc") {
        return a.price < b.price ? -1 : 1;
      }

      return 0;
    });

    createGiftList(giftListContainer, list);
  };

  const initSort = (sortInput, list) => {
    sortInput.change(() => {
      let order = sortInput.val();
      sortByPrice(list, order);
    });
  };

  const init = () => {
    initSearch(searchInput, products);
    initSort(sortInput, products);
    createGiftList(giftListContainer, products, true);
  };

  init();
})();
