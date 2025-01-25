# Kişisel CV Web Sitesi

Modern ve responsive bir kişisel CV web sitesi. Scroll-based tasarımı ile kullanıcı dostu bir deneyim sunar.

## Özellikler

- Modern ve temiz tasarım
- Responsive layout (mobil uyumlu)
- Smooth scroll animasyonları
- Bölüm bazlı içerik organizasyonu
- Mobil menü desteği

## Kurulum

1. Sanal ortamı oluşturun ve aktifleştirin:
```bash
python -m venv venv
.\venv\Scripts\activate  # Windows için
source venv/bin/activate  # Linux/Mac için
```

2. Gerekli paketleri yükleyin:
```bash
pip install -r requirements.txt
```

3. Uygulamayı çalıştırın:
```bash
python app.py
```

4. Tarayıcınızda http://localhost:5000 adresine gidin

## Özelleştirme

- `templates/index.html`: Ana sayfa içeriğini düzenleyin
- `static/css/style.css`: Görünümü özelleştirin
- `static/js/main.js`: JavaScript fonksiyonlarını düzenleyin

## GitHub Pages'de Yayınlama

1. GitHub'da yeni bir repository oluşturun: `kullaniciadi.github.io`
2. Bu projeyi repository'e push edin
3. GitHub Pages ayarlarından yayınlayın

## Lisans

MIT 