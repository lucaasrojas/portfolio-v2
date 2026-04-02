'use client'
import { useState, useRef } from "react";

// ── Data ─────────────────────────────────────────────────────────────────────
const DEFAULT_GARMENT_TYPES = [
  "Remera","Camiseta","Musculosa","Camisa","Blusa","Top","Corset",
  "Sweater","Buzo","Hoodie","Cardigan",
  "Pantalón","Jean","Legging","Short","Falda","Bermuda",
  "Vestido","Mono / Jumpsuit",
  "Blazer","Campera","Tapado","Abrigo","Parka",
  "Zapatos","Botas","Sneakers","Sandalias","Tacos",
  "Cartera","Mochila","Cinturón","Sombrero","Bufanda","Collar","Aros","Anillo",
  "Ropa interior","Corpiño","Pijama","Calza"
];
const COLORS = [
  { name:"Negro", hex:"#1a1a1a" },{ name:"Blanco", hex:"#f5f5f5" },
  { name:"Gris", hex:"#888" },{ name:"Rojo", hex:"#c0392b" },
  { name:"Bordo", hex:"#6d1a2a" },{ name:"Rosa", hex:"#e991b0" },
  { name:"Lila", hex:"#9b59b6" },{ name:"Azul", hex:"#2980b9" },
  { name:"Azul marino", hex:"#1a3a5c" },{ name:"Verde", hex:"#27ae60" },
  { name:"Beige", hex:"#c9a87c" },{ name:"Marrón", hex:"#7d5a45" },
  { name:"Naranja", hex:"#e07c24" },{ name:"Amarillo", hex:"#c9a800" },
  { name:"Multicolor", hex:"conic-gradient(#e991b0,#9b59b6,#2980b9,#e991b0)" },
];
const MATERIALS = [
  "Algodón","Poliéster","Lino","Lana","Seda","Raso / Satén",
  "Denim","Cuero","Cuero vegano","Encaje","Terciopelo",
  "Crochet / tejido","Tul","Nylon","Spandex / Elastán","Mezcla / blend"
];
const OCCASIONS = [
  "Casual","Trabajo / Oficina","Salida nocturna","Cita","Evento / Fiesta",
  "Formal","Deportivo","Playa / Verano","Viaje","Estar en casa"
];
const SEASONS = ["Todo el año","Primavera","Verano","Otoño","Invierno"];
const STYLES = ["Casual","Formal","Grunge","Dark feminine","Streetwear","Romántico","Deportivo","Y2K","Boho"];
const CATEGORIES = ["Tops","Bottoms","Vestidos","Outerwear","Zapatos","Accesorios","Ropa interior","Activewear"];

const CAT_MAP = {
  "Tops":["Remera","Camiseta","Musculosa","Camisa","Blusa","Top","Corset","Sweater","Buzo","Hoodie","Cardigan"],
  "Bottoms":["Pantalón","Jean","Short","Falda","Bermuda"],
  "Vestidos":["Vestido","Mono / Jumpsuit"],
  "Outerwear":["Blazer","Campera","Tapado","Abrigo","Parka"],
  "Zapatos":["Zapatos","Botas","Sneakers","Sandalias","Tacos"],
  "Accesorios":["Cartera","Mochila","Cinturón","Sombrero","Bufanda","Collar","Aros","Anillo"],
  "Ropa interior":["Ropa interior","Corpiño","Pijama"],
  "Activewear":["Legging","Calza"],
};

const SAMPLE_WARDROBE = [
  { id:1, name:"Blazer negro oversize", types:["Blazer"], color:"Negro", style:"Dark feminine", seasons:["Todo el año"], occasions:["Trabajo / Oficina","Salida nocturna"], material:"Lana", photo:null, tags:["básico","versátil"] },
  { id:2, name:"Top corset encaje", types:["Corset"], color:"Negro", style:"Dark feminine", seasons:["Todo el año"], occasions:["Salida nocturna","Cita"], material:"Encaje", photo:null, tags:["salir","favorita"] },
  { id:3, name:"Jeans cargo wide leg", types:["Jean"], color:"Gris", style:"Grunge", seasons:["Todo el año"], occasions:["Casual"], material:"Denim", photo:null, tags:["casual"] },
  { id:4, name:"Vestido midi seda", types:["Vestido"], color:"Rojo", style:"Dark feminine", seasons:["Otoño"], occasions:["Cita","Evento / Fiesta"], material:"Seda", photo:null, tags:["especial"] },
  { id:5, name:"Botas plataforma", types:["Botas"], color:"Negro", style:"Grunge", seasons:["Todo el año"], occasions:["Casual","Salida nocturna"], material:"Cuero vegano", photo:null, tags:["básico"] },
  { id:6, name:"Collar cadena gruesa", types:["Collar"], color:"Negro", style:"Dark feminine", seasons:["Todo el año"], occasions:["Salida nocturna","Casual"], material:"Mezcla / blend", photo:null, tags:["accesorio fav"] },
];
const SAMPLE_OUTFITS = [{ id:1, name:"Office dark", pieces:[1,2,3,5], notes:"Para reuniones importantes" }];
const SAMPLE_TRIPS = [{ id:1, name:"Paris trip", dates:"Jun 2025", items:[4,6] }];

