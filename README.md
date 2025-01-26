# Kişisel CV Web Sitesi

Bu proje, modern ve responsive bir kişisel CV web sitesi şablonudur. Flask framework'ü kullanılarak geliştirilmiştir ve kolayca özelleştirilebilir bir yapıya sahiptir.

## Özellikler

- Modern ve responsive tasarım
- Türkçe/İngilizce dil desteği
- Smooth scroll animasyonları
- Mobil uyumlu tasarım
- Kolay özelleştirilebilir bölümler
- Font Awesome ikonları

## Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/semihocakli/webproject.git
cd webproject
```

2. Python sanal ortamı oluşturun ve aktif edin:
```bash
python -m venv venv
# Windows için:
venv\Scripts\activate
# Linux/Mac için:
source venv/bin/activate
```

3. Gerekli paketleri yükleyin:
```bash
pip install -r requirements.txt
```

4. Uygulamayı çalıştırın:
```bash
python app.py
```

## Özelleştirme Kılavuzu

### 1. Kişisel Bilgiler

`templates/index.html` dosyasında aşağıdaki bölümleri değiştirin:

- `<title>` etiketi: Kendi adınızla güncelleyin
- Profil resmi: `static/images/` klasörüne kendi fotoğrafınızı ekleyin ve `src` özelliğini güncelleyin
- İsim, unvan ve dil bilgisi: İlgili `<h1>` ve `<p>` etiketlerini güncelleyin

### 2. Bölümlerin Düzenlenmesi

#### Hakkımda Bölümü
- `about` section içindeki metni kendi bilgilerinizle değiştirin
- Öne çıkan özellikleri (`highlight-item`) kendi uzmanlık alanlarınıza göre düzenleyin

#### Eğitim Bölümü
- `education` section içindeki timeline öğelerini kendi eğitim bilgilerinizle güncelleyin
- Her bir eğitim için tarih, kurum ve bölüm bilgilerini ekleyin

#### Deneyim Bölümü
- `experience` section içindeki timeline öğelerini iş deneyimlerinizle güncelleyin
- Her deneyim için tarih, pozisyon ve açıklama ekleyin

#### Yetenekler Bölümü
- `skills-grid` içindeki kartları kendi yeteneklerinize göre düzenleyin
- Font Awesome ikonlarını uygun ikonlarla değiştirin

#### Sertifikalar Bölümü
- `certificates-grid` içindeki kartları kendi sertifikalarınızla güncelleyin
- Her sertifika için doğru bağlantıyı `href` özelliğinde belirtin

#### Gönüllü Çalışmalar Bölümü
- `volunteer-grid` içindeki öğeleri kendi gönüllü çalışmalarınızla güncelleyin

#### İletişim Bölümü
- Sosyal medya bağlantılarını kendi profillerinizle güncelleyin
- E-posta adresini değiştirin

### 3. Stil Özelleştirmeleri

`static/css/style.css` dosyasında aşağıdaki değişiklikleri yapabilirsiniz:

- Renk şeması: CSS değişkenlerini güncelleyin
- Font ailesi: `font-family` özelliklerini değiştirin
- Kartların tasarımı: `.card`, `.timeline-item` vb. sınıfların stillerini düzenleyin
- Responsive tasarım: Media query'leri kendi ihtiyaçlarınıza göre ayarlayın

### 4. Dil Desteği

Çift dil desteği için:
- Her metin öğesine `data-tr` ve `data-en` özelliklerini ekleyin
- Türkçe ve İngilizce metinleri bu özelliklerde belirtin

### 5. SEO Optimizasyonu

- `<meta>` etiketlerini kendi bilgilerinizle güncelleyin
- Sayfa başlığını ve açıklamasını optimize edin
- Resimler için `alt` özelliklerini ekleyin

## Deployment

### GitHub Pages'de Yayınlama

1. Repository Adını Değiştirme:
   - Repository adını `semihocakli.github.io` olarak değiştirin
   - Bu format `kullaniciadi.github.io` şeklinde olmalıdır

2. GitHub Pages Ayarları:
   - Repository'nizin Settings > Pages bölümüne gidin
   - Source kısmından "Deploy from a branch" seçeneğini seçin
   - Branch olarak "main" (veya "master") seçin
   - Save'e tıklayın

3. İndex Dosyasını Taşıma:
   - `templates/index.html` dosyasını root dizine taşıyın
   - Dosya adını `index.html` olarak bırakın

4. Dosya Yollarını Güncelleme:
   - `index.html` içindeki tüm Flask URL yapılarını (`url_for`) düz dosya yollarıyla değiştirin:
   ```html
   <!-- Eski -->
   {{ url_for('static', filename='css/style.css') }}
   
   <!-- Yeni -->
   static/css/style.css
   ```

5. Değişiklikleri Push Etme:
   ```bash
   git add .
   git commit -m "GitHub Pages için hazırlık"
   git push origin main
   ```

6. Yayınlanmayı Kontrol Etme:
   - Birkaç dakika bekleyin
   - `https://semihocakli.github.io` adresini ziyaret edin

### Diğer Platformlar

1. Heroku'ya deploy etmek için:
- `Procfile` dosyası ekleyin
- `requirements.txt` dosyasını güncelleyin
- Heroku CLI kullanarak deploy edin

2. Diğer platformlar için:
- İlgili platform dokümantasyonunu takip edin
- Gerekli konfigürasyon dosyalarını ekleyin

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## İletişim
Sorularınız için:
- E-posta: semihocakli@gmail.com