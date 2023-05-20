(() => {
  const products = [
    {
      title: "Bandeja de banheiro",
      price: 50,
      code: nexa3rd,
      img: "images/products/bandejabanho.jpeg",
    },
    {
      title: "Conjunto de panos de prato",
      price: 70,
      code: gHmo4xh,
      img: "images/products/conjuntoPanosPrato.jpeg",
    },
    {
      title: "Jogo de Taças de Cristal",
      price: 190,
      code: Unnq3QH,
      img: "images/products/jogoTacasCrisral.jpeg",
    },
    {
      title: "Faqueiro de Inox Tramontina",
      price: 60,
      code: JD4YEe1,
      img: "images/products/faqueiroInox.jpeg",
    },
    {
      title: "Panela elétrica de Fondue",
      price: 250,
      code: VQ3iMGr,
      img: "images/products/maquinaDeFondue.jpeg",
    },
    {
      title: "Jogo de Xícaras de Chá",
      price: 130,
      code: oC1bDSe,
      img: "images/products/jogoDeXicarasDeCha.jpeg",
    },
    {
      title: "Jogo de Facas Profissionais",
      price: 350,
      code: E4dgdRY,
      img: "images/products/jogoDeFacasProfissionais.jpeg",
    },
    {
      title: "Jogo de Copos de Vidro",
      price: 60,
      code: qfzOzRb,
      img: "images/products/jogoDeCoposDeVidro.jpeg",
    },
    {
      title: "Panela de Pressão Elétrica",
      price: 150,
      code: yNt1K2e,
      img: "images/products/panelaPressao.jpeg",
    },
    {
      title: "Jogo de Potes de Vidro",
      price: 90,
      code: qprJf21,
      img: "images/products/jogoPotesVidro.jpeg",
    },
    {
      title: "Tábua de corte de madeira",
      price: 130,
      code: gjscaL,
      img: "images/products/tabuaDeCorte.jpeg",
    },{
      title: "Mixer",
      price: 150,
      code: PdAxQFG,
      img: "images/products/mixer.jpeg",
    },
    {
      title: "Liquidificador",
      price: 140,
      code: cJgJJ3B,
      img: "images/products/liquidificador.jpeg",
    },
    {
      title: "Escorredor de louça inox",
      price: 140,
      code: Uzo4FeX,
      img: "images/products/escorredorInox.jpeg",
    },
    {
      title: "Jogo de Panelas Tramontina",
      price: 400,
      code: W7Nebje,
      img: "images/products/jogoDePanelas.jpeg",
    },
    {
      title: "Extrator de sucos",
      price: 160,
      code: ufhtGg,
      img: "images/products/extratorDeSucos.jpeg",
    },
    {
      title: "Moedor de café",
      price: 160,
      code: vt6dm70,
      img: "images/products/moedorDeCafe.jpeg",
    },
    {
      title: "Conjunto de Colheres de Sobremesa",
      price: 40,
      code: aafztyt,
      img: "images/products/conjuntoColheresDeSobremesa.jpeg",
    },
    {
      title: "Centro de Mesa",
      price: 150,
      code: vwtUFSp,
      img: "images/products/centroDeMesa.jpeg",
    },
    {
      title: "Conjunto de Pratos",
      price: 230,
      code: AsVkV2t,
      img: "images/products/conjuntoDePratos.jpeg",
    },
    {
      title: "Conjunto de travessas de vidro",
      price: 120,
      code: S9QasJJ,
      img: "images/products/travessasDeVidro.jpeg",
    },
    {
      title: "Batedeira Planetária",
      price: 350,
      code: lNDp61b,
      img: "images/products/batedeiraPlanetaria.jpeg",
    },
    {
      title: "Churrasqueira Elétrica",
      price: 170,
      code: flsU9i7,
      img: "images/products/churrasqueiraEletrica.jpeg",
    },
    {
      title: "Luva térmica de silicone",
      price: 50,
      code: hhz07FV,
      img: "images/products/luvaTermicaSilicone.jpeg",
    },
    {
      title: "Torradeira elétrica",
      price: 150,
      code: dOTKFOt,
      img: "images/products/torradeiraEletrica.jpeg",
    },
    {
      title: "Frigideira Tramontina",
      price: 120,
      code: nyy8TXQ,
      img: "images/products/frigideiraTramontina.jpeg",
    },
    {
      title: "Cafeteira Espresso Nescafé Dolce Gusto Genio S Plus",
      price: 400,
      code: D80tKD,
      img: "images/products/cafeteira.jpeg",
    },
    {
      title: "Fruteira 4 andares",
      price: 200,
      code: keUe2xL,
      img: "images/products/fruteira.jpeg",
    },
    {
      title: "Vasilhas Tupperware",
      price: 150,
      code: xTd8CZ,
      img: "images/products/vasilhasTupperware.jpeg",
    },
    {
      title: "Conjunto peneiras de aço",
      price: 50,
      code: rGOUyzr,
      img: "images/products/peneiras.jpeg",
    },
    {
      title: "Fue batedor de inox",
      price: 40,
      code: Eb7lQUw,
      img: "images/products/fueBatedor.jpeg",
    },
    {
      title: "Porta temperos",
      price: 125,
      code: TXceHPK,
      img: "images/products/portaTemperos.jpeg",
    },
    {
      title: "Moedor de sal e pimenta",
      price: 50,
      code: MCWB7Nn,
      img: "images/products/moedorSalEPimenta.jpeg",
    },
    {
      title: "Cesta para pães",
      price: 30,
      code: UE3GlOJ,
      img: "images/products/cestaParaPaes.jpeg",
    },
    {
      title: "Microondas Philco 34L",
      price: 600,
      code: XIDcHF,
      img: "images/products/microondas.jpeg",
    },
    {
      title: "Sanduicheira elétrica",
      price: 130,
      code: UyhyIa,
      img: "images/products/sanduicheira.jpeg",
    },
    {
      title: "Colcha de cama",
      price: 170,
      code: n9Bcfcm,
      img: "images/products/colchaDeCama.jpeg",
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
