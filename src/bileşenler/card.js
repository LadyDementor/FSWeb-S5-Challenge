import axios from "axios";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //

  const kart = document.createElement("div");
  kart.classList.add("card");

  const baslik = document.createElement("div");
  baslik.classList.add("headline");
  baslik.textContent = makale.anabaslik;
  kart.appendChild(baslik);

  const yazar = document.createElement("div");
  yazar.classList.add("author");
  kart.appendChild(yazar);

  const fotoContainer = document.createElement("div");
  fotoContainer.classList.add("img-container");
  const foto = document.createElement("img");
  foto.src = makale.yazarFoto;
  fotoContainer.appendChild(foto);
  yazar.appendChild(fotoContainer);

  const yazarAdi = document.createElement("span");
  yazarAdi.textContent = makale.yazarAdi + "tarafından";
  yazar.appendChild(yazarAdi);

  baslik.addEventListener("click", () => {
    console.log(makale.anabaslik);
  });

  return kart;
};

const cardEkleyici = (secici) => {
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  axios
    .get("http://localhost:5001/api/makaleler")
    .then((response) => {
      for (let key in response.data.makaleler) {
        for (let i = 0; i < response.data.makaleler[key].length; i++) {
          document
            .querySelector(secici)
            .appendChild(Card(response.data.makaleler[key][i]));
        }
      }
    })
    .catch((error) => {
      console.error("Makaleler alınamadı: ", error);
    });
};

export { Card, cardEkleyici };
