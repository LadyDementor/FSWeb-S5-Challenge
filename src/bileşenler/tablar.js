import axios from "axios";

const Tablar = (konu) => {
  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>

  //

  const topicsDiv = document.createElement("div"); // <div class="topics"></div>
  topicsDiv.classList.add("topics");

  konu.forEach((item) => {
    const tabDiv = document.createElement("div"); // <div class="tab"></div>
    tabDiv.classList.add("tab");
    tabDiv.textContent = item;
    topicsDiv.appendChild(tabDiv);
  });

  return topicsDiv;
};

const tabEkleyici = (secici) => {
  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //

  axios
    .get("http://localhost:5001/api/konular")
    .then((response) => {
      const konular = response.data.konular;
      const tablar = Tablar(konular);
      const seçici = document.querySelector(secici);
      seçici.appendChild(tablar);
    })
    .catch((error) => {
      console.log("Bir hata oluştu:", error);
    });
};

export { Tablar, tabEkleyici };
