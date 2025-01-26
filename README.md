# Kişisel CV Web Sitesi

Bu proje, modern ve responsive bir kişisel CV web sitesi şablonudur. GitHub Pages üzerinde yayınlanabilir şekilde tasarlanmış olup, kolayca özelleştirilebilir bir yapıya sahiptir.

## Özellikler

- Modern ve responsive tasarım
- Türkçe/İngilizce dil desteği
- Smooth scroll animasyonları
- Mobil uyumlu tasarım
- Kolay özelleştirilebilir bölümler
- Font Awesome ikonları

## Başlangıç Adımları

1. Bu repository'yi fork edin:
   - Sağ üst köşedeki "Fork" butonuna tıklayın
   - Fork işlemi tamamlandıktan sonra kendi repository'nize yönlendirileceksiniz

2. Repository adını değiştirin:
   - Repository ayarlarına gidin (Settings)
   - Repository adını `KULLANICIADI.github.io` formatında değiştirin
   - Örnek: Eğer GitHub kullanıcı adınız "johndoe" ise, "johndoe.github.io" olarak değiştirin

3. Projeyi bilgisayarınıza klonlayın:
```bash
git clone https://github.com/KULLANICIADI/KULLANICIADI.github.io.git
cd KULLANICIADI.github.io
```

## Dosya Yapısı

```
KULLANICIADI.github.io/
│
├── index.html              # Ana HTML dosyası
├── static/
│   ├── css/
│   │   └── style.css      # Stil dosyası
│   ├── js/
│   │   └── main.js        # JavaScript dosyası
│   └── images/
│       └── profile.jpg    # Profil fotoğrafı
└── README.md
```

## Özelleştirme Adımları

### 1. Profil Bilgileri
`index.html` dosyasında aşağıdaki bölümleri değiştirin:

```html
<title>ADINIZ - Kişisel CV</title>
...
<div class="logo">
    <a href="#home">ADINIZ</a>
</div>
...
<div class="profile-image">
    <img src="static/images/FOTO.jpg" alt="ADINIZ">
</div>
<h1>ADINIZ</h1>
<p class="lead">UNVANINIZ</p>
```

### 2. Bölüm İçerikleri

#### Hakkımda Bölümü
- `about` section içindeki metni kendi bilgilerinizle güncelleyin
- Öne çıkan özellikleri kendi uzmanlık alanlarınıza göre düzenleyin
- Hem Türkçe hem İngilizce içeriği güncellemeyi unutmayın:
```html
<p data-tr="TÜRKÇE METİN" data-en="ENGLISH TEXT">TÜRKÇE METİN</p>
```

#### Eğitim Bölümü
- Her bir eğitim için:
```html
<div class="timeline-item">
    <div class="timeline-content">
        <h3 data-tr="OKUL ADI TR" data-en="SCHOOL NAME EN">OKUL ADI</h3>
        <p class="date">BAŞLANGIÇ - BİTİŞ</p>
        <p data-tr="BÖLÜM TR" data-en="DEPARTMENT EN">BÖLÜM</p>
        <p>ŞEHİR, ÜLKE</p>
    </div>
</div>
```

#### Deneyim Bölümü
- Her deneyim için:
```html
<div class="timeline-item">
    <div class="timeline-content">
        <h3>PROJE/ŞİRKET ADI</h3>
        <p class="date">SÜRE</p>
        <p class="role">POZİSYON</p>
        <p data-tr="TÜRKÇE AÇIKLAMA" data-en="İNGİLİZCE AÇIKLAMA">
            TÜRKÇE AÇIKLAMA
        </p>
    </div>
</div>
```

