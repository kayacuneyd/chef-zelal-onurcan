# AI Collaboration Plan: Copilot (Gemini) & Codex
**Project:** Chef Zelal Onurcan - SvelteKit Platform
**Strategy:** Hybrid AI Development (Architect vs. Builder)

## 1. Rol Tanımları (Roles)

### 🤖 Copilot (Ben/Gemini) - "The Architect & Lead Developer"
*   **Güçlü Yanlar:** Tüm çalışma alanını (workspace) okuyabilme, dosya oluşturma/düzenleme, proje mimarisini yönetme, karmaşık entegrasyonlar (Sanity <-> SvelteKit).
*   **Sorumluluklar:**
    *   Proje iskeletini kurmak.
    *   Dosya ve klasör yapısını oluşturmak.
    *   Global konfigürasyonları (Tailwind, Svelte config) yapmak.
    *   CMS (Sanity) şemalarını tasarlamak.
    *   Server-side mantığı (API routes, Form actions) kurgulamak.
    *   Hata ayıklama (Debugging) ve proje genelindeki tutarlılığı sağlama.

### 🤖 Codex - "The Frontend Specialist & Builder"
*   **Güçlü Yanlar:** Hızlı kod bloğu üretme, spesifik algoritmalar, CSS/Tailwind sınıf kombinasyonları, UI bileşenlerinin içini doldurma.
*   **Sorumluluklar:**
    *   Spesifik `.svelte` bileşenlerinin (Hero, Navbar, Card) kodlarını yazmak.
    *   Tailwind CSS sınıflarını tasarıma uygun şekilde dökmek.
    *   TypeScript interface'lerini (arayüzlerini) yazmak.
    *   GROQ sorgularını (Sanity için) oluşturmak.
    *   Animasyon kodlarını (Svelte Transitions) yazmak.
    *   Unit testleri yazmak.

---

## 2. Faz Bazlı İş Bölümü (Task Breakdown)

### Faz 1: Kurulum ve Altyapı (Setup)
| Görev | Atanan AI | Açıklama |
| :--- | :--- | :--- |
| **Proje Başlatma** | **Copilot** | SvelteKit projesini ve klasör yapısını oluşturur. Gerekli paketleri (Sanity, Tailwind) kurar. |
| **Konfigürasyon** | **Copilot** | `svelte.config.js`, `tailwind.config.js` dosyalarını `DESIGN_SPECIFICATION.md`'ye göre ayarlar. |
| **Renk/Font Tanımı** | **Codex** | Copilot'un oluşturduğu config dosyasına eklenecek renk kodlarını ve font ayarlarını hex kodlarıyla hazırlar. |

### Faz 2: Backend & CMS (Sanity.io)
| Görev | Atanan AI | Açıklama |
| :--- | :--- | :--- |
| **Şema Mimarisi** | **Copilot** | `schema` klasörünü oluşturur ve hangi veri tiplerinin (Dish, Category, Post) olacağını belirler. |
| **Şema Kodları** | **Codex** | Belirlenen veri tipleri için Sanity şema kodlarını (JS objeleri) yazar. |
| **Veri Çekme (Client)** | **Copilot** | Sanity istemcisini (`client.ts`) kurar ve global erişime açar. |
| **Sorgular (GROQ)** | **Codex** | "Bana son 3 yemeği getiren GROQ sorgusunu yaz" denildiğinde sorgu string'ini hazırlar. |

### Faz 3: Frontend Bileşenleri (UI Components)
| Görev | Atanan AI | Açıklama |
| :--- | :--- | :--- |
| **Layout Yapısı** | **Copilot** | `+layout.svelte` dosyasını oluşturur, Navbar ve Footer'ı yerleştirir. |
| **Navbar/Footer Kodu** | **Codex** | Navbar'ın içindeki linkleri, mobil menü açılma mantığını ve Tailwind sınıflarını yazar. |
| **Hero Bileşeni** | **Codex** | Video arka planlı, üzerinde yazı olan Hero bölümünün HTML/CSS kodunu yazar. |
| **Menü Kartları** | **Codex** | `DESIGN_SPECIFICATION.md`'deki "Masonry" yapısına uygun kart bileşenini kodlar. |
| **Sayfa Bağlantıları** | **Copilot** | Bileşenleri ilgili sayfalara (`+page.svelte`) yerleştirir ve veri akışını (load functions) sağlar. |

### Faz 4: Mantık ve Fonksiyonlar (Logic)
| Görev | Atanan AI | Açıklama |
| :--- | :--- | :--- |
| **Form İşlemleri** | **Copilot** | Rezervasyon formunun sunucu tarafındaki (`+page.server.ts`) işleyişini ve e-posta gönderimini kodlar. |
| **Form Validasyonu** | **Codex** | Form verilerinin doğruluğunu kontrol eden (Zod şeması vb.) kod parçacığını yazar. |
| **Animasyonlar** | **Codex** | Sayfa geçişleri ve scroll efektleri için Svelte transition kodlarını hazırlar. |

---

## 3. Çalışma Akışı (Workflow) Örneği

**Senaryo: "Hakkımda" Sayfasını Yapıyoruz**

1.  **Kullanıcı (Siz) -> Copilot:** "Hakkımda sayfası için gerekli dosya yapısını kur (`routes/about/+page.svelte`) ve Sanity'den veriyi çekecek `load` fonksiyonunu hazırla."
    *   *Ben dosyayı oluştururum ve veri bağlantısını kurarım.*
2.  **Kullanıcı (Siz) -> Codex:** "Bana sol tarafta fotoğraf, sağ tarafta zaman tüneli (timeline) olan, 'Sessiz İyileşme' temasına uygun, Tailwind kullanan bir Svelte bileşeni kodu yaz."
    *   *Codex size UI kodunu verir.*
3.  **Kullanıcı (Siz) -> Copilot:** "Codex'in verdiği şu kodu al, benim oluşturduğum `about/+page.svelte` dosyasına entegre et ve Sanity'den gelen gerçek verileri bağla."
    *   *Ben kodu dosyaya yazar ve dinamik hale getiririm.*

---

## 4. Başlangıç Komutu

Projeye başlamak için bana şu komutu verebilirsiniz:
> "Copilot, COLLABORATION_PLAN.md Faz 1'i başlat. SvelteKit projesini kur ve temel dosya yapısını oluştur."