const BLANK_ITEM = { name:"", types:[], color:"Negro", style:"Dark feminine", seasons:["Todo el año"], occasions:[], material:"Algodón", photo:null, tags:"" };

// ── Icons ─────────────────────────────────────────────────────────────────────
const Icon = ({ path, size=18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d={path}/>
  </svg>
);
const IC = {
  shirt:"M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.57a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.57a2 2 0 0 0-1.34-2.23z",
  plus:"M12 5v14M5 12h14",
  trash:"M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6",
  suitcase:"M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",
  star:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  sparkle:"M12 3v1m0 16v1M4.22 4.22l.7.7m12.16 12.16.7.7M1 12h1m18 0h1M4.22 19.78l.7-.7M18.36 5.64l.7-.7M12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7z",
  x:"M18 6L6 18M6 6l12 12",
  check:"M20 6L9 17l-5-5",
  camera:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
};

// ── MultiToggle ────────────────────────────────────────────────────────────────
function MultiToggle({ options, selected, onToggle, single=false }) {
  return (
    <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
      {options.map(opt => {
        const active = selected.includes(opt);
        return (
          <button key={opt} onClick={() => onToggle(opt)} style={{
            padding:"5px 11px", borderRadius:20, border:"1px solid",
            borderColor: active ? "var(--accent)" : "var(--border)",
            background: active ? "rgba(192,132,220,0.15)" : "var(--surface2)",
            color: active ? "var(--accent)" : "var(--muted)",
            fontSize:12, cursor:"pointer", transition:"all 0.15s", fontFamily:"'DM Sans',sans-serif"
          }}>{opt}</button>
        );
      })}
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────
export default function WardrobeApp() {
  const [view, setView] = useState("wardrobe");
  const [wardrobe, setWardrobe] = useState(SAMPLE_WARDROBE);
  const [outfits, setOutfits] = useState(SAMPLE_OUTFITS);
  const [trips, setTrips] = useState(SAMPLE_TRIPS);
  const [filterCat, setFilterCat] = useState("Todas");
  const [searchQ, setSearchQ] = useState("");

  const [showAddItem, setShowAddItem] = useState(false);
  const [showAddOutfit, setShowAddOutfit] = useState(false);
  const [showAddTrip, setShowAddTrip] = useState(false);
  const [showAddType, setShowAddType] = useState(false);
  const [newTypeName, setNewTypeName] = useState("");
  const [garmentTypes, setGarmentTypes] = useState(DEFAULT_GARMENT_TYPES);

  const [newItem, setNewItem] = useState({ ...BLANK_ITEM });
  const [newOutfit, setNewOutfit] = useState({ name:"", notes:"" });
  const [newTrip, setNewTrip] = useState({ name:"", dates:"" });
  const [selOutfit, setSelOutfit] = useState([]);
  const [selTrip, setSelTrip] = useState([]);
  const [expandedTrip, setExpandedTrip] = useState(null);

  const [aiResult, setAiResult] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiPrompt, setAiPrompt] = useState("");

  const photoRef = useRef(null);

  const toggleArr = (arr, val) => arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val];

  const filtered = wardrobe.filter(item => {
    const matchCat = filterCat === "Todas" || item.types.some(t => CAT_MAP[filterCat]?.includes(t));
    const matchSearch = item.name.toLowerCase().includes(searchQ.toLowerCase()) || item.types.some(t => t.toLowerCase().includes(searchQ.toLowerCase()));
    return matchCat && matchSearch;
  });

  const handlePhoto = (e) => {
    const file = e.target.files[0]; if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => setNewItem(p => ({ ...p, photo: ev.target.result }));
    reader.readAsDataURL(file);
  };

  const addCustomType = () => {
    const t = newTypeName.trim(); if (!t) return;
    if (!garmentTypes.includes(t)) setGarmentTypes(p => [...p, t]);
    setNewItem(p => ({ ...p, types: p.types.includes(t) ? p.types : [...p.types, t] }));
    setNewTypeName(""); setShowAddType(false);
  };

  const addItem = () => {
    if (!newItem.name.trim() || newItem.types.length === 0) return;
    setWardrobe(p => [...p, { ...newItem, id: Date.now(), tags: newItem.tags.split(",").map(t => t.trim()).filter(Boolean) }]);
    setNewItem({ ...BLANK_ITEM }); setShowAddItem(false);
  };

  const removeItem = (id) => setWardrobe(p => p.filter(i => i.id !== id));

  const addOutfit = () => {
    if (!newOutfit.name.trim() || selOutfit.length === 0) return;
    setOutfits(p => [...p, { id: Date.now(), ...newOutfit, pieces: selOutfit }]);
    setNewOutfit({ name:"", notes:"" }); setSelOutfit([]); setShowAddOutfit(false);
  };

  const addTrip = () => {
    if (!newTrip.name.trim()) return;
    setTrips(p => [...p, { id: Date.now(), ...newTrip, items: selTrip }]);
    setNewTrip({ name:"", dates:"" }); setSelTrip([]); setShowAddTrip(false);
  };

  const callAI = async () => {
    // if (!aiPrompt.trim()) return;
    // setAiLoading(true); setAiResult("");
    // const list = wardrobe.map(i => `- ${i.name} (${i.types.join(", ")}, ${i.color}, estilo: ${i.style}, ocasiones: ${i.occasions.join(", ")}, temporadas: ${i.seasons.join(", ")}, material: ${i.material})`).join("\n");
    // try {
    //   const res = await fetch("https://api.anthropic.com/v1/messages", {
    //     method:"POST", headers:{ "Content-Type":"application/json" },
    //     body: JSON.stringify({
    //       model:"claude-sonnet-4-20250514", max_tokens:1000,
    //       system:`Sos una estilista personal experta en moda, especialmente en estéticas dark feminine, soft grunge y streetwear. El usuario tiene este guardarropa:\n\n${list}\n\nRespondé de manera concisa, práctica y con personalidad. Usá emojis con moderación. Hablá en español rioplatense informal.`,
    //       messages:[{ role:"user", content: aiPrompt }]
    //     })
    //   });
    //   const data = await res.json();
    //   setAiResult(data.content?.map(b => b.text||"").join("") || "Sin respuesta.");
    // } catch { setAiResult("Error al conectar. Intentá de nuevo."); }
    // setAiLoading(false);
  };

  const getItem = (id) => wardrobe.find(i => i.id === id);
  const getHex = (name) => COLORS.find(c => c.name === name)?.hex || "#888";

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');
    *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
    :root { --bg:#0e0c10; --surface:#17141c; --surface2:#1f1a27; --border:#2d2535; --accent:#c084dc; --accent2:#e991b0; --text:#e8e0f0; --muted:#7a6d8a; --danger:#a03060; }
    body { background:var(--bg); color:var(--text); font-family:'DM Sans',sans-serif; min-height:100vh; }
    .app { max-width:480px; margin:0 auto; min-height:100vh; display:flex; flex-direction:column; }
    .header { padding:28px 20px 16px; background:linear-gradient(180deg,#1a1020 0%,transparent 100%); }
    .header-title { font-family:'Playfair Display',serif; font-size:26px; letter-spacing:-0.5px; }
    .header-title em { color:var(--accent); font-style:italic; }
    .header-sub { font-size:12px; color:var(--muted); margin-top:2px; letter-spacing:1.5px; text-transform:uppercase; }
    .nav { display:flex; gap:4px; padding:12px 16px; background:var(--surface); border-bottom:1px solid var(--border); }
    .nav-btn { flex:1; padding:8px 4px; border:none; background:transparent; color:var(--muted); font-family:'DM Sans',sans-serif; font-size:11px; font-weight:500; letter-spacing:.8px; text-transform:uppercase; cursor:pointer; border-radius:8px; transition:all .2s; display:flex; flex-direction:column; align-items:center; gap:4px; }
    .nav-btn.active { background:linear-gradient(135deg,rgba(192,132,220,.2),rgba(233,145,176,.1)); color:var(--accent); }
    .nav-btn:hover:not(.active) { color:var(--text); background:var(--surface2); }
    .content { flex:1; padding:16px; overflow-y:auto; }
    .search-bar { background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:10px 14px; width:100%; color:var(--text); font-family:'DM Sans',sans-serif; font-size:14px; margin-bottom:12px; outline:none; }
    .search-bar:focus { border-color:var(--accent); }
    .search-bar::placeholder { color:var(--muted); }
    .chips { display:flex; gap:8px; overflow-x:auto; padding-bottom:4px; margin-bottom:16px; scrollbar-width:none; }
    .chips::-webkit-scrollbar { display:none; }
    .chip { padding:5px 12px; border-radius:20px; border:1px solid var(--border); background:var(--surface); color:var(--muted); font-size:12px; font-weight:500; cursor:pointer; white-space:nowrap; transition:all .2s; }
    .chip.active { border-color:var(--accent); color:var(--accent); background:rgba(192,132,220,.12); }
    .item-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
    .item-card { background:var(--surface); border:1px solid var(--border); border-radius:14px; overflow:hidden; position:relative; transition:border-color .2s; }
    .item-card:hover { border-color:#3d3050; }
    .item-photo { width:100%; height:110px; object-fit:cover; display:block; }
    .item-nophoto { width:100%; height:70px; background:var(--surface2); display:flex; align-items:center; justify-content:center; color:var(--border); }
    .item-body { padding:10px 12px 12px; }
    .item-top-row { display:flex; align-items:center; justify-content:space-between; margin-bottom:6px; }
    .color-dot { width:12px; height:12px; border-radius:50%; flex-shrink:0; border:1px solid rgba(255,255,255,.1); }
    .item-delete { opacity:0; background:none; border:none; color:var(--danger); cursor:pointer; padding:2px; transition:opacity .2s; }
    .item-card:hover .item-delete { opacity:1; }
    .item-name { font-size:13px; font-weight:500; line-height:1.3; margin-bottom:3px; }
    .item-meta { font-size:10px; color:var(--muted); margin-bottom:5px; }
    .item-badge { font-size:10px; padding:2px 7px; background:rgba(233,145,176,.1); color:var(--accent2); border-radius:10px; border:1px solid rgba(233,145,176,.2); display:inline-block; margin-bottom:4px; }
    .item-tags { display:flex; flex-wrap:wrap; gap:3px; }
    .item-tag { font-size:10px; padding:2px 7px; background:rgba(192,132,220,.12); color:var(--accent); border-radius:10px; border:1px solid rgba(192,132,220,.2); }
    .fab { position:fixed; bottom:80px; right:20px; width:52px; height:52px; border-radius:50%; background:linear-gradient(135deg,var(--accent),var(--accent2)); border:none; color:white; cursor:pointer; display:flex; align-items:center; justify-content:center; box-shadow:0 4px 20px rgba(192,132,220,.4); z-index:100; transition:transform .2s; }
    .fab:hover { transform:scale(1.08); }
    .overlay { position:fixed; inset:0; background:rgba(10,8,14,.88); z-index:200; display:flex; align-items:flex-end; }
    .modal { background:var(--surface); border-radius:24px 24px 0 0; border:1px solid var(--border); padding:24px 20px 36px; width:100%; max-height:92vh; overflow-y:auto; }
    .modal-title { font-family:'Playfair Display',serif; font-size:20px; margin-bottom:20px; }
    .modal-close { float:right; background:none; border:none; color:var(--muted); cursor:pointer; padding:2px; }
    .field { margin-bottom:18px; }
    .field label { display:block; font-size:11px; color:var(--muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:8px; }
    .field input, .field select { width:100%; background:var(--surface2); border:1px solid var(--border); border-radius:10px; padding:10px 12px; color:var(--text); font-family:'DM Sans',sans-serif; font-size:14px; outline:none; }
    .field input:focus, .field select:focus { border-color:var(--accent); }
    .field select option { background:var(--surface2); }
    .btn-primary { width:100%; padding:13px; background:linear-gradient(135deg,var(--accent),var(--accent2)); border:none; border-radius:12px; color:white; font-family:'DM Sans',sans-serif; font-size:15px; font-weight:500; cursor:pointer; margin-top:8px; transition:opacity .2s; }
    .btn-primary:hover { opacity:.9; }
    .section-header { display:flex; align-items:center; justify-content:space-between; margin-bottom:14px; }
    .section-title { font-family:'Playfair Display',serif; font-size:18px; }
    .btn-sm { padding:7px 14px; background:var(--surface2); border:1px solid var(--border); border-radius:10px; color:var(--text); font-size:13px; cursor:pointer; display:flex; align-items:center; gap:6px; font-family:'DM Sans',sans-serif; }
    .btn-sm:hover { border-color:var(--accent); color:var(--accent); }
    .outfit-card,.trip-card { background:var(--surface); border:1px solid var(--border); border-radius:14px; padding:14px; margin-bottom:10px; cursor:pointer; transition:border-color .2s; }
    .outfit-card:hover,.trip-card:hover { border-color:#3d3050; }
    .outfit-pieces { display:flex; flex-wrap:wrap; gap:6px; margin-top:10px; }
    .outfit-piece { font-size:11px; padding:3px 9px; background:var(--surface2); border:1px solid var(--border); border-radius:8px; color:var(--muted); }
    .piece-list { max-height:200px; overflow-y:auto; border:1px solid var(--border); border-radius:10px; }
    .piece-option { display:flex; align-items:center; gap:10px; padding:10px 12px; border-bottom:1px solid var(--border); cursor:pointer; transition:background .15s; }
    .piece-option:last-child { border-bottom:none; }
    .piece-option:hover { background:var(--surface2); }
    .piece-option.selected { background:rgba(192,132,220,.1); }
    .pcheck { width:16px; height:16px; border-radius:4px; border:1.5px solid var(--border); flex-shrink:0; display:flex; align-items:center; justify-content:center; }
    .piece-option.selected .pcheck { background:var(--accent); border-color:var(--accent); }
    .ai-card { background:linear-gradient(135deg,rgba(192,132,220,.08),rgba(233,145,176,.06)); border:1px solid rgba(192,132,220,.25); border-radius:16px; padding:18px; margin-bottom:16px; }
    .ai-title { font-family:'Playfair Display',serif; font-size:16px; color:var(--accent); margin-bottom:6px; }
    .ai-sub { font-size:12px; color:var(--muted); margin-bottom:14px; line-height:1.5; }
    .ai-suggestions { display:flex; flex-direction:column; gap:8px; margin-bottom:14px; }
    .ai-sug { padding:9px 13px; background:var(--surface); border:1px solid var(--border); border-radius:10px; font-size:12px; color:var(--muted); cursor:pointer; transition:all .2s; text-align:left; font-family:'DM Sans',sans-serif; }
    .ai-sug:hover { border-color:var(--accent); color:var(--accent); }
    .ai-row { display:flex; gap:8px; }
    .ai-input { flex:1; background:var(--surface); border:1px solid var(--border); border-radius:10px; padding:10px 12px; color:var(--text); font-family:'DM Sans',sans-serif; font-size:13px; outline:none; }
    .ai-input:focus { border-color:var(--accent); }
    .ai-send { padding:10px 16px; background:linear-gradient(135deg,var(--accent),var(--accent2)); border:none; border-radius:10px; color:white; font-size:13px; cursor:pointer; font-family:'DM Sans',sans-serif; }
    .ai-result { margin-top:14px; padding:14px; background:var(--surface); border:1px solid var(--border); border-radius:12px; font-size:13px; line-height:1.7; white-space:pre-wrap; }
    .stats-row { display:grid; grid-template-columns:repeat(3,1fr); gap:10px; margin-bottom:20px; }
    .stat-card { background:var(--surface); border:1px solid var(--border); border-radius:12px; padding:12px; text-align:center; }
    .stat-num { font-family:'Playfair Display',serif; font-size:22px; color:var(--accent); }
    .stat-label { font-size:10px; color:var(--muted); text-transform:uppercase; letter-spacing:.8px; margin-top:2px; }
    .empty { text-align:center; padding:40px 20px; color:var(--muted); font-size:13px; }
    .photo-zone { width:100%; height:150px; border:2px dashed var(--border); border-radius:14px; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:8px; cursor:pointer; transition:border-color .2s; position:relative; overflow:hidden; background:var(--surface2); }
    .photo-zone:hover { border-color:var(--accent); }
    .photo-zone img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
    .photo-zone-label { font-size:12px; color:var(--muted); z-index:1; }
    .photo-hover { position:absolute; inset:0; background:rgba(0,0,0,.5); display:flex; align-items:center; justify-content:center; opacity:0; transition:opacity .2s; z-index:2; }
    .photo-zone:hover .photo-hover { opacity:1; }
    .add-type-row { display:flex; gap:8px; margin-top:10px; }
    .add-type-inp { flex:1; background:var(--surface2); border:1px solid var(--border); border-radius:10px; padding:8px 12px; color:var(--text); font-family:'DM Sans',sans-serif; font-size:13px; outline:none; }
    .add-type-inp:focus { border-color:var(--accent); }
    .add-type-btn { padding:8px 12px; background:rgba(192,132,220,.15); border:1px solid var(--accent); border-radius:10px; color:var(--accent); font-size:13px; cursor:pointer; font-family:'DM Sans',sans-serif; white-space:nowrap; }
    .divider { height:1px; background:var(--border); margin:6px 0 16px; }
    ::-webkit-scrollbar { width:4px; }
    ::-webkit-scrollbar-track { background:transparent; }
    ::-webkit-scrollbar-thumb { background:var(--border); border-radius:2px; }
  `;

  const QUICK_PROMPTS = [
    "¿Qué outfit armás con lo que tengo para una salida nocturna?",
    "¿Qué me faltaría comprar para tener looks más completos?",
    "¿Cómo mejoraría la base de mi guardarropa?",
  ];

  return (
    <>
      <style>{css}</style>
      <div className="app">

        <div className="header">
          <div className="header-title">My <em>Wardrobe</em></div>
          <div className="header-sub">armario digital · style tracker</div>
        </div>

         <nav className="nav">
          {[
            { id:"wardrobe", label:"Ropa", icon:IC.shirt },
            { id:"outfits", label:"Outfits", icon:IC.star },
            { id:"trips", label:"Viajes", icon:IC.suitcase },
            { id:"ai", label:"IA Estilista", icon:IC.sparkle },
          ].map(({ id, label, icon }) => (
            <button key={id} className={`nav-btn ${view===id?"active":""}`} onClick={()=>setView(id)}>
              <Icon path={icon} size={16}/>{label}
            </button>
          ))}
        </nav>

        <div className="content">

          {/* ══ WARDROBE ══ */}
           {view==="wardrobe" && <>
            <div className="stats-row">
              <div className="stat-card"><div className="stat-num">{wardrobe.length}</div><div className="stat-label">Prendas</div></div>
              <div className="stat-card"><div className="stat-num">{outfits.length}</div><div className="stat-label">Outfits</div></div>
              <div className="stat-card"><div className="stat-num">{[...new Set(wardrobe.flatMap(i=>i.types))].length}</div><div className="stat-label">Tipos</div></div>
            </div>
            <input className="search-bar" placeholder="Buscar prenda o tipo..." value={searchQ} onChange={e=>setSearchQ(e.target.value)}/>
            <div className="chips">
              {["Todas",...CATEGORIES].map(c=>(
                <button key={c} className={`chip ${filterCat===c?"active":""}`} onClick={()=>setFilterCat(c)}>{c}</button>
              ))}
            </div>
            {filtered.length===0
              ? <div className="empty">No hay prendas que coincidan</div>
              : <div className="item-grid">
                {filtered.map(item=>(
                  <div key={item.id} className="item-card">
                    {item.photo
                      ? <div style={{position:"relative"}}>
                          <img src={item.photo} alt={item.name} className="item-photo"/>
                          <button className="item-delete" onClick={()=>removeItem(item.id)}
                            style={{position:"absolute",top:6,right:6,opacity:1,background:"rgba(0,0,0,.55)",borderRadius:6,padding:4}}>
                            <Icon path={IC.trash} size={13}/>
                          </button>
                        </div>
                      : <div className="item-nophoto"><Icon path={IC.camera} size={20}/></div>
                    }
                    <div className="item-body">
                      <div className="item-top-row">
                        <div className="color-dot" style={{background:getHex(item.color)}}/>
                        {!item.photo && <button className="item-delete" onClick={()=>removeItem(item.id)}><Icon path={IC.trash} size={13}/></button>}
                      </div>
                      <div className="item-name">{item.name}</div>
                      <div className="item-meta">{item.types.join(" · ")}{item.material ? ` · ${item.material}` : ""}</div>
                      <div className="item-badge">{item.style}</div>
                      {item.occasions.length>0 && (
                        <div className="item-tags">
                          {item.occasions.slice(0,2).map(o=><span key={o} className="item-tag">{o}</span>)}
                          {item.occasions.length>2 && <span className="item-tag">+{item.occasions.length-2}</span>}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            }
          </>}

          {/* ══ OUTFITS ══ */}
           {view==="outfits" && <>
            <div className="section-header">
              <div className="section-title">Outfits guardados</div>
              <button className="btn-sm" onClick={()=>setShowAddOutfit(true)}><Icon path={IC.plus} size={14}/> Nuevo</button>
            </div>
            {outfits.length===0 && <div className="empty">Todavía no armaste ningún outfit</div>}
            {outfits.map(o=>(
              <div key={o.id} className="outfit-card">
                <div style={{fontWeight:500,marginBottom:4}}>{o.name}</div>
                {o.notes && <div style={{fontSize:12,color:"var(--muted)"}}>{o.notes}</div>}
                <div className="outfit-pieces">
                  {o.pieces.map(pid=>{ const it=getItem(pid); return it?<span key={pid} className="outfit-piece">{it.name}</span>:null; })}
                </div>
              </div>
            ))}
          </>}

          {/* ══ TRIPS ══ */}
          {view==="trips" && <>
            <div className="section-header">
              <div className="section-title">Viajes</div>
              <button className="btn-sm" onClick={()=>setShowAddTrip(true)}><Icon path={IC.plus} size={14}/> Nuevo</button>
            </div>
            {trips.length===0 && <div className="empty">No tenés viajes planeados</div>}
            {trips.map(t=>(
              <div key={t.id} className="trip-card" onClick={()=>setExpandedTrip(expandedTrip===t.id?null:t.id)}>
                <div style={{fontWeight:500}}>{t.name}</div>
                <div style={{fontSize:11,color:"var(--accent)",marginTop:2}}>{t.dates}</div>
                <div style={{fontSize:12,color:"var(--muted)",marginTop:2}}>{t.items.length} prenda{t.items.length!==1?"s":""}</div>
                {expandedTrip===t.id && (
                  <div className="outfit-pieces" style={{marginTop:10}}>
                    {t.items.map(pid=>{ const it=getItem(pid); return it?<span key={pid} className="outfit-piece">{it.name}</span>:null; })}
                  </div>
                )}
              </div>
            ))}
          </>}

          {/* ══ AI ══ */}
          {/* {view==="ai" && <>
            <div className="ai-card">
              <div className="ai-title">✦ Estilista IA</div>
              <div className="ai-sub">Preguntale sobre outfits, qué te falta comprar o cómo mejorar tu guardarropa.</div>
              <div className="ai-suggestions">
                {QUICK_PROMPTS.map((p,i)=><button key={i} className="ai-sug" onClick={()=>setAiPrompt(p)}>{p}</button>)}
              </div>
              <div className="ai-row">
                <input className="ai-input" placeholder="Preguntale algo..." value={aiPrompt} onChange={e=>setAiPrompt(e.target.value)} onKeyDown={e=>e.key==="Enter"&&callAI()}/>
                <button className="ai-send" onClick={callAI} disabled={aiLoading}>{aiLoading?"...":"Consultar"}</button>
              </div>
              {aiLoading && <div style={{textAlign:"center",color:"var(--accent)",fontSize:13,padding:14}}>✦ Analizando tu guardarropa...</div>}
              {aiResult && <div className="ai-result">{aiResult}</div>}
            </div>
            <div style={{fontSize:15,fontFamily:"'Playfair Display',serif",marginBottom:12}}>Tipos en tu guardarropa</div>
            {[...new Set(wardrobe.flatMap(i=>i.types))].sort().map(type=>{
              const count=wardrobe.filter(i=>i.types.includes(type)).length;
              return (
                <div key={type} style={{display:"flex",justifyContent:"space-between",padding:"9px 0",borderBottom:"1px solid var(--border)",fontSize:13,color:"var(--muted)"}}>
                  <span>{type}</span>
                  <span style={{color:count<2?"var(--accent2)":"var(--text)"}}>{count}{count<2?" ⚠":""}</span>
                </div>
              );
            })}
          </>} */}
        </div>

        {view==="wardrobe" && (
          <button className="fab" onClick={()=>setShowAddItem(true)}>
            <Icon path={IC.plus} size={22}/>
          </button>
        )}

        {/* ══ MODAL: Agregar prenda ══ */}
        {showAddItem && (
          <div className="overlay" >
            <div className="modal" >
              <div className="modal-title">
                Agregar prenda
                <button className="modal-close" ></button>
              </div>

              {/* Foto */}
               <div className="field">
                <label>Foto de la prenda</label>
                <div className="photo-zone" onClick={()=>photoRef.current?.click()}>
                  {newItem.photo && <img src={newItem.photo} alt="preview"/>}
                  {newItem.photo && <div className="photo-hover"><span style={{color:"white",fontSize:12}}>Cambiar foto</span></div>}
                  {!newItem.photo && <>
                    <Icon path={IC.camera} size={30}/>
                    <span className="photo-zone-label">Tocá para agregar una foto</span>
                  </>}
                </div>
                <input ref={photoRef} type="file" accept="image/*" style={{display:"none"}} onChange={handlePhoto}/>
              </div> 

              {/* Nombre */}
               <div className="field">
                <label>Nombre</label>
                <input placeholder="Ej: Blazer negro oversize" value={newItem.name} onChange={e=>setNewItem({...newItem,name:e.target.value})}/>
              </div> 

              {/* Tipo — multi-select + agregar nuevo */}
               <div className="field">
                <label>Tipo de prenda — elegí uno o más</label>
                <MultiToggle
                  options={garmentTypes}
                  selected={newItem.types}
                  onToggle={val=>setNewItem(p=>({...p, types:toggleArr(p.types,val)}))}
                />
                {!showAddType
                  ? <button onClick={()=>setShowAddType(true)} style={{marginTop:10,background:"none",border:"1px dashed var(--border)",borderRadius:10,padding:"6px 12px",color:"var(--muted)",fontSize:12,cursor:"pointer",display:"flex",alignItems:"center",gap:6,fontFamily:"'DM Sans',sans-serif"}}>
                      <Icon path={IC.plus} size={12}/> Agregar tipo personalizado
                    </button>
                  : <div className="add-type-row">
                      <input className="add-type-inp" placeholder="Ej: Kimono, Crop top..." value={newTypeName} onChange={e=>setNewTypeName(e.target.value)} onKeyDown={e=>e.key==="Enter"&&addCustomType()} autoFocus/>
                      <button className="add-type-btn" onClick={addCustomType}>Agregar</button>
                      <button onClick={()=>{setShowAddType(false);setNewTypeName("");}} style={{background:"none",border:"none",color:"var(--muted)",cursor:"pointer",padding:"0 4px"}}><Icon path={IC.x} size={15}/></button>
                    </div>
                }
                {newItem.types.length>0 && (
                  <div style={{marginTop:8,fontSize:11,color:"var(--accent)"}}>
                    Seleccionado: {newItem.types.join(", ")}
                  </div>
                )}
              </div> 

              {/* Color — puntos visuales */}
               <div className="field">
                <label>Color</label>
                <div style={{display:"flex",flexWrap:"wrap",gap:10,alignItems:"center"}}>
                  {COLORS.map(c=>(
                    <button key={c.name} onClick={()=>setNewItem(p=>({...p,color:c.name}))} title={c.name}
                      style={{
                        width:30,height:30,borderRadius:"50%",background:c.hex,border:"2.5px solid",
                        borderColor:newItem.color===c.name?"var(--accent)":"transparent",
                        cursor:"pointer",outline:newItem.color===c.name?"2px solid var(--accent)":"none",
                        outlineOffset:2,flexShrink:0,transition:"outline .15s"
                      }}
                    />
                  ))}
                </div>
                <div style={{fontSize:12,color:"var(--muted)",marginTop:6}}>
                  Color: <span style={{color:"var(--text)"}}>{newItem.color}</span>
                </div>
              </div> 

              {/* Material */}
               <div className="field">
                <label>Material</label>
                <MultiToggle
                  options={MATERIALS}
                  selected={[newItem.material]}
                  onToggle={val=>setNewItem(p=>({...p,material:val}))}
                  single
                />
              </div> 

              {/* Ocasión */}
               <div className="field">
                <label>Ocasión — podés elegir varias</label>
                <MultiToggle
                  options={OCCASIONS}
                  selected={newItem.occasions}
                  onToggle={val=>setNewItem(p=>({...p,occasions:toggleArr(p.occasions,val)}))}
                />
              </div> 

              {/* Temporada */}
               <div className="field">
                <label>Temporada — podés elegir varias</label>
                <MultiToggle
                  options={SEASONS}
                  selected={newItem.seasons}
                  onToggle={val=>setNewItem(p=>({...p,seasons:toggleArr(p.seasons,val)}))}
                />
              </div> 

              {/* Estilo */}
               <div className="field">
                <label>Estilo</label>
                <select value={newItem.style} onChange={e=>setNewItem({...newItem,style:e.target.value})}>
                  {STYLES.map(s=><option key={s}>{s}</option>)}
                </select>
              </div> 

              {/* Tags */}
               <div className="field">
                <label>Tags (separados por coma)</label>
                <input placeholder="favorita, básico, regalo..." value={newItem.tags} onChange={e=>setNewItem({...newItem,tags:e.target.value})}/>
              </div> 

              <button className="btn-primary" onClick={addItem}>
                Agregar al guardarropa
              </button>
            </div>
          </div>
        )}

        {/* ══ MODAL: Add Outfit ══ */}
        {showAddOutfit && (
          <div className="overlay" onClick={()=>setShowAddOutfit(false)}>
            <div className="modal" onClick={e=>e.stopPropagation()}>
              <div className="modal-title">Nuevo outfit <button className="modal-close" onClick={()=>setShowAddOutfit(false)}><Icon path={IC.x} size={18}/></button></div>
              <div className="field"><label>Nombre</label><input placeholder="Ej: Office dark" value={newOutfit.name} onChange={e=>setNewOutfit({...newOutfit,name:e.target.value})}/></div>
              <div className="field"><label>Notas</label><input placeholder="Para qué ocasión..." value={newOutfit.notes} onChange={e=>setNewOutfit({...newOutfit,notes:e.target.value})}/></div>
              <div className="field">
                <label>Prendas ({selOutfit.length} elegidas)</label>
                <div className="piece-list">
                  {wardrobe.map(item=>(
                    <div key={item.id} className={`piece-option ${selOutfit.includes(item.id)?"selected":""}`}
                      onClick={()=>setSelOutfit(p=>p.includes(item.id)?p.filter(x=>x!==item.id):[...p,item.id])}>
                      <div className="pcheck">{selOutfit.includes(item.id)&&<Icon path={IC.check} size={10}/>}</div>
                      <div><div style={{fontSize:13}}>{item.name}</div><div style={{fontSize:11,color:"var(--muted)"}}>{item.types.join(", ")}</div></div>
                    </div>
                  ))}
                </div>
              </div>
              <button className="btn-primary" onClick={addOutfit}>Guardar outfit</button>
            </div>
          </div>
        )}

        {/* ══ MODAL: Add Trip ══ */}
         {showAddTrip && (
          <div className="overlay" onClick={()=>setShowAddTrip(false)}>
            <div className="modal" onClick={e=>e.stopPropagation()}>
              <div className="modal-title">Nuevo viaje <button className="modal-close" onClick={()=>setShowAddTrip(false)}><Icon path={IC.x} size={18}/></button></div>
              <div className="field"><label>Destino</label><input placeholder="Ej: Paris trip..." value={newTrip.name} onChange={e=>setNewTrip({...newTrip,name:e.target.value})}/></div>
              <div className="field"><label>Fechas</label><input placeholder="Jun 2025" value={newTrip.dates} onChange={e=>setNewTrip({...newTrip,dates:e.target.value})}/></div>
              <div className="field">
                <label>Ropa que llevás ({selTrip.length} elegidas)</label>
                <div className="piece-list">
                  {wardrobe.map(item=>(
                    <div key={item.id} className={`piece-option ${selTrip.includes(item.id)?"selected":""}`}
                      onClick={()=>setSelTrip(p=>p.includes(item.id)?p.filter(x=>x!==item.id):[...p,item.id])}>
                      <div className="pcheck">{selTrip.includes(item.id)&&<Icon path={IC.check} size={10}/>}</div>
                      <div><div style={{fontSize:13}}>{item.name}</div><div style={{fontSize:11,color:"var(--muted)"}}>{item.color} · {item.types.join(", ")}</div></div>
                    </div>
                  ))}
                </div>
              </div>
              <button className="btn-primary" onClick={addTrip}>Guardar viaje</button>
            </div>
          </div>
        )}

      </div>
    </>
  );
}