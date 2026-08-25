/* =========================================================================
   Speisekarte — EINE Datenquelle für Rendering + Snipcart.
   Preise in Euro. price:null  => "Preis auf Anfrage" (kein Online-Kauf),
   der Betreiber ergänzt den Preis. tags: "veg" | "hot".
   Datenstand: von der bestehenden Karte (Lieferando) übernommen.
   ⚠ Allergene/Zusatzstoffe müssen vom Betreiber ergänzt werden (LMIV).
   ========================================================================= */
window.GATTOPARDO_MENU = {
  currency: "eur",
  categories: [
    {
      id: "antipasti",
      name: "Antipasti",
      it: "Zum Beginnen",
      items: [
        { name: "Bruschetta", price: 6.0, tags: ["veg"], desc: "Geröstetes Brot mit Tomaten, Knoblauch und Olivenöl." },
        { name: "Maxi Bruschetta", price: 9.0, tags: ["veg"] },
        { name: "Caprese", price: 10.0, tags: ["veg"], desc: "Tomaten und Mozzarella mit Basilikum." },
        { name: "Antipasti Italiano", price: 12.0 }
      ]
    },
    {
      id: "insalate",
      name: "Insalate — Salate",
      it: "Mit Pizzabrötchen und Kräutercreme",
      items: [
        { name: "Insalata Verde", price: 7.0, tags: ["veg"] },
        { name: "Insalata Pomodori", price: 8.0, tags: ["veg"] },
        { name: "Insalata Cetrioli", price: 8.0, tags: ["veg"] },
        { name: "Insalata Mista", price: 9.0, tags: ["veg"] },
        { name: "Insalata di Tonno", price: 10.5 },
        { name: "Insalata Mediterranea", price: 10.5 },
        { name: "Insalata Capricciosa", price: 10.5 },
        { name: "Insalata Gambaretti", price: 11.0 },
        { name: "Insalata Marinara", price: 11.0 },
        { name: "Insalata di Pollo", price: 11.5 },
        { name: "Insalata Tacchino", price: 11.5 }
      ]
    },
    {
      id: "pizza",
      name: "Pizza",
      it: "Aus dem Steinofen — alle mit Tomatensauce und Käse",
      items: [
        { name: "Margherita", price: 9.0, tags: ["veg"], desc: "Tomatensauce, Mozzarella, Basilikum." },
        { name: "Peperoni", price: 9.5, tags: ["veg"] },
        { name: "Spinaci", price: 9.5, tags: ["veg"] },
        { name: "Funghi", price: 9.5, tags: ["veg"] },
        { name: "Pizza Sofia", price: null },
        { name: "Pizza Frutti di Mare", price: null },
        { name: "Pizza Venwegen", price: null },
        { name: "Pizza Lillo", price: null },
        { name: "Pizza Salvatore", price: null },
        { name: "Pizza Italia", price: null },
        { name: "Pizza Don Peppe", price: 12.5 },
        { name: "Pizza Gattopardo", price: 13.5, desc: "Das Haus-Signature — herzhaft belegt." },
        { name: "Pizza Pazza", price: 14.0, tags: ["hot"] }
      ]
    },
    {
      id: "calzone",
      name: "Calzone",
      it: "Gefüllt, mit Tomatensauce und Käse",
      items: [
        { name: "Calzone Classico", price: 10.0 },
        { name: "Calzone Misto", price: 11.0 },
        { name: "Calzone Casereccio", price: 11.0 },
        { name: "Calzone Mediterraneo", price: 11.0 },
        { name: "Calzone Siciliano", price: 14.0 }
      ]
    },
    {
      id: "panini",
      name: "Panini & Pizzabrötchen",
      it: "Mit Käse überbacken",
      items: [
        { name: "Pizzabrötchen Natur", price: 4.0, tags: ["veg"] },
        { name: "Panini Salami", price: 7.0 },
        { name: "Panini Spinaci", price: 7.0, tags: ["veg"] },
        { name: "Panini Prosciutto", price: 7.0 },
        { name: "Panini Tonno", price: 7.5 },
        { name: "Panini Prosciutto e Funghi", price: 8.0 },
        { name: "Panini Tonno e Cipolla", price: 8.5 },
        { name: "Panini Casarecci", price: 8.5 }
      ]
    },
    {
      id: "pasta",
      name: "Pasta",
      it: "Nudelsorte nach Wahl",
      items: [
        { name: "Pasta Napoli", price: 8.5, tags: ["veg"] },
        { name: "Pasta Aglio Olio e Peperoncino", price: 9.5, tags: ["veg", "hot"] },
        { name: "Pasta Bolognese", price: 10.0 },
        { name: "Pasta Panna e Prosciutto", price: 10.5 },
        { name: "Pasta Broccoli", price: 10.5, tags: ["veg"] },
        { name: "Pasta Nonna", price: 11.0 },
        { name: "Pasta Genovese", price: 11.0, tags: ["veg"] },
        { name: "Pasta Tonno", price: 11.0 },
        { name: "Pasta Carbonara", price: 11.0 },
        { name: "Pasta Diavola", price: 11.0, tags: ["hot"] },
        { name: "Pasta Amatriciana", price: 11.0 },
        { name: "Pasta Gamberetti", price: 11.0 },
        { name: "Pasta Frutti di Mare", price: 11.5 },
        { name: "Pasta Gustosa", price: 11.5 },
        { name: "Pasta Mare e Monti", price: 12.0 },
        { name: "Pasta Pizzaiola", price: 12.0 },
        { name: "Pasta Gattopardo", price: 13.0 },
        { name: "Pasta Salmone", price: 13.5 },
        { name: "Pasta Siciliana", price: 13.5, tags: ["hot"] },
        { name: "Pasta Gamberoni", price: 15.0 }
      ]
    },
    {
      id: "tortellini",
      name: "Tortellini",
      items: [
        { name: "Tortellini Napoli", price: 10.0, tags: ["veg"] },
        { name: "Tortellini Bolognese", price: 11.5 },
        { name: "Tortellini Panna e Prosciutto", price: 12.0 },
        { name: "Tortellini Broccoli", price: 12.0, tags: ["veg"] },
        { name: "Tortellini Gambaretti", price: 12.5 },
        { name: "Tortellini Nonna", price: 12.5 },
        { name: "Tortellini Carbonara", price: 12.5 },
        { name: "Tortellini Genovese", price: 12.5, tags: ["veg"] },
        { name: "Tortellini Amatriciana", price: 12.5 },
        { name: "Tortellini Diavola", price: 12.5, tags: ["hot"] },
        { name: "Tortellini Gustosa", price: 13.0 },
        { name: "Tortellini Pizzaiola", price: 13.5 },
        { name: "Tortellini Gattopardo", price: 14.5 },
        { name: "Tortellini Mare e Monti", price: 14.5 },
        { name: "Tortellini Siciliana", price: 15.0, tags: ["hot"] }
      ]
    },
    {
      id: "gnocchi",
      name: "Gnocchi",
      items: [
        { name: "Gnocchi Napoli", price: 9.0, tags: ["veg"] },
        { name: "Gnocchi Bolognese", price: 10.5 },
        { name: "Gnocchi Panna e Prosciutto", price: 11.0 },
        { name: "Gnocchi Della Casa", price: 11.5 },
        { name: "Gnocchi Genovese", price: 11.5, tags: ["veg"] }
      ]
    },
    {
      id: "ofen",
      name: "Aus dem Ofen",
      it: "Überbackene Spezialitäten",
      items: [
        { name: "Lasagne", price: 10.0 },
        { name: "Cannelloni Carne", price: 10.5 },
        { name: "Cannelloni Spinaci", price: 10.5, tags: ["veg"] },
        { name: "Combinazione di Verdura", price: 10.5, tags: ["veg"] },
        { name: "Pasta al Forno", price: 11.0 },
        { name: "Tagliatelle della Nonna", price: 11.0 },
        { name: "Pasta Pirata", price: 11.0 }
      ]
    },
    {
      id: "fisch",
      name: "Pesce — Fischspezialitäten",
      it: "Mit Beilage, Pizzabrötchen und Kräutercreme",
      items: [
        { name: "Salmone al Vino Bianco", price: 19.5 },
        { name: "Salmone al Pepe Verde", price: 20.0 },
        { name: "Gamberoni al Aglio", price: 24.0 },
        { name: "Gamberoni al Pepe Verde", price: 25.0 }
      ]
    },
    {
      id: "scaloppine",
      name: "Scaloppine — Kalbfleisch",
      it: "Mit Beilage, Pizzabrötchen und Kräutercreme",
      items: [
        { name: "Scaloppina alla Milanese", price: 14.5 },
        { name: "Scaloppina al Pepe Verde", price: 15.0 },
        { name: "Scaloppina al Vino Bianco", price: 15.0 },
        { name: "Scaloppina Gorgonzola", price: 15.0 },
        { name: "Scaloppina Pizzaiola", price: 15.5 },
        { name: "Scaloppina Funghi e Gorgonzola", price: 15.5 },
        { name: "Scaloppina alla Marsala", price: 15.5 },
        { name: "Scaloppina alla Romana", price: 16.0 }
      ]
    },
    {
      id: "beilagen",
      name: "Beilagen & Saucen",
      items: [
        { name: "Kleiner Salat", price: 3.0, tags: ["veg"] },
        { name: "Pommes frites", price: 3.0, tags: ["veg"] },
        { name: "Pizzabrötchen", price: 3.5, tags: ["veg"] },
        { name: "Kräutercreme", price: 1.5, tags: ["veg"] },
        { name: "Aiolicreme", price: 1.5, tags: ["veg"] },
        { name: "Ketchup", price: 1.0, tags: ["veg"] },
        { name: "Mayonnaise", price: 1.0, tags: ["veg"] }
      ]
    },
    {
      id: "dolci",
      name: "Dolci — Desserts",
      it: "Süßer Abschluss",
      items: [
        { name: "Belgische hausgemachte Waffel", price: 4.0, tags: ["veg"] },
        { name: "Tiramisu", price: 6.0, tags: ["veg"], desc: "Hausgemacht, klassisch." }
      ]
    },
    {
      id: "getraenke",
      name: "Getränke",
      items: [
        { name: "Coca-Cola 0,33 l", price: 2.0, tags: ["veg"] },
        { name: "Coca-Cola Zero 0,33 l", price: 2.0, tags: ["veg"] },
        { name: "Fanta Orange 0,33 l", price: 2.0, tags: ["veg"] },
        { name: "Sprite 0,33 l", price: 2.0, tags: ["veg"] },
        { name: "Softdrinks 1,0 l", price: 3.5, tags: ["veg"], desc: "Coca-Cola, Cola Zero, Cola Light, Fanta, Sprite." },
        { name: "Bitburger 0,5 l", price: 3.0 }
      ]
    }
  ]
};