#### Yetenekler Bölümü
- [Font Awesome](https://fontawesome.com/icons) sitesinden uygun ikonları seçin
- Her yetenek için:
```html
<div class="skill-card">
    <i class="FONT-AWESOME-ICON"></i>
    <h3>TEKNOLOJİ ADI</h3>
    <p data-tr="TÜRKÇE AÇIKLAMA" data-en="İNGİLİZCE AÇIKLAMA">AÇIKLAMA</p>
</div>
```

#### Sertifikalar Bölümü
- Her sertifika için:
```html
<a href="SERTİFİKA_LİNKİ" class="certificate-card" target="_blank">
    <i class="fas fa-certificate"></i>
    <h3>SERTİFİKA ADI</h3>
    <p data-tr="TÜRKÇE AÇIKLAMA" data-en="İNGİLİZCE AÇIKLAMA">AÇIKLAMA</p>
</a>
```

#### İletişim Bölümü
- Sosyal medya linklerini güncelleyin:
```html
<a href="https://github.com/KULLANICIADI" class="contact-item" target="_blank">
<a href="https://linkedin.com/in/KULLANICIADI" class="contact-item" target="_blank">
<a href="mailto:MAILADRESINIZ" class="contact-item">
```

### 3. Stil Özelleştirmeleri

`static/css/style.css` dosyasında değiştirebileceğiniz önemli stiller:

```css
/* Ana renkler */
:root {
    --primary-color: #007bff;    /* Ana renk */
    --hover-color: #0056b3;      /* Hover rengi */
    --text-color: #333;          /* Metin rengi */
    --bg-color: #fff;            /* Arkaplan rengi */
}

/* Font ailesi */
body {
    font-family: 'Tercih ettiğiniz font', sans-serif;
}

/* Kart stilleri */
.card, .timeline-item, .skill-card {
    /* Kart tasarımını özelleştirin */
    background: var(--bg-color);
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}
```

## Deploy Etme

1. Profil fotoğrafınızı ekleyin:
   - Fotoğrafınızı `static/images/` klasörüne kopyalayın
   - `index.html` dosyasında fotoğraf yolunu güncelleyin

2. Tüm değişikliklerinizi commit edin:
```bash
git add .
git commit -m "Kişisel bilgiler güncellendi"
git push origin main
```

3. GitHub Pages'i aktifleştirin:
   - Repository ayarlarına gidin (Settings)
   - Sol menüden "Pages" seçeneğini bulun
   - "Source" kısmından "Deploy from a branch" seçin
   - Branch olarak "main" seçin
   - Save'e tıklayın
   - Birkaç dakika bekleyin, siteniz `https://KULLANICIADI.github.io` adresinde yayınlanacak

## Kontrol Listesi

Yayınlamadan önce şunları kontrol edin:

1. [ ] Tüm kişisel bilgiler güncellendi
2. [ ] Profil fotoğrafı eklendi ve görünüyor
3. [ ] Tüm linkler doğru çalışıyor
4. [ ] Türkçe/İngilizce çeviriler tamamlandı
5. [ ] Responsive tasarım farklı cihazlarda test edildi
6. [ ] Tüm sosyal medya linkleri güncellendi
7. [ ] Font Awesome ikonları doğru görünüyor
8. [ ] GitHub Pages aktifleştirildi

## Sorun Giderme

1. Sayfa boş görünüyorsa:
   - Dosya yollarının doğru olduğunu kontrol edin
   - Repository adının doğru formatta olduğunu kontrol edin
   - GitHub Pages'in aktif olduğunu kontrol edin
   - JavaScript konsolunda hata olup olmadığını kontrol edin

2. Dil değiştirme çalışmıyorsa:
   - Tüm metinlerde `data-tr` ve `data-en` özelliklerinin olduğunu kontrol edin
   - JavaScript konsolunda hata olup olmadığını kontrol edin

3. Responsive tasarım sorunları:
   - Chrome DevTools ile farklı ekran boyutlarını test edin
   - CSS medya sorgularını kontrol edin

4. Fotoğraf görünmüyorsa:
   - Dosya yolunun doğru olduğunu kontrol edin
   - Dosya adında boşluk veya özel karakter olmadığından emin olun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## İletişim

Sorularınız için:
- GitHub: [semihocakli](https://github.com/semihocakli)
- E-posta: semihocakli35@gmail.com
