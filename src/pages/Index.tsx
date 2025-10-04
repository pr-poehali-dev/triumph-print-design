import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black">
      <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              ТИПОГРАФИЯ ТРИУМФ
            </h1>
            <nav className="hidden md:flex gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('prices')}
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                Цены
              </button>
              <button
                onClick={() => scrollToSection('contacts')}
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                Контакты
              </button>
            </nav>
            <Button 
              onClick={() => scrollToSection('contacts')}
              className="bg-white hover:bg-gray-200 text-black font-semibold"
            >
              Связаться
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src="/img/818d0ead-fd60-44f9-80e4-f561784b7bad.jpg"
            alt="Printing"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/80" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-block mb-6">
              <span className="text-gray-300 text-sm font-semibold tracking-widest uppercase border border-gray-500 px-4 py-2 rounded-full">
                Premium Printing
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Эксклюзивная
              <span className="text-gray-300"> полиграфия</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
              Создаём премиальные печатные изделия для тех, кто ценит безупречное качество 
              и внимание к деталям. Воплощаем ваши идеи в жизнь.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('services')}
                size="lg"
                className="bg-white hover:bg-gray-200 text-black text-lg px-8 font-semibold"
              >
                Наши услуги
              </Button>
              <Button 
                onClick={() => scrollToSection('prices')}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black text-lg px-8 font-semibold"
              >
                Узнать цены
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <span className="text-gray-400 text-sm font-semibold tracking-widest uppercase">Наша экспертиза</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Премиальные услуги
          </h2>
          <p className="text-center text-gray-500 mb-12 text-lg max-w-2xl mx-auto">
            Полный спектр полиграфических решений высочайшего качества
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-[#141414] hover:bg-[#1a1a1a] border-[#2a2a2a] hover:border-white transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="FileText" size={32} className="text-black" />
                </div>
                <CardTitle className="text-2xl text-white">Визитки</CardTitle>
                <CardDescription className="text-base text-gray-500">
                  Премиальные визитные карточки на дизайнерских материалах
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#141414] hover:bg-[#1a1a1a] border-[#2a2a2a] hover:border-white transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Layers" size={32} className="text-black" />
                </div>
                <CardTitle className="text-2xl text-white">Листовки и флаеры</CardTitle>
                <CardDescription className="text-base text-gray-500">
                  Эффектные рекламные материалы с безупречной печатью
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#141414] hover:bg-[#1a1a1a] border-[#2a2a2a] hover:border-white transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="BookOpen" size={32} className="text-black" />
                </div>
                <CardTitle className="text-2xl text-white">Буклеты и брошюры</CardTitle>
                <CardDescription className="text-base text-gray-500">
                  Элегантные многостраничные издания люкс-класса
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#141414] hover:bg-[#1a1a1a] border-[#2a2a2a] hover:border-white transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Image" size={32} className="text-black" />
                </div>
                <CardTitle className="text-2xl text-white">Баннеры</CardTitle>
                <CardDescription className="text-base text-gray-500">
                  Широкоформатная печать высочайшего разрешения
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#141414] hover:bg-[#1a1a1a] border-[#2a2a2a] hover:border-white transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Calendar" size={32} className="text-black" />
                </div>
                <CardTitle className="text-2xl text-white">Календари</CardTitle>
                <CardDescription className="text-base text-gray-500">
                  Изысканные календари с индивидуальным дизайном
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-[#141414] hover:bg-[#1a1a1a] border-[#2a2a2a] hover:border-white transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Package" size={32} className="text-black" />
                </div>
                <CardTitle className="text-2xl text-white">Упаковка</CardTitle>
                <CardDescription className="text-base text-gray-500">
                  Премиальная упаковка, подчёркивающая статус бренда
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="prices" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <span className="text-gray-400 text-sm font-semibold tracking-widest uppercase">Прозрачность</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Тарифы
          </h2>
          <p className="text-center text-gray-500 mb-12 text-lg max-w-2xl mx-auto">
            Честные цены на услуги премиального качества
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="bg-[#141414] border-[#2a2a2a] hover:border-white transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-white mb-2">Визитки</CardTitle>
                <div className="text-4xl font-bold text-white mb-2">от 500₽</div>
                <CardDescription className="text-base text-gray-500">за 100 штук</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-white mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Полноцветная печать</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-white mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Мелованная бумага 300г/м²</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-white mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Ламинация матовая/глянцевая</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-white mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Срок изготовления 1-2 дня</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#141414] to-[#1f1f1f] border-white border-2 relative transform scale-105 shadow-2xl shadow-white/10">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-1.5 rounded-full text-sm font-bold">
                ПОПУЛЯРНО
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-white mb-2">Листовки А5</CardTitle>
                <div className="text-4xl font-bold text-white mb-2">от 2000₽</div>
                <CardDescription className="text-base text-gray-500">за 500 штук</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-white mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Полноцветная печать 4+4</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-white mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Мелованная бумага 130г/м²</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-white mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Любой формат до А3</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-white mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Срок изготовления 2-3 дня</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#141414] border-[#2a2a2a] hover:border-white transition-all duration-300">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-white mb-2">Баннеры</CardTitle>
                <div className="text-4xl font-bold text-white mb-2">от 350₽</div>
                <CardDescription className="text-base text-gray-500">за 1 м²</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-white mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Широкоформатная печать</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-white mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Баннерная ткань 440г/м²</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-white mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Люверсы и усиление краев</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={20} className="text-white mt-0.5 flex-shrink-0" />
                    <span className="text-gray-400">Срок изготовления 1-3 дня</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 mb-6 text-lg">
              Требуется индивидуальный расчёт? Мы предоставим персональное предложение
            </p>
            <Button 
              onClick={() => scrollToSection('contacts')}
              size="lg"
              className="bg-white hover:bg-gray-200 text-black font-semibold"
            >
              Получить консультацию
            </Button>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <span className="text-gray-400 text-sm font-semibold tracking-widest uppercase">Свяжитесь</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Контакты
          </h2>
          <p className="text-center text-gray-500 mb-12 text-lg max-w-2xl mx-auto">
            Выберите удобный способ связи
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <Card className="bg-[#141414] border-[#2a2a2a]">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Оставьте заявку</CardTitle>
                  <CardDescription className="text-gray-500">Мы свяжемся с вами в течение 15 минут</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" className="bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-gray-600 focus:border-white" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" className="bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-gray-600 focus:border-white" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" className="bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-gray-600 focus:border-white" />
                    </div>
                    <div>
                      <Textarea placeholder="Опишите ваш проект" rows={4} className="bg-[#1a1a1a] border-[#2a2a2a] text-white placeholder:text-gray-600 focus:border-white" />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full bg-white hover:bg-gray-200 text-black font-semibold"
                    >
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={28} className="text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-1">Телефон</h3>
                  <p className="text-gray-300 text-lg">+7 (902)-476-65-05</p>
                  <p className="text-gray-500">Пн-Пт: 10:00 - 17:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={28} className="text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-1">Email</h3>
                  <p className="text-gray-300 text-lg">info@triumf-print.ru</p>
                  <p className="text-gray-500">Ответим в течение 30 минут</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-white to-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={28} className="text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white mb-1">Адрес</h3>
                  <p className="text-gray-300 text-lg">г. Москва, ул. Печатников, д. 15</p>
                  <p className="text-gray-500">м. Полиграфическая, 3 мин пешком</p>
                </div>
              </div>

              <div className="pt-6">
                <img
                  src="/img/737a8f92-66d6-4dc3-9f63-b88ffb9e2359.jpg"
                  alt="Printing samples"
                  className="w-full rounded-lg shadow-2xl border border-[#2a2a2a]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">ТИПОГРАФИЯ ТРИУМФ</h3>
              <p className="text-gray-500">
                Премиальная полиграфия для требовательных клиентов с 2005 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4 text-white">Услуги</h4>
              <ul className="space-y-2 text-gray-500">
                <li className="hover:text-white transition-colors cursor-pointer">Визитки премиум</li>
                <li className="hover:text-white transition-colors cursor-pointer">Листовки и флаеры</li>
                <li className="hover:text-white transition-colors cursor-pointer">Буклеты люкс</li>
                <li className="hover:text-white transition-colors cursor-pointer">Баннеры</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4 text-white">Контакты</h4>
              <ul className="space-y-2 text-gray-500">
                <li className="hover:text-white transition-colors">+7 (495) 123-45-67</li>
                <li className="hover:text-white transition-colors">info@triumf-print.ru</li>
                <li>г. Москва, ул. Печатников, д. 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-gray-600">
            <p>© 2024 Типография Триумф. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;