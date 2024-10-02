import React, { useEffect, useState } from "react";


const data = [{"id":1,"first_name":"Tallou","last_name":"Lovstrom","email":"tlovstrom0@deliciousdays.com","city":"Boyany"},
  {"id":2,"first_name":"Timotheus","last_name":"Tejada","email":"ttejada1@webeden.co.uk","city":"Jiangzao"},
  {"id":3,"first_name":"Justino","last_name":"Lissandri","email":"jlissandri2@buzzfeed.com","city":"Dahao"},
  {"id":4,"first_name":"Ginnie","last_name":"Hurtic","email":"ghurtic3@nbcnews.com","city":"Kladanj"},
  {"id":5,"first_name":"Emmalynne","last_name":"Goode","email":"egoode4@mail.ru","city":"New Orleans"},
  {"id":6,"first_name":"Erika","last_name":"Carvilla","email":"ecarvilla5@meetup.com","city":"Anjozorobe"},
  {"id":7,"first_name":"Baudoin","last_name":"Kilmurray","email":"bkilmurray6@netvibes.com","city":"Datun"},
  {"id":8,"first_name":"Sonni","last_name":"Yurov","email":"syurov7@yale.edu","city":"Sakon Nakhon"},
  {"id":9,"first_name":"Elysha","last_name":"Dyke","email":"edyke8@baidu.com","city":"Lazaro Cardenas"},
  {"id":10,"first_name":"Nealy","last_name":"Jalland","email":"njalland9@princeton.edu","city":"La Asunción"},
  {"id":11,"first_name":"Cherie","last_name":"Landor","email":"clandora@4shared.com","city":"Fatikchari"},
  {"id":12,"first_name":"Trenna","last_name":"Whissell","email":"twhissellb@netscape.com","city":"Molteno"},
  {"id":13,"first_name":"Jillayne","last_name":"Antonoczyk","email":"jantonoczykc@adobe.com","city":"Long Xuyên"},
  {"id":14,"first_name":"Allin","last_name":"Tomashov","email":"atomashovd@acquirethisname.com","city":"Zili"},
  {"id":15,"first_name":"Kaitlin","last_name":"Bursnoll","email":"kbursnolle@biblegateway.com","city":"Bulan"},
  {"id":16,"first_name":"Shannon","last_name":"Garforth","email":"sgarforthf@senate.gov","city":"Odienné"},
  {"id":17,"first_name":"Ronica","last_name":"Dagwell","email":"rdagwellg@w3.org","city":"Simeykyne"},
  {"id":18,"first_name":"Johny","last_name":"Watts","email":"jwattsh@usgs.gov","city":"Jaro"},
  {"id":19,"first_name":"Humphrey","last_name":"Squibe","email":"hsquibei@sohu.com","city":"Xujia"},
  {"id":20,"first_name":"Trudey","last_name":"Lintill","email":"tlintillj@illinois.edu","city":"Cẩm Phả"},
  {"id":21,"first_name":"Aymer","last_name":"Matelaitis","email":"amatelaitisk@ox.ac.uk","city":"Taosha"},
  {"id":22,"first_name":"Dorie","last_name":"Minguet","email":"dminguetl@liveinternet.ru","city":"Angoulême"},
  {"id":23,"first_name":"Krista","last_name":"Kluss","email":"kklussm@t-online.de","city":"Arras"},
  {"id":24,"first_name":"Phedra","last_name":"Scarce","email":"pscarcen@mysql.com","city":"Shihuiyao"},
  {"id":25,"first_name":"William","last_name":"Pitkethly","email":"wpitkethlyo@ibm.com","city":"Laliki"},
  {"id":26,"first_name":"Lauritz","last_name":"Hook","email":"lhookp@nhs.uk","city":"Bollène"},
  {"id":27,"first_name":"Winny","last_name":"Warre","email":"wwarreq@phoca.cz","city":"Ipiaú"},
  {"id":28,"first_name":"Marmaduke","last_name":"Westwick","email":"mwestwickr@adobe.com","city":"Los Fresnos"},
  {"id":29,"first_name":"Milty","last_name":"Dummer","email":"mdummers@delicious.com","city":"Prusice"},
  {"id":30,"first_name":"Fifine","last_name":"Croizier","email":"fcroiziert@google.com.br","city":"Gunjur Kuta"},
  {"id":31,"first_name":"Ethelbert","last_name":"Ryles","email":"erylesu@e-recht24.de","city":"Buta Ranquil"},
  {"id":32,"first_name":"Roldan","last_name":"Dorricott","email":"rdorricottv@histats.com","city":"Oklahoma City"},
  {"id":33,"first_name":"Helena","last_name":"Mars","email":"hmarsw@google.es","city":"Fushi"},
  {"id":34,"first_name":"Silvan","last_name":"Paolini","email":"spaolinix@microsoft.com","city":"Huddinge"},
  {"id":35,"first_name":"Averell","last_name":"Jobbins","email":"ajobbinsy@ehow.com","city":"Tvarožná"},
  {"id":36,"first_name":"Alisun","last_name":"Bensen","email":"abensenz@dot.gov","city":"Kadumelati"},
  {"id":37,"first_name":"Eloise","last_name":"Diperaus","email":"ediperaus10@google.com.au","city":"As Salţ"},
  {"id":38,"first_name":"Bev","last_name":"Kilgallen","email":"bkilgallen11@histats.com","city":"Sampangbitung"},
  {"id":39,"first_name":"Warden","last_name":"McCraine","email":"wmccraine12@scientificamerican.com","city":"Helsingborg"},
  {"id":40,"first_name":"Lil","last_name":"McCreedy","email":"lmccreedy13@sun.com","city":"Lokolande"},
  {"id":41,"first_name":"Waring","last_name":"Haliday","email":"whaliday14@blog.com","city":"Hearst"},
  {"id":42,"first_name":"Kyla","last_name":"Hartman","email":"khartman15@amazon.com","city":"Le Lamentin"},
  {"id":43,"first_name":"Malissa","last_name":"Baroche","email":"mbaroche16@epa.gov","city":"Sterlibashevo"},
  {"id":44,"first_name":"Normand","last_name":"Attride","email":"nattride17@purevolume.com","city":"Cicayur"},
  {"id":45,"first_name":"Hagan","last_name":"Fairholm","email":"hfairholm18@1und1.de","city":"Lebyazh’ye"},
  {"id":46,"first_name":"Kizzee","last_name":"Barrowclough","email":"kbarrowclough19@blinklist.com","city":"Szeged"},
  {"id":47,"first_name":"Correy","last_name":"Varga","email":"cvarga1a@sbwire.com","city":"Myhove"},
  {"id":48,"first_name":"Eldridge","last_name":"Johnes","email":"ejohnes1b@mit.edu","city":"Luodong"},
  {"id":49,"first_name":"Annamaria","last_name":"Leonardi","email":"aleonardi1c@networkadvertising.org","city":"Yunxiang"},
  {"id":50,"first_name":"Byran","last_name":"Brunon","email":"bbrunon1d@hubpages.com","city":"Surup"},
  {"id":51,"first_name":"Tuesday","last_name":"Mauchlen","email":"tmauchlen1e@jalbum.net","city":"Kalloní"},
  {"id":52,"first_name":"Fancy","last_name":"Perutto","email":"fperutto1f@shop-pro.jp","city":"Pórto Chéli"},
  {"id":53,"first_name":"Myrilla","last_name":"Hosburn","email":"mhosburn1g@stumbleupon.com","city":"Banjarsari"},
  {"id":54,"first_name":"Eudora","last_name":"Mingey","email":"emingey1h@reuters.com","city":"Llorente"},
  {"id":55,"first_name":"Benjamen","last_name":"Reeks","email":"breeks1i@jalbum.net","city":"Clermont-Ferrand"},
  {"id":56,"first_name":"Dilly","last_name":"Crannis","email":"dcrannis1j@de.vu","city":"Mar del Plata"},
  {"id":57,"first_name":"Hyacinthia","last_name":"Van der Linde","email":"hvanderlinde1k@hhs.gov","city":"Garbolovo"},
  {"id":58,"first_name":"Tracie","last_name":"Kuhlmey","email":"tkuhlmey1l@illinois.edu","city":"Neglasari"},
  {"id":59,"first_name":"Jennilee","last_name":"Bringloe","email":"jbringloe1m@spiegel.de","city":"‘Alāqahdārī Gēlān"},
  {"id":60,"first_name":"Taylor","last_name":"Ort","email":"tort1n@youku.com","city":"Pruszków"},
  {"id":61,"first_name":"Arlana","last_name":"O'Cannavan","email":"aocannavan1o@intel.com","city":"Beroroha"},
  {"id":62,"first_name":"Daron","last_name":"Evetts","email":"devetts1p@nhs.uk","city":"Lederaba"},
  {"id":63,"first_name":"Waring","last_name":"McCallion","email":"wmccallion1q@nsw.gov.au","city":"Hulei"},
  {"id":64,"first_name":"Davie","last_name":"Kops","email":"dkops1r@histats.com","city":"Orléans"},
  {"id":65,"first_name":"Creight","last_name":"Bracchi","email":"cbracchi1s@dion.ne.jp","city":"Watulumbung"},
  {"id":66,"first_name":"Collin","last_name":"Kief","email":"ckief1t@hubpages.com","city":"Sitangkai"},
  {"id":67,"first_name":"Flossi","last_name":"McElmurray","email":"fmcelmurray1u@msn.com","city":"Joaquín Suárez"},
  {"id":68,"first_name":"Crissy","last_name":"Kirkwood","email":"ckirkwood1v@state.gov","city":"Qiaoxi"},
  {"id":69,"first_name":"Samaria","last_name":"Sylett","email":"ssylett1w@facebook.com","city":"Tuanfeng"},
  {"id":70,"first_name":"Page","last_name":"Elven","email":"pelven1x@stumbleupon.com","city":"Kallithéa"},
  {"id":71,"first_name":"Trix","last_name":"Cripin","email":"tcripin1y@mapy.cz","city":"Novoselec"},
  {"id":72,"first_name":"Abramo","last_name":"Bolton","email":"abolton1z@pcworld.com","city":"Kota Kinabalu"},
  {"id":73,"first_name":"Bobine","last_name":"Hanny","email":"bhanny20@huffingtonpost.com","city":"Liushikou"},
  {"id":74,"first_name":"Darb","last_name":"Tall","email":"dtall21@census.gov","city":"Quốc Oai"},
  {"id":75,"first_name":"Abe","last_name":"Classen","email":"aclassen22@wix.com","city":"Macheke"},
  {"id":76,"first_name":"Jessie","last_name":"Dimond","email":"jdimond23@toplist.cz","city":"Singkir"},
  {"id":77,"first_name":"Matthaeus","last_name":"Seyers","email":"mseyers24@multiply.com","city":"Biny Selo"},
  {"id":78,"first_name":"Halli","last_name":"Peirce","email":"hpeirce25@adobe.com","city":"Schifflange"},
  {"id":79,"first_name":"Billie","last_name":"Orgel","email":"borgel26@ed.gov","city":"San Agustin"},
  {"id":80,"first_name":"Averell","last_name":"Yanele","email":"ayanele27@list-manage.com","city":"Lindi"},
  {"id":81,"first_name":"Peta","last_name":"Banke","email":"pbanke28@webs.com","city":"Luleå"},
  {"id":82,"first_name":"Susette","last_name":"Blockley","email":"sblockley29@usda.gov","city":"Všetaty"},
  {"id":83,"first_name":"Orsola","last_name":"Corriea","email":"ocorriea2a@imdb.com","city":"Bayambang"},
  {"id":84,"first_name":"Claudie","last_name":"Seville","email":"cseville2b@marriott.com","city":"Borik"},
  {"id":85,"first_name":"Hyacinthia","last_name":"Kilbride","email":"hkilbride2c@tinyurl.com","city":"Monchegorsk"},
  {"id":86,"first_name":"Lamar","last_name":"Mansuer","email":"lmansuer2d@foxnews.com","city":"Novopokrovka"},
  {"id":87,"first_name":"Alta","last_name":"St. Aubyn","email":"astaubyn2e@clickbank.net","city":"Yokohama"},
  {"id":88,"first_name":"Mirabel","last_name":"Gunningham","email":"mgunningham2f@ucla.edu","city":"Polos"},
  {"id":89,"first_name":"Gordie","last_name":"Mathew","email":"gmathew2g@icio.us","city":"Yanqul"},
  {"id":90,"first_name":"Esme","last_name":"Annes","email":"eannes2h@twitpic.com","city":"Aş Şafaqayn"},
  {"id":91,"first_name":"Trevar","last_name":"Sterke","email":"tsterke2i@networksolutions.com","city":"Skoroszyce"},
  {"id":92,"first_name":"Madalena","last_name":"Malim","email":"mmalim2j@discovery.com","city":"Tuzha"},
  {"id":93,"first_name":"Brenda","last_name":"Lester","email":"blester2k@yolasite.com","city":"Limoges"},
  {"id":94,"first_name":"Nicolette","last_name":"McCallion","email":"nmccallion2l@opera.com","city":"Shajing"},
  {"id":95,"first_name":"Prince","last_name":"Stripp","email":"pstripp2m@house.gov","city":"Motala"},
  {"id":96,"first_name":"Olivier","last_name":"Arens","email":"oarens2n@ibm.com","city":"Toulouse"},
  {"id":97,"first_name":"Angelico","last_name":"Dales","email":"adales2o@mapy.cz","city":"Changjiang"},
  {"id":98,"first_name":"Bastian","last_name":"Llywarch","email":"bllywarch2p@time.com","city":"Gaoqiu"},
  {"id":99,"first_name":"Addy","last_name":"Gradon","email":"agradon2q@over-blog.com","city":"Bayanbulag"},
  {"id":100,"first_name":"Melony","last_name":"Offin","email":"moffin2r@ucoz.com","city":"Zuolan"}];

  const Dashboard: React.FC = () => {
    const [username, setUsername] = useState<string | null>("");
    const [contacts, setContacts] = useState(data);
    const [search, setSearch] = useState("");
    const [sortField, setSortField] = useState<string | null>(null);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  
    useEffect(() => {
      const storedUsername = localStorage.getItem("username");
      setUsername(storedUsername);
    }, []);
  
    const handleSort = (field: keyof typeof contacts[number]) => {
      const newOrder = sortField === field && sortOrder === "asc" ? "desc" : "asc";
      setSortField(field);
      setSortOrder(newOrder);
    
      const sortedContacts = [...contacts].sort((a, b) => {
        const aValue = typeof a[field] === "string" ? a[field] : "";
        const bValue = typeof b[field] === "string" ? b[field] : "";
    
        if (newOrder === "asc") {
          return aValue.localeCompare(bValue);
        } else {
          return bValue.localeCompare(aValue);
        }
      });
    
      setContacts(sortedContacts);
    };
    
    return (
      <div className="p-4">
        <h1 className="text-center text-2xl font-bold mt-4">Mock Data</h1>
        <div className="my-4">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search data"
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-2 px-4 border cursor-pointer" onClick={() => handleSort("first_name")}>
                  First Name {sortField === "first_name" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                </th>
                <th className="py-2 px-4 border cursor-pointer" onClick={() => handleSort("last_name")}>
                  Last Name {sortField === "last_name" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                </th>
                <th className="py-2 px-4 border cursor-pointer" onClick={() => handleSort("email")}>
                  Email {sortField === "email" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                </th>
                <th className="py-2 px-4 border cursor-pointer" onClick={() => handleSort("city")}>
                  City {sortField === "city" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
                </th>
              </tr>
            </thead>
            <tbody>
              {contacts
                .filter((item) => {
                  return (
                    search.toLowerCase() === '' ||
                    item.first_name.toLowerCase().includes(search.toLowerCase()) ||
                    item.last_name.toLowerCase().includes(search.toLowerCase()) ||
                    item.email.toLowerCase().includes(search.toLowerCase()) ||
                    item.city.toLowerCase().includes(search.toLowerCase())
                  );
                })
                .map((item, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border">{item.first_name}</td>
                    <td className="py-2 px-4 border">{item.last_name}</td>
                    <td className="py-2 px-4 border">{item.email}</td>
                    <td className="py-2 px-4 border">{item.city}</td>
                  </tr>
                ))}
            </tbody>
          </table>
          {contacts.filter(item => {
            return (
              search.toLowerCase() === '' ||
              item.first_name.toLowerCase().includes(search.toLowerCase()) ||
              item.last_name.toLowerCase().includes(search.toLowerCase()) ||
              item.email.toLowerCase().includes(search.toLowerCase()) ||
              item.city.toLowerCase().includes(search.toLowerCase())
            );
          }).length === 0 && (
            <p className="text-center text-red-500">No results found</p>
          )}
        </div>
      </div>
    );
  }
  
  export default Dashboard;
