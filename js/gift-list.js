(() => {
  const products = [
    {
      title: "Microondas",
      price: 599,
      code: "247797657-4f428531-542a-462e-9f65-30c50f7d3699",
      img: "images/products/microondas.jpg",
    },
    {
      title: "Armário de cozinha",
      price: 499,
      code: "247797657-a516dead-9db1-4621-9d4b-610d5c0ed08e",
      img: "images/products/armario-de-cozinha.jpg",
    },
    {
      title: "Mesa de jantar",
      price: 1480,
      code: "2kZuECs",
      img: "images/products/mesa-cadeiras.jpg",
    },
    {
      title: "Tapete para sala",
      price: 189,
      code: "247797657-7a60d320-10cc-49c2-a740-d9c776565409",
      img: "images/products/tapete.jpg",
    },
    {
      title: "Lavadora de roupas",
      price: 1299,
      code: "247797657-a9a8628d-8857-4545-ad54-c9c34dc3edca",
      img: "images/products/lavadora-de-roupas.jpg",
    },
    {
      title: "Multiprocessador",
      price: 299,
      code: "247797657-34813765-388f-446b-bba9-99ffacad87c8",
      img: "images/products/multiprocessador.jpg",
    },
    {
      title: "Faqueiro",
      price: 99,
      code: "247797657-c9223010-a57b-4abe-b77f-490ef0d64c09",
      img: "images/products/faqueiro.jpg",
    },
    {
      title: "Air Fryer",
      price: 449,
      code: "247797657-75f0b276-6ada-4c4c-b887-8ae565a4378c",
      img: "images/products/air-fryer.jpg",
    },
    {
      title: "Conjunto de panelas de teflon",
      price: 349,
      code: "247797657-650276e9-e8f1-4c60-8403-58ff2e96dab0",
      img: "images/products/conjunto-de-panelas-de-teflon.jpg",
    },
    {
      title: "Panela de pressão",
      price: 229,
      code: "247797657-c7e0788e-8c31-4547-8656-b498c299906b",
      img: "images/products/panela-de-pressao.jpg",
    },
    {
      title: "Varal de chão",
      price: 49,
      code: "247797657-89b4e3de-2999-486e-8e85-837f59a5f9e2",
      img: "images/products/varal-de-chao.jpg",
    },
    {
      title: "Ferro de passar roupa",
      price: 119,
      code: "247797657-107ac226-7be2-4321-a2ec-66a5120ed97a",
      img: "images/products/ferro-de-passar-roupa.jpg",
    },
    {
      title: "Mesa de passar roupa",
      price: 89,
      code: "247797657-85dc6c0f-2ed0-41f7-a48c-c7aee4b10876",
      img: "images/products/mesa-de-passar-roupa.jpg",
    },
    {
      title: "Jogo de cama",
      price: 269,
      code: "247797657-6919af57-5b18-403f-9e82-854a6abda0bb",
      img: "images/products/jogo-de-cama.jpg",
    },
    {
      title: "Jogo de travesseiros",
      price: 59,
      code: "247797657-1136821d-c579-4a22-93c0-1db402febc65",
      img: "images/products/jogo-de-travesseiro.jpg",
    },
    {
      title: "Cortina",
      price: 169,
      code: "247797657-6dbea0d3-d762-41c6-b638-ef3807e2bacd",
      img: "images/products/cortinas.jpg",
    },
    {
      title: "Toalhas de banho",
      price: 69,
      code: "247797657-165ef026-8609-4bff-9f7a-62a5d3bcf7a4",
      img: "images/products/toalhas-de-banho.jpg",
    },
    {
      title: "Colcha de cama",
      price: 149,
      code: "247797657-ab953ab1-1db5-4d2b-8f37-d7c46ae14034",
      img: "images/products/colcha.jpg",
    },
    {
      title: "Edredon",
      price: 129,
      code: "247797657-6a554145-8558-4cd9-a4e5-d04823207348",
      img: "images/products/edredon.jpg",
    },
    {
      title: "Ventilador",
      price: 79,
      code: "247797657-75896b2f-8984-4590-a335-fad4bb4b9cca",
      img: "images/products/ventilador.jpg",
    },
    {
      title: "Garrafa de café",
      price: 34,
      code: "247797657-c284d79d-7d86-4aec-84a5-623f32287f7e",
      img: "images/products/garrafa-de-cafe.jpg",
    },
    {
      title: "Sofá",
      price: 749,
      code: "247797657-b2938c2e-69ea-42fe-bf33-62aec0411f67",
      img: "images/products/sofa.jpg",
    },
    {
      title: "Cama",
      price: 999,
      code: "247797657-b2938c2e-69ea-42fe-bf33-62aec0411f67",
      img: "images/products/cama.jpg",
    },
    {
      title: "Fogão",
      price: 899,
      code: "247797657-b2938c2e-69ea-42fe-bf33-62aec0411f67",
      img: "images/products/fogao.jpg",
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
